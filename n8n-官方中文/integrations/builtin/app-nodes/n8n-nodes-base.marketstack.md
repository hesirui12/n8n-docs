---
title: marketstack 节点文档
description: >-
  学习如何在 n8n 中使用 marketstack 节点。按照技术文档将
  marketstack 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: marketstack 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.marketstack.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.marketstack'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.marketstack'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：marketstack 是一个提供股票/金融市场数据的 API 服务（免费版每天有一些额度）。这个节点能帮你拿三类数据：交易所列表（Exchange）、每日收盘行情（End-of-Day Data，即 EOD）、股票代码/标的（Ticker）。适合做行情提醒、收盘数据归档之类的自动化。
{% endhint %}

# marketstack 节点

使用 marketstack 节点来自动化你在 marketstack 中的工作，并把它与其它应用集成。n8n 内置支持 marketstack 的大量功能，包括获取交易所、每日收盘数据和股票代码（ticker）。

在本页你可以看到 marketstack 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [marketstack 凭证](../credentials/marketstack.md)。
{% endhint %}

## 操作

* End-of-Day Data（每日收盘数据）
    * Get All（获取全部）
* Exchange（交易所）
    * Get（获取）
* Ticker（股票代码）
    * Get（获取）

## 模板与示例

[浏览 marketstack 节点的官方集成模板](https://n8n.io/integrations/marketstack)，或[搜索全部模板](https://n8n.io/workflows/)。
