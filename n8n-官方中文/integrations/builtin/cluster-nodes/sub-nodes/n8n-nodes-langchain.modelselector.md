---
title: Model Selector 节点文档
description: >-
  了解如何在 n8n 中使用 Model Selector 节点。阅读技术文档，把
  Model Selector 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Model Selector 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.modelselector.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.modelselector
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.modelselector
layout:
  description:
    visible: false
---

# Model Selector 节点

> **大白话**：这个节点是"模型路由器"——在工作流运行时，根据你设置的规则，自动从连着的多个大模型中挑一个来用。典型场景：主模型报错时自动切换到备用模型（容错机制），或者按任务类型选最优模型（比如简单的用便宜的、复杂的用贵的）。规则是按顺序匹配的，**从上往下，第一个命中的就生效**。

Model Selector 节点会在工作流执行期间，根据一组已定义的条件，动态选择连接的语言模型之一。这可以用来实现错误处理的回退机制，或者为特定任务挑选最优模型。

本页涵盖 Model Selector 节点的参数，并包含相关资源的链接。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

### Number of Inputs（输入数量）

指定可用于挂接语言模型的输入连接数量。

### Rules（规则）

每条规则定义在特定条件匹配时要使用的模型。

Model Selector 节点会按顺序评估规则，从第一个输入开始，一旦找到匹配就停止评估。这意味着，如果有多个规则都会匹配，n8n 只会使用**第一条**匹配规则所定义的模型。

## 模板与示例

[浏览 Model Selector 集成模板](https://n8n.io/integrations/model-selector) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
