---
title: Paddle 节点文档
description: >-
  学习如何在 n8n 中使用 Paddle 节点。按照技术文档将 Paddle
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Paddle 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.paddle.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.paddle'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.paddle'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Paddle 是软件公司的「收款 + 税务 + 订阅管理」一站式平台（帮软件开发者处理全球收款、增值税发票等）。这个节点让你在 n8n 里操作 Paddle：管理优惠券（Coupon）、付款（Payment）、套餐（Plan）、产品（Product）和用户（User），例如自动发券、查看订阅付款状态等。
{% endhint %}

# Paddle 节点

使用 Paddle 节点来自动化你在 Paddle 中的工作，并把它与其它应用集成。n8n 内置支持 Paddle 的大量功能，包括创建、更新和获取优惠券（coupon），以及获取套餐（plan）、产品（product）和用户（user）。

在本页你可以看到 Paddle 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Paddle 凭证](../credentials/paddle.md)。
{% endhint %}

## 操作

* Coupon（优惠券）
    * Create a coupon.（创建优惠券）
    * Get all coupons.（获取全部优惠券）
    * Update a coupon.（更新优惠券）
* Payment（付款）
    * Get all payment.（获取全部付款）
    * Reschedule payment.（重新安排付款时间）
* Plan（套餐）
    * Get a plan.（获取单个套餐）
    * Get all plans.（获取全部套餐）
* Product（产品）
    * Get all products.（获取全部产品）
* User（用户）
    * Get all users（获取全部用户）

## 模板与示例

[浏览 Paddle 节点的官方集成模板](https://n8n.io/integrations/paddle)，或[搜索全部模板](https://n8n.io/workflows/)。
