---
title: 比较数据集 Compare Datasets
description: >-
  n8n 工作流自动化平台中「比较数据集 Compare Datasets」节点的中文文档。
  包含使用方法说明和示例链接。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Compare Datasets
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.comparedatasets.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.comparedatasets
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.comparedatasets
layout:
  description:
    visible: false
---

# 比较数据集 Compare Datasets

> **大白话**：这个节点是「找不同」工具——把两路数据（输入 A 和输入 B）拿来对比，然后分出四堆：只在 A 里的、只在 B 里的、两边一样的、两边都有但不一致的。常见场景：比对数据库和 CRM 里哪条客户记录被改过、哪个是新客户。你可以指定用哪个字段来「配对」比较，也可以决定两边不一致时听谁的。

「比较数据集 Compare Datasets」节点帮助你比较来自两个输入流的数据。

## 节点参数

1. 决定要比较哪些字段。在 **输入 A 字段 Input A Field** 中输入你想使用的输入流 A 的字段名。在 **输入 B 字段 Input B Field** 中输入你想使用的输入流 B 的字段名。
2. **可选**：你可以按多个字段进行比较。点击 **添加要匹配的字段 Add Fields to Match** 来设置更多比较项。
3. 选择如何处理数据集之间的差异。在 **当存在差异时 When There Are Differences** 中，选择以下选项之一：
	* 选择 **使用输入 A 的版本 Use Input A Version**，把输入流 A 视为「真相来源」（以 A 为准）。
	* 选择 **使用输入 B 的版本 Use Input B Version**，把输入流 B 视为「真相来源」（以 B 为准）。
	* 选择 **混合使用版本 Use a Mix of Versions**，为不同字段使用不同输入。
		* 使用 **首选 Prefer** 选择 **输入 A 版本 Input A Version** 或 **输入 B 版本 Input B Version** 作为主要的「真相来源」。
		* 在 **除…之外的所有字段 For Everything Except** 中输入例外字段，这些字段从另一个输入源获取。要添加多个输入字段，请输入逗号分隔的列表。
	* 选择 **包含两个版本 Include Both Versions**，把两个输入流都包含在输出中，这可能会让结构更复杂。
4. 决定是否使用 **模糊比较 Fuzzy Compare**。开启后，比较字段时会容忍较小的类型差异。例如，数字 3 和字符串 `3` 在 **模糊比较 Fuzzy Compare** 开启时会被视为相同，而在关闭时则不会视为相同。

## 理解数据项比较

数据项比较是一个两阶段的过程：

1. n8n 检查你选择的比较字段的值在两个输入中是否匹配。
2. 如果比较字段匹配，n8n 再比较数据项内的所有字段，以确定这些数据项是相同还是不同。

（白话解释：先拿「配对钥匙」（比如 id）对上号，再拿放大镜把两个对上号的数据项里里外外比一遍。）

## 节点选项

使用节点的**选项 Options** 来优化你的比较或调整比较行为。

### 要跳过的比较字段 Fields to Skip Comparing

输入你想在比较中忽略的字段名。

例如，如果你用 `person.language` 作为 **要匹配的字段 Fields to Match** 来比较下面的两个数据集，n8n 会判定它们不同。如果你把 `person.name` 添加到 **要跳过的比较字段 Fields to Skip Comparing**，n8n 就会判定它们匹配。

```json
	// Input 1
	[
		{
			"person":
			{
				"name":	"Stefan",
				"language":	"de"
			}
		},
		{
			"person":
			{
				"name":	"Jim",
				"language":	"en"
			}
		},
		{
			"person":
			{
				"name":	"Hans",
				"language":	"de"
			}
		}
	]
	// Input 2
		[
		{
			"person":
			{
				"name":	"Sara",
				"language":	"de"
			}
		},
		{
			"person":
			{
				"name":	"Jane",
				"language":	"en"
			}
		},
		{
			"person":
			{
				"name":	"Harriet",
				"language":	"de"
			}
		}
	]
```
（上面是两个输入数据：两边的 `language` 值一样（de、en、de），但 `name` 完全不同。所以用 `person.language` 配对后，如果不跳过 name，n8n 认为每个配对都不一样；把 `person.name` 加进跳过列表后，就认为它们匹配了。）

### 禁用点号表示法 Disable Dot Notation

设置是否禁止在字段名中使用 `parent.child` 这种形式引用子字段（开启 = 禁止，关闭 = 允许，默认关闭）。

### 多重匹配 Multiple Matches

选择如何处理重复数据。默认是 **包含所有匹配项 Include All Matches**。你也可以选择 **仅包含第一个匹配项 Include First Match Only**。

例如，给定这两个数据集：
```json
	// Input 1
	[
		{
			"fruit": {
				"type": "apple",
				"color": "red"
			}
		},
				{
			"fruit": {
				"type": "apple",
				"color": "red"
			}
		},
				{
			"fruit": {
				"type": "banana",
				"color": "yellow"
			}
		}
	]
	// Input 2
	[
		{
			"fruit": {
				"type": "apple",
				"color": "red"
			}
		},
				{
			"fruit": {
				"type": "apple",
				"color": "red"
			}
		},
				{
			"fruit": {
				"type": "banana",
				"color": "yellow"
			}
		}
	]
```

（两个输入一模一样：都是 2 条 apple（红色）+ 1 条 banana（黄色）。）

默认情况下，n8n 会在 **相同分支 Same Branch** 标签页中返回 3 个数据项。两个分支中的数据是相同的。

如果你选择 **仅包含第一个匹配项 Include First Match Only**，n8n 会在 **相同分支 Same Branch** 标签页中返回 2 个数据项。两个分支中的数据是相同的，但 n8n 只返回匹配的 "apple" 数据项中的第一个。

## 理解输出

有四种输出选项：

* **仅 A 有分支 In A only Branch**：包含只出现在第一个输入中的数据。
* **相同分支 Same Branch**：包含两个输入中相同的数据。
* **不同分支 Different Branch**：包含两个输入之间不同的数据。
* **仅 B 有分支 In B only Branch**：包含只出现在第二个输入中的数据。

## 模板和示例

[浏览比较数据集（Compare Datasets）的集成模板](https://n8n.io/integrations/compare-datasets) 或 [搜索所有模板](https://n8n.io/workflows/)
