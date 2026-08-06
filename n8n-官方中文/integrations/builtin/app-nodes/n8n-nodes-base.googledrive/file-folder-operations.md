---
title: Google Drive 文件与文件夹操作
description: >-
  n8n 中 Google Drive 节点的「文件与文件夹操作」文档，一个工作流自动化平台。包含操作和配置的详细说明，以及示例和凭据信息的链接。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Google Drive 文件与文件夹操作
originalFilePath: >-
  integrations/builtin/app-nodes/n8n-nodes-base.googledrive/file-folder-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/file-folder-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/file-folder-operations
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# 文件与文件夹操作（File and Folder operations）

> 💡 **大白话**：这个操作专门用来「搜索」Google Drive 里的文件和文件夹。你可以按名字搜，也可以用 Google 的高级语法搜（比如「只找图片」「找最近修改的」）。想自动找文件、批量处理网盘内容时，就用它。

使用此操作在 Google Drive 中搜索文件和文件夹。关于 Google Drive 节点本身的更多信息，请参考 [Google Drive](./README.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 搜索文件和文件夹（Search files and folders）

使用此操作在网盘中搜索文件和文件夹。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **File/Folder（文件/文件夹）**。
* **Operation（操作）**：选择 **Search（搜索）**。
* **Search Method（搜索方式）**：选择你想要的搜索方式：
  * **Search File/Folder Name（按文件/文件夹名称搜索）**：在 **Search Query（搜索词）** 里填上要搜索的文件或文件夹名称。系统会返回与搜索词部分匹配的文件和文件夹。
  * **Advanced Search（高级搜索）**：填写 **Query String（查询字符串）**，使用 [Google 查询字符串语法](https://developers.google.com/drive/api/guides/search-files) 搜索文件和文件夹。
* **Return All（返回全部）**：选择是返回全部结果，还是只返回指定数量以内的结果。
* **Limit（限制）**：当 **Return All（返回全部）** 关闭时，最多返回的条数。
* **Filter（筛选）**：选择是否缩小搜索范围：
  * **Drive（网盘）**：要搜索的网盘。默认使用你个人的 "My Drive"（我的云端硬盘）。选择 **From list（从列表选择）** 可从下拉列表选网盘，**By URL（按 URL）** 输入网盘网址，或 **By ID（按 ID）** 输入 `driveId`。
    * 可以在浏览器里打开共享网盘，复制网址最后一段来找到 `driveId`：`https://drive.google.com/drive/u/1/folders/driveId`。
  * **Folder（文件夹）**：要搜索的文件夹。选择 **From list（从列表选择）** 可从下拉列表选文件夹，**By URL（按 URL）** 输入文件夹网址，或 **By ID（按 ID）** 输入 `folderId`。
    * 可以在浏览器里打开共享文件夹，复制网址最后一段来找到 `folderId`：`https://drive.google.com/drive/u/1/folders/folderId`。
  * **What to Search（搜索什么）**：选择搜索 **Files and Folders（文件和文件夹）**、**Files（文件）** 还是 **Folders（文件夹）**。
  * **Include Trashed Items（包含已删除到回收站的项目）**：是否也返回网盘回收站里的项目。

### 选项（Options）

* **Fields（字段）**：选择要返回的字段。可以是以下一个或多个：**\[All]（全部）**、**explicitlyTrashed**、**exportLinks**、**hasThumbnail**、**iconLink**、**ID**、**Kind**、**mimeType**、**Name**、**Permissions**、**Shared**、**Spaces**、**Starred**、**thumbnailLink**、**Trashed**、**Version**、**webViewLink**。

更多信息请参考 [Method: files.list | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/list) API 文档。
