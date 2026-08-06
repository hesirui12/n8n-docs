/**
 * n8n 入门教程 · 轻量级静态站点生成器（Bun）
 * -------------------------------------------------
 * 将 ../n8n-入门教程/*.md 渲染为 ark-ui（endfield · moderate）风格手册站点，输出到 ./dist/
 *
 * 用法：
 *   bun run build     构建站点（输出 dist/）
 *   bun run serve     本地预览（http://localhost:3000）
 */
import { marked } from 'marked';
import { mkdir, readFile, writeFile, cp, copyFile } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = import.meta.dir;                      // site/
const SRC = join(ROOT, '..', 'n8n-入门教程');      // 教程 markdown 源
const DIST = join(ROOT, 'dist');                   // 输出目录

/* ------------------------------------------------------------------ */
/* 1. 页面元数据：顺序 = 手册目录顺序                                      */
/* ------------------------------------------------------------------ */
const PAGES = [
  /* —— 开始 Getting Started —— */
  { file: 'README.md',               out: 'index.html',                label: '首页',                en: 'Overview',                group: '开始' },
  { file: '01-认识n8n.md',           out: '01-认识n8n.html',           label: '01 · 认识 n8n',       en: 'Concepts & Glossary',     group: '开始' },
  { file: '02-选择使用方式与安装.md', out: '02-选择使用方式与安装.html', label: '02 · 选择与安装',     en: 'Choose & Install',        group: '开始' },
  { file: '03-创建第一个工作流.md',   out: '03-创建第一个工作流.html',   label: '03 · 第一个工作流',   en: 'Build Your First Workflow', group: '开始' },
  /* —— 核心 Core —— */
  { file: '04-数据与表达式.md',       out: '04-数据与表达式.html',       label: '04 · 数据与表达式',   en: 'Data & Expressions',      group: '核心' },
  { file: '05-编辑器界面与操作技巧.md', out: '05-编辑器界面与操作技巧.html', label: '05 · 编辑器与操作',   en: 'Editor & Shortcuts',      group: '核心' },
  { file: '06-保存发布与版本管理.md',  out: '06-保存发布与版本管理.html',  label: '06 · 保存与发布',     en: 'Save & Publish',          group: '核心' },
  { file: '07-执行与调试.md',         out: '07-执行与调试.html',         label: '07 · 执行与调试',     en: 'Executions & Debug',      group: '核心' },
  { file: '08-流程逻辑进阶.md',       out: '08-流程逻辑进阶.html',       label: '08 · 流程逻辑进阶',   en: 'Flow Logic Deep Dive',    group: '核心' },
  /* —— 数据与代码 Data & Code —— */
  { file: '09-凭证管理.md',           out: '09-凭证管理.html',           label: '09 · 凭证管理',       en: 'Credentials',             group: '数据与代码' },
  { file: '10-数据转换与常用节点.md',  out: '10-数据转换与常用节点.html',  label: '10 · 数据转换与节点', en: 'Transform & Data Nodes',  group: '数据与代码' },
  { file: '11-Code节点与内置方法.md',  out: '11-Code节点与内置方法.html',  label: '11 · Code 节点',      en: 'Code Node & Methods',     group: '数据与代码' },
  /* —— AI 进阶 AI —— */
  { file: '12-AI工作流入门.md',       out: '12-AI工作流入门.html',       label: '12 · AI 工作流入门',  en: 'AI Workflows Intro',      group: 'AI 进阶' },
  { file: '13-AI辅助构建与模板.md',   out: '13-AI辅助构建与模板.html',   label: '13 · AI 构建与模板',  en: 'AI Builders & Templates', group: 'AI 进阶' },
  /* —— 运维与扩展 Ops & Extend —— */
  { file: '14-管理工作流与团队协作.md', out: '14-管理工作流与团队协作.html', label: '14 · 管理与协作',     en: 'Manage & Collaborate',    group: '运维与扩展' },
  { file: '15-部署升级与运维.md',      out: '15-部署升级与运维.html',      label: '15 · 部署与运维',     en: 'Deploy & Operate',        group: '运维与扩展' },
  { file: '16-API-CLI与MCP.md',       out: '16-API-CLI与MCP.html',       label: '16 · API / CLI / MCP',en: 'API · CLI · MCP',         group: '运维与扩展' },
  /* —— 附录 Appendix —— */
  { file: '17-常见问题与学习路线.md',  out: '17-常见问题与学习路线.html',  label: '17 · 排查与学习路线', en: 'Troubleshooting & Paths', group: '附录' },
];

/* ------------------------------------------------------------------ */
/* 2. 工具函数                                                          */
/* ------------------------------------------------------------------ */
/** GitHub 风格 slug：保留中文/字母数字，其余转连字符 */
function slug(text: string): string {
  return text
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

/** 把正文里的相对 .md 链接改写为 .html（不动 http/https/锚点） */
function rewriteMdLinks(html: string): string {
  return html.replace(/href="([^"]*?\.md)(#[^"]*)?"/g, (m, p1: string, p2?: string) => {
    if (/^(https?:|mailto:|file:)/i.test(p1)) return m;
    return `href="${p1.slice(0, -3)}.html${p2 ?? ''}"`;
  });
}

/** HTML → 纯文本（用于搜索索引） */
function toPlainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** 渲染一页 markdown，返回正文 HTML + 标题信息 */
function renderPage(md: string, usedIds: Set<string>) {
  const renderer = new marked.Renderer();
  // marked v12 签名：heading(text, depth, raw)
  renderer.heading = (text: string, depth: number) => {
    const clean = text
      .replace(/<[^>]+>/g, '')
      .replace(/&#39;|&apos;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .trim();
    let id = slug(clean);
    while (usedIds.has(id)) id = `${id}-1`;
    usedIds.add(id);
    return `<h${depth} id="${id}"><a class="anchor" href="#${id}" aria-hidden="true"></a>${text}</h${depth}>`;
  };
  const html = rewriteMdLinks(marked.parse(md, { renderer }) as string);
  const headings: { id: string; text: string; depth: number }[] = [];
  for (const m of html.matchAll(/<h([23]) id="([^"]+)">(.*?)<\/h\1>/g)) {
    headings.push({ id: m[2], text: toPlainText(m[3]), depth: Number(m[1]) });
  }
  return { html, headings };
}

/* ------------------------------------------------------------------ */
/* 3. 页面模板（ark-ui · endfield / moderate 手册外壳）                  */
/* ------------------------------------------------------------------ */
function layout(opts: {
  title: string;
  body: string;
  nav: string;
  toc: string;
  prevNext: string;
  strip: string;
  version: string;
  searchIndexJson: string;
}): string {
  return `<!doctype html>
<html lang="zh-CN" data-ark-theme="endfield" data-ark-depth="moderate">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${opts.title}</title>
<meta name="description" content="n8n 零基础入门教程（中英对照 · 本土版）—— 认识概念、安装、第一个工作流、核心概念、进阶与排查。">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='4' fill='%23ea4b71'/%3E%3Ctext x='50' y='68' font-size='42' font-family='Arial' font-weight='bold' fill='white' text-anchor='middle'%3En8n%3C/text%3E%3C/svg%3E">
<link rel="stylesheet" href="site.css">
</head>
<body>
<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="index.html">
      <span class="brand-logo">n8n</span>
      <span class="brand-stack">
        <span class="brand-title">入门教程</span>
        <span class="brand-meta">Beginner Tutorial · 中英对照</span>
      </span>
    </a>
    <nav class="header-links" aria-label="站外链接">
      <a href="https://docs.n8n.io/" target="_blank" rel="noopener">官方文档</a>
      <a href="https://github.com/n8n-io/n8n-docs" target="_blank" rel="noopener">官方手册仓库</a>
      <span class="ver-chip">Ver ${opts.version}</span>
    </nav>
  </div>
</header>

<div class="layout">
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-search">
      <input id="search-input" type="search" placeholder="搜索手册…  /" autocomplete="off" aria-label="搜索手册">
      <div id="search-results" class="search-results" hidden></div>
    </div>
    <div class="nav-scroll">
      <nav class="nav" id="nav" aria-label="手册目录">${opts.nav}</nav>
    </div>
    <div class="sidebar-footer">
      <span class="sf-code">Field / Reference</span>
      <p>基于 <a href="https://github.com/n8n-io/n8n-docs" target="_blank" rel="noopener">n8n 官方手册</a>（fair-code）中英对照整理，仅供学习交流</p>
    </div>
  </aside>

  <main class="content">
    <button class="menu-toggle" id="menu-toggle" aria-label="展开目录"><span class="mt-bar">≡</span>目录</button>
    ${opts.strip}
    <article class="markdown-body">${opts.body}</article>
    <div class="prevnext">${opts.prevNext}</div>
    <footer class="page-footer">
      <span class="pf-code">N8N Tutorial · Fair-code</span>
      <p>本教程由 n8n 官方手册中英对照整理，仅供学习交流 · <a href="https://github.com/n8n-io/n8n-docs" target="_blank" rel="noopener">官方文档</a></p>
    </footer>
  </main>

  <aside class="toc" id="toc" aria-label="本页目录">
    <div class="toc-title">本页目录 / On This Page</div>
    <nav>${opts.toc}</nav>
  </aside>
</div>

<script>var SEARCH_INDEX = ${opts.searchIndexJson};</script>
<script src="app.js"></script>
</body>
</html>`;
}

/* ------------------------------------------------------------------ */
/* 4. 构建                                                              */
/* ------------------------------------------------------------------ */
async function build() {
  await Bun.$`rm -rf ${DIST}`.quiet();
  await mkdir(join(DIST, 'assets'), { recursive: true });

  // 静态资源
  await cp(join(SRC, 'assets'), join(DIST, 'assets'), { recursive: true });
  await copyFile(join(ROOT, 'site.css'), join(DIST, 'site.css'));
  await copyFile(join(ROOT, 'app.js'), join(DIST, 'app.js'));

  // 站点版本（来自 package.json）
  const pkg = JSON.parse(await readFile(join(ROOT, 'package.json'), 'utf-8'));
  const version = pkg.version ?? '1.0.0';

  // 渲染所有页面
  const searchIndex: { t: string; u: string; h: string[]; s: string }[] = [];
  const pagesHtml: { out: string; html: string }[] = [];

  for (const page of PAGES) {
    const md = await readFile(join(SRC, page.file), 'utf-8');
    const { html: bodyHtml, headings } = renderPage(md, new Set<string>());

    const h1 = md.match(/^#\s+(.+)$/m)?.[1].trim() ?? page.label;
    searchIndex.push({ t: h1, u: page.out, h: headings.map((x) => x.text), s: toPlainText(bodyHtml).slice(0, 240) });

    // 章节条（字段码 + 分组英文）
    const idx = PAGES.indexOf(page);
    const isIndex = page.out === 'index.html';
    const stripCode = isIndex ? 'N8N / Index' : `CH-${String(idx).padStart(2, '0')} / ${page.group}`;
    const strip = `<div class="chapter-strip"><span class="cs-code">${stripCode}</span><span class="cs-group">${isIndex ? 'Overview · 总览' : `${page.en} · ${page.group}`}</span></div>`;

    // 本页目录（≥3 个子章节才显示）
    const toc = headings.length >= 3
      ? headings.map((x) => `<a class="toc-${x.depth === 2 ? 'h2' : 'h3'}" href="#${x.id}">${x.text}</a>`).join('\n')
      : '<span class="toc-empty">（无子章节）</span>';

    // 上一章 / 下一章
    const prev = PAGES[idx - 1];
    const next = PAGES[idx + 1];
    const prevNext = [
      prev
        ? `<a class="pn-box" href="${prev.out}"><span class="pn-dir">← Prev / 上一章</span><span class="pn-title">${prev.label} <em>${prev.en}</em></span></a>`
        : '<span class="pn-box pn-empty"></span>',
      next
        ? `<a class="pn-box pn-next" href="${next.out}"><span class="pn-dir">Next / 下一章 →</span><span class="pn-title">${next.label} <em>${next.en}</em></span></a>`
        : '<span class="pn-box pn-empty"></span>',
    ].join('');

    // 侧边栏导航（按分组，带章节索引）
    const groups = [...new Set(PAGES.map((p) => p.group))];
    const nav = groups
      .map((g) => {
        const items = PAGES.filter((p) => p.group === g)
          .map((p, i) => {
            const gi = PAGES.indexOf(p);
            const active = p.out === page.out ? ' class="nav-item active"' : ' class="nav-item"';
            const num = p.out === 'index.html' ? '00' : String(gi).padStart(2, '0');
            return `<a${active} href="${p.out}" data-key="${p.label} ${p.en}"><span class="nav-index">${num}</span><span><span class="nav-label">${p.label}</span><span class="nav-en">${p.en}</span></span></a>`;
          })
          .join('');
        return items ? `<div class="nav-group"><div class="nav-group-label">${g}</div>${items}</div>` : '';
      })
      .join('\n');

    const title = isIndex ? 'n8n 入门教程 · 中英对照本土版' : `${h1} · n8n 入门教程`;
    pagesHtml.push({
      out: page.out,
      html: layout({ title, body: bodyHtml, nav, toc, prevNext, strip, version, searchIndexJson: 'null' }),
    });
  }

  // 写入搜索索引，再回填到所有页面
  await writeFile(join(DIST, 'search-index.json'), JSON.stringify(searchIndex));
  const indexJson = JSON.stringify(searchIndex);
  for (const p of pagesHtml) {
    await writeFile(join(DIST, p.out), p.html.replace('var SEARCH_INDEX = null;', `var SEARCH_INDEX = ${indexJson};`));
  }

  console.log(`✅ 构建完成 → ${DIST}`);
  console.log(`   ${PAGES.length} 个页面 · ${searchIndex.length} 条搜索索引 · assets 已复制`);
}

await build();
