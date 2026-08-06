---
title: Magento 2 节点文档
description: >-
  学习如何在 n8n 中使用 Magento 2 节点。按照技术文档将 Magento 2
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Magento 2 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.magento2.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.magento2'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.magento2'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Magento 2 是一套开源的电商建站系统（就是帮你搭网上商店的）。这个节点让你在 n8n 工作流里直接操作 Magento 2 后台的数据：客户、发票、订单、商品，都可以增删改查。比如「客户下单了 → 自动在 Magento 里查订单 → 发通知」，全自动。
{% endhint %}

# Magento 2 节点

使用 Magento 2 节点来自动化你在 Magento 2 中的工作，并把它与其它应用集成。n8n 内置支持 Magento 2 的大量功能，包括创建、更新、删除和获取客户、发票、订单和项目。

在本页你可以看到 Magento 2 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Magento 2 凭证](../credentials/magento2.md)。
{% endhint %}

## 操作

* Customer（客户）
    * Create a new customer（创建新客户）
    * Delete a customer（删除客户）
    * Get a customer（获取客户）
    * Get all customers（获取全部客户）
    * Update a customer（更新客户）
* Invoice（发票）
    * Create an invoice（创建发票）
* Order（订单）
    * Cancel an order（取消订单）
    * Get an order（获取订单）
    * Get all orders（获取全部订单）
    * Ship an order（发货/配送订单）
* Product（商品）
    * Create a product（创建商品）
    * Delete a product（删除商品）
    * Get a product（获取商品）
    * Get all products（获取全部商品）
    * Update a product（更新商品）

## 模板与示例

[浏览 Magento 2 节点的官方集成模板](https://n8n.io/integrations/magento-2)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
