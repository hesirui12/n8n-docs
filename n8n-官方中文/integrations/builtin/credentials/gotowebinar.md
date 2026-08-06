---
title: GoToWebinar 凭证
description: >-
  GoToWebinar 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  GoToWebinar 的身份。
contentType:
  - integration
  - reference
nodeTitle: GoToWebinar credentials
originalFilePath: integrations/builtin/credentials/gotowebinar.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/gotowebinar'
url: 'https://docs.n8n.io/integrations/builtin/credentials/gotowebinar'
layout:
  description:
    visible: false
---

# GoToWebinar 凭证

{% hint style="info" %}
**大白话**：GoToWebinar 是在线网络研讨会（直播课/宣讲会）工具。n8n 想自动管理你的研讨会（建会议、看报名名单等），要走 **OAuth2** 授权：先去 GoTo 的开发者中心创建一个 OAuth 客户端，拿到 **Client ID** 和 **Client Secret**，再把 n8n 给你的 **OAuth Callback URL（回调地址）** 填到客户端里。全程按下面步骤来。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [GoToWebinar](../app-nodes/n8n-nodes-base.gotowebinar.md)

## 准备工作

创建一个有 [Developer Center（开发者中心）](https://developer.goto.com/) 访问权限的 [GoToWebinar](https://www.goto.com/webinar) 账号。

## 支持的验证方式

- OAuth2

## 相关资源

关于如何向该服务做身份验证，请参考 [GoToWebinar 官方 API 文档](https://developer.goto.com/GoToWebinarV2)。

## 使用 OAuth2

要配置这个凭证，你需要准备：

- 一个 **Client ID（客户端 ID）**：创建好 OAuth 客户端后就会提供
- 一个 **Client Secret（客户端密钥）**：创建好 OAuth 客户端后就会提供

创建 OAuth 客户端的详细步骤请参考 [创建 OAuth 客户端文档](https://developer.goto.com/guides/Get%20Started/02_HOW_createClient/)。从 n8n 里复制 **OAuth Callback URL（OAuth 回调地址）**，把它作为 OAuth 客户端里的 **Redirect URI（回调地址）**。创建好客户端后，就会提供 Client ID 和 Client Secret。
