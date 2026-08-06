---
title: Oracle 数据库向量库节点文档（Oracle Database Vector Store node documentation）
description: 了解如何在 n8n 中使用 Oracle 数据库向量库节点。按照技术文档将 Oracle 数据库向量库节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
layout:
  description:
    visible: false
---

# Oracle 数据库向量库节点（Oracle Database Vector Store node）

{% hint style="info" %}
**大白话**：Oracle 数据库（老牌商用关系数据库）现在也支持「AI Vector Search」——可以直接在数据库表里存向量并做相似度搜索。这个节点让你在 n8n 里操作 Oracle 数据库当向量库：把文档存进向量表、从向量表查出来，或者接给 AI 智能体当工具、配合链使用。适合那些本来就把核心数据放在 Oracle 里的企业用户，数据和向量放一起，不用另建一套系统。注意：你的 Oracle 数据库版本必须支持 AI Vector Search 才能用。
{% endhint %}

使用 Oracle 数据库向量库（Oracle Database Vector Store）节点，把 Oracle 数据库当作向量库[^1]来交互。你可以把文档插入向量表、从向量表获取文档、检索文档提供给连接到链（chain）[^2]的检索器，或者直接连接到智能体（agent）[^3]当作工具（tool）[^4]来用。

本页面包含 Oracle 数据库向量库节点的节点参数，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在这里](../../credentials/oracledb.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**Oracle 数据库向量支持（Oracle Database vector support）**

你的 Oracle 数据库实例必须支持 Oracle AI Vector Search 才能执行向量库操作。更多细节请参考 [Oracle AI Vector Search 指南](https://docs.oracle.com/pls/topic/lookup?ctx=en/database/oracle/oracle-database/26/arpls&id=VECSE-GUID-29B9E7E1-5A99-4D95-8614-58CA07D29957)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点使用模式（Node usage patterns）

你可以用以下几种模式使用 Oracle 数据库向量库节点。

### 作为普通节点插入和检索文档（Use as a regular node to insert and retrieve documents）

你可以把 Oracle 数据库向量库当作普通节点来插入或获取文档。这种模式把 Oracle 数据库向量库放在普通连接流程中，不使用智能体。

你可以在[这个模板](https://n8n.io/workflows/2621-ai-agent-to-chat-with-files-in-supabase-storage/)的场景 1 看到示例（模板用的是 Supabase 向量库，但模式相同）。

### 直接作为工具连接到 AI 智能体（Connect directly to an AI agent as a tool）

你可以把 Oracle 数据库向量库节点直接连接到 [AI 智能体](n8n-nodes-langchain.agent/README.md)的工具连接器，在回答问题时把向量库当作资源来使用。

这里的连接方式为：AI 智能体（工具连接器）→ Oracle 数据库向量库节点。

### 用检索器来获取文档（Use a retriever to fetch documents）

你可以把 [Vector Store Retriever（向量库检索器）](../sub-nodes/n8n-nodes-langchain.retrievervectorstore.md) 节点和 Oracle 数据库向量库节点配合使用，从 Oracle 数据库向量库节点获取文档。这经常和 [Question and Answer Chain（问答链）](n8n-nodes-langchain.chainretrievalqa/README.md) 节点一起用，从向量库里获取与聊天输入匹配的文档。

[连接流程示例](https://n8n.io/workflows/1960-ask-questions-about-a-pdf-using-ai/)（链接的示例用的是 Pinecone，但模式相同）是：问答链（Retriever 连接器）→ 向量库检索器（Vector Store 连接器）→ Oracle 数据库向量库。

### 用向量库问答工具来回答问题（Use the Vector Store Question Answer Tool to answer questions）

另一种模式是用 [Vector Store Question Answer Tool（向量库问答工具）](../sub-nodes/n8n-nodes-langchain.toolvectorstore.md) 总结结果，并回答来自 Oracle 数据库向量库节点的问题。这种模式不是把 Oracle 数据库向量库直接当作工具连接，而是用一个专门设计来总结向量库中数据的工具。

这种场景下的[连接流程](https://n8n.io/workflows/2465-building-your-first-whatsapp-chatbot/)（链接的示例用的是简易向量库，但模式相同）是：AI 智能体（工具连接器）→ 向量库问答工具（Vector Store 连接器）→ Oracle 数据库向量库。

## 节点参数（Node parameters）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/eiIkcF23uZ2A8BkFVQM5/" %}

### 重排结果（Rerank Results）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/KcxcfJWhy81cjCSzO4vQ/" %}

<!-- vale off -->
### Get Many（批量获取）参数
<!-- vale on -->

* **Table Name（表名称）**：输入你想查询的表名。如果表不存在，节点会创建它。
* **Prompt（提示词）**：输入你的搜索查询。
* **Limit（数量限制）**：输入一个数字，设置要从向量库检索多少条结果。例如设为 `10` 就是取最好的十条结果。

### Insert Documents（插入文档）参数

* **Table Name（表名称）**：输入用来存向量的表名。如果表不存在，节点会创建它。

### Retrieve Documents（作为链/工具的向量库）参数

* **Table Name（表名称）**：输入你想查询的表名。

### Retrieve Documents（作为 AI 智能体的工具）参数

* **Name（名称）**：向量库的名称。
* **Description（描述）**：向 LLM 说明这个工具是干什么的。好的、具体的描述能让 LLM 更频繁地产出符合预期的结果。
* **Table Name（表名称）**：输入要查询的 Oracle 数据库向量表。
* **Limit（数量限制）**：输入要从向量库检索多少条结果。例如设为 `10` 就是取最好的十条结果。

## 节点选项（Node options）

### 距离策略（Distance Strategy）

在 **Get Many（批量获取）** 和 **Retrieve Documents（检索文档）** 模式下可用。这是计算两个向量之间距离的方法。从以下选项中选择：

* **Cosine（余弦）**
* **Inner Product（内积）**
* **Euclidean（欧几里得）**
* **Manhattan（曼哈顿）**
* **Euclidean Squared（欧几里得平方）**
* **Hamming（汉明）**

### 元数据过滤器（Metadata Filter）

在 **Get Many（批量获取）**、**Retrieve Documents (As Vector Store for Chain/Tool)（作为链/工具的向量库检索）** 和 **Retrieve Documents (As Tool for AI Agent)（作为 AI 智能体工具的检索）** 模式下可用。搜索数据时，用它来匹配文档关联的元数据。

如果通过界面指定了多个元数据过滤字段，则所有字段都必须匹配。这相当于 `AND`（并且）查询。

对于高级过滤，Oracle 数据库向量库会把元数据过滤器透传给 Oracle AI Vector Search。这支持更丰富的过滤对象，包括数组、嵌套过滤器、`$gte` 之类的比较运算符、`$nin` 之类的排除运算符，以及 `$and` 之类的逻辑运算符。

插入数据时，元数据由文档加载器（document loader）设置。关于加载文档的更多信息，请参考 [Default Data Loader（默认数据加载器）](../sub-nodes/n8n-nodes-langchain.documentdefaultdataloader.md)。

## 模板和示例（Templates and examples）

[浏览 Oracle 数据库向量库节点文档集成模板](https://n8n.io/integrations/oracle-database-vector-store) 或[搜索所有模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

关于 Oracle 数据库中的向量搜索，请参考 [Oracle AI Vector Search 文档](https://docs.oracle.com/en/database/oracle/oracle-database/23/vecse/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: 向量库（vector store），也叫向量数据库，存储信息的数学化表示。配合嵌入和检索器，可以创建一个你的 AI 在回答问题时可以访问的数据库。
[^2]: AI 链（chain）允许你按照一系列组件调用的顺序与大语言模型（LLM）和其他资源交互。n8n 中的 AI 链不使用持久化记忆，所以不能用它来引用之前的上下文（这种情况请用 AI 智能体）。
[^3]: AI 智能体（agent）是能够响应用户请求、做决策并执行真实世界任务的人工智能系统。它们使用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
[^4]: 在 AI 语境中，工具（tool）是一种附加资源，AI 在响应请求时可以查阅它来获取特定信息或功能。AI 模型可以用工具与外部系统交互，或完成特定的、聚焦的任务。
