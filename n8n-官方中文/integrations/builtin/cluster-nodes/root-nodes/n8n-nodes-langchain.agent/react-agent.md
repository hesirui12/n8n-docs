---
title: ReAct AI Agent 节点文档
description: >-
  学习如何在 n8n 中使用 AI Agent 节点的 ReAct Agent。
  按照技术文档把 ReAct Agent 集成到你的工作流中。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: ReAct AI Agent node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/react-agent.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/react-agent
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/react-agent
layout:
  description:
    visible: false
---

# ReAct AI Agent 节点（ReAct 智能体）

{% hint style="info" %}
**大白话**：这个页面讲的是 AI Agent 的一种旧模式——「ReAct Agent」。ReAct 就是「推理（Reasoning）+ 行动（Acting）」：它一边思考任务该怎么做，一边动手执行，循环往复直到任务完成，还能把复杂任务拆成小任务逐个处理。**注意：这个功能已在 2025 年 2 月被移除**，现在所有 AI Agent 统一使用 Tools Agent（工具智能体），这篇文档主要给旧用户参考。
{% endhint %}

{% hint style="info" %}
**功能已移除（Feature removed）**

n8n 在 2025 年 2 月移除了这个功能。
{% endhint %}

ReAct Agent 节点实现了 [ReAct](https://react-lm.github.io/) 逻辑。ReAct（推理与行动）把「思维链提示（chain-of-thought prompting）的推理能力」和「行动计划的生成」结合在了一起。

ReAct Agent 会针对给定任务进行推理，确定必要的行动，然后执行这些行动。它会一直循环「推理 → 行动」直到完成任务。ReAct 智能体可以把复杂任务分解成较小的子任务，排好优先级，然后一个一个地执行。

关于 AI Agent 节点本身的更多信息，请参考 [AI Agent](README.md)。

{% hint style="info" %}
**没有记忆（No memory）**

ReAct 智能体不支持记忆（memory）子节点。这意味着它无法回忆之前的提示词，也无法模拟持续进行的对话。
{% endhint %}

## 节点参数（Node parameters）

使用以下参数配置 ReAct Agent。

### Prompt（提示词）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Ss9Y6clfLTwlXMx69w6E/" %}

### Require Specific Output Format（要求特定输出格式）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/IsHMhvgDA3Ok5qdqnHnJ/" %}

## 节点选项（Node options）

使用这些选项来创建一条在对话开始时发送给智能体的消息。消息类型取决于你使用的模型：

* **Chat models（聊天模型）**：这类模型有三个互相交互的角色（AI、system、human）。它们可以接收系统消息（system messages）和人类消息（human messages，也就是提示词）。
* **Instruct models（指令模型）**：这类模型没有独立的 AI、system、human 角色之分。它们只接收一段文本，即指令消息（instruct message）。

### Human Message Template（人类消息模板）

使用这个选项来扩展用户提示词。这也是智能体把信息从一次迭代传递到下一次迭代的方式。

可用的 LangChain 表达式：

* `{input}`：包含用户提示词。
* `{agent_scratchpad}`：供下一次迭代记住的信息。

### Prefix Message（前缀消息）

输入一段文本，放在对话开头的工具列表之前。你不需要自己添加工具列表，LangChain 会自动添加。

### Suffix Message for Chat Model（聊天模型的后缀消息）

当智能体使用聊天模型时，添加一段文本，放在对话开头的工具列表之后。你不需要自己添加工具列表，LangChain 会自动添加。

### Suffix Message for Regular Model（普通模型的后缀消息）

当智能体使用普通/指令（instruct）模型时，添加一段文本，放在对话开头的工具列表之后。你不需要自己添加工具列表，LangChain 会自动添加。

### Return Intermediate Steps（返回中间步骤）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/skA96E8hAnMMKG7c4Lta/" %}

### Tracing Metadata（追踪元数据）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/GAsqtB1RVGEDrT5PMMLl/" %}

## 相关资源（Related resources）

更多信息请参考 LangChain 的 [ReAct Agents 文档](https://js.langchain.com/docs/concepts/agents/)。

## 模板和示例（Templates and examples）

请参考 AI Agent 主节点的 [模板和示例](README.md#templates-and-examples) 部分。

## 常见问题（Common issues）

关于常见问题或错误以及建议的解决方法，请参考[常见问题（Common issues）](common-issues.md)。
