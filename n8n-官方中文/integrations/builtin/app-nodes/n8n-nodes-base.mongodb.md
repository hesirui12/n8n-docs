---
title: MongoDB 节点文档
description: >-
  学习如何在 n8n 中使用 MongoDB 节点。按照技术文档将 MongoDB
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: MongoDB 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.mongodb.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mongodb'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mongodb'
layout:
  description:
    visible: false
---

# MongoDB 节点

> 💡 **大白话**：MongoDB 是一个「文档型数据库」，数据以类似 JSON 的文档形式存储，非常灵活。用这个节点，你可以让 n8n 对 MongoDB 里的文档做增删改查、聚合统计，还能管理「搜索索引」（让搜索更快的工具）。

使用 MongoDB 节点来自动化你在 MongoDB 中的工作，并把它与其它应用集成。n8n 内置支持 MongoDB 的大量功能，包括聚合、更新、查找、删除和获取文档，以及创建、更新、列出和删除搜索索引。该节点的所有操作都使用 [MongoDB Node 驱动](https://www.mongodb.com/docs/drivers/node/current/)。

在本页你可以看到 MongoDB 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [MongoDB 凭证](../credentials/mongodb.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作（Operations）

* Document（文档）
	* Aggregate documents（聚合文档）
	* Delete documents（删除文档）
	* Find documents（查找文档）
	* Find and replace documents（查找并替换文档）
	* Find and update documents（查找并更新文档）
	* Insert documents（插入文档）
	* Update documents（更新文档）
* Search Index（搜索索引）
	* Create search indexes（创建搜索索引）
	* Drop search indexes（删除搜索索引）
	* List search indexes（列出搜索索引）
	* Update search indexes（更新搜索索引）

## 模板与示例（Templates and examples）

[浏览 MongoDB 节点文档集成模板](https://n8n.io/integrations/mongodb)，或[搜索全部模板](https://n8n.io/workflows/)。
