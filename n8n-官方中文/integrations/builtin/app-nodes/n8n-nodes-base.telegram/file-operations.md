---
title: Telegram 节点 File 操作文档
description: >-
  n8n（工作流自动化平台）中 Telegram 节点的 File（文件）操作文档。
  包含配置全部 File 操作的细节。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Telegram 节点 File 操作文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.telegram/file-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/file-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/file-operations
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：这个操作用来从 Telegram 下载文件。你只要提供文件的 File ID（文件编号），就可以把文件取回来，还能选择是否让节点自动下载到本地。典型场景：用户在群里发了一张图或一个文档，你用 Telegram Trigger 收到消息后，用 File 操作把附件下载下来做后续处理。
{% endhint %}

# Telegram 节点 File（文件）操作

使用此操作从 Telegram 获取文件。关于 Telegram 节点本身的更多信息，请参考 [Telegram](README.md)。

（官方此处嵌入了「如何开始使用应用节点」的通用说明组件，此处从略。）

## Get File（获取文件）

使用此操作，通过 Bot API 的 [getFile](https://core.telegram.org/bots/api#getfile) 方法，从 Telegram 获取文件。

填写以下参数：

* **Credential to connect with**（用于连接的凭证）：创建或选择已有的 [Telegram 凭证](../../credentials/telegram.md)。
* **Resource**（资源）：选择 **File**。
* **Operation**（操作）：选择 **Get**。
* **File ID**（文件 ID）：输入你想获取的文件的 ID。
* **Download**（下载）：选择是否让节点下载该文件（打开=下载，关闭=不下载）。

更多信息请参考 Telegram Bot API 的 [getFile](https://core.telegram.org/bots/api#getfile) 文档。
