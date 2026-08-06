---
title: Google Sheets 工作表操作（Sheet Within Document）
description: >-
  n8n 中 Google Sheets 节点的「工作表操作」文档，一个工作流自动化平台。包含操作和配置的详细说明，以及示例和凭据信息的链接。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Google Sheets 工作表操作（Sheet Within Document）
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/sheet-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/sheet-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/sheet-operations
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

# 工作表操作（Sheet Within Document operations）

> 💡 **大白话**：这一页是 Google Sheets 节点的「重头戏」：在表格文件里操作「工作表」（就是表格底部的那些标签页 Sheet1、Sheet2）。能追加行、更新行、清空、新建、删除、删行列、读数据。注意一个关键区别：**Append or Update Row** 是「有就更新、没有就新增」，**Update Row** 只更新已有行。

使用此操作在 Google Sheets 的电子表格中创建、更新、清空或删除工作表。关于 Google Sheets 节点本身的更多信息，请参考 [Google Sheets](./README.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 追加或更新行（Append or Update Row）

使用此操作更新已有行；如果在工作表中找不到匹配的记录，就在数据末尾添加新行。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Sheets 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Sheet Within Document（表格文档内的工作表）**。
* **Operation（操作）**：选择 **Append or Update Row（追加或更新行）**。
* **Document（文档）**：选择包含你想要追加或更新行的工作表的电子表格。
  * 选择 **From list（从列表选择）** 可从下拉列表选电子表格标题，**By URL（按 URL）** 输入电子表格网址，或 **By ID（按 ID）** 输入 `spreadsheetId`。
  * 可以在 Google Sheets 网址里找到 `spreadsheetId`：`https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`。
* **Sheet（工作表）**：选择你想要追加或更新行的工作表。
  * 选择 **From list（从列表选择）** 可从下拉列表选工作表标题，**By URL（按 URL）** 输入工作表网址，**By ID（按 ID）** 输入 `sheetId`，或 **By Name（按名称）** 输入工作表标题。
  * 可以在 Google Sheets 网址里找到 `sheetId`：`https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`。
* **Mapping Column Mode（列映射模式）**：
  * **Map Each Column Manually（手动逐列映射）**：为每一列输入 **Values to Send（要发送的值）**。
  * **Map Automatically（自动映射）**：n8n 会自动查找与 Google Sheets 中列匹配的传入数据。在这种模式下，请确保传入数据的字段与 Google Sheets 中的列一致。（如有需要，可在此节点前使用 [Edit Fields（编辑字段）](../../core-nodes/n8n-nodes-base.set.md) 节点修改字段。）
  * **Nothing（不映射）**：不映射任何数据。

### 选项（Options）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/5qCFLvqGg2hlBEeEqCwp/" %}

更多信息请参考 [Method: spreadsheets.values.update | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/update) API 文档。

## 追加行（Append Row）

使用此操作在工作表的数据末尾追加新行。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Sheets 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Sheet Within Document（表格文档内的工作表）**。
* **Operation（操作）**：选择 **Append Row（追加行）**。
* **Document（文档）**：选择包含你想要追加行的工作表的电子表格。
  * 选择 **From list（从列表选择）** 可从下拉列表选电子表格标题，**By URL（按 URL）** 输入电子表格网址，或 **By ID（按 ID）** 输入 `spreadsheetId`。
  * 可以在 Google Sheets 网址里找到 `spreadsheetId`：`https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`。
* **Sheet（工作表）**：选择你想要追加行的工作表。
  * 选择 **From list（从列表选择）** 可从下拉列表选工作表标题，**By URL（按 URL）** 输入工作表网址，**By ID（按 ID）** 输入 `sheetId`，或 **By Name（按名称）** 输入工作表标题。
  * 可以在 Google Sheets 网址里找到 `sheetId`：`https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`。
* **Mapping Column Mode（列映射模式）**：
  * **Map Each Column Manually（手动逐列映射）**：在查找要更新的行时选择 **Column to Match On（匹配列）**。为每一列输入 **Values to Send（要发送的值）**。
  * **Map Automatically（自动映射）**：n8n 会自动查找与 Google Sheets 中列匹配的传入数据。在这种模式下，请确保传入数据的字段与 Google Sheets 中的列一致。（如有需要，可在此节点前使用 [Edit Fields（编辑字段）](../../core-nodes/n8n-nodes-base.set.md) 节点修改字段。）
  * **Nothing（不映射）**：不映射任何数据。

### 选项（Options）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/5qCFLvqGg2hlBEeEqCwp/" %}

更多信息请参考 [Method: spreadsheets.values.append | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append) API 文档。

## 清空工作表（Clear a sheet）

使用此操作清空工作表中的所有数据。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Sheets 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Sheet Within Document（表格文档内的工作表）**。
* **Operation（操作）**：选择 **Clear（清空）**。
* **Document（文档）**：选择包含你想要清空数据的工作表的电子表格。
  * 选择 **From list（从列表选择）** 可从下拉列表选电子表格标题，**By URL（按 URL）** 输入电子表格网址，或 **By ID（按 ID）** 输入 `spreadsheetId`。
  * 可以在 Google Sheets 网址里找到 `spreadsheetId`：`https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`。
* **Sheet（工作表）**：选择你想要清空数据的工作表。
  * 选择 **From list（从列表选择）** 可从下拉列表选工作表标题，**By URL（按 URL）** 输入工作表网址，**By ID（按 ID）** 输入 `sheetId`，或 **By Name（按名称）** 输入工作表标题。
  * 可以在 Google Sheets 网址里找到 `sheetId`：`https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`。
* **Clear（清空范围）**：选择要清空工作表里的什么数据。
  * **Whole Sheet（整个工作表）**：清空整个工作表的数据。开启 **Keep First Row（保留第一行）** 可保留工作表的第一行。
  * **Specific Rows（指定行）**：清空指定行的数据。还需填写：
    * **Start Row Number（起始行号）**：输入要清空的第一行行号。
    * **Number of Rows to Delete（要删除的行数）**：输入要清空的行数。`1` 只清空 **Start Row Number（起始行号）** 所在行。
  * **Specific Columns（指定列）**：清空指定列的数据。还需填写：
    * **Start Column（起始列）**：用字母记号输入要清空的第一列。
    * **Number of Columns to Delete（要删除的列数）**：输入要清空的列数。`1` 只清空 **Start Column（起始列）**。
  * **Specific Range（指定区域）**：输入要清空数据的表格区域，使用 [A1 记号](https://developers.google.com/sheets/api/guides/concepts#cell)。

更多信息请参考 [Method: spreadsheets.values.clear | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/clear) API 文档。

## 新建工作表（Create a new sheet）

使用此操作创建新的工作表。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Sheets 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Sheet Within Document（表格文档内的工作表）**。
* **Operation（操作）**：选择 **Create（创建）**。
* **Document（文档）**：选择要在其中创建新工作表的电子表格。
  * 选择 **From list（从列表选择）** 可从下拉列表选电子表格标题，**By URL（按 URL）** 输入电子表格网址，或 **By ID（按 ID）** 输入 `spreadsheetId`。
  * 可以在 Google Sheets 网址里找到 `spreadsheetId`：`https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`。
* **Title（标题）**：输入新工作表的标题。

### 选项（Options）

* **Hidden（隐藏）**：开启此选项可在界面中隐藏该工作表。
* **Right To Left（从右到左）**：开启此选项可使用 RTL（从右到左）工作表，而不是 LTR（从左到右）工作表。
* **Sheet ID（工作表 ID）**：输入工作表的 ID。
  * 可以在 Google Sheets 网址里找到 `sheetId`：`https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`
* **Sheet Index（工作表索引/位置）**：默认情况下，新工作表是电子表格中的最后一个。要覆盖此行为，输入你希望新工作表使用的索引。在给定索引处添加工作表时，Google 会增加其后所有工作表的索引。更多信息请参考 [Sheets | SheetProperties](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/sheets#SheetProperties) 文档。
* **Tab Color（标签页颜色）**：输入十六进制颜色代码，或使用取色器设置界面中标签页的颜色。

更多信息请参考 [Method: spreadsheets.batchUpdate | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) API 文档。

## 删除工作表（Delete a sheet）

使用此操作永久删除工作表。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Sheets 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Sheet Within Document（表格文档内的工作表）**。
* **Operation（操作）**：选择 **Delete（删除）**。
* **Document（文档）**：选择包含你想要删除的工作表的电子表格。
  * 选择 **From list（从列表选择）** 可从下拉列表选电子表格标题，**By URL（按 URL）** 输入电子表格网址，或 **By ID（按 ID）** 输入 `spreadsheetId`。
  * 可以在 Google Sheets 网址里找到 `spreadsheetId`：`https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`。
* **Sheet（工作表）**：选择要删除的工作表。
  * 选择 **From list（从列表选择）** 可从下拉列表选工作表标题，**By URL（按 URL）** 输入工作表网址，**By ID（按 ID）** 输入 `sheetId`，或 **By Name（按名称）** 输入工作表名称。
  * 可以在 Google Sheets 网址里找到 `sheetId`：`https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`。

更多信息请参考 [Method: spreadsheets.batchUpdate | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) API 文档。

## 删除行或列（Delete Rows or Columns）

使用此操作删除工作表中的行或列。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Sheets 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Sheet Within Document（表格文档内的工作表）**。
* **Operation（操作）**：选择 **Delete Rows or Columns（删除行或列）**。
* **Document（文档）**：选择包含你想要删除行或列的工作表的电子表格。
  * 选择 **From list（从列表选择）** 可从下拉列表选电子表格标题，**By URL（按 URL）** 输入电子表格网址，或 **By ID（按 ID）** 输入 `spreadsheetId`。
  * 可以在 Google Sheets 网址里找到 `spreadsheetId`：`https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`。
* **Sheet（工作表）**：选择你想要删除行或列的工作表。
  * 选择 **From list（从列表选择）** 可从下拉列表选工作表标题，**By URL（按 URL）** 输入工作表网址，**By ID（按 ID）** 输入 `sheetId`，或 **By Name（按名称）** 输入工作表名称。
  * 可以在 Google Sheets 网址里找到 `sheetId`：`https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`。
* **Start Row Number（起始行号）** 或 **Start Column（起始列）**：输入要开始删除的行号或列字母。
* **Number of Rows to Delete（要删除的行数）** 或 **Number of Columns to delete（要删除的列数）**：输入要删除的行数或列数。

更多信息请参考 [Method: spreadsheets.batchUpdate | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) API 文档。

## 获取行（Get Row(s)）

使用此操作从工作表中读取一行或多行。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Sheets 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Sheet Within Document（表格文档内的工作表）**。
* **Operation（操作）**：选择 **Get Row(s)（获取行）**。
* **Document（文档）**：选择包含你想要获取行的工作表的电子表格。
  * 选择 **From list（从列表选择）** 可从下拉列表选电子表格标题，**By URL（按 URL）** 输入电子表格网址，或 **By ID（按 ID）** 输入 `spreadsheetId`。
  * 可以在 Google Sheets 网址里找到 `spreadsheetId`：`https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`。
* **Sheet（工作表）**：选择你想要读取行的工作表。
  * 选择 **From list（从列表选择）** 可从下拉列表选工作表标题，**By URL（按 URL）** 输入工作表网址，**By ID（按 ID）** 输入 `sheetId`，或 **By Name（按名称）** 输入工作表名称。
  * 可以在 Google Sheets 网址里找到 `sheetId`：`https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`。
* **Filters（筛选）**：默认情况下，节点返回工作表中的所有行。设置筛选条件可返回有限的结果集：
  * **Column（列）**：选择工作表中要搜索的列。
  * **Value（值）**：输入要搜索的单元格值。你可以把输入数据参数拖到这里。如果筛选条件匹配多行，n8n 只返回第一个结果。如果你想要所有匹配的行：
    1. 在 **Options（选项）** 下，选择 **Add Option（添加选项）** > **When Filter Has Multiple Matches（当筛选有多个匹配时）**。
    2. 把 **When Filter Has Multiple Matches（当筛选有多个匹配时）** 改为 **Return All Matches（返回所有匹配）**。

### 选项（Options）

* **Data Location on Sheet（工作表中的数据位置）**：使用此选项指定数据区域。默认情况下，n8n 会自动检测区域直到工作表的最后一行。
* **Output Formatting（输出格式）**：使用此选项选择 n8n 如何格式化 Google Sheets 返回的数据。
  * **General Formatting（常规格式）**：
    * **Values (unformatted)（值（未格式化））**（默认）：n8n 会去掉货币符号和其他特殊格式。数据类型保持为数字。
    * **Values (formatted)（值（已格式化））**：n8n 按 Google Sheets 中显示的样子返回数值（例如保留逗号或货币符号），并把数据类型从数字转成字符串。
    * **Formulas（公式）**：n8n 返回公式本身，不计算公式的结果。例如，如果单元格 B2 有公式 `=A2`，n8n 会把 B2 的值作为文本 `=A2` 返回。更多信息请参考 [About date & time values | Google Sheets](https://developers.google.com/sheets/api/guides/formats#about_date_time_values)。
  * **Date Formatting（日期格式）**：更多信息请参考 [DateTimeRenderOption | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/DateTimeRenderOption)。
    * **Formatted Text（格式化文本）**（默认）：按 Google Sheets 中显示的样子返回，取决于电子表格的区域设置。例如 `01/01/2024`。
    * **Serial Number（序列号）**：自 1899 年 12 月 30 日以来的天数。
  * **When Filter Has Multiple Matches（当筛选有多个匹配时）**：设置为 **Return All Matches（返回所有匹配）** 可获取多个匹配结果。默认只返回第一个结果。

{% hint style="info" %}
**第一行（First row）**

n8n 把 Google Sheet 的第一行当作表头行，读取所有行时不会返回它。如果你想读取第一行，请使用 **Options（选项）** 里的 **Data Location on Sheet（工作表中的数据位置）**。
{% endhint %}

更多信息请参考 [Method: spreadsheets.batchUpdate | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) API 文档。

## 更新行（Update Row）

使用此操作更新工作表中的已有行。此操作只更新已有行。如果要在工作表中找不到匹配记录时追加行，请改用 **Append or Update Row（追加或更新行）** 操作。

填写以下参数：

* **Credential to connect with（连接凭据）**：创建或选择一个已有的 [Google Sheets 凭据](../../credentials/google/README.md)。
* **Resource（资源）**：选择 **Sheet Within Document（表格文档内的工作表）**。
* **Operation（操作）**：选择 **Update Row（更新行）**。
* **Document（文档）**：选择包含你想要更新的工作表的电子表格。
  * 选择 **From list（从列表选择）** 可从下拉列表选电子表格标题，**By URL（按 URL）** 输入电子表格网址，或 **By ID（按 ID）** 输入 `spreadsheetId`。
  * 可以在 Google Sheets 网址里找到 `spreadsheetId`：`https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`。
* **Sheet（工作表）**：选择你想要更新的工作表。
  * 选择 **From list（从列表选择）** 可从下拉列表选工作表标题，**By URL（按 URL）** 输入工作表网址，**By ID（按 ID）** 输入 `sheetId`，或 **By Name（按名称）** 输入工作表标题。
  * 可以在 Google Sheets 网址里找到 `sheetId`：`https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`。
* **Mapping Column Mode（列映射模式）**：
  * **Map Each Column Manually（手动逐列映射）**：为每一列输入 **Values to Send（要发送的值）**。
  * **Map Automatically（自动映射）**：n8n 会自动查找与 Google Sheets 中列匹配的传入数据。在这种模式下，请确保传入数据的字段与 Google Sheets 中的列一致。（如有需要，可在此节点前使用 [Edit Fields（编辑字段）](../../core-nodes/n8n-nodes-base.set.md) 节点修改字段。）
  * **Nothing（不映射）**：不映射任何数据。

### 选项（Options）

* **Cell Format（单元格格式）**：使用此选项选择如何在单元格中格式化数据。更多信息请参考 [Google Sheets API | CellFormat](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/cells#CellFormat)。
  * **Let Google Sheets format（让 Google Sheets 格式化）**（默认）：n8n 按照 Google Sheets 的默认设置格式化单元格中的文本和数字。
  * **Let n8n format（让 n8n 格式化）**：工作表中的新单元格将使用与 n8n 提供的输入数据相同的数据类型。
* **Data Location on Sheet（工作表中的数据位置）**：当你需要指定工作表中数据区域的位置时使用此选项。
  * **Header Row（表头行）**：指定包含列标题的行索引。
  * **First Data Row（第一数据行）**：指定实际数据开始的行索引。

更多信息请参考 [Method: spreadsheets.batchUpdate | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) API 文档。
