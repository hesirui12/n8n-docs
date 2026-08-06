---
title: Schedule Trigger 节点常见问题
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Schedule Trigger node common issues
originalFilePath: >-
  integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/common-issues
description: >-
  n8n（工作流自动化平台）中 Schedule Trigger 节点的常见问题文档。包含问题详情和建议的解决方案。
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

# 常见问题（Common issues）

{% hint style="info" %}
**大白话**：这一页收集了用 Schedule Trigger（定时触发）节点时最常见的问题：cron 表达式写错了怎么办、定时任务为什么在错误的时间运行（多半是时区问题）、变量为什么「改了没生效」（因为变量只在发布时取值）、改了触发间隔为什么不生效（需要重新发布）等。
{% endhint %}

以下是 [Schedule Trigger 节点](./README.md) 的一些常见错误和问题，以及解决或排查它们的步骤。

## 无效的 cron 表达式（Invalid cron expression）

当你把 **Trigger Interval（触发间隔）** 设置为 **Custom (Cron)（自定义 Cron）**，而 n8n 无法理解你的 cron 表达式时，会出现这个错误。这可能意味着你的 cron 表达式中有错误，或者你使用了不兼容的语法。

要排查问题，请检查以下内容：

* 你的 cron 表达式是否符合 [cron 示例](./README.md#custom-cron-interval) 中的语法
* 你的 cron 表达式（去掉 [秒列](./README.md#why-there-are-six-asterisks-in-the-cron-expression) 之后）能否在 [crontab guru](https://crontab.guru/) 上通过验证

## 定时工作流在错误的时间运行（Scheduled workflows run at the wrong time）

如果 Schedule Trigger 节点在错误的时间运行，可能意味着你需要调整 n8n 使用的时区。

### 全局调整时区（Adjust the timezone globally）

如果你使用的是 [n8n Cloud](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/use-n8n-cloud)，请按照 [设置 Cloud 实例时区](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/use-n8n-cloud/configure-cloud/set-your-timezone) 页面上的说明操作，确保 n8n 的执行与你的本地时间同步。

如果你是 [自托管](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n) n8n，请使用 [`GENERIC_TIMEZONE` 环境变量](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/timezone-and-localization) 设置你的全局时区。

### 为单个工作流调整时区（Adjust the timezone for an individual workflow）

要为单个工作流设置时区：

1. 在画布上打开工作流。
2. 选择右上角的 <img src="../../../.gitbook/assets/three-dots-horizontal (2).png" alt="three dots menu" data-size="line"> **Three dots icon（三点图标）**。
3. 选择 **Settings（设置）**。
4. 修改 **Timezone（时区）** 设置。
5. 选择 **Save（保存）**。

### 变量未按预期工作（Variables not working as expected）

虽然可以在定时触发中使用变量，但它们的值只在工作流发布时才被求值。发布工作流后，你可以在设置中修改变量的值，但这不会改变工作流的运行频率。要解决这个问题，你必须停止并发布一个新版本的工作流，才能应用更新后的变量值。

### 修改触发间隔（Changing the trigger interval）

你可以随时更新定时触发的间隔，但它只会在工作流发布时被更新。如果工作流发布后你修改了触发间隔，这些修改要到取消发布工作流、然后发布一个新版本的工作流之后才会生效。

另外，调度计划从你发布工作流的时间开始计算。例如，如果你最初设置了每小时运行一次的调度，并且它应该在 12:00 执行；如果你把它改成每 2 小时运行一次，并在 11:30 发布工作流的新版本，那么下一次执行将在 13:30，也就是从你发布时起 2 小时后。
