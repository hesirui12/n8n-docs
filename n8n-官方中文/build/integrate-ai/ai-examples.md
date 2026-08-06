---
contentType: overview
title: 高级 AI 示例与核心概念
description: 使用 n8n 构建 AI 功能的示例工作流和实际用例。
hide:
  - toc
nodeTitle: AI examples
originalFilePath: advanced-ai/examples/introduction.md
originalUrl: 'https://docs.n8n.io/advanced-ai/examples/introduction'
url: 'https://docs.n8n.io/build/integrate-ai/ai-examples'
layout:
  description:
    visible: false
---

# 高级 AI 示例与核心概念（Advanced AI examples and concepts）

本节为你讲解 AI 领域的重要概念，并给出展示这些概念的工作流模板，附有详细说明和配置指南。这些示例覆盖了常见的使用场景，并展示了 n8n 中「高级 AI」功能的各个特性。

{% hint style="info" %}
**这篇是什么？——大白话版**

如果你刚开始接触 n8n 的 AI 功能，可以先从这篇总览开始。下面的卡片分别介绍 AI 中的几个核心概念：智能体（agent）、链（chain）、工具（tool）、向量数据库（vector database）和记忆（memory）。每个概念都有对应的详细文章和示例工作流，你可以照着示例一步步搭建自己的 AI 工作流。

**几个词先混个脸熟：**

- **智能体（Agent）**：就像一个「会自己动脑的小助手」，能理解你的问题、决定怎么做、并调用工具完成任务。
- **链（Chain）**：像一条「固定流水线」，按写好的步骤依次调用大语言模型等组件。
- **工具（Tool）**：给 AI 加装的外部「技能包」，让 AI 能访问它原本不知道的数据、调用外部系统。
- **向量数据库（Vector database）**：专门用来存放「文字的数字指纹」的数据库，让 AI 能快速找到相关内容。
- **记忆（Memory）**：让 AI 记住之前的对话内容，不用每次重新说一遍背景。
{% endhint %}

<div class="grid cards" markdown>

-   __智能体（Agents）与链（chains）__

	了解 AI 中的智能体[^1]和链[^2]，并通过示例工作流探索它们之间的关键区别。

	[→ 什么是 AI 中的链（chain）？](understand-ai-components/what-chains-do.md)  
    [→ 什么是 AI 中的智能体（agent）？](understand-ai-components/what-agents-do.md)  
	[→ 智能体与链的关键区别演示](understand-ai-components/agents-vs-chains.md) 

-   __Call n8n Workflow Tool（调用 n8n 工作流工具）__

    了解 AI 中的工具[^3]，然后探索把 n8n 工作流当作自定义工具使用的示例，让你的 AI 工作流能访问更多数据。

	[→ 什么是 AI 中的工具（tool）？](understand-ai-components/how-tools-work.md)  
    [→ 与 Google Sheets 对话（把 Google Sheets 当数据源）](ai-examples/use-google-sheets-as-a-data-source.md)  
	[→ 调用 API 获取数据](ai-examples/call-apis.md)  
	[→ 为 AI 工作流设置人工兜底（human fallback）](ai-examples/set-a-human-fallback-for-ai-workflows.md)  
	[→ 用 `$fromAI()` 让 AI 指定工具参数](ai-examples/use-ai-for-parameters.md)

-   __向量数据库（Vector databases）__

    了解 AI 中的[向量数据库](#user-content-fn-4)[^4]，以及嵌入（embeddings）[^5]和检索器（retriever）等相关概念。

	[→ 什么是向量数据库？](understand-ai-components/store-and-search-data-with-vectors.md)  
    [→ 从网站填充 Pinecone 向量数据库](ai-examples/use-website-content.md)   

-   __记忆（Memory）__

    了解 AI 中的记忆[^6]。

	[→ 什么是 AI 中的记忆（memory）？](understand-ai-components/how-memory-works.md)  

-   __AI 工作流模板__

	你可以在 n8n 网站上浏览 AI 模板，包括社区成员贡献的模板。

    [→ 浏览所有 AI 模板](https://n8n.io/workflows/?categories=25)


   
</div>

[^1]: AI 智能体（agent）是能够响应用户请求、做出决策，并替用户完成现实任务的人工智能系统。它们使用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
[^2]: AI 链（chain）允许你按顺序调用大语言模型（LLM）和其他资源，让组件一个接一个地处理。n8n 中的 AI 链没有持久记忆，所以无法用它引用之前的对话上下文（这类需求请使用 AI 智能体）。
[^3]: 在 AI 的语境中，工具（tool）是一种附加资源，AI 在响应用户请求时可以参考它来获取特定信息或特定功能。AI 模型可以使用工具与外部系统交互，或完成特定、聚焦的任务。
[^4]: 向量存储（vector store），也叫向量数据库（vector database），存放信息的数学表示。配合嵌入（embeddings）和检索器（retriever）使用，可以构建一个 AI 在回答问题时能访问的数据库。
[^5]: 嵌入（embeddings）是使用向量对数据进行数值化表示。AI 通过把数值映射到多个维度，用嵌入来理解复杂数据和数据之间的关系。向量数据库（vector database / vector store）就是专门用来存储和访问嵌入的数据库。
[^6]: 在 AI 的语境中，记忆（memory）允许 AI 工具在多次交互之间保存消息上下文。这样你就能与 AI 智能体持续对话，而不必每次发消息都附带上全部历史上下文。在 n8n 中，AI 智能体节点可以使用记忆，但 AI 链不行。
