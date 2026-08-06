---
title: Jina AI 节点文档
description: >-
  学习如何在 n8n 中使用 Jina AI 节点。按照技术文档将
  Jina AI 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Jina AI 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.jinaai.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.jinaai'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.jinaai'
---

{% hint style="info" %}
**大白话**：Jina AI 提供两类 AI 工具：Reader（读取器）——把任意网页 URL 变成干净、方便大模型（LLM）读取的文本；以及 Deep Research（深度研究）——自动搜索资料并生成结构化研究报告。这个节点正好把这两类能力接进 n8n，适合做「网页内容抓取喂给 AI、自动生成调研报告」这类流程。
{% endhint %}

# Jina AI 节点

使用 Jina AI 节点来自动化你在 Jina AI 中的工作，并把它与其它应用集成。n8n 内置支持 Jina AI 的大量功能。

在本页你可以看到 Jina AI 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于这个节点的认证信息，请看[这里](../credentials/jinaai.md)。
{% endhint %}

## 操作

* **Reader（读取器）**：
	* **Read（读取）**：从 URL 获取内容，并转换成干净、适合大模型（LLM）读取的格式。
	* **Search（搜索）**：用 Jina AI 进行网页搜索，把排名靠前的结果返回成干净、适合大模型（LLM）读取的格式。
* **Research（研究）**：
	* **Deep Research（深度研究）**：研究一个主题，并生成结构化的研究报告。

## 模板与示例

[浏览 Jina AI 节点的官方集成模板](https://n8n.io/integrations/jina-ai)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Jina AI 的 Reader API 文档](https://r.jina.ai/docs) 和 [Jina AI 的 Search API 文档](https://s.jina.ai/docs)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
