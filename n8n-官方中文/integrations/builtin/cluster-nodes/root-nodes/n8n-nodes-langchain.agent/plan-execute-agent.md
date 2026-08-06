---
title: Plan and Execute AI Agent 节点文档
description: >-
  学习如何在 n8n 中使用 AI Agent 节点的 Plan and Execute Agent。
  按照技术文档把 Plan and Execute Agent 集成到你的工作流中。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Plan and Execute AI Agent node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/plan-execute-agent.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/plan-execute-agent
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/plan-execute-agent
layout:
  description:
    visible: false
---

# Plan and Execute Agent 节点（计划与执行智能体）

{% hint style="info" %}
**大白话**：这个页面讲的是 AI Agent 的一种旧模式——「Plan and Execute Agent」（计划与执行智能体）。它的特点是「先想后做」：先把任务拆成一个总体计划，再一步一步执行。适合需要结构化、需要仔细规划的复杂任务。**注意：这个功能已在 2025 年 2 月被移除**，现在所有 AI Agent 统一使用 Tools Agent（工具智能体），这篇文档主要给旧用户参考。
{% endhint %}

{% hint style="info" %}
**功能已移除（Feature removed）**

n8n 在 2025 年 2 月移除了这个功能。
{% endhint %}

Plan and Execute Agent（计划与执行智能体）和 [ReAct agent](react-agent.md) 类似，但更侧重于「规划」。它首先为给定的任务制定一个高层计划，然后逐步执行该计划。这个智能体最适合需要结构化方法和仔细规划的任务。

关于 AI Agent 节点本身的更多信息，请参考 [AI Agent](README.md)。

## 节点参数（Node parameters）

使用以下参数配置 Plan and Execute Agent。

### Prompt（提示词）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Ss9Y6clfLTwlXMx69w6E/" %}

### Require Specific Output Format（要求特定输出格式）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/IsHMhvgDA3Ok5qdqnHnJ/" %}

## 节点选项（Node options）

使用以下选项来微调 Plan and Execute Agent 节点的行为：

### Human Message Template（人类消息模板）

输入一条 n8n 在每一步执行时发送给智能体的消息。

可用的 LangChain 表达式：

* `{previous_steps}`：包含智能体已经完成的先前步骤的信息。
* `{current_step}`：包含当前步骤的信息。
* `{agent_scratchpad}`：供下一次迭代记住的信息。

### Tracing Metadata（追踪元数据）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/GAsqtB1RVGEDrT5PMMLl/" %}

## 模板和示例（Templates and examples）

请参考 AI Agent 主节点的 [模板和示例](README.md#templates-and-examples) 部分。

## 常见问题（Common issues）

关于常见问题或错误以及建议的解决方法，请参考[常见问题（Common issues）](common-issues.md)。
