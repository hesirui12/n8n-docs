---
title: Outlook.com
description: >-
  Outlook.com Send Email 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证通过 Outlook.com 验证
  Send Email。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Outlook.com
originalFilePath: integrations/builtin/credentials/sendemail/outlook.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/sendemail/outlook'
url: 'https://docs.n8n.io/integrations/builtin/credentials/send-email/outlook'
layout:
  description:
    visible: false
---


# Outlook.com Send Email 凭证

> **大白话**：重大提醒！微软已经下线了 Outlook.com 和 Microsoft 365 的 SMTP「基础认证 + 应用密码」功能。也就是说，**n8n 的 Send Email 节点现在连不上 Outlook.com 和 Microsoft 365 邮箱了**。想发邮件的话，请改用 Microsoft Outlook 节点（用的是 OAuth 2.0 认证）。

{% hint style="warning" %}
**微软已移除 Outlook.com SMTP 的基础认证和应用密码**

微软已弃用 Exchange Online 和 Outlook.com 中 SMTP 的基础认证（Basic Authentication）和应用密码。因此，Send Email 节点**无法再使用用户名/密码或应用密码认证方式连接 Outlook.com 或 Microsoft 365 账号**。

**要从你的 Outlook.com 或 Microsoft 365 账号发送邮件，请使用 [Microsoft Outlook 节点](../../app-nodes/n8n-nodes-base.microsoftoutlook.md)，该节点使用微软要求的 OAuth 2.0 认证。**

更多信息请参阅 [微软的弃用公告](https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/deprecation-of-basic-authentication-exchange-online#what-we-are-changing)。
{% endhint %}
