---
title: Freshservice 凭证
description: >-
  Freshservice 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Freshservice 的身份。
contentType:
  - integration
  - reference
nodeTitle: Freshservice credentials
originalFilePath: integrations/builtin/credentials/freshservice.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/freshservice'
url: 'https://docs.n8n.io/integrations/builtin/credentials/freshservice'
layout:
  description:
    visible: false
---

# Freshservice 凭证

{% hint style="info" %}
**大白话**：Freshservice 是 Freshworks 家的 IT 服务台（ITSM）工具，用来管理 IT 工单、资产、变更等。n8n 想自动操作它，需要两样东西：一把 **API Key（API 密钥）** 和你的 **Domain（域名前缀）**。Domain 只填 `xxx.freshservice.com` 里的 `xxx`，不用填完整网址。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Freshservice](../app-nodes/n8n-nodes-base.freshservice.md)

## 准备工作

创建一个 [Freshservice](https://freshservice.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Freshservice 官方 API 文档](https://api.freshservice.com/v2/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：怎么拿到 API key，请参考 [Freshservice API 身份验证文档](https://api.freshservice.com/v2/#authentication) 里的详细说明。
- 你的 Freshservice **Domain（域名）**：填你 Freshservice 账号的子域名。它是网址的一部分，例如 `https://<subdomain>.freshservice.com`。所以如果你通过 `https://n8n.freshservice.com` 访问 Freshservice，就在 **Domain** 里填 `n8n`。
