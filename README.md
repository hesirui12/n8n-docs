# n8n 入门教程（中英对照 · 本土版）

基于 [n8n 官方手册](https://github.com/n8n-io/n8n-docs)（fair-code）整理的中文零基础入门教程，由 **Bun 静态站点生成器**渲染。站点含**双版本**，可一键切换：

| 版本 | 地址 | 说明 |
|------|------|------|
| **新版 · 小白教程** | `/` | 17 章中英对照入门教程（ark-ui endfield 风格） |
| **旧版 · 官方文档** | `/official/` | docs.n8n.io 1:1 还原（GitBook 风格，全站 1300+ 页）；核心章节中文本土化，其余保留英文原文 |

在线地址：<https://hesirui.apexyun.cn/n8n-docs/>（GitHub Pages，经 GitHub Actions 自动构建部署）

## 目录结构

```
├── n8n-入门教程/        # 新版教程 markdown 源（中英对照，17 章）
├── n8n-官方中文/        # 官方文档核心章节的中文本土化镜像（37 篇）
├── site/               # Bun SSG：build.ts（新版）+ build-official.ts（官方版）
│   └── dist/           # 构建产物（由 CI 构建，不入库）
├── docs/               # 官方手册完整克隆（55M，仅本地参考与官方版构建，不入库）
└── .github/workflows/  # GitHub Pages 部署工作流
```

## 本地开发

```bash
cd site
bun install
bun run build          # 构建新版（18 页）
bun run build:official # 构建官方版（1336 页）
bun run build:all      # 两版一起构建
bun run serve          # 预览 → http://localhost:3000
```

## 部署

推送到 `main` 即触发 [GitHub Actions](.github/workflows/pages.yml)：`bun install && bun run build` → 上传 `site/dist` → 部署 GitHub Pages（已配置自定义域名 `hesirui.apexyun.cn`）。
