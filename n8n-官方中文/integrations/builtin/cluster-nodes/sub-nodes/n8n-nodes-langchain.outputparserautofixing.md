---
title: Auto-fixing Output Parser 节点文档
description: >-
  了解如何在 n8n 中使用 Auto-fixing Output Parser 节点。阅读技术文档，把
  Auto-fixing Output Parser 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Auto-fixing Output Parser 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserautofixing.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserautofixing
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserautofixing
layout:
  description:
    visible: false
---

# Auto-fixing Output Parser 节点

> **大白话**：这个节点是"输出解析器的保险丝"。它包在另一个输出解析器外面：如果主解析器解析失败（比如模型返回的 JSON 格式不对），它会自动再调一次大模型，把错误修好再解析。代价是多一次模型调用、多花点钱和时间，但能明显提高解析成功率。

Auto-fixing Output Parser 节点包装另一个输出解析器。如果第一个解析器失败，它会调用另一个 LLM 来修复错误。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 模板与示例

[浏览 Auto-fixing Output Parser 节点集成模板](https://n8n.io/integrations/auto-fixing-output-parser) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的输出解析器文档](https://js.langchain.com/docs/concepts/output_parsers/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
