---
title: Embeddings OpenAI 节点文档
description: >-
  了解如何在 n8n 中使用 Embeddings OpenAI 节点。阅读技术文档，把
  Embeddings OpenAI 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Embeddings OpenAI 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsopenai.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsopenai
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsopenai
layout:
  description:
    visible: false
---

# Embeddings OpenAI 节点

> **大白话**：这个节点用 OpenAI 的嵌入模型，把一段文字变成一串数字（向量），也就是"嵌入"。这是做语义搜索、向量库、知识库问答最常用的嵌入节点之一，效果稳定、文档多。如果你用的是 OpenAI 兼容接口的自建服务，也能通过设置 Base URL 接进来。

使用 Embeddings OpenAI 节点为给定的文本生成 embeddings[^1]。

在本页中，你可以找到 Embeddings OpenAI 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/openai.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点选项

* **Model**（模型）：选择用来生成 embeddings 的模型。
* **Base URL**（基础 URL）：输入请求要发送到的 URL。如果你用的是自托管的、接口和 OpenAI 兼容的模型服务（比如本地部署的兼容网关），就在这里填它的地址。
* **Batch Size**（批量大小）：输入每个请求最多发送的文档数量。数值越大，每次请求处理的文档越多，但单次请求耗时和费用也会变高。
* **Strip New Lines**（去除换行）：选择是否移除输入文本中的换行符（开启=移除，关闭=保留）。n8n 默认开启。
* **Timeout**（超时时间）：输入单个请求允许的最大耗时（秒）。设为 `-1` 表示不限制超时。

## 模板与示例

[浏览 Embeddings OpenAI 节点集成模板](https://n8n.io/integrations/embeddings-openai) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 OpenAI embeddings 文档](https://js.langchain.com/docs/integrations/text_embedding/openai/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: Embeddings（嵌入）是数据用向量表示的数值形式。AI 通过把数值映射到多个维度，来理解复杂数据和数据之间的关系。向量数据库（vector databases，也叫向量库）就是专门用来存储和读取这些 embeddings 的数据库。
