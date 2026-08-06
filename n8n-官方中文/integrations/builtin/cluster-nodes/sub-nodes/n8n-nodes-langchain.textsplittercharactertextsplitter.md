---
title: Character Text Splitter 节点文档
description: >-
  了解如何在 n8n 中使用 Character Text Splitter 节点。阅读技术文档，把
  Character Text Splitter 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Character Text Splitter 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.textsplittercharactertextsplitter.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.textsplittercharactertextsplitter
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.textsplittercharactertextsplitter
layout:
  description:
    visible: false
---

# Character Text Splitter 节点

> **大白话**：这个节点按**字符**把长文档切成小块（chunk），是做知识库/RAG 前的必备步骤。三个参数：**Separator**（分隔符，按什么符号切）、**Chunk Size**（每块多少字符）、**Chunk Overlap**（块与块之间重叠多少字符，重叠可以防止意思被拦腰截断）。

使用 Character Text Splitter 节点，按字符切分文档数据。

在本页中，你可以找到 Character Text Splitter 节点的参数，以及更多资源链接。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Separator**（分隔符）：选择用来把文档拆分成独立条目的分隔符。
* **Chunk Size**（块大小）：输入每个块包含的字符数。
* **Chunk Overlap**（块重叠）：输入块与块之间重叠多少。

## 模板与示例

[浏览 Character Text Splitter 节点集成模板](https://n8n.io/integrations/character-text-splitter) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的文本切分器文档](https://js.langchain.com/docs/concepts/text_splitters) 和 [LangChain 的 character text splitting API 文档](https://v03.api.js.langchain.com/classes/langchain.text_splitter.CharacterTextSplitter.html)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
