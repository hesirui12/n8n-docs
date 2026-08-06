---
title: Calculator 节点文档
description: >-
  了解如何在 n8n 中使用 Calculator 节点。阅读技术文档，把
  Calculator 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Calculator 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolcalculator.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolcalculator
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolcalculator
layout:
  description:
    visible: false
---

# Calculator 节点

> **大白话**：给 AI Agent 配的"计算器工具"。大模型天生不擅长精确算术（容易算错），挂上这个工具后，Agent 遇到数学计算就会调用它来算，结果准确。它是经典的 Agent 工具之一，几乎零配置，直接用。

Calculator 节点是一个工具[^1]，允许 Agent[^2] 执行数学计算。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 模板与示例

[浏览 Calculator 节点集成模板](https://n8n.io/integrations/calculator) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Yl56nEscwQQAbBUeWfvp/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: 在 AI 语境里，工具（tool）是 AI 在响应请求时可以引用的附加资源，用来获取特定信息或功能。AI 模型可以用工具与外部系统交互，或完成特定的、聚焦的任务。
[^2]: AI Agent 是能够响应用户请求、做出决策并替用户完成实际任务的智能系统。它们用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
