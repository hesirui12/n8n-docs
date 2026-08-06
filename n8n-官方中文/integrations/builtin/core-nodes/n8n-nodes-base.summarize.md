---
title: 汇总 Summarize
description: >-
  n8n 工作流自动化平台中「汇总 Summarize」节点的中文文档。
  包含使用方法说明和示例链接。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Summarize
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.summarize.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.summarize'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.summarize'
layout:
  description:
    visible: false
---

# 汇总 Summarize

> **大白话**：这个节点是「数据透视表」——就像 Excel 里的数据透视表一样，把一堆数据行「压扁」成汇总结果。你可以对某个字段求和、求平均、数个数、取最大/最小、拼接字符串等；还可以按另一个字段分组（比如按销售员分组，算出每个销售员的总业绩）。

使用「汇总 Summarize」节点把数据项聚合到一起，方式类似于 Excel 的数据透视表。

## 节点参数

### 要汇总的字段 Fields to Summarize

使用这些字段来定义你想如何汇总输入数据。

* **聚合方式 Aggregation**：选择要对给定字段使用的聚合方法。选项包括：
	* **追加 Append**（把值收集到一个数组里）
		* 如果选择这个选项，需要决定是否要 **包含空值 Include Empty Values**。
	* **平均值 Average**：计算输入数据的数值平均值。
	* **拼接 Concatenate**（把多个值拼成一段文本）
		* 如果选择这个选项，需要决定是否要 **包含空值 Include Empty Values**。
		* **分隔符 Separator**：选择要在拼接值之间插入的分隔符。
	* **计数 Count**：统计输入数据中值的总数。
	* **唯一值计数 Count Unique**：统计输入数据中不重复值的数量。
	* **最大值 Max**：找出输入数据中的最高数值。
	* **最小值 Min**：找出输入数据中的最低数值。
	* **求和 Sum**：把输入数据中的数值加在一起。
* **字段 Field**：输入你想要执行聚合操作的字段名。

### 按字段分组 Fields to Split By

输入你想要按它拆分汇总结果的输入字段名（类似于 SQL 里的 group by 分组语句）。这让你可以根据其他字段的值得到不同的汇总结果。

例如，如果我们的输入数据包含 `Sales Rep`（销售员）和 `Deal Amount`（成交金额）两列，并且我们要对 `Deal Amount` 字段执行**求和 Sum**，那么我们可以按 `Sales Rep` 分组，为每个销售员分别得到**求和 Sum** 的总数。

要输入多个分组字段，请输入逗号分隔的列表。

（白话解释：不分组 = 全体算一个总数；分组 = 按「组」分别算，比如每个销售员一个总数。）

## 节点选项

### 字段未找到时继续 Continue if Field Not Found

默认情况下，如果一个 **要汇总的字段 Fields to Summarize** 不在任何数据项中，节点会抛出错误。使用这个选项可以在这种情况下继续执行并返回一个单独的空数据项（开启 = 继续）而不是默认的报错行为（关闭 = 报错）。

### 禁用点号表示法 Disable Dot Notation

默认情况下，n8n 启用点号表示法，用 `parent.child` 的格式引用子字段。使用这个选项可以禁用点号表示法（开启 = 禁用）或继续使用点号（关闭 = 继续使用）。

### 输出格式 Output Format

选择输出的格式。如果你使用了 **按字段分组 Fields to Split By**，推荐设置这个选项。

* **每个分组单独一个数据项 Each Split in a Separate Item**：使用这个选项为每个分组字段生成一个单独的输出数据项。
* **所有分组放在单个数据项中 All Splits in a Single Item**：使用这个选项生成一个列出所有分组字段的单个数据项。

## 忽略没有有效分组字段的数据项

设置是否忽略不包含 **按字段分组 Fields to Split By** 字段的输入数据项（开启 = 忽略，关闭 = 不忽略）。

## 模板和示例

[浏览汇总（Summarize）的集成模板](https://n8n.io/integrations/summarize) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/0nvcx1EqJQgGVzUXOOMN/" %}
