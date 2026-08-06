---
title: Agile CRM 凭证
description: >-
  Agile CRM 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Agile CRM 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Agile CRM credentials
originalFilePath: integrations/builtin/credentials/agilecrm.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/agilecrm'
url: 'https://docs.n8n.io/integrations/builtin/credentials/agilecrm'
layout:
  description:
    visible: false
---

# Agile CRM 凭证

{% hint style="info" %}
**大白话**：Agile CRM 是一个「客户管理（CRM）+ 销售自动化」工具。n8n 连它需要填三样：注册时用的**邮箱**、后台生成的 **REST API Key**、以及你的 **Subdomain（子域名）**（比如 `n8n`）。都在后台设置里能找到。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Agile CRM](../app-nodes/n8n-nodes-base.agilecrm.md)

## 准备工作

注册一个 [Agile CRM](https://www.agilecrm.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Agile CRM 官方 API 文档](https://www.agilecrm.com/api)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个注册过 AgileCRM 的 **Email Address（邮箱地址）**
- 一个 REST **API Key（API 密钥）**：通过 **Admin Settings（管理员设置）> Developers & API（开发者与 API）>** [**REST API key**](https://github.com/agilecrm/rest-api?tab=readme-ov-file#api-key) 查看你的 Agile CRM API key。
- 你的 Agile CRM **Subdomain（子域名）**（例如 `n8n`）
