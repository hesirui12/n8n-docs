---
title: SendGrid 凭证
description: >-
  SendGrid 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来验证
  SendGrid。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: SendGrid 凭证
originalFilePath: integrations/builtin/credentials/sendgrid.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/sendgrid'
url: 'https://docs.n8n.io/integrations/builtin/credentials/sendgrid'
layout:
  description:
    visible: false
---

# SendGrid 凭证

> **大白话**：SendGrid（现属于 Twilio）是一个专业的邮件发送服务，常用于发送营销邮件和系统通知。这篇文档教你怎么在 n8n 里创建并填好 API 密钥，让 n8n 能通过 SendGrid 发邮件。

你可以使用这些凭证来验证以下节点：

- [SendGrid](../app-nodes/n8n-nodes-base.sendgrid.md)

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参阅 [SendGrid 的 API 文档](https://www.twilio.com/docs/sendgrid/api-reference)。

## 使用 API key（API 密钥）

要配置此凭证，你需要一个 [SendGrid](https://sendgrid.com) 账号，以及：

- **API Key（API 密钥）**

创建 API 密钥的步骤：

1. 在 Twilio SendGrid 应用中，前往 **Settings（设置）>** [**API Keys（API 密钥）**](https://app.sendgrid.com/settings/api_keys)。
2. 选择 **Create API Key（创建 API 密钥）**。
3. 为你的 API 密钥输入一个 **Name（名称）**，例如 `n8n integration`。
4. 选择 **Full Access（完全访问）**。
5. 选择 **Create & View（创建并查看）**。
6. 复制密钥，填入你的 n8n 凭证中。

更多信息请参阅 [创建 API 密钥](https://www.twilio.com/docs/sendgrid/api-reference/api-keys/create-api-keys)。
