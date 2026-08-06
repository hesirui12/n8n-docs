---
title: MongoDB Atlas 向量库节点文档（MongoDB Atlas Vector Store node documentation）
contentType:
  - integration
  - reference
priority: medium
nodeTitle: MongoDB Atlas Vector Store node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoremongodbatlas.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoremongodbatlas
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoremongodbatlas
description: >-
  了解如何在 n8n 中使用 MongoDB Atlas 向量库节点。按照技术文档将 MongoDB Atlas 向量库节点
  集成到你的工作流中。
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

# MongoDB Atlas 向量库（MongoDB Atlas Vector Store）

{% hint style="info" %}
**大白话**：MongoDB Atlas 是 MongoDB 官方的云数据库服务，它的「Vector Search」功能可以直接在 MongoDB 集合里存向量并做相似度搜索。这个节点让你在 n8n 里操作 MongoDB Atlas 的向量搜索索引：插入文档、检索文档，或者接给 AI 智能体当工具、配合链使用。如果你本来就在用 MongoDB，那用这个节点最省事——数据和向量放在同一个地方，不用多维护一套数据库。
{% endhint %}

MongoDB Atlas Vector Search 是 MongoDB Atlas 的一项功能，让用户可以存储和查询向量嵌入。使用这个节点与 MongoDB Atlas 集合中的 Vector Search 索引交互。你可以插入文档、检索文档，以及在链中使用这个向量库或把它作为智能体的工具。

本页面包含 MongoDB Atlas 向量库节点的节点参数，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在这里](../../credentials/mongodb.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 前置条件（Prerequisites）

使用这个节点之前，先在 MongoDB Atlas 集合里创建一个 [Vector Search 索引](https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-type/)。按以下步骤创建：

1. 登录 [MongoDB Atlas 控制台](https://cloud.mongodb.com/)。
2. 选择你的组织和项目。
3. 找到「Search & Vector Search」区域。
4. 选择你的集群，点击「Go to search（去搜索）」。
5. 点击「Create Search Index（创建搜索索引）」。
6. 选择「Vector Search」模式，用可视化编辑器或 JSON 编辑器。例如：

    ```json
    {
      "fields": [
        {
          "type": "vector",
          "path": "<field-name>",
          "numDimensions": 1536, // any other value
          "similarity": "<similarity-function>"
        }
      ]
    }
    ```

    上面这段 JSON 是索引字段配置示例：`type` 为 `vector` 表示向量字段，`path` 是字段名，`numDimensions` 是向量维度，`similarity` 是相似度函数。
7. 根据你的嵌入模型调整「dimensions（维度）」值（例如 OpenAI 的 `text-embedding-small-3` 用 `1536`）。
8. 给你的索引起名并创建。

配置节点时需要用到以下值，请记下来：

* 集合名称（Collection name）
* 向量索引名称（Vector index name）
* 嵌入字段和元数据字段的字段名（Field names for embeddings and metadata）

## 节点使用模式（Node usage patterns）

你可以用以下几种模式使用 MongoDB Atlas 向量库节点：

### 作为普通节点插入和检索文档（Use as a regular node to insert and retrieve documents）

你可以把 MongoDB Atlas 向量库当作普通节点来插入或获取文档。这种模式把 MongoDB Atlas 向量库放在普通连接流程中，不使用智能体。

你可以在[这个模板](https://n8n.io/workflows/2621-ai-agent-to-chat-with-files-in-supabase-storage/)的场景 1 看到示例（模板用的是 Supabase 向量库，但模式相同）。

### 直接作为工具连接到 AI 智能体（Connect directly to an AI agent as a tool）

你可以把 MongoDB Atlas 向量库节点直接连接到 [AI 智能体](n8n-nodes-langchain.agent/README.md)的工具连接器，在回答问题时把向量库当作资源来使用。

这里的连接方式为：AI 智能体（工具连接器）→ MongoDB Atlas 向量库节点。

### 用检索器来获取文档（Use a retriever to fetch documents）

你可以把 [Vector Store Retriever（向量库检索器）](../sub-nodes/n8n-nodes-langchain.retrievervectorstore.md) 节点和 MongoDB Atlas 向量库节点配合使用，从 MongoDB Atlas 向量库节点获取文档。这经常和 [Question and Answer Chain（问答链）](n8n-nodes-langchain.chainretrievalqa/README.md) 节点一起用，从向量库里获取与聊天输入匹配的文档。

[连接流程示例](https://n8n.io/workflows/1960-ask-questions-about-a-pdf-using-ai/)（链接的示例用的是 Pinecone，但模式相同）是：问答链（Retriever 连接器）→ 向量库检索器（Vector Store 连接器）→ MongoDB Atlas 向量库。

### 用向量库问答工具来回答问题（Use the Vector Store Question Answer Tool to answer questions）

另一种模式是用 [Vector Store Question Answer Tool（向量库问答工具）](../sub-nodes/n8n-nodes-langchain.toolvectorstore.md) 总结结果，并回答来自 MongoDB Atlas 向量库节点的问题。这种模式不是把 MongoDB Atlas 向量库直接当作工具连接，而是用一个专门设计来总结向量库中数据的工具。

这种场景下的[连接流程](https://n8n.io/workflows/2465-building-your-first-whatsapp-chatbot/)（链接的示例用的是内存向量库，但模式相同）是：AI 智能体（工具连接器）→ 向量库问答工具（Vector Store 连接器）→ 内存向量库。

## 节点参数（Node parameters）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/eiIkcF23uZ2A8BkFVQM5/" %}

### 重排结果（Rerank Results）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/KcxcfJWhy81cjCSzO4vQ/" %}

### Get Many（批量获取）参数

* **Mongo Collection（MongoDB 集合）**：输入要使用的 MongoDB 集合名称。
* **Vector Index Name（向量索引名称）**：输入 MongoDB Atlas 集合中 Vector Search 索引的名称。
* **Embedding Field（嵌入字段）**：输入文档中存放向量嵌入的字段名。
* **Metadata Field（元数据字段）**：输入文档中存放文本元数据的字段名。

### Insert Documents（插入文档）参数

* **Mongo Collection（MongoDB 集合）**：输入要使用的 MongoDB 集合名称。
* **Vector Index Name（向量索引名称）**：输入 MongoDB Atlas 集合中 Vector Search 索引的名称。
* **Embedding Field（嵌入字段）**：输入文档中存放向量嵌入的字段名。
* **Metadata Field（元数据字段）**：输入文档中存放文本元数据的字段名。

### Retrieve Documents（作为链/工具的向量库）参数

* **Mongo Collection（MongoDB 集合）**：输入要使用的 MongoDB 集合名称。
* **Vector Index Name（向量索引名称）**：输入 MongoDB Atlas 集合中 Vector Search 索引的名称。
* **Embedding Field（嵌入字段）**：输入文档中存放向量嵌入的字段名。
* **Metadata Field（元数据字段）**：输入文档中存放文本元数据的字段名。

### Retrieve Documents（作为 AI 智能体的工具）参数

* **Name（名称）**：向量库的名称。
* **Description（描述）**：向 LLM 说明这个工具是干什么的。好的、具体的描述能让 LLM 更频繁地产出符合预期的结果。
* **Mongo Collection（MongoDB 集合）**：输入要使用的 MongoDB 集合名称。
* **Vector Index Name（向量索引名称）**：输入 MongoDB Atlas 集合中 Vector Search 索引的名称。
* **Limit（数量限制）**：输入要从向量库检索多少条结果。例如设为 `10` 就是取最好的十条结果。

## 节点选项（Node options）

### Options（选项）

* **Metadata Filter（元数据过滤器）**：按元数据过滤结果。

## 模板和示例（Templates and examples）

[浏览 MongoDB Atlas 向量库节点文档集成模板](https://n8n.io/integrations/mongodb-atlas-vector-store) 或[搜索所有模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

请参考：

* [LangChain 的 MongoDB Atlas Vector Search 文档](https://js.langchain.com/docs/integrations/vectorstores/mongodb_atlas)，了解更多关于该服务的信息。
* [MongoDB Atlas Vector Search 文档](https://www.mongodb.com/docs/atlas/atlas-vector-search/)，了解更多关于 MongoDB Atlas Vector Search 的信息。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/dN5Se1JVH7wYGtmN4n0v/" %}
