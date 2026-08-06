---
title: PagerDuty 节点文档
description: >-
  学习如何在 n8n 中使用 PagerDuty 节点。按照技术文档将 PagerDuty
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: PagerDuty 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.pagerduty.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.pagerduty'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.pagerduty'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：PagerDuty 是「值班告警与事件响应」平台（系统出故障时自动打电话/发消息通知值班工程师）。这个节点让你在 n8n 里操作 PagerDuty：创建/获取/更新事件（Incident）、给事件添加备注（Incident Note）、查看日志条目（Log Entry）和用户（User）——适合做「监控告警→自动创建事件并通知值班人」的自动化。
{% endhint %}

# PagerDuty 节点

使用 PagerDuty 节点来自动化你在 PagerDuty 中的工作，并把它与其它应用集成。n8n 内置支持 PagerDuty 的大量功能，包括创建事件备注（incident note），以及更新和获取全部日志条目（log entry）与用户（user）。

在本页你可以看到 PagerDuty 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [PagerDuty 凭证](../credentials/pagerduty.md)。
{% endhint %}

## 操作

* Incident（事件）
    * Create an incident（创建事件）
    * Get an incident（获取单个事件）
    * Get all incidents（获取全部事件）
    * Update an incident（更新事件）
* Incident Note（事件备注）
    * Create an incident note（创建事件备注）
    * Get all incident's notes（获取事件的全部备注）
* Log Entry（日志条目）
    * Get a log entry（获取单个日志条目）
    * Get all log entries（获取全部日志条目）
* User（用户）
    * Get a user（获取单个用户）

## 模板与示例

[浏览 PagerDuty 节点的官方集成模板](https://n8n.io/integrations/pagerduty)，或[搜索全部模板](https://n8n.io/workflows/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
