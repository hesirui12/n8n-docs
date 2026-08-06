/**
 * n8n 官方文档站 · 1:1 还原构建器（GitBook 风格）
 * -------------------------------------------------
 * 读取 ../docs/docs/（官方仓库克隆）全部 markdown：
 *   - SUMMARY.md 生成导航目录树
 *   - 展开 {% include %}（相对路径，递归）、转换 {% hint/tabs/code/step %} 等 GitBook 语法
 *   - 剥离 YAML frontmatter，.md 链接改写为 .html，图片保持原路径
 *   - 界面中文化；核心章节优先渲染本地化中文版（../n8n-官方中文/ 镜像目录）
 * 输出到 ./dist/official/（附 official.css / official-app.js）
 *
 * 用法：bun run build:official
 */
import { marked } from 'marked';
import { mkdir, readFile, writeFile, cp, readdir } from 'node:fs/promises';
import { join, dirname, relative } from 'node:path';
import { existsSync, statSync } from 'node:fs';

const ROOT = import.meta.dir;                       // site/
const OFFICIAL = join(ROOT, '..', 'docs', 'docs');  // 官方克隆源
const ZH = join(ROOT, '..', 'n8n-官方中文');        // 本地化中文版镜像目录
const DIST = join(ROOT, 'dist', 'official');        // 输出

/* 板块顺序 = docs.n8n.io 顶部导航顺序 */
const SECTIONS = [
  { dir: 'get-started',          zh: '入门',   en: 'Get started' },
  { dir: 'deploy',               zh: '部署',   en: 'Deploy' },
  { dir: 'build',                zh: '构建',   en: 'Build' },
  { dir: 'integrations',         zh: '节点',   en: 'Nodes' },
  { dir: 'connect',              zh: '连接',   en: 'Connect' },
  { dir: 'administer',           zh: '管理',   en: 'Administer' },
  { dir: 'contribute',           zh: '贡献',   en: 'Contribute' },
  { dir: 'privacy-and-security', zh: '安全',   en: 'Privacy & Security' },
  { dir: 'changelog',            zh: '更新',   en: 'Changelog' },
];

const IMG_EXT = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.ico', '.avif']);

/* ------------------------------------------------------------------ */
/* 工具                                                                */
/* ------------------------------------------------------------------ */
function slug(text: string): string {
  return text.normalize('NFKC').toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

function toPlainText(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

async function walk(dir: string, base = dir): Promise<string[]> {
  const out: string[] = [];
  let entries: string[];
  try { entries = await readdir(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...await walk(full, base));
    } else if (e.isFile()) {
      out.push(relative(base, full).replace(/\\/g, '/'));
    }
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* GitBook 语法预处理                                                  */
/* ------------------------------------------------------------------ */
function resolveIncludePath(rawPath: string, fromDir: string): string | null {
  const candidates = [
    join(fromDir, rawPath),
    join(OFFICIAL, rawPath),
    join(OFFICIAL, 'reusable-content', rawPath.replace(/^\.gitbook\//, '.gitbook/')),
    join(OFFICIAL, 'reusable-content', rawPath),
  ];
  for (const c of candidates) {
    try { if (existsSync(c) && statSync(c).isFile()) return c; } catch { /* noop */ }
  }
  return null;
}

function expandIncludes(md: string, fromDir: string, depth = 0): string {
  if (depth > 10) return md;
  return md.replace(/\{%\s*include\s+"([^"]+)"\s*%\}/g, (_m, p: string) => {
    if (/^https?:\/\//.test(p)) return '';
    const file = resolveIncludePath(p, fromDir);
    if (!file) return '';
    try { return expandIncludes(readFile(file, 'utf-8').replace(/\r\n/g, '\n'), dirname(file), depth + 1); } catch { return ''; }
  });
}

function convertGitbookTags(md: string): string {
  md = md.replace(/\{%\s*hint\s+style="([^"]+)"\s*%\}/g, (_m, s) => `<div class="gb-hint gb-${s}">`);
  md = md.replace(/\{%\s*endhint\s*%\}/g, '</div>');
  md = md.replace(/\{%\s*tabs\s*%\}/g, '<div class="gb-tabs" data-tabs>');
  md = md.replace(/\{%\s*tab\s+title="([^"]*)"\s*%\}/g, (_m, t) => `<button type="button" class="gb-tab-btn" data-tab="${t.replace(/"/g, '&quot;')}">${t}</button>`);
  md = md.replace(/\{%\s*content\s*%\}/g, '</button><div class="gb-tab-panel">');
  md = md.replace(/\{%\s*endcontent\s*%\}/g, '</div>');
  md = md.replace(/\{%\s*endtab\s*%\}/g, '');
  md = md.replace(/\{%\s*endtabs\s*%\}/g, '</div>');
  md = md.replace(/\{%\s*code\s*%\}/g, '<pre><code>');
  md = md.replace(/\{%\s*endcode\s*%\}/g, '</code></pre>');
  md = md.replace(/\{%\s*stepper\s*%\}/g, '<ol class="gb-steps">');
  md = md.replace(/\{%\s*step\s*%\}/g, '<li>');
  md = md.replace(/\{%\s*endstep\s*%\}/g, '</li>');
  md = md.replace(/\{%\s*endstepper\s*%\}/g, '</ol>');
  // 其余未知 GitBook 块：去掉标签保留内部内容
  md = md.replace(/\{%\s*(end)?(file|embed|column|columns|swagger|api-method|api-path|api-query|api-body|api-header|api-response|endcolumn|endcolumns)\s*[^%]*%\}/g, '');
  md = md.replace(/\{%\s*(file|embed)\s+[^%]*%\}/g, '');
  md = md.replace(/\{%\s*@[^%]*%\}/g, ''); // n8n-blocks 嵌入块（workflow-demo 等）
  md = md.replace(/\{%\s*[a-z_]+\s*[^%]*%\}/g, '');
  return md;
}

function stripFrontmatter(md: string): { body: string; title: string } {
  const m = md.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return { body: md, title: '' };
  const fm = m[1];
  const title = fm.match(/^title:\s*(.+)$/m)?.[1]?.trim().replace(/^["']|["']$/g, '') ?? '';
  return { body: md.slice(m[0].length), title };
}

/** 链接重写：相对 .md → .html（保持相对当前文件）；图片原样 */
function rewriteLinks(html: string): string {
  return html.replace(/(href|src)="([^"]*)"/g, (m, attr: string, url: string) => {
    if (/^(https?:|mailto:|tel:|data:|#|\/)/i.test(url)) return m;
    const [path, hash] = url.split('#');
    if (!path) return m;
    const ext = (path.match(/\.\w+$/) || [''])[0].toLowerCase();
    if (attr === 'href' && ext === '.md') {
      const p = path.startsWith('./') ? path.slice(2) : path;
      return `href="${p.slice(0, -3)}.html${hash ? '#' + hash : ''}"`;
    }
    return m;
  });
}

/* ------------------------------------------------------------------ */
/* SUMMARY 导航                                                        */
/* ------------------------------------------------------------------ */
type NavNode = { title: string; file: string; children: NavNode[] };

function parseSummary(content: string): NavNode[] {
  const nodes: NavNode[] = [];
  const stack: { indent: number; node: NavNode }[] = [];
  for (const line of content.replace(/\r/g, '').split('\n')) {
    const m = line.match(/^(\s*)\* \[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) continue;
    const indent = Math.floor(m[1].length / 2);
    const node: NavNode = { title: m[2], file: m[3], children: [] };
    while (stack.length && stack[stack.length - 1].indent >= indent) stack.pop();
    if (stack.length) stack[stack.length - 1].node.children.push(node);
    else nodes.push(node);
    stack.push({ indent, node });
  }
  return nodes;
}

/* ------------------------------------------------------------------ */
/* 渲染                                                                */
/* ------------------------------------------------------------------ */
function renderPage(md: string, usedIds: Set<string>) {
  const renderer = new marked.Renderer();
  renderer.heading = (text: string, depth: number) => {
    const clean = text.replace(/<[^>]+>/g, '').trim();
    let id = slug(clean);
    while (usedIds.has(id)) id = `${id}-1`;
    usedIds.add(id);
    return `<h${depth} id="${id}"><a class="gb-anchor" href="#${id}" aria-hidden="true"></a>${text}</h${depth}>`;
  };
  const html = rewriteLinks(marked.parse(md, { renderer, gfm: true }) as string);
  const headings: { id: string; text: string; depth: number }[] = [];
  for (const m of html.matchAll(/<h([23]) id="([^"]+)">(.*?)<\/h\1>/g)) {
    headings.push({ id: m[2], text: toPlainText(m[3]), depth: Number(m[1]) });
  }
  return { html, headings };
}

function navTarget(sec: string, file: string): string {
  const f = file.endsWith('.md') ? file : `${file}.md`;
  if (f.endsWith('README.md')) return `${sec}/index.html`;
  return `${sec}/${f.slice(0, -3)}.html`;
}

function renderNavTree(nodes: NavNode[], sec: string, currentRel: string): string {
  const out: string[] = [];
  for (const n of nodes) {
    if (n.children.length) {
      const kids = renderNavTree(n.children, sec, currentRel);
      out.push(`<details class="ob-tree-group"><summary>${n.title}</summary>${kids}</details>`);
    } else {
      const target = navTarget(sec, n.file);
      const cls = n.file === currentRel ? ' class="ob-tree-link active"' : ' class="ob-tree-link"';
      out.push(`<a${cls} href=".${target}">${n.title}</a>`);
    }
  }
  return out.join('\n');
}

function layout(opts: {
  title: string;
  body: string;
  sidebar: string;
  toc: string;
  sectionNav: string;
  langBadge: string;
  relPrefix: string;
  searchIndexJson: string;
}): string {
  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${opts.title} · n8n 官方文档</title>
<meta name="description" content="n8n 官方文档（中文本土化版）">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='18' fill='%23ea4b71'/%3E%3Ctext x='50' y='68' font-size='42' font-family='Arial' font-weight='bold' fill='white' text-anchor='middle'%3En8n%3C/text%3E%3C/svg%3E">
<link rel="stylesheet" href="${opts.relPrefix}official.css">
</head>
<body>
<header class="ob-header">
  <div class="ob-header-inner">
    <a class="ob-brand" href="${opts.relPrefix}get-started/index.html">
      <span class="ob-brand-logo">n8n</span>
      <span class="ob-brand-text"><strong>官方文档</strong><em>Docs · 1:1 还原</em></span>
    </a>
    <nav class="ob-section-nav" aria-label="板块">${opts.sectionNav}</nav>
    <div class="ob-header-right">
      <button class="ob-search-btn" id="ob-search-toggle" type="button">搜索… <kbd>⌘K</kbd></button>
      <a class="ob-switch" href="${opts.relPrefix}index.html">← 小白教程（新版）</a>
    </div>
  </div>
</header>

<div class="ob-layout">
  <aside class="ob-sidebar" id="ob-sidebar">
    <div class="ob-search">
      <input id="ob-search-input" type="search" placeholder="搜索官方文档…  /" autocomplete="off" aria-label="搜索">
      <div id="ob-search-results" class="ob-search-results" hidden></div>
    </div>
    <nav class="ob-tree" id="ob-tree">${opts.sidebar}</nav>
  </aside>

  <main class="ob-content">
    <button class="ob-menu-toggle" id="ob-menu-toggle" type="button">☰ 目录</button>
    ${opts.langBadge}
    <article class="ob-markdown">${opts.body}</article>
    <footer class="ob-footer">
      <p>本页内容基于 <a href="https://github.com/n8n-io/n8n-docs" target="_blank" rel="noopener">n8n 官方手册</a>（fair-code）整理 · 仅供学习交流</p>
    </footer>
  </main>

  <aside class="ob-toc" id="ob-toc">
    <div class="ob-toc-title">本页目录</div>
    <nav>${opts.toc}</nav>
  </aside>
</div>

<div class="ob-modal" id="ob-modal" hidden>
  <div class="ob-modal-box">
    <input id="ob-modal-input" type="search" placeholder="搜索全部官方文档…" autocomplete="off">
    <div id="ob-modal-results"></div>
  </div>
</div>

<script>var SEARCH_INDEX = ${opts.searchIndexJson};</script>
<script src="${opts.relPrefix}official-app.js"></script>
</body>
</html>`;
}

/* ------------------------------------------------------------------ */
/* 构建                                                               */
/* ------------------------------------------------------------------ */
async function build() {
  await Bun.$`rm -rf ${DIST}`.quiet();
  await mkdir(join(DIST), { recursive: true });

  // 0. 复制本构建器配套静态资源到 official/ 根
  await copyFile(join(ROOT, 'official.css'), join(DIST, 'official.css'));
  await copyFile(join(ROOT, 'official-app.js'), join(DIST, 'official-app.js'));

  // 1. 收集源文件
  const allFiles = await walk(OFFICIAL);
  const mdFiles = allFiles.filter((f) => f.endsWith('.md') && !f.startsWith('reusable-content/'));
  console.log(`📄 发现 ${mdFiles.length} 个 markdown 源文件`);

  // 2. 复制资源（图片等，保持目录结构）
  let copied = 0;
  for (const f of allFiles) {
    if (f.endsWith('.md')) continue;
    const src = join(OFFICIAL, f);
    const dest = join(DIST, f);
    try {
      await mkdir(dirname(dest), { recursive: true });
      await cp(src, dest);
      copied++;
    } catch { /* noop */ }
  }
  console.log(`🖼️ 复制资源文件 ${copied} 个`);

  // 3. 解析 SUMMARY
  const navBySection: Record<string, NavNode[]> = {};
  for (const sec of SECTIONS) {
    try { navBySection[sec.dir] = parseSummary(await readFile(join(OFFICIAL, sec.dir, 'SUMMARY.md'), 'utf-8')); }
    catch { navBySection[sec.dir] = []; }
  }

  // 4. 侧边栏全树 + 板块导航（相对 official 根，页面内用 relPrefix 前缀）
  const sectionNavHtml = (cur: string) => SECTIONS.map((s) =>
    `<a href="${s.dir}/index.html"${s.dir === cur ? ' class="active"' : ''}>${s.zh}</a>`).join('\n');
  const sidebarAllHtml = SECTIONS.map((s) => {
    const nodes = navBySection[s.dir];
    if (!nodes.length) return '';
    return `<details class="ob-tree-section" data-section="${s.dir}"${s.dir === 'get-started' ? ' open' : ''}><summary>${s.zh} <em>${s.en}</em></summary>${renderNavTree(nodes, s.dir, '')}</details>`;
  }).join('\n');

  // 5. 渲染所有页面（先全部渲染到内存，索引全量生成后统一回填）
  const searchIndex: { t: string; u: string; s: string }[] = [];
  const pagesToWrite: { out: string; html: string }[] = [];
  let total = 0;

  for (const sec of SECTIONS) {
    const secFiles = mdFiles.filter((f) => f.startsWith(sec.dir + '/') && f !== `${sec.dir}/SUMMARY.md`);
    for (const rel of secFiles) {
      const zhPath = join(ZH, rel);
      const enPath = join(OFFICIAL, rel);
      const isZh = existsSync(zhPath);
      const srcPath = isZh ? zhPath : enPath;
      const raw = (await readFile(srcPath, 'utf-8')).replace(/\r\n/g, '\n');
      const { body, title: fmTitle } = stripFrontmatter(raw);
      const expanded = convertGitbookTags(expandIncludes(body, dirname(srcPath)));
      const { html, headings } = renderPage(expanded, new Set<string>());

      const h1 = (html.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1] ?? '').replace(/<[^>]+>/g, '').trim();
      const title = h1 || fmTitle || rel.split('/').pop()!.replace('.md', '');

      // 输出路径（rel 已含板块目录；README → 板块 index.html）
      const outFile = rel.endsWith('README.md') ? `${sec.dir}/index.html` : rel.slice(0, -3) + '.html';
      const relPrefix = '../'.repeat(outFile.split('/').length - 1); // 到 official 根的相对前缀

      const u = outFile;
      searchIndex.push({ t: title, u, s: toPlainText(html).slice(0, 220) });

      const toc = headings.length >= 3
        ? headings.map((x) => `<a class="ob-toc-${x.depth === 2 ? 'h2' : 'h3'}" href="#${x.id}">${x.text}</a>`).join('\n')
        : '<span class="ob-toc-empty">（无子章节）</span>';

      const sidebar = renderNavTree(navBySection[sec.dir], sec.dir, rel.slice(sec.dir.length + 1));
      const langBadge = isZh
        ? `<div class="ob-lang-badge"><span>🌐 本页已本地化（小白中文版）</span><a href="${relPrefix}${u.replace(/\.html$/, '-en.html')}">English 原文</a></div>`
        : '<div class="ob-lang-badge en"><span>📄 English Original · 官方英文原文</span></div>';

      pagesToWrite.push({
        out: outFile,
        html: layout({
          title,
          body: html,
          sidebar,
          toc,
          sectionNav: sectionNavHtml(sec.dir),
          langBadge,
          relPrefix,
          searchIndexJson: 'null',
        }),
      });
      total++;

      // 中文版页面同时渲染英文原文（供 -en.html 链接）
      if (isZh) {
        const enRaw = (await readFile(enPath, 'utf-8')).replace(/\r\n/g, '\n');
        const { body: enBody } = stripFrontmatter(enRaw);
        const enExpanded = convertGitbookTags(expandIncludes(enBody, dirname(enPath)));
        const { html: enHtml, headings: enHeadings } = renderPage(enExpanded, new Set<string>());
        const enToc = enHeadings.length >= 3
          ? enHeadings.map((x) => `<a class="ob-toc-${x.depth === 2 ? 'h2' : 'h3'}" href="#${x.id}">${x.text}</a>`).join('\n')
          : '<span class="ob-toc-empty">（无子章节）</span>';
        const enOut = outFile.replace(/\.html$/, '-en.html');
        pagesToWrite.push({
          out: enOut,
          html: layout({
            title: `${title} (English)`,
            body: enHtml,
            sidebar,
            toc: enToc,
            sectionNav: sectionNavHtml(sec.dir),
            langBadge: `<div class="ob-lang-badge"><span>English Original</span><a href="${relPrefix}${u}">← 中文版</a></div>`,
            relPrefix,
            searchIndexJson: 'null',
          }),
        });
        total++;
      }
    }
    console.log(`   ${sec.zh}(${sec.en}): ${secFiles.length} 篇`);
  }

  // 6. 写入全部页面（回填完整搜索索引）
  const indexJson = JSON.stringify(searchIndex);
  for (const p of pagesToWrite) {
    await mkdir(join(DIST, dirname(p.out)), { recursive: true });
    await writeFile(join(DIST, p.out), p.html.replace('var SEARCH_INDEX = null;', `var SEARCH_INDEX = ${indexJson};`));
  }

  // 7. 板块 index.html（第一项若非 README 则生成跳转页）
  for (const sec of SECTIONS) {
    const nodes = navBySection[sec.dir];
    const first = nodes[0];
    const firstTarget = first ? navTarget(sec.dir, first.file) : `${sec.dir}/index.html`;
    if (!existsSync(join(DIST, sec.dir, 'index.html'))) {
      await mkdir(join(DIST, sec.dir), { recursive: true });
      await writeFile(join(DIST, sec.dir, 'index.html'),
        `<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=./${firstTarget.split('/')[1]}"></head><body><a href="./${firstTarget.split('/')[1]}">进入 ${sec.zh}</a></body></html>`);
    }
  }

  // 7. official 根 index.html → 入门
  await writeFile(join(DIST, 'index.html'),
    `<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=./get-started/index.html"></head><body><a href="./get-started/index.html">n8n 官方文档</a></body></html>`);

  console.log(`✅ 官方版构建完成 → ${DIST}（${total} 页）`);
}

import { copyFile } from 'node:fs/promises';
await build();
