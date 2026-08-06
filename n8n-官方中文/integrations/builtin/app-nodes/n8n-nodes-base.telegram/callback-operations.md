---
title: Telegram 节点 Callback 操作文档
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Telegram 节点 Callback 操作文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.telegram/callback-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/callback-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/callback-operations
description: >-
  n8n（工作流自动化平台）中 Telegram 节点的 Callback（回调）操作文档。
  包含配置全部 Callback 操作的细节。
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

{% hint style="info" %}
**大白话**：Callback 就是「回调」。当用户在 Telegram 里点内联键盘（inline keyboard）上的按钮，或发送内联查询（inline query，比如 @你的机器人 + 关键词）时，Telegram 会把这个动作回传给机器人。这个节点的两个操作就是用来「回答」这些回传请求的。最典型场景：用户点了机器人消息下面的「确认」按钮，你收到 Callback Query ID 后，用 Answer Query 回复「好的，已处理」并弹出提示。要给节点喂 Query ID，通常前面接一个 Telegram Trigger（触发器）节点。
{% endhint %}

# Callback（回调）操作

使用这些操作来回应来自内联键盘或内联查询发送的回调查询。关于 Telegram 节点本身的更多信息，请参考 [Telegram](./README.md)。

（官方此处嵌入了「如何开始使用应用节点」的通用说明组件，此处从略。）

## Answer Query（回答查询）

使用此操作，通过 Bot API 的 [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery) 方法，来发送对 [内联键盘](https://core.telegram.org/bots/features#inline-keyboards) 发出的回调查询的回答。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Callback**。
* **Operation**（操作）：选择 **Answer Query**。
* **Query ID**（查询 ID）：输入你想回答的查询的唯一标识符。
  * 想把 Query ID 直接喂给本节点，请使用以 **Callback Query** 作为触发事件的 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。
* **Results**（结果）：输入一个 JSON 序列化的结果数组，用作对该查询的回答。关于如何格式化数组，请参考 Telegram 的 [InlineQueryResults](https://core.telegram.org/bots/api#inlinequeryresult) 文档。

更多信息请参考 Telegram Bot API 的 [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery) 文档。

### Answer Query 的附加字段（Additional Fields）

使用 **Additional Fields**（附加字段）来进一步细化节点行为。点击 **Add Field**（添加字段）可添加以下任意一项：

* **Cache Time**（缓存时间）：输入客户端可以缓存回调查询结果的最长时间（秒）。Telegram 对该方法默认是 `0` 秒。
* **Show Alert**（显示弹窗）：Telegram 可以把回答显示为聊天界面顶部的通知，或显示为一个弹窗（alert）。选择是保持默认的通知显示方式（关闭）还是以弹窗显示（开启）。
* **Text**（文本）：如果你希望回答显示文字，在这里输入最多 200 个字符的文本。
* **URL**：输入一个将由用户客户端打开的网址。更多信息请参考 Telegram Bot API [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery) 文档中关于 **url** 参数的说明。

## Answer Inline Query（回答内联查询）

使用此操作，通过 Bot API 的 [answerInlineQuery](https://core.telegram.org/bots/api#answerinlinequery) 方法，来发送对内联查询发出的回调查询的回答。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Callback**。
* **Operation**（操作）：选择 **Answer Inline Query**。
* **Query ID**（查询 ID）：输入你想回答的查询的唯一标识符。
  * 想把 Query ID 直接喂给本节点，请使用以 **Inline Query** 作为触发事件的 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。
* **Results**（结果）：输入一个 JSON 序列化的结果数组，用作对该查询的回答。关于如何格式化数组，请参考 Telegram 的 [InlineQueryResults](https://core.telegram.org/bots/api#inlinequeryresult) 文档。

Telegram 每个查询最多允许 50 条结果。

更多信息请参考 Telegram Bot API 的 [answerInlineQuery](https://core.telegram.org/bots/api#answerinlinequery) 文档。

### Answer Inline Query 的附加字段（Additional Fields）

使用 **Additional Fields**（附加字段）来进一步细化节点行为。点击 **Add Field**（添加字段）可添加以下任意一项：

* **Cache Time**（缓存时间）：客户端可以缓存回调查询结果的最长时间（秒）。Telegram 对该方法默认是 `300` 秒。
* **Show Alert**（显示弹窗）：Telegram 可以把回答显示为聊天界面顶部的通知，或显示为一个弹窗（alert）。选择是保持默认的通知显示方式（关闭）还是以弹窗显示（开启）。
* **Text**（文本）：如果你希望回答显示文字，在这里输入最多 200 个字符的文本。
* **URL**：输入一个用户客户端将打开的网址。
