---
title: Simple Vector Store 节点文档
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Simple Vector Store node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreinmemory.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreinmemory
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreinmemory
description: >-
  学习如何在 n8n 中使用 Simple Vector Store 节点。按照技术文档把 Simple Vector Store 节点集成到你的工作流中。
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

# Simple Vector Store（简易向量存储）

{% hint style="info" %}
**大白话**：Simple Vector Store 节点是 n8n「自带的、最简单」的向量数据库——数据直接存在 n8n 的内存里，不需要你部署任何外部数据库。适合开发和测试阶段快速跑通 RAG 流程。**但要注意：数据不持久（重启 n8n 就没了），而且实例上所有用户都能访问，所以千万别往里存敏感信息，正式上线请换用正式向量数据库。**
{% endhint %}

使用 Simple Vector Store 节点在 n8n 的应用内内存中存储和检索 embeddings（嵌入）[^1]。

在这个页面上，你可以找到 Simple Vector Store 节点的节点参数，以及更多资源的链接。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

{% hint style="info" %}
**这个节点和 AI 记忆节点不一样（This node is different from AI memory nodes）**

这里说的简易向量存储，和 [Simple Memory（简易记忆）](../sub-nodes/n8n-nodes-langchain.memorybufferwindow/README.md) 之类的 AI 记忆节点是不同的。

这个节点会在应用内存中创建一个[向量数据库](#user-content-fn-2)[^2]。
{% endhint %}

## 数据安全限制（Data safety limitations）

使用 Simple Vector Store 节点之前，理解它的限制和工作原理很重要。

{% hint style="warning" %}
n8n 建议只把 Simple Vector Store 用于开发用途。
{% endhint %}

### 向量存储数据不持久（Vector store data isn't persistent）

这个节点只把数据存在内存里。n8n 重启时所有数据都会丢失，在内存不足的情况下数据也可能被清除。

### 实例的所有用户都能访问向量存储数据（All instance users can access vector store data）

Simple Vector Store 节点的记忆键（memory key）是全局的，不是按工作流隔离的。

这意味着，实例的所有用户都可以通过添加一个 Simple Vector Store 节点并选择对应的记忆键来访问向量存储数据，无论原始工作流设置了什么访问控制。用 Simple Vector Store 节点录入数据时，注意不要暴露敏感信息。

## 节点使用模式（Node usage patterns）

你可以按以下模式使用 Simple Vector Store 节点。

### 作为普通节点插入和检索文档（Use as a regular node to insert and retrieve documents）

你可以把 Simple Vector Store 当作普通节点来插入或获取文档。这种模式把 Simple Vector Store 放在常规的连接流程中，不使用智能体。

你可以在[这个模板](https://n8n.io/workflows/2465-building-your-first-whatsapp-chatbot/)的第 2 步看到示例。

### 作为工具直接连接 AI 智能体（Connect directly to an AI agent as a tool）

你可以把 Simple Vector Store 节点直接连接到 [AI 智能体](n8n-nodes-langchain.agent/README.md) 的工具[^3]连接器，在回答查询时把向量存储当作资源使用。

这里的连接是：AI agent（tools 连接器）-> Simple Vector Store 节点。

### 用检索器获取文档（Use a retriever to fetch documents）

你可以把 [Vector Store Retriever（向量存储检索器）](../sub-nodes/n8n-nodes-langchain.retrievervectorstore.md) 节点和 Simple Vector Store 节点一起使用，从 Simple Vector Store 节点获取文档。这通常与 [Question and Answer Chain（问答链）](n8n-nodes-langchain.chainretrievalqa/README.md) 节点配合，从向量存储中获取与给定聊天输入匹配的文档。

一个[连接流程示例](https://n8n.io/workflows/1960-ask-questions-about-a-pdf-using-ai/)（链接里的示例用的是 Pinecone，但模式一样）是：Question and Answer Chain（Retriever 连接器）-> Vector Store Retriever（Vector Store 连接器）-> Simple Vector Store。

### 用 Vector Store Question Answer 工具回答问题（Use the Vector Store Question Answer Tool to answer questions）

另一种模式是使用 [Vector Store Question Answer Tool（向量存储问答工具）](../sub-nodes/n8n-nodes-langchain.toolvectorstore.md) 来总结结果并回答来自 Simple Vector Store 节点的问题。这种模式不是把 Simple Vector Store 直接作为工具连接，而是使用一个专门设计来总结向量存储中数据的工具。

这种情况下的[连接流程](https://n8n.io/workflows/2465-building-your-first-whatsapp-chatbot/)是：AI agent（tools 连接器）-> Vector Store Question Answer Tool（Vector Store 连接器）-> Simple Vector store。

## 内存管理（Memory Management）

Simple Vector Store 实现了内存管理，防止内存占用过大：

* 内存压力增大时自动清理旧的向量存储
* 移除超过可配置时间未被访问的不活跃存储

### 配置选项（Configuration Options）

你可以用这些环境变量控制内存使用：

| 变量（Variable） | 类型（Type） | 默认值（Default） | 描述（Description） |
| ----------------------------- | ------ | ------- | ----------------------------------------------------------------------------------- |
| `N8N_VECTOR_STORE_MAX_MEMORY` | Number | -1      | 允许所有向量存储合计占用的最大内存（单位 MB；-1 表示不限制）。 |
| `N8N_VECTOR_STORE_TTL_HOURS`  | Number | -1      | 存储超过多少小时不活跃就会被移除（-1 表示禁用 TTL 清理）。 |

在 n8n Cloud 上，这两个值分别预设为 100MB（大约 8,000 份文档，具体取决于文档大小和元数据）和 7 天。对于自托管实例，两个值默认都是 -1（没有内存限制，也没有基于时间的清理）。

## 节点参数（Node parameters）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/eiIkcF23uZ2A8BkFVQM5/" %}

### Rerank Results（结果重排）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/KcxcfJWhy81cjCSzO4vQ/" %}

### Get Many 参数（Get Many parameters）

* **Memory Key（记忆键）**：选择或创建包含你想查询的向量记忆的键。
* **Prompt（提示词）**：输入搜索查询。
* **Limit（限制）**：输入要从向量存储检索多少条结果。例如，设为 `10` 取前十个最佳结果。

### Insert Documents 参数（Insert Documents parameters）

* **Memory Key（记忆键）**：选择或创建你想把向量记忆存成什么键。
* **Clear Store（清空存储）**：用这个参数控制是否在插入数据之前，把该记忆键在本次工作流中的向量存储清空（开启）。

### Retrieve Documents（作为链/工具的向量存储）参数（Retrieve Documents (As Vector Store for Chain/Tool) parameters）

* **Memory Key（记忆键）**：选择或创建包含你想查询的向量记忆的键。

### Retrieve Documents（作为 AI 智能体的工具）参数（Retrieve Documents (As Tool for AI Agent) parameters）

* **Name（名称）**：向量存储的名称。
* **Description（描述）**：向 LLM 说明这个工具是做什么的。一个好的、具体的描述能让 LLM 更频繁地产出期望的结果。
* **Memory Key（记忆键）**：选择或创建包含你想查询的向量记忆的键。
* **Limit（限制）**：输入要从向量存储检索多少条结果。例如，设为 `10` 取前十个最佳结果。

## 模板和示例（Templates and examples）

[浏览 Simple Vector Store 节点文档集成模板](https://n8n.io/integrations/in-memory-vector-store) 或[搜索全部模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [LangChain 的 Memory Vector Store 文档](https://js.langchain.com/docs/integrations/vectorstores/memory/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: Embeddings（嵌入）是使用向量对数据的数值表示。AI 用它们来理解复杂数据和关系，通过在多个维度上映射值来实现。向量数据库（vector database）或向量存储（vector store）就是专门用来存储和访问 embeddings 的数据库。
[^2]: 向量存储（vector store），也叫向量数据库，存储的是信息的数学表示。配合 embeddings（嵌入）和检索器（retrievers）使用，可以创建一个 AI 在回答问题时可以访问的数据库。
[^3]: 在 AI 语境下，工具（tool）是一种附加资源，AI 在响应请求时可以借助它获取特定信息或实现特定功能。AI 模型可以使用工具来与外部系统交互，或完成特定、聚焦的任务。
