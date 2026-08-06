---
title: 部署环境变量
contentType: reference
hide:
  - toc
  - tags
nodeTitle: 部署
originalFilePath: hosting/configuration/environment-variables/deployment.md
originalUrl: https://docs.n8n.io/hosting/configuration/environment-variables/deployment
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/deployment
description: >-
  使用环境变量为自托管 n8n 实例配置部署选项和应用访问方式。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
tags:
  - environment variables
---

# 部署（Deployment）

{% hint style="info" %}
**大白话**：这一页是「n8n 以什么方式跑起来」的开关列表——比如通过什么网址访问 n8n、监听哪个端口、要不要开启模板功能、用哪个密钥加密你的账号密码等。基本都是部署 n8n 时一次性配置好就行的东西。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

本页列出了自托管 n8n 实例的部署配置选项，包括设置访问 URL、启用模板、自定义加密以及配置服务器信息。

{% hint style="info" %}
**代理变量的优先级**

n8n 使用 [`proxy-from-env`](https://www.npmjs.com/package/proxy-from-env) 这个包来处理代理环境变量（即以 `_PROXY` 结尾的变量），它有自己的优先级规则。特别要注意：当小写版本（如 `http_proxy`）和大写版本（例如 `HTTP_PROXY`）同时存在时，小写版本优先于大写版本。

要了解更多关于代理环境变量的信息，请查看[该包的「环境变量」部分](https://www.npmjs.com/package/proxy-from-env#environment-variables)。
{% endhint %}

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| -------------------------------------- | ---------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `HTTP_PROXY` | String | - | 代理未加密 HTTP 请求的 URL。设置后，n8n 会将节点发出的所有未加密 HTTP 流量都通过这个代理 URL 转发。 |
| `HTTPS_PROXY` | String | - | 代理 TLS/SSL 加密 HTTP 请求的 URL。设置后，n8n 会将节点发出的所有 TLS/SSL 加密 HTTP 流量都通过这个代理 URL 转发。 |
| `ALL_PROXY` | String | - | 同时代理未加密和加密 HTTP 请求的 URL。当更具体的变量（`HTTP_PROXY` 或 `HTTPS_PROXY`）未设置时，n8n 使用此值。 |
| `NO_PROXY` | String | - | 需要绕过代理的主机名或 URL 列表（用逗号分隔）。当使用了 `HTTP_PROXY`、`HTTPS_PROXY` 或 `ALL_PROXY` 时，n8n 会直接连接这里定义的主机名或 URL，而不走代理。 |
| `N8N_ENFORCE_GLOBAL_USER_AGENT` | Boolean | `false` | 设为 `true` 时，n8n 会在所有对外 HTTP 请求中，把默认的裸 `n8n` User-Agent 字符串替换为符合 RFC 规范的值（`Mozilla/5.0 (compatible; n8n/<version>; +https://n8n.io/)`）。启用它可以防止 Web 应用防火墙拦截 n8n 的请求。 |
| `N8N_GLOBAL_USER_AGENT_VALUE` | String | - | 用于所有对外 HTTP 请求的自定义 User-Agent 字符串。会覆盖 `N8N_ENFORCE_GLOBAL_USER_AGENT` 设置的 RFC 兼容默认值。当你不想向上游服务器暴露 n8n 版本号时很有用。 |
| `N8N_EDITOR_BASE_URL` | String | - | 用户访问编辑器的公开 URL。同时用于 n8n 发送的邮件，以及基于 SAML 的身份认证重定向 URL。 |
| `N8N_DISABLE_UI` | Boolean | `false` | 设为 `true` 可禁用界面（UI）。 |
| `N8N_PREVIEW_MODE` | Boolean | `false` | 设为 `true` 以预览模式运行。 |
| `N8N_TEMPLATES_ENABLED` | Boolean | `true` | 启用[工作流模板](#user-content-fn-1)[^1]（true）或禁用（false）。 |
| `N8N_TEMPLATES_HOST` | String | `https://api.n8n.io` | 如果要搭建自己的工作流模板库，可以修改此值。注意：要使用自己的模板库，你的 API 必须提供与 n8n 相同的接口和响应结构。更多信息请参考[工作流模板](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/ways-of-building-workflows/use-templates)。 |
| `N8N_ENCRYPTION_KEY` | String | n8n 自动生成的随机密钥 | 提供用于加密 n8n 数据库中凭据（账号密码）的自定义密钥。默认情况下，n8n 在首次启动时会自动生成一个随机密钥。 |
| `N8N_ENV_FEAT_ENCRYPTION_KEY_ROTATION` | Boolean | `false` | 在所有实例（主实例和工作实例）上设为 `true` 以启用[加密密钥轮换](../../security/rotate-encryption-keys.md)。这是一次性单向更改：操作前请先做完整数据库备份。 |
| `N8N_ENV_FEAT_OAUTH2_JWE` | Boolean | `false` | 在所有实例（主实例和工作实例）上设为 `true` 以启用[OAuth 2.0 凭据的 JWE 令牌解密](../../security/decrypt-oauth-20-tokens-with-jwe.md)。属于预览功能。 |
| `N8N_ENV_FEAT_TOKEN_EXCHANGE` | Boolean | `false` | 设为 `true` 以启用[面向嵌入合作方的令牌交换](../../../deploy-as-an-oem-integration/set-up-token-exchange.md)。属于预览功能。 |
| `N8N_OAUTH_JWE_JWKS_PER_MINUTE` | Number | `60` | 公共 JWKS 端点（`/rest/.well-known/jwks.json`）的按 IP 限流（每分钟请求数）。该端点用于[OAuth 2.0 凭据的 JWE 令牌解密](../../security/decrypt-oauth-20-tokens-with-jwe.md)。 |
| `N8N_MCP_BASE_URL` | String | - | MCP 客户端访问实例级 MCP 服务器的公共基础 URL，当它与实例的基础 URL 不同时使用。适用于把 MCP 服务器部署在专用主机名上的场景（例如在同一个实例前面加 `https://n8n-mcp.example.com`）。设置后，n8n 会在此 URL 上发布 MCP 服务器，并在 OAuth 认证时接受该 URL（同时也接受由实例基础 URL 派生出的 URL）。不影响编辑器或 Webhook URL。n8n 2.31.0 起可用。 |
| `N8N_MCP_SERVER_RATE_LIMIT` | Number | `100` | 每个 IP 每 5 分钟对 MCP 服务器端点（`/mcp-server/http`）的最大请求数。 |
| `N8N_OAUTH_SERVER_REGISTER_RATE_LIMIT` | Number | `10` | 每个 IP 每 5 分钟对 OAuth 服务器客户端注册端点（`/oauth/register` 和 `/mcp-oauth/register`）的最大请求数。 |
| `N8N_OAUTH_SERVER_AUTHORIZE_RATE_LIMIT` | Number | `50` | 每个 IP 每 5 分钟对 OAuth 服务器授权端点（`/oauth/authorize` 和 `/mcp-oauth/authorize`）的最大请求数。 |
| `N8N_OAUTH_SERVER_TOKEN_RATE_LIMIT` | Number | `20` | 每个 IP 每 5 分钟对 OAuth 服务器令牌端点（`/oauth/token` 和 `/mcp-oauth/token`）的最大请求数。 |
| `N8N_OAUTH_SERVER_REVOKE_RATE_LIMIT` | Number | `30` | 每个 IP 每 5 分钟对 OAuth 服务器令牌撤销端点（`/oauth/revoke` 和 `/mcp-oauth/revoke`）的最大请求数。 |
| `N8N_USER_FOLDER` | String | `user-folder` | n8n 创建 `.n8n` 文件夹的路径。该目录存放用户专属数据，例如数据库文件和加密密钥。 |
| `N8N_PATH` | String | `/` | n8n 部署到的路径。把 `N8N_PATH` 和反向代理组合使用可能会导致文件夹导航问题。建议改用子域名（例如 `n8n.example.com`），或者不使用反向代理直接使用 `N8N_PATH`。 |
| `N8N_HOST` | String | `localhost` | n8n 运行的主机名。 |
| `N8N_PORT` | Number | `5678` | n8n 运行的 HTTP 端口。 |
| `N8N_LISTEN_ADDRESS` | String | `::` | n8n 应该监听的 IP 地址。 |
| `N8N_PROTOCOL` | Enum string: `http`, `https` | `http` | 访问 n8n 所使用的协议。 |
| `N8N_SSL_KEY` | String | - | 用于 HTTPS 协议的 SSL 密钥。 |
| `N8N_SSL_CERT` | String | - | 用于 HTTPS 协议的 SSL 证书。 |
| `N8N_PERSONALIZATION_ENABLED` | Boolean | `true` | 是否向用户询问个性化问题，并据此定制 n8n 的界面和体验。 |
| `N8N_VERSION_NOTIFICATIONS_ENABLED` | Boolean | `true` | 启用时，n8n 会发送新版本和安全更新的通知。 |
| `N8N_VERSION_NOTIFICATIONS_ENDPOINT` | String | `https://api.n8n.io/versions/` | 获取版本信息的端点。 |
| `N8N_VERSION_NOTIFICATIONS_INFO_URL` | String | `https://docs.n8n.io/getting-started/installation/updating.html` | 「新版本」面板中显示的可了解更多信息的 URL。 |
| `N8N_DIAGNOSTICS_ENABLED` | Boolean | `true` | 是否与 n8n 共享选定的匿名[遥测数据](https://app.gitbook.com/s/ukPPOMQ6NId4gpAIkPXa/)。注意：如果设为 `false`，则无法在 Code 节点中启用 Ask AI 功能。 |
| `N8N_DIAGNOSTICS_CONFIG_FRONTEND` | String | `1zPn9bgWPzlQc0p8Gj1uiK6DOTn;https://telemetry.n8n.io` | 前端的遥测配置。 |
| `N8N_DIAGNOSTICS_CONFIG_BACKEND` | String | `1zPn7YoGC3ZXE9zLeTKLuQCB4F6;https://telemetry.n8n.io/v1/batch` | 后端的遥测配置。 |
| `N8N_PUSH_BACKEND` | String | `websocket` | 选择 n8n 后端使用服务器发送事件（`sse`）还是 WebSocket（`websocket`）向界面推送变更。 |
| `VUE_APP_URL_BASE_API` | String | `http://localhost:5678/` | 手动构建 `n8n-editor-ui` 包时使用，用于设置前端如何访问后端 API。参见[配置基础 URL](../configuration-examples/configure-the-base-url.md)。 |
| `N8N_HIRING_BANNER_ENABLED` | Boolean | `true` | 是否在控制台显示 n8n 的招聘横幅（true）或不显示（false）。 |
| `N8N_PUBLIC_API_SWAGGERUI_DISABLED` | Boolean | `false` | Swagger UI（API 调试台）是否禁用（true）或不禁用（false）。 |
| `N8N_PUBLIC_API_DISABLED` | Boolean | `false` | 是否禁用公共 API（true）或不禁用（false）。 |
| `N8N_PUBLIC_API_ENDPOINT` | String | `api` | 公共 API 端点的路径。 |
| `N8N_GRACEFUL_SHUTDOWN_TIMEOUT` | Number | `30` | n8n 进程在退出前等待各组件关闭的时间（秒）。 |
| `N8N_DEV_RELOAD` | Boolean | `false` | 在 n8n 源码上开发时，设为 `true` 可在源码文件发生变化时自动重新加载或重启应用。 |
| `N8N_REINSTALL_MISSING_PACKAGES` | Boolean | `false` | 设为 `true` 时，n8n 会自动尝试重新安装缺失的软件包。 |
| `N8N_TUNNEL_SUBDOMAIN` | String | - | 指定 n8n 隧道的子域名。如未设置，n8n 会生成一个随机子域名。 |
| `N8N_PROXY_HOPS` | Number | 0 | n8n 运行在多少个反向代理之后。 |

[^1]: n8n 模板是由 n8n 和社区成员设计的预制工作流，你可以直接导入到自己的 n8n 实例中使用。使用模板时，你可能需要填写凭据（账号密码）并调整配置，以满足自己的实际需求。
