---
title: 聊天触发器节点常见问题
description: >-
  n8n（工作流自动化平台）中聊天触发器（Chat Trigger）节点的常见问题与疑问文档。
  包含问题详情和建议的解决方案。
contentType:
  - integration
  - reference
priority: high
nodeTitle: 聊天触发器节点常见问题
originalFilePath: >-
  integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger/common-issues
layout:
  description:
    visible: false
---

# 聊天触发器节点常见问题

> **大白话**：这里收集了聊天触发器最常见的两个问题：①怎么把网站里的额外信息（比如用户 ID）传给聊天；②为什么聊天记不住之前聊过的内容（加载不了历史消息）以及怎么解决。

以下是 [聊天触发器节点](README.md) 的一些常见错误和问题，以及解决或排查它们的步骤。

## 把网站数据传给嵌入式聊天触发器节点（Pass data from a website to an embedded Chat Trigger node）

> **大白话**：如果你把聊天窗口嵌进了自己的网站，可能想顺便把一些"背景信息"（比如用户 ID、所在页面）带给工作流。做法是：在网页的 `createChat` 配置里加一个 `metadata` 字段。

在网站中[嵌入](https://www.npmjs.com/package/@n8n/chat)聊天触发器节点时，你可能想把额外的信息传给聊天触发器。例如，把存储在网站 cookie 里的用户 ID 传过去。

为此，请在嵌入聊天窗口时，使用传入 `createChat` 函数的 JSON 对象中的 `metadata` 字段：

```javascript
createChat({
	webhookUrl: 'YOUR_PRODUCTION_WEBHOOK_URL',
	metadata: {
		'YOUR_KEY': 'YOUR_DATA'
	};
});
```

`metadata` 字段可以包含任意数据，这些数据会与其它输出数据一起出现在聊天触发器的输出中。之后，你可以像平常一样，使用 n8n 的[数据处理功能](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/overview)从下游节点查询和处理这些数据。

> **小白提示**：比如在 `metadata` 里放 `{'userId': '12345'}`，工作流里就能知道"这条消息是哪个用户发的"，从而做个性化回复或记录。

## 聊天触发器节点不获取之前的消息（Chat Trigger node doesn't fetch previous messages）

> **大白话**：现象是——用户明明之前聊过，但 AI"失忆了"，不记得上次的内容；有时还会报 `workflow could not be started!`（工作流无法启动）的错误。原因通常是"会话记忆"没有接对。

配置聊天触发器节点时，如果你对会话加载的配置不够细心，可能会遇到无法获取之前消息的问题。这通常表现为 `workflow could not be started!`（工作流无法启动）错误。

在聊天触发器中，**Load Previous Session（加载之前的会话）** 选项使用 `sessionID` 检索某个会话的之前聊天消息。当你把 **Load Previous Session** 选项设置为 **From memory（从记忆加载）** 时，几乎总是最好把[同一个记忆节点](README.md#加载之前的会话)同时连接到工作流中的聊天触发器和 Agent：

1. 在你的 **Chat Trigger（聊天触发器）** 节点中，把 **Load Previous Session（加载之前的会话）** 选项设置为 **From Memory（从记忆加载）**。只有当你把聊天设为公开可用时，这个选项才可见。
2. 把一个 **Simple Memory（简单记忆）** 节点连接到 **Memory（记忆）** 连接口上。
3. 把同一个 **Simple Memory（简单记忆）** 节点连接到你的 **Agent（智能体）** 的 **Memory（记忆）** 连接口上。
4. 在 **Simple Memory（简单记忆）** 节点中，把 **Session ID（会话 ID）** 设置为 **Connected Chat Trigger Node（已连接的聊天触发器节点）**。

有一种情况你可能想把不同的记忆节点分别连接到聊天触发器和 Agent：当你想把记忆节点中的 **Session ID（会话 ID）** 设置为 **Define below（在下方定义）** 时。

如果你通过表达式获取会话 ID，同一个表达式必须对连接到它的每一个节点都有效。如果该表达式不能兼容每一个需要记忆的节点，你可能需要使用不同的记忆节点，以便针对每个节点单独定制会话 ID 的表达式。

> **小白提示**：核心要点——**聊天触发器和 Agent 要接同一个记忆节点**，并且 Session ID 选"已连接的聊天触发器节点"，这样两边才能对得上号、读出同一段历史。如果要在不同节点上用不同的会话 ID 表达式，那就各自接一个记忆节点。
