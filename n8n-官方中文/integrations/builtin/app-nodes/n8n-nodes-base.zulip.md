---
title: Zulip 节点文档
description: >-
  学习如何在 n8n 中使用 Zulip 节点。按照技术文档将
  Zulip 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Zulip 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.zulip.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.zulip'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.zulip'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Zulip 是一款开源的企业聊天工具（类似 Slack/钉钉，但按「话题 stream」组织对话）。这个节点让你在 n8n 里直接操作 Zulip：发消息（私聊或发到某个频道 stream）、管理用户（创建/删除/获取）、管理频道（创建/删除/获取订阅列表），还能上传文件。典型场景：工作流出错了自动往 Zulip 频道里发提醒，或者把别的系统的消息同步进来。
{% endhint %}

# Zulip 节点

使用 Zulip 节点来自动化你在 Zulip 中的工作，并把它与其它应用集成。n8n 内置支持 Zulip 的多种功能，包括创建、删除和获取用户与频道（streams），以及发送消息。

在本页你可以看到 Zulip 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Zulip 凭证](../credentials/zulip.md)。
{% endhint %}

## 操作

* Message（消息）
    * Delete a message（删除一条消息）
    * Get a message（获取一条消息）
    * Send a private message（发送私信）
    * Send a message to stream（往频道发送消息）
    * Update a message（更新一条消息）
    * Upload a file（上传文件）
* Stream（频道）
    * Create a stream（创建频道）
    * Delete a stream（删除频道）
    * Get all streams（获取全部频道）
    * Get subscribed streams（获取已订阅的频道）
    * Update a stream（更新频道）
* User（用户）
    * Create a user（创建用户）
    * Deactivate a user（停用用户）
    * Get a user（获取用户）
    * Get all users（获取全部用户）
    * Update a user（更新用户）

## 模板与示例

[浏览 Zulip 节点的官方集成模板](https://n8n.io/integrations/zulip)，或[搜索全部模板](https://n8n.io/workflows/)。
