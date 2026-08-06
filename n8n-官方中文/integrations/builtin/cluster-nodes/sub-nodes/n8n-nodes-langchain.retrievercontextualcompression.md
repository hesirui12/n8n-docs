---
title: Contextual Compression Retriever 节点文档
description: >-
  了解如何在 n8n 中使用 Contextual Compression Retriever 节点。阅读技术文档，把
  Contextual Compression Retriever 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Contextual Compression Retriever 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrievercontextualcompression.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrievercontextualcompression
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrievercontextualcompression
layout:
  description:
    visible: false
---

# Contextual Compression Retriever 节点

> **大白话**：这个检索器节点会结合查询的上下文，来改进从[向量存储](#user-content-fn-1)[^1]做文档相似度搜索返回的结果。通俗讲：搜回来的文档它会"压缩"一下——只留下和问题真正相关的部分，去掉废话，既省 token 又提高回答质量。适合 RAG 知识库问答场景。

Contextual Compression Retriever 节点通过考虑查询的上下文，改进从[向量存储](#user-content-fn-1)[^1]文档相似度搜索返回的答案。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 模板与示例

[浏览 Contextual Compression Retriever 节点集成模板](https://n8n.io/integrations/contextual-compression-retriever) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 contextual compression retriever 文档](https://js.langchain.com/docs/how_to/contextual_compression/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: 向量存储（vector store，也叫向量数据库）存储信息的数学表示。配合 embeddings（嵌入）和检索器（retrievers）使用，可以创建一个 AI 在回答问题时能访问的数据库。
