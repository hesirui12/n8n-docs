---
title: Telegram Trigger 节点文档（Telegram Trigger node）
description: >-
  学习如何在 n8n 中使用 Telegram Trigger 节点。按照技术文档把 Telegram
  Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: n8n-nodes-base.telegramtrigger
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.telegramtrigger/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.telegramtrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.telegramtrigger
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**

简单来说，这个触发器节点就是帮你「盯住」你的 Telegram 机器人。只要机器人那边有任何动静（收到新消息、群成员变化、有人投票回答、机器人被加进群聊等），它就自动启动你的工作流。你可以选择只关心哪几类事件。
{% endhint %}

# Telegram Trigger 节点

[Telegram](https://telegram.org/) 是一款基于云的即时通讯和网络电话（VoIP）服务。用户可以发送消息，并交换照片、视频、贴纸、音频以及任何类型的文件。在本页中，你会找到 Telegram Trigger 节点可以响应的事件列表，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../../credentials/telegram.md)找到此节点的认证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

要获取帮助你快速上手的使用示例和模板，请参阅 n8n 的 [Telegram Trigger 集成](https://n8n.io/integrations/telegram-trigger/) 页面。
{% endhint %}

## 事件（Events）

- **`*`**（全部）：除 "Chat Member"、"Message Reaction" 和 "Message Reaction Count" 之外的所有更新（这是 Telegram API 的默认行为，因为这三类事件会产生大量更新调用）。
- **Business Connection**（企业账号连接）：当机器人与企业账号连接或断开连接，或用户编辑了与该机器人的现有连接时触发。
- **Business Message**（企业消息）：当来自已连接企业账号的新消息出现时触发。
- **Callback Query**（回调查询）：当有新的传入回调查询时触发。
- **Channel Post**（频道帖子）：当有任意类型的新传入频道帖子时触发——包括文字、照片、贴纸等。
- **Chat Boost**（聊天助推）：当聊天助推被添加或更改时触发。机器人必须是该聊天的管理员才能收到这些更新。
- **Chat Join Request**（入群申请）：当发送加入聊天的请求时触发。机器人必须拥有该聊天的 `can_invite_users` 管理员权限才能收到这些更新。
- **Chat Member**（群成员）：当群成员的状态被更新时触发。机器人必须是该聊天的管理员。
- **Chosen Inline Result**（选中的内联结果）：当用户选中的内联查询结果被发送时触发。请参阅 Telegram 的 API 文档中关于[反馈收集](https://core.telegram.org/bots/inline#collecting-feedback)的说明，了解如何为你的机器人启用这些更新。
- **Deleted Business Messages**（删除的企业消息）：当消息从已连接的企业账号中被删除时触发。
- **Edited Business Message**（编辑过的企业消息）：当来自已连接企业账号的消息出现新版本时触发。
- **Edited Channel Post**（编辑过的频道帖子）：当机器人已知的频道帖子被编辑出新版本时触发。
- **Edited Message**（编辑过的消息）：当机器人已知的消息被编辑出新版本时触发。
- **Inline Query**（内联查询）：当有新的传入内联查询时触发。
- **Message**（消息）：当有任意类型的新传入消息时触发——文字、照片、贴纸等。
- **Message Reaction**（消息回应）：当用户改变了对某条消息的回应时触发。机器人必须是该聊天的管理员。机器人设置的反应不会收到此更新。
- **Message Reaction Count**（消息回应数量）：当对一条消息的匿名回应发生变化时触发。机器人必须是该聊天的管理员。这些更新会被分组发送，可能有最多几分钟的延迟。
- **My Chat Member**（我的群成员状态）：当机器人自己在某个聊天中的成员状态被更新时触发。对于私聊，只有在用户屏蔽或解除屏蔽机器人时才会收到此更新。
- **Poll**（投票）：当投票状态发生变化时触发。机器人只会收到关于已结束投票以及由机器人自己发送的投票的更新。
- **Poll Answer**（投票回答）：当用户在非匿名投票中改变自己的答案时触发。机器人只会收到由机器人自己发送的投票中的新票数。
- **Pre-Checkout Query**（预结账查询）：当有新的传入预结账查询时触发。包含关于结账的完整信息。
- **Purchased Paid Media**（已购买付费媒体）：当用户在非频道聊天中购买带有机器人发送的非空 payload 的付费媒体时触发。
- **Removed Chat Boost**（移除聊天助推）：当聊天的助推被移除时触发。机器人必须是该聊天的管理员才能收到这些更新。
- **Shipping Query**（物流查询）：当有新的传入物流查询时触发。仅适用于价格可变的账单。

某些**事件可能需要额外的权限**，请参阅 [Telegram 的 API 文档](https://core.telegram.org/bots/api#getting-updates)了解更多信息。

## 选项（Options）

- **Download Images/Files**（下载图片/文件）：是否下载附带的图片或文件，以包含在输出数据中。
	- **Image Size**（图片尺寸）：当你启用 **Download Images/Files** 时，此选项配置要下载的图片尺寸。默认下载大图。
- **Restrict to Chat IDs**（限制聊天 ID）：只对列出的聊天 ID 的事件触发。你可以包含多个聊天 ID，用逗号分隔。
- **Restrict to User IDs**（限制用户 ID）：只对列出的用户 ID 的事件触发。你可以包含多个用户 ID，用逗号分隔。

## 相关资源（Related resources）

n8n 为 Telegram 提供了一个应用节点。你可以[在这里](../../credentials/telegram.md)找到该节点的文档。

在 n8n 的网站上查看[示例工作流和相关内容](https://n8n.io/integrations/telegram-trigger/)。

有关其 API 的详细信息，请参阅 [Telegram 的 API 文档](https://core.telegram.org/bots/api)。

## 常见问题（Common issues）

对于常见问题或疑问以及建议的解决方案，请参阅[常见问题](common-issues.md)。
