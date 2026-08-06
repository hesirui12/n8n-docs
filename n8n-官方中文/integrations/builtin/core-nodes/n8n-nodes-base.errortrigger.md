---
title: Error Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 Error Trigger（错误触发器）节点。按照本文档将
  Error Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Error Trigger 节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.errortrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger
layout:
  description:
    visible: false
---

# Error Trigger 节点

> **大白话**：这个节点是工作流的「急救箱入口」。当别的工作流运行出错时，这个节点会立刻被触发，把"哪个工作流出错了、报了什么错"这些信息带进来，然后执行你准备好的错误处理流程（比如发邮件通知、记录日志），让错误不再悄无声息。

你可以使用 Error Trigger（错误触发器）节点来创建错误工作流（error workflows）。当另一个被关联的工作流运行失败时，该节点会获取关于失败工作流和错误信息的详情，然后运行这个错误工作流。

## 使用方法

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/odStQfuU7M0KPowwye9k/" %}

请注意以下几点：

* 如果一个工作流使用了 Error Trigger 节点，你不需要发布（publish）这个工作流。
* 如果一个工作流里包含 Error Trigger 节点，默认情况下，该工作流会把自己作为错误工作流（即错误发生时，运行的是它自己）。
* 手动运行工作流时，无法测试错误工作流。Error Trigger 只会在自动运行的工作流出错时被触发。

## 模板与示例

[浏览 Error Trigger 节点的集成模板](https://n8n.io/integrations/error-trigger) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

你可以使用 [Stop And Error（停止并报错）](n8n-nodes-base.stopanderror.md) 节点向 Error Trigger 发送自定义的错误信息。

阅读更多关于 n8n 工作流中的[错误工作流](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/flow-logic/handle-errors-gracefully)的内容。

## 错误数据（Error data）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/rAiMowL1bA7C4GcH8FyS/" %}
