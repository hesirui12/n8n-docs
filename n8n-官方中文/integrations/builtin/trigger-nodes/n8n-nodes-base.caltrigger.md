---
title: Cal 触发器节点文档（Cal Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 Cal 触发器节点。按照技术文档将 Cal
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Cal Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.caltrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.caltrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.caltrigger
layout:
  description:
    visible: false
---

# Cal 触发器节点（Cal Trigger node）

{% hint style="info" %}
**大白话**：Cal（cal.com）是开源的预约排期工具，功能类似 Calendly，帮你管理会议预约。这个触发器节点会在预约变动时自动唤醒工作流，支持 4 种事件：**Booking created（预约已创建）**、**Booking cancelled（预约已取消）**、**Booking rescheduled（预约已改期）**、**Meeting ended（会议已结束）**。用法：放工作流开头，配好授权，选择要监听的事件即可。
{% endhint %}

[Cal](https://cal.com/) 是面向所有人的日程调度器。专注于会议本身，而不是操心安排会议。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/cal.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [Cal Trigger 集成](https://n8n.io/integrations/cal-trigger/)页面。
{% endhint %}

## 事件（Events）

* Booking cancelled（预约已取消）
* Booking created（预约已创建）
* Booking rescheduled（预约已改期）
* Meeting ended（会议已结束）
