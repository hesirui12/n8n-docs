---
title: Stripe 节点文档
description: >-
  学习如何在 n8n 中使用 Stripe 节点。按照技术文档将 Stripe
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Stripe 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.stripe.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.stripe'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.stripe'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Stripe 是全球最主流的「在线支付服务商」——帮你收款、管客户、发订阅账单。这个节点可以帮你：查账户余额、创建/管理扣款（Charge）、管理优惠券（Coupon）、管理客户（Customer，增删改查）、管理客户银行卡、创建计量事件（Meter Event，用于按量计费）、管理支付来源（Source）和令牌（Token）。适合做「订单支付后自动发货」「对账」「客户管理」等自动化。
{% endhint %}

# Stripe 节点

使用 Stripe 节点来自动化你在 Stripe 中的工作，并把它与其它应用集成。n8n 内置支持 Stripe 的大量功能，包括获取余额、创建扣款和计量事件，以及删除客户。

在本页你可以看到 Stripe 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Stripe 凭证](../credentials/stripe.md)。
{% endhint %}

## 操作

* Balance（余额）
    * Get a balance（获取余额）
* Charge（扣款）
    * Create a charge（创建扣款）
    * Get a charge（获取扣款）
    * Get all charges（获取全部扣款）
    * Update a charge（更新扣款）
* Coupon（优惠券）
    * Create a coupon（创建优惠券）
    * Get all coupons（获取全部优惠券）
* Customer（客户）
    * Create a customer（创建客户）
    * Delete a customer（删除客户）
    * Get a customer（获取客户）
    * Get all customers（获取全部客户）
    * Update a customer（更新客户）
* Customer Card（客户银行卡）
    * Add a customer card（添加客户银行卡）
    * Get a customer card（获取客户银行卡）
    * Remove a customer card（移除客户银行卡）
* Meter Event（计量事件）
    * Create a meter event（创建计量事件）
* Source（支付来源）
    * Create a source（创建支付来源）
    * Delete a source（删除支付来源）
    * Get a source（获取支付来源）
* Token（令牌）
    * Create a token（创建令牌）

## 模板与示例

[浏览 Stripe 节点的官方集成模板](https://n8n.io/integrations/stripe)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
