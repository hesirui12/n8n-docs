---
title: MultiQuery Retriever 节点文档
description: >-
  了解如何在 n8n 中使用 MultiQuery Retriever 节点。阅读技术文档，把
  MultiQuery Retriever 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: MultiQuery Retriever 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrievermultiquery.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrievermultiquery
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrievermultiquery
layout:
  description:
    visible: false
---

# MultiQuery Retriever 节点

> **大白话**：这个检索器节点用大模型"自动写多个问题"来检索。原理：用户问一个问题，它会用 LLM 从不同角度把这个问法改写成好几个版本（比如换说法、换关键词），每个版本都去向量库搜一遍，最后合并结果。这样能覆盖到更多相关资料，搜得更全。你只需要设一个参数：生成几个版本的查询。

MultiQuery Retriever 节点用 LLM 为给定的用户输入查询从不同视角生成多个查询，自动完成提示词调优的过程。

在本页中，你可以找到 MultiQuery Retriever 节点的参数，以及更多资源链接。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点选项

* **Query Count**（查询数量）：输入要生成多少个不同版本的查询。

## 模板与示例

[浏览 MultiQuery Retriever 节点集成模板](https://n8n.io/integrations/multiquery-retriever) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的检索器概念文档](https://js.langchain.com/docs/concepts/retrievers) 和 [LangChain 的 multiquery retriever API 文档](https://v03.api.js.langchain.com/classes/langchain.retrievers_multi_query.MultiQueryRetriever.html)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
