---
title: Schedule Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 Schedule Trigger 节点。按照技术文档，把 Schedule Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: n8n-nodes-base.scheduletrigger
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger
layout:
  description:
    visible: false
---

# Schedule Trigger 节点

{% hint style="info" %}
**大白话**：Schedule Trigger（定时触发）节点就是你的工作流「闹钟」。你可以设置每隔几秒、几分钟、几小时、几天、几周、几个月运行一次，也可以直接用 cron 表达式精确控制（比如「每周一中午 12 点」）。它是触发器节点，工作流靠它「到点自动开工」。注意：用它当触发器的工作流必须**保存并发布**才会真正按时运行。
{% endhint %}

使用 Schedule Trigger 节点，在固定的时间间隔和时间点运行工作流。它的工作方式类似于 Unix 类系统中的 Cron 软件工具。

{% hint style="info" %}
**你必须发布工作流**

如果工作流使用 Schedule 节点作为触发器，请确保保存并发布该工作流。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ttmJg4aaEfjB4LyKpCzt/" %}

## 节点参数（Node parameters）

添加 **Trigger Rules（触发规则）** 来决定触发器应该在何时运行。

使用 **Trigger Interval（触发间隔）** 来选择调度触发器的时间间隔单位。所有其他参数都取决于你选择的间隔。从以下选项中选择：

- [秒触发间隔（Seconds trigger interval）](#seconds-trigger-interval)
- [分钟触发间隔（Minutes trigger interval）](#minutes-trigger-interval)
- [小时触发间隔（Hours trigger interval）](#hours-trigger-interval)
- [天触发间隔（Days trigger interval）](#days-trigger-interval)
- [周触发间隔（Weeks trigger interval）](#weeks-trigger-interval)
- [月触发间隔（Months trigger interval）](#months-trigger-interval)
- [自定义（Cron）间隔（Custom (Cron) interval）](#custom-cron-interval)

你可以添加多条 **Trigger Rules（触发规则）**，让节点按不同的调度计划运行。

每个 **Trigger Interval（触发间隔）** 的详细配置方法，请参阅下面的小节。更多示例请参阅 [模板和示例（Templates and examples）](#templates-and-examples)。

### 秒触发间隔（Seconds trigger interval）

* **Seconds Between Triggers（触发间隔秒数）**：输入每次工作流触发之间的秒数。例如，如果你在这里输入 `30`，触发器将每 30 秒运行一次。

### 分钟触发间隔（Minutes trigger interval）

* **Minutes Between Triggers（触发间隔分钟数）**：输入每次工作流触发之间的分钟数。例如，如果你在这里输入 `5`，触发器将每 5 分钟运行一次。

### 小时触发间隔（Hours trigger interval）

* **Hours Between Triggers（触发间隔小时数）**：输入每次工作流触发之间的小时数。
* **Trigger at Minute（触发分钟）**：输入节点运行时间点的分钟数（整点过后的第几分钟），范围从 `0` 到 `59`。

例如，如果你输入 `6` 作为 **Hours Between Triggers（触发间隔小时数）**，输入 `30` 作为 **Trigger at Minute（触发分钟）**，节点将每 6 小时运行一次，在整点过后 30 分钟触发。

### 天触发间隔（Days trigger interval）

* **Days Between Triggers（触发间隔天数）**：输入每次工作流触发之间的天数。
* **Trigger at Hour（触发小时）**：选择一天中触发节点的小时。
* **Trigger at Minute（触发分钟）**：输入节点运行时间点的分钟数（整点过后的第几分钟），范围从 `0` 到 `59`。


例如，如果你输入 `2` 作为 **Days Between Triggers（触发间隔天数）**，**Trigger at Hour（触发小时）** 选择 **9am（上午 9 点）**，**Trigger at Minute（触发分钟）** 输入 `15`，节点将每两天在上午 9:15 运行一次。


### 周触发间隔（Weeks trigger interval）

* **Weeks Between Triggers（触发间隔周数）**：输入每次工作流触发之间的周数。
* **Trigger on Weekdays（触发的星期）**：选择一周中你想触发节点的日子。
* **Trigger at Hour（触发小时）**：选择一天中触发节点的小时。
* **Trigger at Minute（触发分钟）**：输入节点运行时间点的分钟数（整点过后的第几分钟），范围从 `0` 到 `59`。

例如，如果你输入 `2` 作为 **Weeks Between Triggers（触发间隔周数）**，**Trigger on Weekdays（触发的星期）** 选择 **Monday（周一）**，**Trigger at Hour（触发小时）** 选择 **3pm（下午 3 点）**，**Trigger at Minute（触发分钟）** 输入 `30`，节点将每两周在周一下午 3:30 运行。

### 月触发间隔（Months trigger interval）

* **Months Between Triggers（触发间隔月数）**：输入每次工作流触发之间的月数。
* **Trigger at Day of Month（触发日期）**：输入应该触发的月份中的日子，范围从 `1` 到 `31`。如果某个月没有这一天，节点就不会触发。例如，如果你在这里输入 `30`，节点在 2 月就不会触发。
* **Trigger at Hour（触发小时）**：选择一天中触发节点的小时。
* **Trigger at Minute（触发分钟）**：输入节点运行时间点的分钟数（整点过后的第几分钟），范围从 `0` 到 `59`。

例如，如果你输入 `3` 作为 **Months Between Triggers（触发间隔月数）**，**Trigger at Day of Month（触发日期）** 输入 `28`，**Trigger at Hour（触发小时）** 选择 **9am（上午 9 点）**，**Trigger at Minute（触发分钟）** 输入 `0`，节点将每季度在每月的 28 日上午 9:00 运行。

### 自定义（Cron）间隔（Custom (Cron) interval）

输入自定义的 cron **Expression（表达式）** 来设置触发器的调度计划。

要生成 cron 表达式，你可以使用 [crontab guru](https://crontab.guru)。把你在 crontab guru 上生成的 cron 表达式粘贴到 n8n 的 **Expression（表达式）** 字段中。

#### 示例（Examples）


|类型（Type）|Cron 表达式（Cron Expression）|描述（Description）|
|---|---|---|
|Every X Seconds（每隔 X 秒）|`*/10 * * * * *`|每 10 秒。|
|Every X Minutes（每隔 X 分钟）|`*/5 * * * *`|每 5 分钟。|
|Hourly（每小时）|`0 * * * *`|每小时整点。|
|Daily（每天）|`0 6 * * *`|每天上午 6:00。|
|Weekly（每周）|`0 12 * * 1`|每周一中午。|
|Monthly（每月）|`0 0 1 * *`|每月 1 号午夜。|
|Every X Days（每隔 X 天）|`0 0 */3 * *`|每 3 天午夜。|
|Only Weekdays（仅工作日）|`0 9 * * 1-5`|周一至周五上午 9:00。|
|Custom Hourly Range（自定义小时范围）|`0 9-17 * * *`|每天上午 9:00 到下午 5:00 每小时。|
|Quarterly（每季度）|`0 0 1 1,4,7,10 *`|1 月、4 月、7 月和 10 月的 1 号午夜。|


{% hint style="warning" %}
**在 Cron 表达式中使用变量**

虽然可以在定时触发中使用变量，但它们的值只在工作流发布时才被求值。如果你在工作流发布后在设置中修改了某个变量的值，这些修改不会改变 cron 调度计划。要重新求值该变量，请取消发布工作流，然后重新发布。
{% endhint %}

#### 为什么 Cron 表达式中有六个星号（Why there are six asterisks in the Cron expression）

Cron 表达式中的第六个星号代表秒。设置它是可选的。即使你不设置秒的值，节点也会执行。

|  (*)  |  *  |  *  |  *  |  *  |  *  |
|:--:|:--:|:--:|:--:|:--:|:--:|
|(秒 second)|分钟 minute|小时 hour|月中的日 day of month|月 month|星期（周日-周六）day of week(Sun-Sat)|

## 模板和示例（Templates and examples）

[浏览 n8n-nodes-base.scheduletrigger 集成模板](https://n8n.io/integrations/schedule-trigger) 或 [搜索所有模板](https://n8n.io/workflows/)

## 常见问题（Common issues）

对于常见问题或疑问以及建议的解决方案，请参阅 [常见问题（Common Issues）](common-issues.md)。
