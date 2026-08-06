---
title: Metabase 节点文档
description: >-
  学习如何在 n8n 中使用 Metabase 节点。按照技术文档将 Metabase
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Metabase 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.metabase.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.metabase'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.metabase'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Metabase 是一个开源的 BI 报表工具（连上数据库就能拖拽做图表和看板，不写 SQL 也能用）。这个节点让你在 n8n 里访问 Metabase 里的东西：告警（Alert）、数据库（Database）、指标（Metric）和问题/查询（Question，就是 Metabase 里保存的查询）。典型用法：定时把某个报表的查询结果抓出来，发到群里或存下来。
{% endhint %}

# Metabase 节点

使用 Metabase 节点来自动化你在 Metabase 中的工作，并把它与其它应用集成。n8n 内置支持 Metabase 的大量功能，包括添加和获取告警、数据库、指标和问题/查询。

在本页你可以看到 Metabase 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Metabase 凭证](../credentials/metabase.md)。
{% endhint %}

## 操作

* Alert（告警）
    * Get（获取）
    * Get All（获取全部）
* Database（数据库）
    * Add（添加）
    * Get All（获取全部）
    * Get Fields（获取字段）
* Metric（指标）
    * Get（获取）
    * Get All（获取全部）
* Question（问题/查询）
    * Get（获取）
    * Get All（获取全部）
    * Result Data（获取查询结果数据）

## 模板与示例

[浏览 Metabase 节点的官方集成模板](https://n8n.io/integrations/metabase)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
