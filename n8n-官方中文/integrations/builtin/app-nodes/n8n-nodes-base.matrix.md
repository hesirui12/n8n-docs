---
title: Matrix 节点文档
description: >-
  学习如何在 n8n 中使用 Matrix 节点。按照技术文档将 Matrix
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Matrix 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.matrix.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.matrix'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.matrix'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Matrix 是一个开源的、去中心化的即时通讯协议（很多公司、开源社区用它自建聊天系统，类似 Slack 但可以自己部署）。这个节点让你在 n8n 里操作 Matrix 房间（Room）：发消息、发媒体文件、拉人进房间、踢人、看房间成员和聊天记录等。适合做「系统告警自动发到聊天群」这类自动化。
{% endhint %}

# Matrix 节点

使用 Matrix 节点来自动化你在 Matrix 中的工作，并把它与其它应用集成。n8n 内置支持 Matrix 的大量功能，包括获取当前用户的账号信息、向房间发送媒体和消息，以及获取房间成员和消息。

在本页你可以看到 Matrix 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Matrix 凭证](../credentials/matrix.md)。
{% endhint %}

## 操作

* Account（账号）
    * Get current user's account information（获取当前用户的账号信息）
* Event（事件）
    * Get single event by ID（按 ID 获取单个事件）
* Media（媒体）
    * Send media to a chat room（向聊天房间发送媒体）
* Message（消息）
    * Send a message to a room（向房间发送消息）
    * Gets all messages from a room（获取房间里的全部消息）
* Room（房间）
    * New chat room with defined settings（按指定设置创建新聊天房间）
    * Invite a user to a room（邀请用户进入房间）
    * Join a new room（加入新房间）
    * Kick a user from a room（把用户踢出房间）
    * Leave a room（离开房间）
* Room Member（房间成员）
    * Get all members（获取全部成员）

## 模板与示例

[浏览 Matrix 节点的官方集成模板](https://n8n.io/integrations/matrix)，或[搜索全部模板](https://n8n.io/workflows/)。
