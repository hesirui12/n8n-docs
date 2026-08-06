---
title: Vector Store Retriever 节点文档
description: >-
  了解如何在 n8n 中使用 Vector Store Retriever 节点。阅读技术文档，把
  Vector Store Retriever 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Vector Store Retriever 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrievervectorstore.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrievervectorstore
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrievervectorstore
layout:
  description:
    visible: false
---

# Vector Store Retriever 节点

> **大白话**：这个检索器节点负责从[向量存储](#user-content-fn-1)[^1]里检索文档。它是 RAG 知识库问答里最常用的一环：Agent 问问题 → 它去向量库按相似度搜出相关文档 → 交给模型当上下文。配置只有一个 **Limit**（限制），设一下最多返回几条结果。

使用 Vector Store Retriever 节点，从[向量存储](#user-content-fn-1)[^1]中检索文档。

在本页中，你可以找到 Vector Store Retriever 节点的参数，以及更多资源链接。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Limit**（限制）：输入最多返回的结果数量。

## 模板与示例

[浏览 Vector Store Retriever 节点集成模板](https://n8n.io/integrations/vector-store-retriever) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 vector store retriever 文档](https://js.langchain.com/docs/how_to/vectorstore_retriever/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: 向量存储（vector store，也叫向量数据库）存储信息的数学表示。配合 embeddings（嵌入）和检索器（retrievers）使用，可以创建一个 AI 在回答问题时能访问的数据库。
