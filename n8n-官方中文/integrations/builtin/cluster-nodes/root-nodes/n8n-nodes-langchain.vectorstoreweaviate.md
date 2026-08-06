---
title: Weaviate 向量库节点文档（Weaviate Vector Store node documentation）
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Weaviate Vector Store node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate
description: >-
  了解如何在 n8n 中使用 Weaviate 向量库节点。按照技术文档将 Weaviate 向量库节点集成到你的工作流中。
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

# Weaviate 向量库（Weaviate Vector Store）

{% hint style="info" %}
**大白话**：Weaviate 是一个开源向量数据库，除了向量搜索还支持混合搜索（向量+关键词）和多租户（multitenancy，比如不同客户的数据隔离）。这个节点让你在 n8n 里操作 Weaviate：把文档存进「集合（Collection）」（相当于一张表）、按相似度查出来，或者接给 AI 智能体当「知识库工具」。它的搜索过滤器功能很丰富，支持 `AND`/`OR` 和各种运算符，还能做混合搜索微调。
{% endhint %}

使用 Weaviate 节点把你的 Weaviate 集合当作[向量库](#user-content-fn-1)[^1]来交互。你可以把文档插入向量数据库，或者从向量数据库检索文档。你也可以检索文档提供给连接到链（chain）[^2]的检索器，或者直接把这个节点连接到智能体（agent）[^3]当作工具（tool）[^4]来用。本页面包含 Weaviate 节点的节点参数，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在这里](../../credentials/weaviate.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点使用模式（Node usage patterns）

你可以用以下几种模式使用 Weaviate 向量库节点。

### 作为普通节点插入和检索文档（Use as a regular node to insert and retrieve documents）

你可以把 Weaviate 向量库当作普通节点来插入或获取文档。这种模式把 Weaviate 向量库放在普通连接流程中，不使用智能体。

### 直接作为工具连接到 AI 智能体（Connect directly to an AI agent as a tool）

你可以把 Weaviate 向量库节点直接连接到 [AI 智能体](n8n-nodes-langchain.agent/README.md)的工具连接器，在回答问题时把向量库当作资源来使用。

这里的连接方式为：AI 智能体（工具连接器）→ Weaviate 向量库节点。

### 用检索器来获取文档（Use a retriever to fetch documents）

你可以把 [Vector Store Retriever（向量库检索器）](../sub-nodes/n8n-nodes-langchain.retrievervectorstore.md) 节点和 Weaviate 向量库节点配合使用，从 Weaviate 向量库节点获取文档。这经常和 [Question and Answer Chain（问答链）](n8n-nodes-langchain.chainretrievalqa/README.md) 节点一起用，从向量库里获取与聊天输入匹配的文档。

### 用向量库问答工具来回答问题（Use the Vector Store Question Answer Tool to answer questions）

另一种模式是用 [Vector Store Question Answer Tool（向量库问答工具）](../sub-nodes/n8n-nodes-langchain.toolvectorstore.md) 总结结果，并回答来自 Weaviate 向量库节点的问题。这种模式不是把 Weaviate 向量库直接当作工具连接，而是用一个专门设计来总结向量库中数据的工具。

## 节点参数（Node parameters）

{% hint style="info" %}
**多租户（Multitenancy）**

你可以把同一个集合中的数据按隔离的租户分开（例如给不同客户）。要做到这一点，你必须在插入和检索对象时都提供 [Tenant Name（租户名称）](n8n-nodes-langchain.vectorstoreweaviate.md#tenant-name)。[在 Weaviate 文档中了解更多关于多租户的内容](https://docs.weaviate.io/weaviate/manage-collections/multi-tenancy)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/eiIkcF23uZ2A8BkFVQM5/" %}

### Get Many（批量获取）参数

* **Weaviate Collection（Weaviate 集合）**：输入要使用的 Weaviate 集合名称。
* **Prompt（提示词）**：输入搜索查询。
* **Limit（数量限制）**：输入要从向量库检索多少条结果。例如设为 `10` 就是取最好的十条结果。

### Insert Documents（插入文档）参数

* **Weaviate Collection（Weaviate 集合）**：输入要使用的 Weaviate 集合名称。
* **Embedding Batch Size（嵌入批量大小）**：单个批次中要嵌入的文档数量。默认是 200 份文档。

### Retrieve Documents（作为链/工具的向量库）参数

* **Weaviate Collection（Weaviate 集合）**：输入要使用的 Weaviate 集合名称。

### Retrieve Documents（作为 AI 智能体的工具）参数

* **Weaviate Collection（Weaviate 集合）**：向量库的名称。
* **Description（描述）**：向 LLM 说明这个工具是干什么的。好的、具体的描述能让 LLM 更频繁地产出符合预期的结果。
* **Weaviate Collection（Weaviate 集合）**：输入要使用的 Weaviate 集合名称。
* **Limit（数量限制）**：输入要从向量库检索多少条结果。例如设为 `10` 就是取最好的十条结果。

### 包含元数据（Include Metadata）

是否包含文档元数据。

你可以在 [Get Many（批量获取）](n8n-nodes-langchain.vectorstoreweaviate.md#get-many) 和 [Retrieve Documents (As Tool for AI Agent)（作为 AI 智能体工具的检索）](n8n-nodes-langchain.vectorstoreweaviate.md#retrieve-documents-as-tool-for-ai-agent-parameters) 模式中使用它。

### 重排结果（Rerank Results）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/KcxcfJWhy81cjCSzO4vQ/" %}

## 节点选项（Node options）

### 搜索过滤器（Search Filters）

可用于 [Get Many（批量获取）](n8n-nodes-langchain.vectorstoreweaviate.md#get-many)、[Retrieve Documents (As Vector Store for Chain/Tool)（作为链/工具的向量库检索）](n8n-nodes-langchain.vectorstoreweaviate.md#retrieve-documents-as-vector-store-for-chaintool) 和 [Retrieve Documents (As Tool for AI Agent)（作为 AI 智能体工具的检索）](n8n-nodes-langchain.vectorstoreweaviate.md#retrieve-documents-as-tool-for-ai-agent) 操作模式。

搜索数据时，用它来匹配与文档关联的元数据。你可以在 [Weaviate 的条件过滤器文档](https://docs.weaviate.io/weaviate/api/graphql/filters) 中了解更多关于运算符和查询结构的内容。

你可以配合不同运算符同时使用 `AND`（并且）和 `OR`（或者）。运算符不区分大小写：

```json
{
  "OR": [
    {
        "path": ["source"],
        "operator": "Equal",
        "valueString": "source1"
    },
    {
        "path": ["source"],
        "operator": "Equal",
        "valueString": "source1"
    }
  ]
}
```

上面这段 JSON 是过滤器示例：`OR` 表示只要满足其中一个条件即可，`path` 是要过滤的字段路径，`operator` 是运算符，`valueString` 是比较的字符串值。

支持的运算符：

| 运算符（Operator）   | 必填字段（Required Field(s)）                    | 说明（Description）                                                                                                                                                              |
| -------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `'equal'`（等于）    | `valueString` 或 `valueNumber`                   | 检查属性是否等于给定的字符串或数字。                                                                                                                                             |
| `'like'`（相似）     | `valueString`                                    | 检查字符串属性是否匹配某个模式（例如子字符串匹配）。                                                                                                                             |
| `'containsAny'`（包含任一） | `valueTextArray` (string\[])              | 检查属性是否包含给定值中的**任意一个**。                                                                                                                                         |
| `'containsAll'`（包含全部） | `valueTextArray` (string\[])              | 检查属性是否包含给定值的**全部**。                                                                                                                                               |
| `'greaterThan'`（大于） | `valueNumber`                                 | 检查属性值是否大于给定的数字。                                                                                                                                                   |
| `'lessThan'`（小于） | `valueNumber`                                    | 检查属性值是否小于给定的数字。                                                                                                                                                   |
| `'isNull'`（是否为空） | `valueBoolean` (true/false)                     | 检查属性是否为 null 或非 null。（[必须在使用前启用](https://docs.weaviate.io/weaviate/manage-collections/collection-operations#set-inverted-index-parameters)）                   |
| `'withinGeoRange'`（地理位置范围） | `valueGeoCoordinates` (包含地理位置数据的对象)   | 按与地理坐标的邻近程度过滤。                                                                                                                                                     |

插入数据时，元数据由文档加载器设置。关于加载文档的更多信息，请参考 [Default Data Loader（默认数据加载器）](../sub-nodes/n8n-nodes-langchain.documentdefaultdataloader.md)。

### 元数据键（Metadata Keys）

你可以定义希望 Weaviate 在查询时返回哪些元数据键。这可以降低网络负载，因为你只会拿到你定义的属性。默认情况下会返回服务器上的所有属性。

可用于 [Get Many（批量获取）](n8n-nodes-langchain.vectorstoreweaviate.md#get-many)、[Retrieve Documents (As Vector Store for Chain/Tool)（作为链/工具的向量库检索）](n8n-nodes-langchain.vectorstoreweaviate.md#retrieve-documents-as-vector-store-for-chaintool) 和 [Retrieve Documents (As Tool for AI Agent)（作为 AI 智能体工具的检索）](n8n-nodes-langchain.vectorstoreweaviate.md#retrieve-documents-as-tool-for-ai-agent) 操作模式。

### 混合搜索：查询文本（Hybrid: Query Text）

提供一段查询文本，把向量搜索和关键词/文本搜索结合起来。

### 混合搜索：解释得分（Hybrid: Explain Score）

是否显示混合搜索与向量搜索之间的融合得分解释。

### 混合搜索：融合类型（Hybrid: Fusion Type）

选择把向量和关键词搜索结果结合起来的融合类型。[了解更多关于融合算法的内容](https://weaviate.io/learn/knowledgecards/fusion-algorithm)。

选项：

* **Relative Score（相对得分）**：使用相对得分融合
* **Ranked（排名）**：使用排名融合

### 混合搜索：自动截断限制（Hybrid: Auto Cut Limit）

通过检测得分的突然跳变来限制结果组数量。[了解更多关于 autocut 的内容](https://docs.weaviate.io/weaviate/api/graphql/additional-operators#autocut)。

### 混合搜索：Alpha 值（Hybrid: Alpha）

改变关键词和向量两个组成部分的相对权重。1.0 = 纯向量，0.0 = 纯关键词。默认是 0.5。[了解更多关于 alpha 参数的内容](https://weaviate.io/learn/knowledgecards/alpha-parameter)。

### 混合搜索：查询属性（Hybrid: Query Properties）

用逗号分隔的属性列表，包含在查询中，可以给属性加权，例如 `"question^2,answer"`。[了解更多关于给属性值设权重的内容](https://docs.weaviate.io/weaviate/search/hybrid#set-weights-on-property-values)。

### 混合搜索：最大向量距离（Hybrid: Max Vector Distance）

设置向量搜索部分允许的最大距离。

### 租户名称（Tenant Name）

要为哪个特定租户存储或检索文档。[了解更多关于多租户的内容](https://weaviate.io/learn/knowledgecards/multi-tenancy)。

{% hint style="info" %}
**必须在创建时启用（Must enable at creation）**

你必须在首次摄入数据时传入租户名称，才能为一个集合启用多租户。集合创建之后就无法再启用或禁用多租户了。
{% endhint %}

### 文本键（Text Key）

文档中包含被嵌入文本的那个键。

### 跳过初始化检查（Skip Init Checks）

是否在实例化客户端时[跳过初始化检查](https://docs.weaviate.io/weaviate/client-libraries/typescript/notes-best-practices#initial-connection-checks)。

### 初始化超时（Init Timeout）

在初始检查期间[超时](https://docs.weaviate.io/weaviate/client-libraries/typescript/notes-best-practices#timeout-values)之前等待的秒数。

### 插入超时（Insert Timeout）

在插入期间[超时](https://docs.weaviate.io/weaviate/client-libraries/typescript/notes-best-practices#timeout-values)之前等待的秒数。

### 查询超时（Query Timeout）

在查询期间[超时](https://docs.weaviate.io/weaviate/client-libraries/typescript/notes-best-practices#timeout-values)之前等待的秒数。

### GRPC 代理（GRPC Proxy）

用于 gRPC 请求的代理。

### 清空数据（Clear Data）

适用于 [Insert Documents（插入文档）](n8n-nodes-langchain.vectorstoreweaviate.md#insert-documents) 操作模式。

是否在插入新数据之前清空集合或租户。

## 模板和示例（Templates and examples）

[浏览 Weaviate 向量库节点文档集成模板](https://n8n.io/integrations/weaviate-vector-store) 或[搜索所有模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [LangChain 的 Weaviate 文档](https://js.langchain.com/docs/integrations/vectorstores/weaviate/)。

关于自托管 Weaviate 集群，请参考 [Weaviate 安装](https://docs.weaviate.io/deploy)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: 向量库（vector store），也叫向量数据库，存储信息的数学化表示。配合嵌入和检索器，可以创建一个你的 AI 在回答问题时可以访问的数据库。
[^2]: AI 链（chain）允许你按照一系列组件调用的顺序与大语言模型（LLM）和其他资源交互。n8n 中的 AI 链不使用持久化记忆，所以不能用它来引用之前的上下文（这种情况请用 AI 智能体）。
[^3]: AI 智能体（agent）是能够响应用户请求、做决策并执行真实世界任务的人工智能系统。它们使用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
[^4]: 在 AI 语境中，工具（tool）是一种附加资源，AI 在响应请求时可以查阅它来获取特定信息或功能。AI 模型可以用工具与外部系统交互，或完成特定的、聚焦的任务。
