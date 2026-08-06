---
title: UptimeRobot 节点文档
description: >-
  学习如何在 n8n 中使用 UptimeRobot 节点。按照技术文档将 UptimeRobot
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: UptimeRobot 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.uptimerobot.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.uptimerobot'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.uptimerobot'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：UptimeRobot 是一个「网站/服务器监控服务」——它定时去访问你的网站或接口，网站挂了就发警报通知你。这个节点可以帮你：创建/删除/修改监控项（Monitor）、管理告警联系人（Alert Contact）、管理维护窗口（维护期间不告警）、获取账户信息等。适合做自动化监控管理。
{% endhint %}

# UptimeRobot 节点

使用 UptimeRobot 节点来自动化你在 UptimeRobot 中的工作，并把它与其它应用集成。n8n 内置支持 UptimeRobot 的大量功能，包括创建和删除告警，以及获取账户详情。

在本页你可以看到 UptimeRobot 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [UptimeRobot 凭证](../credentials/uptimerobot.md)。
{% endhint %}

## 操作

* Account（账户）
    * Get account details（获取账户详情）
* Alert Contact（告警联系人）
    * Create an alert contact（创建告警联系人）
    * Delete an alert contact（删除告警联系人）
    * Get an alert contact（获取一个告警联系人）
    * Get all alert contacts（获取全部告警联系人）
    * Update an alert contact（更新告警联系人）
* Maintenance Window（维护窗口）
    * Create a maintenance window（创建维护窗口）
    * Delete a maintenance window（删除维护窗口）
    * Get a maintenance window（获取一个维护窗口）
    * Get all a maintenance windows（获取全部维护窗口）
    * Update a maintenance window（更新维护窗口）
* Monitor（监控项）
    * Create a monitor（创建监控项）
    * Delete a monitor（删除监控项）
    * Get a monitor（获取一个监控项）
    * Get all monitors（获取全部监控项）
    * Reset a monitor（重置监控项）
    * Update a monitor（更新监控项）
* Public Status Page（公开状态页）
    * Create a public status page（创建公开状态页）
    * Delete a public status page（删除公开状态页）
    * Get a public status page（获取一个公开状态页）
    * Get all a public status pages（获取全部公开状态页）

## 模板与示例

[浏览 UptimeRobot 节点的官方集成模板](https://n8n.io/integrations/uptimerobot)，或[搜索全部模板](https://n8n.io/workflows/)。
