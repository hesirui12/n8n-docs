---
title: PayPal 节点文档
description: >-
  学习如何在 n8n 中使用 PayPal 节点。按照技术文档将 PayPal
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: PayPal 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.paypal.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.paypal'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.paypal'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：PayPal 是全球知名的在线支付平台。这个节点让你在 n8n 里操作 PayPal 的「批量付款（Payout）」功能：创建批量付款（给很多人同时打款）、查看批量付款详情，以及取消未领取的付款项、查看单个付款项详情——适合做「批量结算、批量打款」类自动化。
{% endhint %}

# PayPal 节点

使用 PayPal 节点来自动化你在 PayPal 中的工作，并把它与其它应用集成。n8n 内置支持 PayPal 的大量功能，包括创建批量付款（batch payout）和取消未领取的付款项（unclaimed payout item）。

在本页你可以看到 PayPal 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [PayPal 凭证](../credentials/paypal.md)。
{% endhint %}

## 操作

* Payout（批量付款）
    * Create a batch payout（创建批量付款）
    * Show batch payout details（查看批量付款详情）
* Payout Item（付款项）
    * Cancels an unclaimed payout item（取消未领取的付款项）
    * Show payout item details（查看付款项详情）

## 模板与示例

[浏览 PayPal 节点的官方集成模板](https://n8n.io/integrations/paypal)，或[搜索全部模板](https://n8n.io/workflows/)。
