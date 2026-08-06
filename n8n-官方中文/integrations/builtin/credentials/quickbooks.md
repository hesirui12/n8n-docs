---
title: QuickBooks 凭证
description: >-
  QuickBooks 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  QuickBooks 的身份。
contentType:
  - integration
  - reference
nodeTitle: QuickBooks credentials
originalFilePath: integrations/builtin/credentials/quickbooks.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/quickbooks'
url: 'https://docs.n8n.io/integrations/builtin/credentials/quickbooks'
layout:
  description:
    visible: false
---

# QuickBooks 凭证

{% hint style="info" %}
**大白话**：QuickBooks 是 Intuit 家的「中小企业记账/财务管理」软件。n8n 连它用的是 OAuth2：先去 Intuit 开发者平台创建一个 App（应用），拿到 **Client ID（客户端 ID）** 和 **Client Secret（客户端密钥）**，再把 n8n 的回调地址填进 App。新手建议先选 **Sandbox（沙箱）** 环境练手，别一上来就碰生产环境。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [QuickBooks](../app-nodes/n8n-nodes-base.quickbooks.md)

## 准备工作

注册一个 [Intuit 开发者](https://developer.intuit.com/) 账号。

## 支持的验证方式

- OAuth2

## 相关资源

关于该服务的更多信息，请参考 [Intuit 官方 API 文档](https://developer.intuit.com/app/developer/qbo/docs/develop)。

## 使用 OAuth2

要配置这个凭证，你需要准备：

- **Client ID（客户端 ID）**：创建应用时生成。
- **Client Secret（客户端密钥）**：创建应用时生成。
- **Environment（环境）**：选择这个凭证访问的是 **Production（生产）** 还是 **Sandbox（沙箱）** 环境。

要生成你的 **Client ID** 和 **Client Secret**，请[创建一个应用](https://developer.intuit.com/app/developer/qbo/docs/get-started/start-developing-your-app#create-an-app)。

创建应用时请使用以下设置：

- 为你的应用选择合适的作用域（scopes）。更多说明请参考[了解作用域](https://developer.intuit.com/app/developer/qbo/docs/learn/scopes)。
- 把 n8n 里的 **OAuth Redirect URL（OAuth 回调地址）** 填入应用 **Development（开发）> Keys & OAuth（密钥与 OAuth）** 区域的 **Redirect URI（重定向地址）**。
- 把应用 **Development（开发）> Keys & OAuth（密钥与 OAuth）** 区域里的 **Client ID** 和 **Client Secret** 复制到 n8n 中填写。更多说明请参考[获取你应用的 Client ID 和 Client Secret](https://developer.intuit.com/app/developer/qbo/docs/get-started/get-client-id-and-client-secret)。

关于完整流程的更多说明，请参考 Intuit 的 [OAuth 2.0 配置文档](https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0)。

{% hint style="info" %}
**环境选择**

如果你是从零创建新应用，先从 **Sandbox（沙箱）** 环境开始。生产环境的应用需要满足 Intuit 的所有要求。更多说明请参考 Intuit 的[发布应用文档](https://developer.intuit.com/app/developer/qbo/docs/go-live/publish-app)。
{% endhint %}
