---
title: X（原 Twitter）凭证
description: >-
  X 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 X 进行身份验证。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: X (formerly Twitter) credentials
originalFilePath: integrations/builtin/credentials/twitter.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/twitter'
url: 'https://docs.n8n.io/integrations/builtin/credentials/twitter'
layout:
  description:
    visible: false
---

# X（原 Twitter）凭证

> **大白话**：n8n 连 X（推特）用 OAuth2。先去开发者平台创建应用，拿到 Client ID 和 Client Secret 填进 n8n 就行。注意：旧版 OAuth 1.0a 已被废弃，0.236.0 以上版本请用 OAuth2。

你可以使用这些凭证对以下节点进行身份验证：

- [X（原 Twitter）](../app-nodes/n8n-nodes-base.twitter.md)

## 前置条件

- 创建一个 [X 开发者](https://developer.x.com/en)账户。
- 创建一个 [Twitter 应用](https://developer.x.com/en/docs/apps)，或使用注册开发者门户时自动创建的默认项目和应用。关于应用配置的更多细节，请参考下面每种受支持的认证方式。

## 支持的认证方式

- OAuth2

{% hint style="info" %}
**弃用警告**

n8n 之前支持 **OAuth** 认证方式，它使用 X 的 [OAuth 1.0a](https://developer.x.com/en/docs/authentication/oauth-1-0a) 认证方法。随着 n8n 0.236.0 版本中 X 节点 V2 的发布，n8n 已弃用此方式。
{% endhint %}

## 相关资源

更多关于该服务的信息，请参考 [X 的 API 文档](https://developer.x.com/en/docs/twitter-api)。更多关于与该服务进行身份验证的信息，请参考 [X 的 API 认证文档](https://developer.x.com/en/docs/authentication/overview)。

更多关于仅应用认证的信息，请参考 [Application-only Authentication](https://developer.twitter.com/en/docs/authentication/oauth-2-0/application-only)。

## 使用 OAuth2

如果你使用的是 n8n 0.236.0 或更高版本，请使用此方法。

要配置此凭证，你需要：

- **Client ID**（客户端 ID）
- **Client Secret**（客户端密钥）

要生成你的 Client ID 和 Client Secret：

1. 在 Twitter [开发者门户](https://developer.x.com/en/portal/dashboard)中，打开你的项目。
2. 在项目的 **Overview**（概览）标签页中，找到 **Apps**（应用）部分并选择 **Add App**（添加应用）。
3. 给你的应用起一个 **Name**（名称），然后选择 **Next**（下一步）。
4. 前往 **App Settings**（应用设置）。
5. 在 **User authentication settings**（用户认证设置）中，选择 **Set Up**（设置）。
6. 设置 **App permissions**（应用权限）。如果你想使用 n8n X 节点的全部功能，请选择 **Read and write and Direct message**（读写和私信）。
7. 在 **Type of app**（应用类型）部分，选择 **Web App, Automated App or Bot**（网页应用、自动化应用或机器人）。
8. 在 n8n 中复制 **OAuth Redirect URL**（OAuth 重定向 URL）。
9. 在 X 应用中，找到 **App Info**（应用信息）部分，将该 URL 粘贴为 **Callback URI / Redirect URL**（回调 URI / 重定向 URL）。
10. 添加一个 **Website URL**（网站 URL）。
11. 保存你的更改。
12. 复制 X 中显示的 **Client ID** 和 **Client Secret**，填入 n8n 凭证中对应的字段。

更多关于使用此认证方式的信息，请参考 X 的 [OAuth 2.0 认证文档](https://developer.x.com/en/docs/authentication/oauth-2-0)。

{% hint style="info" %}
**X 速率限制**

此凭证使用 OAuth 2.0 Bearer Token 认证方式，因此你会受到应用级速率限制。更多信息请参考下面的 [X 速率限制](#x-速率限制)。
{% endhint %}

## X 速率限制

X 根据你的开发者访问计划级别，对每个端点设置了基于时间的速率限制。X 分别计算应用速率限制和用户速率限制。请参考 [Rate limits](https://developer.x.com/en/docs/twitter-api/rate-limits) 查看各访问计划级别的限制以及避免触限的指南。

请使用以下指南来计算速率限制：

- 如果你使用已弃用的 OAuth 方法，则适用用户速率限制。每组用户的访问令牌在每个时间窗口内有一个限制额度。
- 如果你[使用 OAuth2](#使用-oauth2)，则适用应用速率限制。你的应用发出的请求在每个时间窗口内有一个限制额度。

X 分别计算用户速率限制和应用速率限制。

更多关于这些速率限制类型的信息，请参考 X 的 [Rate limits and authentication methods](https://developer.x.com/en/docs/twitter-api/rate-limits#auth)。
