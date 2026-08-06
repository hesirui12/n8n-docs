---
title: Activation Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 Activation Trigger（激活触发器）节点。按照本文档将
  Activation Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Activation Trigger 节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.activationtrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.activationtrigger
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.activationtrigger
layout:
  description:
    visible: false
---

# Activation Trigger 节点

> **大白话**：这个节点就像一个「开关状态播报员」。当工作流被发布、n8n 启动，或者已激活的工作流被保存时，它就会自动触发一次，让你在工作流里第一时间知道"发生了什么"。不过官方已经把它淘汰了，新项目建议直接用 n8n Trigger 节点或 Workflow Trigger 节点代替。

当 n8n 或某个工作流触发了某个事件时，Activation Trigger（激活触发器）节点就会被触发运行。

{% hint style="warning" %}
n8n 已经弃用（deprecated）了 Activation Trigger 节点，并用两个新节点替代了它：[n8n Trigger 节点](n8n-nodes-base.n8ntrigger.md) 和 [Workflow Trigger 节点](n8n-nodes-base.workflowtrigger.md)。更多细节请查看[破坏性变更](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01170)页面的相关条目。
{% endhint %}

{% hint style="info" %}
**请记住**

如果你想在某个工作流中使用 Activation Trigger 节点，直接把该节点添加到这个工作流里即可，不需要另外创建一个单独的工作流。
{% endhint %}

Activation Trigger 节点只针对它所在的那个工作流触发。你可以用 Activation Trigger 节点来触发一个工作流，从而获知该工作流当前的状态（比如被发布、被保存等）。

## 节点参数

- Events（事件）
    - **Activation（激活）**：当工作流被发布时运行。
    - **Start（启动）**：当 n8n 启动或重启时运行。
    - **Update（更新）**：当工作流处于激活状态且被保存时运行。

## 模板与示例

[浏览 Activation Trigger 节点的集成模板](https://n8n.io/integrations/activation-trigger) 或 [搜索所有模板](https://n8n.io/workflows/)
