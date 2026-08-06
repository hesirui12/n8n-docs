---
title: Workflow Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 Workflow Trigger（工作流触发器）节点。按照本文档将
  Workflow Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Workflow Trigger 节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.workflowtrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.workflowtrigger
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.workflowtrigger
layout:
  description:
    visible: false
---

# Workflow Trigger 节点

> **大白话**：这个节点是「工作流状态监听器」。当它所在的工作流被更新或被激活时，它就会触发。注意：官方已弃用这个节点，它的功能已经合并进 n8n Trigger 节点，新项目请直接使用 n8n Trigger 节点。

Workflow Trigger（工作流触发器）节点在某个工作流被更新或激活时触发。

{% hint style="warning" %}
**已弃用（Deprecated）**

n8n 已经弃用了 Workflow Trigger 节点，并将其功能迁移到了 [n8n Trigger 节点](n8n-nodes-base.n8ntrigger.md)。
{% endhint %}

{% hint style="info" %}
**请记住**

如果你想在某个工作流中使用 Workflow Trigger 节点，直接把该节点添加到这个工作流里即可，不需要另外创建一个单独的工作流。
{% endhint %}

Workflow Trigger 节点只针对它所在的那个工作流触发。你可以用 Workflow Trigger 节点来触发一个工作流，从而获知该工作流当前的状态。

## 节点参数

该节点包含一个参数，用来识别哪些 **Events（事件）** 应该触发它。从以下事件中选择：

- **Active Workflow Updated（已激活的工作流被更新）**：如果选择此事件，当此工作流被更新时，节点会触发。
- **Workflow Activated（工作流被激活）**：如果选择此事件，当此工作流被激活时，节点会触发。

你可以选择以上一个或两个事件。

## 模板与示例

[浏览 Workflow Trigger 节点的集成模板](https://n8n.io/integrations/workflow-trigger) 或 [搜索所有模板](https://n8n.io/workflows/)
