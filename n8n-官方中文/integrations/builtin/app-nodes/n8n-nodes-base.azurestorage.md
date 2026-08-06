---
title: Azure Storage 节点文档
description: 学习如何在 n8n 中使用 Azure Storage 节点。按照技术文档将 Azure Storage 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Azure Storage 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.azurestorage.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.azurestorage'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.azurestorage'
layout:
  description:
    visible: false
---

# Azure Storage 节点

> 💡 **大白话**：Azure Storage 是微软 Azure 的「云存储」服务，用来存文件。里面分「容器」（放东西的空间）和「blob」（实际存的文件/数据块）。用这个节点，你可以在 n8n 里自动创建、读取、删除容器和 blob，不用自己写代码。

Azure Storage 节点内置支持大量功能，包括创建、获取和删除 blob 与容器。使用这个节点可以自动化 Azure Storage 服务里的工作，或者把它与工作流中的其他服务集成起来。

本页列出了 Azure Storage 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于本节点的认证信息，请看[这里](../credentials/azurestorage.md)。
{% endhint %}


## 支持的操作（Operations）

* **Blob（数据块/文件）**
	* **Create blob（创建 blob）**：创建一个新的 blob，或替换一个已有的 blob。
	* **Delete blob（删除 blob）**：删除一个已有的 blob。
	* **Get blob（获取 blob）**：获取某个指定 blob 的数据。
	* **Get many blobs（获取多个 blob）**：获取 blob 列表。
* **Container（容器）**
	* **Create container（创建容器）**：创建一个新的容器。
	* **Delete container（删除容器）**：删除一个已有的容器。
	* **Get container（获取容器）**：获取某个指定容器的数据。
	* **Get many containers（获取多个容器）**：获取容器列表。

## 模板和示例（Templates and examples）

[浏览 Azure Storage 节点文档集成模板](https://n8n.io/integrations/azure-storage) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [微软 Azure Storage 官方文档](https://learn.microsoft.com/en-us/rest/api/storageservices/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
