---
title: Google Drive 文件操作
description: >-
  n8n 中 Google Drive 节点的「文件操作」文档，一个工作流自动化平台。包含操作和配置的详细说明，以及示例和凭据信息的链接。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Google Drive 文件操作
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.googledrive/file-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/file-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/file-operations
layout:
  description:
    visible: false
---

# Google Drive 文件操作

> 💡 **大白话**：这一页教你用 Google Drive 节点「摆弄文件」：复制、从文字新建、删除、下载、移动、分享、更新、上传。基本覆盖了你对网盘文件能做的所有操作。所有操作第一步都是连凭据，然后选 Resource（资源）= File（文件），再选要干的事。

使用此操作创建、删除、修改和管理 Google Drive 中的文件。关于 Google Drive 节点本身的更多信息，请参考 [Google Drive](README.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 复制文件（Copy a file）

使用此操作把文件复制到网盘中。

填写以下参数：

- **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
- **Resource（资源）**：选择 **File（文件）**。
- **Operation（操作）**：选择 **Copy（复制）**。
- **File（文件）**：选择要复制的文件。
    - 选择 **From list（从列表选择）** 可从下拉列表选标题，**By URL（按 URL）** 输入文件网址，或 **By ID（按 ID）** 输入 `fileId`。
    - 可以在可分享的 Google Drive 文件网址里找到 `fileId`：`https://docs.google.com/document/d/fileId/edit#gid=0`。在 Google Drive 里选择 **Share（分享）> Copy link（复制链接）** 可获取可分享的文件网址。
- **File Name（文件名）**：新副本使用的文件名。
- **Copy In The Same Folder（复制到同一文件夹）**：选择是否把文件复制到原文件夹。如果关闭，需要设置以下参数：
	- **Parent Drive（父级网盘）**：选择 **From list（从列表选择）** 可从下拉列表选网盘，**By URL（按 URL）** 输入网盘网址，或 **By ID（按 ID）** 输入 `driveId`。
	- **Parent Folder（父级文件夹）**：选择 **From list（从列表选择）** 可从下拉列表选文件夹，**By URL（按 URL）** 输入文件夹网址，或 **By ID（按 ID）** 输入 `folderId`。
	- 可以在浏览器里打开共享网盘或文件夹，复制网址最后一段来找到 `driveId` 和 `folderID`：`https://drive.google.com/drive/u/1/folders/driveId`。

### 选项（Options）

- **Copy Requires Writer Permissions（复制需要写入权限）**：选择是否允许查看者（reader）和评论者（commenter）复制、打印或下载新文件。
- **Description（描述）**：文件的简短说明。

更多信息请参考 [Method: files.copy | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/copy) API 文档。

## 从文本创建（Create from text）

使用此操作根据提供的文本在网盘中创建新文件。

填写以下参数：
- **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
- **Resource（资源）**：选择 **File（文件）**。
- **Operation（操作）**：选择 **Create From Text（从文本创建）**。
- **File Content（文件内容）**：输入用于创建新文件的文件内容。
- **File Name（文件名）**：新文件使用的名称。
- **Parent Drive（父级网盘）**：选择 **From list（从列表选择）** 可从下拉列表选网盘，**By URL（按 URL）** 输入网盘网址，或 **By ID（按 ID）** 输入 `driveId`。
- **Parent Folder（父级文件夹）**：选择 **From list（从列表选择）** 可从下拉列表选文件夹，**By URL（按 URL）** 输入文件夹网址，或 **By ID（按 ID）** 输入 `folderId`。

可以在浏览器里打开共享网盘或文件夹，复制网址最后一段来找到 `driveId` 和 `folderID`：`https://drive.google.com/drive/u/1/folders/driveId`。

### 选项（Options）

- **APP Properties（应用私有属性）**：一组任意的键值对，仅对发起请求的应用可见（私有）。
- **Properties（属性）**：一组任意的键值对，对所有应用可见。
- **Keep Revision Forever（永久保留修订版）**：选择是否在新头部修订版中设置 `keepForever` 字段。仅适用于包含二进制内容的文件。最多可保留 200 个修订版，之后必须删除已固定的修订版才能继续保留。

- **OCR Language（OCR 语言）**：一个 [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) 语言代码，帮助 OCR 在导入时识别内容。

- **Use Content As Indexable Text（将内容用作可索引文本）**：选择是否将上传的内容标记为可索引文本。
- **Convert to Google Document（转换为 Google 文档）**：选择是否创建 Google 文档而不是默认的 `.txt` 格式。要使用此功能，必须在 [Google API Console](https://console.cloud.google.com/apis/library/docs.googleapis.com) 中启用 Google Docs API。

更多信息请参考 [Method: files.insert | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/insert) API 文档。

## 删除文件（Delete a file）

使用此操作从网盘中删除文件。

填写以下参数：

- **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
- **Resource（资源）**：选择 **File（文件）**。
- **Operation（操作）**：选择 **Delete（删除）**。
- **File（文件）**：选择要删除的文件。
    - 选择 **From list（从列表选择）** 可从下拉列表选标题，**By URL（按 URL）** 输入文件网址，或 **By ID（按 ID）** 输入 `fileId`。
    - 可以在可分享的 Google Drive 文件网址里找到 `fileId`：`https://docs.google.com/document/d/fileId/edit#gid=0`。在 Google Drive 里选择 **Share（分享）> Copy link（复制链接）** 可获取可分享的文件网址。

### 选项（Options）

- **Delete Permanently（永久删除）**：选择是立即删除文件，而不是移到回收站。

更多信息请参考 [Method: files.delete | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/delete) API 文档。

## 下载文件（Download a file）

使用此操作从网盘下载文件。

填写以下参数：

- **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
- **Resource（资源）**：选择 **File（文件）**。
- **Operation（操作）**：选择 **Download（下载）**。
- **File（文件）**：选择要下载的文件。
    - 选择 **From list（从列表选择）** 可从下拉列表选标题，**By URL（按 URL）** 输入文件网址，或 **By ID（按 ID）** 输入 `fileId`。
    - 可以在可分享的 Google Drive 文件网址里找到 `fileId`：`https://docs.google.com/document/d/fileId/edit#gid=0`。在 Google Drive 里选择 **Share（分享）> Copy link（复制链接）** 可获取可分享的文件网址。

### 选项（Options）

- **Put Output File in Field（将输出文件放入字段）**：选择存放二进制文件内容的字段名，以便后续节点使用。
- **Google File Conversion（Google 文件转换）**：下载 Google 文件时选择要导出的格式：
	* **Google Docs（Google 文档）**：下载 Google Docs 文件时选择的导出格式：**HTML**、**MS Word Document（Word 文档）**、**Open Office Document（OpenOffice 文档）**、**PDF**、**Rich Text (rtf)（富文本）**、**Text (txt)（纯文本）**。
	* **Google Drawings（Google 绘图）**：下载 Google Drawing 文件时选择的导出格式：**JPEG**、**PDF**、**PNG**、**SVG**。
	* **Google Slides（Google 幻灯片）**：下载 Google Slides 文件时选择的导出格式：**MS PowerPoint**、**OpenOffice Presentation（OpenOffice 演示文稿）**、**PDF**。
	* **Google Sheets（Google 表格）**：下载 Google Sheets 文件时选择的导出格式：**CSV**、**MS Excel**、**Open Office Sheet（OpenOffice 表格）**、**PDF**。
- **File Name（文件名）**：下载文件使用的名称。

更多信息请参考 [Method: files.get | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/get) API 文档。

## 移动文件（Move a file）

使用此操作把文件移动到网盘中的其他位置。

填写以下参数：

- **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
- **Resource（资源）**：选择 **File（文件）**。
- **Operation（操作）**：选择 **Move（移动）**。
- **File（文件）**：选择要移动的文件。
    - 选择 **From list（从列表选择）** 可从下拉列表选标题，**By URL（按 URL）** 输入文件网址，或 **By ID（按 ID）** 输入 `fileId`。
    - 可以在可分享的 Google Drive 文件网址里找到 `fileId`：`https://docs.google.com/document/d/fileId/edit#gid=0`。在 Google Drive 里选择 **Share（分享）> Copy link（复制链接）** 可获取可分享的文件网址。
- **Parent Drive（父级网盘）**：选择 **From list（从列表选择）** 可从下拉列表选网盘，**By URL（按 URL）** 输入网盘网址，或 **By ID（按 ID）** 输入 `driveId`。
- **Parent Folder（父级文件夹）**：选择 **From list（从列表选择）** 可从下拉列表选文件夹，**By URL（按 URL）** 输入文件夹网址，或 **By ID（按 ID）** 输入 `folderId`。

可以在浏览器里打开共享网盘或文件夹，复制网址最后一段来找到 `driveId` 和 `folderID`：`https://drive.google.com/drive/u/1/folders/driveId`。

更多信息请参考 [Method: parents.insert | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/parents/insert) API 文档。

## 分享文件（Share a file）

使用此操作给文件添加分享权限。

填写以下参数：

- **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
- **Resource（资源）**：选择 **File（文件）**。
- **Operation（操作）**：选择 **Share（分享）**。
- **File（文件）**：选择要分享的文件。
    - 选择 **From list（从列表选择）** 可从下拉列表选标题，**By URL（按 URL）** 输入文件网址，或 **By ID（按 ID）** 输入 `fileId`。
    - 可以在可分享的 Google Drive 文件网址里找到 `fileId`：`https://docs.google.com/document/d/fileId/edit#gid=0`。在 Google Drive 里选择 **Share（分享）> Copy link（复制链接）** 可获取可分享的文件网址。
- **Permissions（权限）**：要添加到文件的权限：
	- **Role（角色）**：选择别人能用这个文件做什么。可以是 **Commenter（评论者）**、**File Organizer（文件整理者）**、**Organizer（整理者）**、**Owner（所有者）**、**Reader（查看者）**、**Writer（编辑者）**。
	- **Type（类型）**：选择新权限的作用范围：
		- **User（用户）**：把权限授予特定用户，通过填写其 **Email Address（邮箱地址）** 指定。
		- **Group（群组）**：把权限授予特定群组，通过填写其 **Email Address（邮箱地址）** 指定。
		- **Domain（域）**：把权限授予整个域名（域内所有人），通过 **Domain（域名）** 指定。
		- **Anyone（任何人）**：把权限授予任何人。可以可选地开启 **Allow File Discovery（允许文件被发现）**，让文件能被搜索到。

### 选项（Options）

- **Email Message（邮件消息）**：要包含在通知邮件中的纯文本自定义消息。

- **Move to New Owners Root（移动到新所有者根目录）**：在共享一个不在共享网盘中的项目并尝试转移所有权时可用。开启后，会把文件移动到新所有者的 My Drive 根文件夹。

- **Send Notification Email（发送通知邮件）**：分享给用户或群组时是否发送通知邮件。
- **Transfer Ownership（转移所有权）**：是否把所有权转移给指定用户，并把当前所有者的权限降级为编辑者（writer）。
- **Use Domain Admin Access（使用域管理员权限）**：是否以域管理员身份执行该操作。

更多信息请参考 [REST Resources: files | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files) API 文档。

## 更新文件（Update a file）

使用此操作更新文件。

填写以下参数：

- **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
- **Resource（资源）**：选择 **File（文件）**。
- **Operation（操作）**：选择 **Update（更新）**。
- **File to Update（要更新的文件）**：选择要更新的文件。
    - 选择 **From list（从列表选择）** 可从下拉列表选标题，**By URL（按 URL）** 输入文件网址，或 **By ID（按 ID）** 输入 `fileId`。
    - 可以在可分享的 Google Drive 文件网址里找到 `fileId`：`https://docs.google.com/document/d/fileId/edit#gid=0`。在 Google Drive 里选择 **Share（分享）> Copy link（复制链接）** 可获取可分享的文件网址。
- **Change File Content（更改文件内容）**：选择是否发送新的二进制数据来替换现有文件内容。如果开启，填写以下参数：
	- **Input Data Field Name（输入数据字段名）**：包含你想要使用的二进制文件数据的输入字段名称。
- **New Updated File Name（更新后的新文件名）**：如果你想更新文件名，给文件起的新名称。

### 选项（Options）

- **APP Properties（应用私有属性）**：一组任意的键值对，仅对发起请求的应用可见（私有）。
- **Properties（属性）**：一组任意的键值对，对所有应用可见。
- **Keep Revision Forever（永久保留修订版）**：选择是否在新头部修订版中设置 `keepForever` 字段。仅适用于包含二进制内容的文件。最多可保留 200 个修订版，之后必须删除已固定的修订版才能继续保留。

- **OCR Language（OCR 语言）**：一个 [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) 语言代码，帮助 OCR 在导入时识别内容。

- **Use Content As Indexable Text（将内容用作可索引文本）**：选择是否将上传的内容标记为可索引文本。
- **Move to Trash（移到回收站）**：是否把文件移到回收站。只有文件所有者才能操作。
- **Return Fields（返回字段）**：返回关于文件的元数据字段。可以是以下一个或多个：**[All]（全部）**、**explicitlyTrashed**、**exportLinks**、**hasThumbnail**、**iconLink**、**ID**、**Kind**、**mimeType**、**Name**、**Permissions**、**Shared**、**Spaces**、**Starred**、**thumbnailLink**、**Trashed**、**Version**、**webViewLink**。

更多信息请参考 [Method: files.update | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/update) API 文档。

## 上传文件（Upload a file）

使用此操作上传文件。

填写以下参数：

- **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
- **Resource（资源）**：选择 **File（文件）**。
- **Operation（操作）**：选择 **Upload（上传）**。
- **Input Data Field Name（输入数据字段名）**：包含你想要使用的二进制文件数据的输入字段名称。
- **File Name（文件名）**：新文件使用的名称。
- **Parent Drive（父级网盘）**：选择 **From list（从列表选择）** 可从下拉列表选网盘，**By URL（按 URL）** 输入网盘网址，或 **By ID（按 ID）** 输入 `driveId`。
- **Parent Folder（父级文件夹）**：选择 **From list（从列表选择）** 可从下拉列表选文件夹，**By URL（按 URL）** 输入文件夹网址，或 **By ID（按 ID）** 输入 `folderId`。

可以在浏览器里打开共享网盘或文件夹，复制网址最后一段来找到 `driveId` 和 `folderID`：`https://drive.google.com/drive/u/1/folders/driveId`。

### 选项（Options）

- **APP Properties（应用私有属性）**：一组任意的键值对，仅对发起请求的应用可见（私有）。
- **Properties（属性）**：一组任意的键值对，对所有应用可见。
- **Keep Revision Forever（永久保留修订版）**：选择是否在新头部修订版中设置 `keepForever` 字段。仅适用于包含二进制内容的文件。最多可保留 200 个修订版，之后必须删除已固定的修订版才能继续保留。

- **OCR Language（OCR 语言）**：一个 [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) 语言代码，帮助 OCR 在导入时识别内容。

- **Use Content As Indexable Text（将内容用作可索引文本）**：选择是否将上传的内容标记为可索引文本。
- **Simplify Output（简化输出）**：选择是否返回简化版的响应，而不是包含所有字段。

更多信息请参考 [Method: files.insert | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/insert) API 文档。
