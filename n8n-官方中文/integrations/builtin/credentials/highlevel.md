---
title: HighLevel 凭证
description: >-
  HighLevel 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  HighLevel 的身份。
contentType:
  - integration
  - reference
nodeTitle: HighLevel credentials
originalFilePath: integrations/builtin/credentials/highlevel.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/highlevel'
url: 'https://docs.n8n.io/integrations/builtin/credentials/highlevel'
layout:
  description:
    visible: false
---

# HighLevel 凭证

{% hint style="info" %}
**大白话**：HighLevel 是一个面向营销机构的一站式 CRM + 营销自动化平台。n8n 连它有两种方式：**API key（API 密钥）**（对应旧版 API v1）和 **OAuth2（网页授权登录）**（对应新版 API v2）。注意：**API v1 已被官方弃用**，以后新配置的凭证一律用 OAuth2。用 OAuth2 需要去 HighLevel 开发者后台建一个应用，把 Client ID、Client Secret 和权限范围（scopes）填进 n8n。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [HighLevel 节点](../app-nodes/n8n-nodes-base.highlevel.md)

## 前提条件

创建一个 [HighLevel 开发者](https://marketplace.gohighlevel.com/) 账号。

## 支持的验证方式

- API key（API 密钥）：配合 API v1 使用
- OAuth2（网页授权登录）：配合 API v2 使用

{% hint style="info" %}
**API 1.0 已弃用**

HighLevel 已弃用 API v1.0，不再维护它。新建凭证请使用 OAuth2。
{% endhint %}

## 相关资源

关于该服务的更多信息，请参考 [HighLevel 的 API 2.0 文档](https://highlevel.stoplight.io/docs/integrations/0443d7d1a4bd0-overview)。

对于已有的 API v1.0 集成，请参考 [HighLevel 的 API 1.0 文档](https://help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API Key（API 密钥）**：获取 API key 的方法请参考 [HighLevel API 1.0 欢迎文档](https://help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api)。

## 使用 OAuth2（网页授权登录）

要配置这个凭证，你需要：

- 一个 **Client ID（客户端 ID）**
- 一个 **Client Secret（客户端密钥）**

要生成这两样东西，请在 **My Apps（我的应用）> Create App（创建应用）** 里创建一个应用。按这些设置来：

1. 把 **Distribution Type（分发类型）** 设为 **Sub-Account（子账号）**。
2. 添加这些 **Scopes（权限范围）**：
    - `locations.readonly`
    - `contacts.readonly`
    - `contacts.write`
    - `opportunities.readonly`
    - `opportunities.write`
    - `users.readonly`
3. 把 n8n 里的 **OAuth Redirect URL（OAuth 回调地址）** 复制出来，在 HighLevel 应用里添加为 **Redirect URL（回调地址）**。
4. 把 HighLevel 里的 **Client ID** 和 **Client Secret** 复制到 n8n 凭证里。
5. 把上面添加的那些 scopes 用空格隔开，填进 n8n 凭证。例如：

    ```locations.readonly contacts.readonly contacts.write opportunities.readonly opportunities.write users.readonly```

更多细节请参考 HighLevel 的 [API 授权文档](https://highlevel.stoplight.io/docs/integrations/a04191c0fabf9-authorization)。关于可用的 scopes，请参考 HighLevel 的 [API Scopes 文档](https://highlevel.stoplight.io/docs/integrations/vcctp9t1w8hja-scopes)。
