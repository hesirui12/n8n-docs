---
title: Keap 节点文档
description: >-
  学习如何在 n8n 中使用 Keap 节点。按照技术文档将
  Keap 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Keap 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.keap.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.keap'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.keap'
---

{% hint style="info" %}
**大白话**：Keap（原名 Infusionsoft）是老牌的「小企业 CRM + 邮件营销 + 电商」一体化平台。这个节点能让你在 n8n 里管理：公司（Company）、联系人（Contact）、联系人备注（Contact Note）、联系人标签（Contact Tag）、电商订单（Ecommerce Order）、电商商品（Ecommerce Product）、邮件（Email）和文件（File）。适合做「新客户建档 → 打标签 → 进销售流程」这类营销自动化。
{% endhint %}

# Keap 节点

使用 Keap 节点来自动化你在 Keap 中的工作，并把它与其它应用集成。n8n 内置支持 Keap 的大量功能，包括创建、更新、删除、获取公司（Company）、商品（Product）、电商订单（Ecommerce Order）、邮件（Email）和文件（File）。

在本页你可以看到 Keap 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Keap 凭证](../credentials/keap.md)。
{% endhint %}

## 操作

* Company（公司）
    * Create a company（创建公司）
    * Retrieve all companies（获取全部公司）
* Contact（联系人）
    * Create/update a contact（创建/更新联系人）
    * Delete an contact（删除联系人）
    * Retrieve an contact（获取单个联系人）
    * Retrieve all contacts（获取全部联系人）
* Contact Note（联系人备注）
    * Create a note（创建备注）
    * Delete a note（删除备注）
    * Get a notes（获取单条备注）
    * Retrieve all notes（获取全部备注）
    * Update a note（更新备注）
* Contact Tag（联系人标签）
    * Add a list of tags to a contact（给联系人添加一组标签）
    * Delete a contact's tag（删除联系人的某个标签）
    * Retrieve all contact's tags（获取联系人的全部标签）
* Ecommerce Order（电商订单）
    * Create an ecommerce order（创建电商订单）
    * Get an ecommerce order（获取单个电商订单）
    * Delete an ecommerce order（删除电商订单）
    * Retrieve all ecommerce orders（获取全部电商订单）
* Ecommerce Product（电商商品）
    * Create an ecommerce product（创建电商商品）
    * Delete an ecommerce product（删除电商商品）
    * Get an ecommerce product（获取单个电商商品）
    * Retrieve all ecommerce product（获取全部电商商品）
* Email（邮件）
    * Create a record of an email sent to a contact（记录一封发给联系人的邮件）
    * Retrieve all sent emails（获取全部已发送邮件）
    * Send Email（发送邮件）
* File（文件）
    * Delete a file（删除文件）
    * Retrieve all files（获取全部文件）
    * Upload a file（上传文件）

## 模板与示例

[浏览 Keap 节点的官方集成模板](https://n8n.io/integrations/keap)，或[搜索全部模板](https://n8n.io/workflows/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
