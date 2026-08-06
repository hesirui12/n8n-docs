---
title: Microsoft Excel (SharePoint) 节点文档
description: >-
  学习如何在 n8n 中使用 Microsoft Excel (SharePoint) 节点。按照
  技术文档将 Microsoft Excel (SharePoint) 节点集成到你的工作流中。
contentType:
  - integration
  - reference
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：这个节点专门读写存在 SharePoint 文档库里的 Excel 文件（包括藏在 Teams 团队站点后面的文件）。它跟「Microsoft Excel (OneDrive)」节点是两兄弟：OneDrive 版管个人网盘里的 Excel，这个版本管 SharePoint 公司共享库里的 Excel。别人发你的 Excel 链接如果指向 SharePoint 站点，就用这个节点。它还支持「仅应用」登录，适合没人值守的自动工作流。
{% endhint %}

# Microsoft Excel (SharePoint) 节点

使用 Microsoft Excel (SharePoint) 节点来读写存储在 SharePoint 文档库中的 Excel 工作簿，包括通过 Microsoft Teams 站点共享的工作簿。

在本页你可以看到 Microsoft Excel (SharePoint) 节点支持的全部操作列表、选择工作簿的指引，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

该节点提供两种登录方式，通过 **Authentication**（认证方式）下拉框选择：

* **Microsoft OAuth2 (Graph)**：以个人身份登录，使用通用的 [Microsoft OAuth2 凭证](../credentials/microsoft.md)。在凭证的 **Scope**（权限范围）字段中填入此节点需要的范围：`Sites.Read.All`（浏览和读取）、`Sites.ReadWrite.All`（写入）。同时要包含 `openid offline_access`，这样凭证才能刷新令牌。例如，要执行该节点的全部操作，可以填：`openid offline_access Sites.ReadWrite.All`。
* **Microsoft Entra Service Principal (App-Only)**：以应用身份登录，适用于没有用户在场的无人值守工作流，使用 [Microsoft Entra Service Principal 凭证](../credentials/microsoftentraserviceprincipal.md)。给应用注册授予 `Sites.Read.All`（读取）和 `Sites.ReadWrite.All`（写入），并需要管理员同意。如果想把应用限制在特定站点，可以改为给每个站点授予 `Sites.Selected`。

这是该节点唯一接受的两种凭证。节点专属的 **Microsoft Excel** 和 **Microsoft SharePoint** 凭证在这里不适用：Excel 凭证不含 SharePoint（`Sites.*`）范围，而 SharePoint 凭证签发的是 SharePoint REST API 的令牌，不是本节点所用的 Microsoft Graph 令牌。
{% endhint %}

## 该用哪个 Excel 节点？

n8n 有两个 Excel 节点：

* **Microsoft Excel (OneDrive)**：用于存储在个人或企业 OneDrive 中的工作簿。
* **Microsoft Excel (SharePoint)**（本节点）：用于存储在 SharePoint 文档库中的工作簿，包括位于 Teams 站点后面的文件。本节点还支持仅应用登录，因此适合无人值守的工作流。

如果有人分享给你一个工作簿链接，而链接指向的是 SharePoint 站点，就用这个节点。

## 选择工作簿

有三种方式让节点指向一个工作簿：

* **粘贴工作簿地址**（默认方式）：从 SharePoint 或 Excel 复制链接（**Share（共享）** > **Copy link（复制链接）**），然后粘贴到 **Workbook**（工作簿）字段。直接从复制按钮拿到的链接就可以直接用，不需要先选择站点或文档库。
* **从列表中选择**：先选 **Site**（站点）和 **Document Library**（文档库），再按名称搜索工作簿。
* **按 ID**：直接粘贴工作簿的 ID。

## 操作

* **Sheet（工作表）**：
  * Append（追加）：在表格末尾追加行。
  * Append or Update（追加或更新）：追加新行；如果行已存在则更新当前行。
  * Clear（清空）：清空整个工作表或某个区域。
  * Delete（删除）：删除工作表。
  * Get Many（获取多个）：获取工作簿的工作表列表。
  * Get Rows（获取行）：从工作表的某个区域或已用区域读取行。
  * Update（更新）：按某个列的值更新匹配的行。
* **Table（表格）**：
  * Append（追加）：在表格末尾追加行。
  * Convert to Range（转换为区域）：把表格转换成普通单元格区域。
  * Create（创建）：从单元格区域创建表格。
  * Delete（删除）：删除表格。
  * Get Columns（获取列）：获取表格的列列表。
  * Get Many（获取多个）：获取工作簿的表格列表。
  * Get Rows（获取行）：获取表格的行列表。
  * Lookup（查找）：查找指定列的值，然后返回匹配的行。
* **Workbook（工作簿）**：
  * Add Sheet（添加工作表）：给工作簿添加新工作表。
  * Delete（删除）：删除工作簿。
  * Get Many（获取多个）：获取文档库的工作簿列表。

更多操作正在开发中。此页面会随着新功能上线持续更新。

## 模板与示例

[搜索全部模板](https://n8n.io/workflows/)，查找使用此节点的示例。

## 相关资源

关于该服务的更多信息，请参考 [Microsoft Excel Graph API 官方文档](https://learn.microsoft.com/en-us/graph/api/resources/excel)。
