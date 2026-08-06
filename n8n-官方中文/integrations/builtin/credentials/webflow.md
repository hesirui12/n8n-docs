---
title: Webflow 凭证
description: >-
  Webflow 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Webflow 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Webflow credentials
originalFilePath: integrations/builtin/credentials/webflow.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/webflow'
url: 'https://docs.n8n.io/integrations/builtin/credentials/webflow'
layout:
  description:
    visible: false
---

# Webflow 凭证

> **大白话**：Webflow 是可视化建站工具。n8n 连它有两种方式：网站级访问令牌（Access Token，每个网站单独一个，去网站设置里生成）或 OAuth2（注册一个应用来授权）。注意：如果用的是已弃用的 Data API V1，要打开 Legacy 开关。

你可以使用这些凭证对以下节点进行身份验证：

- [Webflow](../app-nodes/n8n-nodes-base.webflow.md)
- [Webflow Trigger](../trigger-nodes/n8n-nodes-base.webflowtrigger.md)

## 前置条件

- 创建一个 [Webflow](https://webflow.com/) 账户。
- [创建一个站点](https://developers.webflow.com/data/reference/structure-1#sites)：仅在使用 API access token（API 访问令牌）认证时需要。

## 支持的认证方式

- API access token（API 访问令牌）
- OAuth2

## 相关资源

更多关于该服务的信息，请参考 [Webflow 的 API 文档](https://developers.webflow.com/data/reference/rest-introduction)。

## 使用 API access token

要配置此凭证，你需要：

- 一个站点 **Access Token**（访问令牌）：访问令牌是站点级别的。前往你站点的 **Site Settings > Apps & integrations > API access**（站点设置 > 应用与集成 > API 访问），选择 **Generate API token**（生成 API 令牌）。更多信息请参考 [Get a Site Token](https://developers.webflow.com/data/v1.0.0/docs/get-a-site-token)。

## 使用 OAuth2

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你需要从零开始配置 OAuth2，请在你的工作区中[注册一个应用](https://developers.webflow.com/data/docs/register-an-app)。

为你的应用使用以下设置：

- 从 n8n 复制 **OAuth callback URL**（OAuth 回调 URL），在你的应用中将其添加为 **Redirect URI**（重定向 URI）。
- 创建应用后，复制 **Client ID** 和 **Client Secret**，填入 n8n 凭证。
- 如果你使用的是 Webflow Data API V1（已弃用），请开启 **Legacy**（旧版）开关。否则保持关闭。

更多关于 Webflow 的 OAuth 网页授权流程的信息，请参考 [OAuth](https://developers.webflow.com/data/reference/oauth-app)。
