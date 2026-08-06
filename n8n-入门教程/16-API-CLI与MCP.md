# 16 · API、CLI 与 MCP

> **API, CLI & MCP**
>
> 官方出处：`docs/connect/README.md`、`n8n-api/README.md`、`n8n-api/authentication.md`、`n8n-cli.md`、`connect-to-n8n-mcp-server.md`、`build/ways-of-building-workflows/connect-to-n8n-mcp-server.md`

---

## 本节目标 / What You'll Learn

- 三种「程序化连接 n8n」的方式怎么选：REST API / CLI / MCP
- 创建 API Key 并用 curl 调接口
- n8n CLI：跨机器管理工作流
- Server CLI：本机运维（备份、许可证）
- MCP：让 Claude/ChatGPT 直接操作你的 n8n

---

## 1. 三种方式怎么选 / Choose Your Interface

> 官方出处：`docs/connect/README.md`

| 方式 | 是什么 | 适合 |
|------|--------|------|
| **n8n API（REST）** | 通过 HTTP 调接口管理 n8n | 搭建平台、外部系统触发/监控执行、程序化管理 |
| **n8n CLI** | 命令行客户端，包了一层 API | 脚本化、CI/CD、开发调试、AI Agent 集成 |
| **MCP Server** | 让 AI 工具（Claude、Codex 等）直接连接 n8n | 用自然语言让 AI 建/改/跑工作流 |

> 💡 三者的关系：CLI 和 MCP 底层都走 API，只是包装不同。**新手只记住「API 是地基」即可。**

## 2. n8n API 入门 / n8n Public REST API

> ⚠️ **可用性**：API 在**免费试用期不可用**，需升级付费计划（自部署付费版同样）。

**第一步：创建 API Key**

1. 登录 n8n → **Settings → n8n API**
2. **Create an API key** → 填 Label（名字）+ 过期时间（Enterprise 还可选权限范围 Scopes）
3. 复制生成的 Key——**调用时放在请求头 `X-N8N-API-KEY` 里**

**第二步：调一个接口试试**（列出所有工作流）：

```bash
curl -X 'GET' 'https://<你的实例地址>/api/v1/workflows?active=true' \
  -H 'accept: application/json' \
  -H 'X-N8N-API-KEY: <你的API-Key>'
```

**常用端点**（完整参考见 `docs/connect/n8n-api/api-reference.md`）：

| 资源 | 示例路径 |
|------|---------|
| 工作流 | `/api/v1/workflows` |
| 执行 | `/api/v1/executions` |
| 凭据 | `/api/v1/credentials` |
| 数据表 | `/api/v1/datatables` |

**两个实用入口**：

- **n8n 节点**：工作流里用 **n8n node** 调 API（配置 API Key + Base URL）
- **API Playground**：自部署版自带内置 API 调试界面（`use-an-api-playground.md`），不用装 Postman 就能试

> 💡 **小白理解**：API 就是「用代码代替鼠标点按钮」。比如你想让公司内部系统每天自动把某个工作流导出备份，就写个脚本调 API。

## 3. n8n CLI / 远程命令行客户端

> 官方出处：`docs/connect/n8n-cli.md`（Beta）

**n8n CLI** 是轻量命令行客户端，**任何有网络的机器**都能用（通过 API Key 认证）：

```bash
# 零安装直接试
npx @n8n/cli workflow list

# 或全局安装
npm install -g @n8n/cli
```

**连接实例**：

```bash
n8n-cli config set-url https://your-instance.n8n.cloud
n8n-cli config set-api-key YOUR_API_KEY
n8n-cli config show
```

**能干什么**：列工作流、从 JSON 创建工作流、查最近执行、建凭据、管理项目。

> 💡 **n8n CLI（远程）vs Server CLI（本机）**：远程 CLI 适合开发者/集成脚本（走 API、尊重权限）；本机 Server CLI（`n8n export:workflow` 等）适合运维备份/紧急处理（直连数据库、绕过权限）。**备份用 Server CLI，日常管理用 n8n CLI。**

## 4. MCP：让 AI 直接操作 n8n / Connect with MCP

> 官方出处：`docs/connect/connect-to-n8n-mcp-server.md`、`build/ways-of-building-workflows/connect-to-n8n-mcp-server.md`

**MCP（Model Context Protocol）** 是 AI 工具连接外部系统的开放标准。n8n **内置 MCP 服务器**，让 Claude Desktop、Claude Code、Codex、Cursor 等 AI 工具**直接在你的 n8n 实例里建工作流、改工作流、跑工作流**。

**流程**：

1. 在 n8n 里启用 MCP 访问（Settings → MCP Server，生成访问令牌/OAuth）。
2. 在 AI 工具里配置连接（官方文档给每种客户端的具体配置）。
3. 用自然语言操作：比如对 Claude 说「建一个每天早上检查 Gmail 发票、存到 Google Drive 的工作流」。

**能干什么**（MCP Server Tools Reference 完整清单）：

- 创建/编辑工作流（n8n 2.13+）
- 搜索并运行已有工作流
- 管理数据表
- 迭代调试：跑一下 → 看结果 → 继续改

> 💡 **双向 MCP**：n8n 不仅当 MCP 服务器（让 AI 连进来），还有 **MCP Server Trigger 节点**（把单个工作流变成 MCP 服务器给别人调）和 **MCP Client Tool 节点**（工作流里去调用外部 MCP 服务器）。高手玩法，了解即可。

## 5. 一句话总结 / TL;DR

```
API：Settings → n8n API 建 Key → 请求头 X-N8N-API-KEY → 调 /api/v1/*
CLI：npx @n8n/cli + config set-url/api-key → 脚本化管理
Server CLI：本机 n8n export:workflow 备份
MCP：AI 工具连 n8n → 自然语言建/跑工作流（权限=你的账号权限）
安全：API Key 有过期时间；Enterprise 可以限定权限范围；别把 Key 提交到代码仓库
```

---

**下一章 →** [17 · 常见问题排查与学习路线](17-常见问题与学习路线.md)
