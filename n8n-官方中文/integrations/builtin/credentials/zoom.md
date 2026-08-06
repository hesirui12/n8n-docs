---
title: Zoom 凭证
description: >-
  Zoom 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Zoom 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Zoom credentials
originalFilePath: integrations/builtin/credentials/zoom.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/zoom'
url: 'https://docs.n8n.io/integrations/builtin/credentials/zoom'
layout:
  description:
    visible: false
---

# Zoom 凭证

> **大白话**：Zoom 是视频会议软件。连它强烈建议直接用 **OAuth2**：先在 Zoom App Marketplace 创建一个「用户托管（User-managed）」的 OAuth 应用，拿到 **Client ID** 和 **Client Secret**，把 n8n 里的 **OAuth Callback URL** 填进 Zoom 的回调地址（如果 n8n 还显示 **Whitelist URL** 也一并填），再勾选 `meeting:read`、`meeting:write` 权限。旧版的 **API JWT token** 方式已被 Zoom 于 2023 年 6 月废弃，别再用它建新凭证了。

你可以使用这些凭证对以下节点进行身份验证：

- [Zoom](../app-nodes/n8n-nodes-base.zoom.md)

## 前提条件

创建一个 [Zoom](https://zoom.us/) 账户。你的账户必须拥有以下权限之一：

- 账户所有者（Account owner）
- 账户管理员（Account admin）
- Zoom for developers 角色

## 支持的认证方式

- API JWT token（JWT 令牌）
- OAuth2

{% hint style="warning" %}
**API JWT token 已弃用**

Zoom 已于 2023 年 6 月移除对 JWT 访问令牌的支持。所有新凭证都必须使用 OAuth2。
{% endhint %}

## 相关资源

关于该服务的更多信息，请参考 [Zoom 的 API 文档](https://developers.zoom.us/docs/api/)。

## 使用 API JWT token

这种认证方式已被 Zoom 完全废弃。不要用这种方式创建新凭证。

要配置此凭证，你需要：

- 一个 **JWT token**（JWT 令牌）：要创建 JWT 令牌，请在 [Zoom App Marketplace](https://marketplace.zoom.us/) 中创建一个新的 JWT 应用。

## 使用 OAuth2

要配置此凭证，你需要：

- 一个 **Client ID**（客户端 ID）：在 Zoom App Marketplace 创建 OAuth 应用时生成。
- 一个 **Client Secret**（客户端秘密）：创建 OAuth 应用时生成。

要生成 **Client ID** 和 **Client Secret**，请[创建一个 OAuth 应用](https://developers.zoom.us/docs/integrations/create/)。

为你的 OAuth 应用使用以下设置：

- 在 **Select how the app is managed**（选择应用管理方式）中选择 **User-managed app**（用户托管应用）。
- 从 n8n 复制 **OAuth Callback URL**，在 Zoom 中填为 **OAuth Redirect URL**。
- 如果你的 n8n 凭证显示了 **Whitelist URL**，请把该地址也填为 **OAuth Redirect URL**。
- 填写你计划使用的 **Scopes**（权限范围）。要使用 [Zoom](../app-nodes/n8n-nodes-base.zoom.md) 节点的全部功能，请勾选：
    - `meeting:read`
    - `meeting:write`
    - 更多关于会议权限范围的信息，请参考 [OAuth scopes | Meeting scopes](https://developers.zoom.us/docs/integrations/oauth-scopes/#meeting-scopes)。
- 复制 Zoom 应用中提供的 **Client ID** 和 **Client Secret**，填写到你的 n8n 凭证中。
