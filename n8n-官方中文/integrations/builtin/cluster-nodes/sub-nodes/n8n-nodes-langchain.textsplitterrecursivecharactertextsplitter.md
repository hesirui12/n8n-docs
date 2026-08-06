---
title: Recursive Character Text Splitter 节点文档
description: >-
  了解如何在 n8n 中使用 Recursive Character Text Splitter 节点。阅读技术文档，把
  Recursive Character Text Splitter 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Recursive Character Text Splitter 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.textsplitterrecursivecharactertextsplitter.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.textsplitterrecursivecharactertextsplitter
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.textsplitterrecursivecharactertextsplitter
layout:
  description:
    visible: false
---

# Recursive Character Text Splitter 节点

> **大白话**：这是切分文本的"默认首选"节点，比普通的 Character Text Splitter 更聪明。它**递归地**按优先级切分：先尽量保段落，段落太长再按句子，句子还太长再按词——尽可能让语义完整的内容待在一起，不要随便从句子中间下刀。切完的块质量更高，检索效果更好。只需要设块大小和重叠量。

Recursive Character Text Splitter 节点会递归地切分文档数据，尽可能把段落、然后是句子、最后是单词保持在一起。

在本页中，你可以找到 Recursive Character Text Splitter 节点的参数，以及更多资源链接。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Chunk Size**（块大小）：输入每个块包含的字符数。
* **Chunk Overlap**（块重叠）：输入块与块之间重叠多少。

## 模板与示例

[浏览 Recursive Character Text Splitter 节点集成模板](https://n8n.io/integrations/recursive-character-text-splitter) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的文本切分器文档](https://js.langchain.com/docs/concepts/text_splitters) 和 [LangChain 的按字符递归切分文档](https://v03.api.js.langchain.com/classes/langchain.text_splitter.RecursiveCharacterTextSplitter.html)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
