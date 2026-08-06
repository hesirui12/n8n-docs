---
title: Unleashed Software 节点文档
description: >-
  学习如何在 n8n 中使用 Unleashed Software 节点。按照技术文档将
  Unleashed Software 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Unleashed Software 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.unleashedsoftware.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.unleashedsoftware
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.unleashedsoftware
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Unleashed Software 是面向制造/批发企业的库存与销售管理软件。这个节点目前支持两类操作：查询销售订单（Sales Order）和查询现有库存（Stock On Hand，即仓库里还剩多少货）。常用场景：定时拉取新增订单做对账，或检查库存不足时自动提醒采购。
{% endhint %}

# Unleashed Software 节点

使用 Unleashed Software 节点来自动化你在 Unleashed Software 中的工作，并把它与其它应用集成。n8n 内置支持 Unleashed Software 的大量功能，包括获取销售订单（Sales Order）和现有库存（Stock On Hand）。

在本页你可以看到 Unleashed Software 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Unleashed Software 凭证](../credentials/unleashedsoftware.md)。
{% endhint %}

## 操作

* Sales Order（销售订单）
    * Get all sales orders（获取全部销售订单）
* Stock On Hand（现有库存）
    * Get a stock on hand（获取单个商品的现有库存）
    * Get all stocks on hand（获取全部商品的现有库存）

## 模板与示例

[浏览 Unleashed Software 节点的官方集成模板](https://n8n.io/integrations/unleashed-software)，或[搜索全部模板](https://n8n.io/workflows/)。
