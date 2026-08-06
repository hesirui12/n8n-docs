---
title: NocoDB 节点文档
description: >-
  学习如何在 n8n 中使用 NocoDB 节点。按照技术文档将 NocoDB
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: NocoDB 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.nocodb.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.nocodb'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.nocodb'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：NocoDB 是一个「开源版的 Airtable」——把普通数据库（比如 MySQL、PostgreSQL）变成可视化表格来用，适合非程序员管理数据。这个节点让你在 n8n 里直接操作 NocoDB 的表格行（Row）：新增、删除、查询、批量获取、更新，配合 n8n 就能实现「表单提交→自动入库」之类的自动化。
{% endhint %}

# NocoDB 节点

使用 NocoDB 节点来自动化你在 NocoDB 中的工作，并把它与其它应用集成。n8n 内置支持 NocoDB 的大量功能，包括创建、更新、删除和获取表格行（Row）。

在本页你可以看到 NocoDB 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [NocoDB 凭证](../credentials/nocodb.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作

* Row（行）
    * Create（创建）
    * Delete（删除）
    * Get（获取单个）
    * Get Many（获取多个）
    * Update a row（更新一行）

## 模板与示例

[浏览 NocoDB 节点的官方集成模板](https://n8n.io/integrations/nocodb)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [NocoDB 的官方文档](https://docs.nocodb.com/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
