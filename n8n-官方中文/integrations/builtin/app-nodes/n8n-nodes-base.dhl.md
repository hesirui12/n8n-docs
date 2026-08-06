---
title: DHL 节点文档
description: >-
  学习如何在 n8n 中使用 DHL 节点。按照技术文档将 DHL
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: DHL 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.dhl.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.dhl'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.dhl'
layout:
  description:
    visible: false
---

# DHL 节点

> **大白话**：DHL 是国际快递公司。这个节点目前主要用来查询包裹的物流跟踪信息（Shipment Tracking）。举例：跨境电商订单发货后，工作流定时查一次 DHL 运单状态，一旦显示"已签收"，就自动发通知给客户。

使用 DHL 节点可以自动化处理 DHL 里的工作，并让 DHL 与其他应用程序互通。n8n 内置支持 DHL 的众多功能，包括查询物流跟踪信息等。

本页列出了 DHL 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [DHL 凭证](../credentials/dhl.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 支持的操作

* Shipment（运单）
    * 获取物流跟踪详情

## 模板与示例


[浏览 DHL 节点集成模板](https://n8n.io/integrations/dhl) 或 [搜索全部模板](https://n8n.io/workflows/)
