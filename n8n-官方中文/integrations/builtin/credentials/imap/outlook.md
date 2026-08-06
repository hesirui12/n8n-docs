---
title: Outlook.com
description: >-
  Outlook.com IMAP 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Outlook.com IMAP 的身份。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Outlook.com
originalFilePath: integrations/builtin/credentials/imap/outlook.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/imap/outlook'
url: 'https://docs.n8n.io/integrations/builtin/credentials/imap/outlook'
layout:
  description:
    visible: false
---

{% hint style="warning" %}
**微软已移除 Outlook.com 的 IMAP 基础验证（Basic Auth）**

微软已弃用 Exchange Online 和 Outlook.com 的 IMAP 基础验证。因此，IMAP 节点**无法连接 Outlook.com 或 Microsoft 365 账号**。应用专用密码也不能绕过这个限制。

**请改用 [Microsoft Outlook 节点](../../app-nodes/n8n-nodes-base.microsoftoutlook.md)。** 它使用的是 OAuth 2.0，这正是微软现在对邮件访问的要求。

更多信息请参考[微软的弃用公告](https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/deprecation-of-basic-authentication-exchange-online#what-we-are-changing)。
{% endhint %}

# Outlook.com IMAP 凭证

{% hint style="info" %}
**大白话**：重要提示：**这条路已经走不通了**。微软彻底移除了 Outlook.com 和 Microsoft 365 的 IMAP 基础验证，所以 n8n 的 IMAP 节点**连不上 Outlook.com / Microsoft 365 邮箱**，用普通密码或应用专用密码都不行。想监听新邮件，请改用 **Microsoft Outlook 触发器节点**；想做其他 Outlook 自动化，用 **Microsoft Outlook 节点**（走 OAuth 2.0）。别再折腾 IMAP 设置了。
{% endhint %}

由于微软弃用了基础验证（Basic Authentication），n8n 不再支持连接 Outlook.com 和 Microsoft 365 账号的 IMAP 访问。你**不能**使用 IMAP（无论是普通密码还是应用专用密码）来连接 Outlook.com 或 Microsoft 365 账号。

要替代用于接收新邮件的 IMAP 触发器，请使用 [Microsoft Outlook 触发器节点](../../trigger-nodes/n8n-nodes-base.microsoftoutlooktrigger.md)，它支持 Message Received（收到消息）事件。

对于一般的 Microsoft Outlook 自动化，请使用 [Microsoft Outlook 节点](../../app-nodes/n8n-nodes-base.microsoftoutlook.md)，它使用微软要求的 OAuth 2.0。

更多信息请参考[微软的弃用公告](https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/deprecation-of-basic-authentication-exchange-online#what-we-are-changing)。
