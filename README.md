# n8n 入门教程（中英对照 · 本土版）

基于 [n8n 官方手册](https://github.com/n8n-io/n8n-docs)（fair-code）整理的中文零基础入门教程，由 **Bun 静态站点生成器**渲染为 ark-ui（endfield · moderate）风格手册站点。

## 站点

在线地址：<https://hesirui.apexyun.cn/n8n-docs/>（GitHub Pages，经 GitHub Actions 自动构建部署）

- 7 个页面（首页 + 6 章）
- 内置站内搜索（`/` 快捷键）
- 右侧目录滚动高亮
- 桌面 / 移动端响应式（侧栏抽屉）

## 目录结构

```
├── n8n-入门教程/        # 教程 markdown 源（中英对照）
├── site/               # Bun SSG：build.ts + site.css + app.js + serve.ts
│   └── dist/           # 构建产物（由 CI 构建，不入库）
├── docs/               # 官方手册完整克隆（87M，仅本地参考，不入库）
└── .github/workflows/  # GitHub Pages 部署工作流
```

## 本地开发

```bash
cd site
bun install
bun run build   # 构建 → site/dist/
bun run serve   # 预览 → http://localhost:3000
```

## 部署

推送到 `main` 即触发 [GitHub Actions](.github/workflows/pages.yml)：`bun install && bun run build` → 上传 `site/dist` → 部署 GitHub Pages（已配置自定义域名 `hesirui.apexyun.cn`）。
