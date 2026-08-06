---
title: Zoho 凭证
description: >-
  Zoho 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Zoho 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Zoho credentials
originalFilePath: integrations/builtin/credentials/zoho.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/zoho'
url: 'https://docs.n8n.io/integrations/builtin/credentials/zoho'
layout:
  description:
    visible: false
---

# Zoho 凭证

> **大白话**：Zoho 是印度的一家 SaaS 全家桶公司（CRM、邮箱、表单等一堆产品）。连它的 Zoho CRM 用 OAuth2，主要注意一件事：**选对你的数据中心地区**（Access Token URL 里的 AU/CN/EU/IN/US 对应澳洲/加拿大/欧洲/印度/美国），选错了连不上。然后用 Zoho 账号在它的开发者门户注册一个「Server-based Applications（服务器端应用）」类型的应用，把 n8n 的回调地址填进 Zoho 的 Authorized Redirect URIs，再把 Client ID 和 Client Secret 填回 n8n 就行。

你可以使用这些凭证对以下节点进行身份验证：

- [Zoho CRM](../app-nodes/n8n-nodes-base.zohocrm.md)

## 前提条件

创建一个 [Zoho](https://www.zoho.com/) 账户。

## 支持的认证方式

- OAuth2

## 相关资源

关于该服务的更多信息，请参考 [Zoho 的 CRM API 文档](https://www.zoho.com/crm/developer/docs/api/v3/)。

## 使用 OAuth2

要配置此凭证，你需要：

- 一个 **Access Token URL**（访问令牌地址）：Zoho 提供按地区区分的访问令牌地址。选择与你 Zoho 数据中心最匹配的地区：
    - **AU**：选择此项代表澳大利亚数据中心。
    - **CN**：选择此项代表加拿大数据中心。
    - **EU**：选择此项代表欧盟数据中心。
    - **IN**：选择此项代表印度数据中心。
    - **US**：选择此项代表美国数据中心。

更多关于选择数据中心的信息，请参考 [Multi DC](https://www.zoho.com/crm/developer/docs/api/v3/multi-dc.html)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你需要从零开始配置 OAuth2，请先在 Zoho [注册一个应用](https://www.zoho.com/accounts/protocol/oauth-setup.html)。

为你的应用使用以下设置：

- **Client Type**（客户端类型）选择 **Server-based Applications**（服务器端应用）。
- 从 n8n 复制 **OAuth Callback URL**，填写到 Zoho 的 **Authorized Redirect URIs**（授权回调地址）字段中。
- 从应用中复制 **Client ID** 和 **Client Secret**，填写到你的 n8n 凭证中。
