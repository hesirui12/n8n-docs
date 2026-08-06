---
title: monday.com 节点文档
description: >-
  学习如何在 n8n 中使用 monday.com 节点。按照技术文档将 monday.com
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: monday.com 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.mondaycom.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mondaycom'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mondaycom'
layout:
  description:
    visible: false
---

# monday.com 节点

> 💡 **大白话**：monday.com 是一个「在线项目管理看板」工具，团队用它管项目、任务和进度。用这个节点，你可以让 n8n 自动创建看板（Board）、往看板上添加/删除/查询条目（Item）、改列值、移动分组等，比如「客户付款后自动在 monday.com 建一条任务」。

使用 monday.com 节点来自动化你在 monday.com 中的工作，并把它与其它应用集成。n8n 内置支持 monday.com 的大量功能，包括创建新看板，以及在看板上添加、删除和获取条目。

在本页你可以看到 monday.com 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="warning" %}
**最低版本要求**

该节点要求 n8n 版本为 1.22.6 或更高。
{% endhint %}

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [monday.com 凭证](../credentials/mondaycom.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作（Operations）

* Board（看板）
    * Archive a board（归档看板）
    * Create a new board（创建新看板）
    * Get a board（获取看板）
    * Get all boards（获取所有看板）
* Board Column（看板列）
    * Create a new column（创建新列）
    * Get all columns（获取所有列）
* Board Group（看板分组）
    * Delete a group in a board（删除看板中的分组）
    * Create a group in a board（在看板中创建分组）
    * Get list of groups in a board（获取看板中的分组列表）
* Board Item（看板条目）
    * Add an update to an item（给条目添加更新）
    * Change a column value for a board item（修改条目的列值）
    * Change multiple column values for a board item（修改条目的多个列值）
    * Create an item in a board's group（在看板分组中创建条目）
    * Delete an item（删除条目）
    * Get an item（获取条目）
    * Get all items（获取所有条目）
    * Get items by column value（按列值获取条目）
    * Move item to group（把条目移动到分组）

## 模板与示例（Templates and examples）

[浏览 monday.com 节点文档集成模板](https://n8n.io/integrations/mondaycom)，或[搜索全部模板](https://n8n.io/workflows/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
