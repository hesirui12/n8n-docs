---
title: What's a tool in AI?
description: >-
  Understand tools in the context of AI. Learn what's special about tools in
  n8n.
contentType: explanation
nodeTitle: How tools work
originalFilePath: advanced-ai/examples/understand-tools.md
originalUrl: 'https://docs.n8n.io/advanced-ai/examples/understand-tools'
url: 'https://docs.n8n.io/build/integrate-ai/understand-ai-components/how-tools-work'
layout:
  description:
    visible: false
---

# AI 中的工具是什么？（What's a tool in AI?）

在 AI 里，「工具（tool）」有它专门的含义。工具就像插件（addon），你的 AI 可以借助它去获取额外的上下文或资源。

下面还有两种更直观的说法：

> 工具是智能体（agent）用来与世界交互的接口（[来源](https://langchain-ai.github.io/langgraphjs/how-tos/tool-calling/)）

> 我们可以把这些工具想成几乎就像是你的 AI 模型可以调用的函数（[来源](https://www.udemy.com/course/chatgpt-and-langchain-the-complete-developers-masterclass/)）

## n8n 中的 AI 工具（AI tools in n8n）

n8n 提供了工具子节点（tool sub-nodes）[^1]，你可以把它们连接到你的 [AI agent](#user-content-fn-2)[^2] 上。除了提供一些常用工具（如 [Wikipedia](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolwikipedia) 和 [SerpAPI](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolserpapi)）之外，n8n 还提供了三个特别强大的工具：

* [Call n8n Workflow Tool](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow)：用它把任意 n8n 工作流当作工具来加载。
* [Custom Code Tool](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolcode)：编写代码，让智能体可以运行它。
* [HTTP Request Tool](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.httprequest)：发起请求，抓取网站内容或从 API 获取数据。

接下来的三个示例重点展示了 Call n8n Workflow Tool 的用法：

- [用 Google Sheets 作为数据源聊天（Chat with Google Sheets）](../ai-examples/use-google-sheets-as-a-data-source.md)
- [调用 API 获取数据（Call an API to fetch data）](../ai-examples/call-apis.md)
- [设置人工兜底（Set up a human fallback）](../ai-examples/set-a-human-fallback-for-ai-workflows.md)

你还可以学习如何 [用 `$fromAI()` 函数让 AI 动态指定工具的参数](../ai-examples/use-ai-for-parameters.md)。

{% hint style="info" %}
**大白话**：工具就是「给 AI 加的外挂技能」。AI 本身只会说话，但配上工具后，它就能查维基百科、调 API、运行你写的代码，甚至调用别的 n8n 工作流。没有工具，AI 只能凭「脑内知识」回答；有了工具，它就能拿到真实世界的最新数据。
{% endhint %}

[^1]: n8n 集群节点（cluster nodes）由一个或多个连接到根节点（root node）的子节点（sub nodes）组成。子节点扩展根节点的功能，提供对特定服务或资源的访问，或提供特定类型的专用处理能力，例如计算器功能。
[^2]: AI 智能体（AI agents）是能够响应用户请求、做出决策并替用户完成现实任务的人工智能系统。它们使用大语言模型（LLM）来理解用户输入，并根据手头掌握的信息和资源，决定如何最好地处理请求。
