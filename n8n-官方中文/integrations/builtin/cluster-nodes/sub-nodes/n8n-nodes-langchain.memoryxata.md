---
title: Xata 节点文档
description: >-
  了解如何在 n8n 中使用 Xata 节点。阅读技术文档，把
  Xata 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Xata 节点文档
originalFilePath: integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryxata.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryxata
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryxata
layout:
  description:
    visible: false
---

# Xata 节点

> **大白话**：这个节点用 Xata（一个云端的 serverless 数据库平台）给 AI Agent 存聊天记忆。Xata 是托管服务，不用自己运维数据库，适合不想管服务器的团队。配置很简单：填会话 ID 和上下文窗口长度就行。

使用 Xata 节点，把 Xata 当作记忆[^1]服务器使用。

在本页中，你可以找到 Xata 节点支持的操作列表，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/xata.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

-   **Session ID**（会话 ID）：输入用于把记忆存储到工作流数据中的 ID。
-   **Context Window Length**（上下文窗口长度）：输入要考虑的之前交互轮数。

## 模板与示例

[浏览 Xata 节点集成模板](https://n8n.io/integrations/xata) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Xata 文档](https://js.langchain.com/docs/integrations/memory/xata)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 只有一个记忆实例（Single memory instance）

如果你在工作流里加了不止一个 Xata 节点，默认情况下**所有节点访问的都是同一个记忆实例**。做覆盖已有记忆内容的破坏性操作时要小心，比如 [Chat Memory Manager](./n8n-nodes-langchain.memorymanager.md) 节点里的"覆盖所有消息"操作。如果你想在工作流里有多个独立的记忆实例，就在不同的记忆节点里设置不同的 session ID。

[^1]: 在 AI 语境里，记忆（memory）让 AI 工具能够在多次交互之间保留消息上下文。这样你就能和 AI Agent 进行连续的对话，而不用每次发消息都重新提交一遍上下文。在 n8n 里，AI Agent 节点可以用记忆，但 AI 链（AI chains）不能用。
