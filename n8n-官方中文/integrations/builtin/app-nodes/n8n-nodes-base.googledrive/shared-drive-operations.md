---
title: Google Drive 共享网盘操作
description: >-
  n8n 中 Google Drive 节点的「共享网盘操作」文档，一个工作流自动化平台。包含操作和配置的详细说明，以及示例和凭据信息的链接。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Google Drive 共享网盘操作
originalFilePath: >-
  integrations/builtin/app-nodes/n8n-nodes-base.googledrive/shared-drive-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/shared-drive-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/shared-drive-operations
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
# 共享网盘操作（Shared Drive operations）

> 💡 **大白话**：共享网盘（Shared Drive）是 Google Drive 里「团队共用」的网盘空间，大家在里面放文件，权限按成员管理。这一页教你：创建、删除、读取、列出和更新共享网盘。里面的「能力（Capabilities）」和「限制（Restrictions）」都是权限开关，一般保持默认就行。

使用此操作创建、删除、获取和更新 Google Drive 中的共享网盘。关于 Google Drive 节点本身的更多信息，请参考 [Google Drive](./README.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 创建共享网盘（Create a shared drive）

使用此操作创建新的共享网盘。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Shared Drive（共享网盘）**。
* **Operation（操作）**：选择 **Create（创建）**。
* **Name（名称）**：新共享网盘使用的名称。

### 选项（Options）

* **Capabilities（能力）**：为新共享网盘设置的能力（更多细节见 [REST Resources: drives | Google Drive](https://developers.google.com/drive/api/reference/rest/v3/drives)）：
  * **Can Add Children（可以添加子项）**：当前用户能否在此共享网盘的文件夹里添加子项。
  * **Can Change Copy Requires Writer Permission Restriction（可以更改"复制需要编辑权限"限制）**：当前用户能否更改此共享网盘的 `copyRequiresWriterPermission` 限制。
  * **Can Change Domain Users Only Restriction（可以更改"仅限域用户"限制）**：当前用户能否更改此共享网盘的 `domainUsersOnly` 限制。
  * **Can Change Drive Background（可以更改网盘背景）**：当前用户能否更改此共享网盘的背景。
  * **Can Change Drive Members Only Restriction（可以更改"仅限网盘成员"限制）**：当前用户能否更改此共享网盘的 `driveMembersOnly` 限制。
  * **Can Comment（可以评论）**：当前用户能否评论此共享网盘中的文件。
  * **Can Copy（可以复制）**：当前用户能否复制此共享网盘中的文件。
  * **Can Delete Children（可以删除子项）**：当前用户能否从此共享网盘的文件夹中删除子项。
  * **Can Delete Drive（可以删除网盘）**：当前用户能否删除此共享网盘。如果共享网盘中还有不在回收站里的项目，此操作仍可能失败。
  * **Can Download（可以下载）**：当前用户能否从此共享网盘下载文件。
  * **Can Edit（可以编辑）**：当前用户能否编辑此共享网盘中的文件。
  * **Can List Children（可以列出子项）**：当前用户能否列出此共享网盘中文件夹的子项。
  * **Can Manage Members（可以管理成员）**：当前用户能否添加、移除或更改此共享网盘成员的角色。
  * **Can Read Revisions（可以读取修订版）**：当前用户能否读取此共享网盘中文件的修订版资源。
  * **Can Rename Drive（可以重命名网盘）**：当前用户能否重命名此共享网盘。
  * **Can Share（可以分享）**：当前用户能否分享此共享网盘中的文件或文件夹。
  * **Can Trash Children（可以把子项移入回收站）**：当前用户能否从此共享网盘的文件夹中把子项移入回收站。
* **Color RGB（颜色）**：此共享网盘的颜色，用 RGB 十六进制字符串表示。
* **Hidden（隐藏）**：是否在默认视图中隐藏此共享网盘。
* **Restrictions（限制）**：要添加到此共享网盘的限制（更多细节见 [REST Resources: drives | Google Drive](https://developers.google.com/drive/api/reference/rest/v3/drives)）：
  * **Admin Managed Restrictions（管理员管理的限制）**：开启后，这里的限制会把此共享网盘内所有文件的同名限制字段强制设为 true。
  * **Copy Requires Writer Permission（复制需要编辑权限）**：是否应对此共享网盘内的查看者（reader）和评论者（commenter）禁用复制、打印或下载文件的选项。
  * **Domain Users Only（仅限域用户）**：是否把对此共享网盘及其内部项目的访问，限制为网盘所属域内的用户。
  * **Drive Members Only（仅限网盘成员）**：是否把对此共享网盘内部项目的访问限制为其成员。

更多信息请参考 [Method: drives.insert | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/drives/insert) API 文档。

## 删除共享网盘（Delete a shared drive）

使用此操作删除共享网盘。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Shared Drive（共享网盘）**。
* **Operation（操作）**：选择 **Delete（删除）**。
* **Shared Drive（共享网盘）**：选择要删除的共享网盘。
  * 选择 **From list（从列表选择）** 可从下拉列表选标题，**By URL（按 URL）** 输入网盘网址，或 **By ID（按 ID）** 输入 `driveId`。
  * 可以在共享 Google Drive 的网址里找到 `driveId`：`https://drive.google.com/drive/u/0/folders/driveID`。

更多信息请参考 [Method: drives.delete | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/drives/delete) API 文档。

## 获取单个共享网盘（Get a shared drive）

使用此操作获取一个共享网盘。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Shared Drive（共享网盘）**。
* **Operation（操作）**：选择 **Get（获取）**。
* **Shared Drive（共享网盘）**：选择要获取的共享网盘。
  * 选择 **From list（从列表选择）** 可从下拉列表选标题，**By URL（按 URL）** 输入网盘网址，或 **By ID（按 ID）** 输入 `driveId`。
  * 可以在共享 Google Drive 的网址里找到 `driveId`：`https://drive.google.com/drive/u/0/folders/driveID`。

### 选项（Options）

* **Use Domain Admin Access（使用域管理员权限）**：是否以域管理员身份发出请求。开启后，如果请求者是共享网盘所属域的管理员，则会获得访问权限。

更多信息请参考 [Method: drives.get | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/drives/get) API 文档。

## 获取多个共享网盘（Get many shared drives）

使用此操作获取多个共享网盘。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Shared Drive（共享网盘）**。
* **Operation（操作）**：选择 **Get Many（获取多个）**。
* **Return All（返回全部）**：选择是返回全部结果，还是只返回指定数量以内的结果。
* **Limit（限制）**：当 **Return All（返回全部）** 关闭时，最多返回的条数。
* **Shared Drive（共享网盘）**：选择要获取的共享网盘。
  * 选择 **From list（从列表选择）** 可从下拉列表选标题，**By URL（按 URL）** 输入网盘网址，或 **By ID（按 ID）** 输入 `driveId`。
  * 可以在共享 Google Drive 的网址里找到 `driveId`：`https://drive.google.com/drive/u/0/folders/driveID`。

### 选项（Options）

* **Query（查询）**：用于搜索共享网盘的查询字符串。更多信息见 [Search for shared drives | Google Drive](https://developers.google.com/drive/api/guides/search-shareddrives)。
* **Use Domain Admin Access（使用域管理员权限）**：是否以域管理员身份发出请求。开启后，如果请求者是共享网盘所属域的管理员，则会获得访问权限。

更多信息请参考 [Method: drives.get | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/drives/get) API 文档。

## 更新共享网盘（Update a shared drive）

使用此操作更新共享网盘。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Drive 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Shared Drive（共享网盘）**。
* **Operation（操作）**：选择 **Update（更新）**。
* **Shared Drive（共享网盘）**：选择要更新的共享网盘。
  * 选择 **From list（从列表选择）** 可从下拉列表选网盘，**By URL（按 URL）** 输入网盘网址，或 **By ID（按 ID）** 输入 `driveId`。
  * 可以在共享 Google Drive 的网址里找到 `driveId`：`https://drive.google.com/drive/u/0/folders/driveID`。

### 更新字段（Update Fields）

* **Color RGB（颜色）**：此共享网盘的颜色，用 RGB 十六进制字符串表示。
* **Name（名称）**：共享网盘更新后的名称。
* **Restrictions（限制）**：此共享网盘的限制（更多细节见 [REST Resources: drives | Google Drive](https://developers.google.com/drive/api/reference/rest/v3/drives)）：
  * **Admin Managed Restrictions（管理员管理的限制）**：开启后，这里的限制会把此共享网盘内所有文件的同名限制字段强制设为 true。
  * **Copy Requires Writer Permission（复制需要编辑权限）**：是否应对此共享网盘内的查看者（reader）和评论者（commenter）禁用复制、打印或下载文件的选项。
  * **Domain Users Only（仅限域用户）**：是否把对此共享网盘及其内部项目的访问，限制为网盘所属域内的用户。
  * **Drive Members Only（仅限网盘成员）**：是否把对此共享网盘内部项目的访问限制为其成员。

更多信息请参考 [Method: drives.update | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/drives/update) API 文档。
