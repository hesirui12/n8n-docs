---
title: AI Agent node 节点文档
description: >-
  学习如何在 n8n 中使用 AI Agent 节点。按照技术文档把 AI Agent 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: n8n-nodes-langchain.agent
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent
layout:
  description:
    visible: false
---

# AI Agent 节点（AI Agent node）

{% hint style="info" %}
**大白话**：AI Agent（AI 智能体）节点是 n8n 里「最聪明」的节点。你只要给它接上一个聊天模型（Chat Model）和至少一个工具（Tool），它就能自己判断「这个任务该调用哪个工具」，像个小助理一样自动完成任务。你不需要写代码，只要把节点拖出来、连上线就行。
{% endhint %}

AI Agent 节点让你可以在 n8n 里构建一个 AI 智能体。连接一个聊天模型和一个或多个工具后，智能体会自行决定调用哪些工具来完成任务。

一个 [AI agent](#user-content-fn-1)[^1] 是一个自主系统：它接收数据、做出合理决策，并在自己的环境中采取行动来实现特定目标。AI 智能体的「环境」指的是智能体自身之外、一切它能访问到的东西。这个智能体会使用外部工具[^2]和 API 来执行操作、获取信息。它能理解不同工具的能力，并根据任务来决定该用哪个工具。

{% hint style="info" %}
**连接一个工具**

你必须给 AI Agent 节点至少连接一个工具 [子节点](../../sub-nodes/README.md)。
{% endhint %}

{% hint style="info" %}
**智能体类型（Agent type）**

在 1.82.0 版本之前，AI Agent 有一个设置项，可以选择以不同的智能体类型工作。现在这个设置已经被移除了，所有 AI Agent 节点都按 `Tools Agent`（工具智能体）方式工作——这也是官方推荐且最常用的设置。如果你在使用旧版本 AI Agent 的工作流或模板，只要它们之前设置的是「Tools Agent」，升级到新节点后行为应该保持不变。
{% endhint %}

## 模板和示例（Templates and examples）

[浏览 n8n-nodes-langchain.agent 集成模板](https://n8n.io/integrations/agent)，或[搜索全部模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [LangChain 的 agents 文档](https://js.langchain.com/docs/concepts/agents/)。

第一次接触 AI 智能体？可以读一下 [n8n 博客对 AI 智能体的介绍](https://blog.n8n.io/ai-agents/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 常见问题（Common issues）

关于常见错误或问题以及建议的解决方法，请参考[常见问题（Common Issues）](common-issues.md)。

[^1]: AI 智能体（AI agents）是人工智能系统，能够响应用户请求、做出决策，并帮用户完成真实世界中的任务。它们使用大语言模型（LLMs）来理解用户输入，并利用手上掌握的信息和资源，决定如何最好地处理请求。
[^2]: 在 AI 语境下，工具（tool）是一种附加资源，AI 在响应请求时可以借助它获取特定信息或实现特定功能。AI 模型可以使用工具来与外部系统交互，或完成特定、聚焦的任务。
