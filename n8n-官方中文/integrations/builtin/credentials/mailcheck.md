---
title: Mailcheck 凭证
description: >-
  Mailcheck 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Mailcheck 的身份。
contentType:
  - integration
  - reference
nodeTitle: Mailcheck credentials
originalFilePath: integrations/builtin/credentials/mailcheck.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/mailcheck'
url: 'https://docs.n8n.io/integrations/builtin/credentials/mailcheck'
layout:
  description:
    visible: false
---

# Mailcheck 凭证

{% hint style="info" %}
**大白话**：Mailcheck 是「邮箱地址验真」服务（帮你判断一个邮箱是不是真的存在、会不会退信，防止邮件营销浪费钱）。n8n 连它只需要一个 **API Key**：在 Mailcheck 后台的 API 区域生成，复制粘贴进 n8n 就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Mailcheck](../app-nodes/n8n-nodes-base.mailcheck.md)

## 准备工作

创建一个 [Mailcheck](https://mailcheck.co/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Mailcheck 的 API 文档](https://app.mailcheck.co/docs?from=docs)。

## 使用 API Key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：在仪表盘的 API 区域生成一个 API Key。详细的步骤请参考 [Mailcheck 的如何创建 API key 文档](https://mailcheck.co/create-api-key)。
