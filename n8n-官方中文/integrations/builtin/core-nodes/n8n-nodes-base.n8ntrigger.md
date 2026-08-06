---
title: n8n Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 n8n Trigger（n8n 触发器）节点。按照本文档将
  n8n Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: n8n Trigger 节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.n8ntrigger.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8ntrigger'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8ntrigger'
layout:
  description:
    visible: false
---

# n8n Trigger 节点

> **大白话**：这个节点是个「n8n 自身事件监听器」。当它所在的工作流被更新或发布，或者 n8n 实例启动/重启时，它就会触发。它只关心自己所在的工作流，别的工作流怎么改都不会触发它。

n8n Trigger（n8n 触发器）节点在以下情况触发：包含该节点的工作流被更新或发布，或者 n8n 实例启动或重启时。该节点只响应自己所在工作流的事件；其他工作流的变更不会触发它。

## 节点参数

该节点包含一个参数，用来识别哪些 **Events（事件）** 应该触发它。从以下事件中选择：

- **Published Workflow Updated（已发布的工作流被更新）**：如果选择此事件，当包含该节点的工作流被更新时，节点会触发。其他工作流的变更不会触发此节点。
- **Instance started（实例启动）**：如果选择此事件，当 n8n 实例启动或重启时，节点会触发。
- **Workflow Published（工作流被发布）**：如果选择此事件，当包含该节点的工作流被发布时，节点会触发。发布其他工作流不会触发此节点。

你可以选择以上一个或多个事件。

## 模板与示例

[浏览 n8n Trigger 节点的集成模板](https://n8n.io/integrations/n8n-trigger) 或 [搜索所有模板](https://n8n.io/workflows/)
