---
title: Azure AI Search Vector Store 节点文档
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Azure AI Search Vector Store node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreazureaisearch.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreazureaisearch
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreazureaisearch
description: >-
  学习如何在 n8n 中使用 Azure AI Search Vector Store 节点。按照技术文档把 Azure AI Search Vector Store 节点集成到你的工作流中。
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

# Azure AI Search Vector Store（Azure AI 搜索向量存储）

{% hint style="info" %}
**大白话**：Azure AI Search（以前叫 Azure Cognitive Search）是微软 Azure 云上的搜索服务，自带向量搜索能力，适合做 RAG（检索增强生成）和语义搜索。这个节点让你把文档的内容和它的「向量表示」（embedding）一起存进 Azure AI Search，之后能按相似度检索。适合已经在用 Azure 生态、想把资料库放在云上的用户。
{% endhint %}

Azure AI Search（前身是 Azure Cognitive Search）是一项云搜索服务，为 RAG 和语义搜索应用提供向量搜索能力。使用这个节点来存储、检索和查询向量嵌入（vector embeddings），以及它们对应的内容和元数据。

在这个页面上，你可以找到 Azure AI Search Vector Store 节点的节点参数，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在这里](../../credentials/azureaisearch.md)找到这个节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 前置条件（Prerequisites）

使用这个节点之前，你需要：

1. 一个 [Azure 订阅](https://azure.microsoft.com)
2. 一个 [Azure AI Search 服务](https://learn.microsoft.com/azure/search/search-create-service-portal)
3.  配置 API key 认证（写操作用 admin 密钥，只读操作用 query 密钥）

    设置说明请参见[凭据文档](../../credentials/azureaisearch.md)。

### 索引配置（Index configuration）

如果索引不存在，节点会自动创建。自动创建时，节点会配置：

* 向量字段，维度根据你的 embeddings 模型自动设置
* HNSW 算法，配合 cosine（余弦）度量做高效的相似度搜索
* 用于过滤和检索的内容字段与元数据字段

你也可以在 Azure Portal 里预先创建索引，做自定义配置。示例结构（schema）：

```json
{
  "name": "n8n-vectorstore",
  "fields": [
    {
      "name": "id",
      "type": "Edm.String",
      "key": true,
      "filterable": true
    },
    {
      "name": "content",
      "type": "Edm.String",
      "searchable": true
    },
    {
      "name": "content_vector",
      "type": "Collection(Edm.Single)",
      "searchable": true,
      "vectorSearchDimensions": 1536,
      "vectorSearchProfileName": "n8n-vector-profile"
    },
    {
      "name": "metadata",
      "type": "Edm.String",
      "filterable": true
    }
  ],
  "vectorSearch": {
    "profiles": [
      {
        "name": "n8n-vector-profile",
        "algorithm": "n8n-vector-algorithm"
      }
    ],
    "algorithms": [
      {
        "name": "n8n-vector-algorithm",
        "kind": "hnsw",
        "hnswParameters": {
          "metric": "cosine",
          "m": 4,
          "efConstruction": 400,
          "efSearch": 500
        }
      }
    ]
  }
}
```

{% hint style="info" %}
**向量维度（Vector dimensions）**

`vectorSearchDimensions` 的值必须与你所用 embeddings 模型的输出维度一致。
{% endhint %}

## 节点使用模式（Node usage patterns）

### 作为普通节点插入和检索文档（Use as a regular node to insert and retrieve documents）

不通过智能体，直接把节点用在工作流中来插入或检索文档。参考[这个模板](https://n8n.io/workflows/2621-ai-agent-to-chat-with-files-in-supabase-storage/)了解示例模式（示例用的是 Supabase，但模式完全一样）。

### 作为工具直接连接 AI 智能体（Connect directly to an AI agent as a tool）

连接到 [AI 智能体的](n8n-nodes-langchain.agent/README.md) 工具（tool）连接器，把向量存储当作可搜索的知识库使用：

AI agent（tools 连接器）→ Azure AI Search Vector Store 节点

### 用检索器获取文档（Use a retriever to fetch documents）

配合 [Vector Store Retriever（向量存储检索器）](../sub-nodes/n8n-nodes-langchain.retrievervectorstore.md) 和 [Question and Answer Chain（问答链）](n8n-nodes-langchain.chainretrievalqa/README.md) 做检索增强生成（RAG）：

Question and Answer Chain（Retriever 连接器）→ Vector Store Retriever（Vector Store 连接器）→ Azure AI Search Vector Store

参考[这个示例工作流](https://n8n.io/workflows/1960-ask-questions-about-a-pdf-using-ai/)。

### 使用 Vector Store Question Answer 工具（Use the Vector Store Question Answer Tool）

使用 [Vector Store Question Answer Tool（向量存储问答工具）](../sub-nodes/n8n-nodes-langchain.toolvectorstore.md) 来总结内容并回答问题：

AI agent（tools 连接器）→ Vector Store Question Answer Tool（Vector Store 连接器）→ Azure AI Search Vector Store

参考[这个示例](https://n8n.io/workflows/2465-building-your-first-whatsapp-chatbot/)。

## 节点参数（Node parameters）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/5aeZAt5P1m2YndTmiFTG/" %}

### Rerank Results（结果重排）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/KcxcfJWhy81cjCSzO4vQ/" %}

{% hint style="info" %}
**Azure AI Search 语义重排（semantic reranking）**

当你使用带语义配置（semantic configuration）的 **Semantic Hybrid（语义混合）** 查询模式时，Azure AI Search 有内置的[语义重排](https://learn.microsoft.com/azure/search/semantic-search-overview)功能。使用方法：

1. 在 Options（选项）里把 **Query Mode（查询模式）** 设置为 **Semantic Hybrid（语义混合）**
2. 把 **Semantic Configuration（语义配置）** 设置为你的配置名称（如果不指定，默认是 `semantic-search-config`）

内置的语义重排器使用机器学习模型来提升相关性。你还可以在语义重排之后再串联一个额外的重排节点做进一步优化。

只有你的索引定义了语义配置，[语义重排](https://learn.microsoft.com/azure/search/semantic-search-overview)才可用。
{% endhint %}

### Get Many 参数（Get Many parameters）

* **Endpoint（端点）**：你的 Azure AI Search 端点（格式：`https://your-service.search.windows.net`）
* **Index Name（索引名称）**：要查询的索引
* **Limit（限制）**：最多返回的文档数（默认：4）

### Insert Documents 参数（Insert Documents parameters）

* **Endpoint（端点）**：你的 Azure AI Search 端点
* **Index Name（索引名称）**：要使用的索引（如果不存在会自动创建）
* **Batch Size（批大小）**：每次批量上传到 Azure AI Search 的文档数。根据文档大小和你的服务层级限制来调整。这个设置只控制上传的批处理——embedding 生成的批处理是在 embeddings 节点里配置的。

### Update Documents 参数（Update Documents parameters）

* **Endpoint（端点）**：你的 Azure AI Search 端点
* **Index Name（索引名称）**：要更新的索引

### Retrieve Documents 参数（作为 Chain/Tool 的向量存储）（Retrieve Documents parameters (As Vector Store for Chain/Tool)）

* **Endpoint（端点）**：你的 Azure AI Search 端点
* **Index Name（索引名称）**：要查询的索引

### Retrieve Documents 参数（作为 AI Agent 的工具）（Retrieve Documents (As Tool for AI Agent) parameters）

* **Name（名称）**：展示给 LLM 看的工具名称
* **Description（描述）**：向 LLM 说明这个工具是做什么的。描述要具体，帮助 LLM 决定什么时候使用这个工具。
* **Endpoint（端点）**：你的 Azure AI Search 端点
* **Index Name（索引名称）**：要查询的索引
* **Limit（限制）**：最多检索的结果数（例如 `10` 表示取 10 个最佳匹配）

## 节点选项（Node options）

### Options（选项）

* **Filter（过滤器）**：[OData 过滤表达式](https://learn.microsoft.com/azure/search/search-query-odata-filter)，按文档字段或元数据过滤结果。过滤示例见下文。
* **Query Mode（查询模式）**：要使用的搜索策略：
  * **Vector（向量）**：只用 embeddings 做相似度搜索
  * **Keyword（关键词）**：使用 BM25 排序的全文搜索
  * **Hybrid（混合）**（默认）：结合向量搜索和关键词搜索，用 RRF（Reciprocal Rank Fusion，倒数排名融合）合并结果
  * **Semantic Hybrid（语义混合）**：带[语义重排](https://learn.microsoft.com/azure/search/semantic-search-overview)的混合搜索，相关性更高
* **Semantic Configuration（语义配置）**：用于[语义排序](https://learn.microsoft.com/azure/search/semantic-search-overview)的语义配置名称。如果不指定，默认是 `semantic-search-config`。只有当你在索引中预创建了自定义名称的语义配置时才需要填写。

{% hint style="info" %}
**查询模式的选择（Query mode selection）**

语义相似度用 **Vector（向量）**，精确词匹配用 **Keyword（关键词）**，均衡结果用 **Hybrid（混合）**，当你在索引里配置了语义搜索、追求最大相关性时用 **Semantic Hybrid（语义混合）**。
{% endhint %}

### OData 过滤示例（OData filter examples）

Azure AI Search 使用 [OData 语法](https://learn.microsoft.com/azure/search/search-query-odata-filter) 进行过滤。元数据字段使用 `metadata/fieldName` 格式访问。

**按文档 ID 过滤（Filter by document ID）：**

```
id eq '3da6491a-f930-4a4e-9471-c05dcd450ba0'
```

**按元数据字段过滤（Filter by metadata field）：**

```
metadata/source eq 'user-guide'
```

**复杂的 AND 过滤（Complex AND filter）：**

```
metadata/category eq 'technology' and metadata/author eq 'John'
```

**复杂的 OR 过滤（Complex OR filter）：**

```
metadata/source eq 'user-guide' or metadata/rating ge 4
```

**数值比较（Numeric comparison）：**

```
metadata/rating ge 4 and metadata/rating lt 10
```

**带 NOT 的字符串匹配（String matching with NOT）：**

```
metadata/category eq 'technology' and metadata/title ne 'Deprecated'
```

**支持的 OData 运算符（Supported OData operators）：**

* 比较：`eq`、`ne`、`gt`、`ge`、`lt`、`le`
* 逻辑：`and`、`or`、`not`
* 字符串函数：`startswith()`、`endswith()`、`contains()`
* 集合函数：`any()`、`all()`

{% hint style="info" %}
**过滤格式（Filter format）**

过滤器在所有查询模式（Vector、Keyword、Hybrid、Semantic Hybrid）和所有操作模式（retrieve、load、retrieve-as-tool）下都有效。
{% endhint %}

## Azure AI Search 特有功能（Azure AI Search specific features）

### 带 RRF 的混合搜索（Hybrid search with RRF）

Azure AI Search 的混合搜索使用 Reciprocal Rank Fusion（倒数排名融合）把向量结果和关键词结果合并，比单独使用任何一种方法都更准确。

### [语义排序（Semantic ranking）](https://learn.microsoft.com/azure/search/semantic-search-overview)

Semantic Hybrid（语义混合）模式会应用机器学习模型，基于对你查询的语义理解对结果重新排序。这需要你的索引里有一个语义配置。

### OData 过滤器（OData filters）

使用 OData 语法，在向量搜索执行之前按文档字段或元数据过滤。当你需要从特定来源或具有特定属性的结果时，这能提高性能和精度。

### HNSW 算法（HNSW algorithm）

Azure AI Search 使用 HNSW（Hierarchical Navigable Small World，分层可导航小世界）图做近似最近邻搜索，在大规模数据下也能快速检索，并且可以配置准确率/速度的权衡。

## 故障排查（Troubleshooting）

### 索引问题（Index issues）

**找不到索引（Index not found）**：确认索引名称正确（区分大小写），并且在你的 Azure AI Search 服务中存在。如果用的是自动创建，检查索引是否创建成功。

**向量维度不匹配（Vector dimension mismatch）**：确保你的 embedding 模型维度与索引向量字段维度一致。检查索引结构，确认 `vectorSearchDimensions` 设置。

**文档插入失败（Document insert failures）**：

* 确认写权限（需要 admin API key）
* 检查文档字段是否与索引结构匹配
* 确保文档中提供了必填字段
* 如果大批量文档超时，检查批大小设置

### 过滤问题（Filter issues）

**过滤器不生效（Filter not working）**：

* 确认 OData 语法正确
* 确保元数据字段使用 `metadata/` 前缀：`metadata/source eq 'value'`
* 检查被过滤的字段在你的索引结构中被标记为 `filterable`
* 先从简单的过滤器（`id eq 'value'`）测起，再试复杂表达式

**无效的 OData 语法（Invalid OData syntax）**：

* 字符串值用单引号：`metadata/source eq 'value'`
* 使用正确的运算符：`eq`、`ne`、`gt`、`ge`、`lt`、`le`、`and`、`or`、`not`
* 语法细节参考 [OData 过滤文档](https://learn.microsoft.com/azure/search/search-query-odata-filter)

### 连接问题（Connection issues）

**无法连接（Unable to connect）**：

* 确认端点 URL 格式：`https://your-service.search.windows.net`
* 确认你的 Azure AI Search 服务正在运行且可访问
* 检查网络安全组、防火墙规则和私有端点（private endpoint）配置
* 如果 n8n 托管在 Azure 上，且使用私有端点，确认虚拟网络对等（peering）或服务端点配置

### 认证问题（Authentication issues）

包括 API key 错误在内的认证问题排查，请参考[凭据文档的故障排查部分](../../credentials/azureaisearch.md#troubleshooting)。

## 模板和示例（Templates and examples）

[浏览 Azure AI Search Vector Store 节点文档集成模板](https://n8n.io/integrations/azure-ai-search-vector-store) 或[搜索全部模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

* [Azure AI Search 向量搜索文档](https://learn.microsoft.com/azure/search/vector-search-overview)
* [LangChain Azure AI Search 集成](https://js.langchain.com/docs/integrations/vectorstores/azure_aisearch)
* [Azure AI Search REST API 参考](https://learn.microsoft.com/rest/api/searchservice/)
* [Azure AI Search 的 OData 过滤语法](https://learn.microsoft.com/azure/search/search-query-odata-filter)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/dN5Se1JVH7wYGtmN4n0v/" %}
