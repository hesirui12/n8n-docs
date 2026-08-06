---
title: Redis Chat Memory 节点文档
description: >-
  了解如何在 n8n 中使用 Redis Chat Memory 节点。阅读技术文档，把
  Redis Chat Memory 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Redis Chat Memory 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryredischat.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryredischat
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryredischat
layout:
  description:
    visible: false
---

# Redis Chat Memory 节点

> **大白话**：这个节点把聊天历史存到 Redis 里，给 AI Agent 当"记忆"。Redis 是内存型数据库，读写极快，适合对速度敏感的场景。它有个很有用的参数 **Session Time To Live**（会话存活时间）：设个秒数，会话过期后记忆自动清掉，不用手动清理。

使用 Redis Chat Memory 节点，把 Redis 当作记忆[^1]服务器使用。

在本页中，你可以找到 Redis Chat Memory 节点支持的操作列表，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/redis.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Session Key**（会话键）：输入用于把记忆存储到工作流数据中的键。
* **Session Time To Live**（会话存活时间）：用这个参数让会话在指定秒数后过期。
* **Context Window Length**（上下文窗口长度）：输入要考虑的之前交互轮数。

## 模板与示例

[浏览 Redis Chat Memory 节点集成模板](https://n8n.io/integrations/redis-chat-memory) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Redis Chat Memory 文档](https://js.langchain.com/docs/integrations/memory/redis)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 只有一个记忆实例（Single memory instance）

如果你在工作流里加了不止一个 Redis Chat Memory 节点，默认情况下**所有节点访问的都是同一个记忆实例**。做覆盖已有记忆内容的破坏性操作时要小心，比如 [Chat Memory Manager](./n8n-nodes-langchain.memorymanager.md) 节点里的"覆盖所有消息"操作。如果你想在工作流里有多个独立的记忆实例，就在不同的记忆节点里设置不同的 session ID。

[^1]: 在 AI 语境里，记忆（memory）让 AI 工具能够在多次交互之间保留消息上下文。这样你就能和 AI Agent 进行连续的对话，而不用每次发消息都重新提交一遍上下文。在 n8n 里，AI Agent 节点可以用记忆，但 AI 链（AI chains）不能用。
