---
title: Odoo 节点文档
description: >-
  学习如何在 n8n 中使用 Odoo 节点。按照技术文档将 Odoo
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Odoo 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.odoo.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.odoo'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.odoo'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Odoo 是一套开源的「企业管理系统全家桶」，包括 CRM（客户管理）、销售、库存、财务等模块，很多中小企业用它当 ERP。这个节点让你在 n8n 里直接操作 Odoo 的数据：联系人（Contact）、自定义资源（Custom Resource）、笔记（Note）和商机（Opportunity）的新增、修改、删除、查询——相当于给你的 Odoo 配了个自动化管家。
{% endhint %}

# Odoo 节点

使用 Odoo 节点来自动化你在 Odoo 中的工作，并把它与其它应用集成。n8n 内置支持 Odoo 的大量功能，包括创建、更新、删除和获取合同（contract）、资源（resource）和商机（opportunity）。

在本页你可以看到 Odoo 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Odoo 凭证](../credentials/odoo.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作

* Contact（联系人）
    * Create a new contact（创建新联系人）
    * Delete a contact（删除联系人）
    * Get a contact（获取单个联系人）
    * Get all contacts（获取全部联系人）
    * Update a contact（更新联系人）
* Custom Resource（自定义资源）
    * Create a new item（创建新条目）
    * Delete an item（删除条目）
    * Get an item（获取单个条目）
    * Get all items（获取全部条目）
    * Update an item（更新条目）
* Note（笔记）
    * Create a new note（创建新笔记）
    * Delete a note（删除笔记）
    * Get a note（获取单个笔记）
    * Get all notes（获取全部笔记）
    * Update a note（更新笔记）
* Opportunity（商机）
    * Create a new opportunity（创建新商机）
    * Delete an opportunity（删除商机）
    * Get an opportunity（获取单个商机）
    * Get all opportunities（获取全部商机）
    * Update an opportunity（更新商机）

## 模板与示例

[浏览 Odoo 节点的官方集成模板](https://n8n.io/integrations/odoo)，或[搜索全部模板](https://n8n.io/workflows/)。
