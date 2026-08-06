---
title: What's an agent in AI?
description: Understand agents in the context of AI. Learn how n8n provides agents.
contentType: explanation
nodeTitle: What agents do
originalFilePath: advanced-ai/examples/understand-agents.md
originalUrl: 'https://docs.n8n.io/advanced-ai/examples/understand-agents'
url: 'https://docs.n8n.io/build/integrate-ai/understand-ai-components/what-agents-do'
layout:
  description:
    visible: false
---

# AI 中的智能体是什么？（What's an agent in AI?）

一种理解智能体（agent）[^1]的方式，是把它看作一个「会做决策的[链（chain）](what-chains-do.md)」。链（Chain）会按照预先设定好的顺序依次调用不同的 AI 组件；而智能体（Agent）则用语言模型（language model）来决定接下来该采取什么行动。

智能体是 AI 中扮演「决策者」角色的部分。它们可以与其他智能体以及工具（tool）[^2]交互。当你向智能体发送一个问题时，它会尝试挑选最适合回答这个问题的工具。智能体既会针对你的具体问题做出调整，也会遵循那些用来配置其行为的提示词（prompt）。

## n8n 中的智能体（Agents in n8n）

n8n 提供了一个 Agent 节点，根据你选择的设置，它可以扮演不同类型的智能体。关于可用的智能体类型，请参阅 [Agent 节点文档](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent)。

当你执行一个包含智能体的工作流时，智能体会运行多次。例如，它可能先做一次初始设置，然后运行一次去调用某个工具，接着再运行一次来评估工具返回的结果并回复用户。

{% hint style="info" %}
**大白话**：智能体（Agent）就是一个「会自己动脑子的 AI 流程」。你问它一个问题，它不会照着固定剧本走，而是自己判断：要不要查资料？查哪个工具？怎么组织回答？所以同一个智能体，面对不同的问题，走的流程可能完全不一样。
{% endhint %}

[^1]: AI 智能体（AI agents）是能够响应用户请求、做出决策并替用户完成现实任务的人工智能系统。它们使用大语言模型（LLM）来理解用户输入，并根据手头掌握的信息和资源，决定如何最好地处理请求。
[^2]: 在 AI 语境中，工具（tool）是一种附加资源，AI 在响应用户请求时可以借助它获取特定信息或功能。AI 模型可以用工具与外部系统交互，或完成某项具体、聚焦的任务。
