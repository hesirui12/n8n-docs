---
title: Google Chat 节点文档
description: >-
  了解如何在 n8n 中使用 Google Chat 节点。按照技术文档把 Google Chat 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Google Chat 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.googlechat.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlechat'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlechat'
layout:
  description:
    visible: false
---
# Google Chat 节点

> **大白话**：Google Chat 是谷歌的团队聊天工具。这个节点让你在 n8n 工作流里自动收发消息、管理聊天空间（Space）和成员，比如系统出错时自动往群里发通知，或读取群里的消息做处理。

使用 Google Chat 节点可以在 Google Chat 中实现工作自动化，并把 Google Chat 与其他应用集成。n8n 内置支持多种 Google Chat 功能，包括获取成员和空间信息，以及创建和删除消息。

本页面列出了 Google Chat 节点支持的操作，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Google 凭证](../credentials/google/README.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/sYWM3IB0LEL4RkPx8ndF/" %}

## 操作

* Member（成员）
    * Get a membership（获取一个成员关系）
    * Get all memberships in a space（获取空间里的全部成员）
* Message（消息）
    * Create a message（创建消息）
    * Delete a message（删除消息）
    * Get a message（获取消息）
	* Send and Wait for Response（发送并等待回复）
    * Update a message（更新消息）
* Space（空间）
    * Get a space（获取一个空间）
    * Get all spaces the caller is a member of（获取当前用户加入的全部空间）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/c0Jp2CWNEFSR2IfIVdlL/" %}

## 模板和示例

[浏览 Google Chat 节点文档集成模板](https://n8n.io/integrations/google-chat) 或 [搜索全部模板](https://n8n.io/workflows/)
