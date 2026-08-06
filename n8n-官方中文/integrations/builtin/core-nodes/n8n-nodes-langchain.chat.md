---
title: 聊天节点（Chat node）文档
description: >-
  学习如何在 n8n 中使用聊天（Chat）节点。参考技术文档，
  将聊天节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: 聊天节点（Chat node）文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-langchain.chat.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.chat'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.chat'
layout:
  description:
    visible: false
---

# 聊天节点（Chat node）

> **大白话**：这个节点负责"在聊天窗口里发消息"，并且可以**停下来等用户回复**。它配合「聊天触发器（Chat Trigger）」使用：比如 AI 助手聊天过程中，突然需要人工确认（"真的要付款吗？"），节点就发一条消息并暂停工作流，等用户点"同意/拒绝"或输入文字后，工作流再继续。这就是传说中的"人在回路（human-in-the-loop）"。它还**可以作为 AI 智能体（Agent）的工具**来使用。

将聊天节点与 [聊天触发器（Chat Trigger）](n8n-nodes-langchain.chattrigger/README.md) 节点一起使用，可以向聊天发送消息，并可选地等待用户的回复。这可以在聊天工作流中实现"人在回路（human-in-the-loop，HITL）"的用例，让你在**单次执行**中进行多次聊天交互。聊天节点也可以作为 AI 智能体（Agent）的工具来使用。

{% hint style="info" %}
**聊天触发器节点**

聊天节点要求工作流中存在一个 [聊天触发器（Chat Trigger）](n8n-nodes-langchain.chattrigger/README.md) 节点，并且其 [响应模式（Response Mode）](n8n-nodes-langchain.chattrigger/README.md#response-mode) 设置为 'Using Response Nodes（使用响应节点）'。
{% endhint %}

{% hint style="warning" %}
**不支持嵌入式模式**

当聊天触发器节点设置为 **Embedded（嵌入式）** 模式时，不支持聊天节点。在嵌入式模式下，请改用 [响应 Webhook（Respond to Webhook）](n8n-nodes-base.respondtowebhook.md) 节点。
{% endhint %}

{% hint style="info" %}
**旧版本说明**

在之前的版本中，这个节点叫 "Respond to Chat（响应聊天）"，并使用一个单一的 "Wait for User Reply（等待用户回复）" 开关。现在这个功能被重组为两个不同的动作，并增加了更多响应类型。
{% endhint %}

## 节点参数（Node parameters）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/sYWM3IB0LEL4RkPx8ndF/" %}

使用以下参数配置节点。

### 操作（Operation）

聊天节点支持以下操作：

* **Send Message（发送消息）**：向聊天发送一条消息。发送后，工作流执行会立即继续。
* **Send and Wait for Response（发送并等待回复）**：向聊天发送一条消息，并等待用户的回复。此操作会暂停工作流的执行，直到用户提交回复。

选择 **Send and Wait for Response（发送并等待回复）** 会激活额外的参数和选项，详见下文 [等待回复](#等待回复)。

### 消息（Message）

要发送到聊天中的消息。此参数对两个操作都可用。

## 节点选项（Node options）

使用这些**选项（Options）**进一步调整节点的行为。

### 添加记忆输入连接（Add Memory Input Connection）

选择是否要把聊天节点的消息提交到一个已连接的记忆（memory）中。在智能体或链的 [根节点（root node）](../cluster-nodes/root-nodes/README.md) 与聊天节点之间共享同一个记忆，会给这些消息附加相同的会话密钥（session key），让你能够捕获完整的消息历史。

> **小白提示**：记忆（memory）就是 AI 的"短期笔记本"。打开这个选项并把记忆连过来，AI 就能记住之前聊过什么，实现多轮对话的连贯性。

## 等待回复（Waiting for a response）

通过选择 **Send and Wait for Response（发送并等待回复）** 操作，你可以发送一条消息，然后暂停工作流执行，直到有人回复。这可以在单次执行中实现多轮对话和审批工作流。

### 回复类型（Response Type）

你可以在以下回复类型中进行选择：

* **Free Text（自由文本）**：用户可以在聊天中输入任意回复。这与之前 "Wait for User Reply（等待用户回复）" 选项的行为相同。
* **Approval（审批）**：用户可以使用消息中的内联按钮来批准或拒绝。你还可以选择允许用户输入自定义回复。

根据你选择的类型不同，可用的参数和选项也不同。

### 自由文本参数和选项（Free Text parameters and options）

使用 **Free Text（自由文本）** 回复类型时，用户可以把任意消息作为回复输入。

**使用场景（Use cases）：**
- 开放式问题
- 收集详细反馈
- 请求特定信息

**选项（Options）：**
* **Limit Wait Time（限制等待时间）**：设置工作流是否在指定的时间限制后自动恢复执行。可以是一个时间间隔（interval），也可以是一个具体的绝对时间（wall time）。

> **小白提示**：比如 AI 问"你还有什么补充的吗？"，用户随便输入什么，工作流都会继续往下走。适合需要自由回答的场景。

### 审批参数和选项（Approval parameters and options）

使用 **Approval（审批）** 回复类型时，消息中会显示内联按钮，用户可以通过点击来批准或拒绝。这种回复类型与 n8n 中其他"人在回路（HITL）"节点的模式一致。

**使用场景（Use cases）：**
- 简单的"是/否"决策
- 审批工作流
- 确认操作

使用 **Approval（审批）** 回复类型时，以下参数可用：

* **Type of Approval（审批类型）**：是只显示一个"批准"按钮，还是同时显示"批准"和"拒绝"按钮。
    - **Approve Only（仅批准）**：只显示一个"批准"按钮
    - **Approve and Disapprove（批准和拒绝）**：同时显示两个按钮（默认）

* **Approve Button Label（批准按钮文字）**：批准按钮上显示的文字。默认：`Approve`

* **Disapprove Button Label（拒绝按钮文字）**：拒绝按钮上显示的文字（仅当审批类型为 "Approve and Disapprove" 时显示）。默认：`Disapprove`

* **Block User Input（阻止用户输入）**：是否阻止用户输入自定义消息（启用）或允许他们输入回复（禁用，默认）。
    - 当**禁用**（默认）时：用户可以点击按钮，也可以输入自定义消息。输入的消息会被视为"带自定义消息的拒绝"。
    - 当**启用**时：用户只能通过按钮进行交互。

审批回复类型还提供以下选项：

* **Limit Wait Time（限制等待时间）**：设置工作流是否在指定的时间限制后自动恢复执行。可以是一个时间间隔（interval），也可以是一个具体的绝对时间（wall time）。

> **小白提示**：审批类型适合"必须明确同意/拒绝"的场景（比如付款、发布、删除数据）。注意：允许用户打字时，输入内容会被当作"拒绝并附言"，设计流程时要想到这一点。

## 相关资源（Related resources）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

关于设置聊天界面的信息，请参考 [聊天触发器（Chat Trigger）](n8n-nodes-langchain.chattrigger/README.md) 节点文档。

## 模板和示例（Templates and examples）

[浏览 n8n 集成模板](https://n8n.io/integrations/) 或 [搜索所有模板](https://n8n.io/workflows/)

## 常见问题（Common issues）

- 当聊天触发器节点的 **Mode（模式）** 设置为 **Embedded（嵌入式）** 时，不支持聊天节点。在嵌入式模式下，聊天触发器节点只提供 **Respond to Webhook（响应 Webhook）** 作为响应模式。请改用 [响应 Webhook（Respond to Webhook）](n8n-nodes-base.respondtowebhook.md) 节点。
- 聊天节点在作为子智能体（subagent）的工具时不工作。
- 聊天节点在子工作流（subworkflow）中使用时不工作。这也包括被用作 AI 智能体工具的子工作流。
- 请确保聊天触发器节点的 Response Mode（响应模式）设置为 "Using Response Nodes（使用响应节点）"，聊天节点才能正常工作。

关于聊天触发器节点的常见问题，请参考 [聊天触发器节点常见问题（Common Chat Trigger Node Issues）](n8n-nodes-langchain.chattrigger/common-issues.md)。
