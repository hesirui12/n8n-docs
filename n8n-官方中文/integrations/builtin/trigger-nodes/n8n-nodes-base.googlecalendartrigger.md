---
title: Google Calendar 触发器节点文档
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Google Calendar 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.googlecalendartrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googlecalendartrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googlecalendartrigger
description: >-
  Learn how to use the Google Calendar Trigger node in n8n.
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

# Google Calendar 触发器节点

> **大白话**：这个节点专门"盯"你的 Google 日历——日程被创建、修改、取消、开始、结束，都会触发工作流。比如会议一开始就自动发消息、录笔记，日程变更就同步到别处。

[Google Calendar](https://www.google.com/calendar/) 是由 Google 开发的时间管理和日程安排日历服务。

{% hint style="info" %}
**凭据（Credentials）**

你可以在此处找到该节点的认证信息：[Google 凭据](../credentials/google/README.md)。
{% endhint %}

{% hint style="info" %}
**示例与模板**

如需使用示例和入门模板，请参阅 n8n 的 [Google Calendar 触发器集成](https://n8n.io/integrations/google-calendar-trigger/) 页面。
{% endhint %}

## 事件（Events）

* **Event Cancelled（日程已取消）**
* **Event Created（日程已创建）**
* **Event Ended（日程已结束）**
* **Event Started（日程已开始）**
* **Event Updated（日程已更新）**

[浏览 Google Calendar 触发器节点的集成模板](https://n8n.io/integrations/google-calendar-trigger)，或[搜索所有模板](https://n8n.io/workflows/)

## 相关资源

n8n 也为 Google Calendar 提供了应用节点（app node）。你可以在这里找到节点文档：[Google Calendar 应用节点](../app-nodes/n8n-nodes-base.googlecalendar/README.md)。

在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/google-calendar-trigger/)。

关于其 API 的细节，请参阅 [Google Calendar 官方文档](https://developers.google.com/calendar/api/v3/reference)。
