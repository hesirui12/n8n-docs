---
title: Think Tool 节点文档
description: >-
  了解如何在 n8n 中使用 Think Tool 节点。阅读技术文档，把
  Tool Think 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Think Tool 节点文档
originalFilePath: integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolthink.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolthink
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolthink
layout:
  description:
    visible: false
---

# Think Tool 节点

> **大白话**：这个工具"邀请" Agent 在回答问题前先自己想一想——本质上就是让模型先自言自语地把问题捋一遍，再给出答案。特别适合那些需要深思熟虑的复杂问题（比如逻辑推理题）。挂上这个工具，复杂问题的回答质量会明显提升。

Think Tool 节点是一个工具[^1]，邀请 Agent[^2] 在回答前先思考一下。本质上，它让 Agent 在给出答案之前先"自言自语"地反思这个问题。特别是对于需要深思熟虑回答的复杂查询，这个工具很有用。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 模板与示例

[浏览 Think Tool 节点集成模板](https://n8n.io/integrations/think-tool) 或 [搜索所有模板](https://n8n.io/workflows/)

### 提示词示例（Prompting example）

举个例子，假设你问 Agent：

> *Jack 正看着 Anne。Anne 正看着 George。Jack 已婚，George 未婚，我们不知道 Anne 是否已婚。请问：是否有已婚人士正在看一个未婚人士？*

Agent 会用这个工具做思考：

> *我们有如下信息：1. Jack 正看着 Anne。2. Anne 正看着 George。3. Jack 已婚。4. George 未婚。5. 我们不知道 Anne 是否已婚。*

> *我们需要确定是否有已婚人士在看一个未婚人士。让我们考虑 Anne 的两种情况：*

> *情况 1：Anne 已婚。*

> - *如果 Anne 已婚，那么她（已婚）正看着 George（未婚）。这种情况下，一个已婚人士（Anne）正在看一个未婚人士（George）。*

> *情况 2：Anne 未婚。*

> - *如果 Anne 未婚，那么 Jack（已婚）正看着 Anne（未婚）。这种情况下，一个已婚人士（Jack）正在看一个未婚人士（Anne）。*

> *在这两种情况下，我们都发现有已婚人士在看一个未婚人士。因此，这个问题的答案是：是的。*

然后给出答案：

> *是的，有一个已婚人士正在看一个未婚人士。在关于 Anne 婚姻状况的两种可能情况下，我们都发现有已婚人士（Jack 或 Anne）正在看一个未婚人士（George 或 Anne）。*

## 相关资源

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Yl56nEscwQQAbBUeWfvp/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: 在 AI 语境里，工具（tool）是 AI 在响应请求时可以引用的附加资源，用来获取特定信息或功能。AI 模型可以用工具与外部系统交互，或完成特定的、聚焦的任务。
[^2]: AI Agent 是能够响应用户请求、做出决策并替用户完成实际任务的智能系统。它们用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
