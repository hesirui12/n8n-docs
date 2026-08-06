---
title: Twist 凭证
description: >-
  Twist 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Twist 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Twist credentials
originalFilePath: integrations/builtin/credentials/twist.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/twist'
url: 'https://docs.n8n.io/integrations/builtin/credentials/twist'
layout:
  description:
    visible: false
---

# Twist 凭证

> **大白话**：Twist 是团队沟通工具。n8n 连它用 OAuth2，先创建应用拿到 Client ID 和 Client Secret。注意：Twist 不认 localhost 回调地址，本地调试要用 ngrok 生成公网地址。

你可以使用这些凭证对以下节点进行身份验证：

- [Twist](../app-nodes/n8n-nodes-base.twist.md)

## 前置条件

- 创建一个 [Twist](https://twist.com/) 账户。
- [创建一个通用集成](https://twist.com/app_console/create_app)，并配置有效的 OAuth Redirect URL（OAuth 重定向 URL）。更多信息请参考[使用 OAuth2](#使用-oauth2)。

## 支持的认证方式

- OAuth2

## 相关资源

更多关于与该服务进行身份验证的信息，请参考 [Twist 的 API 文档](https://developer.twist.com/v3/#authorization)。

## 使用 OAuth2

要配置此凭证，你需要：

- **Client ID**（客户端 ID）：创建通用集成后生成。
- **Client Secret**（客户端密钥）：创建通用集成后生成。

要生成你的 Client ID 和 Client Secret，请[创建一个通用集成](https://twist.com/app_console/create_app)。

为你的集成 **OAuth Authentication**（OAuth 认证）使用以下设置：

- 从 n8n 复制 **OAuth Redirect URL**（OAuth 重定向 URL），将其填入 Twist 中的 **OAuth 2 redirect URL**（OAuth 2 重定向 URL）。<br>

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>自托管 n8n 的 OAuth Redirect URL</strong></p><p>Twist 不接受 <code>localhost</code> 重定向 URL。重定向 URL 应该使用你域名下的地址，例如：<code>https://mytemplatemaker.example.com/gr_callback</code>。如果你的 n8n <strong>OAuth Redirect URL</strong> 中包含 localhost，请参考下面的「本地环境重定向 URL」小节来生成一个 Twist 能接受的 URL。</p></div>

- 选择 **Update OAuth settings**（更新 OAuth 设置）保存更改。
- 从 Twist 复制 **Client ID** 和 **Client Secret**，填入 n8n 中对应的字段。

### 本地环境重定向 URL

Twist 不接受 localhost 回调 URL。以下步骤可以让你在本地环境配置 OAuth 凭证：

1. 使用 [ngrok](https://ngrok.com/) 将运行在 `5678` 端口的本地服务器暴露到公网。在终端中运行以下命令：
```sh
ngrok http 5678
```
2. 在新的终端中运行以下命令。将 `<YOUR-NGROK-URL>` 替换为上一步得到的 URL。
```sh
export WEBHOOK_URL=<YOUR-NGROK-URL>
```
3. 在 Twist 中使用生成的 URL 作为你的 **OAuth 2 redirect URL**（OAuth 2 重定向 URL）。
