---
title: Google Calendar 节点 Calendar 操作文档
contentType:
  - integration
  - reference
priority: high
nodeTitle: Google Calendar 节点 Calendar 操作文档
originalFilePath: >-
  integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar/calendar-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar/calendar-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar/calendar-operations
description: >-
  了解如何在 n8n 中使用 Google Calendar 节点 Calendar 节点。按照技术文档把 Google Calendar 节点 Calendar 节点集成到你的工作流中。
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
# Calendar 操作

> **大白话**：这个页面只讲一件事——怎么用 Google Calendar 节点查「某个时间段在日历里有没有被占用」。比如你想自动约会议之前，先检查一下空闲时间。

使用这个操作可以检查 Google Calendar 中某个日历在某个时间段是否空闲。关于 Google Calendar 节点本身的更多信息，请参考 [Google Calendar](./README.md)。

## 空闲查询

用这个操作检查日历中某个时间段是否空闲。

填写以下参数：

* **Credential to connect with**（要连接的凭证）：创建或选择一个已有的 [Google Calendar 凭证](../../credentials/google/README.md)。
* **Resource**（资源）：选择 **Calendar**。
* **Operation**（操作）：选择 **Availability**。
* **Calendar**（日历）：选择要检查的日历。选 **From list**（从列表选择）从下拉框里选标题，或选 **By ID**（按 ID）输入日历 ID。
* **Start Time**（开始时间）：要检查的时间段的开始时间。默认使用一个表达式，取当前时间（`{{ $now }}`）。
* **End Time**（结束时间）：要检查的时间段的结束时间。默认使用一个表达式，取从现在起一小时后（`{{ $now.plus(1, 'hour') }}`）。

### 选项

* **Output Format**（输出格式）：选择空闲信息的输出格式：
  * **Availability**（是否空闲）：返回给定时间段内是否已有事件重叠。
  * **Booked Slots**（已占用时段）：返回已占用的时间段。
  * **RAW**（原始数据）：返回 API 的原始数据。
* **Timezone**（时区）：响应中使用的时区。默认使用 n8n 的时区。

更多信息请参考 [Freebusy: query | Google Calendar](https://developers.google.com/calendar/api/v3/reference/freebusy/query) API 文档。
