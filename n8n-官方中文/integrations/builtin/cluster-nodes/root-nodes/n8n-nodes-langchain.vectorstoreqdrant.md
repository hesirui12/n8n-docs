---
title: Qdrant 向量库节点文档（Qdrant Vector Store node documentation）
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Qdrant Vector Store node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreqdrant.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreqdrant
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreqdrant
description: >-
  了解如何在 n8n 中使用 Qdrant 向量库节点。按照技术文档将 Qdrant 向量库节点集成到你的工作流中。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# Qdrant 向量库（Qdrant Vector Store）

{% hint style="info" %}
**大白话**：Qdrant 是一个开源向量数据库，主打高性能相似度搜索，可以自托管也可以用它家的云服务。这个节点让你在 n8n 里操作 Qdrant：把文档存进「集合（Collection）」（相当于一张表）、按相似度查出来，或者接给 AI 智能体当「知识库工具」、配合检索器和问答链做 RAG。集合还可以用 JSON 配置创建，比较灵活。
{% endhint %}

使用 Qdrant 节点把你的 Qdrant 集合当作[向量库](#user-content-fn-1)[^1]来交互。你可以把文档插入向量数据库、从向量数据库获取文档、检索文档提供给连接到链（chain）[^2]的检索器，或者直接连接到智能体（agent）[^3]当作工具（tool）[^4]来用。

本页面包含 Qdrant 节点的节点参数，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在这里](../../credentials/qdrant.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点使用模式（Node usage patterns）

你可以用以下几种模式使用 Qdrant 向量库节点。

### 作为普通节点插入和检索文档（Use as a regular node to insert and retrieve documents）

你可以把 Qdrant 向量库当作普通节点来插入或获取文档。这种模式把 Qdrant 向量库放在普通连接流程中，不使用智能体。

你可以在[这个模板](https://n8n.io/workflows/2440-building-rag-chatbot-for-movie-recommendations-with-qdrant-and-open-ai/)的前半部分看到示例。

### 直接作为工具连接到 AI 智能体（Connect directly to an AI agent as a tool）

你可以把 Qdrant 向量库节点直接连接到 [AI 智能体](n8n-nodes-langchain.agent/README.md)的工具连接器，在回答问题时把向量库当作资源来使用。

这里的连接方式为：AI 智能体（工具连接器）→ Qdrant 向量库节点。

### 用检索器来获取文档（Use a retriever to fetch documents）

你可以把 [Vector Store Retriever（向量库检索器）](../sub-nodes/n8n-nodes-langchain.retrievervectorstore.md) 节点和 Qdrant 向量库节点配合使用，从 Qdrant 向量库节点获取文档。这经常和 [Question and Answer Chain（问答链）](n8n-nodes-langchain.chainretrievalqa/README.md) 节点一起用，从向量库里获取与聊天输入匹配的文档。

[连接流程示例](https://n8n.io/workflows/2183-ai-crew-to-automate-fundamental-stock-analysis-qanda-workflow/)是：问答链（Retriever 连接器）→ 向量库检索器（Vector Store 连接器）→ Qdrant 向量库。

### 用向量库问答工具来回答问题（Use the Vector Store Question Answer Tool to answer questions）

另一种模式是用 [Vector Store Question Answer Tool（向量库问答工具）](../sub-nodes/n8n-nodes-langchain.toolvectorstore.md) 总结结果，并回答来自 Qdrant 向量库节点的问题。这种模式不是把 Qdrant 向量库直接当作工具连接，而是用一个专门设计来总结向量库中数据的工具。

这种场景下的[连接流程](https://n8n.io/workflows/2464-scale-deal-flow-with-a-pitch-deck-ai-vision-chatbot-and-qdrant-vector-store/)是：AI 智能体（工具连接器）→ 向量库问答工具（Vector Store 连接器）→ Qdrant 向量库。

## 节点参数（Node parameters）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/eiIkcF23uZ2A8BkFVQM5/" %}

### 重排结果（Rerank Results）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/KcxcfJWhy81cjCSzO4vQ/" %}

### Get Many（批量获取）参数

* **Qdrant collection name（Qdrant 集合名称）**：输入要使用的 Qdrant 集合名称。
* **Prompt（提示词）**：输入搜索查询。
* **Limit（数量限制）**：输入要从向量库检索多少条结果。例如设为 `10` 就是取最好的十条结果。

这种操作模式包含一个**节点选项**：[元数据过滤器（Metadata Filter）](n8n-nodes-langchain.vectorstoreqdrant.md#metadata-filter)。

### Insert Documents（插入文档）参数

* **Qdrant collection name（Qdrant 集合名称）**：输入要使用的 Qdrant 集合名称。

这种操作模式包含一个**节点选项**：

* **Collection Config（集合配置）**：输入用于创建 Qdrant 集合的 JSON 配置选项。更多信息请参考 Qdrant 的 [Collections（集合）](https://qdrant.tech/documentation/concepts/collections/) 文档。

### Retrieve Documents（作为链/工具的向量库）参数

* **Qdrant Collection（Qdrant 集合）**：输入要使用的 Qdrant 集合名称。

这种操作模式包含一个**节点选项**：[元数据过滤器（Metadata Filter）](n8n-nodes-langchain.vectorstoreqdrant.md#metadata-filter)。

### Retrieve Documents（作为 AI 智能体的工具）参数

* **Name（名称）**：向量库的名称。
* **Description（描述）**：向 LLM 说明这个工具是干什么的。好的、具体的描述能让 LLM 更频繁地产出符合预期的结果。
* **Qdrant Collection（Qdrant 集合）**：输入要使用的 Qdrant 集合名称。
* **Limit（数量限制）**：输入要从向量库检索多少条结果。例如设为 `10` 就是取最好的十条结果。

## 节点选项（Node options）

### 元数据过滤器（Metadata Filter）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/9OWZ8hSpVqky4D4xRnYP/" %}

## 模板和示例（Templates and examples）

[浏览 Qdrant 向量库节点文档集成模板](https://n8n.io/integrations/qdrant-vector-store) 或[搜索所有模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [LangChain 的 Qdrant 文档](https://js.langchain.com/docs/integrations/vectorstores/qdrant)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/dN5Se1JVH7wYGtmN4n0v/" %}

[^1]: 向量库（vector store），也叫向量数据库，存储信息的数学化表示。配合嵌入和检索器，可以创建一个你的 AI 在回答问题时可以访问的数据库。
[^2]: AI 链（chain）允许你按照一系列组件调用的顺序与大语言模型（LLM）和其他资源交互。n8n 中的 AI 链不使用持久化记忆，所以不能用它来引用之前的上下文（这种情况请用 AI 智能体）。
[^3]: AI 智能体（agent）是能够响应用户请求、做决策并执行真实世界任务的人工智能系统。它们使用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
[^4]: 在 AI 语境中，工具（tool）是一种附加资源，AI 在响应请求时可以查阅它来获取特定信息或功能。AI 模型可以用工具与外部系统交互，或完成特定的、聚焦的任务。
