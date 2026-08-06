---
title: ProfitWell 节点文档
description: >-
  学习如何在 n8n 中使用 ProfitWell 节点。按照技术文档将 ProfitWell
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: ProfitWell 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.profitwell.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.profitwell'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.profitwell'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：ProfitWell（Paddle 旗下）是一款做订阅业务数据分析的工具，能帮你算出订阅收入、流失率、MRR 等指标。用这个节点，你可以在 n8n 里自动获取公司的账户设置，以及拉取按天拆分的财务指标，方便定时汇总到报表或数据库里。
{% endhint %}

# ProfitWell 节点

使用 ProfitWell 节点来自动化你在 ProfitWell 中的工作，并把它与其它应用集成。n8n 支持获取你公司的账户设置，以及从 ProfitWell 获取财务指标。

在本页你可以看到 ProfitWell 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [ProfitWell 凭证](../credentials/profitwell.md)。
{% endhint %}

## 操作（Operations）

* Company（公司）
    * Get your company's ProfitWell account settings（获取你公司的 ProfitWell 账户设置）
* Metric（指标）
    * Retrieve financial metric broken down by day for either the current month or the last（获取按天拆分的财务指标，可指定当月或上个月）

## 模板与示例（Templates and examples）

[浏览 ProfitWell 节点文档集成模板](https://n8n.io/integrations/profitwell)，或[搜索全部模板](https://n8n.io/workflows/)。
