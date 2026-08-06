---
title: Onfleet 触发器节点文档
description: >-
  学习如何在 n8n 中使用 Onfleet 触发器节点。按照本文档将
  Onfleet 触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Onfleet 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.onfleettrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.onfleettrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.onfleettrigger
layout:
  description:
    visible: false
---

# Onfleet 触发器节点

> **大白话**：这个节点是 Onfleet 配送平台的「事件广播员」。你告诉它"盯哪些事"，比如任务被创建、配送员开始任务、任务完成、配送员上线等，一旦发生，它就立刻启动你的工作流。适合做配送通知、自动统计、异常提醒等自动化。

[Onfleet](https://onfleet.com/) 是一个提供"最后一公里"配送解决方案的物流平台。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/onfleet.md)找到此节点的身份验证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [Onfleet Trigger integrations](https://n8n.io/integrations/onfleet-trigger/) 页面。
{% endhint %}

## 事件（Events）

在以下情况下触发工作流：

* 收件人退订短信（SMS recipient opt out）
* 短信收件人未接听（SMS recipient response missed）
* 任务到达（Task arrival）
* 任务被分配（Task assigned）
* 任务被复制（Task cloned）
* 任务完成（Task completed）
* 任务被创建（Task created）
* 任务延迟（Task delayed）
* 任务到达时间预估（Task ETA）
* 任务失败（Task failed）
* 任务开始（Task started）
* 任务被取消分配（Task unassigned）
* 任务被更新（Task updated）
* 配送员被创建（Worker created）
* 配送员被删除（Worker deleted）
* 配送员值班状态变化（Worker duty）
