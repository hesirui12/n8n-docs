---
title: Embeddings Google PaLM 节点文档
description: >-
  了解如何在 n8n 中使用 Embeddings Google PaLM 节点。阅读技术文档，把
  Embeddings Google PaLM 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Embeddings Google PaLM 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsgooglepalm.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsgooglepalm
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsgooglepalm
layout:
  description:
    visible: false
---

# Embeddings Google PaLM 节点

> **大白话**：这个节点用谷歌的 PaLM 模型，把一段文字变成一串数字（向量），也就是"嵌入"。PaLM 是谷歌较早的一代大模型，现在谷歌主推的是 Gemini，所以能用 Gemini 节点就优先用 Gemini；这个节点主要是给还在用 PaLM 的老项目留的。

使用 Embeddings Google PaLM 节点为给定的文本生成 embeddings[^1]。

在本页中，你可以找到 Embeddings Google PaLM 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/googleai.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Model**（模型）：选择用来生成 embedding 的模型。

n8n 会从 Google PaLM API 动态加载模型列表，所以你只会看到你的账号有权限使用的模型。

## 模板与示例

[浏览 Embeddings Google PaLM 节点集成模板](https://n8n.io/integrations/embeddings-google-palm) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Google PaLM embeddings 文档](https://js.langchain.com/v0.2/docs/integrations/text_embedding/google_palm/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: Embeddings（嵌入）是数据用向量表示的数值形式。AI 通过把数值映射到多个维度，来理解复杂数据和数据之间的关系。向量数据库（vector databases，也叫向量库）就是专门用来存储和读取这些 embeddings 的数据库。
