---
title: Execution Data 节点文档
description: >-
  n8n（工作流自动化平台）中 Execution Data（执行数据）节点的文档。
  包含用法指南和示例链接。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Execution Data 节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.executiondata.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executiondata
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executiondata
layout:
  description:
    visible: false
---

# Execution Data 节点

> **大白话**：这个节点是给工作流执行记录「贴标签」的。你可以把一些关键信息（比如订单号、用户邮箱、业务 ID）作为键值对存到这次执行记录上，之后在 **Executions（执行记录）** 列表里就能按这些信息搜索到对应的运行记录。相当于给每次运行做档案备注。

使用这个节点来保存工作流执行的元数据。之后你可以在 **Executions（执行记录）** 列表中按这些数据搜索。

你可以在工作流执行期间使用 Code（代码）节点检索自定义的执行数据。更多信息请参阅[自定义执行数据](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/understand-workflows/understand-executions/customize-executions-data)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/hEbJHXcEBce6m2wEE65f/" %}

> **小白提示**：上面嵌入的是官方文档中关于"如何使用 Execution Data 节点保存并搜索执行数据"的图文说明，内容会在文档站点中自动渲染。

## 操作（Operations）

* Save Execution Data for Search（保存执行数据以供搜索）

## Data to Save（要保存的数据）

为你想要保存的每一对键/值元数据，添加一个 **Saved Field（保存的字段）**。

## 限制（Limitations）

Execution Data 节点在存储执行元数据时有以下限制：

* `key`（键）：最多 50 个字符
* `value`（值）：最多 512 个字符

如果 `key` 或 `value` 超过上述限制，n8n 会把它们截断到最大长度，并输出一条日志记录。

## 模板与示例

[浏览 Execution Data 的集成模板](https://n8n.io/integrations/execution-data) 或 [搜索所有模板](https://n8n.io/workflows/)
