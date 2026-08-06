---
title: 启用 Prometheus 指标
description: 启用 Prometheus 指标端点（metrics endpoint）。
contentType: howto
nodeTitle: 启用 Prometheus 指标
originalFilePath: hosting/configuration/configuration-examples/prometheus.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/configuration-examples/prometheus'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/enable-prometheus-metrics
layout:
  description:
    visible: false
---

# 启用 Prometheus 指标 / Enable Prometheus metrics

为了收集和暴露指标（metrics），n8n 使用了 [prom-client](https://www.npmjs.com/package/prom-client) 这个库。

`/metrics` 端点（endpoint）默认是关闭的，但你可以使用 `N8N_METRICS` 环境变量来启用它。

{% hint style="info" %}
**大白话**：指标（metrics）就是「运行统计数据」：比如 n8n 处理了多少个任务、成功了几个、失败了几个、现在排队了几个、系统负载如何。Prometheus 是一个流行的开源监控系统，专门负责定时抓取这些数据并保存。Grafana 则负责把这些数据画成好看的图表。启用后，n8n 会提供一个 `/metrics` 网址，Prometheus 定时去这个网址「抓数据」就行了。
{% endhint %}

{% hint style="warning" %}
**不要把指标端点暴露到公网**

只把 `/metrics` 端点暴露给内部使用 Prometheus 数据的服务。**不要**让它能被公网访问，因为它可能泄露关于你的 n8n 实例的敏感运行数据。
{% endhint %}

{% hint style="info" %}
**大白话**：`/metrics` 里的数据非常详细（包括运行了多少任务、失败了多少、队列积压情况等），相当于把你 n8n 的「运行底细」全部公开了。如果被人恶意访问，攻击者能据此判断你的系统负载、找到薄弱环节。所以：这个网址只能在内网访问（比如只允许 Prometheus 所在服务器访问），千万别暴露到公网。在云服务器上，可以通过安全组/防火墙规则限制来源 IP 实现。
{% endhint %}

```bash
export N8N_METRICS=true
```

{% hint style="info" %}
**大白话**：就这么简单——加一行环境变量 `N8N_METRICS=true` 就能开启指标功能。开启后，访问 `http://你的n8n地址:5678/metrics` 就能看到一堆统计数据（如果 n8n 跑在 5678 端口）。先用浏览器看一眼能通，再接 Prometheus。
{% endhint %}

关于配置哪些指标和标签（labels）应该被暴露，请参阅对应的[环境变量参考](../use-environment-variables/endpoints.md)（`N8N_METRICS_INCLUDE_*`）。

`main` 和 `worker` 实例都可以暴露指标。

{% hint style="info" %}
**大白话**：如果你的 n8n 是「主进程（main）+ 工作进程（worker）」的多实例架构（队列模式），主实例和工作实例各自都能提供 `/metrics` 数据，你可以分别采集。标签（labels）是 Prometheus 给数据加的「分类属性」，比如按执行类型、节点类型分类统计，方便后面筛选查询。`N8N_METRICS_INCLUDE_*` 开头的变量控制具体收集哪些指标，一般保持默认即可。
{% endhint %}

关于如何把 Grafana 连接到 Prometheus 来可视化 n8n 指标，请参阅 [Grafana](../../../keep-n8n-running/visualize-metrics-with-grafana.md)。

## 队列指标 / Queue metrics

要启用队列指标，请将 `N8N_METRICS_INCLUDE_QUEUE_METRICS` 环境变量设置为 `true`。你可以通过 `N8N_METRICS_QUEUE_METRICS_INTERVAL` 调整刷新频率。

n8n 从 Bull（n8n 使用的任务队列库）收集这些指标，并在主实例（main instances）上暴露它们。在多主实例（multi-main）的部署中，聚合查询时，你可以用 `instance_role_leader` 计量器（gauge）识别主实例中的「领导者（leader）」，该计量器对领导者主实例设置为 `1`，其他设置为 `0`。

{% hint style="info" %}
**大白话**：队列（queue）是「排队等待处理的任务清单」。在队列模式下，工作流任务先进入队列，再由 worker 一个一个取走执行。队列指标就是这些排队任务的统计数据：正在处理几个、完成了几个、失败了几个、还有几个在排队。这些数字对排查性能问题非常有用——比如「任务积压」时，`n8n_scaling_mode_queue_jobs_waiting`（等待中的任务数）会一直涨。多主实例（multi-main）是指同时跑多个主进程的高可用架构，「领导者（leader）」就是其中负责统一协调的那一个，只有它的数据才完整，所以查询时要用 `instance_role_leader` 这个标签区分。
{% endhint %}

```
# HELP n8n_scaling_mode_queue_jobs_active Current number of jobs being processed across all workers in scaling mode. <a href="#help-n8nscalingmodequeuejobsactive-current-number-of-jobs-being-processed-across-all-workers-in-scaling-mode" id="help-n8nscalingmodequeuejobsactive-current-number-of-jobs-being-processed-across-all-workers-in-scaling-mode"></a>
# TYPE n8n_scaling_mode_queue_jobs_active gauge <a href="#type-n8nscalingmodequeuejobsactive-gauge" id="type-n8nscalingmodequeuejobsactive-gauge"></a>
n8n_scaling_mode_queue_jobs_active 0

# HELP n8n_scaling_mode_queue_jobs_completed Total number of jobs completed across all workers in scaling mode since instance start. <a href="#help-n8nscalingmodequeuejobscompleted-total-number-of-jobs-completed-across-all-workers-in-scaling-mode-since-instance-start" id="help-n8nscalingmodequeuejobscompleted-total-number-of-jobs-completed-across-all-workers-in-scaling-mode-since-instance-start"></a>
# TYPE n8n_scaling_mode_queue_jobs_completed counter <a href="#type-n8nscalingmodequeuejobscompleted-counter" id="type-n8nscalingmodequeuejobscompleted-counter"></a>
n8n_scaling_mode_queue_jobs_completed 0

# HELP n8n_scaling_mode_queue_jobs_failed Total number of jobs failed across all workers in scaling mode since instance start. <a href="#help-n8nscalingmodequeuejobsfailed-total-number-of-jobs-failed-across-all-workers-in-scaling-mode-since-instance-start" id="help-n8nscalingmodequeuejobsfailed-total-number-of-jobs-failed-across-all-workers-in-scaling-mode-since-instance-start"></a>
# TYPE n8n_scaling_mode_queue_jobs_failed counter <a href="#type-n8nscalingmodequeuejobsfailed-counter" id="type-n8nscalingmodequeuejobsfailed-counter"></a>
n8n_scaling_mode_queue_jobs_failed 0

# HELP n8n_scaling_mode_queue_jobs_waiting Current number of enqueued jobs waiting for pickup in scaling mode. <a href="#help-n8nscalingmodequeuejobswaiting-current-number-of-enqueued-jobs-waiting-for-pickup-in-scaling-mode" id="help-n8nscalingmodequeuejobswaiting-current-number-of-enqueued-jobs-waiting-for-pickup-in-scaling-mode"></a>
# TYPE n8n_scaling_mode_queue_jobs_waiting gauge <a href="#type-n8nscalingmodequeuejobswaiting-gauge" id="type-n8nscalingmodequeuejobswaiting-gauge"></a>
n8n_scaling_mode_queue_jobs_waiting 0
```

{% hint style="info" %}
**大白话**：上面这段就是开启队列指标后，`/metrics` 网址上实际会出现的示例数据。每三行一组，格式是 Prometheus 的标准写法：`# HELP` 行是说明（解释这个指标是什么意思），`# TYPE` 行是类型（`gauge` 计量器表示「当前值」，比如现在有几个任务在处理；`counter` 计数器表示「累计值」，比如启动以来一共完成了多少个任务），第三行是数据本身。`gauge` 类型的值是实时快照（会上下波动），`counter` 类型的值只增不减（累计总数）。
{% endhint %}
