---
title: Twilio 凭证
description: >-
  Twilio 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Twilio 进行身份验证。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Twilio credentials
originalFilePath: integrations/builtin/credentials/twilio.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/twilio'
url: 'https://docs.n8n.io/integrations/builtin/credentials/twilio'
layout:
  description:
    visible: false
---

# Twilio 凭证

> **大白话**：Twilio 是做短信/电话服务的平台。n8n 连它有两种方式：一种用「Auth Token」（官方只建议本地测试用），一种用「API Key」（生产环境推荐）。核心就三样东西：Account SID、API Key SID、API Key Secret。

你可以使用这些凭证对以下节点进行身份验证：

- [Twilio](../app-nodes/n8n-nodes-base.twilio.md)
- [Twilio trigger](../trigger-nodes/n8n-nodes-base.twiliotrigger.md)

## 支持的认证方式

- **Auth token**：Twilio 建议仅将此方法用于本地测试。
- **API key**：Twilio 建议在生产环境使用此方法。

## 相关资源

更多关于该服务的信息，请参考 [Twilio 的 API 文档](https://www.twilio.com/docs)。

## 使用 Auth Token

要配置此凭证，你需要一个 [Twilio](https://twilio.com/) 账户，以及：

- 你的 Twilio **Account SID**（账户 SID）
- 你的 Twilio **Auth Token**（认证令牌）

设置凭证的步骤：

1. 在 n8n 中，将 **Auth Type**（认证类型）选择为 **Auth Token**。
2. 在 Twilio 中，前往 **Console Dashboard > Account Info**（控制台仪表盘 > 账户信息）。
3. 复制你的 **Account SID** 并填入 n8n 凭证。它相当于用户名。
4. 复制你的 **Auth Token** 并填入 n8n 凭证。它相当于密码。

更多信息请参考 [Auth Tokens and How to Change Them](https://help.twilio.com/articles/223136027-Auth-Tokens-and-How-to-Change-Them)。

## 使用 API key

要配置此凭证，你需要一个 [Twilio](https://twilio.com/) 账户，以及：

- 你的 Twilio **Account SID**（账户 SID）
- **API Key SID**：创建 API key 时生成。
- **API Key Secret**：创建 API key 时生成。

设置凭证的步骤：

1. 在 n8n 中，将 **Auth Type**（认证类型）选择为 **API Key**。
2. 在 Twilio 中，前往 **Console Dashboard > Account Info**（控制台仪表盘 > 账户信息）。
3. 复制你的 **Account SID** 并填入 n8n 凭证。
4. 在 Twilio 中，前往你账户的 [**API keys & tokens**](https://www.twilio.com/console/project/api-keys) 页面。
5. 选择 **Create API Key**（创建 API 密钥）。
6. 为你的 API key 输入一个 **Friendly name**（友好名称），例如 `n8n integration`。
7. 选择你的 **Key type**（密钥类型）。n8n 支持 **Main** 和 **Standard** 两种。更多信息请参考[选择 API key 类型](#选择-api-key-类型)。
8. 选择 **Create API Key**（创建 API 密钥）完成创建。
9. 在 **Copy secret key**（复制密钥）页面，复制密钥对应的 **SID**，填入 n8n 凭证的 **API Key SID** 字段。
10. 在 **Copy secret key**（复制密钥）页面，复制显示的 **Secret**，填入 n8n 凭证的 **API Key Secret** 字段。

更详细的说明请参考 [Create an API key](https://www.twilio.com/docs/iam/api-keys#create-an-api-key)。

### 选择 API key 类型

创建 Twilio API key 时，你必须选择一种密钥类型。n8n 凭证支持 **Main** 和 **Standard** 两种类型。

不同 API key 类型的详细说明：

* **Main**：此类型拥有与使用 Account SID 和 Auth Token 发起 API 请求时同等的访问权限。
* **Standard**：此类型可以访问 Twilio API 中的全部功能，但不包括 API key 资源和 Account 资源。
* **Restricted**：此类型目前处于 beta（测试）阶段。n8n 尚未针对此类型进行过测试；如果你使用它时遇到问题，请告诉我们。

更多关于密钥类型的信息请参考 [Types of API keys](https://www.twilio.com/docs/iam/api-keys#types-of-api-keys)。
