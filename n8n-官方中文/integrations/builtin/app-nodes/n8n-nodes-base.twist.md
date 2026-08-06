---
title: Twist 节点文档
description: >-
  学习如何在 n8n 中使用 Twist 节点。按照技术文档将
  Twist 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Twist 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.twist.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.twist'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.twist'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Twist 是 Doist 公司出的团队沟通软件，按「频道 Channel → 主题 Thread」组织讨论（Thread 是长期讨论串，适合异步协作）。这个节点让你在 n8n 里管理频道、评论、私信会话和讨论串。页尾还教你怎么查用户的 User ID。
{% endhint %}

# Twist 节点

使用 Twist 节点来自动化你在 Twist 中的工作，并把它与其它应用集成。n8n 内置支持 Twist 的大量功能，包括在频道中创建会话（Conversation），以及在讨论串（Thread）上创建和删除评论。

在本页你可以看到 Twist 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Twist 凭证](../credentials/twist.md)。
{% endhint %}

## 操作

* Channel（频道）
    * Archive a channel（归档频道）
    * Initiates a public or private channel-based conversation（发起一个公开或私密的基于频道的会话）
    * Delete a channel（删除频道）
    * Get information about a channel（获取频道信息）
    * Get all channels（获取全部频道）
    * Unarchive a channel（取消归档频道）
    * Update a channel（更新频道）
* Comment（评论）
    * Create a new comment to a thread（在讨论串上创建新评论）
    * Delete a comment（删除评论）
    * Get information about a comment（获取评论信息）
    * Get all comments（获取全部评论）
    * Update a comment（更新评论）
* Message Conversation（私信会话消息）
    * Create a message in a conversation（在会话中创建消息）
    * Delete a message in a conversation（删除会话中的消息）
    * Get a message in a conversation（获取会话中的消息）
    * Get all messages in a conversation（获取会话中的全部消息）
    * Update a message in a conversation（更新会话中的消息）
* Thread（讨论串）
    * Create a new thread in a channel（在频道中创建新讨论串）
    * Delete a thread（删除讨论串）
    * Get information about a thread（获取讨论串信息）
    * Get all threads（获取全部讨论串）
    * Update a thread（更新讨论串）

## 模板与示例

[浏览 Twist 节点的官方集成模板](https://n8n.io/integrations/twist)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）

## 获取用户 ID（User ID）

获取某个用户的 User ID 的方法：

1. 打开 **Team**（团队）选项卡。
2. 点击某位用户的头像。
3. 复制你 Twist 网址中 `/u/` 后面的一串字符。这串字符就是 User ID。例如，如果网址是 `https://twist.com/a/4qw45/people/u/475370`，那么 User ID 就是 `475370`。
