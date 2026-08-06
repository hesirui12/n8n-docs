---
title: AI Agent Tool 节点文档
description: >-
  了解如何在 n8n 中使用 AI Agent Tool 节点。阅读技术文档，把
  AI Agent Tool 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: AI Agent Tool 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolaiagent.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolaiagent
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolaiagent
layout:
  description:
    visible: false
---

# AI Agent Tool 节点

> **大白话**：这个节点实现"多 Agent 编排"——让一个主 Agent 把任务**外包给其他 Agent**（每个 Agent 负责一种专长）。好处是：不用像子工作流那样手动传变量、管上下文，一个工作流里就能塞多个 Agent，还能多层嵌套（Agent 里套 Agent）。配置时关键是写好 **Description**（给大模型的描述，说明这个 Agent 是干嘛的、什么时候该找它）。

AI Agent Tool 节点允许工作流中的根级 Agent[^1] 把其他 Agent 当作工具来调用，简化多 Agent 编排。

[主 Agent](../root-nodes/n8n-nodes-langchain.agent/tools-agent.md) 可以监督并把任务委派给擅长不同任务、拥有不同知识的 AI Agent Tool 节点。这样你可以在**一个工作流里**使用多个 Agent，而不用承受子工作流那种管理上下文和变量的复杂性。你还可以把 AI Agent Tool 节点嵌套成多层，实现更复杂的多级用例。

在本页中，你可以找到 AI Agent Tool 节点的参数，以及更多资源链接。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

用这些参数配置 AI Agent Tool 节点：

* **Description**（描述）：向 LLM 描述这个 Agent 的用途和职责范围。一份好的、具体的描述，能让父 Agent 知道什么时候该把任务委派给这个 Agent 处理。
* **Prompt (User Message)**（提示词/用户消息）：发给 LLM 的提示词，说明要执行什么操作、要返回什么信息。
* **Require Specific Output Format**（要求特定输出格式）：是否要求节点输出特定格式。开启后，n8n 会提示你连接[主 Agent 页面所描述的](../root-nodes/n8n-nodes-langchain.agent/tools-agent.md#require-specific-output-format)其中一个输出解析器。
* **Enable Fallback Model**（启用备用模型）：是否启用备用模型。开启后，n8n 会提示你连接一个备用聊天模型，在主模型失败或不可用时使用。

## 节点选项

用这些选项微调 AI Agent Tool 节点的行为：

* **System Message**（系统消息）：在对话开始前发给 Agent 的消息。
* **Max Iterations**（最大迭代次数）：模型在生成响应前最多运行多少次。
* **Return Intermediate Steps**（返回中间步骤）：是否把 Agent 采取过的中间步骤包含在最终输出里。
* **Automatically Passthrough Binary Images**（自动透传二进制图片）：是否把二进制图片作为图片类型消息自动传给 Agent。
* **Batch Processing**（批量处理）：是否启用下面的批量处理选项来做限流：
	* **Batch Size**（批量大小）：并行处理的数据项数量。有助于限流，但可能影响日志输出的顺序。
	* **Delay Between Batches**（批次间延迟）：批次之间等待的毫秒数。

## 模板与示例

[浏览 AI Agent Tool 节点集成模板](https://n8n.io/integrations/ai-agent-tool) 或 [搜索所有模板](https://n8n.io/workflows/)

## 使用 `$fromAI()` 动态设置工具参数

要了解如何为应用节点工具动态填充参数，请参考 [让 AI 用 `$fromAI()` 指定工具参数](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/ai-examples/use-ai-for-parameters)。

[^1]: AI Agent 是能够响应用户请求、做出决策并替用户完成实际任务的智能系统。它们用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
