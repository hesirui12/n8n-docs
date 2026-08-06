---
title: Gmail 节点文档
contentType:
  - integration
  - reference
priority: high
nodeTitle: n8n-nodes-base.gmail
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.gmail/index.md
originalUrl: https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail
url: https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail
description: >-
  了解如何在 n8n 中使用 Gmail 节点。按照技术文档把 Gmail 节点集成到你的工作流中。
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

# Gmail

> **大白话**：Gmail 就是谷歌邮箱。这个节点让你在 n8n 工作流里直接操作邮箱：管理草稿、邮件、标签（Label）、会话（Thread，即同一主题的往来邮件）。比如自动发邮件、把邮件打标签、回复邮件都能做。想监控新邮件，可以配合 Gmail 触发器节点使用。

用 Gmail 节点在 Gmail 里自动化干活，并把 Gmail 和其他应用串起来。n8n 内置支持 Gmail 的大量功能，包括创建、更新、删除和获取草稿、邮件、标签、会话。

本页面列出了 Gmail 节点支持的所有操作，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何配置认证，请参考 [Google 凭据](../../credentials/google/README.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 支持的操作

* **Draft（草稿）**
  * [**Create（创建）**](draft-operations.md#create-a-draft) 草稿
  * [**Delete（删除）**](draft-operations.md#delete-a-draft) 草稿
  * [**Get（获取）**](draft-operations.md#get-a-draft) 草稿
  * [**Get Many（获取多个）**](draft-operations.md#get-many-drafts) 草稿
* **Label（标签）**
  * [**Create（创建）**](label-operations.md#create-a-label) 标签
  * [**Delete（删除）**](label-operations.md#delete-a-label) 标签
  * [**Get（获取）**](label-operations.md#get-a-label) 标签
  * [**Get Many（获取多个）**](label-operations.md#get-many-labels) 标签
* **Message（邮件）**
  * [**Add Label（添加标签）**](message-operations.md#add-label-to-a-message) 给邮件
  * [**Delete（删除）**](message-operations.md#delete-a-message) 邮件
  * [**Get（获取）**](message-operations.md#get-a-message) 邮件
  * [**Get Many（获取多个）**](message-operations.md#get-many-messages) 邮件
  * [**Mark as Read（标记为已读）**](message-operations.md#mark-as-read)
  * [**Mark as Unread（标记为未读）**](message-operations.md#mark-as-unread)
  * [**Remove Label（移除标签）**](message-operations.md#remove-label-from-a-message) 从邮件上
  * [**Reply（回复）**](message-operations.md#reply-to-a-message) 邮件
  * [**Send（发送）**](message-operations.md#send-a-message) 邮件
* **Thread（会话）**
  * [**Add Label（添加标签）**](thread-operations.md#add-label-to-a-thread) 给会话
  * [**Delete（删除）**](thread-operations.md#delete-a-thread) 会话
  * [**Get（获取）**](thread-operations.md#get-a-thread) 会话
  * [**Get Many（获取多个）**](thread-operations.md#get-many-threads) 会话
  * [**Remove Label（移除标签）**](thread-operations.md#remove-label-from-a-thread) 从会话上
  * [**Reply（回复）**](thread-operations.md#reply-to-a-message) 邮件
  * [**Trash（移入回收站）**](thread-operations.md#trash-a-thread) 会话
  * [**Untrash（从回收站恢复）**](thread-operations.md#untrash-a-thread) 会话

## 模板和示例

[浏览 n8n-nodes-base.gmail 集成模板](https://n8n.io/integrations/gmail)，或[搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于本节点对接的 API 的详细信息，请参考 Google 的 [Gmail API 文档](https://developers.google.com/gmail/api)。

n8n 还为 Gmail 提供了触发器节点（Trigger node）。你可以[在这里](../../trigger-nodes/n8n-nodes-base.gmailtrigger/README.md)查看触发器节点的文档。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}

## 常见问题

关于常见错误或问题以及建议的解决方法，请参考[常见问题](common-issues.md)。
