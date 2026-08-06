---
title: Zep 节点文档
description: >-
  了解如何在 n8n 中使用 Zep 节点。阅读技术文档，把
  Zep 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Zep 节点文档
originalFilePath: integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryzep.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryzep
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryzep
layout:
  description:
    visible: false
---

# Zep 节点

> **大白话**：这个节点用 Zep（一个专门做"长期 AI 记忆"的服务）给 AI Agent 存聊天记忆。**注意：这个节点已弃用（deprecated）**，会在未来版本里被移除，不建议新项目使用。

{% hint style="warning" %}
**已弃用（Deprecated）**

这个节点已弃用，将在未来的版本中移除。
{% endhint %}

使用 Zep 节点，把 Zep 当作记忆[^1]服务器使用。

在本页中，你可以找到 Zep 节点支持的操作列表，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/zep.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Session ID**（会话 ID）：输入用于把记忆存储到工作流数据中的 ID。

## 模板与示例

[浏览 Zep 节点集成模板](https://n8n.io/integrations/zep) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Zep 文档](https://js.langchain.com/docs/integrations/memory/zep_memory)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 只有一个记忆实例（Single memory instance）

如果你在工作流里加了不止一个 Zep 节点，默认情况下**所有节点访问的都是同一个记忆实例**。做覆盖已有记忆内容的破坏性操作时要小心，比如 [Chat Memory Manager](./n8n-nodes-langchain.memorymanager.md) 节点里的"覆盖所有消息"操作。如果你想在工作流里有多个独立的记忆实例，就在不同的记忆节点里设置不同的 session ID。

[^1]: 在 AI 语境里，记忆（memory）让 AI 工具能够在多次交互之间保留消息上下文。这样你就能和 AI Agent 进行连续的对话，而不用每次发消息都重新提交一遍上下文。在 n8n 里，AI Agent 节点可以用记忆，但 AI 链（AI chains）不能用。
