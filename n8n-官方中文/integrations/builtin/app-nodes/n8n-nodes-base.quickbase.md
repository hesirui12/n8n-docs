---
title: Quick Base 节点文档
description: >-
  学习如何在 n8n 中使用 Quick Base 节点。按照技术文档将 Quick Base
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Quick Base 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.quickbase.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.quickbase'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.quickbase'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Quick Base 是一款低代码业务应用平台，你可以用它搭建自定义的业务应用，数据存在「表（table）」里的「记录（record）」中。用这个节点，你可以在 n8n 里自动创建、更新、删除、查询记录，获取字段信息，还能下载表里的文件。
{% endhint %}

# Quick Base 节点

使用 Quick Base 节点来自动化你在 Quick Base 中的工作，并把它与其它应用集成。n8n 内置支持 Quick Base 的大量功能，包括创建、更新、删除和获取记录（record），获取字段（field），以及下载文件。

在本页你可以看到 Quick Base 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Quick Base 凭证](../credentials/quickbase.md)。
{% endhint %}

## 操作（Operations）

* Field（字段）
    * Get all fields（获取全部字段）
* File（文件）
    * Delete a file（删除文件）
    * Download a file（下载文件）
* Record（记录）
    * Create a record（创建记录）
    * Delete a record（删除记录）
    * Get all records（获取全部记录）
    * Update a record（更新记录）
    * Upsert a record（插入或更新记录，存在则更新、不存在则新建）
* Report（报表）
    * Get a report（获取报表）
    * Run a report（运行报表）

## 模板与示例（Templates and examples）

[浏览 Quick Base 节点文档集成模板](https://n8n.io/integrations/quick-base)，或[搜索全部模板](https://n8n.io/workflows/)。
