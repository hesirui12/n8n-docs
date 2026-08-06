---
title: SendGrid 节点文档
description: >-
  学习如何在 n8n 中使用 SendGrid 节点。按照技术文档将 SendGrid
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: SendGrid 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.sendgrid.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.sendgrid'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.sendgrid'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：SendGrid 是一个「邮件发送服务」——帮你批量发邮件（营销邮件、通知邮件、交易邮件等），还带联系人管理功能。这个节点可以帮你：管理联系人（增删改查）、管理联系人列表（增删改查）、发送邮件。适合做自动发邮件、订阅用户管理。
{% endhint %}

# SendGrid 节点

使用 SendGrid 节点来自动化你在 SendGrid 中的工作，并把它与其它应用集成。n8n 内置支持 SendGrid 的大量功能，包括创建、更新、删除、获取联系人和列表，以及发送邮件。

在本页你可以看到 SendGrid 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [SendGrid 凭证](../credentials/sendgrid.md)。
{% endhint %}

（官方此处嵌入了通用资源组件，此处从略。）

## 操作

* Contact（联系人）
    * Create/update a contact（创建或更新联系人）
    * Delete a contact（删除联系人）
    * Get a contact by ID（按 ID 获取联系人）
    * Get all contacts（获取全部联系人）
* List（列表）
    * Create a list（创建列表）
    * Delete a list（删除列表）
    * Get a list（获取列表）
    * Get all lists（获取全部列表）
    * Update a list（更新列表）
* Mail（邮件）
    * Send an email.（发送一封邮件。）

## 模板与示例

[浏览 SendGrid 节点的官方集成模板](https://n8n.io/integrations/sendgrid)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
