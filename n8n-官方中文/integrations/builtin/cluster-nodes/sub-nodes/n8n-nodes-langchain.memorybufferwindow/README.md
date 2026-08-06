---
title: Simple Memory 节点文档
description: >-
  了解如何在 n8n 中使用 Simple Memory 节点。阅读技术文档，把
  Simple Memory 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: n8n-nodes-langchain.memorybufferwindow
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorybufferwindow/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorybufferwindow
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorybufferwindow
layout:
  description:
    visible: false
---

# Simple Memory 节点

> **大白话**：这个节点给 AI Agent 加"短期记忆"，让它在多轮对话中记得之前聊了什么。用法：给 Agent 挂上这个子节点，设一个 **Session Key**（会话钥匙，用来在多个会话间区分记忆），再设 **Context Window Length**（上下文窗口长度，即记住最近多少轮对话）。**特别注意**：如果你的 n8n 开了队列模式（queue mode，多 worker 并行跑），这个节点在正式工作流里会失效，因为不保证每次调用都落在同一个 worker 上。

使用 Simple Memory 节点，在你的工作流中持久化[^1]聊天历史。

在本页中，你可以找到 Simple Memory 节点支持的操作列表，以及更多资源链接。

{% hint style="warning" %}
**如果 n8n 跑在队列模式（queue mode），不要用这个节点**

如果你的 n8n 实例使用了[队列模式](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/scaling/enable-queue-mode)，这个节点在活跃的生产工作流中无法工作。原因是 n8n 无法保证每次调用 Simple Memory 都落到同一个 worker 上。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

配置这些参数来设置节点：

* **Session Key**（会话键）：输入用于把记忆存储到工作流数据中的键。
* **Context Window Length**（上下文窗口长度）：输入要考虑的之前交互轮数。

## 模板与示例

[浏览 n8n-nodes-langchain.memorybufferwindow 集成模板](https://n8n.io/integrations/window-buffer-memory) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Buffer Window Memory 文档](https://v03.api.js.langchain.com/classes/langchain.memory.BufferWindowMemory.html)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 常见问题（Common issues）

关于常见问题、错误及建议的解决方案，请参考[常见问题](common-issues.md)。

[^1]: 在 AI 语境里，记忆（memory）让 AI 工具能够在多次交互之间保留消息上下文。这样你就能和 AI Agent 进行连续的对话，而不用每次发消息都重新提交一遍上下文。在 n8n 里，AI Agent 节点可以用记忆，但 AI 链（AI chains）不能用。
