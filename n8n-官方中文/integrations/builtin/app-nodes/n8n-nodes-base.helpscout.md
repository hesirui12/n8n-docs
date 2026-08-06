---
title: Help Scout 节点文档
description: 学习如何在 n8n 中使用 Help Scout 节点。按照技术文档将 Help Scout 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Help Scout 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.helpscout.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.helpscout'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.helpscout'
layout:
  description:
    visible: false
---

# Help Scout 节点

> 💡 **大白话**：Help Scout 是一款客服邮箱/工单软件，客服团队用它处理客户来信。用这个节点，n8n 可以自动管理会话（Conversation，相当于一封往来邮件）、客户（Customer）、邮箱（Mailbox）和会话线程（Thread）——比如收到新客户邮件就自动打标签或回复。

使用 Help Scout 节点自动化 Help Scout 中的工作，并将 Help Scout 与其他应用集成。n8n 内置支持大量 Help Scout 功能，包括创建、更新、删除和获取会话和客户。

本页列出了 Help Scout 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何设置认证，请参考 [Help Scout 凭据](../credentials/helpscout.md)。
{% endhint %}

## 支持的操作（Operations）

* Conversation（会话）
    * Create a new conversation（创建新会话）
    * Delete a conversation（删除会话）
    * Get a conversation（获取会话）
    * Get all conversations（获取所有会话）
* Customer（客户）
    * Create a new customer（创建新客户）
    * Get a customer（获取客户）
    * Get all customers（获取所有客户）
    * Get customer property definitions（获取客户属性定义）
    * Update a customer（更新客户）
* Mailbox（邮箱）
    * Get data of a mailbox（获取邮箱数据）
    * Get all mailboxes（获取所有邮箱）
* Thread（会话线程）
    * Create a new chat thread（创建新的聊天线程）
    * Get all chat threads（获取所有聊天线程）

## 模板和示例（Templates and examples）

[浏览 Help Scout 节点文档集成模板](https://n8n.io/integrations/helpscout) 或 [搜索所有模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
