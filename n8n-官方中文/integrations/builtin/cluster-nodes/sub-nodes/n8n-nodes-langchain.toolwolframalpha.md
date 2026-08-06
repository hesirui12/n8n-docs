---
title: Wolfram|Alpha 工具节点文档
description: >-
  了解如何在 n8n 中使用 Wolfram|Alpha 工具节点。阅读技术文档，把
  Wolfram|Alpha 工具节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Wolfram|Alpha 工具节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolwolframalpha.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolwolframalpha
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolwolframalpha
layout:
  description:
    visible: false
---

# Wolfram|Alpha 工具节点

> **大白话**：这个节点把你的 Agent[^1] 和链[^2] 连到 Wolfram|Alpha 的"计算智能引擎"。Wolfram|Alpha 不是普通聊天模型，它是**专业的计算知识引擎**——擅长数学、物理、单位换算、统计数据这类需要精确计算的查询，比大模型硬算可靠得多。适合挂给 Agent 处理科学计算类问题。

使用 Wolfram|Alpha 工具节点，把你的 Agent[^1] 和链[^2] 连接到 Wolfram|Alpha 的计算智能引擎。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/wolframalpha.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 模板与示例

[浏览 Wolfram|Alpha 工具节点集成模板](https://n8n.io/integrations/wolframoralpha) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [Wolfram|Alpha 的文档](https://products.wolframalpha.com/api)。你也可以看 [LangChain 关于 WolframAlpha 工具的文档](https://js.langchain.com/docs/integrations/tools/wolframalpha/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: AI Agent 是能够响应用户请求、做出决策并替用户完成实际任务的智能系统。它们用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
[^2]: AI 链（AI chains）允许你按顺序调用大语言模型（LLM）和其他组件。n8n 里的 AI 链不使用持久化记忆，所以不能用它们引用之前的上下文（这种情况请用 AI Agent）。
