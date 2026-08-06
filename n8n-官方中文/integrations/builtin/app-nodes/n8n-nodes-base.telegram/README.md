---
title: Telegram 节点文档
contentType:
  - integration
  - reference
priority: critical
nodeTitle: n8n-nodes-base.telegram
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.telegram/index.md
originalUrl: https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram
url: https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram
description: >-
  n8n（工作流自动化平台）中 Telegram 节点的文档。
  包含操作和配置细节，以及示例和凭证信息的链接。
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
**大白话**：Telegram 节点是 n8n 里很常用的一个节点：能发消息、发图片/视频/文档/贴纸、编辑和删除消息、置顶/取消置顶、查询群信息，还能回复用户点按钮的回调。典型的「主动通知」场景：网站有新订单 → Telegram 机器人给群/频道发一条消息。要接收消息（被动场景），需要配合 Telegram Trigger（触发器）节点。使用前先创建 Telegram Bot（找 @BotFather 申请）并把机器人加进目标频道/群。子页面分成了 Chat、Callback、File、Message 四类操作，各有一个详细页面。
{% endhint %}

# Telegram

使用 Telegram 节点来自动化你在 [Telegram](https://telegram.org/) 中的工作，并把 Telegram 与其它应用集成。n8n 内置支持 Telegram 的大量功能，包括获取文件，以及删除和编辑消息。

在本页你可以看到 Telegram 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Telegram 凭证](../../credentials/telegram.md)。
{% endhint %}

## 操作

* [**Chat（聊天）**操作](chat-operations.md)
  * [**Get**](chat-operations.md#get-chat)（获取）某个聊天的最新信息。
  * [**Get Administrators**](chat-operations.md#get-administrators)（获取管理员）：获取聊天中全部管理员的列表。
  * [**Get Member**](chat-operations.md#get-chat-member)（获取成员）：获取某个聊天成员的详情。
  * [**Leave**](chat-operations.md#leave-chat)（离开）某个聊天。
  * [**Set Description**](chat-operations.md#set-description)（设置简介）某个聊天的简介。
  * [**Set Title**](chat-operations.md#set-title)（设置标题）某个聊天的标题。
* [**Callback（回调）**操作](callback-operations.md)
  * [**Answer Query**](callback-operations.md#answer-query)（回答查询）：发送对[内联键盘](https://core.telegram.org/bots/features#inline-keyboards)发出的回调查询的回答。
  * [**Answer Inline Query**](callback-operations.md#answer-inline-query)（回答内联查询）：发送对内联查询发出的回调查询的回答。
* [**File（文件）**操作](file-operations.md)
  * [**Get File**](file-operations.md#get-file)（获取文件）从 Telegram 获取文件。
*   [**Message（消息）**操作](message-operations.md)<br>

    * [**Delete Chat Message**](message-operations.md#delete-chat-message)（删除聊天消息）。
    * [**Edit Message Text**](message-operations.md#edit-message-text)（编辑消息文本）：编辑已有消息的文本。
    * [**Pin Chat Message**](message-operations.md#pin-chat-message)（置顶聊天消息）置顶消息。
    * [**Send Animation**](message-operations.md#send-animation)（发送动画）到聊天。
      * 用于发送 GIF 或无声音的 H.264/MPEG-4 AVC 视频，最大 50 MB。
    * [**Send Audio**](message-operations.md#send-audio)（发送音频）文件到聊天，并在音乐播放器中显示。
    * [**Send Chat Action**](message-operations.md#send-chat-action)（发送聊天动作）：告诉用户机器人这边正在发生某事。状态会持续 5 秒或更短。
    * [**Send Document**](message-operations.md#send-document)（发送文档）到聊天。
    * [**Send Location**](message-operations.md#send-location)（发送位置）：向聊天发送地理位置。
    * [**Send Media Group**](message-operations.md#send-media-group)（发送媒体组）：发送一组照片和/或视频。
    * [**Send Message**](message-operations.md#send-message)（发送消息）到聊天。
    * [**Send Photo**](message-operations.md#send-photo)（发送照片）到聊天。
    * [**Send Sticker**](message-operations.md#send-sticker)（发送贴纸）到聊天。
      * 用于发送静态 .WEBP、动态 .TGS 或视频 .WEBM 贴纸。
    * [**Send Video**](message-operations.md#send-video)（发送视频）到聊天。
    * [**Unpin Chat Message**](message-operations.md#unpin-chat-message)（取消置顶聊天消息）。

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>把机器人加进频道</strong></p><p>要使用大多数 <strong>Message（消息）</strong>操作，你必须先把机器人加进频道，它才能向该频道发送消息。更多信息请参考 <a href="common-issues.md#add-a-bot-to-a-telegram-channel">常见问题 | 把机器人添加进 Telegram 频道</a>。</p></div>

    ## 模板与示例

[浏览 n8n-nodes-base.telegram 的官方集成模板](https://n8n.io/integrations/telegram)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Telegram 的 API 文档](https://core.telegram.org/bots/api)。

n8n 为 Telegram 提供了触发器节点。触发器节点文档见[这里](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md)。

## 常见问题

遇到常见错误或问题以及建议的解决步骤，请参考[常见问题](common-issues.md)。
