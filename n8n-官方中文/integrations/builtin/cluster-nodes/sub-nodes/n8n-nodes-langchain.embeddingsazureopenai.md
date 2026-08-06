---
title: Embeddings Azure OpenAI 节点文档
description: >-
  了解如何在 n8n 中使用 Embeddings Azure OpenAI 节点。阅读技术文档，把
  Embeddings Azure OpenAI 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Embeddings Azure OpenAI 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsazureopenai.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsazureopenai
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsazureopenai
layout:
  description:
    visible: false
---

# Embeddings Azure OpenAI 节点

> **大白话**：这个节点用微软 Azure 上托管的 OpenAI 模型，把一段文字变成一串数字（向量），也就是"嵌入"。它跟你可能用过的 OpenAI 嵌入模型功能一样，只是走的是 Azure 的服务（适合企业、国内合规或已经在用 Azure 的情况）。做语义搜索、向量库、知识库问答时，先用它给文本"编码"。

使用 Embeddings Azure OpenAI 节点为给定的文本生成 embeddings[^1]。

在本页中，你可以找到 Embeddings Azure OpenAI 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/azureopenai.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点选项

* **Model (Deployment) Name**（模型/部署名称）：选择用于生成 embeddings 的模型（部署）。
* **Batch Size**（批量大小）：输入每个请求最多发送的文档数量。数值越大，每次请求处理的文档越多，但单次请求耗时和费用也会变高。
* **Strip New Lines**（去除换行）：选择是否移除输入文本中的换行符（开启=移除，关闭=保留）。n8n 默认开启。
* **Timeout**（超时时间）：输入单个请求允许的最大耗时（秒）。设为 `-1` 表示不限制超时。

## 模板与示例

[浏览 Embeddings Azure OpenAI 节点集成模板](https://n8n.io/integrations/embeddings-azure-openai) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 OpenAI embeddings 文档](https://js.langchain.com/docs/integrations/text_embedding/azure_openai/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: Embeddings（嵌入）是数据用向量表示的数值形式。AI 通过把数值映射到多个维度，来理解复杂数据和数据之间的关系。向量数据库（vector databases，也叫向量库）就是专门用来存储和读取这些 embeddings 的数据库。
