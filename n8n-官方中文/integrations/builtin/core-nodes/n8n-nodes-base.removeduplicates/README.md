---
title: 去重节点 Remove Duplicates 节点文档
description: >-
  n8n 工作流自动化平台中「去重 Remove Duplicates」节点的中文文档。
  包含使用方法说明和示例链接。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: n8n-nodes-base.removeduplicates
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates
layout:
  description:
    visible: false
---

# 去重 Remove Duplicates 节点

> **大白话**：这个节点是「查重删重」工具，帮你把重复的数据清理掉。它有两种大本事：一是清理**这一次输入里**自己重复的数据（比如同一张表里出现两行一模一样的记录）；二是跟**以前跑过的执行**做对比，把以前见过、处理过的数据剔掉（比如同一笔订单被重复提交了两次，第二次就能被认出来扔掉）。在处理大数据集时，肉眼很难发现重复项，这个节点就派上用场了。

使用「去重 Remove Duplicates」节点来识别并删除满足以下条件的数据项：

* 在单次执行中，所有字段或部分字段完全相同的数据项
* 与之前执行中见过的数据项完全相同，或者不如之前数据项「新/大」的数据项

这在可能出现重复数据的情况下很有用，例如用户创建了多个账户，或者客户多次提交同一订单。处理大型数据集时，发现并删除这些重复项会变得更加困难。

通过跟之前执行的数据做比较，「去重 Remove Duplicates」节点可以删除之前执行中见过的数据项。它还可以确保新数据项的日期更晚或数值更高（即只保留更新的、更大的）。

{% hint style="info" %}
**1.64.0 版本的重大变更**

n8n 团队在 n8n 1.64.0 版本中彻底重构了这个节点。本文档反映的是该节点的最新版本。如果你使用的是旧版本的 n8n，可以在[这里](https://github.com/n8n-io/n8n-docs/blob/7a66308290e6e5b104fcb82a3beafa0d6987df36/docs/integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates.md)找到本文档的旧版本。
{% endhint %}

## 操作模式

去重节点的工作方式取决于 **操作 operation** 参数的值：

* **[删除当前输入中重复的数据项](#remove-items-repeated-within-current-input)**：识别并删除当前输入中在所有字段或部分字段上重复的数据项。
* **[删除之前执行中已处理的数据项](#remove-items-processed-in-previous-executions)**：把当前输入的数据项与之前执行的数据项进行比较，删除重复项。
* **[清除去重历史](#clear-deduplication-history)**：清空之前执行中记录的数据项记忆。

### 删除当前输入中重复的数据项

当你把「操作 Operations」字段设置为 **删除当前输入中重复的数据项 Remove Items Repeated Within Current Input** 时，去重节点会识别并删除当前输入中重复的数据项。它可以在所有字段范围内，或者在部分字段范围内进行。

#### 删除当前输入中重复的数据项的参数

使用 **删除当前输入中重复的数据项 Remove Items Repeated Within Current Input** 操作时，有以下参数可用：

* **比较 Compare**：选择 n8n 应该比较输入数据的哪些字段，以判断它们是否相同。可选选项如下：
	* **所有字段 All Fields**：比较输入数据的所有字段。
	* **除…之外的所有字段 All Fields Except**：输入 n8n 应该从比较中排除的输入数据字段。可以输入多个值，用逗号分隔。
	* **选定的字段 Selected Fields**：输入 n8n 应该纳入比较的输入数据字段。可以输入多个值，用逗号分隔。

#### 删除当前输入中重复的数据项的选项

如果你选择 **除…之外的所有字段 All Fields Except** 或 **选定的字段 Selected Fields** 作为比较类型，可以添加以下选项：

* **禁用点号表示法 Disable Dot Notation**：设置是否使用点号表示法来引用 `parent.child` 格式的子字段（关闭 = 使用，开启 = 不使用）。
* **删除其他字段 Remove Other Fields**：设置是否删除未参与比较的任何字段（开启 = 删除，关闭 = 不删除）。

### 删除之前执行中已处理的数据项

当你把「操作 Operation」字段设置为 **删除之前执行中已处理的数据项 Remove Items Processed in Previous Executions** 时，去重节点会把当前输入的数据项与之前执行的数据项进行比较。

#### 删除之前执行中已处理的数据项的参数

使用 **删除之前执行中已处理的数据项 Remove Items Processed in Previous Executions** 操作时，有以下参数可用：

* **保留哪些数据项 Keep Items Where**：选择 n8n 如何决定保留哪些数据项。可选选项如下：
	* **值是新的 Value Is New**：如果数据项的值与之前执行中的值匹配，n8n 就删除它。
	* **值高于任何之前的数值 Value Is Higher than Any Previous Value**：如果当前值不高于之前的数值，n8n 就删除它。
	* **值是晚于任何之前日期的日期 Value Is a Date Later than Any Previous Date**：如果当前日期不晚于之前的日期，n8n 就删除该日期数据项。

* **去重依据的值 Value to Dedupe On**：要比较的输入字段。你为 **保留哪些数据项 Keep Items Where** 参数选择的选项决定了你需要的确切格式：
	* 使用 **值是新的 Value Is New** 时，这必须是具有唯一 ID 的输入字段或字段组合。
	* 使用 **值高于任何之前的数值 Value Is Higher than Any Previous Value** 时，这必须是具有递增数值的输入字段或字段组合。
	* 使用 **值是晚于任何之前日期的日期 Value Is a Date Later than Any Previous Date** 时，这必须是具有 ISO 格式日期值的输入字段。

#### 删除之前执行中已处理的数据项的选项

使用 **删除之前执行中已处理的数据项 Remove Items Processed in Previous Executions** 操作时，有以下选项可用：

* **范围 Scope**：设置 n8n 如何存储和使用去重数据进行比较。可选选项如下：
	* **节点 Node**：（默认）独立于工作流中其他去重节点实例存储该节点的数据。使用此范围时，你可以[清除该节点的去重历史](#clear-deduplication-history)，而不会影响其他节点。
	* **工作流 Workflow**：在工作流级别存储去重数据。这会与其他设置为「工作流」范围的去重节点共享去重数据。n8n 仍然会独立管理其他设置为「节点」范围的去重节点的去重数据。

当你选择 **值是新的 Value Is New** 作为 **保留哪些数据项 Keep Items Where** 选项时，还会显示以下选项：

* **历史记录大小 History Size**：n8n 存储用于跨执行跟踪重复项的数据项数量。**范围 Scope** 选项的值决定了此历史记录大小是仅针对这个单独的去重节点实例，还是与工作流中的其他实例共享。默认情况下，n8n 存储 10,000 个数据项。

### 清除去重历史

当你把「操作 Operation」字段设置为 **清除去重历史 Clear Deduplication History** 时，去重节点会管理并清除之前执行中存储的数据项。此操作不影响当前输入中的任何数据项。相反，它管理的是「删除之前执行中已处理的数据项」操作所使用的数据项数据库。

#### 清除去重历史的参数

使用 **清除去重历史 Clear Deduplication History** 操作时，有以下参数可用：

* **模式 Mode**：你希望如何管理数据库中存储的键/值数据项。有以下选项：
	* **清理数据库 Clean Database**：删除数据库中存储的所有去重数据。这会把它重置为初始状态。

#### 清除去重历史的选项

使用 **清除去重历史 Clear Deduplication History** 操作时，有以下选项可用：

* **范围 Scope**：设置 n8n 在管理去重数据库时使用的范围。
	* **节点 Node**：（默认）管理这个去重节点实例专属的去重数据库。
	* **工作流 Workflow**：管理所有使用工作流范围的去重节点实例共享的去重数据库。

## 模板和示例

有关使用「去重 Remove Duplicates」节点的模板以及使用示例，请参考 [模板和示例](templates-and-examples.md)。

## 相关资源

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/0nvcx1EqJQgGVzUXOOMN/" %}
