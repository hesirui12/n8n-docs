---
title: Embeddings Cohere 节点文档
description: >-
  了解如何在 n8n 中使用 Embeddings Cohere 节点。阅读技术文档，把
  Embeddings Cohere 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Embeddings Cohere 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingscohere.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingscohere
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingscohere
layout:
  description:
    visible: false
---

# Embeddings Cohere 节点

> **大白话**：这个节点用 Cohere 公司提供的模型，把一段文字变成一串数字（向量），也就是"嵌入"。Cohere 是做文本理解的老牌厂商，它的 embedding 模型尤其擅长英文。做语义搜索、向量库、知识库问答时，先用它给文本"编码"。

使用 Embeddings Cohere 节点为给定的文本生成 embeddings[^1]。

在本页中，你可以找到 Embeddings Cohere 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/cohere.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Model**（模型）：选择用来生成 embedding 的模型。可选：
	* **Embed-English-v2.0(4096 Dimensions)**（英文版，4096 维）
	* **Embed-English-Light-v2.0(1024 Dimensions)**（英文轻量版，1024 维）
	* **Embed-Multilingual-v2.0(768 Dimensions)**（多语言版，768 维）

> 小贴士：维度越高，能表达的信息越丰富，但占用的存储和计算也越多；如果你的文本主要是英文、追求速度，选 Light 版就够了。

想了解有哪些可用模型，请看 [Cohere 的模型文档](https://docs.cohere.com/docs/models)。

## 模板与示例

[浏览 Embeddings Cohere 节点集成模板](https://n8n.io/integrations/embeddings-cohere) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Cohere embeddings 文档](https://js.langchain.com/docs/integrations/text_embedding/cohere/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: Embeddings（嵌入）是数据用向量表示的数值形式。AI 通过把数值映射到多个维度，来理解复杂数据和数据之间的关系。向量数据库（vector databases，也叫向量库）就是专门用来存储和读取这些 embeddings 的数据库。
