---
title: Google Calendar 节点 Event 操作文档
contentType:
  - integration
  - reference
priority: high
nodeTitle: Google Calendar 节点 Event 操作文档
originalFilePath: >-
  integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar/event-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar/event-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar/event-operations
description: >-
  了解如何在 n8n 中使用 Google Calendar 节点 Event 节点。按照技术文档把 Google Calendar 节点 Event 节点集成到你的工作流中。
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
# Event 操作

> **大白话**：这个页面教你用 Google Calendar 节点对「日历事件」（就是日程）做增删改查：新建日程、删除日程、读取某个日程、批量读取日程、修改日程，还能设置重复、邀请人、提醒等。

使用这些操作可以在 Google Calendar 中创建、删除、获取和更新事件。关于 Google Calendar 节点本身的更多信息，请参考 [Google Calendar](./README.md)。

## 创建事件

用这个操作向 Google Calendar 添加一个事件。

填写以下参数：

* **Credential to connect with**（要连接的凭证）：创建或选择一个已有的 [Google Calendar 凭证](../../credentials/google/README.md)。
* **Resource**（资源）：选择 **Event**。
* **Operation**（操作）：选择 **Create**。
* **Calendar**（日历）：选择要添加事件的日历。选 **From list**（从列表选择）从下拉框里选标题，或选 **By ID**（按 ID）输入日历 ID。
* **Start Time**（开始时间）：事件的开始时间。默认使用一个表达式，取当前时间（`{{ $now }}`）。
* **End Time**（结束时间）：事件的结束时间。默认使用一个表达式，取从现在起一小时后（`{{ $now.plus(1, 'hour') }}`）。
* **Use Default Reminders**（使用默认提醒）：是否按照日历配置为该事件启用默认提醒。

### 选项

* **All Day**（全天）：事件是否为全天事件。
* **Attendees**（参与者）：要邀请到事件中的参与者。
* **Color Name or ID**（颜色名称或 ID）：事件的颜色。从列表中选择，或用表达式指定 ID。
* **Conference Data**（会议数据）：创建一个会议链接（Hangouts、Meet 等）并附加到事件上。
* **Description**（描述）：事件的描述。
* **Guests Can Invite Others**（受邀者可邀请他人）：除组织者外的参与者是否可以邀请其他人加入事件。
* **Guests Can Modify**（受邀者可修改）：除组织者外的参与者是否可以修改事件。
* **Guests Can See Other Guests**（受邀者可查看其他受邀者）：除组织者外的参与者是否可以查看事件的其他参与者。
* **ID**：事件的 ID（不透明标识符）。
* **Location**（地点）：事件的所在地点，自由文本格式。
* **Max Attendees**（最大参与者数）：响应中最多包含的参与者数量。如果参与者超过指定数量，只返回参与者信息。
* **Repeat Frequency**（重复频率）：重复事件的重复间隔。
* **Repeat How Many Times?**（重复多少次）：重复事件要创建的次数。
* **Repeat Until**（重复到）：重复事件应该停止的日期。
* **RRULE**（重复规则）：重复规则。设置后，会忽略 Repeat Frequency、Repeat How Many Times 和 Repeat Until 参数。
* **Send Updates**（发送更新通知）：是否发送关于新事件创建的通知。
* **Show Me As**（显示状态）：事件是否在日历上占用时间。
* **Summary**（标题）：事件的标题。

更多信息请参考 [Events: insert | Google Calendar](https://developers.google.com/calendar/api/v3/reference/events/insert) API 文档。

## 删除事件

用这个操作从 Google Calendar 中删除一个事件。

填写以下参数：

* **Credential to connect with**（要连接的凭证）：创建或选择一个已有的 [Google Calendar 凭证](../../credentials/google/README.md)。
* **Resource**（资源）：选择 **Event**。
* **Operation**（操作）：选择 **Delete**。
* **Calendar**（日历）：选择要删除事件的日历。选 **From list**（从列表选择）从下拉框里选标题，或选 **By ID**（按 ID）输入日历 ID。
* **Event ID**（事件 ID）：要删除的事件的 ID。

### 选项

* **Send Updates**（发送更新通知）：是否发送关于删除事件的通知。

更多信息请参考 [Events: delete | Google Calendar](https://developers.google.com/calendar/api/v3/reference/events/delete) API 文档。

## 获取单个事件

用这个操作从 Google Calendar 中获取一个事件。

填写以下参数：

* **Credential to connect with**（要连接的凭证）：创建或选择一个已有的 [Google Calendar 凭证](../../credentials/google/README.md)。
* **Resource**（资源）：选择 **Event**。
* **Operation**（操作）：选择 **Get**。
* **Calendar**（日历）：选择要获取事件的日历。选 **From list**（从列表选择）从下拉框里选标题，或选 **By ID**（按 ID）输入日历 ID。
* **Event ID**（事件 ID）：要获取的事件的 ID。

### 选项

* **Max Attendees**（最大参与者数）：响应中最多包含的参与者数量。如果参与者超过指定数量，只返回参与者信息。
* **Return Next Instance of Recurrent Event**（返回重复事件的下一次实例）：是否返回重复事件的下一次实例，而不是事件本身。
* **Timezone**（时区）：响应中使用的时区。默认使用 n8n 的时区。

更多信息请参考 [Events: get | Google Calendar](https://developers.google.com/calendar/api/v3/reference/events/get) API 文档。

## 获取多个事件

用这个操作从 Google Calendar 中获取一个以上事件。

填写以下参数：

* **Credential to connect with**（要连接的凭证）：创建或选择一个已有的 [Google Calendar 凭证](../../credentials/google/README.md)。
* **Resource**（资源）：选择 **Event**。
* **Operation**（操作）：选择 **Get Many**。
* **Calendar**（日历）：选择要获取事件的日历。选 **From list**（从列表选择）从下拉框里选标题，或选 **By ID**（按 ID）输入日历 ID。
* **Return All**（返回全部）：是否返回全部结果，还是只返回给定数量上限的结果。
* **Limit**（限制）：（未选择 "Return All" 时）最多返回的结果数量。
* **After**（在此之后）：获取这个时间之后发生的事件。事件至少有一部分发生在这个时间之后。默认使用一个表达式，取当前时间（`{{ $now }}`）。把字段切换为 "fixed"（固定）可以用日期控件选择日期。
* **Before**（在此之前）：获取这个时间之前发生的事件。事件至少有一部分发生在这个时间之前。默认使用一个表达式，取当前时间加一周（`{{ $now.plus({ week: 1 }) }}`）。把字段切换为 "fixed"（固定）可以用日期控件选择日期。

### 选项

* **Fields**（字段）：指定要返回的字段。默认返回 Google 预定义的一组常用字段。使用 `"*"` 返回所有字段。更多信息请参考 [Google Calendar 关于部分资源的文档](https://developers.google.com/calendar/api/guides/performance#partial)。
* **iCalUID**：指定要包含在响应中的事件 ID（iCalendar 格式）。
* **Max Attendees**（最大参与者数）：响应中最多包含的参与者数量。如果参与者超过指定数量，只返回参与者信息。
* **Order By**（排序方式）：响应中事件的排序方式。
* **Query**（搜索词）：自由文本搜索词，用于查找匹配的事件。这会搜索除扩展属性外的所有字段。
* **Recurring Event Handling**（重复事件处理方式）：对重复事件的处理方式：
  * **All Occurrences**（全部实例）：返回指定时间范围内重复事件的全部实例。
  * **First Occurrence**（第一个实例）：返回指定时间范围内重复事件的第一个事件。
  * **Next Occurrence**（下一个实例）：返回指定时间范围内重复事件的下一个实例。
* **Show Deleted**（显示已删除）：是否在结果中包含已删除的事件（状态为 "cancelled"，即"已取消"）。
* **Show Hidden Invitations**（显示隐藏的邀请）：是否在结果中包含隐藏的邀请。
* **Timezone**（时区）：响应中使用的时区。默认使用 n8n 的时区。
* **Updated Min**（最早更新时间）：事件最后修改时间的下限（[RFC 3339 时间戳](https://datatracker.ietf.org/doc/html/rfc3339)格式）。

更多信息请参考 [Events: list | Google Calendar](https://developers.google.com/calendar/api/v3/reference/events/list) API 文档。

## 更新事件

用这个操作更新 Google Calendar 中的一个事件。

填写以下参数：

* **Credential to connect with**（要连接的凭证）：创建或选择一个已有的 [Google Calendar 凭证](../../credentials/google/README.md)。
* **Resource**（资源）：选择 **Event**。
* **Operation**（操作）：选择 **Update**。
* **Calendar**（日历）：选择要添加事件的日历。选 **From list**（从列表选择）从下拉框里选标题，或选 **By ID**（按 ID）输入日历 ID。
* **Event ID**（事件 ID）：要更新的事件的 ID。
* **Modify**（修改方式）：对于重复事件，选择是更新整个重复事件，还是只更新重复事件的某个具体实例。
* **Use Default Reminders**（使用默认提醒）：是否按照日历配置为该事件启用默认提醒。
* **Update Fields**（要更新的字段）：要更新的事件字段：
  * **All Day**（全天）：事件是否为全天事件。
  * **Attendees**（参与者）：要邀请到事件中的参与者。可以选择添加参与者，或替换现有的参与者列表。
  * **Color Name or ID**（颜色名称或 ID）：事件的颜色。从列表中选择，或用表达式指定 ID。
  * **Description**（描述）：事件的描述。
  * **End**（结束时间）：事件的结束时间。
  * **Guests Can Invite Others**（受邀者可邀请他人）：除组织者外的参与者是否可以邀请其他人加入事件。
  * **Guests Can Modify**（受邀者可修改）：除组织者外的参与者是否可以修改事件。
  * **Guests Can See Other Guests**（受邀者可查看其他受邀者）：除组织者外的参与者是否可以查看事件的其他参与者。
  * **ID**：事件的 ID（不透明标识符）。
  * **Location**（地点）：事件的所在地点，自由文本格式。
  * **Max Attendees**（最大参与者数）：响应中最多包含的参与者数量。如果参与者超过指定数量，只返回参与者信息。
  * **Repeat Frequency**（重复频率）：重复事件的重复间隔。
  * **Repeat How Many Times?**（重复多少次）：重复事件要创建的次数。
  * **Repeat Until**（重复到）：重复事件应该停止的日期。
  * **RRULE**（重复规则）：重复规则。设置后，会忽略 Repeat Frequency、Repeat How Many Times 和 Repeat Until 参数。
  * **Send Updates**（发送更新通知）：是否发送关于新事件创建的通知。
  * **Show Me As**（显示状态）：事件是否在日历上占用时间。
  * **Start**（开始时间）：事件的开始时间。
  * **Summary**（标题）：事件的标题。
  * **Visibility**（可见性）：事件的可见性：
    * **Confidential**（机密）：事件是私密的。此值仅为兼容性提供。
    * **Default**（默认）：使用日历上事件的默认可见性。
    * **Public**（公开）：事件是公开的，日历的所有阅读者都能看到事件详情。
    * **Private**（私有）：事件是私有的，只有事件参与者可以查看事件详情。

更多信息请参考 [Events: update | Google Calendar](https://developers.google.com/calendar/api/v3/reference/events/update) API 文档。
