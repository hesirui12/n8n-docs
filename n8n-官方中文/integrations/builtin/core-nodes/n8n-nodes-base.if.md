---
title: If（如果）
description: >-
  n8n（工作流自动化平台）中 If 节点的文档。包含使用指导以及示例链接。
contentType:
  - integration
  - reference
priority: critical
tags:
  - if
  - if node
  - If
  - If node
hide:
  - tags
nodeTitle: If
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.if.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if'
layout:
  description:
    visible: false
---

# If（如果）

{% hint style="info" %}
**大白话**：If 节点就是工作流里的「岔路口」，二选一。你定一个比较条件（比如「订单金额大于 100 元」），数据流到这里就分叉成两条路：**true（符合条件）** 走一条，**false（不符合条件）** 走另一条。可以一次设多个条件，用 AND（且）或 OR（或）组合。如果你需要两个以上的分支，就用 Switch 节点。
{% endhint %}

使用 If 节点，根据比较操作来条件性地拆分工作流。

## 添加条件（Add conditions）

为你的 If 节点创建比较**条件（Conditions）**。

- 使用数据类型下拉框来选择条件的数据类型和比较运算类型。例如，要筛选出某个日期之后的日期，选择 **Date & Time（日期与时间）> is after（晚于）**。
- 需要输入到条件中的字段和值会根据你选择的数据类型和比较方式而变化。完整的各数据类型比较方式列表，请参考 [可用的数据类型比较（Available data type comparisons）](#available-data-type-comparisons)。

选择 **Add condition（添加条件）** 可以创建更多条件。

### 组合条件（Combining conditions）

你可以选择保留哪些数据：

* 满足所有条件时保留：创建两个或更多条件，并在它们之间的下拉框中选择 **AND（且）**。
* 满足任一条件时保留：创建两个或更多条件，并在它们之间的下拉框中选择 **OR（或）**。

## 模板和示例（Templates and examples）

[浏览 If 集成模板](https://n8n.io/integrations/if) 或 [搜索所有模板](https://n8n.io/workflows/)

## 使用 If 和 Merge 节点进行分支执行（Branch execution with If and Merge nodes）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/o5sVhTw0cyO5aAAkAVDj/" %}

## 相关资源（Related resources）

关于使用条件在 n8n 中创建复杂逻辑的更多信息，请参阅 [使用条件拆分（Splitting with conditionals）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/flow-logic/split-with-conditionals)。

如果你需要两个以上的条件输出，请使用 [Switch 节点](n8n-nodes-base.switch.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/bMMOCQFbQ4YpKDnWQQOg/" %}
