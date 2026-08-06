---
title: WooCommerce 触发器节点文档
description: >-
  学习如何在 n8n 中使用 WooCommerce 触发器节点。按照本文档将
  WooCommerce 触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: WooCommerce 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.woocommercetrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.woocommercetrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.woocommercetrigger
layout:
  description:
    visible: false
---

# WooCommerce 触发器节点

> **大白话**：WooCommerce 是 WordPress 上最流行的开源电商插件，可以自由定制。这个触发器节点的作用是：当你的网店有新的订单、优惠券、客户或商品发生变化时（比如有人下单、商品被删除），就自动启动 n8n 工作流，让你自动发订单通知、更新库存或做数据分析。

[WooCommerce](https://woocommerce.com/) 是 WordPress 的一个可定制、开源的电商插件。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/woocommerce.md)找到此节点的身份验证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [WooCommerce Trigger integrations](https://n8n.io/integrations/woocommerce-trigger/) 页面。
{% endhint %}

## 事件（Events）

下面是该节点支持的事件。事件名是 WooCommerce 的 API 事件名，请原样填写/选择：

- coupon.created（优惠券已创建）
- coupon.updated（优惠券已更新）
- coupon.deleted（优惠券已删除）
- customer.created（客户已创建）
- customer.updated（客户已更新）
- customer.deleted（客户已删除）
- order.created（订单已创建）
- order.updated（订单已更新）
- order.deleted（订单已删除）
- product.created（商品已创建）
- product.updated（商品已更新）
- product.deleted（商品已删除）
