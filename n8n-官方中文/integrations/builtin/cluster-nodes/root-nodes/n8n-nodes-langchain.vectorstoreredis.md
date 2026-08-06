---
title: Redis 向量库节点文档（Redis Vector Store node documentation）
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Redis Vector Store node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreredis.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreredis
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreredis
description: >-
  了解如何在 n8n 中使用 Redis 向量库节点。按照技术文档将 Redis 向量库节点集成到你的工作流中。
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

# Redis 向量库（Redis Vector Store）

{% hint style="info" %}
**大白话**：Redis 是非常流行的内存数据库（以速度快著称），新版本（8.0 及以上）自带「Redis Query Engine」向量搜索功能，可以直接当向量库用。这个节点让你在 n8n 里操作 Redis 向量搜索索引：把文档存进去、按相似度查出来，或者接给 AI 智能体当「知识库工具」。因为它够快，很多人用它做「语义缓存」——把之前问过的问题和答案存起来，下次类似问题直接命中，省 LLM 费用。
{% endhint %}

使用 Redis 向量库（Redis Vector Store）节点，把你的 Redis 数据库当作[向量库](#user-content-fn-1)[^1]来交互。你可以把文档插入向量数据库、从向量数据库获取文档、用连接到链（chain）[^2]的检索器检索文档，或者直接连接到智能体（agent）[^3]当作工具（tool）[^4]来用。

本页面包含 Redis 向量库节点的节点参数，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在这里](../../credentials/redis.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 前置条件（Prerequisites）

使用这个节点之前，你需要一个启用了 [Redis Query Engine](https://redis.io/docs/latest/develop/ai/search-and-query/?utm_source=n8n\&utm_medium=docs) 的 Redis 数据库。可以用以下任意一种：

* **Redis 开源版（v8.0 及更高版本）**：默认自带 Redis Query Engine
* [**Redis Cloud**](https://cloud.redis.io/?utm_source=n8n\&utm_medium=docs)：全托管的云服务
* [**Redis Software**](https://redis.io/software/?utm_source=n8n\&utm_medium=docs)：自行管理的部署方式

{% hint style="info" %}
**如果你没有索引，会自动创建一个。**

只有当你想用自定义索引结构或复用已有索引时，才需要提前自己创建索引。否则可以跳过这步，让节点根据你指定的选项自动创建新索引。
{% endhint %}

## 节点使用模式（Node usage patterns）

你可以用以下几种模式使用 Redis 向量库节点：

### 作为普通节点插入和检索文档（Use as a regular node to insert and retrieve documents）

你可以把 Redis 向量库当作普通节点来插入或获取文档。这种模式把 Redis 向量库放在普通连接流程中，不使用智能体。

你可以在[这个模板](https://n8n.io/workflows/10887-reduce-llm-costs-with-semantic-caching-using-redis-vector-store-and-huggingface/)里看到示例，其中语义缓存存在 Redis 里，并在工作流开头用 Redis 向量库节点检索。

### 直接作为工具连接到 AI 智能体（Connect directly to an AI agent as a tool）

你可以把 Redis 向量库节点直接连接到 [AI 智能体](n8n-nodes-langchain.agent/README.md)的工具[^4]连接器，在回答问题时把向量库当作资源来使用。

这里的连接方式为：AI 智能体（工具连接器）→ Redis 向量库节点。

### 用检索器来获取文档（Use a retriever to fetch documents）

你可以把 [Vector Store Retriever（向量库检索器）](../sub-nodes/n8n-nodes-langchain.retrievervectorstore.md) 节点和 Redis 向量库节点配合使用，从 Redis 向量库节点获取文档。这经常和 [Question and Answer Chain（问答链）](n8n-nodes-langchain.chainretrievalqa/README.md) 节点一起用，从向量库里获取与聊天输入匹配的文档。

[连接流程示例](https://n8n.io/workflows/1960-ask-questions-about-a-pdf-using-ai/)（链接的示例用的是 Pinecone，但模式相同）是：问答链（Retriever 连接器）→ 向量库检索器（Vector Store 连接器）→ Redis 向量库。

### 用向量库问答工具来回答问题（Use the Vector Store Question Answer Tool to answer questions）

另一种模式是用 [Vector Store Question Answer Tool（向量库问答工具）](../sub-nodes/n8n-nodes-langchain.toolvectorstore.md) 总结结果，并回答来自 Redis 向量库节点的问题。这种模式不是把 Redis 向量库直接当作工具连接，而是用一个专门设计来总结向量库中数据的工具。

[这个模板](https://n8n.io/workflows/10837-chat-with-github-issues-using-openai-and-redis-vector-search/)展示了如何把向量库问答工具和 Redis 向量库节点一起用。这种场景下的连接流程是：AI 智能体（工具连接器）→ 向量库问答工具（Vector Store 连接器）→ Redis 向量库。

## 节点参数（Node parameters）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/eiIkcF23uZ2A8BkFVQM5/" %}

### 重排结果（Rerank Results）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/KcxcfJWhy81cjCSzO4vQ/" %}

### Get Many（批量获取）参数

* **Redis Index（Redis 索引）**：输入要使用的 Redis 向量搜索索引名称。也可以从列表中选择一个已存在的索引。
* **Prompt（提示词）**：输入搜索查询。
* **Limit（数量限制）**：输入要从向量库检索多少条结果。例如设为 `10` 就是取最好的十条结果。

这种操作模式包含一个**节点选项**：[元数据过滤器（Metadata Filter）](n8n-nodes-langchain.vectorstoreredis.md#metadata-filter)。

### Insert Documents（插入文档）参数

* **Redis Index（Redis 索引）**：输入要使用的 Redis 向量搜索索引名称。也可以从列表中选择一个已存在的索引。

### Retrieve Documents（作为链/工具的向量库）参数

* **Redis Index（Redis 索引）**：输入要使用的 Redis 向量搜索索引名称。也可以从列表中选择一个已存在的索引。

这种操作模式包含一个**节点选项**：[元数据过滤器（Metadata Filter）](n8n-nodes-langchain.vectorstoreredis.md#metadata-filter)。

### Retrieve Documents（作为 AI 智能体的工具）参数

* **Name（名称）**：向量库的名称。
* **Description（描述）**：向 LLM 说明这个工具是干什么的。好的、具体的描述能让 LLM 更频繁地产出符合预期的结果。
* **Redis Index（Redis 索引）**：输入要使用的 Redis 向量搜索索引名称。也可以从列表中选择一个已存在的索引。
* **Limit（数量限制）**：输入要从向量库检索多少条结果。例如设为 `10` 就是取最好的十条结果。

### 包含元数据（Include Metadata）

是否包含文档元数据。

你可以在 [Get Many（批量获取）](n8n-nodes-langchain.vectorstoreredis.md#get-many-parameters) 和 [Retrieve Documents (As Tool for AI Agent)（作为 AI 智能体工具的检索）](n8n-nodes-langchain.vectorstoreredis.md#retrieve-documents-as-tool-for-ai-agent-parameters) 模式中使用它。

## 节点选项（Node options）

### 元数据过滤器（Metadata Filter）

元数据过滤器可用于 [Get Many（批量获取）](n8n-nodes-langchain.vectorstoreredis.md#get-many-parameters)、[Retrieve Documents (As Vector Store for Chain/Tool)（作为链/工具的向量库检索）](n8n-nodes-langchain.vectorstoreredis.md#retrieve-documents-as-vector-store-for-chaintool-parameters) 和 [Retrieve Documents (As Tool for AI Agent)（作为 AI 智能体工具的检索）](n8n-nodes-langchain.vectorstoreredis.md#retrieve-documents-as-tool-for-ai-agent-parameters) 操作模式。这是一个 `OR`（或）查询。如果你指定了多个元数据过滤字段，只要至少其中一个匹配即可。插入数据时，元数据由文档加载器设置。关于加载文档的更多信息，请参考 [Default Data Loader（默认数据加载器）](../sub-nodes/n8n-nodes-langchain.documentdefaultdataloader.md)。

### Redis 配置选项（Redis Configuration Options）

适用于所有操作模式：

* **Metadata Key（元数据键）**：输入 Redis 哈希中元数据字段的键（默认：`metadata`）。
* **Key Prefix（键前缀）**：输入存储文档时使用的键前缀（默认：`doc:`）。
* **Content Key（内容键）**：输入 Redis 哈希中内容字段的键（默认：`content`）。
* **Embedding Key（嵌入键）**：输入 Redis 哈希中嵌入字段的键（默认：`embedding`）。

### 插入选项（Insert Options）

适用于 [Insert Documents（插入文档）](n8n-nodes-langchain.vectorstoreredis.md#insert-documents-parameters) 操作模式：

* **Overwrite Documents（覆盖文档）**：选择是否覆盖已有文档（开启表示覆盖）。同时也会删除索引。
* **Time-to-Live（存活时间）**：输入文档的存活时间（秒）。不会让索引过期。

## 模板和示例（Templates and examples）

[浏览 Redis 向量库节点文档集成模板](https://n8n.io/integrations/redis-vector-store) 或[搜索所有模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

请参考：

* [Redis 向量搜索文档](https://redis.io/docs/latest/develop/ai/search-and-query/vectors/)，了解更多关于 Redis 向量能力的信息。
* [RediSearch 文档](https://redis.io/docs/latest/develop/interact/search-and-query/)，了解更多关于 RediSearch 的信息。
* [LangChain 的 Redis 向量库文档](https://js.langchain.com/docs/integrations/vectorstores/redis)，了解更多关于该服务的信息。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/dN5Se1JVH7wYGtmN4n0v/" %}

[^1]: 向量库（vector store），也叫向量数据库，存储信息的数学化表示。配合嵌入和检索器，可以创建一个你的 AI 在回答问题时可以访问的数据库。
[^2]: AI 链（chain）允许你按照一系列组件调用的顺序与大语言模型（LLM）和其他资源交互。n8n 中的 AI 链不使用持久化记忆，所以不能用它来引用之前的上下文（这种情况请用 AI 智能体）。
[^3]: AI 智能体（agent）是能够响应用户请求、做决策并执行真实世界任务的人工智能系统。它们使用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
[^4]: 在 AI 语境中，工具（tool）是一种附加资源，AI 在响应请求时可以查阅它来获取特定信息或功能。AI 模型可以用工具与外部系统交互，或完成特定的、聚焦的任务。
