---
title: Grist 节点文档
description: 学习如何在 n8n 中使用 Grist 节点。按照技术文档将 Grist 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Grist 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.grist.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.grist'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.grist'
layout:
  description:
    visible: false
---

# Grist 节点

> 💡 **大白话**：Grist 是一款开源的「电子表格数据库」，像 Excel 和数据库的结合体，适合团队协作管理数据。用这个节点，n8n 可以读写表格里的行。注意：更新/删除某条记录时，你需要拿到它的 Row ID（行 ID），本文后面有专门讲解怎么拿。

使用 Grist 节点自动化 Grist 中的工作，并将 Grist 与其他应用集成。n8n 内置支持大量 Grist 功能，包括创建、更新、删除和读取表格中的行。

本页列出了 Grist 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何设置认证，请参考 [Grist 凭据](../credentials/grist.md)。
{% endhint %}

## 支持的操作（Operations）

* Create rows in a table（在表格中创建行）
* Delete rows from a table（从表格中删除行）
* Read rows from a table（从表格中读取行）
* Update rows in a table（更新表格中的行）

## 模板和示例（Templates and examples）

[浏览 Grist 节点文档集成模板](https://n8n.io/integrations/grist) 或 [搜索所有模板](https://n8n.io/workflows/)

## 获取行 ID（Get the Row ID）

要更新或删除某条特定记录，你需要它的 Row ID（行 ID）。有两种方法可以拿到 Row ID：

**在 Grist 里创建 Row ID 列**

在 Grist 表格中新建一列，公式填 `$id`。

**使用 Get All（获取全部）操作**

**Get All（获取全部）** 操作会返回每条记录的 Row ID 以及各个字段。

你可以用表达式 `{{$("GristNodeName").item.json.id}}` 拿到它。

## 使用 Get All 操作时筛选记录（Filter records when using the Get All operation）

- 选择 **Add Option（添加选项）**，然后从下拉列表中选择 **Filter（筛选）**。
- 你可以为任意数量的列添加筛选条件。结果只会包含与所有列都匹配的记录。
- 每一列都可以输入任意数量的值，用逗号分隔。结果会包含该列匹配其中任何一个值的记录。
