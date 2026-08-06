---
title: Structured Output Parser 节点文档
description: >-
  了解如何在 n8n 中使用 Structured Output Parser 节点。阅读技术文档，把
  Structured Output Parser 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: n8n-nodes-langchain.outputparserstructured
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserstructured/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserstructured
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserstructured
layout:
  description:
    visible: false
---

# Structured Output Parser 节点

> **大白话**：这个节点让模型"按规定格式输出"——按照你给的一个 JSON Schema（数据结构定义）返回字段，并对输出做校验。这样模型返回的就是规范的、字段齐全的 JSON，下游节点可以直接用，不用再猜格式。非常适合需要把 AI 输出接进数据库或表单的场景。

使用 Structured Output Parser 节点，根据 JSON Schema 返回字段。

在本页中，你可以找到 Structured Output Parser 节点的参数，以及更多资源链接。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Schema Type**（Schema 类型）：定义输出结构和校验方式。你有两种方式提供 schema：

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/YQVaIUXYUYVnHpb9qPTu/" %}

## 模板与示例

[浏览 n8n-nodes-langchain.outputparserstructured 集成模板](https://n8n.io/integrations/structured-output-parser) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的输出解析器文档](https://js.langchain.com/docs/concepts/output_parsers)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 常见问题（Common issues）

关于常见问题、错误及建议的解决方案，请参考[常见问题](common-issues.md)。
