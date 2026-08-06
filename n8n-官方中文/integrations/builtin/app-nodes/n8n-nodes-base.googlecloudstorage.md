---
title: Google Cloud Storage 节点文档
description: >-
  了解如何在 n8n 中使用 Google Cloud Storage 节点。按照技术文档把 Google Cloud Storage 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Google Cloud Storage 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.googlecloudstorage.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecloudstorage
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecloudstorage
layout:
  description:
    visible: false
---
# Google Cloud Storage 节点

> **大白话**：Google Cloud Storage 是谷歌的云端对象存储，类似网盘，靠「桶（Bucket）」装「对象（Object，即文件）」。这个节点让你在 n8n 工作流里自动上传、下载、删除、管理文件，比如把生成的报表自动存到云上。

使用 Google Cloud Storage 节点可以在 Google Cloud Storage 中实现工作自动化，并把 Google Cloud Storage 与其他应用集成。n8n 内置支持多种 Google Cloud Storage 功能，包括创建、更新、删除和获取桶（Bucket）和对象（Object）。

本页面列出了 Google Cloud Storage 节点支持的操作，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Google Cloud Storage 凭证](../credentials/google/README.md)。
{% endhint %}

## 操作

* Bucket（桶）
	* Create（创建）
	* Delete（删除）
	* Get（获取单个）
	* Get Many（获取多个）
	* Update（更新）
* Object（对象/文件）
	* Create（创建）
	* Delete（删除）
	* Get（获取单个）
	* Get Many（获取多个）
	* Update（更新）

## 模板和示例

[浏览 Google Cloud Storage 节点文档集成模板](https://n8n.io/integrations/google-cloud-storage) 或 [搜索全部模板](https://n8n.io/workflows/)

## 相关资源

关于此节点集成的 API 的详细信息，请参考 Google 的 [Cloud Storage API 文档](https://cloud.google.com/storage/docs/apis)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
