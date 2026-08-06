---
title: Telegram 节点 Chat 操作文档
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Telegram 节点 Chat 操作文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.telegram/chat-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/chat-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/chat-operations
description: >-
  n8n（工作流自动化平台）中 Telegram 节点的 Chat（聊天）操作文档。
  包含配置全部 Chat 操作的细节。
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
**大白话**：这一页是 Telegram 节点里跟「聊天/群组/频道本身」相关的操作：查某个聊天的最新信息、列出群里的管理员、查某个成员的详情、机器人退出群聊、设置群名、设置群简介。常用场景：机器人进群后自动把群名改成规范格式；或者查询群管理员来做权限判断。注意很多字段要填 Chat ID（群编号），怎么拿它请看「常见问题」页。
{% endhint %}

# Chat（聊天）操作

使用这些操作来获取关于聊天、成员、管理员的（最新）信息，离开聊天，以及设置聊天标题和简介。关于 Telegram 节点本身的更多信息，请参考 [Telegram](./README.md)。

（官方此处嵌入了「如何开始使用应用节点」的通用说明组件，此处从略。）

## Get Chat（获取聊天）

使用此操作，通过 Bot API 的 [getChat](https://core.telegram.org/bots/api#getchat) 方法，获取某个聊天的最新信息。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Chat**。
* **Operation**（操作）：选择 **Get**。
* **Chat ID**（聊天 ID）：输入目标频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。

更多信息请参考 Telegram Bot API 的 [getChat](https://core.telegram.org/bots/api#getchat) 文档。

## Get Administrators（获取管理员）

使用此操作，通过 Bot API 的 [getChatAdministrators](https://core.telegram.org/bots/api#getchatadministrators) 方法，获取聊天中全部管理员（Administrator）的列表。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Chat**。
* **Operation**（操作）：选择 **Get Administrators**。
* **Chat ID**（聊天 ID）：输入目标频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。

更多信息请参考 Telegram Bot API 的 [getChatAdministrators](https://core.telegram.org/bots/api#getchatadministrators) 文档。

## Get Chat Member（获取聊天成员）

使用此操作，通过 Bot API 的 [getChatMember](https://core.telegram.org/bots/api#getchatmember) 方法，获取某个聊天成员的详情。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Chat**。
* **Operation**（操作）：选择 **Get Member**。
* **Chat ID**（聊天 ID）：输入目标频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **User ID**（用户 ID）：输入你想查询信息的用户的唯一标识符。

更多信息请参考 Telegram Bot API 的 [getChatMember](https://core.telegram.org/bots/api#getchatmember) 文档。

## Leave Chat（离开聊天）

使用此操作，通过 Bot API 的 [leaveChat](https://core.telegram.org/bots/api#leavechat) 方法，离开某个聊天。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Chat**。
* **Operation**（操作）：选择 **Leave**。
* **Chat ID**（聊天 ID）：输入你想离开的频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。

更多信息请参考 Telegram Bot API 的 [leaveChat](https://core.telegram.org/bots/api#leavechat) 文档。

## Set Description（设置简介）

使用此操作，通过 Bot API 的 [setChatDescription](https://core.telegram.org/bots/api#setchatdescription) 方法，设置聊天的简介。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Chat**。
* **Operation**（操作）：选择 **Set Description**。
* **Chat ID**（聊天 ID）：输入目标频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Description**（简介）：输入你想设置的新简介，最多 255 个字符。

更多信息请参考 Telegram Bot API 的 [setChatDescription](https://core.telegram.org/bots/api#setchatdescription) 文档。

## Set Title（设置标题）

使用此操作，通过 Bot API 的 [setChatTitle](https://core.telegram.org/bots/api#setchattitle) 方法，设置聊天的标题。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Chat**。
* **Operation**（操作）：选择 **Set Title**。
* **Chat ID**（聊天 ID）：输入目标频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Title**（标题）：输入你想设置的新标题，最多 255 个字符。

更多信息请参考 Telegram Bot API 的 [setChatTitle](https://core.telegram.org/bots/api#setchattitle) 文档。
