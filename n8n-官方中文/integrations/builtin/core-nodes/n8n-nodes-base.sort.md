---
title: 排序 Sort
description: >-
  n8n 工作流自动化平台中「排序 Sort」节点的中文文档。
  包含使用方法说明和示例链接。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Sort
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.sort.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.sort'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.sort'
layout:
  description:
    visible: false
---

# 排序 Sort

> **大白话**：这个节点是「整理数据顺序」的工具。你可以按某个字段升序/降序排列（比如按价格从低到高、按时间从新到旧），也可以把数据随机打乱，或者干脆自己写一段 JavaScript 代码来自定义排序规则。

使用「排序 Sort」节点把数据项列表整理成想要的顺序，或者生成一个随机选择（随机顺序）。

{% hint style="info" %}
**数组排序行为**

排序操作使用 JavaScript 的默认排序行为：要排序的元素会被转换成字符串再比较它们的值。想了解更多，请参考 [Mozilla 的 Array sort 指南](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)。
{% endhint %}

（白话解释：JavaScript 默认排序是把每个元素先变成字符串再比较，所以数字排序时可能不会按数学大小排序，比如 10 会排在 2 前面，因为字符串 "10" < "2"。用代码模式排序可以避免这个问题。）

## 节点参数

使用 **类型 Type** 参数配置这个节点。

使用下拉框从这些选项中选择你想如何输入排序方式。

### 简单 Simple

使用选定的字段进行升序或降序排序。

当你选择这种 **类型 Type** 时：

* 使用 **添加排序字段 Add Field To Sort By** 按钮输入 **字段名 Field Name**。
* 选择使用 **升序 Ascending** 还是 **降序 Descending** 顺序。

#### 简单模式的选项

当你选择 **简单 Simple** 作为 **类型 Type** 时，你可以选择 **禁用点号表示法 Disable Dot Notation**。默认情况下，n8n 启用点号表示法，用 `parent.child` 的格式引用子字段。使用这个选项可以禁用点号表示法（开启 = 禁用）或继续使用点号（关闭 = 继续使用）。

### 随机 Random

在列表中创建随机顺序（把列表顺序打乱）。

### 代码 Code

输入自定义 JavaScript 代码来执行排序操作。如果简单排序无法满足你的需求，这是一个很好的选择。

在 **代码 Code** 输入字段中输入你的自定义 JavaScript 代码。

## 模板和示例

[浏览排序（Sort）的集成模板](https://n8n.io/integrations/sort) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/0nvcx1EqJQgGVzUXOOMN/" %}
