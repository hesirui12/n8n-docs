---
title: OpenAI Functions Agent 节点文档
contentType:
  - integration
  - reference
priority: critical
nodeTitle: OpenAI Functions Agent node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/openai-functions-agent.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/openai-functions-agent
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/openai-functions-agent
description: >-
  学习如何在 n8n 中使用 AI Agent 节点的 OpenAI Functions Agent。
  按照技术文档把 OpenAI Functions Agent 集成到你的工作流中。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# OpenAI Functions Agent（OpenAI 函数智能体）

{% hint style="info" %}
**大白话**：这个页面讲的是 AI Agent 的另一种旧模式——「OpenAI Functions Agent」。它专门配合 OpenAI 的「函数调用」（function calling）模型使用：模型会自动判断「现在该不该调用某个函数」，并返回调用函数所需的参数。**注意：这个功能已在 2025 年 2 月被弃用**，新的 AI Agent 节点统一使用 Tools Agent（工具智能体），所以这篇文档主要给旧用户参考。
{% endhint %}

{% hint style="info" %}
**功能已弃用（Feature deprecated）**

n8n 在 2025 年 2 月弃用了这个功能。新的 AI Agent 节点使用 Tools Agent（工具智能体）。
{% endhint %}

使用 OpenAI Functions Agent 节点来配合 [OpenAI functions 模型](https://platform.openai.com/docs/guides/function-calling) 使用。这类模型能检测出「什么时候应该调用某个函数」，并返回应该传给该函数的输入。

关于 AI Agent 节点本身的更多信息，请参考 [AI Agent](./README.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/cHtfs3gewkhPbGP31rjc/" %}

{% hint style="info" %}
**必须使用 OpenAI Chat Model（OpenAI 聊天模型）**

使用这个智能体时，你必须使用 [OpenAI Chat Model](../../sub-nodes/n8n-nodes-langchain.lmchatopenai/README.md)。
{% endhint %}

## 节点参数（Node parameters）

使用以下参数配置 OpenAI Functions Agent。

### Prompt（提示词）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Ss9Y6clfLTwlXMx69w6E/" %}

### Require Specific Output Format（要求特定输出格式）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/IsHMhvgDA3Ok5qdqnHnJ/" %}

## 节点选项（Node options）

使用以下选项来微调 OpenAI Functions Agent 节点的行为：

### System Message（系统消息）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Ci5NMdJiVoyT9dtdTE9w/" %}

### Max Iterations（最大迭代次数）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/8UflrA3Nx8LD5bKQn8Xc/" %}

### Return Intermediate Steps（返回中间步骤）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/skA96E8hAnMMKG7c4Lta/" %}

### Tracing Metadata（追踪元数据）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/GAsqtB1RVGEDrT5PMMLl/" %}

## 模板和示例（Templates and examples）

请参考 AI Agent 主节点的 [模板和示例](./README.md#templates-and-examples) 部分。

## 常见问题（Common issues）

关于常见问题或错误以及建议的解决方法，请参考[常见问题（Common issues）](common-issues.md)。
