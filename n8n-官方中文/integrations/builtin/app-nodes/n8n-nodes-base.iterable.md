---
title: Iterable 节点文档
description: >-
  学习如何在 n8n 中使用 Iterable 节点。按照技术文档将
  Iterable 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Iterable 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.iterable.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.iterable'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.iterable'
---

{% hint style="info" %}
**大白话**：Iterable 是面向增长团队的「用户触达」平台（邮件、短信、推送消息的发送和编排）。这个节点能让你在 n8n 里：创建/更新/删除/获取用户（User）、记录用户的行为事件（Event，比如「点击了某个按钮」）、把用户加入或移出用户列表（User List）。适合做「用户行为触发 → 自动发邮件/短信」这类营销自动化流程。
{% endhint %}

# Iterable 节点

使用 Iterable 节点来自动化你在 Iterable 中的工作，并把它与其它应用集成。n8n 内置支持 Iterable 的大量功能，包括创建用户、记录用户执行的行为，以及把用户加入列表或从列表中移除。

在本页你可以看到 Iterable 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Iterable 凭证](../credentials/iterable.md)。
{% endhint %}

## 操作

* Event（事件）
    * Record the actions a user perform（记录用户执行的行为）
* User（用户）
    * Create/Update a user（创建/更新用户）
    * Delete a user（删除用户）
    * Get a user（获取单个用户）
* User List（用户列表）
    * Add user to list（把用户加入列表）
    * Remove a user from a list（把用户移出列表）

## 模板与示例

[浏览 Iterable 节点的官方集成模板](https://n8n.io/integrations/iterable)，或[搜索全部模板](https://n8n.io/workflows/)。
