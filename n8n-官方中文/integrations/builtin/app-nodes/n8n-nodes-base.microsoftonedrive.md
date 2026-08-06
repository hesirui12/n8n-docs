---
title: Microsoft OneDrive 节点文档
description: >-
  学习如何在 n8n 中使用 Microsoft OneDrive 节点。按照
  技术文档将 Microsoft OneDrive 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Microsoft OneDrive 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.microsoftonedrive.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftonedrive
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftonedrive
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：OneDrive 就是微软的「个人网盘」（个人版和企业版都有）。这个节点让你在 n8n 里操作网盘里的文件和文件夹：上传、下载、复制、删除、重命名、搜索、分享，还能创建文件夹、看文件夹里有什么。典型场景：把生成的报表文件自动上传到网盘，或监控某个文件夹有新文件就触发下一步。
{% endhint %}

# Microsoft OneDrive 节点

使用 Microsoft OneDrive 节点来自动化你在 Microsoft OneDrive 中的工作，并把它与其它应用集成。n8n 内置支持 Microsoft OneDrive 的大量功能，包括创建、更新、删除和获取文件和文件夹。

在本页你可以看到 Microsoft OneDrive 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

此节点的 **Authentication**（认证方式）下拉框提供三个选项：

- **OneDrive OAuth2**：专用于 Microsoft OneDrive 的 OAuth2 凭证（默认）。
- **Microsoft OAuth2 (Graph)**：通用的 Microsoft Graph 凭证，可以在其它 Microsoft 节点之间复用。选择此选项时，请确保给凭证授予此节点所需的范围（例如 `Files.ReadWrite.All`）。
- **Microsoft Entra Service Principal (App-Only)**：通过 Microsoft Entra 应用注册实现仅应用访问（没有登录用户）。设置方法和所需的应用权限请参考 [Microsoft Entra Service Principal 凭证](../credentials/microsoftentraserviceprincipal.md)。

关于如何设置认证，请参考 [Microsoft 凭证](../credentials/microsoft.md)。
{% endhint %}

{% hint style="info" %}
**政府云支持**

如果你使用的是政府云租户（US Government 美国政府云、US Government DOD 美国国防部云或 China 中国云），请务必在 Microsoft 凭证配置中，选择对应的 **Microsoft Graph API Base URL**（Microsoft Graph API 基础 URL）。
{% endhint %}

（官方此处嵌入了通用资源组件，此处从略。）

## 操作

* File（文件）
    * Copy a file（复制文件）
    * Delete a file（删除文件）
    * Download a file（下载文件）
    * Get a file（获取文件）
    * Rename a file（重命名文件）
    * Search a file（搜索文件）
    * Share a file（分享文件）
    * Upload a file up to 4MB in size（上传文件，最大 4MB）
* Folder（文件夹）
    * Create a folder（创建文件夹）
    * Delete a folder（删除文件夹）
    * Get Children (get items inside a folder)（获取子项，即文件夹内的内容）
    * Rename a folder（重命名文件夹）
    * Search a folder（搜索文件夹）
    * Share a folder（分享文件夹）

## 模板与示例

[浏览 Microsoft OneDrive 节点的官方集成模板](https://n8n.io/integrations/microsoft-onedrive)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Microsoft OneDrive API 官方文档](https://learn.microsoft.com/en-us/onedrive/developer/rest-api/)。

## 如何找到文件夹 ID

要对文件夹执行操作，你需要提供文件夹的 ID。查找方法：

* 在文件夹的 URL 里找
* 用节点搜索。如果用的是 MS 365（OneDrive 背后其实是 SharePoint），就需要用这种方式：
	1. 在 **Resource**（资源）里选择 **Folder**（文件夹）。
	2. 在 **Operation**（操作）里选择 **Search**（搜索）。
	3. 在 **Query**（查询）里输入文件夹名称。
	4. 点击 **Execute step**（执行步骤）。n8n 会执行查询并返回文件夹的相关数据，其中包含一个 `id` 字段，里面就是文件夹 ID。
