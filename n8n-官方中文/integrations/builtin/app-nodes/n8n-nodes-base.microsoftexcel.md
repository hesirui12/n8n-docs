---
title: Microsoft Excel (OneDrive) 节点文档
description: >-
  学习如何在 n8n 中使用 Microsoft Excel (OneDrive) 节点。按照
  技术文档将 Microsoft Excel (OneDrive) 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Microsoft Excel (OneDrive) 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.microsoftexcel.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftexcel
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftexcel
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：这个节点让你在 n8n 里读写存在 OneDrive 上的 Excel 文件。能操作三类东西：表格（Table，Excel 里带格式的表格区域）、工作簿（Workbook，整个 Excel 文件）、工作表（Worksheet，一个 Excel 文件里的一页）。常见场景：网站有人填表单 → 把数据自动追加到 OneDrive 的 Excel 表格里。
{% endhint %}

# Microsoft Excel (OneDrive) 节点

使用 Microsoft Excel (OneDrive) 节点来自动化你在 Microsoft Excel 中的工作，并把它与其它应用集成。n8n 内置支持 Microsoft Excel 的大量功能，包括添加和获取表格数据、工作簿列表，以及获取工作表。该节点操作的是存储在 OneDrive 中的工作簿。

在本页你可以看到 Microsoft Excel (OneDrive) 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

此节点的 **Authentication**（认证方式）下拉框提供三个选项：

- **Excel OAuth2**：专用于 Microsoft Excel 的 OAuth2 凭证（默认）。
- **Microsoft OAuth2 (Graph)**：通用的 Microsoft Graph 凭证，可以在其它 Microsoft 节点之间复用。选择此选项时，请确保给凭证授予此节点所需的权限范围（scope），例如 `Files.ReadWrite`，或者如果管理员已同意的是 `Files.ReadWrite.All` 这种更高级别的权限，就填那个。
- **Microsoft Entra Service Principal (App-Only)**：通过 Microsoft Entra 应用注册实现仅应用访问（没有登录用户），从节点第 2 版开始可用。设置方法和所需的应用权限请参考 [Microsoft Entra Service Principal 凭证](../credentials/microsoftentraserviceprincipal.md)。

关于如何设置认证，请参考 [Microsoft 凭证](../credentials/microsoft.md)。
{% endhint %}

{% hint style="info" %}
**政府云支持**

如果你使用的是政府云租户（US Government 美国政府云、US Government DOD 美国国防部云或 China 中国云），请务必在 Microsoft 凭证配置中，选择对应的 **Microsoft Graph API Base URL**（Microsoft Graph API 基础 URL）。
{% endhint %}

（官方此处嵌入了通用资源组件，此处从略。）

## 操作

* Table（表格）
    * Adds rows to the end of the table（在表格末尾追加行）
    * Retrieve a list of table columns（获取表格的列列表）
    * Retrieve a list of table rows（获取表格的行列表）
    * Looks for a specific column value and then returns the matching row（查找指定列的值，并返回匹配的行）
* Workbook（工作簿）
    * Adds a new worksheet to the workbook.（给工作簿添加新工作表）
    * Get data of all workbooks（获取全部工作簿的数据）
* Worksheet（工作表）
    * Get all worksheets（获取全部工作表）
    * Get worksheet content（获取工作表内容）

## 模板与示例

[浏览 Microsoft Excel (OneDrive) 节点的官方集成模板](https://n8n.io/integrations/microsoft-excel)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
