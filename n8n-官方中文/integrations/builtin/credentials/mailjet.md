---
title: Mailjet 凭证
description: >-
  Mailjet 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Mailjet 的身份。
contentType:
  - integration
  - reference
nodeTitle: Mailjet credentials
originalFilePath: integrations/builtin/credentials/mailjet.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/mailjet'
url: 'https://docs.n8n.io/integrations/builtin/credentials/mailjet'
layout:
  description:
    visible: false
---

# Mailjet 凭证

> **大白话**：Mailjet 是发邮件的服务，也支持发短信。在 n8n 里想用它，就得先填好「邮箱 API 钥匙」或「短信钥匙」这两种凭证，本页就是教你从哪把这些钥匙拿出来。

你可以使用这些凭证来验证以下节点的身份：

- [Mailjet](../app-nodes/n8n-nodes-base.mailjet.md)
- [Mailjet Trigger](../trigger-nodes/n8n-nodes-base.mailjettrigger.md)

## 前提条件

注册一个 [Mailjet](https://www.mailjet.com/) 账号。

## 支持的认证方式

- Email API key（邮箱 API 密钥）：用于 Mailjet 的 Email API（发邮件）
- SMS token（短信令牌）：用于 Mailjet 的 SMS API（发短信）

## 相关资源

关于这两种服务的更多信息，请分别参考 [Mailjet 的 Email API 文档](https://dev.mailjet.com/email/guides/)和 [Mailjet 的 SMS API 文档](https://dev.mailjet.com/sms/reference/send-message/)。

## 使用 Email API key（邮箱 API 密钥）

要配置这个凭证，你需要：

- **API Key（API 密钥）**：在你的 Mailjet [API Key Management](https://app.mailjet.com/signin)（API 密钥管理）页面查看和生成 API 密钥。
- **Secret Key（密钥）**：在你的 Mailjet [API Key Management](https://app.mailjet.com/signin) 页面查看 API Secret Key。
- _可选：_ 是否为此凭证启用 **Sandbox Mode（沙箱模式）**。开启后，所有 API 调用都会走沙箱模式：API 仍然会校验请求数据，但不会真正发送邮件。这样可以在不真正发邮件的情况下排查请求数据是否有错。更多信息请参考 Mailjet 的 [Sandbox Mode 文档](https://dev.mailjet.com/email/guides/send-api-v31/#sandbox-mode)。

对于这个凭证，你可以使用以下任一种组合：

- Mailjet 的主 API key 和 secret key
- 一个子账号（subaccount）的 API key 和 secret key

如何创建更多 API 密钥，请参考 Mailjet 的[如何创建子账号（或附加 API 密钥）文档](https://documentation.mailjet.com/hc/en-us/articles/360042561974-How-to-create-a-subaccount-or-additional-API-Key)。关于子账号是什么、什么时候该用，请参考[什么是子账号以及它对我有什么用？](https://documentation.mailjet.com/hc/en-us/articles/360042561854-What-are-subaccounts-and-how-does-it-help-me)。

## 使用 SMS Token（短信令牌）

要配置这个凭证，你需要：

- 一个访问 **Token（令牌）**：从 Mailjet 的 [SMS Dashboard](https://app.mailjet.com/sms)（短信控制台）生成一个新令牌。
