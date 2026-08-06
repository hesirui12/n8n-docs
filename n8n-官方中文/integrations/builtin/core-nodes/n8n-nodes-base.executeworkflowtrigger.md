---
title: Execute Sub-workflow Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 Execute Sub-workflow Trigger（执行子工作流触发器）节点。按照本文档将
  Execute Sub-workflow Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Execute Sub-workflow Trigger 节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger
layout:
  description:
    visible: false
---

# Execute Sub-workflow Trigger 节点

> **大白话**：这个节点是子工作流的「门铃」。它必须放在子工作流的开头（第一个节点）。当别的工作流通过 Execute Sub-workflow 节点调用它时，门铃一响，子工作流就开始运行。这样你就可以把"发报告""发邮件"这类流程做成公共模块，谁用谁调。

使用这个节点，可以在响应另一个工作流时启动一个工作流。它应该是工作流中的第一个节点。

n8n 允许你从其他工作流调用工作流。如果你有以下需求，这会非常有用：

* 复用工作流：例如，你可能有多个工作流从不同的数据源拉取并处理数据，然后让所有这些工作流都调用一个负责生成报告的工作流。
* 把大型工作流拆分成更小的组件。

## 使用方法

这个节点会响应来自 [Execute Sub-workflow（执行子工作流）](n8n-nodes-base.executeworkflow.md) 或 [Call n8n Workflow Tool（调用 n8n 工作流工具）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow.md) 节点的调用而运行。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/wlwT5JcWyWTecnDN6aul/" %}

> **小白提示**：上面嵌入的是官方文档中"如何搭建父工作流和子工作流"的分步图文教程，内容会在文档站点中自动渲染。

## 模板与示例

[浏览 Execute Sub-workflow Trigger 节点的集成模板](https://n8n.io/integrations/execute-workflow-trigger) 或 [搜索所有模板](https://n8n.io/workflows/)

## 数据如何在工作流之间传递

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/edKlUxnfiRMq38CujuFv/" %}

> **小白提示**：上面嵌入的是官方文档中关于"数据如何在主工作流和子工作流之间传递"（如输入、输出、`null` 值等）的说明，内容会在文档站点中自动渲染。
