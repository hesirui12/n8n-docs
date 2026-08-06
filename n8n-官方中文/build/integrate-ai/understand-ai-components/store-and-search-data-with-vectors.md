---
title: What are vector databases?
description: >-
  Understand vector databases. Learn how n8n provides vector databases, along
  with the key components to work with them, including embeddings, retrievers,
  and document loaders.
contentType: explanation
nodeTitle: Store and search data with vectors
originalFilePath: advanced-ai/examples/understand-vector-databases.md
originalUrl: 'https://docs.n8n.io/advanced-ai/examples/understand-vector-databases'
url: >-
  https://docs.n8n.io/build/integrate-ai/understand-ai-components/store-and-search-data-with-vectors
layout:
  description:
    visible: false
---

# 什么是向量数据库？（What are vector databases?）

向量数据库（vector database）把信息存储为数字：

> 向量数据库是一种把数据存储为高维向量（high-dimensional vectors）的数据库，向量是特征或属性的数学表示。（[来源](https://learn.microsoft.com/en-us/semantic-kernel/memories/vector-db)）

这让我们可以进行快速而准确的相似性搜索。有了向量数据库，你不再使用传统的数据库查询方式，而是可以基于语义和上下文含义来搜索相关数据。

## 一个简化的例子（A simplified example）

向量数据库可以存储句子「n8n is a source-available automation tool that you can self-host」（意思是：n8n 是一款源码可用、可自托管的自动化工具），但和把句子存成文本不同，向量数据库存储的是一个表示其特征的维度（dimensions）数组（0 到 1 之间的数字）。这并不是把句子里的每个字母都变成一个数字，而是让向量数据库中的向量来「描述」这个句子。

假设在某个向量存储里，`0.1` 表示「自动化工具（automation tool）」，`0.2` 表示「源码可用（source available）」，`0.3` 表示「可自托管（can be self-hosted）」。那么你可能会得到下面这些向量：

| 句子 | 向量（维度数组） |
| -------- | ------ |
| n8n 是一款源码可用、可自托管的自动化工具 | [0.1, 0.2, 0.3] |
| Zapier 是一款自动化工具 | [0.1] |
| Make 是一款自动化工具 | [0.1] |
| Confluence 是一款可自托管的 wiki 工具 | [0.3] |

{% hint style="info" %}
**这个例子非常简化**

实际上，向量要复杂得多。一个向量的规模从几十维到几千维不等。维度与单一特征并不是一一对应的关系，所以你不能把单个维度直接翻译成某个概念。这个例子只是给你一个大概的心智模型（mental model），不是真正的技术理解。
{% endhint %}


## 演示相似性搜索的强大（Demonstrating the power of similarity search）

Qdrant 提供了[向量搜索演示（vector search demos）](https://qdrant.tech/demo/)，帮助用户理解向量数据库的强大能力。其中[美食发现演示（food discovery demo）](https://food-discovery.qdrant.tech/)展示了向量存储如何根据视觉相似度帮你匹配图片。

> 这个演示使用了 Delivery Service 的数据。用户可以喜欢或不喜欢某道菜的照片，应用会根据菜品的外观推荐更多相似的餐食。也可以选择只看配送范围内餐厅的结果。（[来源](https://qdrant.tech/demo/)）

想了解完整的技术细节，请参考 [Qdrant 的 demo-food-discovery GitHub 仓库](https://github.com/qdrant/demo-food-discovery)。

## 嵌入、检索器、文本分割器和文档加载器（Embeddings, retrievers, text splitters, and document loaders）

向量数据库还需要其他工具才能发挥作用：

- 文档加载器（document loaders）和文本分割器（text splitters）：文档加载器负责引入文档和数据，并准备好让它们被嵌入（embedding）[^1]。文档加载器可以使用文本分割器把文档拆成小块（chunk）。
- 嵌入（embeddings）：这些工具负责把数据（文本、图片等）转换成向量，也能把向量转回原始数据。注意：n8n 只支持文本嵌入。
- 检索器（retrievers）：检索器从向量数据库中取回文档。你需要把它们和嵌入（embedding）配对使用，才能把向量翻译回数据。

{% hint style="info" %}
**大白话**：普通数据库像「Excel 表格」，得靠关键词或条件查询；向量数据库像「按意思找东西」——你描述个大概意思，它就能把意思相近的内容找出来。整个链条是：文档加载器把资料拿进来 → 文本分割器切成小块 → 嵌入把每块变成一串数字（向量）→ 存进向量数据库 → 检索器按语义搜出来。n8n 把这几件「零件」都做成了节点，你只要连起来用就行。
{% endhint %}

[^1]: 嵌入（embeddings）是使用向量的数据数值表示。AI 通过把数值映射到多个维度来理解复杂数据和关系。向量数据库（vector database），也叫向量存储（vector store），就是专门用来存储和访问嵌入的数据库。
