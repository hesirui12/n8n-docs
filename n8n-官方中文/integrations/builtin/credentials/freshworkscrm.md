---
title: Freshworks CRM 凭证
description: >-
  Freshworks CRM 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Freshworks CRM 的身份。
contentType:
  - integration
  - reference
nodeTitle: Freshworks CRM credentials
originalFilePath: integrations/builtin/credentials/freshworkscrm.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/freshworkscrm'
url: 'https://docs.n8n.io/integrations/builtin/credentials/freshworkscrm'
layout:
  description:
    visible: false
---

# Freshworks CRM 凭证

{% hint style="info" %}
**大白话**：Freshworks CRM（也叫 Freshsales）是管理销售线索、客户、交易的工具。n8n 想自动读写这些销售数据，需要两样东西：一把 **API Key（API 密钥）** 和你的 **Domain（域名前缀）**。Domain 只填 `xxx.myfreshworks.com` 里的 `xxx`，不用填完整网址。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Freshworks CRM](../app-nodes/n8n-nodes-base.freshworkscrm.md)

## 准备工作

创建一个 [Freshworks CRM](https://www.freshworks.com/freshsales-crm/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Freshworks CRM 官方 API 文档](https://developers.freshworks.com/crm/api/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：怎么拿到 API key，请参考 [Freshworks CRM API 身份验证文档](https://developers.freshworks.com/crm/api/#authentication) 里的详细说明。
- 你的 Freshworks CRM **Domain（域名）**：填你 Freshworks CRM 账号的子域名。它是网址的一部分，例如 `https://<subdomain>.myfreshworks.com`。所以如果你通过 `https://n8n.myfreshworks.com` 访问 Freshworks CRM，就在 **Domain** 里填 `n8n`。
