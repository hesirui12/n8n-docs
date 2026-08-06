---
title: Google Drive 节点文档
description: >-
  了解如何在 n8n 中使用 Google Drive 节点。按照技术文档把 Google Drive 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Google Drive 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.googledrive/index.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive'
layout:
  description:
    visible: false
---
# Google Drive 节点

> **大白话**：Google Drive 就是谷歌网盘。这个节点让你在 n8n 工作流里自动管理云盘文件：上传、下载、复制、移动、删除、分享文件，创建/删除文件夹，还能操作共享云盘（Shared Drive，团队共用的网盘）。

使用 Google Drive 节点可以在 Google Drive 中实现工作自动化，并把 Google Drive 与其他应用集成。n8n 内置支持多种 Google Drive 功能，包括创建、更新、列出、删除和获取云盘（Drive）、文件（File）和文件夹（Folder）。

本页面列出了 Google Drive 节点支持的操作，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Google Drive 凭证](../../credentials/google/README.md)。
{% endhint %}

## 操作

* **File**（文件）
    * [**Copy**](file-operations.md#copy-a-file)（复制）文件
    * [**Create from text**](file-operations.md#create-from-text)（从文本创建）
    * [**Delete**](file-operations.md#delete-a-file)（删除）文件
    * [**Download**](file-operations.md#download-a-file)（下载）文件
    * [**Move**](file-operations.md#move-a-file)（移动）文件
    * [**Share**](file-operations.md#share-a-file)（分享）文件
    * [**Update**](file-operations.md#update-a-file)（更新）文件
    * [**Upload**](file-operations.md#upload-a-file)（上传）文件
* **File/Folder**（文件/文件夹）
    * [**Search**](file-folder-operations.md#search-files-and-folders)（搜索）文件和文件夹
* **Folder**（文件夹）
    * [**Create**](folder-operations.md#create-a-folder)（创建）文件夹
    * [**Delete**](folder-operations.md#delete-a-folder)（删除）文件夹
    * [**Share**](folder-operations.md#share-a-folder)（分享）文件夹
* **Shared Drive**（共享云盘）
    * [**Create**](shared-drive-operations.md#create-a-shared-drive)（创建）共享云盘
    * [**Delete**](shared-drive-operations.md#delete-a-shared-drive)（删除）共享云盘
    * [**Get**](shared-drive-operations.md#get-a-shared-drive)（获取）共享云盘
    * [**Get Many**](shared-drive-operations.md#get-many-shared-drives)（获取多个）共享云盘
    * [**Update**](shared-drive-operations.md#update-a-shared-drive)（更新）共享云盘

## 模板和示例

[浏览 n8n-nodes-base.googledrive 集成模板](https://n8n.io/integrations/google-drive) 或 [搜索全部模板](https://n8n.io/workflows/)

## 常见问题

如果遇到常见的问题或报错，以及建议的解决办法，请参考 [常见问题](common-issues.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
