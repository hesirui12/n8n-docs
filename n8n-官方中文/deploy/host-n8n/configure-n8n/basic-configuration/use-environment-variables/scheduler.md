---
title: 调度器（Scheduler）环境变量
description: 用于为自托管 n8n 实例配置持久化调度器（durable scheduler）的环境变量。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 调度器（Scheduler）
originalFilePath: hosting/configuration/environment-variables/scheduler.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/scheduler'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/scheduler
layout:
  description:
    visible: false
---

# 调度器（Scheduler）环境变量

{% hint style="info" %}
**大白话**：普通的定时任务存在每个实例的内存里，重启就丢了。持久化调度器（durable scheduler）把定时任务的安排记录到数据库里，重启不丢、多实例也不会重复执行。这一页的变量用来调节它的「预记录窗口、执行节奏、崩溃恢复、历史保留」等细节——默认值基本够用，除非你有特殊需求。
{% endhint %}

这些环境变量用于配置持久化调度器（durable scheduler）。它从数据库支撑的队列中运行基于时间的工作流，而不是从每个实例的内存中运行。关于持久化调度器改变了什么、如何开启、如何工作，请参见[持久化调度器](../../durable-scheduler.md)。

{% hint style="warning" %}
**预览功能**

持久化调度器是一个在环境变量开关（feature flag）后面的预览功能。在功能正式发布（general availability）之前，相关环境变量和默认行为可能会发生变化。
{% endhint %}

## 启用调度器

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :--- | :------ | :---------- |
| `N8N_SCHEDULER_ENABLED` | Boolean | `false` | 是否开启持久化调度器。开启后，调度器会在执行前把计划好的运行记录到数据库中，这样重启不会丢失它们；并且在多实例环境下，每次运行只会执行一次。需要 `N8N_USE_WORKFLOW_PUBLICATION_SERVICE` 来接管定时触发器（Schedule Trigger）节点。 |

## 物化（Materialization）

控制调度器提前多久、以多高的频率把即将到来的运行记录到数据库中。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :--- | :------ | :---------- |
| `N8N_SCHEDULER_MATERIALIZATION_WINDOW` | Number | `60` | 调度器提前多久（秒）记录即将到来的运行。窗口越大，预先提交的运行越多（对停机更有韧性，但会产生稍多的存储写入）。必须大于 0。 |
| `N8N_SCHEDULER_MATERIALIZATION_INTERVAL` | Number | `10` | 调度器每隔多久（秒）扫描一次活动计划，记录落在窗口内的运行。必须大于 0。 |
| `N8N_SCHEDULER_MATERIALIZATION_TIMEOUT` | Number | `60` | 单次扫描最多运行多久（秒），超过后会被放弃，并在下一个间隔重试。用于防止扫描卡在慢数据库上。必须大于 0。 |

## 执行（Execution）

控制调度器多久启动一次到期的运行，以及它如何认领每次运行，确保只有一个实例执行它。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :--- | :------ | :---------- |
| `N8N_SCHEDULER_EXECUTOR_INTERVAL` | Number | `5` | 调度器每隔多久（秒）检查一次已记录且时间已到的运行并启动它们。这决定了「计划时间」到「实际开始」之间的最坏延迟。调小可以获得更精确的定时，代价是更频繁的轮询。必须大于 0。 |
| `N8N_SCHEDULER_EXECUTOR_TIMEOUT` | Number | `60` | 单次到期运行检查最多运行多久（秒），超过后会被放弃，并在下一个间隔重试。必须大于 0。 |
| `N8N_SCHEDULER_LEASE_DURATION` | Number | `60` | 一个实例对它所认领的运行持有排他占用权多久（秒），这样其他实例不会启动同一次运行。如果实例在完成前停止，认领会在这么长时间后过期，其他实例可以接管。请把它保持在「一次运行启动所需时间」之上并留有余量：太短有重复运行的风险，太长会延迟崩溃后的恢复。必须大于 0。 |
| `N8N_SCHEDULER_CLAIM_BATCH_SIZE` | Number | `100` | 单次认领一次性从队列中取走的最多运行数。更大的批次能更快地消化积压，但每个周期会在一个实例上持有更多工作。必须大于 0。 |

## 恢复（Recovery）

控制「回收器」（reaper），它负责释放那些被实例认领但从未完成的运行，让其他实例可以接管。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :--- | :------ | :---------- |
| `N8N_SCHEDULER_REAPER_INTERVAL` | Number | `30` | 调度器每隔多久（秒）寻找那些被实例认领但从未完成的运行（例如崩溃或关机后），并让它们重新可用。必须大于 0。 |
| `N8N_SCHEDULER_REAPER_BATCH_SIZE` | Number | `100` | 单次回收（reaper）遍历最多回收多少个认领已过期的运行。更大的批次能更快地恢复积压，但每次遍历会在一个实例上持有更多工作。必须大于 0。 |
| `N8N_SCHEDULER_REAPER_TIMEOUT` | Number | `60` | 单次恢复遍历最多运行多久（秒），超过后会被放弃，并在下一个间隔重试。必须大于 0。 |
| `N8N_SCHEDULER_MAX_ATTEMPTS` | Number | `5` | 一次计划运行可以被重新认领（例如崩溃后）或在出错后重试多少次，超过后 n8n 会放弃它并将其转入死信队列。如果你的基础设施容易发生实例重启或瞬时错误，可以调高它；想更快放弃并继续，可以调低。必须大于 0。 |

## 保留（Retention）

控制调度器把已完成的运行作为历史记录保留多久，以及多久删除一次旧记录。n8n 对失败和错过的运行保留时间比正常完成的更久，好让你有时间发现问题并调试。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :--- | :------ | :---------- |
| `N8N_SCHEDULER_RETENTION` | Number | `86400` | 调度器保留正常完成（成功或被取消）的运行多久（秒）后删除。默认是一天。调大可以保留更多历史，调小可以更快回收数据库空间。必须大于 0。 |
| `N8N_SCHEDULER_FAILED_RETENTION` | Number | `604800` | 调度器保留出问题的运行（失败或错过）多久（秒）后删除。默认是七天。请让它大于 `N8N_SCHEDULER_RETENTION`，以便有时间调试；如果设得更小，调度器会发出警告。必须大于 0。 |
| `N8N_SCHEDULER_RETENTION_INTERVAL` | Number | `3600` | 调度器每隔多久（秒）删除一次超过保留窗口的已完成运行。默认是一小时。必须大于 0。 |
| `N8N_SCHEDULER_RETENTION_TIMEOUT` | Number | `300` | 单次清理遍历最多运行多久（秒），超过后会被放弃，并在下一个间隔重试。默认是五分钟。必须大于 0。 |

## 跨实例协调

控制调度器如何交错它的后台遍历，并在多个实例之间分散数据库负载。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :--- | :------ | :---------- |
| `N8N_SCHEDULER_MAX_CONCURRENT_PASSES` | Number | `10` | 当数据库支持遍历重叠（PostgreSQL）时，一个实例上同一类后台遍历最多可以同时运行多少个。如果某个遍历到期时已达上限，n8n 会跳过它。在 SQLite 上，遍历永远不会重叠，所以此设置无效。必须大于 0。 |
| `N8N_SCHEDULER_JITTER_RATIO` | Number | `0.1` | 为每个周期性遍历的时间添加的一小段随机波动，以间隔时间的比例表示。设为 `0.1` 时，一个本应每 10 秒运行一次的遍历实际上会在 9 到 11 秒之间运行。这能分散同时启动的实例（例如滚动部署期间）的数据库查询。设为 `0` 可得到精确的间隔，调大可以更均匀地分散负载。必须至少为 0 且小于 1。 |

## 计划行为（Schedule behavior）

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :--- | :------ | :---------- |
| `N8N_SCHEDULER_MIN_INTERVAL` | Number | `0` | 同一个计划两次连续运行之间允许的最小间隔（秒）。对于设置得比这个间隔更频繁的计划，n8n 会将其放缓到这个间隔。默认是 `0`，即不限制，完全尊重每个计划自己指定的间隔。设置它可以防止「失控的每秒执行」压垮实例。 |
| `N8N_SCHEDULER_TRIGGER_NODE_MODE` | Enum (`legacy`, `new`) | `legacy` | 定时触发器（Schedule Trigger）节点的「每 N 秒」和「每 N 分钟」计划如何触发。`legacy` 保持与内存调度器一致的时钟对齐定时；`new` 则让运行从激活时刻起稳定地间隔 N 执行。仅影响秒级和分钟级间隔。参见[定时触发器定时](../../durable-scheduler.md#trigger-node-mode)。 |
