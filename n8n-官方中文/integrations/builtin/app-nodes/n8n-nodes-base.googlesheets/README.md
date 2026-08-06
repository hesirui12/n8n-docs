---
title: Google Sheets 节点
description: >-
  n8n 中 Google Sheets 节点的文档，一个工作流自动化平台。包含操作和配置的详细说明，以及示例和凭据信息的链接。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: n8n-nodes-base.googlesheets
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/index.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets'
layout:
  description:
    visible: false
---

# Google Sheets 节点

> 💡 **大白话**：Google Sheets 就是谷歌版「在线 Excel」。用这个节点，n8n 可以直接读写你的表格：新建/删除表格文件、往表里加行、改行、删行、清空数据。n8n 工作流里最常用的表格节点之一，比如把网页表单提交的数据自动写进表格。

使用 Google Sheets 节点自动化 Google Sheets 中的工作，并将 Google Sheets 与其他应用集成。n8n 内置支持大量 Google Sheets 功能，包括创建、更新、删除、追加、移除和获取文档。

本页列出了 Google Sheets 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何设置认证，请参考 [Google Sheets 凭据](../../credentials/google/README.md)。
{% endhint %}

## 支持的操作（Operations）

* **Document（文档，即整个表格文件）**
    * [**Create（创建）**](document-operations.md#create-a-spreadsheet) 一个电子表格。
	* [**Delete（删除）**](document-operations.md#delete-a-spreadsheet) 一个电子表格。
* **Sheet Within Document（表格文档内的工作表）**
	* [**Append or Update Row（追加或更新行）**](sheet-operations.md#append-or-update-row)：追加新行；如果已存在则更新该行。
	* [**Append Row（追加行）**](sheet-operations.md#append-row)：新建一行。
	* [**Clear（清空）**](sheet-operations.md#clear-a-sheet) 工作表的所有数据。
	* [**Create（创建）**](sheet-operations.md#create-a-new-sheet) 一个新工作表。
	* [**Delete（删除）**](sheet-operations.md#delete-a-sheet) 一个工作表。
	* [**Delete Rows or Columns（删除行或列）**](sheet-operations.md#delete-rows-or-columns)：从工作表中删除列和行。
	* [**Get Row(s)（获取行）**](sheet-operations.md#get-rows)：读取工作表中的所有行。
	* [**Update Row（更新行）**](sheet-operations.md#update-row)：更新工作表中的一行。

## 模板和示例（Templates and examples）

[浏览 n8n-nodes-base.googlesheets 集成模板](https://n8n.io/integrations/google-sheets) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Google Sheet's API documentation（Google Sheets API 文档）](https://developers.google.com/sheets/api)。

## 常见问题（Common issues）

如有常见问题或疑问以及建议的解决方案，请参考 [常见问题](common-issues.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
