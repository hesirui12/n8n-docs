---
title: Telegram 节点 Message 操作文档
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Telegram 节点 Message 操作文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.telegram/message-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/message-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/message-operations
description: >-
  n8n（工作流自动化平台）中 Telegram 节点的 Message（消息）操作文档。
  包含配置全部 Message 操作的细节。
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
**大白话**：这一页是 Telegram 节点功能最全的一页——「消息」类的所有操作：发文字、发照片、发视频、发音频、发文件、发动画（GIF）、发贴纸、发位置、发一组媒体（多图）、删消息、改消息、置顶/取消置顶，还有两种特殊玩法：发送聊天动作（正在输入…的提示）和「发送并等待回复」（发消息后暂停工作流，等用户点按钮或填表单回复，适合做人工审批）。注意几点：①要给频道发消息，机器人必须先加进频道；②Telegram 限流是每秒 30 条；③发图/文件时可以用本节点的二进制文件（Binary File），也可以填 `file_id` 或 HTTP 网址。文末还讲了「回复标记（Reply Markup）」——就是在消息下方挂按钮键盘的配置方法。
{% endhint %}

# Message（消息）操作

使用这些操作在聊天中发送、编辑和删除消息；向聊天发送文件；以及在聊天中置顶/取消置顶消息。关于 Telegram 节点本身的更多信息，请参考 [Telegram](./README.md)。

{% hint style="info" %}
**把机器人加进频道**

要使用大多数这些操作，你必须先把机器人加进频道，它才能向该频道发送消息。更多信息请参考 [常见问题 | 把机器人添加进 Telegram 频道](common-issues.md#add-a-bot-to-a-telegram-channel)。
{% endhint %}

（官方此处嵌入了「如何开始使用应用节点」的通用说明组件，此处从略。）

（官方此处嵌入了通用资源组件，此处从略。）

## Delete Chat Message（删除聊天消息）

使用此操作，通过 Bot API 的 [deleteMessage](https://core.telegram.org/bots/api#deletemessage) 方法，从聊天中删除一条消息。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Delete Chat Message**。
* **Chat ID**（聊天 ID）：输入你想在其中删除消息的频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Message ID**（消息 ID）：输入你想删除的消息的唯一标识符。

更多信息请参考 Telegram Bot API 的 [deleteMessage](https://core.telegram.org/bots/api#deletemessage) 文档。

## Edit Message Text（编辑消息文本）

使用此操作，通过 Bot API 的 [editMessageText](https://core.telegram.org/bots/api#editmessagetext) 方法，编辑一条已有消息的文本。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Edit Message Text**。
* **Chat ID**（聊天 ID）：输入目标频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Message ID**（消息 ID）：输入你想编辑的消息的唯一标识符。
* **Reply Markup**（回复标记）：选择是使用 **Inline Keyboard**（内联键盘）来显示 InlineKeyboardMarkup，还是选 **None**（无）不显示。这会设置 `reply_markup` 参数。更多信息请参考 [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup) 文档。
* **Text**（文本）：输入你想把消息改成的新文本。

更多信息请参考 Telegram Bot API 的 [editMessageText](https://core.telegram.org/bots/api#editmessagetext) 文档。

### Edit Message Text 的附加字段（Additional Fields）

使用 **Additional Fields**（附加字段）来进一步细化节点行为。点击 **Add Field**（添加字段）可添加以下任意一项：

* **Disable WebPage Preview**（禁用网页预览）：选择是启用本条消息里链接的预览（关闭）还是禁用链接预览（打开）。这会设置 `link_preview_options` 参数中的 `is_disabled`。更多信息请参考 [LinkPreviewOptions](https://core.telegram.org/bots/api#linkpreviewoptions) 文档。
* **Parse Mode**（解析模式）：选择消息应该用 **HTML**（默认）、**Markdown (Legacy)** 还是 **MarkdownV2** 解析。这会设置 `parse_mode` 参数。

## Pin Chat Message（置顶聊天消息）

使用此操作，通过 Bot API 的 [pinChatMessage](https://core.telegram.org/bots/api#pinchatmessage) 方法，为聊天置顶一条消息。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Pin Chat Message**。
* **Chat ID**（聊天 ID）：输入你想置顶消息的频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Message ID**（消息 ID）：输入你想置顶的消息的唯一标识符。

更多信息请参考 Telegram Bot API 的 [pinChatMessage](https://core.telegram.org/bots/api#pinchatmessage) 文档。

### Pin Chat Message 的附加字段（Additional Fields）

使用 **Additional Fields**（附加字段）来进一步细化节点行为。点击 **Add Field**（添加字段）可添加以下任意一项：

* **Disable Notifications**（禁用通知）：默认情况下，Telegram 会通知所有聊天成员消息已被置顶。如果你不希望发出这些通知，就把这个开关打开。这会把 `disable_notification` 参数设置为 `true`。

## Send Animation（发送动画）

使用此操作，通过 Bot API 的 [sendAnimation](https://core.telegram.org/bots/api#sendanimation) 方法，向聊天发送 GIF 或无声音的 H.264/MPEG-4 AVC 视频（最大 50 MB）。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Send Animation**。
* **Chat ID**（聊天 ID）：输入你想把动画发到的频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Binary File**（二进制文件）：如果要从节点本身发送二进制文件，请打开此开关。打开后，你必须填写 **Input Binary Field**（输入二进制字段），指明包含你要发送的文件的字段。
* **Animation**（动画）：如果你没有使用 **Binary File**，在这里输入要发送的动画。可以传一个 `file_id` 来发送已存在于 Telegram 服务器上的文件（推荐），或传一个 HTTP 网址让 Telegram 从互联网上获取文件。
* **Reply Markup**（回复标记）：使用此参数设置更多界面选项。关于这些选项及其用法，请参考 [Reply Markup 参数](message-operations.md#reply-markup-parameters)。

更多信息请参考 Telegram Bot API 的 [sendAnimation](https://core.telegram.org/bots/api#sendanimation) 文档。

### Send Animation 的附加字段（Additional Fields）

使用 **Additional Fields**（附加字段），通过 Telegram 的 sendAnimation 方法中的可选字段来进一步细化节点行为。点击 **Add Field**（添加字段）可添加以下任意一项：

* **Caption**（说明文字）：为动画输入说明文字，最多 1024 个字符。
* **Disable Notification**（禁用通知）：选择是静默发送通知（打开）还是使用标准通知（关闭）。
* **Duration**（时长）：输入动画的时长（秒）。
* **Height**（高度）：输入动画的高度。
* **Parse Mode**（解析模式）：输入用于解析相关文本的解析器。选项包括 **HTML**（默认）、**Markdown (Legacy)**、**MarkdownV2**。更多信息请参考 Telegram 的 [格式化选项](https://core.telegram.org/bots/api#formatting-options) 文档。
* **Reply To Message ID**（回复的消息 ID）：如果该消息是回复消息，输入它回复的那条消息的 ID。
* **Message Thread ID**（消息主题 ID）：输入论坛目标消息主题（话题）的唯一标识符；仅用于论坛超级群组。
* **Thumbnail**（缩略图）：添加所发送文件的缩略图。如果服务器端支持为该文件生成缩略图，可以忽略此字段。缩略图需满足以下规格：
  * JPEG 格式
  * 小于 200 KB
  * 宽和高都小于 320px
* **Width**（宽度）：输入视频片段的宽度。

### Send Audio（发送音频）

使用此操作，通过 Bot API 的 [sendAudio](https://core.telegram.org/bots/api#sendaudio) 方法，向聊天发送音频文件，并在音乐播放器中显示。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Send Audio**。
* **Chat ID**（聊天 ID）：输入你想把音频发到的频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Binary File**（二进制文件）：如果要从节点本身发送二进制文件，请打开此开关。打开后，你必须填写 **Input Binary Field**（输入二进制字段），指明包含你要发送的文件的字段。
* **Audio**（音频）：如果你没有使用 **Binary File**，在这里输入要发送的音频。可以传一个 `file_id` 来发送已存在于 Telegram 服务器上的文件（推荐），或传一个 HTTP 网址让 Telegram 从互联网上获取文件。
* **Reply Markup**（回复标记）：使用此参数设置更多界面选项。关于这些选项及其用法，请参考 [Reply Markup 参数](message-operations.md#reply-markup-parameters)。

更多信息请参考 Telegram Bot API 的 [sendAudio](https://core.telegram.org/bots/api#sendaudio) 文档。

### Send Audio 的附加字段（Additional Fields）

使用 **Additional Fields**（附加字段），通过 Telegram 的 sendAudio 方法中的可选字段来进一步细化节点行为。点击 **Add Field**（添加字段）可添加以下任意一项：

* **Caption**（说明文字）：为音频输入说明文字，最多 1024 个字符。
* **Disable Notification**（禁用通知）：选择是静默发送通知（打开）还是使用标准通知（关闭）。
* **Duration**（时长）：输入音频的时长（秒）。
* **Parse Mode**（解析模式）：输入用于解析相关文本的解析器。选项包括 **HTML**（默认）、**Markdown (Legacy)**、**MarkdownV2**。更多信息请参考 Telegram 的 [格式化选项](https://core.telegram.org/bots/api#formatting-options) 文档。
* **Performer**（表演者）：输入表演者的名字。
* **Reply To Message ID**（回复的消息 ID）：如果该消息是回复消息，输入它回复的那条消息的 ID。
* **Message Thread ID**（消息主题 ID）：输入论坛目标消息主题（话题）的唯一标识符；仅用于论坛超级群组。
* **Title**（标题）：输入音轨的名称。
* **Thumbnail**（缩略图）：添加所发送文件的缩略图。如果服务器端支持为该文件生成缩略图，可以忽略此字段。缩略图需满足以下规格：
  * JPEG 格式
  * 小于 200 KB
  * 宽和高都小于 320px

## Send Chat Action（发送聊天动作）

当你需要告诉用户机器人这边正在发生某事时，使用此操作。该状态通过 Bot API 的 [sendChatAction](https://core.telegram.org/bots/api#sendchataction) 方法设置，持续 5 秒或更短。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Send Chat Action**。
* **Chat ID**（聊天 ID）：输入你想把聊天动作发到的频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Action**（动作）：选择你想广播的机器人正在执行的动作。选项包括：**Find Location**（查找位置）、**Typing**（正在输入）、**Recording**（正在录音/录像）和 **Uploading**（正在上传）各类文件。

更多信息请参考 Telegram Bot API 的 [sendChatAction](https://core.telegram.org/bots/api#sendchataction) 文档。

## Send Document（发送文档）

使用此操作，通过 Bot API 的 [sendDocument](https://core.telegram.org/bots/api#senddocument) 方法，向聊天发送文档。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Send Document**。
* **Chat ID**（聊天 ID）：输入你想把文档发到的频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Binary File**（二进制文件）：如果要从节点本身发送二进制文件，请打开此开关。打开后，你必须填写 **Input Binary Field**（输入二进制字段），指明包含你要发送的文件的字段。
* **Document**（文档）：如果你没有使用 **Binary File**，在这里输入要发送的文档。可以传一个 `file_id` 来发送已存在于 Telegram 服务器上的文件（推荐），或传一个 HTTP 网址让 Telegram 从互联网上获取文件。
* **Reply Markup**（回复标记）：使用此参数设置更多界面选项。关于这些选项及其用法，请参考 [Reply Markup 参数](message-operations.md#reply-markup-parameters)。

更多信息请参考 Telegram Bot API 的 [sendDocument](https://core.telegram.org/bots/api#sendchataction) 文档。

### Send Document 的附加字段（Additional Fields）

使用 **Additional Fields**（附加字段），通过 Telegram 的 sendDocument 方法中的可选字段来进一步细化节点行为。点击 **Add Field**（添加字段）可添加以下任意一项：

* **Caption**（说明文字）：为文件输入说明文字，最多 1024 个字符。
* **Disable Notification**（禁用通知）：选择是静默发送通知（打开）还是使用标准通知（关闭）。
* **Parse Mode**（解析模式）：输入用于解析相关文本的解析器。选项包括 **HTML**（默认）、**Markdown (Legacy)**、**MarkdownV2**。更多信息请参考 [格式化选项](https://core.telegram.org/bots/api#formatting-options) 文档。
* **Reply To Message ID**（回复的消息 ID）：如果该消息是回复消息，输入它回复的那条消息的 ID。
* **Message Thread ID**（消息主题 ID）：输入论坛目标消息主题（话题）的唯一标识符；仅用于论坛超级群组。
* **Thumbnail**（缩略图）：添加所发送文件的缩略图。如果服务器端支持为该文件生成缩略图，可以忽略此字段。缩略图需满足以下规格：
  * JPEG 格式
  * 小于 200 KB
  * 宽和高都小于 320px

## Send Location（发送位置）

使用此操作，通过 Bot API 的 [sendLocation](https://core.telegram.org/bots/api#sendlocation) 方法，向聊天发送地理位置。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Send Location**。
* **Chat ID**（聊天 ID）：输入你想把位置发到的频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Latitude**（纬度）：输入位置的纬度。
* **Longitude**（经度）：输入位置的经度。
* **Reply Markup**（回复标记）：使用此参数设置更多界面选项。关于这些选项及其用法，请参考 [Reply Markup 参数](message-operations.md#reply-markup-parameters)。

更多信息请参考 Telegram Bot API 的 [sendLocation](https://core.telegram.org/bots/api#sendlocation) 文档。

### Send Location 的附加字段（Additional Fields）

使用 **Additional Fields**（附加字段），通过 Telegram 的 sendLocation 方法中的可选字段来进一步细化节点行为。点击 **Add Field**（添加字段）可添加以下任意一项：

* **Disable Notification**（禁用通知）：选择是静默发送通知（打开）还是使用标准通知（关闭）。
* **Reply To Message ID**（回复的消息 ID）：如果该消息是回复消息，输入它回复的那条消息的 ID。
* **Message Thread ID**（消息主题 ID）：输入论坛目标消息主题（话题）的唯一标识符；仅用于论坛超级群组。

## Send Media Group（发送媒体组）

使用此操作，通过 Bot API 的 [sendMediaGroup](https://core.telegram.org/bots/api#sendmediagroup) 方法，发送一组照片和/或视频。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Send Media Group**。
* **Chat ID**（聊天 ID）：输入你想把媒体组发到的频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Media**（媒体）：使用 **Add Media**（添加媒体）向媒体组中添加不同类型的媒体。对每一条媒体，选择：
  * **Type**（类型）：这条媒体的类型。从 **Photo**（照片）和 **Video**（视频）中选择。
  * **Media File**（媒体文件）：输入要发送的媒体文件。可以传一个 `file_id` 来发送已存在于 Telegram 服务器上的文件（推荐），或传一个 HTTP 网址让 Telegram 从互联网上获取文件。
  * **Additional Fields**（附加字段）：对每个媒体文件，你可以选择添加这些字段：
    * **Caption**（说明文字）：为文件输入说明文字，最多 1024 个字符。
    * **Parse Mode**（解析模式）：输入用于解析相关文本的解析器。选项包括 **HTML**（默认）、**Markdown (Legacy)**、**MarkdownV2**。更多信息请参考 [格式化选项](https://core.telegram.org/bots/api#formatting-options) 文档。

更多信息请参考 Telegram Bot API 的 [sendMediaGroup](https://core.telegram.org/bots/api#sendmediagroup) 文档。

### Send Media Group 的附加字段（Additional Fields）

使用 **Additional Fields**（附加字段），通过 Telegram 的 sendMediaGroup 方法中的可选字段来进一步细化节点行为。点击 **Add Field**（添加字段）可添加以下任意一项：

* **Disable Notification**（禁用通知）：选择是静默发送通知（打开）还是使用标准通知（关闭）。
* **Reply To Message ID**（回复的消息 ID）：如果该消息是回复消息，输入它回复的那条消息的 ID。
* **Message Thread ID**（消息主题 ID）：输入论坛目标消息主题（话题）的唯一标识符；仅用于论坛超级群组。

## Send Message（发送消息）

使用此操作，通过 Bot API 的 [sendMessage](https://core.telegram.org/bots/api#sendmessage) 方法，向聊天发送消息。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Send Message**。
* **Chat ID**（聊天 ID）：输入你想把消息发到的频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Text**（文本）：输入要发送的文本，解析实体后最多 4096 个字符。

更多信息请参考 Telegram Bot API 的 [sendMessage](https://core.telegram.org/bots/api#sendmessage) 文档。

{% hint style="warning" %}
**发送消息的限制**

Telegram 将可发送的消息数量限制为每秒 30 条。如果你预计会触及此限制，请参考[每秒发送超过 30 条消息](common-issues.md#send-more-than-30-messages-per-second)中的建议方案。
{% endhint %}

### Send Message 的附加字段（Additional Fields）

使用 **Additional Fields**（附加字段），通过 Telegram 的 sendMessage 方法中的可选字段来进一步细化节点行为。点击 **Add Field**（添加字段）可添加以下任意一项：

* **Append n8n Attribution**（追加 n8n 署名）：选择是否在消息末尾附上 `This message was sent automatically with n8n`（这条消息由 n8n 自动发送）这句话（打开为默认，关闭则不附）。
* **Disable Notification**（禁用通知）：选择是静默发送通知（打开）还是使用标准通知（关闭）。
* **Disable WebPage Preview**（禁用网页预览）：选择是启用本条消息里链接的预览（关闭）还是禁用链接预览（打开）。这会设置 `link_preview_options` 参数中的 `is_disabled`。更多信息请参考 [LinkPreviewOptions](https://core.telegram.org/bots/api#linkpreviewoptions) 文档。
* **Parse Mode**（解析模式）：输入用于解析相关文本的解析器。选项包括 **HTML**（默认）、**Markdown (Legacy)**、**MarkdownV2**。更多信息请参考 Telegram 的 [格式化选项](https://core.telegram.org/bots/api#formatting-options) 文档。
* **Reply To Message ID**（回复的消息 ID）：如果该消息是回复消息，输入它回复的那条消息的 ID。
* **Message Thread ID**（消息主题 ID）：输入论坛目标消息主题（话题）的唯一标识符；仅用于论坛超级群组。

## Send and Wait for Response（发送并等待回复）

使用此操作，通过 Bot API 的 [`sendMessage`](https://core.telegram.org/bots/api#sendmessage) 方法向聊天发送消息，并暂停工作流执行，直到用户确认操作。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Send and Wait for Response**。
* **Chat ID**（聊天 ID）：输入你想把消息发到的频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Message**（消息）：输入要发送的文本。
* **Response Type**（回复类型）：要使用的审批或回复类型：
  * **Approval**（审批）：用户可以在消息内直接批准或驳回。
  * **Free Text**（自由文本）：用户可以通过表单提交回复。
  * **Custom Form**（自定义表单）：用户可以通过自定义表单提交回复。

更多信息请参考 Telegram Bot API 的 [`sendMessage`](https://core.telegram.org/bots/api#sendmessage) 文档。

{% hint style="warning" %}
**发送消息的限制**

Telegram 将可发送的消息数量限制为每秒 30 条。如果你预计会触及此限制，请参考[每秒发送超过 30 条消息](common-issues.md#send-more-than-30-messages-per-second)中的建议方案。
{% endhint %}

### Send and Wait for Response 的附加字段（Additional Fields）

附加字段取决于你选择的 **Response Type**（回复类型）。

#### Approval（审批）

**Approval**（审批）回复类型会添加这些选项：

* **Type of Approval**（审批类型）：是只显示批准按钮，还是同时显示批准和驳回按钮。
* **Button Label**（按钮标签）：批准或驳回按钮的标签。默认分别是 `✅ Approve`（✅ 批准）和 `❌ Decline`（❌ 拒绝）。
* **Limit Wait Time**（限制等待时间）：工作流是否会在指定的时间限制后自动恢复执行。可以是一个时间间隔，也可以是一个具体的墙上时间（wall time，即实际钟表时间）。
* **Approve Within Chat**（在聊天内审批）：审批人是否直接点击消息上的按钮即可回复，而不用在浏览器中打开链接。你会在 **Advanced Interactivity**（高级交互）部分标题下找到它。更多信息请参考下方的 [在聊天内审批](#approve-within-chat)。

#### 在聊天内审批（Approve within chat）

{% hint style="info" %}
**前提条件**

要使用 **Approve Within Chat**，你的 n8n 实例必须能通过互联网以 HTTPS 方式访问，端口为 `443`、`80`、`88` 或 `8443`（Telegram 支持 webhook 的端口）。Telegram 那边无需注册任何东西，也无需配置额外密钥：n8n 会使用你已有的 [Telegram 凭证](../../credentials/telegram.md) 自动注册 webhook。
{% endhint %}

当你打开 **Approve Within Chat** 后，审批人直接点击消息上的按钮即可回复，而不用在浏览器中打开链接：

* 节点的输出会包含回复者的 Telegram 用户 ID、用户名和名字。
* 你可以限制谁有权限回复。其他人的点击不会结束执行，那个人会看到一个弹窗，提示他未被授权。
* 做出决定后，n8n 会编辑该消息：具体如何编辑，取决于下方的 **After Decision**（决定之后）选项。

Telegram 每个机器人只允许一个 webhook。如果你还对同一个机器人使用了 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md)，n8n 会在触发器和 **Approve Within Chat** 之间自动共享那个 webhook：你不需要第二个机器人。如果触发器是在此功能可用之前激活的，请重新激活它的工作流（或把它更新到最新版本），这样按钮点击才能到达 n8n。如果该机器人的 webhook 已经被 n8n 之外的什么东西占用，请为 **Approve Within Chat** 使用另一个机器人，或关闭此选项。

{% hint style="info" %}
**回退到链接按钮**

如果你的实例无法通过公网 HTTPS 访问，或你关闭了 **Approve Within Chat**，节点会回退为发送链接按钮。
{% endhint %}

{% hint style="info" %}
**私聊、群组和频道**

按钮点击在私聊、群组和频道中的行为是一样的。和任何其它 **Message（消息）**操作一样，你的机器人必须是频道的成员，才能在那里发布和编辑消息。更多信息请参考 [常见问题 | 把机器人添加进 Telegram 频道](common-issues.md#add-a-bot-to-a-telegram-channel)。
{% endhint %}

打开 **Approve Within Chat** 后，会在其下方、同一个 **Advanced Interactivity**（高级交互）部分显示以下字段：

* **Restrict Who Can Approve**（限制谁能批准）：允许批准或驳回的 Telegram 用户 ID。多个 ID 用逗号分隔。如果留空，任何能看到这条消息的人都可以回复。
* **Unauthorized Reply**（未授权回复）：当有人点击按钮但不在审批人名单上时，以 Telegram 弹窗形式显示的消息。
* **After Decision**（决定之后）：有人回复后消息会怎样：
    * **Show Outcome and Remove Buttons**（显示结果并移除按钮）：移除按钮，并添加一行说明是谁批准或驳回了。
    * **Remove Buttons Only**（仅移除按钮）：移除按钮，但不添加结果行。
    * **Keep Message Unchanged**（保持消息不变）：消息保持原样。

#### Free Text（自由文本）

使用 Free Text 回复类型时，有以下选项可用：

* **Message Button Label**（消息按钮标签）：消息按钮上使用的标签。默认是 `Respond`（回复）。
* **Response Form Title**（回复表单标题）：用户提交回复的（弹窗）表单标题。
* **Response Form Description**（回复表单描述）：用户提交回复的（弹窗）表单描述。
* **Response Form Button Label**（回复表单按钮标签）：表单上提交回复的按钮标签。默认是 `Submit`（提交）。
* **Limit Wait Time**（限制等待时间）：工作流是否会在指定的时间限制后自动恢复执行。可以是一个时间间隔，也可以是一个具体的墙上时间（wall time）。

#### Custom Form（自定义表单）

使用 Custom Form 回复类型时，你可以用自己想要的字段和选项来构建一个表单。

每个表单元素都可以按照 [n8n Form 触发器（Form trigger）的表单元素](../../core-nodes/n8n-nodes-base.formtrigger.md#form-elements) 中列出的设置进行自定义。要添加更多字段，点击 **Add Form Element**（添加表单元素）按钮。

还有以下选项可用：

* **Message Button Label**（消息按钮标签）：消息按钮上使用的标签。默认是 `Respond`（回复）。
* **Response Form Title**（回复表单标题）：用户提交回复的（弹窗）表单标题。
* **Response Form Description**（回复表单描述）：用户提交回复的（弹窗）表单描述。
* **Response Form Button Label**（回复表单按钮标签）：表单上提交回复的按钮标签。默认是 `Submit`（提交）。
* **Limit Wait Time**（限制等待时间）：工作流是否会在指定的时间限制后自动恢复执行。可以是一个时间间隔，也可以是一个具体的墙上时间（wall time）。

## Send Photo（发送照片）

使用此操作，通过 Bot API 的 [sendPhoto](https://core.telegram.org/bots/api#sendphoto) 方法，向聊天发送照片。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Send Photo**。
* **Chat ID**（聊天 ID）：输入你想把照片发到的频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Binary File**（二进制文件）：如果要从节点本身发送二进制文件，请打开此开关。打开后，你必须填写 **Input Binary Field**（输入二进制字段），指明包含你要发送的文件的字段。
* **Photo**（照片）：如果你没有使用 **Binary File**，在这里输入要发送的照片。可以传一个 `file_id` 来发送已存在于 Telegram 服务器上的文件（推荐），或传一个 HTTP 网址让 Telegram 从互联网上获取文件。
* **Reply Markup**（回复标记）：使用此参数设置更多界面选项。关于这些选项及其用法，请参考 [Reply Markup 参数](message-operations.md#reply-markup-parameters)。

更多信息请参考 Telegram Bot API 的 [sendPhoto](https://core.telegram.org/bots/api#sendphoto) 文档。

### Send Photo 的附加字段（Additional Fields）

使用 **Additional Fields**（附加字段），通过 Telegram 的 sendPhoto 方法中的可选字段来进一步细化节点行为。点击 **Add Field**（添加字段）可添加以下任意一项：

* **Caption**（说明文字）：为文件输入说明文字，最多 1024 个字符。
* **Disable Notification**（禁用通知）：选择是静默发送通知（打开）还是使用标准通知（关闭）。
* **Parse Mode**（解析模式）：输入用于解析相关文本的解析器。选项包括 **HTML**（默认）、**Markdown (Legacy)**、**MarkdownV2**。更多信息请参考 Telegram 的 [格式化选项](https://core.telegram.org/bots/api#formatting-options) 文档。
* **Reply To Message ID**（回复的消息 ID）：如果该消息是回复消息，输入它回复的那条消息的 ID。
* **Message Thread ID**（消息主题 ID）：输入论坛目标消息主题（话题）的唯一标识符；仅用于论坛超级群组。

## Send Sticker（发送贴纸）

使用此方法，通过 Bot API 的 [sendSticker](https://core.telegram.org/bots/api#sendsticker) 方法，发送静态 .WEBP、动态 .TGS 或视频 .WEBM 贴纸。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Send Sticker**。
* **Chat ID**（聊天 ID）：输入你想把贴纸发到的频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Binary File**（二进制文件）：如果要从节点本身发送二进制文件，请打开此开关。打开后，你必须填写 **Input Binary Field**（输入二进制字段），指明包含你要发送的文件的字段。
* **Sticker**（贴纸）：如果你没有使用 **Binary File**，在这里输入要发送的贴纸。可以传一个 `file_id` 来发送已存在于 Telegram 服务器上的文件（推荐），或传一个 HTTP 网址让 Telegram 从互联网上获取文件。
* **Reply Markup**（回复标记）：使用此参数设置更多界面选项。关于这些选项及其用法，请参考 [Reply Markup 参数](message-operations.md#reply-markup-parameters)。

更多信息请参考 Telegram Bot API 的 [sendSticker](https://core.telegram.org/bots/api#sendsticker) 文档。

### Send Sticker 的附加字段（Additional Fields）

使用 **Additional Fields**（附加字段），通过 Telegram 的 sendSticker 方法中的可选字段来进一步细化节点行为。点击 **Add Field**（添加字段）可添加以下任意一项：

* **Disable Notification**（禁用通知）：选择是静默发送通知（打开）还是使用标准通知（关闭）。
* **Reply To Message ID**（回复的消息 ID）：如果该消息是回复消息，输入它回复的那条消息的 ID。
* **Message Thread ID**（消息主题 ID）：输入论坛目标消息主题（话题）的唯一标识符；仅用于论坛超级群组。

## Send Video（发送视频）

使用此操作，通过 Bot API 的 [sendVideo](https://core.telegram.org/bots/api#sendvideo) 方法，向聊天发送视频。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Send Video**。
* **Chat ID**（聊天 ID）：输入你想把视频发到的频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Binary File**（二进制文件）：如果要从节点本身发送二进制文件，请打开此开关。打开后，你必须填写 **Input Binary Field**（输入二进制字段），指明包含你要发送的文件的字段。
* **Video**（视频）：如果你没有使用 **Binary File**，在这里输入要发送的视频。可以传一个 `file_id` 来发送已存在于 Telegram 服务器上的文件（推荐），或传一个 HTTP 网址让 Telegram 从互联网上获取文件。
* **Reply Markup**（回复标记）：使用此参数设置更多界面选项。关于这些选项及其用法，请参考 [Reply Markup 参数](message-operations.md#reply-markup-parameters)。

更多信息请参考 Telegram Bot API 的 [sendVideo](https://core.telegram.org/bots/api#sendvideo) 文档。

### Send Video 的附加字段（Additional Fields）

使用 **Additional Fields**（附加字段），通过 Telegram 的 sendVideo 方法中的可选字段来进一步细化节点行为。点击 **Add Field**（添加字段）可添加以下任意一项：

* **Caption**（说明文字）：为视频输入说明文字，最多 1024 个字符。
* **Disable Notification**（禁用通知）：选择是静默发送通知（打开）还是使用标准通知（关闭）。
* **Duration**（时长）：输入视频的时长（秒）。
* **Height**（高度）：输入视频的高度。
* **Parse Mode**（解析模式）：输入用于解析相关文本的解析器。选项包括 **HTML**（默认）、**Markdown (Legacy)**、**MarkdownV2**。更多信息请参考 Telegram 的 [格式化选项](https://core.telegram.org/bots/api#formatting-options) 文档。
* **Reply To Message ID**（回复的消息 ID）：如果该消息是回复消息，输入它回复的那条消息的 ID。
* **Message Thread ID**（消息主题 ID）：输入论坛目标消息主题（话题）的唯一标识符；仅用于论坛超级群组。
* **Thumbnail**（缩略图）：添加所发送文件的缩略图。如果服务器端支持为该文件生成缩略图，可以忽略此字段。缩略图需满足以下规格：
  * JPEG 格式
  * 小于 200 KB
  * 宽和高都小于 320px
* **Width**（宽度）：输入视频的宽度。

## Unpin Chat Message（取消置顶聊天消息）

使用此操作，通过 Bot API 的 [unpinChatMessage](https://core.telegram.org/bots/api#unpinchatmessage) 方法，取消置顶聊天中的一条消息。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Pin Chat Message**。
* **Chat ID**（聊天 ID）：输入你想从中取消置顶消息的频道的 Chat ID 或用户名，格式为 `@channelusername`。
  * 想把 Chat ID 直接喂给本节点，请使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点。更多信息请参考 [常见问题 | 获取 Chat ID](common-issues.md#get-the-chat-id)。
* **Message ID**（消息 ID）：输入你想取消置顶的消息的唯一标识符。

更多信息请参考 Telegram Bot API 的 [unpinChatMessage](https://core.telegram.org/bots/api#unpinchatmessage) 文档。

## Reply Markup 参数（回复标记参数）

对于大多数 **Message（消息）** 的 **Send（发送）** 操作（如 Send Animation、Send Audio），使用 **Reply Markup**（回复标记）参数来设置更多界面选项：

* **Force Reply**（强制回复）：Telegram 客户端会表现得像用户选中了机器人的消息并点了 **Reply**（回复），自动向用户显示回复界面。关于此选项的更多指导，请参考 [Force Reply 参数](message-operations.md#force-reply-parameters)。
* **Inline Keyboard**（内联键盘）：在消息旁边显示一个内联键盘。关于此选项的更多指导，请参考 [Inline Keyboard 参数](message-operations.md#inline-keyboard-parameters)。
* **Reply Keyboard**（回复键盘）：显示一个带回复选项的自定义键盘。关于此选项的更多指导，请参考 [Reply Keyboard 参数](message-operations.md#reply-keyboard-parameters)。
* **Reply Keyboard Remove**（移除回复键盘）：Telegram 客户端会移除当前的自定义键盘，显示默认的字母键盘。关于此选项的更多指导，请参考 [Reply Keyboard Remove 参数](message-operations.md#reply-keyboard-remove-parameters)。

{% hint style="info" %}
**Telegram 商业账号**

Telegram 在频道中以及代表 Telegram 商业账号发送消息时，限制以下选项：

* Force Reply（强制回复）
* Reply Keyboard（回复键盘）
* Reply Keyboard Remove（移除回复键盘）
{% endhint %}

### Force Reply 参数（强制回复参数）

如果你想在不牺牲隐私模式的前提下创建友好的分步界面，**Force Reply**（强制回复）会很有用。

如果你选择 **Reply Markup > Force Reply**，可从以下 **Force Reply** 参数中选择：

* **Force Reply**（强制回复）：打开后向用户显示回复界面，如上所述。
* **Selective**（选择性）：如果你只想强制以下这些用户回复，请打开此开关：
  * 在消息文本中被 `@mentioned`（@提及）的用户。
  * 原始消息的发送者——如果这条 Send Animation 消息是对某条消息的回复。

更多信息请参考 [ForceReply](https://core.telegram.org/bots/api#forcereply)。

### Inline Keyboard 参数（内联键盘参数）

如果你选择 **Reply Markup > Inline Keyboard**，使用 **Add Button**（添加按钮）选项定义要显示的内联键盘按钮。要给键盘添加更多行，使用 **Add Keyboard Row**（添加键盘行）。

更多信息请参考 [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup) 和 [InlineKeyboardButtons](https://core.telegram.org/bots/api#inlinekeyboardbutton)。

### Reply Keyboard 参数（回复键盘参数）

如果你选择 **Reply Markup > Reply Keyboard**，使用 **Reply Keyboard**（回复键盘）部分定义 Reply Keyboard 中的按钮和行。

使用 **Reply Keyboard Options**（回复键盘选项）进一步细化键盘行为：

* **Resize Keyboard**（调整键盘大小）：选择是请求 Telegram 客户端垂直调整键盘大小以获得最佳适配（打开），还是使用与应用标准键盘相同的高度（关闭）。
* **One Time Keyboard**（一次性键盘）：选择是让 Telegram 客户端在用户使用一次键盘后立刻隐藏它（打开），还是一直显示（关闭）。
* **Selective**（选择性）：如果你只想向以下这些用户显示键盘，请打开此开关：
  * 在消息文本中被 `@mentioned`（@提及）的用户。
  * 原始消息的发送者——如果这条 Send Animation 消息是对某条消息的回复。

更多信息请参考 [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)。

### Reply Keyboard Remove 参数（移除回复键盘参数）

如果你选择 **Reply Markup > Reply Keyboard Remove**，可从以下 **Reply Keyboard Remove** 参数中选择：

* **Remove Keyboard**（移除键盘）：选择是请求 Telegram 客户端移除自定义键盘（打开）还是保留它（关闭）。
* **Selective**（选择性）：如果你只想为以下这些用户移除键盘，请打开此开关：
  * 在消息文本中被 `@mentioned`（@提及）的用户。
  * 原始消息的发送者——如果这条 Send Animation 消息是对某条消息的回复。

更多信息请参考 [ReplyKeyboardRemove](https://core.telegram.org/bots/api#replykeyboardremove)。
