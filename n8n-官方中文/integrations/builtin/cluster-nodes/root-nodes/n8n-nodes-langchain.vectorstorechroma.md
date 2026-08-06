---
title: Chroma Vector Store 节点文档
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Chroma Vector Store node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorechroma.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorechroma
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorechroma
description: >-
  学习如何在 n8n 中使用 Chroma Vector Store 节点。按照技术文档把 Chroma Vector Store 节点集成到你的工作流中。
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

# Chroma Vector Store（Chroma 向量存储）

{% hint style="info" %}
**大白话**：Chroma 是一个开源的向量数据库（专门存 AI 的「向量表示」）。这个节点让你把 Chroma 当作资料库用：把文档存进去（Insert Documents），或者按相似度检索出来（Get Many / Retrieve Documents），再喂给 RAG 问答链或 AI Agent 当知识库。适合自建开源方案、不想用云服务的用户。
{% endhint %}

使用 Chroma 节点把你的 Chroma 数据库当作[向量存储](#user-content-fn-1)[^1]来交互。你可以向向量数据库插入文档、从向量数据库获取文档、检索文档提供给连接到链（chain）[^2]的检索器，或者直接把它作为工具[^4]连接给智能体[^3]。

在这个页面上，你可以找到 Chroma 节点的节点参数，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在这里](../../credentials/chroma.md)找到这个节点的认证信息。
{% endhint %}

## 节点使用模式（Node usage patterns）

你可以按以下模式使用 Chroma Vector Store 节点。

### 作为普通节点插入和检索文档（Use as a regular node to insert and retrieve documents）

你可以把 Chroma Vector Store 当作普通节点来插入或获取文档。这种模式把 Chroma Vector Store 放在常规的连接流程中，不使用智能体。

### 作为工具直接连接 AI 智能体（Connect directly to an AI agent as a tool）

你可以把 Chroma Vector Store 节点直接连接到 [AI 智能体](n8n-nodes-langchain.agent/README.md) 的工具（tool）连接器，在回答查询时把向量存储当作资源使用。

这里的连接是：AI agent（tools 连接器）-> Chroma Vector Store 节点。

### 用检索器获取文档（Use a retriever to fetch documents）

你可以把 [Vector Store Retriever（向量存储检索器）](../sub-nodes/n8n-nodes-langchain.retrievervectorstore.md) 节点和 Chroma Vector Store 节点一起使用，从 Chroma Vector Store 节点获取文档。这通常与 [Question and Answer Chain（问答链）](n8n-nodes-langchain.chainretrievalqa/README.md) 节点配合，从向量存储中获取与给定聊天输入匹配的文档。

连接流程的示例如下：

Question and Answer Chain（Retriever 连接器）-> Vector Store Retriever（Vector Store 连接器）-> Chroma Vector Store。

### 用 Vector Store Question Answer 工具回答问题（Use the Vector Store Question Answer Tool to answer questions）

另一种模式是使用 [Vector Store Question Answer Tool（向量存储问答工具）](../sub-nodes/n8n-nodes-langchain.toolvectorstore.md) 来总结结果并回答来自 Chroma Vector Store 节点的问题。这种模式不是把 Chroma Vector Store 直接作为工具连接，而是使用一个专门设计来总结向量存储中数据的工具。

这种情况下的连接流程是：AI agent（tools 连接器）-> Vector Store Question Answer Tool（Vector Store 连接器）-> Chroma Vector store。

## 节点参数（Node parameters）

### Operation Mode（操作模式）

这个向量存储节点有四种模式：**Get Many（获取多条）**、**Insert Documents（插入文档）**、**Retrieve Documents (As Vector Store for Chain/Tool)（检索文档-作为链/工具的向量存储）** 和 **Retrieve Documents (As Tool for AI Agent)（检索文档-作为 AI 智能体的工具）**。你选择的模式决定了你能用这个节点做什么操作，以及有哪些输入和输出可用。

#### Get Many（获取多条）

在这种模式下，你可以通过提供一个提示词（prompt）来从向量数据库检索多条文档。提示词会被嵌入（embed），然后用于相似度搜索。节点会返回与提示词最相似的文档，以及它们的相似度分数。如果你想检索一组相似文档并把它们作为额外上下文传给智能体，这个功能很有用。

#### Insert Documents（插入文档）

使用插入文档模式向你的向量数据库插入新文档。

#### Retrieve Documents (As Vector Store for Chain/Tool)（检索文档-作为链/工具的向量存储）

在「检索文档（作为链/工具的向量存储）」模式下，配合一个向量存储检索器使用：从向量数据库检索文档，并提供给连接到链的检索器。在这种模式下，你必须把节点连接到检索器节点或根节点。

#### Retrieve Documents (As Tool for AI Agent)（检索文档-作为 AI 智能体的工具）

使用「检索文档（作为 AI 智能体的工具）」模式，把向量存储作为回答查询时的工具资源。当向量存储的名称和描述与问题细节匹配时，智能体在组织回答时会使用这个向量存储。

### Rerank Results（结果重排）

启用结果重排[^5]。如果你启用这个选项，你必须给向量存储连接一个重排（reranking）节点。该节点之后会对查询结果重新排序。你可以把这个选项用于 `Get Many`、`Retrieve Documents (As Vector Store for Chain/Tool)` 和 `Retrieve Documents (As Tool for AI Agent)` 模式。

### Get Many 参数（Get Many parameters）

* **Chroma collection name（Chroma 集合名称）**：从获取到的集合列表中选择你的集合。
* **Prompt（提示词）**：输入搜索查询。
* **Limit（限制）**：输入要从向量存储检索多少条结果。例如，设为 `5` 取前五个最佳结果。

这种操作模式包含一个**节点选项**：Metadata Filter（元数据过滤器）

### Insert Documents 参数（Insert Documents parameters）

* **Chroma collection name（Chroma 集合名称）**：从获取到的集合列表中选择你的集合。

### Retrieve Documents（作为链/工具的向量存储）参数（Retrieve Documents (As Vector Store for Chain/Tool) parameters）

* **Chroma collection name（Chroma 集合名称）**：从获取到的集合列表中选择你的集合。

这种操作模式包含一个**节点选项**：Metadata Filter（元数据过滤器）

### Retrieve Documents（作为 AI 智能体的工具）参数（Retrieve Documents (As Tool for AI Agent) parameters）

* **Description（描述）**：向 LLM 说明这个工具是做什么的。一个好的、具体的描述能让 LLM 更频繁地产出期望的结果。
* **Chroma collection name（Chroma 集合名称）**：从获取到的集合列表中选择你的集合。
* **Limit（限制）**：输入要从向量存储检索多少条结果。例如，设为 `5` 取前五个最佳结果。

## 节点选项（Node options）

### Metadata Filter（元数据过滤器）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/9OWZ8hSpVqky4D4xRnYP/" %}

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [LangChain 的 Chroma 文档](https://js.langchain.com/oss/javascript/integrations/vectorstores/chroma)。

查看 n8n 的 [Advanced AI（高级 AI）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai) 文档。

[^1]: 向量存储（vector store），也叫向量数据库，存储的是信息的数学表示。配合 embeddings（嵌入）和检索器（retrievers）使用，可以创建一个 AI 在回答问题时可以访问的数据库。
[^2]: AI 链（AI chains）让你可以按组件调用序列与大语言模型（LLMs）和其他资源交互。n8n 中的 AI 链不使用持久记忆，所以你不能用它们引用之前的上下文（这种情况请使用 AI 智能体）。
[^3]: AI 智能体（AI agents）是人工智能系统，能够响应用户请求、做出决策，并帮用户完成真实世界中的任务。它们使用大语言模型（LLMs）来理解用户输入，并利用手上掌握的信息和资源，决定如何最好地处理请求。
[^4]: 在 AI 语境下，工具（tool）是一种附加资源，AI 在响应请求时可以借助它获取特定信息或实现特定功能。AI 模型可以使用工具来与外部系统交互，或完成特定、聚焦的任务。
[^5]: 重排（reranking）是一种优化候选文档列表顺序的技术，目的是提高搜索结果的相关性。检索增强生成（RAG）和其他应用使用重排来优先排序与生成或下游任务最相关的信息。
