---
title: Manual Trigger 节点文档
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Manual Trigger 节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.manualworkflowtrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.manualworkflowtrigger
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.manualworkflowtrigger
description: >-
  学习如何在 n8n 中使用 Manual Trigger（手动触发器）节点。按照本文档将
  Manual Trigger 节点集成到你的工作流中。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# Manual Trigger 节点

> **大白话**：这个节点就是一个「手动启动按钮」。工作流加上它之后，只能靠你在编辑器里点 **Execute Workflow（执行工作流）** 来运行，不会自己自动跑。适合在开发调试阶段用，或者你明确不想让它自动运行时用。

如果你只想通过选择 **Execute Workflow（执行工作流）** 来启动一个工作流，并且不希望工作流有任何自动运行的方式，就使用这个节点。

工作流总是需要一个触发器（trigger），也就是启动点。大多数工作流以一个触发器节点开始：它要么响应某个外部事件，要么由 [Schedule Trigger（定时触发器）](n8n-nodes-base.scheduletrigger/README.md) 按设定好的时间表触发。

Manual Trigger（手动触发器）节点充当那些没有自动触发器的工作流的工作流触发器。

在以下场景中使用这个触发器：

* 在添加某种自动触发器之前，先测试你的工作流。
* 当你不希望工作流自动运行时。

## 常见问题

这里列出了 Manual Trigger 节点的一些常见错误和问题，以及解决或排查这些问题的步骤。

### 一个工作流中只允许有一个 'Manual Trigger' 节点

如果你试图向已经包含 Manual Trigger 节点的工作流再添加一个 Manual Trigger 节点，就会显示这个错误。

请删除现有的 Manual Trigger 节点，或者编辑你的工作流，把那个触发器连接到另一个节点上。
