---
title: 数据表节点表操作（Data Table node table operations）
description: >-
  数据表节点表操作的参考文档，包括创建、删除、列出和更新。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: 数据表节点表操作
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.datatable/tables.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.datatable/tables
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.datatable/tables
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话（这一页是讲什么的）**：Data Table 节点分「表操作」和「行操作」两大类。这一页讲**表操作**——也就是对「表」本身做管理：建新表、删表、列出所有表、改表名。表就像 Excel 里的「工作表」，行操作是往表里填数据，表操作是管理表本身。
{% endhint %}

使用表操作来创建、删除、列出和更新数据表。关于节点本身的更多信息，请参阅 [数据表节点](README.md) 文档。

## 创建数据表（Create a data table）

使用此操作创建一个新的数据表。

输入以下参数：

- **Resource（资源）：** 选择 **Table（表）**。
- **Operation（操作）：** 选择 **Create（创建）**。
- **Name（名称）：** 输入数据表的名称，或者用表达式定义。
- **Columns（列）：** 点击 **Add Column（添加列）** 来定义数据表各列的参数。你可以添加多个列。每一列包含：
    - **Name（名称）：** 设置列的名称，或者用表达式定义。
    - **Type（类型）：** 选择列的数据类型：**Boolean（布尔值）**、**Date（日期）**、**Number（数字）** 或 **String（字符串）**。

{% hint style="info" %}
**大白话（怎么建表）**：建表 = 给表起名 + 定义有哪些列。每列要选一个**数据类型**：文本类内容选 **String**，数字选 **Number**，真/假状态（如是否已付款）选 **Boolean**，日期时间选 **Date**。类型选对很重要——选错了，后面往这一列写数据时可能报错或转换异常。列可以先少建几个，以后不够可以再改（更新表只能改名字，列需要另外处理）。
{% endhint %}

### 创建数据表的选项（Create a data table options）

使用这些选项进一步细化操作行为：

- **Reuse Existing Tables（复用已有表）：** 启用后，如果已存在同名表，直接返回该表，而不抛出错误。

{% hint style="info" %}
**小白提示（什么时候用）**：如果你的工作流每次运行都会执行「建表」，但表可能早就建好了——打开这个选项，同名表就直接复用，不会因为「表已存在」报错中断。适合「确保表存在」的初始化场景。
{% endhint %}

## 删除数据表（Delete a data table）

使用此操作永久删除一个已有的数据表。此操作无法撤销。

输入以下参数：

- **Resource（资源）：** 选择 **Table（表）**。
- **Operation（操作）：** 选择 **Delete（删除）**。
- **Data table（数据表）：** 选择如何指定要删除的数据表：
    - **From list（从列表选择）：** 从所有数据表的下拉列表中选择该表。
    - **By Name（按名称）：** 输入你的数据表的名称。
    - **By ID（按 ID）：** 输入你的数据表的 ID。

{% hint style="warning" %}
**大白话（删除要谨慎）**：删除表会连表里的所有数据一起删掉，而且**无法恢复**。动手前先确认是不是真的不要这张表了（有需要的话先备份或导出数据）。
{% endhint %}

## 列出数据表（List data tables）

使用此操作列出已有的数据表。你可以返回所有表、返回达到指定上限的所有表，或者筛选要返回的表。

输入以下参数：

- **Resource（资源）：** 选择 **Table（表）**。
- **Operation（操作）：** 选择 **List（列出）**。
- **Return All（返回全部）：** 启用后返回所有匹配的表。或者，禁用并输入要返回的表数量 **Limit（上限）**，例如 `50`。

### 列出数据表的选项（List data tables options）

使用这些选项进一步细化操作行为：

- **Filter by Name（按名称筛选）：** 输入一个值或表达式，返回名称包含指定文本的数据表。匹配不区分大小写。
- **Sort Field（排序字段）：** 选择要对结果排序的字段。
- **Sort Direction（排序方向）：** 选择结果是**升序（Ascending）** 还是**降序（Descending）** 排序。

{% hint style="info" %}
**小白提示（什么时候用）**：建一个「表清单」给下游流程用，或者想确认项目里都有哪些表、表名是否规范。表多的时候可以用 **Filter by Name** 模糊搜索、用排序让结果更有条理。
{% endhint %}

## 更新数据表（Update a data table）

使用此操作更新一个已有数据表的名称。

输入以下参数：

- **Resource（资源）：** 选择 **Table（表）**。
- **Operation（操作）：** 选择 **Update（更新）**。
- **Data table（数据表）：** 选择如何指定要更新的数据表：
    - **From list（从列表选择）：** 从所有数据表的下拉列表中选择该表。
    - **By Name（按名称）：** 输入你的数据表的名称。
    - **By ID（按 ID）：** 输入你的数据表的 ID。
- **New name（新名称）：** 输入一个值或表达式，为数据表设置新名称。

{% hint style="info" %}
**大白话（更新能改什么）**：目前 Update 只支持改**表名**。想改列结构（加列、删列、改列类型）的话，官方建议直接管理列的方式处理（或用行操作配合），改名则用这个操作即可。
{% endhint %}
