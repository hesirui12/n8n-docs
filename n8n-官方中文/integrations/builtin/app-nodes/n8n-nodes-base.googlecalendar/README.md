---
title: Google Calendar 节点文档
description: >-
  了解如何在 n8n 中使用 Google Calendar 节点。按照技术文档把 Google Calendar 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Google Calendar 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar
layout:
  description:
    visible: false
---
# Google Calendar 节点

> **大白话**：Google Calendar 就是谷歌日历。这个节点让你在 n8n 工作流里自动操作日历，比如创建日程、删除日程、查询某时间有没有空、把日历事件同步到别处。

使用 Google Calendar 节点可以在 Google Calendar 中实现工作自动化，并把 Google Calendar 与其他应用集成。n8n 内置支持多种 Google Calendar 功能，包括添加、获取、删除和更新日历事件。

本页面列出了 Google Calendar 节点支持的操作，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Google Calendar 凭证](../../credentials/google/README.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作

* **Calendar**（日历）
    * [**Availability**](calendar-operations.md#availability)（空闲查询）：检查日历中某个时间段是否空闲
* **Event**（事件）
    * [**Create**](event-operations.md#create)（创建）：向日历添加一个事件
    * [**Delete**](event-operations.md#delete)（删除）：删除一个事件
    * [**Get**](event-operations.md#get)（获取）：获取一个事件
    * [**Get Many**](event-operations.md#get-many)（获取多个）：从日历获取全部事件
    * [**Update**](event-operations.md#update)（更新）：更新一个事件

## 模板和示例

[浏览 n8n-nodes-base.googlecalendar 集成模板](https://n8n.io/integrations/google-calendar) 或 [搜索全部模板](https://n8n.io/workflows/)

## 相关资源

n8n 为 Google Calendar 提供了触发器节点。触发器节点文档请参考 [这里](../../trigger-nodes/n8n-nodes-base.googlecalendartrigger.md)。

关于 Google Calendar 服务的更多信息，请参考 [Google Calendar 官方文档](https://developers.google.com/calendar/api/v3/reference)。

在 n8n 官网查看 [示例工作流和相关内容](https://n8n.io/integrations/google-calendar/)。
