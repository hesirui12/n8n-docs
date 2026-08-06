---
title: Microsoft SharePoint 节点文档
description: >-
  学习如何在 n8n 中使用 Microsoft SharePoint 节点。按照技术文档将 Microsoft
  SharePoint 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Microsoft SharePoint 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.microsoftsharepoint.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftsharepoint
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftsharepoint
layout:
  description:
    visible: false
---

# Microsoft SharePoint 节点

> 💡 **大白话**：SharePoint 是微软的「公司内部网站/文件库」，团队用它存文件、做列表清单。用这个节点，你可以让 n8n 自动下载、上传、更新文件，还能往列表里增删改查条目，不用自己手动一个个点。

使用 Microsoft SharePoint 节点来自动化你在 Microsoft SharePoint 中的工作，并把它与其它应用集成。n8n 内置支持 Microsoft SharePoint 的大量功能，包括下载、上传、更新文件，管理列表中的条目，以及获取列表和列表条目。

在本页你可以看到 Microsoft SharePoint 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Microsoft 凭证](../credentials/microsoft.md)。
{% endhint %}

## 操作（Operations）

* **File（文件）**：
	* Download（下载）：下载一个文件。
	* Update（更新）：更新一个文件。
	* Upload（上传）：上传一个已有的文件。
* **Item（条目）**：
	* Create（创建）：在已有列表中创建一个条目。
	* Create or Update（创建或更新）：创建一个新条目；如果已存在则更新它（upsert，有则改、无则建）。
	* Delete（删除）：从列表中删除一个条目。
	* Get（获取）：从列表中取回一个条目。
	* Get Many（获取多个）：获取列表中的特定条目，或列出多个条目。
	* Update（更新）：更新已有列表中的一个条目。
* **List（列表）**：
	* Get（获取）：获取单个列表的详细信息。
	* Get Many（获取多个）：获取列表的列表（一次拿到多个列表）。

## 模板与示例（Templates and examples）

[浏览 Microsoft SharePoint 节点文档集成模板](https://n8n.io/integrations/microsoft-sharepoint)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Microsoft 的 SharePoint 文档](https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service)。
