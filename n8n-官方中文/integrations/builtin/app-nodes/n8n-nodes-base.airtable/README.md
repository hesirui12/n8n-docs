---
title: Airtable 节点文档
description: >-
  学习如何在 n8n 中使用 Airtable 节点。按照技术文档将 Airtable
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: n8n-nodes-base.airtable
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.airtable/index.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.airtable'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.airtable'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Airtable 就是「长得像表格的数据库」，小白也能用。这个节点是 n8n 里最常用的节点之一：往表里追加数据、读数据、改数据、删数据、列数据，全都能做。比如：网店订单进来 → 自动写入 Airtable 表格；或者每隔一段时间把表格里新加的行同步到别处。想对某条记录操作，先要拿到它的 Record ID（记录编号），下面有详细讲。
{% endhint %}

# Airtable 节点

使用 Airtable 节点来自动化你在 Airtable 中的工作，并把它与其它应用集成。n8n 内置支持 Airtable 的大量功能，包括创建、读取、列出、更新和删除表格数据。

在本页你可以看到 Airtable 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Airtable 凭证](../../credentials/airtable.md)。
{% endhint %}

## 操作

* Append the data to a table（向表中追加数据）
* Delete data from a table（从表中删除数据）
* List data from a table（列出表中的数据）
* Read data from a table（读取表中的数据）
* Update data in a table（更新表中的数据）

## 模板与示例

[浏览 n8n-nodes-base.airtable 的官方集成模板](https://n8n.io/integrations/airtable)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

n8n 还提供了 Airtable 的触发器节点（监听表格变化的节点），文档见[这里](../../trigger-nodes/n8n-nodes-base.airtabletrigger.md)。

关于该服务的更多信息，请参考 [Airtable 官方文档](https://airtable.com/developers/web/api/introduction)。

（官方此处嵌入了通用资源组件，此处从略。）

## 节点参考

### 获取 Record ID（记录编号）

想读取某条特定记录的数据，你需要它的 Record ID。有两种方式可以拿到：

### 在 Airtable 里创建 Record ID 列

想在你的表格里创建一列 `Record ID`，参考这篇[文章](https://support.airtable.com/docs/finding-airtable-ids)。建好之后，就可以在 Airtable 节点里使用这个 Record ID 了。

### 使用 List 操作

想拿到某条记录的 Record ID，也可以用 Airtable 节点的 **List** 操作。这个操作返回结果时会把 Record ID 和字段值一起返回。然后你就可以在 Airtable 节点里使用这个 Record ID 了。

### 使用 List 操作时筛选记录

想对 Airtable 里的记录做筛选，用 **Filter By Formula（按公式筛选）** 选项。例如：想返回所有属于组织 `n8n` 的用户，按下面步骤操作：

1. 在 **Operation** 下拉框中选择 "List"。
2. 在 **Base ID** 和 **Table** 字段里分别填写 base ID（数据库编号）和表名。
3. 点击 **Add Option**，从下拉框中选择 'Filter By Formula'。
4. 在 **Filter By Formula** 字段中输入公式：`{Organization}='n8n'`。

同理，如果想返回所有「不属于」组织 `n8n` 的用户，用公式：`NOT({Organization}='n8n')`。

更多公式用法请参考 Airtable 的[公式字段参考文档](https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference)。

## 常见问题

关于常见错误、问题及解决步骤，请参考[常见问题](common-issues.md)。
