---
title: Token Splitter 节点文档
description: >-
  了解如何在 n8n 中使用 Token Splitter 节点。阅读技术文档，把
  Token Splitter 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Token Splitter 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.textsplittertokensplitter.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.textsplittertokensplitter
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.textsplittertokensplitter
layout:
  description:
    visible: false
---

# Token Splitter 节点

> **大白话**：这个节点按 **token**（大模型计费/计算的单位）来切分文本，而不是按字符。原理：先把文本转成 BPE token，再按 token 数量分块，最后把每块里的 token 还原成文本。这样切出来的每块长度，跟模型真正消耗的 token 数是对得上的，更精确。适合要严格控制 token 预算的场景。

Token Splitter 节点会把原始文本先转换成 BPE token，再把这些 token 切分成块，最后把每个块内的 token 还原成文本。

在本页中，你可以找到 Token Splitter 节点的参数，以及更多资源链接。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Chunk Size**（块大小）：输入每个块包含的字符数。
* **Chunk Overlap**（块重叠）：输入块与块之间重叠多少。

## 模板与示例

[浏览 Token Splitter 节点集成模板](https://n8n.io/integrations/token-splitter) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 token 文档](https://js.langchain.com/docs/concepts/tokens/) 和 [LangChain 的文本切分器文档](https://js.langchain.com/docs/concepts/text_splitters/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
