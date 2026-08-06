---
title: Strava 凭证
description: >-
  Strava 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Strava 的身份。
contentType:
  - integration
  - reference
nodeTitle: Strava credentials
originalFilePath: integrations/builtin/credentials/strava.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/strava'
url: 'https://docs.n8n.io/integrations/builtin/credentials/strava'
layout:
  description:
    visible: false
---

# Strava 凭证

{% hint style="info" %}
**大白话**：Strava 是运动记录 App（跑步、骑行等）。n8n 想读取你的运动数据，需要先在 Strava 创建一个**开发者应用**，拿到 **Client ID（客户端 ID）** 和 **Client Secret（客户端密钥）**，再用 **OAuth2（网页授权登录）** 连上。有个小坑：把 n8n 的回调地址粘进 Strava 时，要**去掉 `https://` 前缀和后面的路径**，只留域名部分。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Strava](../app-nodes/n8n-nodes-base.strava.md)
- [Strava Trigger（触发器）](../trigger-nodes/n8n-nodes-base.stravatrigger.md)

## 先决条件

- 注册一个 [Strava](https://strava.com) 账号。
- 在 [**Settings（设置）> API**](https://www.strava.com/settings/api) 页面创建一个 Strava 应用。更多信息请参考[使用 OAuth2](#using-oauth2)。

## 支持的验证方式

- OAuth2（网页授权登录）

## 相关资源

关于该服务的更多信息，请参考 [Strava 官方 API 文档](https://developers.strava.com/docs/reference/)。

## 使用 OAuth2（网页授权登录）

要配置这个凭证，你需要：

- 一个 **Client ID（客户端 ID）**：在[创建 Strava 应用](https://developers.strava.com/docs/getting-started/#account)时生成。
- 一个 **Client Secret（客户端密钥）**：在[创建 Strava 应用](https://developers.strava.com/docs/getting-started/#account)时生成。

你的 Strava 应用请按以下设置：

- 在 n8n 里复制 **OAuth Callback URL（OAuth 回调地址）**。把它粘贴到你的 Strava 应用的 **Authorization Callback Domain（授权回调域名）** 里。
- 从 **Authorization Callback Domain（授权回调域名）** 中**去掉协议前缀**（`https://` 或 `http://`）**和后面的相对路径**（`/oauth2/callback` 或 `/rest/oauth2-credential/callback`）。例如，如果 OAuth Redirect URL 原本是 `https://oauth.n8n.cloud/oauth2/callback`，那么 **Authorization Callback Domain（授权回调域名）** 应该是 `oauth.n8n.cloud`。
- 从你的应用里复制 **Client ID（客户端 ID）** 和 **Client Secret（客户端密钥）**，填进 n8n 的凭证里。

关于 Strava OAuth 流程的更多信息，请参考[身份验证说明](https://developers.strava.com/docs/authentication/)。
