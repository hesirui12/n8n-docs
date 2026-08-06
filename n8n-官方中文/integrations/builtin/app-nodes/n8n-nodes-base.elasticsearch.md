---
title: Elasticsearch 节点文档
description: >-
  了解如何在 n8n 中使用 Elasticsearch 节点。按照技术文档把 Elasticsearch 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Elasticsearch 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.elasticsearch.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.elasticsearch
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.elasticsearch
layout:
  description:
    visible: false
---

# Elasticsearch 节点

> **大白话**：Elasticsearch（简称 ES）是一个搜索和分析引擎，数据以「文档」（Document）形式存在「索引」（Index）里。这个节点让你在 n8n 里直接增删改查文档和索引，比如往 ES 里写入日志、查询数据。

用 Elasticsearch 节点在 Elasticsearch 里自动化干活，并把 Elasticsearch 和其他应用串起来。n8n 内置支持 Elasticsearch 的大量功能，包括创建、更新、删除和获取文档与索引。

本页面列出了 Elasticsearch 节点支持的所有操作，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何配置认证，请参考 [Elasticsearch 凭据](../credentials/elasticsearch.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 支持的操作

* Document（文档）
    * Create a document（创建文档）
    * Delete a document（删除文档）
    * Get a document（获取单个文档）
    * Get all documents（获取全部文档）
    * Update a document（更新文档）
* Index（索引）
    * Create（创建）
    * Delete（删除）
    * Get（获取单个）
    * Get All（获取全部）

## 模板和示例

[浏览 Elasticsearch 节点文档集成模板](https://n8n.io/integrations/elasticsearch)，或[搜索所有模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
