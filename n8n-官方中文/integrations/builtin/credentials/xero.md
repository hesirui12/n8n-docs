---
title: Xero 凭证
description: >-
  Xero 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Xero 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Xero credentials
originalFilePath: integrations/builtin/credentials/xero.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/xero'
url: 'https://docs.n8n.io/integrations/builtin/credentials/xero'
layout:
  description:
    visible: false
---

# Xero 凭证

> **大白话**：Xero 是云会计软件（记账、发票用的）。连它用 OAuth2，先去 Xero 开发者门户的 **My Apps** 里创建一个「OAuth2 自定义连接应用」（Custom Connection），拿到 **Client ID** 和 **Client Secret**，把 n8n 里的 **OAuth Redirect URL** 填进应用的回调地址，再选好权限范围（要完整使用 Xero 节点就勾 `accounting.contacts` 和 `accounting.transactions`）就行。注意：应用名里别带 `n8n` 字样，Xero 不支持。

你可以使用这些凭证对以下节点进行身份验证：

- [Xero](../app-nodes/n8n-nodes-base.xero.md)

## 前提条件

创建一个 [Xero](https://www.xero.com/) 账户。

## 支持的认证方式

- OAuth2

## 相关资源

关于该服务的更多信息，请参考 [Xero 的 API 文档](https://developer.xero.com/documentation/api/accounting/overview)。

## 使用 OAuth2

要配置此凭证，你需要：

- 一个 **Client ID**（客户端 ID）：为自定义连接创建新应用时生成。
- 一个 **Client Secret**（客户端秘密）：为自定义连接创建新应用时生成。

要生成 Client ID 和 Client Secret，请在 Xero 开发者门户的 [**My Apps**](https://developer.xero.com/app/manage) 中[创建一个 OAuth2 自定义连接应用](https://developer.xero.com/documentation/guides/oauth2/custom-connections/)。

为你的应用使用以下设置：

{% hint style="info" %}
**Xero 应用名称**

Xero 不支持在 Xero Developer Centre 里创建名称中包含 `n8n` 的应用实例。
{% endhint %}

- **Integration Type**（集成类型）选择 **Web app**。
- 在 **Company or Application URL**（公司或应用地址）中，填写你的 n8n 服务器地址或反向代理地址。例如云版本用户填：`https://your-username.app.n8n.cloud/`。
- 从 n8n 复制 **OAuth Redirect URL**，在应用里添加为 **OAuth 2.0 redirect URI**（OAuth 2.0 回调地址）。
- 为你的应用选择适当的 **scopes**（权限范围）。更多信息请参考 [OAuth2 Scopes](https://developer.xero.com/documentation/guides/oauth2/scopes/)。
    - 要使用 [Xero](../app-nodes/n8n-nodes-base.xero.md) 节点的全部功能，请添加 `accounting.contacts` 和 `accounting.transactions` 这两个权限范围。

更多信息请参考 Xero 的 [OAuth Custom Connections](https://developer.xero.com/documentation/guides/oauth2/custom-connections) 文档。
