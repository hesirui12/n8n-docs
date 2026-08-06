---
title: Lemlist 凭证
description: >-
  Lemlist 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Lemlist 的身份。
contentType:
  - integration
  - reference
nodeTitle: Lemlist credentials
originalFilePath: integrations/builtin/credentials/lemlist.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/lemlist'
url: 'https://docs.n8n.io/integrations/builtin/credentials/lemlist'
layout:
  description:
    visible: false
---

# Lemlist 凭证

{% hint style="info" %}
**大白话**：Lemlist 是销售团队用的「冷邮件外联工具」（自动发跟进邮件、个性化开发信）。n8n 连它只需要一个 **API Key**：在 Lemlist 的 **Settings（设置）> Integrations（集成）** 里找到并复制，填进 n8n 就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Lemlist](../app-nodes/n8n-nodes-base.lemlist.md)
- [Lemlist Trigger（触发器）](../trigger-nodes/n8n-nodes-base.lemlisttrigger.md)

## 准备工作

在 [Lemlist](https://www.lemlist.com/) 实例上创建一个账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Lemlist 的 API 文档](https://developer.lemlist.com/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：在 **Settings（设置）> Integrations（集成）** 里查看你的 API key。更多信息请参考 [API 认证文档](https://developer.lemlist.com/#authentication)。
