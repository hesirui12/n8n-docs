---
title: 过滤器 Filter
description: >-
  n8n 工作流自动化平台中「过滤器 Filter」节点的中文文档。
  包含使用方法说明和示例链接。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Filter
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.filter.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.filter'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.filter'
layout:
  description:
    visible: false
---

# 过滤器 Filter

> **大白话**：这个节点像「筛子」——你定一个条件（比如「订单金额大于 100 元」），符合条件的数据项被放行到下一个节点，不符合的就被扔掉。比如从一堆客户里只留下「已付费」的客户，就用它。

根据条件过滤数据项。如果某个数据项满足条件，「过滤器 Filter」节点就会把它传到输出端口的下一个节点；如果不满足条件，这个数据项就会被从输出中剔除（丢弃）。

## 节点参数

创建过滤比较用的**条件 Conditions** 来执行你的过滤。

- 使用数据类型下拉框来选择条件的数据类型和比较运算类型。例如，要筛选出某个日期之后的日期，选择 **日期与时间 Date & Time > 晚于 is after**。
- 需要输入到条件中的字段和值会根据你选择的数据类型和比较方式而变化。完整的各数据类型比较方式列表，请参考 [可用数据类型比较](#available-data-type-comparisons)（注：此处原文链接指向 GitBook 的公共复用内容，未在本镜像中展开）。

点击 **添加条件 Add condition** 可以创建更多条件。

### 组合条件

你可以选择保留哪些数据项：

* 满足所有条件时保留：创建两个或更多条件，并在它们之间的下拉框中选择 **AND（与）**。
* 满足任一条件时保留：创建两个或更多条件，并在它们之间的下拉框中选择 **OR（或）**。

你不能混合使用 AND 和 OR 规则（要么全用 AND，要么全用 OR）。

## 节点选项

- **忽略大小写 Ignore Case**：是否忽略字母大小写（开启 = 忽略大小写，关闭 = 区分大小写）。
- **宽松的类型校验 Less Strict Type Validation**：是否让 n8n 尝试根据你选择的运算符来转换值的数据类型（开启 = 尝试转换，关闭 = 不转换）。当你的节点报出 "wrong type:"（类型错误）错误时，请打开这个选项。

## 模板和示例

[浏览过滤器（Filter）的集成模板](https://n8n.io/integrations/filter) 或 [搜索所有模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/bMMOCQFbQ4YpKDnWQQOg/" %}
