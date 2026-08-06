---
title: Question and Answer Chain 节点文档
description: >-
  学习如何在 n8n 中使用 Question and Answer Chain 节点。按照技术文档把 Question and Answer Chain 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: n8n-nodes-langchain.chainretrievalqa
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainretrievalqa/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainretrievalqa
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainretrievalqa
layout:
  description:
    visible: false
---

# Question and Answer Chain 节点（问答链）

{% hint style="info" %}
**大白话**：Question and Answer Chain 节点是「RAG（检索增强生成）问答」的核心节点。它的用法是：你问一个问题（Query），它先从一个向量数据库（vector store）里找出最相关的资料，再交给语言模型结合资料回答你。所以用它之前，你得先接一个向量存储（Vector Store）子节点作为「资料库」。
{% endhint %}

使用 Question and Answer Chain 节点来把一个 [向量存储（vector store）](#user-content-fn-1)[^1] 当作检索器（retriever）使用。

在这个页面上，你可以找到 Question and Answer Chain 节点的节点参数，以及更多资源的链接。

## 节点参数（Node parameters）

### Query（查询）

你想问的问题。

## 模板和示例（Templates and examples）

[浏览 n8n-nodes-langchain.chainretrievalqa 集成模板](https://n8n.io/integrations/retrieval-qanda-chain) 或[搜索全部模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

关于 LangChain 如何把向量存储用作检索器的示例，请参考 [LangChain 的检索链文档](https://js.langchain.com/docs/tutorials/rag/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 常见问题（Common issues）

关于常见错误或问题以及建议的解决方法，请参考[常见问题（Common Issues）](common-issues.md)。

[^1]: 向量存储（vector store），也叫向量数据库，存储的是信息的数学表示。配合 embeddings（嵌入）和检索器（retrievers）使用，可以创建一个 AI 在回答问题时可以访问的数据库。
