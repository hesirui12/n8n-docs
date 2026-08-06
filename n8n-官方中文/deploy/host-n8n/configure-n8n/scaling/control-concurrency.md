---
contentType: explanation
nodeTitle: 控制并发（Control concurrency）
originalFilePath: hosting/scaling/concurrency-control.md
originalUrl: 'https://docs.n8n.io/hosting/scaling/concurrency-control'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/control-concurrency'
layout:
  description:
    visible: false
---

# 自托管并发控制（Self-hosted concurrency control）

{% hint style="info" %}
**仅适用于自托管 n8n（Only for self-hosted n8n）**

本文档介绍的是自托管环境下的并发控制。如果你想了解 n8n Cloud 账户中并发是如何工作的，请阅读 [Cloud 并发（Cloud concurrency）](../../../use-n8n-cloud/understand-concurrency.md)。
{% endhint %}

{% hint style="info" %}
**大白话**：并发（concurrency）就是「同一时刻有多少个工作流在同时运行」。默认情况下，n8n 不限制生产执行的并发数量。如果某个瞬间触发的工作流太多、全部挤在一起同时跑，就可能把服务器的资源（尤其是 Node.js 的事件循环）占满，导致 n8n 变慢甚至没反应。这一页教你在常规模式下给「生产执行」设置并发上限：超出上限的执行会自动排队，等有空位了再按顺序（先进先出）执行。
{% endhint %}

在常规模式（regular mode）下，n8n 不会限制可以同时运行的生产执行（production execution）数量。这可能导致这样一种情况：过多的并发执行挤占事件循环（event loop），造成性能下降和无响应。

为了防止这种情况，你可以在常规模式下为生产执行设置并发限制。使用这个限制来控制同时运行的生产执行数量，并把超出限制的并发生产执行放入队列。这些执行会一直留在队列中，直到有并发容量空出来，然后按先进先出（FIFO）的顺序被处理。

并发控制默认是关闭的。要启用它：

```sh
export N8N_CONCURRENCY_PRODUCTION_LIMIT=20
```

请记住以下几点：

- 并发控制只适用于生产执行：也就是由 Webhook 节点或触发器[^1]节点启动的执行。它不适用于其他任何类型的执行，例如手动执行、子工作流执行、错误执行，或从命令行（CLI）启动的执行。
- 你不能重试队列中的执行。取消或删除一个排队的执行，也会把它从队列中移除。
- 在实例启动时，n8n 会恢复队列中处于并发限制以内的执行，并把其余的执行重新放回队列。
- 要监控并发控制，请留意日志中「执行被加入队列」和「执行被释放」的记录。在未来的版本中，n8n 将在界面上显示并发控制信息。

当你启用并发控制后，可以在项目（project）或工作流（workflow）的「执行（Executions）」标签页顶部看到当前活跃的执行数和配置的限制。

## 与队列模式（Queue mode）的对比

在队列模式下，你可以使用 [`--concurrency` 标志](enable-queue-mode.md#configure-worker-concurrency) 来控制一个 worker（工作进程）可以同时运行多少个任务（job）。

队列模式下的并发控制与常规模式下的并发控制是两种不同的机制，但环境变量 `N8N_CONCURRENCY_PRODUCTION_LIMIT` 同时控制两者。在队列模式下，如果该变量被设置为 `-1` 以外的值，n8n 会从这个变量取值作为限制；否则回退到 `--concurrency` 标志或其默认值。

## 评测并发（Evaluation concurrency）

评测（evaluation）测试运行使用与生产执行分开的并发限制。默认情况下，该限制跟随实例的许可证层级（社区版/专业版 Community/Pro：1，商业版 Business：3，企业版 Enterprise：5）。你可以用 [`N8N_CONCURRENCY_EVALUATION_LIMIT`](../basic-configuration/use-environment-variables/executions.md) 覆盖它。关于界面中的滑杆如何工作，请参考[基于指标的评测（Metric-based evaluations）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/test-and-improve-ai-workflows/use-metrics-to-measure-quality#run-test-cases-in-parallel)。

[^1]: 触发器（trigger）节点是一种特殊的节点，负责在满足某些条件时执行工作流。所有生产工作流都需要至少一个触发器，来决定工作流应该在什么时候运行。
