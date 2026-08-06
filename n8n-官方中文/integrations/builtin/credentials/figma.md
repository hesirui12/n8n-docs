---
title: Figma 凭证（Figma credentials）
description: >-
  Figma 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  Figma。
contentType:
  - integration
  - reference
nodeTitle: Figma 凭证（Figma credentials）
originalFilePath: integrations/builtin/credentials/figma.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/figma'
url: 'https://docs.n8n.io/integrations/builtin/credentials/figma'
layout:
  description:
    visible: false
---

# Figma 凭证（Figma credentials）

> **大白话**：Figma 是设计师用的在线协作设计工具。n8n 连它有两种方式：**Access token**（个人访问令牌，简单）或 **OAuth2**（标准授权）。注意：你需要管理员（admin）或所有者（owner）级别的 Figma 账号才能设置这个凭证。

你可以使用这些凭证来认证以下节点：

- [Figma Trigger (Beta)](../trigger-nodes/n8n-nodes-base.figmatrigger.md)

## 前置条件（Prerequisites）

创建一个 [Figma](https://www.figma.com/) 账号。你需要管理员或所有者级别的账号。

## 支持的认证方式（Supported authentication methods）

- Access token（访问令牌）
- OAuth2

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [Figma 的 API 文档](https://www.figma.com/developers/api)。

## 使用 Access token（Using Access token）

要配置这个凭证，你需要：

- 一个个人 **Access Token**（访问令牌，PAT）：关于如何生成个人 **Access Token**，请参考 [Figma API 访问令牌文档](https://www.figma.com/developers/api#access-tokens)。

## 使用 OAuth2（Using OAuth2）

要配置这个凭证，你需要一个 [Figma](https://www.figma.com/) 账号。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你是[自托管（self-hosting）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n) n8n，需要注册一个应用来设置 OAuth：

1. 打开 Figma 的[开发者应用](https://www.figma.com/developers/apps)页面。
2. 点击 **Create a new app**（创建新应用）。
3. 为你的应用输入一个 **Name**（名称），例如 `n8n integration`。
4. 在 n8n 中复制 **OAuth Redirect URL**（OAuth 回调地址）。
5. 在 Figma 中点击 **Add a callback**（添加回调），输入你从 n8n 复制的地址。
6. 保存应用。
7. 从 Figma 复制 **Client ID**，填入你的 n8n 凭证。
8. 从 Figma 复制 **Client Secret**，填入你的 n8n 凭证。

更多信息请参考 [Figma OAuth 文档](https://www.figma.com/developers/api#oauth2)。

## 设置自定义权限范围（Setting custom scopes）

Figma OAuth2 凭证默认使用以下权限范围（scopes）：

* `webhooks:read`
* `webhooks:write`

要为你的凭证选择不同的权限范围，请打开 **Custom Scopes**（自定义权限范围）开关，然后编辑 **Enabled Scopes**（已启用的权限范围）列表。请注意，权限范围收窄后，某些功能可能无法按预期工作。完整的可用权限范围列表，请参考 [Figma 的 OAuth 权限范围](https://developers.figma.com/docs/rest-api/scopes/)。
