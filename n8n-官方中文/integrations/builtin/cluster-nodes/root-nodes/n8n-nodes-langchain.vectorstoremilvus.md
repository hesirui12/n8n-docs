---
title: Milvus Vector Store 节点文档
description: >-
  学习如何在 n8n 中使用 Milvus Vector Store 节点。按照技术文档把 Milvus Vector Store 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Milvus Vector Store node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoremilvus.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoremilvus
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoremilvus
description: >-
  学习如何在 n8n 中使用 Milvus Vector Store 节点。按照技术文档把 Milvus Vector Store 节点集成到你的工作流中。
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

# Milvus Vector Store（Milvus 向量存储）

{% hint style="info" %}
**大白话**：Milvus 是一个开源的云原生向量数据库（托管版叫 Zilliz Cloud），专门用来存海量向量并做相似度检索。这个节点让你把 Milvus 当作资料库：把文档存进去（Insert Documents），或按相似度检索出来（Get Many / Retrieve Documents），再喂给 RAG 问答链或 AI Agent 当知识库。适合数据量大、需要自建或上云的专业用户。
{% endhint %}

使用 Milvus 节点把你的 Milvus 数据库当作[向量存储](#user-content-fn-1)[^1]来交互。你可以向向量数据库插入文档、从向量数据库获取文档、检索文档提供给连接到链（chain）[^2]的检索器，或者直接把它作为工具[^4]连接给智能体[^3]。

在这个页面上，你可以找到 Milvus 节点的节点参数，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在这里](../../credentials/milvus.md)找到这个节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点使用模式（Node usage patterns）

你可以按以下模式使用 Milvus Vector Store 节点。

### 作为普通节点插入和检索文档（Use as a regular node to insert and retrieve documents）

你可以把 Milvus Vector Store 当作普通节点来插入或获取文档。这种模式把 Milvus Vector Store 放在常规的连接流程中，不使用智能体。

参考这个[示例模板](https://n8n.io/workflows/3573-create-a-rag-system-with-paul-essays-milvus-and-openai-for-cited-answers/)，看看如何构建一个把文档存进 Milvus、再检索出来支持带引用的聊天问答系统。

### 作为工具直接连接 AI 智能体（Connect directly to an AI agent as a tool）

你可以把 Milvus Vector Store 节点直接连接到 [AI 智能体](n8n-nodes-langchain.agent/README.md) 的工具（tool）连接器，在回答查询时把向量存储当作资源使用。

这里的连接是：AI agent（tools 连接器）-> Milvus Vector Store 节点。参考这个[示例模板](https://n8n.io/workflows/3576-paul-graham-essay-search-and-chat-with-milvus-vector-database/)，里面的数据被嵌入并索引到 Milvus 中，AI Agent 把向量存储当作问答的知识工具。

### 用检索器获取文档（Use a retriever to fetch documents）

你可以把 [Vector Store Retriever（向量存储检索器）](../sub-nodes/n8n-nodes-langchain.retrievervectorstore.md) 节点和 Milvus Vector Store 节点一起使用，从 Milvus Vector Store 节点获取文档。这通常与 [Question and Answer Chain（问答链）](n8n-nodes-langchain.chainretrievalqa/README.md) 节点配合，从向量存储中获取与给定聊天输入匹配的文档。

典型的节点连接流程是：Question and Answer Chain（Retriever 连接器）-> Vector Store Retriever（Vector Store 连接器）-> Milvus Vector Store。

看看这个[工作流示例](https://n8n.io/workflows/3574-create-a-paul-graham-essay-qanda-system-with-openai-and-milvus-vector-database/)，了解如何把外部数据摄入 Milvus，并构建一个基于聊天的语义问答系统。

### 用 Vector Store Question Answer 工具回答问题（Use the Vector Store Question Answer Tool to answer questions）

另一种模式是使用 [Vector Store Question Answer Tool（向量存储问答工具）](../sub-nodes/n8n-nodes-langchain.toolvectorstore.md) 来总结结果并回答来自 Milvus Vector Store 节点的问题。这种模式不是把 Milvus Vector Store 直接作为工具连接，而是使用一个专门设计来总结向量存储中数据的工具。

这种情况下的连接流程是：AI agent（tools 连接器）-> Vector Store Question Answer Tool（Vector Store 连接器）-> Milvus Vector store。

## 节点参数（Node parameters）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/eiIkcF23uZ2A8BkFVQM5/" %}

### Rerank Results（结果重排）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/KcxcfJWhy81cjCSzO4vQ/" %}

### Get Many 参数（Get Many parameters）

* **Milvus Collection（Milvus 集合）**：选择或输入要使用的 Milvus Collection。
* **Prompt（提示词）**：输入你的搜索查询。
* **Limit（限制）**：输入要从向量存储检索多少条结果。例如，设为 `10` 取前十个最佳结果。

### Insert Documents 参数（Insert Documents parameters）

* **Milvus Collection（Milvus 集合）**：选择或输入要使用的 Milvus Collection。
* **Clear Collection（清空集合）**：指定在插入新文档之前是否清空集合。

### Retrieve Documents（作为链/工具的向量存储）参数（Retrieve Documents (As Vector Store for Chain/Tool) parameters）

* **Milvus collection（Milvus 集合）**：选择或输入要使用的 Milvus Collection。

### Retrieve Documents（作为 AI 智能体的工具）参数（Retrieve Documents (As Tool for AI Agent) parameters）

* **Name（名称）**：向量存储的名称。
* **Description（描述）**：向 LLM 说明这个工具是做什么的。一个好的、具体的描述能让 LLM 更频繁地产出期望的结果。
* **Milvus Collection（Milvus 集合）**：选择或输入要使用的 Milvus Collection。
* **Limit（限制）**：输入要从向量存储检索多少条结果。例如，设为 `10` 取前十个最佳结果。

## 节点选项（Node options）

### Metadata Filter（元数据过滤器）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/9OWZ8hSpVqky4D4xRnYP/" %}

### Clear Collection（清空集合）

在 **Insert Documents（插入文档）** 模式下可用。在插入新数据之前，删除集合中的所有数据。

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [LangChain 的 Milvus 文档](https://js.langchain.com/docs/integrations/vectorstores/milvus/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: 向量存储（vector store），也叫向量数据库，存储的是信息的数学表示。配合 embeddings（嵌入）和检索器（retrievers）使用，可以创建一个 AI 在回答问题时可以访问的数据库。
[^2]: AI 链（AI chains）让你可以按组件调用序列与大语言模型（LLMs）和其他资源交互。n8n 中的 AI 链不使用持久记忆，所以你不能用它们引用之前的上下文（这种情况请使用 AI 智能体）。
[^3]: AI 智能体（AI agents）是人工智能系统，能够响应用户请求、做出决策，并帮用户完成真实世界中的任务。它们使用大语言模型（LLMs）来理解用户输入，并利用手上掌握的信息和资源，决定如何最好地处理请求。
[^4]: 在 AI 语境下，工具（tool）是一种附加资源，AI 在响应请求时可以借助它获取特定信息或实现特定功能。AI 模型可以使用工具来与外部系统交互，或完成特定、聚焦的任务。
