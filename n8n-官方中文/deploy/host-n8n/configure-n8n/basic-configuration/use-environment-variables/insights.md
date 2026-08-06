---
title: 洞察（Insights）环境变量
description: >-
  通过环境变量为你的自托管 n8n 实例配置洞察（Insights）指标采集。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 洞察（Insights）
originalFilePath: hosting/configuration/environment-variables/insights.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/insights'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/insights
layout:
  description:
    visible: false
---

# 洞察（Insights）环境变量

{% hint style="info" %}
**大白话**：Insights（洞察）是给实例所有者和管理员看的「工作流体检报告」——哪些工作流跑得慢、成功率多少、随时间怎么变化。这一页的变量控制这些统计数据的采集、压缩（compaction）、清理和保留时间，帮你平衡「看得见」和「数据库别太大」。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

Insights 让实例所有者和管理员可以看到工作流随时间的表现情况。详情请参见[洞察（Insights）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/track-usage-with-insights)。

{% hint style="warning" %}
**存储与压缩阈值（Storage and compaction thresholds）**

`N8N_INSIGHTS_COMPACTION_HOURLY_TO_DAILY_THRESHOLD_DAYS` 和 `N8N_INSIGHTS_COMPACTION_DAILY_TO_WEEKLY_THRESHOLD_DAYS` 设置了 n8n 在每次压缩步骤之前（先从小时桶压缩到天桶，再从天桶压缩到周桶），保留高分辨率洞察数据（按一小时一个桶存储的指标）多少天。你可以在自己的实例上配置这些天数。

调高这些值会推迟压缩，从而往 `insights_by_period` 表里添加更多行，增加数据库占用。关于这与保留时间的关系，请参见[洞察（Insights）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/track-usage-with-insights#disable-or-configure-insights-metrics-collection)。
{% endhint %}

如果在压缩期间遇到数据库负载过高的问题，可以通过调整以下设置来调节压缩的运行频率和每次运行的工作量：

- 调低 `N8N_INSIGHTS_COMPACTION_INTERVAL_MINUTES` 让压缩运行得更频繁。这可以减少两次运行之间积累的数据量。
- 调高 `N8N_INSIGHTS_COMPACTION_BATCH_DELAY_MILLISECONDS` 让批次之间的等待时间更长。
- 调低 `N8N_INSIGHTS_COMPACTION_MAX_BATCHES_PER_RUN` 让每次运行处理的批次更少。
- 调低 `N8N_INSIGHTS_COMPACTION_MAX_RUNTIME_SECONDS` 让每次运行更早结束。

这些设置只控制压缩的工作负载和调度，不会改变保留时间，也不会改变每个压缩步骤的年龄阈值。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :--- | :------ | :---------- |
| `N8N_DISABLED_MODULES` | String | - | 设为 `insights` 可以禁用该功能以及该实例的指标采集。 |
| `N8N_INSIGHTS_COMPACTION_BATCH_SIZE` | Number | `500` | 单批压缩的原始洞察数据条数。 |
| `N8N_INSIGHTS_COMPACTION_BATCH_DELAY_MILLISECONDS` | Number | `100` | 两个完整压缩批次之间的延迟（毫秒）。调高这个值可以让批次之间等待更久。设为 `0` 可跳过延迟。 |
| `N8N_INSIGHTS_COMPACTION_DAILY_TO_WEEKLY_THRESHOLD_DAYS` | Number | `180` | 超过这个天数（年龄）后，n8n 会把按天存储的洞察数据压缩为按周存储。 |
| `N8N_INSIGHTS_COMPACTION_HOURLY_TO_DAILY_THRESHOLD_DAYS` | Number | `90` | 超过这个天数（年龄）后，n8n 会把按小时存储的洞察数据压缩为按天存储。 |
| `N8N_INSIGHTS_COMPACTION_INTERVAL_MINUTES` | Number | `60` | 压缩运行的间隔（分钟）。调低这个值可以让压缩运行得更频繁，减少两次运行之间积累的数据量。 |
| `N8N_INSIGHTS_COMPACTION_MAX_BATCHES_PER_RUN` | Number | `1000` | 一次运行最多处理的压缩批次数量。调低这个值可以让每次运行处理更少的批次。设为 `0` 可禁用此限制。 |
| `N8N_INSIGHTS_COMPACTION_MAX_RUNTIME_SECONDS` | Number | `300` | 一次压缩运行的最长运行时间（秒）。调低这个值可以让每次运行更早结束。设为 `0` 可禁用此限制。 |
| `N8N_INSIGHTS_FLUSH_BATCH_SIZE` | Number | `1000` | 在写入数据库之前，缓冲区中最多保留的洞察数据条数。 |
| `N8N_INSIGHTS_FLUSH_INTERVAL_SECONDS` | Number | `30` | n8n 把洞察数据写入数据库的间隔（秒）。 |
| `N8N_INSIGHTS_MAX_AGE_DAYS` | Number | `365` | n8n 在清理（pruning）之前保留压缩后洞察数据的天数。最大值是 730（两年）。 |
| `N8N_INSIGHTS_PRUNE_CHECK_INTERVAL_HOURS` | Number | `24` | 实例多久检查一次（小时）并删除超过有效最大保留年龄的洞察数据。 |
