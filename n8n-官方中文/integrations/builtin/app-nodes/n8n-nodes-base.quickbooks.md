---
title: QuickBooks Online 节点文档
description: >-
  学习如何在 n8n 中使用 QuickBooks Online 节点。按照技术文档将 QuickBooks Online
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: QuickBooks Online 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.quickbooks.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.quickbooks'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.quickbooks'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：QuickBooks Online 是 Intuit 家的云端会计/记账软件，用来管账单（bill）、客户、员工、报价单（estimate）和发票（invoice）等。用这个节点，你可以在 n8n 里自动创建、更新、删除、查询这些财务单据，比如「订单付款成功后自动在 QuickBooks 里开一张发票」。
{% endhint %}

# QuickBooks Online 节点

使用 QuickBooks 节点来自动化你在 QuickBooks 中的工作，并把它与其它应用集成。n8n 内置支持 QuickBooks 的大量功能，包括创建、更新、删除和获取账单（bill）、客户（customer）、员工（employee）、报价单（estimate）和发票（invoice）。

在本页你可以看到 QuickBooks 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [QuickBooks 凭证](../credentials/quickbooks.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作（Operations）

* Bill（账单）
    * Create（创建）
    * Delete（删除）
    * Get（获取单个）
    * Get All（获取全部）
    * Update（更新）
* Customer（客户）
    * Create（创建）
    * Get（获取单个）
    * Get All（获取全部）
    * Update（更新）
* Employee（员工）
    * Create（创建）
    * Get（获取单个）
    * Get All（获取全部）
    * Update（更新）
* Estimate（报价单）
    * Create（创建）
    * Delete（删除）
    * Get（获取单个）
    * Get All（获取全部）
    * Send（发送）
    * Update（更新）
* Invoice（发票）
    * Create（创建）
    * Delete（删除）
    * Get（获取单个）
    * Get All（获取全部）
    * Send（发送）
    * Update（更新）
    * Void（作废）
* Item（商品/项目）
    * Get（获取单个）
    * Get All（获取全部）
* Payment（付款）
    * Create（创建）
    * Delete（删除）
    * Get（获取单个）
    * Get All（获取全部）
    * Send（发送）
    * Update（更新）
    * Void（作废）
* Purchase（采购）
    * Get（获取单个）
    * Get All（获取全部）
* Transaction（交易）
    * Get Report（获取报表）
* Vendor（供应商）
    * Create（创建）
    * Get（获取单个）
    * Get All（获取全部）
    * Update（更新）

## 模板与示例（Templates and examples）

[浏览 QuickBooks Online 节点文档集成模板](https://n8n.io/integrations/quickbooks-online)，或[搜索全部模板](https://n8n.io/workflows/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
