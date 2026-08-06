---
title: Embeddings Lemonade 节点文档
description: >-
  了解如何在 n8n 中使用 Embeddings Lemonade 节点。阅读技术文档，把
  Embeddings Lemonade 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Embeddings Lemonade 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingslemonade.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingslemonade
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingslemonade
layout:
  description:
    visible: false
---

# Embeddings Lemonade 节点

> **大白话**：这个节点调用你自己搭的 Lemonade 服务器上托管的模型，把文字变成一串数字（向量），也就是"嵌入"。因为模型跑在你自己（或公司）的服务器上，数据不用出内网，适合对隐私、数据安全要求高、想完全自托管模型的场景。做语义搜索、聚类、相似度匹配等需要向量的任务时用它。

使用 Embeddings Lemonade 节点，通过 Lemonade 服务器托管和管理的模型来生成向量 embeddings。这个节点适合做语义搜索、聚类（把相似的内容归到一起）、相似度匹配，或者任何需要把文本变成数值向量表示的工作流。

在本页中，你可以找到 Embeddings Lemonade 节点支持的操作列表，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/lemonade.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

使用以下参数配置节点。

### Model（模型）

用来生成 embeddings 的模型。模型通过本节点配置的 Lemonade 服务器进行加载和管理。从你的 Lemonade 实例提供的可用模型列表中，选择想要的模型即可。

## 模板与示例

[浏览 Embeddings Lemonade 节点集成模板](https://n8n.io/integrations/embeddings-lemonade) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [Lemonade Server 的文档](https://lemonade-server.ai/docs/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
