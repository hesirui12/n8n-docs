---
title: Freshdesk 凭证
description: >-
  Freshdesk 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Freshdesk 的身份。
contentType:
  - integration
  - reference
nodeTitle: Freshdesk credentials
originalFilePath: integrations/builtin/credentials/freshdesk.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/freshdesk'
url: 'https://docs.n8n.io/integrations/builtin/credentials/freshdesk'
layout:
  description:
    visible: false
---

# Freshdesk 凭证

{% hint style="info" %}
**大白话**：Freshdesk 是一个客服工单系统（客户发邮件/留言进来，客服在后台处理）。n8n 想自动读写这些工单，需要填两样东西：一把 **API Key（API 密钥）** 和你的 **Domain（域名前缀）**。注意 Domain 不是完整网址，只要填网址里 `xxx.freshdesk.com` 的 `xxx` 那一段。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Freshdesk](../app-nodes/n8n-nodes-base.freshdesk.md)

## 准备工作

创建一个 [Freshdesk](https://freshdesk.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Freshdesk 官方 API 文档](https://developers.freshdesk.com/api/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：怎么拿到 API key，请参考 [Freshdesk API 身份验证文档](https://developers.freshdesk.com/api/#authentication) 里的详细说明。
- 你的 Freshdesk **Domain（域名）**：填你 Freshdesk 账号的子域名。它是网址的一部分，例如 `https://<subdomain>.freshdesk.com`。所以如果你通过 `https://n8n.freshdesk.com` 访问 Freshdesk，就在 **Domain** 里填 `n8n`。
