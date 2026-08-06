---
title: Motorhead 节点文档
description: >-
  了解如何在 n8n 中使用 Motorhead 节点。阅读技术文档，把
  Motorhead 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Motorhead 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymotorhead.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymotorhead
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymotorhead
layout:
  description:
    visible: false
---

# Motorhead 节点

> **大白话**：Motorhead 是一个开源的"AI 记忆服务器"，这个节点用它来给 AI Agent 存聊天记忆。**注意：这个项目已经停止维护了**，节点已被标记为弃用（deprecated），未来版本会被移除。如果你在用，建议尽早换到 MongoDB Chat Memory 等其他记忆节点。

{% hint style="warning" %}
**已弃用（Deprecated）**

Motorhead 项目已不再维护。这个节点已弃用，将在未来的版本中移除。
{% endhint %}

使用 Motorhead 节点，把 Motorhead 当作记忆[^1]服务器使用。

在本页中，你可以找到 Motorhead 节点支持的操作列表，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/motorhead.md)找到该节点的认证信息。
{% endhint %}

## 节点参数

* **Session ID**（会话 ID）：输入用于把记忆存储到工作流数据中的 ID。

## 节点参考

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 模板与示例

[浏览 Motorhead 节点集成模板](https://n8n.io/integrations/motorhead) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Motorhead 文档](https://js.langchain.com/docs/integrations/memory/motorhead_memory)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 只有一个记忆实例（Single memory instance）

如果你在工作流里加了不止一个 Motorhead 节点，默认情况下**所有节点访问的都是同一个记忆实例**。做覆盖已有记忆内容的破坏性操作时要小心，比如 [Chat Memory Manager](./n8n-nodes-langchain.memorymanager.md) 节点里的"覆盖所有消息"操作。如果你想在工作流里有多个独立的记忆实例，就在不同的记忆节点里设置不同的 session ID。

[^1]: 在 AI 语境里，记忆（memory）让 AI 工具能够在多次交互之间保留消息上下文。这样你就能和 AI Agent 进行连续的对话，而不用每次发消息都重新提交一遍上下文。在 n8n 里，AI Agent 节点可以用记忆，但 AI 链（AI chains）不能用。
