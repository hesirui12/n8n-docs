---
title: 对话式 AI Agent 节点文档
description: >-
  学习如何在 n8n 中使用 AI Agent 节点的对话式智能体（Conversational Agent）。
  按照技术文档把对话式智能体集成到你的工作流中。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Conversational AI Agent node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/conversational-agent.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/conversational-agent
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/conversational-agent
layout:
  description:
    visible: false
---

# 对话式 AI Agent 节点（Conversational AI Agent node）

{% hint style="info" %}
**大白话**：这个页面讲的是 AI Agent 的一种旧模式——「对话式智能体」（Conversational Agent）。它就像个聊天机器人：能记住上下文、理解用户意图、给出回答。**但注意：这个功能已经在 2025 年 2 月被 n8n 移除了**，现在所有 AI Agent 都统一用 Tools Agent（工具智能体）模式，所以这篇文档主要是给旧用户参考的。
{% endhint %}

{% hint style="info" %}
**功能已移除（Feature removed）**

n8n 在 2025 年 2 月移除了这个功能。
{% endhint %}

对话式智能体（Conversational Agent）可以进行拟人化的对话。它能保持上下文、理解用户意图，并提供相关的回答。这种智能体通常用于构建聊天机器人、虚拟助手和客户支持系统。

对话式智能体会在系统提示词（system prompt）中描述工具[^1]，并解析用于工具调用的 JSON 响应。如果你使用的 AI 模型不支持工具调用，或者你处理的是比较简单的交互，这个智能体是个不错的通用选择。它更灵活，但准确性可能不如 [Tools Agent（工具智能体）](tools-agent.md)。

关于 AI Agent 节点本身的更多信息，请参考 [AI Agent](README.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/cHtfs3gewkhPbGP31rjc/" %}

## 节点参数（Node parameters）

使用以下参数配置对话式智能体。

### Prompt（提示词）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Ss9Y6clfLTwlXMx69w6E/" %}

### Require Specific Output Format（要求特定输出格式）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/IsHMhvgDA3Ok5qdqnHnJ/" %}

## 节点选项（Node options）

使用以下选项来微调对话式智能体节点的行为：

### Human Message（人类消息）

告诉智能体它可以使用的工具，并为用户的输入补充上下文。

你必须包含这些表达式和变量：

* `{tools}`：一个 LangChain 表达式，提供你连接给智能体的工具列表字符串。请提供一些关于「谁应该使用这些工具、应该如何使用」的上下文或说明。
* `{format_instructions}`：一个 LangChain 表达式，提供你连接的输出解析器（output parser）节点的 schema（结构）或格式。由于说明本身就是上下文，你不需要为这个表达式再额外提供上下文。
* `{{input}}`：一个包含用户提示词的 LangChain 变量。这个变量会用 **Prompt（提示词）** 参数的值来填充。请提供一些上下文说明这是用户的输入。

下面是一个如何使用这些字符串的示例：

示例（Example）：

```
TOOLS
------
Assistant can ask the user to use tools to look up information that may be helpful in answering the user's original question. The tools the human can use are:

{tools}

{format_instructions}

USER'S INPUT
--------------------
Here is the user's input (remember to respond with a markdown code snippet of a JSON blob with a single action, and NOTHING else):

{{input}}
```

{% hint style="info" %}
**大白话（上面的示例在说什么）**：这段英文就是写给 AI 看的「说明书」模板——先告诉 AI「你可以让用户用这些工具查信息」，然后把工具列表（`{tools}`）、输出格式说明（`{format_instructions}`）和用户的真实输入（`{{input}}`）自动填进去，最后要求 AI 只回复一个 JSON 格式的动作。你可以照抄这个模板，也可以自己改里面的中文说明。
{% endhint %}

### System Message（系统消息）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Ci5NMdJiVoyT9dtdTE9w/" %}

### Max Iterations（最大迭代次数）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/8UflrA3Nx8LD5bKQn8Xc/" %}

### Return Intermediate Steps（返回中间步骤）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/skA96E8hAnMMKG7c4Lta/" %}

### Tracing Metadata（追踪元数据）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/GAsqtB1RVGEDrT5PMMLl/" %}

## 模板和示例（Templates and examples）

请参考 AI Agent 主节点的 [模板和示例](README.md#templates-and-examples) 部分。

## 常见问题（Common issues）

关于常见问题或错误以及建议的解决方法，请参考[常见问题（Common issues）](common-issues.md)。

[^1]: 在 AI 语境下，工具（tool）是一种附加资源，AI 在响应请求时可以借助它获取特定信息或实现特定功能。AI 模型可以使用工具来与外部系统交互，或完成特定、聚焦的任务。
