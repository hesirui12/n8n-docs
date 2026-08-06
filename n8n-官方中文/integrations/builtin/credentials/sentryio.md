---
title: Sentry.io 凭证
description: >-
  Sentry.io 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来验证
  Sentry.io。
contentType:
  - integration
  - reference
nodeTitle: Sentry.io 凭证
originalFilePath: integrations/builtin/credentials/sentryio.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/sentryio'
url: 'https://docs.n8n.io/integrations/builtin/credentials/sentryio'
layout:
  description:
    visible: false
---

# Sentry.io 凭证

> **大白话**：Sentry 是程序员的「错误监控神器」，帮你实时收集应用崩溃和报错信息。这篇文档教你怎么在 n8n 里配置凭证（支持三种方式），让 n8n 能读取 Sentry 的报错数据。如果你是自托管 Sentry，用第三种「Server API token」方式。

你可以使用这些凭证来验证以下节点：

- [Sentry.io](../app-nodes/n8n-nodes-base.sentryio.md)

## 前置条件

先创建一个 [Sentry.io](https://sentry.io/) 账号。

## 支持的认证方式

- API token（API 令牌）
- OAuth2
- Server API token（服务器 API 令牌）：用于[自托管的 Sentry](https://develop.sentry.dev/self-hosted/)。

## 相关资源

关于该服务的更多信息，请参阅 [Sentry.io 的 API 文档](https://docs.sentry.io/api/)。

## 使用 API token（API 令牌）

要配置此凭证，你需要准备：

- 一个 API **Token（令牌）**：在 **Account（账号）> Settings（设置）> User Auth Tokens（用户认证令牌）** 中生成 [**User Auth Token（用户认证令牌）**](https://sentry.io/settings/account/api/auth-tokens/)。更多信息请参阅 [用户认证令牌](https://docs.sentry.io/account/auth-tokens/#user-auth-tokens)。

## 使用 OAuth

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你需要从头配置 OAuth2，请使用以下设置[创建一个集成（integration）](https://docs.sentry.io/organization/integrations/integration-platform/#creating-an-integration)：

- 复制 n8n 的 **OAuth Callback URL（OAuth 回调地址）**，把它添加为 **Authorized Redirect URI（授权重定向地址）**。
- 复制 **Client ID** 和 **Client Secret**，填入你的 n8n 凭证。

关于创建集成的更多信息，请参阅 [公共集成（Public integrations）](https://docs.sentry.io/organization/integrations/integration-platform/public-integration/)。

## 使用 Server API token（服务器 API 令牌）

要配置此凭证，你需要准备：

- 一个 API **Token（令牌）**：在 **Account（账号）> Settings（设置）> User Auth Tokens（用户认证令牌）** 中生成 [**User Auth Token（用户认证令牌）**](https://sentry.io/settings/account/api/auth-tokens/)。更多信息请参阅 [用户认证令牌](https://docs.sentry.io/account/auth-tokens/#user-auth-tokens)。
- 你的自托管 Sentry 实例的 **URL（网址）**。
