---
title: Wikipedia 节点文档
description: >-
  了解如何在 n8n 中使用 Wikipedia 节点。阅读技术文档，把
  Wikipedia 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Wikipedia 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolwikipedia.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolwikipedia
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolwikipedia
layout:
  description:
    visible: false
---

# Wikipedia 节点

> **大白话**：给 AI Agent 配的"维基百科搜索工具"。Agent 遇到需要百科知识的问题（人物、事件、概念等）时，会调用它去维基百科搜索并取回信息。免费、零配置，挂了就能用，适合给 Agent 补充常识类知识。

Wikipedia 节点是一个工具[^1]，允许 Agent[^2] 从维基百科搜索并返回信息。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 模板与示例

[浏览 Wikipedia 节点集成模板](https://n8n.io/integrations/wikipedia) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Yl56nEscwQQAbBUeWfvp/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: 在 AI 语境里，工具（tool）是 AI 在响应请求时可以引用的附加资源，用来获取特定信息或功能。AI 模型可以用工具与外部系统交互，或完成特定的、聚焦的任务。
[^2]: AI Agent 是能够响应用户请求、做出决策并替用户完成实际任务的智能系统。它们用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
