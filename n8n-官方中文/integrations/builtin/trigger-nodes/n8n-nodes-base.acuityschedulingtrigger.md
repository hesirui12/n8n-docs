---
title: Acuity Scheduling 触发器节点文档（Acuity Scheduling Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 Acuity Scheduling 触发器节点。按照技术文档将 Acuity Scheduling
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Acuity Scheduling Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.acuityschedulingtrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.acuityschedulingtrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.acuityschedulingtrigger
layout:
  description:
    visible: false
---

# Acuity Scheduling 触发器节点（Acuity Scheduling Trigger node）

{% hint style="info" %}
**大白话**：Acuity Scheduling 是一个在线预约排期软件，帮商家在网上管理客户的预约（比如美容、咨询、课程这类需要提前约时间的生意）。这个触发器节点会在预约发生变化时自动触发你的工作流，比如：客户约了时间、改了时间、取消了预约，或者买完了订单。它支持 5 种事件，基本都是预约相关的，用起来很简单：选一个事件，工作流就会在对应情况发生时自动跑起来。
{% endhint %}

[Acuity Scheduling](https://acuityscheduling.com/) 是一款基于云的预约排期软件解决方案，让商家可以在线管理预约。它能够根据用户的时区自动同步日历，并可以定期向用户发送有关其预约安排的提醒通知。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/acuityscheduling.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [Acuity Scheduling Trigger 集成](https://n8n.io/integrations/acuity-scheduling-trigger/)页面。
{% endhint %}

## 事件（Events）

* Appointment canceled（预约已取消）
* Appointment changed（预约已变更）
* Appointment rescheduled（预约已改期）
* Appointment scheduled（已安排新预约）
* Order completed（订单已完成）
