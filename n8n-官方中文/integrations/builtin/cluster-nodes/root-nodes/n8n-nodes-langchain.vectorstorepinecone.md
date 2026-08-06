---
title: Pinecone 向量库节点文档（Pinecone Vector Store node documentation）
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Pinecone Vector Store node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorepinecone.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorepinecone
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorepinecone
description: >-
  了解如何在 n8n 中使用 Pinecone 向量库节点。按照技术文档将 Pinecone 向量库节点集成到你的工作流中。
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

# Pinecone 向量库（Pinecone Vector Store）

{% hint style="info" %}
**大白话**：Pinecone 是一个专门做向量搜索的云服务（托管型向量数据库），不用自己维护服务器，开箱即用，很多 RAG 项目的首选。这个节点让你在 n8n 里操作 Pinecone：把文档存进「索引（Index）」（相当于一个向量库空间）、按相似度查出来、按 ID 更新数据，或者接给 AI 智能体当「知识库工具」。它里面还有「命名空间（Namespace）」的概念，可以在同一个索引里再细分不同区域。
{% endhint %}

使用 Pinecone 节点把你的 Pinecone 数据库当作[向量库](#user-content-fn-1)[^1]来交互。你可以把文档插入向量数据库、从向量数据库获取文档、检索文档提供给连接到链（chain）[^2]的检索器，或者直接连接到智能体（agent）[^3]当作工具（tool）[^4]来用。你还可以按 ID 更新向量数据库中的条目。

本页面包含 Pinecone 节点的节点参数，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在这里](../../credentials/pinecone.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点使用模式（Node usage patterns）

你可以用以下几种模式使用 Pinecone 向量库节点。

### 作为普通节点插入、更新和检索文档（Use as a regular node to insert, update, and retrieve documents）

你可以把 Pinecone 向量库当作普通节点来插入、更新或获取文档。这种模式把 Pinecone 向量库放在普通连接流程中，不使用智能体。

你可以在[这个模板](https://n8n.io/workflows/2165-chat-with-pdf-docs-using-ai-quoting-sources/)的场景 1 看到示例。

### 直接作为工具连接到 AI 智能体（Connect directly to an AI agent as a tool）

你可以把 Pinecone 向量库节点直接连接到 [AI 智能体](n8n-nodes-langchain.agent/README.md)的工具连接器，在回答问题时把向量库当作资源来使用。

这里的连接方式为：AI 智能体（工具连接器）→ Pinecone 向量库节点。

### 用检索器来获取文档（Use a retriever to fetch documents）

你可以把 [Vector Store Retriever（向量库检索器）](../sub-nodes/n8n-nodes-langchain.retrievervectorstore.md) 节点和 Pinecone 向量库节点配合使用，从 Pinecone 向量库节点获取文档。这经常和 [Question and Answer Chain（问答链）](n8n-nodes-langchain.chainretrievalqa/README.md) 节点一起用，从向量库里获取与聊天输入匹配的文档。

[连接流程示例](https://n8n.io/workflows/1960-ask-questions-about-a-pdf-using-ai/)是：问答链（Retriever 连接器）→ 向量库检索器（Vector Store 连接器）→ Pinecone 向量库。

### 用向量库问答工具来回答问题（Use the Vector Store Question Answer Tool to answer questions）

另一种模式是用 [Vector Store Question Answer Tool（向量库问答工具）](../sub-nodes/n8n-nodes-langchain.toolvectorstore.md) 总结结果，并回答来自 Pinecone 向量库节点的问题。这种模式不是把 Pinecone 向量库直接当作工具连接，而是用一个专门设计来总结向量库中数据的工具。

这种场景下的[连接流程](https://n8n.io/workflows/2705-chat-with-github-api-documentation-rag-powered-chatbot-with-pinecone-and-openai/)是：AI 智能体（工具连接器）→ 向量库问答工具（Vector Store 连接器）→ Pinecone 向量库。

## 节点参数（Node parameters）

### 操作模式（Operation Mode）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/5aeZAt5P1m2YndTmiFTG/" %}

### 重排结果（Rerank Results）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/KcxcfJWhy81cjCSzO4vQ/" %}

### Get Many（批量获取）参数

* **Pinecone Index（Pinecone 索引）**：选择或输入要使用的 Pinecone 索引。
* **Prompt（提示词）**：输入你的搜索查询。
* **Limit（数量限制）**：输入要从向量库检索多少条结果。例如设为 `10` 就是取最好的十条结果。

### Insert Documents（插入文档）参数

* **Pinecone Index（Pinecone 索引）**：选择或输入要使用的 Pinecone 索引。

### Retrieve Documents（作为链/工具的向量库）参数

* **Pinecone Index（Pinecone 索引）**：选择或输入要使用的 Pinecone 索引。

### Retrieve Documents（作为 AI 智能体的工具）参数

* **Name（名称）**：向量库的名称。
* **Description（描述）**：向 LLM 说明这个工具是干什么的。好的、具体的描述能让 LLM 更频繁地产出符合预期的结果。
* **Pinecone Index（Pinecone 索引）**：选择或输入要使用的 Pinecone 索引。
* **Limit（数量限制）**：输入要从向量库检索多少条结果。例如设为 `10` 就是取最好的十条结果。

### **Update Documents（更新文档）** 的参数

* ID

## 节点选项（Node options）

### Pinecone 命名空间（Pinecone Namespace）

在索引内部进一步划分数据存储方式的选项。

### 元数据过滤器（Metadata Filter）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/9OWZ8hSpVqky4D4xRnYP/" %}

### 清空命名空间（Clear Namespace）

在 **Insert Documents（插入文档）** 模式下可用。在插入新数据之前删除命名空间中的所有数据。

## 模板和示例（Templates and examples）

[浏览 Pinecone 向量库节点文档集成模板](https://n8n.io/integrations/pinecone-vector-store) 或[搜索所有模板](https://n8n.io/workflows/)

## 常见问题（FAQ）

### 我如何在 n8n 中把文档存到 Pinecone？

用 **Insert Documents（插入文档）** 操作把 Pinecone 向量库当作[普通节点](#use-as-a-regular-node-to-insert-update-and-retrieve-documents)使用，然后选择你的 **Pinecone Index**。节点会把文档以向量的形式存进 Pinecone，之后你可以再检索它们。

### 我如何检索与查询最相关的文档？

在 **Prompt（提示词）** 字段输入你的搜索内容，用 **Limit（数量限制）** 控制返回多少条结果，例如 `10` 表示取最匹配的十条。详见 [Get Many 参数](#get-many-parameters)。如果想把这些结果喂给总结链，用[检索器](#use-a-retriever-to-fetch-documents)配合问答链节点即可。

### 我如何把向量库作为工具连接到 AI 智能体？

把 Pinecone 向量库节点连接到 AI 智能体的工具连接器，这样智能体在回答问题时就能查询这个向量库。详见[直接作为工具连接到 AI 智能体](#connect-directly-to-an-ai-agent-as-a-tool)。如果想总结结果而不是返回原始文档，用 [Vector Store Question Answer Tool（向量库问答工具）](#use-the-vector-store-question-answer-tool-to-answer-questions)。

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [LangChain 的 Pinecone 文档](https://js.langchain.com/docs/integrations/vectorstores/pinecone/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

### 找到你的 Pinecone 索引和命名空间（Find your Pinecone index and namespace）

你的 Pinecone 索引和命名空间可以在你的 Pinecone 账户里找到。

![Screenshot of a Pinecone account, with the Pinecone index labelled](../../../.gitbook/assets/pinecone-index-namespace.png)

[^1]: 向量库（vector store），也叫向量数据库，存储信息的数学化表示。配合嵌入和检索器，可以创建一个你的 AI 在回答问题时可以访问的数据库。
[^2]: AI 链（chain）允许你按照一系列组件调用的顺序与大语言模型（LLM）和其他资源交互。n8n 中的 AI 链不使用持久化记忆，所以不能用它来引用之前的上下文（这种情况请用 AI 智能体）。
[^3]: AI 智能体（agent）是能够响应用户请求、做决策并执行真实世界任务的人工智能系统。它们使用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
[^4]: 在 AI 语境中，工具（tool）是一种附加资源，AI 在响应请求时可以查阅它来获取特定信息或功能。AI 模型可以用工具与外部系统交互，或完成特定的、聚焦的任务。
