# site/ · n8n 入门教程站点生成器（Bun）

轻量级静态站点生成器：把 `../n8n-入门教程/` 的 markdown 渲染成 **ark-ui（endfield · moderate）风格**静态手册站点。

## 特性 / Features

- ⚡ **纯 Bun**：单脚本 SSG（`build.ts`）+ 单脚本预览服务器（`serve.ts`），零配置
- 🎨 **ark-ui 视觉**：endfield 家族（米白纸面 + 炭黑墨 + 方几何/1px 规则/字段码编排），强调色为 n8n 品牌粉；`data-ark-theme` / `data-ark-depth` 标注
- 📖 **手册外壳**：浅色侧栏（分组 + 章节序号 + 当前页高亮）、底部炭黑坞、右侧本页目录（滚动高亮）
- 🔍 **内置站内搜索**：构建时生成 `search-index.json`，前端零依赖 JS 实时过滤（快捷键 `/`）
- 🌐 **中英对照保留**：markdown 里的中英对照内容原样渲染
- 📱 **响应式**：窄屏侧栏转抽屉 + 汉堡按钮；TOC 按宽度收起
- 🔗 **自动处理**：章节间 `.md` 链接自动改写为 `.html`；标题自动生成锚点 id（支持中文）

## 快速开始 / Quick Start

```bash
cd site
bun install        # 安装依赖（marked）
bun run build      # 构建站点 → dist/
bun run serve      # 本地预览 → http://localhost:3000
```

也可一条命令：`bun run dev`（构建 + 启动）。

## 目录结构 / Structure

```
site/
├── build.ts        # 静态站点生成器（读取 ../n8n-入门教程/*.md → dist/）
├── serve.ts        # Bun 本地预览服务器（静态文件服务）
├── site.css        # ark-ui endfield 样式（design tokens + 响应式）
├── app.js          # 客户端交互（搜索、移动端菜单、TOC 滚动高亮）
├── package.json
└── dist/           # 构建产物（部署时上传这个目录即可）
```

## 定制指南 / Customization

| 想改什么 | 改哪里 |
|---------|--------|
| 手册目录顺序/章节标题 | `build.ts` 顶部 `PAGES` 数组 |
| 顶栏链接、品牌名、版本号 | `build.ts` 的 `layout()` 模板 |
| 配色 / 强调色（n8n 粉） | `site.css` 的 `:root` 变量 |
| 新增 markdown 章节 | 写入 `../n8n-入门教程/` 并在 `PAGES` 中登记 |
| 部署 | 推送 `main` → GitHub Actions 自动构建并发布 GitHub Pages |

## 已实现能力 / Implemented

- [x] markdown → 自定义样式 HTML（表格、代码块、引用块、任务列表由 marked GFM 支持）
- [x] 相对 `.md` 链接 → `.html` 自动改写
- [x] 标题锚点（中文 slug）+ 锚点悬停「#」链接
- [x] 侧边栏手册导航（分组、章节序号、当前页高亮）
- [x] 右侧本页目录 + 滚动高亮（scrollspy）
- [x] 底部上一章 / 下一章导航
- [x] 站内搜索（构建时索引 + 前端过滤）
- [x] 移动端响应式（侧边栏抽屉）
- [x] 图片资源自动复制（`assets/`）
- [x] 无障碍：`:focus-visible`、语义地标、`prefers-reduced-motion`
