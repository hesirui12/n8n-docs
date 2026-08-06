---
title: Splunk 节点文档
description: >-
  学习如何在 n8n 中使用 Splunk 节点。按照技术文档将 Splunk
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Splunk 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.splunk.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.splunk'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.splunk'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Splunk 是一个「日志分析平台」——把服务器、App 产生的海量日志收集起来，用搜索语法（SPL）查问题、做监控告警。这个节点可以帮你：获取触发的告警报告、管理搜索配置、管理搜索任务（Search Job）、获取搜索结果、管理用户。适合做日志监控联动、安全事件调查、告警自动化。
{% endhint %}

# Splunk 节点

使用 Splunk 节点来自动化你在 Splunk 中的工作，并把它与其它应用集成。n8n 内置支持 Splunk 的大量功能，包括获取已触发的告警报告，以及删除、获取搜索配置。

在本页你可以看到 Splunk 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Splunk 凭证](../credentials/splunk.md)。
{% endhint %}

## 操作

* Fired Alert（已触发的告警）
    * Get a fired alerts report（获取已触发的告警报告）
* Search Configuration（搜索配置）
    * Delete a search configuration（删除搜索配置）
    * Get a search configuration（获取搜索配置）
    * Get many search configurations（获取多个搜索配置）
* Search Job（搜索任务）
    * Create a search job（创建搜索任务）
    * Delete a search job（删除搜索任务）
    * Get a search job（获取搜索任务）
    * Get many search jobs（获取多个搜索任务）
* Search Result（搜索结果）
    * Get many search results（获取多个搜索结果）
* User（用户）
    * Create a user（创建用户）
    * Delete a user（删除用户）
    * Get a user（获取用户）
    * Get many users（获取多个用户）
    * Update a user（更新用户）

## 模板与示例

[浏览 Splunk 节点的官方集成模板](https://n8n.io/integrations/splunk)，或[搜索全部模板](https://n8n.io/workflows/)。
