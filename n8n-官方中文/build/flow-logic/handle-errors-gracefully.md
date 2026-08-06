---
contentType: howto
description: 如何处理执行（execution）过程中出现的错误。
nodeTitle: 优雅地处理错误
originalFilePath: flow-logic/error-handling.md
originalUrl: 'https://docs.n8n.io/flow-logic/error-handling'
url: 'https://docs.n8n.io/build/flow-logic/handle-errors-gracefully'
layout:
  description:
    visible: false
---

# 错误处理 / Error handling

在设计你的工作流逻辑时，一个良好的习惯是：**提前考虑可能出现的错误**，并设置好「优雅地处理」它们的方法。借助错误工作流（error workflow），你可以控制 n8n 在**工作流执行失败**时如何做出响应。

{% hint style="info" %}
**大白话**：任何工作流都可能出错——网络断了、接口报错、数据格式不对、节点配置写错……如果你不处理，出错时 n8n 只会默默地标记失败，你甚至可能不知道。错误工作流就像「自动报警器」：一旦执行失败，n8n 就自动跑一条专门处理失败的流程，比如给你发邮件、发 Slack 消息，让你第一时间知道并处理。
{% endhint %}

{% hint style="info" %}
**排查错误（Investigating errors）**

要调查失败的执行，你可以：

* 查看你的[执行记录（Executions）](../understand-workflows/understand-executions/README.md)：可以查看[单个工作流的执行记录](../understand-workflows/understand-executions/view-executions-for-a-single-workflow.md)，也可以查看[你有权访问的所有工作流的执行记录](../understand-workflows/understand-executions/view-all-executions.md)。你还可以[把之前某次执行的数据加载（load data from previous execution）](../understand-workflows/understand-executions/debug-executions.md)到当前工作流中，用于调试。
* 启用[日志流（Log streaming）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/stream-logs-to-external-systems)，把日志流式输出到外部系统。

{% endhint %}

{% hint style="info" %}
**大白话**：错误工作流负责「报警」，而这一节教你怎么「查案」——执行失败后去哪儿看现场。n8n 会把每次执行（成功或失败）都记录下来，你可以翻看执行记录找失败原因；想更详细地分析，还能把某次失败执行的数据「回放」到当前工作流里，一步步看是哪一步出的问题。日志流则是把日志实时推送给外部系统（比如 Elastic、Splunk），适合正式部署后做集中监控。
{% endhint %}

## 如何设置错误工作流？ / How do I set up an error workflow?

对于每个工作流，你都可以在**工作流设置（Workflow Settings）**中指定一个错误工作流。当一次执行失败时，这个错误工作流就会运行。也就是说，举个例子，当工作流执行出错时，你可以用错误工作流发送电子邮件（email）或 Slack 提醒。

{% hint style="info" %}
**大白话**：设置步骤很简单——打开工作流右侧的「设置」，找到错误工作流（Error Workflow）选项，选一条已经建好的工作流。之后只要这条工作流执行失败，n8n 就会自动去运行你选的那条错误工作流。你可以把「发邮件」「发 Slack」「写日志」都放进错误工作流里。
{% endhint %}

错误工作流必须以 [Error Trigger（错误触发器）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.errortrigger)开头。

{% hint style="info" %}
**大白话**：错误工作流和普通工作流一样，也是一条工作流，但它的「开头」必须是 `Error Trigger`（错误触发器）节点。这个节点专门用来「接住」失败事件——错误一发生，它就会启动，然后把错误信息（哪个工作流失败了、为什么失败）作为数据传给后面的节点。
{% endhint %}

你可以让**多个工作流共用同一个错误工作流**。

{% hint style="info" %}
**大白话**：你不需要给每个工作流都单独建一条错误工作流。建一条通用的（比如「失败就发邮件通知我」），然后在各个工作流的设置里都指向它，一处维护、处处生效。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/odStQfuU7M0KPowwye9k/" %}

## 错误工作流会收到哪些数据？ / What data does an error workflow receive?

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/rAiMowL1bA7C4GcH8FyS/" %}

{% hint style="info" %}
**大白话**：上面这段嵌入内容会详细介绍错误工作流能拿到哪些信息——通常包括：哪个工作流失败了、在哪个节点出的错、错误信息是什么、出错时数据长什么样等。你可以把这些信息拼进邮件正文或 Slack 消息里，让报警消息自带「故障现场」。
{% endhint %}

## 如何用 Stop and Error（停止并报错）节点故意让工作流失败？ / How do I make a workflow fail on purpose with the Stop and Error node?

当你创建并设置了错误工作流之后，n8n 会在执行失败时运行它。通常，失败是由这类原因引起的：节点设置里的错误（errors in node settings）、或者工作流内存不足（running out of memory）。

你可以向工作流中添加 [Stop And Error（停止并报错）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.stopanderror)节点，来**在你选择的特定情况下**强制让执行失败，从而触发错误工作流。

{% hint style="info" %}
**大白话**：大部分失败是「被动」发生的（配置错了、没内存了）。但有时候你想「主动」报错——比如：数据校验没通过（订单金额是负数）、某个关键条件不满足（库存不足）——这时你可以放一个 `Stop And Error`（停止并报错）节点：一旦执行走到它这里，它就立刻「掐断」执行并标记为失败，同时触发错误工作流。这样你就能把「业务规则」也变成可控的错误，统一走报警通道。注意别把它和 `Stop And Error` 的兄弟 `Stop`（仅停止、不报错）搞混：`Stop` 只是安静地结束，不会触发错误工作流。
{% endhint %}
