---
title: Google Sheets 文档操作
description: >-
  n8n 中 Google Sheets 节点的「文档操作」文档，一个工作流自动化平台。包含操作和配置的详细说明，以及示例和凭据信息的链接。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Google Sheets 文档操作
originalFilePath: >-
  integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/document-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/document-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/document-operations
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

# 文档操作（Document operations）

> 💡 **大白话**：「文档」在 Google Sheets 里指的是整个表格文件（一个 .xlsx 那样的文件，里面可以有好几个工作表）。这一页就两个操作：新建整个表格文件、删除整个表格文件。想动表格里面的行和列，请看「Sheet Within Document」操作页。

使用此操作在 Google Sheets 中创建或删除一个 Google 电子表格。关于 Google Sheets 节点本身的更多信息，请参考 [Google Sheets](./README.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 创建电子表格（Create a spreadsheet）

使用此操作创建新的电子表格。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Sheets 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Document（文档）**。
* **Operation（操作）**：选择 **Create（创建）**。
* **Title（标题）**：输入要创建的新电子表格的标题。
* **Sheets（工作表）**：添加要在电子表格内创建的工作表的 **Title(s)（标题）**。

### 选项（Options）

* **Locale（区域/语言）**：输入电子表格的区域。这会影响格式细节，比如函数、日期和货币。使用以下格式之一：
  * `en`（639-1）
  * `fil`（639-2，如果不存在 639-1 格式）
  * `en_US`（ISO 语言和国家代码的组合）。
  * 语言和国家代码请参考 [ISO 639 语言代码列表](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) 和 [ISO 3166 国家代码列表](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)。注意，Google 并不支持所有区域/语言。
* **Recalculation Interval（重新计算间隔）**：输入电子表格函数的期望重新计算间隔。这会影响 `NOW`、`TODAY`、`RAND` 和 `RANDBETWEEN` 的更新频率。选择 **On Change（发生更改时）** 表示电子表格有任何变化就重新计算，**Minute（每分钟）** 表示每分钟重新计算，**Hour（每小时）** 表示每小时重新计算。更多信息请参考 [设置电子表格的位置和计算设置](https://support.google.com/docs/answer/58515)。

更多信息请参考 [Method: spreadsheets.create | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/create) API 文档。

## 删除电子表格（Delete a spreadsheet）

使用此操作删除已有的电子表格。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Sheets 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Document（文档）**。
* **Operation（操作）**：选择 **Delete（删除）**。
* **Document（文档）**：选择要删除的电子表格。
  * 选择 **From list（从列表选择）** 可从下拉列表选标题，**By URL（按 URL）** 输入电子表格网址，或 **By ID（按 ID）** 输入 `spreadsheetId`。
  * 可以在 Google Sheets 网址里找到 `spreadsheetId`：`https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`。

更多信息请参考 [Method: files.delete | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/delete) API 文档。
