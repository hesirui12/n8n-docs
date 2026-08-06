---
title: MongoDB Chat Memory 节点文档
description: >-
  了解如何在 n8n 中使用 MongoDB Chat Memory 节点。阅读技术文档，把
  MongoDB Chat Memory 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: MongoDB Chat Memory 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymongochat.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymongochat
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymongochat
layout:
  description:
    visible: false
---

# MongoDB Chat Memory 节点

> **大白话**：这个节点把聊天历史存到 MongoDB 里，给 AI Agent 当"长期记忆"。比起 Simple Memory（存在工作流内存里），存 MongoDB 的好处是重启不丢、多个工作流/多台机器能共享。配置时填会话键、集合名（没有会自动建）、数据库名，还有上下文窗口长度（记住最近多少轮）。

使用 MongoDB Chat Memory 节点，把 MongoDB 当作记忆[^1]服务器来存储聊天历史。

在本页中，你可以找到 MongoDB Chat Memory 节点支持的操作列表，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/mongodb.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Session Key**（会话键）：输入用于把记忆存储到工作流数据中的键。
* **Collection Name**（集合名称）：输入用于存储聊天历史的集合名称。如果该集合不存在，系统会自动创建。
* **Database Name**（数据库名称）：输入用于存储聊天历史的数据库名称。如果不填，就使用凭据里的数据库。
* **Context Window Length**（上下文窗口长度）：输入要考虑的之前交互轮数。

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 MongoDB Chat Message History 文档](https://js.langchain.com/docs/integrations/memory/mongodb)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 只有一个记忆实例（Single memory instance）

如果你在工作流里加了不止一个 MongoDB Chat Memory 节点，默认情况下**所有节点访问的都是同一个记忆实例**。做覆盖已有记忆内容的破坏性操作时要小心，比如 [Chat Memory Manager](./n8n-nodes-langchain.memorymanager.md) 节点里的"覆盖所有消息"操作。如果你想在工作流里有多个独立的记忆实例，就在不同的记忆节点里设置不同的 session ID。

[^1]: 在 AI 语境里，记忆（memory）让 AI 工具能够在多次交互之间保留消息上下文。这样你就能和 AI Agent 进行连续的对话，而不用每次发消息都重新提交一遍上下文。在 n8n 里，AI Agent 节点可以用记忆，但 AI 链（AI chains）不能用。
