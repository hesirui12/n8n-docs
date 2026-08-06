---
title: Google Sheets Trigger 节点常见问题
description: >-
  n8n 中 Google Sheets Trigger（谷歌表格触发器）节点的常见问题与解答文档。包含问题详情和
  建议的解决方案。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Google Sheets Trigger 节点常见问题
originalFilePath: >-
  integrations/builtin/trigger-nodes/n8n-nodes-base.googlesheetstrigger/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googlesheetstrigger/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googlesheetstrigger/common-issues
layout:
  description:
    visible: false
---

# Google Sheets Trigger 节点常见问题

> **大白话**：这一页讲 Google Sheets Trigger（谷歌表格触发器）节点最常见的三个坑：①测试时点了执行按钮后一直「卡住」监听不到结束——多半是反向代理没开 websocket；②日期时间显示成一串数字——打开 DateTime Render 选项，改成 Formatted String 就行。

以下是 [Google Sheets Trigger 节点](README.md) 的常见错误和问题，以及排查、解决步骤。

## 一直卡在「等待触发器事件」状态

用 **Execute step（执行此步骤）** 或 **Execute workflow（执行工作流）** 按钮测试 Google Sheets Trigger 节点时，执行可能看起来卡住了，无法停止监听事件。如果遇到这种情况，你可能需要退出当前工作流再重新打开，来重置画布。

「监听事件卡住」通常是由 n8n 之外的网络配置问题导致的。具体来说，当你把 n8n 部署在反向代理后面，却没有配置 websocket 代理时，经常会出现这个现象。

解决办法：检查你的反向代理配置（Nginx、Caddy、Apache HTTP Server、Traefik 等），启用 websocket 支持。

## 日期和时间列显示成了数字

Google Sheets 有好几种显示日期时间的方式。

[**序列号（serial number）** 格式](https://developers.google.com/sheets/api/reference/rest/v4/DateTimeRenderOption)由 Lotus 1-2-3 带火、被各类表格软件广泛使用，它把日期表示成一个小数：整数部分（小数点左边）代表自 1899 年 12 月 30 日以来的天数；小数部分（小数点右边）代表一天 24 小时中的时刻（例如 `.5` 表示中午 12 点）。

想要换一种日期时间格式，可以在 Google Sheets Trigger 节点里调整。前提是 **Trigger On（触发时机）** 设置为 **Row Added（新增行）**：

1. 打开画布上的 Google Sheets Trigger 节点。
2. 选择 **Add option（添加选项）**。
3. 选择 **DateTime Render（日期时间渲染）**。
4. 把 **DateTime Render** 改为 **Formatted String（格式化字符串）**。

这样 Google Sheets Trigger 节点就会按照单元格的数字格式，把日期、时间、日期时间和时长字段输出成字符串。

数字格式取决于表格的语言区域（locale）设置。你可以打开表格，选择 **File > Settings（文件 > 设置）** 来修改语言区域。在 **General（常规）** 标签页中，把 **Locale（语言区域）** 设为你要的地区，然后选择 **Save settings（保存设置）**。
