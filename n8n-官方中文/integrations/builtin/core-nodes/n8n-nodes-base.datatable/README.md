---
title: 数据表（Data table）
description: >-
  n8n 工作流自动化平台中「数据表」节点的文档。包含用法说明和示例链接。
contentType:
  - integration
  - reference
priority: critical
tags:
  - data table node
  - data
hide:
  - tags
search:
  boost: 1.5
nodeTitle: n8n-nodes-base.datatable
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.datatable/index.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.datatable'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.datatable'
layout:
  description:
    visible: false
---

# 数据表（Data table）

{% hint style="info" %}
**大白话（这个节点是干什么的）**：n8n 的 Data Table 节点让你能在 n8n 内部直接建「数据库表」——就像 Excel 表格一样：定义列（列名、类型），往里插数据（行），然后跨工作流查询、修改这些数据。以前你想存点中间数据，要么接个数据库（MySQL、PostgreSQL），要么靠文件；现在直接内建，简单场景不用再折腾外部数据库。数据表功能在项目（Project）里是全局共享的，同一个项目下的多个工作流都能读写同一批表。
{% endhint %}

使用「数据表」（Data Table）节点来创建和管理内部数据表。数据表允许你直接在 n8n 内部存储结构化数据，并在多个工作流之间使用。

你可以使用「数据表」节点来：

- 创建、列出和管理数据表
- 在数据表中插入、更新、删除和 upsert（有则更新、无则插入）行
- 使用匹配条件查询和检索行

{% hint style="info" %}
**使用数据表（Working with data tables）**

除了在工作流中使用「数据表」节点，你还可以从项目 **Overview（概览）** 中的 **Data Tables（数据表）** 标签页手动查看和管理数据表。

关于在此标签页中使用数据表的信息，以及何时使用数据表及其限制的指导，请参阅[数据表（Data tables）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/data-tables)。

{% hint style="info" %}
**大白话（什么时候该用它）**：如果只是「工作流运行时临时存点数据、跨流程共享」，或者数据量不大、不想单独维护一个数据库，用 Data Table 很方便。但要注意：它比较适合轻量场景，不适合海量数据或复杂查询——那种情况还是用专门的数据库节点更靠谱。
{% endhint %}
{% endhint %}

## 资源（Resources）

「数据表」节点支持以下资源：

- **数据表（Data Table）**：创建、列出、更新和删除表。
- **行（Row）**：在表内插入、检索、更新、删除和 upsert（有则更新、无则插入）行。

### 操作（Operations）

可用操作见下方。关于不同类型操作的参数的详细信息，请参阅 [表操作（Table operations）](tables.md) 和 [行操作（Row operations）](rows.md) 页面。

* **行（Rows）**
    * [**删除（Delete）：**](rows.md#delete-row) 删除一行或多行。
    * [**获取（Get）：**](rows.md#get-row) 根据定义的过滤器从表中获取一行或多行。
    * [**如果行存在（If Row Exists）：**](rows.md#if-row-exists) 指定一组条件，用来匹配数据表中存在的输入数据。
    * [**如果行不存在（If Row Does Not Exist）：**](rows.md#if-row-does-not-exist) 指定一组条件，用来匹配数据表中不存在的输入数据。
    * [**插入（Insert）：**](rows.md#insert-row) 向现有表中插入行。
    * [**更新（Update）：**](rows.md#update-row) 更新一行或多行。
    * [**Upsert（有则更新、无则插入）：**](rows.md#upsert-row) 插入一行或多行。如果行已存在则更新；否则创建新行。

* **表（Tables）**
    * [**创建（Create）：**](tables.md#create-a-data-table) 创建一个新的数据表。
    * [**删除（Delete）：**](tables.md#delete-a-data-table) 删除一个已有的数据表。
    * [**列出（List）：**](tables.md#list-data-tables) 列出已有的数据表。
    * [**更新（Update）：**](tables.md#update-a-data-table) 更新一个已有的数据表。

## 相关资源（Related resources）

[数据表（Data tables）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/data-tables) 解释了如何创建和管理数据表。
