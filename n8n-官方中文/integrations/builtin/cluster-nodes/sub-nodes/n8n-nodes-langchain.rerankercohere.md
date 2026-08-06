---
title: Reranker Cohere 节点文档
description: >-
  了解如何在 n8n 中使用 Reranker Cohere 节点。阅读技术文档，把
  Cohere 重排序功能集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Reranker Cohere 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.rerankercohere.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.rerankercohere
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.rerankercohere
layout:
  description:
    visible: false
---

# Reranker Cohere 节点

> **大白话**：这个节点用 Cohere 的"重排序（rerank）"模型，把向量库检索回来的文档**重新排个序**——按和问题（query）的相关度从高到低排列。用在 RAG（知识库问答）场景里，可以让最相关的内容排在最前面，回答质量更高。用法：把它连在向量库检索器后面即可。

Reranker Cohere 节点允许你对[向量存储](#user-content-fn-2)[^2]检索出的分块（chunks）进行重排序[^1]。你可以把这个节点连接到向量存储上。

重排序器会根据给定查询，把从向量存储检索到的文档列表按相关度从高到低重新排列。

在本页中，你可以找到 Reranker Cohere 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/cohere.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

### Model（模型）

选择要使用的重排序模型。关于可用模型的更多信息，请看 [Cohere 的模型文档](https://docs.cohere.com/docs/models#rerank)。

## 模板与示例

[浏览 Reranker Cohere 集成模板](https://n8n.io/integrations/reranker-cohere) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: 重排序（reranking）是一种优化候选文档列表顺序的技术，用来提高搜索结果的相关性。检索增强生成（RAG）等应用通过重排序，把最相关的信息优先用于生成或下游任务。
[^2]: 向量存储（vector store，也叫向量数据库）存储信息的数学表示。配合 embeddings（嵌入）和检索器（retrievers）使用，可以创建一个 AI 在回答问题时能访问的数据库。
