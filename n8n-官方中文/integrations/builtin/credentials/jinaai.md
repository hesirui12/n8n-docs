---
title: Jina AI 凭证
description: >-
  Jina AI 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Jina AI 的身份。
contentType:
  - integration
  - reference
nodeTitle: Jina AI credentials
originalFilePath: integrations/builtin/credentials/jinaai.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/jinaai'
url: 'https://docs.n8n.io/integrations/builtin/credentials/jinaai'
layout:
  description:
    visible: false
---

# Jina AI 凭证

{% hint style="info" %}
**大白话**：Jina AI 提供网页抓取（把网页变成干净文本）和搜索相关的 AI 服务。它最良心的地方是：不用注册账号，直接去官网点几下就能免费拿到一个 API key。把这个 key 填进 n8n 凭证就能用了。新 key 自带 1000 万免费 token，个人非商用足够。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Jina AI](../app-nodes/n8n-nodes-base.jinaai.md)

## 支持的验证方式

* API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Jina AI 的 reader API 文档](https://r.jina.ai/docs) 和 [Jina AI 的 search API 文档](https://s.jina.ai/docs)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

* **API key（API 密钥）**：一个 Jina AI API key。不用注册账号也能免费拿到，步骤如下：
	1. 打开 [Jina AI 官网](https://jina.ai/)。
	2. 在页面上选择 **API**。
	3. 在 API 应用小部件里选择 **API KEY & BILLING（API 密钥与计费）**。
	4. 复制标注为 "This is your unique key. Store it securely!"（这是你的专属密钥，请妥善保存！）的那个密钥。

Jina AI 的 API key 自带 1000 万免费 token，可用于非商业用途。想充值或商用，请在 **API** 小部件的 **API KEY & BILLING** 选项卡里滚动，选择最适合你的充值选项。
