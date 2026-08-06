---
title: 聚合 Aggregate
description: >-
  n8n 工作流自动化平台中「聚合 Aggregate」节点的中文文档。
  包含使用方法说明和示例链接。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Aggregate
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.aggregate.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.aggregate'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.aggregate'
layout:
  description:
    visible: false
---

# 聚合 Aggregate

> **大白话**：这个节点是「把多行合并成一行」的工具。它把分散的一个个数据项（或其中一部分字段）收集起来，打包成一个数组放进一条数据里。比如你有 10 条订单记录，想把它变成一个「订单列表」字段塞进一条数据里，就用它。

使用「聚合 Aggregate」节点把分散的数据项（或其中的一部分）收集起来，组合成单独的数据项。

## 节点参数

要开始使用这个节点，先选择你想使用的**聚合方式 Aggregate**：

* [**单独字段 Individual Fields**](#individual-fields)：分别聚合各个字段。
* [**所有数据项数据 All Item Data**](#all-item-data)：把所有的数据项数据聚合到一个列表中。

### 单独字段 Individual Fields

* **输入字段名 Input Field Name**：输入输入数据中要聚合在一起的字段名称。
* **重命名字段 Rename Field**：这个开关控制是否在聚合后的输出数据中给字段起一个不同的名字。打开它来添加一个不同的字段名。如果你聚合多个字段，则必须提供新的输出字段名。你不能让多个字段名留空。
	* **输出字段名 Output Field Name**：当你打开 **重命名字段 Rename Field** 时会出现这个字段。输入聚合输出数据的字段名。

（白话解释：比如 10 条数据的 `price` 字段，聚合后变成 `[10, 20, 30, ...]` 这样一个数组；如果开了重命名，可以把输出字段改成 `prices`。）

更多配置选项请参考 [节点选项](#node-options)。

### 所有数据项数据 All Item Data

* **输出字段 Put Output in Field**：输入要输出数据的字段名。
* **包含 Include**：选择输出中要包含哪些字段。选项如下：
	* **所有字段 All fields**：输出包含所有字段的数据，没有更多参数。
	* **指定字段 Specified Fields**：如果选择这个选项，在 **要包含的字段 Fields To Include** 参数中输入逗号分隔的字段列表。输出将只包含这个列表中的字段。
	* **除…外的所有字段 All Fields Except**：如果选择这个选项，在 **要排除的字段 Fields To Exclude** 参数中输入逗号分隔的字段列表。输出将包含所有不在此列表中的字段。

更多配置选项请参考 [节点选项](#node-options)。

（白话解释：所有数据项数据 = 不管字段叫什么，把每条数据整体打包进一个数组。比如 5 条客户数据，打包成 `[{客户1}, {客户2}, ...]`。）

## 节点选项

你可以使用这些**选项 Options** 进一步配置这个节点：

* **禁用点号表示法 Disable Dot Notation**：当你选择 **单独字段 Individual Fields** 聚合方式时会出现这个开关。它控制是否禁止在字段名中使用 `parent.child` 这种形式引用子字段（开启 = 禁止，关闭 = 允许，默认关闭）。
* **合并列表 Merge Lists**：当你选择 **单独字段 Individual Fields** 聚合方式时会出现这个开关。如果要聚合的字段本身是一个列表，而你想输出一个单一扁平列表（而不是「列表的列表」），就打开它。
* **包含二进制数据 Include Binaries**：两种聚合方式都会显示这个开关。如果想把输入中的二进制数据（如图片、文件）也包含进新的输出，就打开它。
* **保留缺失值和空值 Keep Missing And Null Values**：当你选择 **单独字段 Individual Fields** 聚合方式时会出现这个开关。打开后，当输入中有 null（空）或缺失的值时，会在输出列表中添加一个 null（空）条目。如果关闭，输出会忽略空值或缺失值。

## 模板和示例

[浏览聚合（Aggregate）的集成模板](https://n8n.io/integrations/aggregate) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/0nvcx1EqJQgGVzUXOOMN/" %}
