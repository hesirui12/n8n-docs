---
title: Google Drive 文件夹操作
description: >-
  n8n 中 Google Drive 节点的「文件夹操作」文档，一个工作流自动化平台。包含操作和配置的详细说明，以及示例和凭据信息的链接。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Google Drive 文件夹操作
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.googledrive/folder-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/folder-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/folder-operations
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
# 文件夹操作（Folder operations）

> 💡 **大白话**：这一页是「文件夹三件套」：新建文件夹、删除文件夹、分享文件夹。注意每个操作里选文件夹时，都可以用「从列表选 / 填网址 / 填 ID」三种方式，ID 就在网址最后一段里。

使用此操作在 Google Drive 中创建、删除和分享文件夹。关于 Google Drive 节点本身的更多信息，请参考 [Google Drive](./README.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 创建文件夹（Create a folder）

使用此操作在网盘中创建新文件夹。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Folder（文件夹）**。
* **Operation（操作）**：选择 **Create（创建）**。
* **Folder Name（文件夹名称）**：新文件夹使用的名称。
* **Parent Drive（父级网盘）**：选择 **From list（从列表选择）** 可从下拉列表选网盘，**By URL（按 URL）** 输入网盘网址，或 **By ID（按 ID）** 输入 `driveId`。
* **Parent Folder（父级文件夹）**：选择 **From list（从列表选择）** 可从下拉列表选文件夹，**By URL（按 URL）** 输入文件夹网址，或 **By ID（按 ID）** 输入 `folderId`。

可以在浏览器里打开共享网盘或文件夹，复制网址最后一段来找到 `driveId` 和 `folderID`：`https://drive.google.com/drive/u/1/folders/driveId`。

### 选项（Options）

* **Simplify Output（简化输出）**：选择是否返回简化版的响应，而不是包含所有字段。
* **Folder Color（文件夹颜色）**：文件夹的颜色，用 RGB 十六进制字符串表示。

更多信息请参考 [Method: files.insert | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/insert) API 文档。

## 删除文件夹（Delete a folder）

使用此操作从网盘中删除文件夹。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Folder（文件夹）**。
* **Operation（操作）**：选择 **Delete（删除）**。
* **Folder（文件夹）**：选择要删除的文件夹。
  * 选择 **From list（从列表选择）** 可从下拉列表选文件夹，**By URL（按 URL）** 输入文件夹网址，或 **By ID（按 ID）** 输入 `folderId`。
  * 可以在 Google Drive 文件夹网址里找到 `folderId`：`https://drive.google.com/drive/u/0/folders/folderID`。

### 选项（Options）

* **Delete Permanently（永久删除）**：选择是立即删除文件夹，而不是移到回收站。

更多信息请参考 [Method: files.delete | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/delete) API 文档。

## 分享文件夹（Share a folder）

使用此操作给文件夹添加分享权限。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Folder（文件夹）**。
* **Operation（操作）**：选择 **Share（分享）**。
* **Folder（文件夹）**：选择要分享的文件夹。
  * 选择 **From list（从列表选择）** 可从下拉列表选文件夹，**By URL（按 URL）** 输入文件夹网址，或 **By ID（按 ID）** 输入 `folderId`。
  * 可以在 Google Drive 文件夹网址里找到 `folderId`：`https://drive.google.com/drive/u/0/folders/folderID`。
* **Permissions（权限）**：要添加到文件夹的权限：
  * **Role（角色）**：选择别人能用这个文件夹做什么。可以是 **Commenter（评论者）**、**File Organizer（文件整理者）**、**Organizer（整理者）**、**Owner（所有者）**、**Reader（查看者）**、**Writer（编辑者）**。
  * **Type（类型）**：选择新权限的作用范围：
    * **User（用户）**：把权限授予特定用户，通过填写其 **Email Address（邮箱地址）** 指定。
    * **Group（群组）**：把权限授予特定群组，通过填写其 **Email Address（邮箱地址）** 指定。
    * **Domain（域）**：把权限授予整个域名（域内所有人），通过 **Domain（域名）** 指定。
    * **Anyone（任何人）**：把权限授予任何人。可以可选地开启 **Allow File Discovery（允许文件被发现）**，让文件夹能被搜索到。

### 选项（Options）

* **Email Message（邮件消息）**：要包含在通知邮件中的纯文本自定义消息。
* **Move to New Owners Root（移动到新所有者根目录）**：在共享一个不在共享网盘中的项目并尝试转移所有权时可用。开启后，会把文件夹移动到新所有者的 My Drive 根文件夹。
* **Send Notification Email（发送通知邮件）**：分享给用户或群组时是否发送通知邮件。
* **Transfer Ownership（转移所有权）**：是否把所有权转移给指定用户，并把当前所有者的权限降级为编辑者（writer）。
* **Use Domain Admin Access（使用域管理员权限）**：是否以域管理员身份执行该操作。

更多信息请参考 [REST Resources: files | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files) API 文档。
