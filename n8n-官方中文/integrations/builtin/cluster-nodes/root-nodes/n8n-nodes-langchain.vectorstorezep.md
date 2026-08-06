---
title: Zep 向量库节点文档（Zep Vector Store node documentation）
contentType:
  - integration
  - reference
nodeTitle: Zep Vector Store node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorezep.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorezep
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorezep
description: >-
  了解如何在 n8n 中使用 Zep 向量库节点。按照技术文档将 Zep 向量库节点集成到你的工作流中。
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

# Zep 向量库（Zep Vector Store）

{% hint style="warning" %}
**已弃用（Deprecated）**

这个节点已被弃用，将在未来版本中移除。
{% endhint %}

{% hint style="info" %}
**大白话**：Zep 是一个主打「长期记忆」的 AI 记忆平台（Graphiti，给 AI 智能体提供长期记忆），同时它也提供向量数据库能力。这个节点曾经让你在 n8n 里操作 Zep 向量数据库：把文档存进去、按相似度查出来，或者接给 AI 智能体当工具。不过**这个节点已经被官方标记为弃用（Deprecated）**，未来版本会移除，新项目建议直接用对应的替代方案，别在新工作流里用它了。
{% endhint %}

使用 Zep 向量库与 Zep 向量数据库交互。你可以把文档插入向量数据库、从向量数据库获取文档、检索文档提供给连接到链（chain）[^1]的检索器，或者直接连接到智能体（agent）[^2]当作工具（tool）[^3]来用。

本页面包含 Zep 向量库节点的节点参数，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在这里](../../credentials/zep.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [Zep Vector Store 集成](https://n8n.io/integrations/zep-vector-store/)页面。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点使用模式（Node usage patterns）

你可以用以下几种模式使用 Zep 向量库节点。

### 作为普通节点插入、更新和检索文档（Use as a regular node to insert, update, and retrieve documents）

你可以把 Zep 向量库当作普通节点来插入或获取文档。这种模式把 Zep 向量库放在普通连接流程中，不使用智能体。

你可以在[这个模板](https://n8n.io/workflows/2621-ai-agent-to-chat-with-files-in-supabase-storage/)的场景 1 看到示例（示例用的是 Supabase，但模式相同）。

### 直接作为工具连接到 AI 智能体（Connect directly to an AI agent as a tool）

你可以把 Zep 向量库节点直接连接到 [AI 智能体](n8n-nodes-langchain.agent/README.md)的工具连接器，在回答问题时把向量库当作资源来使用。

这里的连接方式为：AI 智能体（工具连接器）→ Zep 向量库节点。

### 用检索器来获取文档（Use a retriever to fetch documents）

你可以把 [Vector Store Retriever（向量库检索器）](../sub-nodes/n8n-nodes-langchain.retrievervectorstore.md) 节点和 Zep 向量库节点配合使用，从 Zep 向量库节点获取文档。这经常和 [Question and Answer Chain（问答链）](n8n-nodes-langchain.chainretrievalqa/README.md) 节点一起用，从向量库里获取与聊天输入匹配的文档。

[连接流程示例](https://n8n.io/workflows/1960-ask-questions-about-a-pdf-using-ai/)（示例用的是 Pinecone，但模式相同）是：问答链（Retriever 连接器）→ 向量库检索器（Vector Store 连接器）→ Zep 向量库。

### 用向量库问答工具来回答问题（Use the Vector Store Question Answer Tool to answer questions）

另一种模式是用 [Vector Store Question Answer Tool（向量库问答工具）](../sub-nodes/n8n-nodes-langchain.toolvectorstore.md) 总结结果，并回答来自 Zep 向量库节点的问题。这种模式不是把 Zep 向量库直接当作工具连接，而是用一个专门设计来总结向量库中数据的工具。

这种场景下的[连接流程](https://n8n.io/workflows/2621-ai-agent-to-chat-with-files-in-supabase-storage/)（这个示例用的是 Supabase，但模式相同）是：AI 智能体（工具连接器）→ 向量库问答工具（Vector Store 连接器）→ Zep 向量库。

## 节点参数（Node parameters）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/eiIkcF23uZ2A8BkFVQM5/" %}

### 重排结果（Rerank Results）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/KcxcfJWhy81cjCSzO4vQ/" %}

### Insert Documents（插入文档）参数

* **Collection Name（集合名称）**：输入用来存放数据的集合名称。

### Get Many（批量获取）参数

* **Collection Name（集合名称）**：输入要从哪个集合检索数据。
* **Prompt（提示词）**：输入搜索查询。
* **Limit（数量限制）**：输入要从向量库检索多少条结果。例如设为 `10` 就是取最好的十条结果。

### Retrieve Documents（作为链/工具的向量库）参数

* **Collection Name（集合名称）**：输入要从哪个集合检索数据。

### Retrieve Documents（作为 AI 智能体的工具）参数

* **Name（名称）**：向量库的名称。
* **Description（描述）**：向 LLM 说明这个工具是干什么的。好的、具体的描述能让 LLM 更频繁地产出符合预期的结果。
* **Collection Name（集合名称）**：输入要从哪个集合检索数据。
* **Limit（数量限制）**：输入要从向量库检索多少条结果。例如设为 `10` 就是取最好的十条结果。

## 节点选项（Node options）

### 嵌入维度（Embedding Dimensions）

在嵌入数据和查询数据时必须保持一致。

它设置用来表示一段文本语义含义的浮点数组的大小。

### 是否自动嵌入（Is Auto Embedded）

在 **Insert Documents（插入文档）** 操作模式下可用，默认开启。

关闭它可以在 Zep 里配置嵌入，而不是在 n8n 里配置。

### 元数据过滤器（Metadata Filter）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/9OWZ8hSpVqky4D4xRnYP/" %}

## 模板和示例（Templates and examples）

[浏览 Zep 向量库节点文档集成模板](https://n8n.io/integrations/zep-vector-store) 或[搜索所有模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [LangChain 的 Zep 文档](https://js.langchain.com/docs/integrations/vectorstores/zep/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: AI 链（chain）允许你按照一系列组件调用的顺序与大语言模型（LLM）和其他资源交互。n8n 中的 AI 链不使用持久化记忆，所以不能用它来引用之前的上下文（这种情况请用 AI 智能体）。
[^2]: AI 智能体（agent）是能够响应用户请求、做决策并执行真实世界任务的人工智能系统。它们使用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
[^3]: 在 AI 语境中，工具（tool）是一种附加资源，AI 在响应请求时可以查阅它来获取特定信息或功能。AI 模型可以用工具与外部系统交互，或完成特定的、聚焦的任务。
