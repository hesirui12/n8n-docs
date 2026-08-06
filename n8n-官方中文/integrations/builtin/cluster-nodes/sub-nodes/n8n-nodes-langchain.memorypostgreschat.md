---
title: Postgres Chat Memory 节点文档
description: >-
  了解如何在 n8n 中使用 Postgres Chat Memory 节点。阅读技术文档，把
  Postgres Chat Memory 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Postgres Chat Memory 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorypostgreschat.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorypostgreschat
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorypostgreschat
layout:
  description:
    visible: false
---

# Postgres Chat Memory 节点

> **大白话**：这个节点把聊天历史存到 PostgreSQL 数据库里，给 AI Agent 当"长期记忆"。如果你本来就在用 Postgres（这是最常见的开源数据库之一），加个表就能存记忆，管理也方便。配置时填会话键、表名（没有会自动建），还有上下文窗口长度。

使用 Postgres Chat Memory 节点，把 Postgres 当作记忆[^1]服务器来存储聊天历史。

在本页中，你可以找到 Postgres Chat Memory 节点支持的操作列表，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/postgres.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Session Key**（会话键）：输入用于把记忆存储到工作流数据中的键。
* **Table Name**（表名）：输入用于存储聊天历史的表名。如果该表不存在，系统会自动创建。
* **Context Window Length**（上下文窗口长度）：输入要考虑的之前交互轮数。

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Postgres Chat Message History 文档](https://js.langchain.com/docs/integrations/memory/postgres)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 只有一个记忆实例（Single memory instance）

如果你在工作流里加了不止一个 Postgres Chat Memory 节点，默认情况下**所有节点访问的都是同一个记忆实例**。做覆盖已有记忆内容的破坏性操作时要小心，比如 [Chat Memory Manager](./n8n-nodes-langchain.memorymanager.md) 节点里的"覆盖所有消息"操作。如果你想在工作流里有多个独立的记忆实例，就在不同的记忆节点里设置不同的 session ID。

[^1]: 在 AI 语境里，记忆（memory）让 AI 工具能够在多次交互之间保留消息上下文。这样你就能和 AI Agent 进行连续的对话，而不用每次发消息都重新提交一遍上下文。在 n8n 里，AI Agent 节点可以用记忆，但 AI 链（AI chains）不能用。
