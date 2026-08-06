---
title: Call n8n Workflow Tool 节点文档
description: >-
  了解如何在 n8n 中使用 Call n8n Workflow Tool 节点。阅读技术文档，把
  Call n8n Workflow Tool 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Call n8n Workflow Tool 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow
layout:
  description:
    visible: false
---

# Call n8n Workflow Tool 节点

> **大白话**：这个工具让 Agent **调用另一个 n8n 工作流**并取回它的输出数据。这是把"复杂业务流程"打包成 Agent 工具的标准做法：比如发邮件、查库存这些逻辑，写成子工作流，Agent 需要时就调它。选择工作流来源（按 ID 选，或直接粘贴工作流 JSON），还能配置要传给子工作流的输入参数（固定值、表达式、或者让 AI 自己填）。

Call n8n Workflow Tool 节点是一个工具[^1]，允许 Agent[^2] 运行另一个 n8n 工作流并获取它的输出数据。

在本页中，你可以找到 Call n8n Workflow Tool 节点的参数，以及更多资源链接。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

### Description（描述）

输入一段描述。这告诉 Agent 什么时候该用这个工具。例如：

> 调用这个工具来获取一个随机颜色。输入应该是一个用逗号分隔的颜色名称字符串，用来排除这些颜色。

### Source（来源）

告诉 n8n 要调用哪个工作流。你可以二选一：

* **Database**（数据库）：从列表里选择工作流，或输入一个工作流 ID。
* **Define Below**（在下方定义）：粘贴一份完整的工作流 [JSON](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/manage-workflows/export-and-import)。

### Workflow Inputs（工作流输入）

当工作流来源选择 **Database** 时，一旦你选好了子工作流（并在子工作流里定义好 **Workflow Input Schema**，即输入结构），你就可以定义 **Workflow Inputs**。

点 **Refresh**（刷新）按钮，拉取子工作流里的输入字段。

你可以用下面任意组合来定义工作流输入的值：

* 提供固定值
* 用表达式引用当前工作流的数据
* 点字段右侧的 AI 按钮，[让 AI 模型来指定参数](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/ai-examples/use-ai-for-parameters)
* 在表达式里用 [`$fromAI()` 函数](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/ai-examples/use-ai-for-parameters#use-the-fromai-function)，控制模型填数据的方式，并把 AI 生成的输入和自定义输入混合使用

要引用当前工作流的数据，把输入面板里的字段拖到已选择 Expressions（表达式）模式的字段上。

要开始用 `$fromAI()` 函数：点字段右侧的"Let the model define this parameter"（让模型定义此参数）按钮，然后点框上的 **X** 可以退回用户自定义值。字段会变成表达式字段，并预先填好 `$fromAI()` 表达式。从这里开始，你可以自定义表达式，加其他静态或动态内容，或者微调 `$fromAI()` 函数的参数。

## 模板与示例

[浏览 Call n8n Workflow Tool 节点集成模板](https://n8n.io/integrations/workflow-tool) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Yl56nEscwQQAbBUeWfvp/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: 在 AI 语境里，工具（tool）是 AI 在响应请求时可以引用的附加资源，用来获取特定信息或功能。AI 模型可以用工具与外部系统交互，或完成特定的、聚焦的任务。
[^2]: AI Agent 是能够响应用户请求、做出决策并替用户完成实际任务的智能系统。它们用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
