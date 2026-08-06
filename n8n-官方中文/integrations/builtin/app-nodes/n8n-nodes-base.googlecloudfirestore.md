---
title: Google Cloud Firestore 节点文档
description: >-
  了解如何在 n8n 中使用 Google Cloud Firestore 节点。按照技术文档把 Google Cloud Firestore 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Google Cloud Firestore 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.googlecloudfirestore.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecloudfirestore
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecloudfirestore
layout:
  description:
    visible: false
---
# Google Cloud Firestore 节点

> **大白话**：Firestore 是谷歌的云端 NoSQL 数据库，数据按「集合（Collection）」和「文档（Document）」存放。这个节点让你在 n8n 工作流里直接读写 Firestore，比如把表单提交存进去，或定时查询数据。

使用 Google Cloud Firestore 节点可以在 Google Cloud Firestore 中实现工作自动化，并把 Google Cloud Firestore 与其他应用集成。n8n 内置支持多种 Google Cloud Firestore 功能，包括创建、删除和获取文档。

本页面列出了 Google Cloud Firestore 节点支持的操作，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Google 凭证](../credentials/google/README.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作

* Document（文档）
    * Create a document（创建文档）
    * Create/Update a document（创建/更新文档）
    * Delete a document（删除文档）
    * Get a document（获取文档）
    * Get all documents from a collection（获取集合里的全部文档）
    * Runs a query against your documents（对你的文档执行查询）
* Collection（集合）
    * Get all root collections（获取全部根集合）

## 模板和示例

[浏览 Google Cloud Firestore 节点文档集成模板](https://n8n.io/integrations/google-cloud-firestore) 或 [搜索全部模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
