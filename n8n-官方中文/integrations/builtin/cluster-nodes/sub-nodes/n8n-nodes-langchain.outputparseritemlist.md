---
title: Item List Output Parser 节点文档
description: >-
  了解如何在 n8n 中使用 Item List Output Parser 节点。阅读技术文档，把
  Item List Output Parser 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Item List Output Parser 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparseritemlist.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparseritemlist
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparseritemlist
layout:
  description:
    visible: false
---

# Item List Output Parser 节点

> **大白话**：这个节点把模型的输出拆成一个"条目列表"。你可以规定最多返回多少条（`-1` 表示不限制），以及用什么分隔符来切分（默认按换行切）。适合让模型一口气返回"一列清单"（比如待办列表、关键词列表），然后下游节点逐条处理。

使用 Item List Output Parser 节点，返回一个具有特定长度和分隔符的条目列表。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点选项

* **Number of Items**（条目数量）：输入最多返回的条目数。设为 `-1` 表示不限制。
* **Separator**（分隔符）：选择用来把结果拆分成独立条目的分隔符。默认为换行符。

## 模板与示例

[浏览 Item List Output Parser 节点集成模板](https://n8n.io/integrations/item-list-output-parser) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的输出解析器文档](https://js.langchain.com/docs/concepts/output_parsers)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
