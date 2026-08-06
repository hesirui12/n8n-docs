---
title: Embeddings Google Vertex 节点文档
description: >-
  了解如何在 n8n 中使用 Embeddings Google Vertex 节点。阅读技术文档，把
  Embeddings Google Gemini 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Embeddings Google Vertex 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsgooglevertex.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsgooglevertex
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsgooglevertex
layout:
  description:
    visible: false
---

# Embeddings Google Vertex 节点

> **大白话**：这个节点用谷歌企业云（Google Cloud 的 Vertex AI 平台）上的模型，把一段文字变成一串数字（向量），也就是"嵌入"。它和 Gemini 嵌入节点功能类似，但走的是企业级通道（服务账号认证），适合公司项目、需要统一云上管理资源的场景。

使用 Embeddings Google Vertex 节点为给定的文本生成 embeddings[^1]。

在本页中，你可以找到 Embeddings Google Vertex 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/google/service-account.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

- **Model**（模型）：选择用来生成 embedding 的模型。

想了解有哪些可用的嵌入模型，请看 [Google Vertex AI embeddings API 文档](https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/text-embeddings-api)。

## 模板与示例

[浏览 Embeddings Google Vertex 节点集成模板](https://n8n.io/integrations/embeddings-google-vertex) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Google Generative AI embeddings 文档](https://js.langchain.com/docs/integrations/text_embedding/google_generativeai)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: Embeddings（嵌入）是数据用向量表示的数值形式。AI 通过把数值映射到多个维度，来理解复杂数据和数据之间的关系。向量数据库（vector databases，也叫向量库）就是专门用来存储和读取这些 embeddings 的数据库。
