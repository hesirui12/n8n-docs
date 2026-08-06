---
title: 配置工作流超时设置
description: 设置执行超时时间，以确定工作流可以运行多久。
contentType: howto
nodeTitle: 配置工作流超时
originalFilePath: hosting/configuration/configuration-examples/execution-timeout.md
originalUrl: >-
  https://docs.n8n.io/hosting/configuration/configuration-examples/execution-timeout
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/configure-workflow-timeouts
layout:
  description:
    visible: false
---

# 配置工作流超时设置 / Configure workflow timeout settings

一条工作流在运行超过这个时间（以秒为单位）后就会超时（times out）并被取消。如果工作流在主进程（main process）中运行，会发生「软超时（soft timeout）」（在当前节点执行完成后才生效）。如果工作流在自己的独立进程（process）中运行，n8n 会先尝试软超时，然后在等待「给定超时时长的五分之一」之后杀掉（kills）该进程。

{% hint style="info" %}
**大白话**：超时就是「给工作流设一个最长运行时间」。有些工作流可能会因为外部接口卡住、数据量暴增等原因一直跑不完，白白占用服务器资源。设置超时后，到点 n8n 就强制终止。两种终止方式：软超时比较温柔（等当前节点跑完再停）；硬终止比较暴力（直接杀进程，但会先等一小段时间给工作流一个「收尾」的机会）。
{% endhint %}

`EXECUTIONS_TIMEOUT` 的默认值是 `-1`（-1 表示不限时）。例如，如果你想设置超时时间为 1 小时：

```bash
export EXECUTIONS_TIMEOUT=3600
```

{% hint style="info" %}
**大白话**：`3600` 是秒数，3600 秒 = 1 小时。这是**全局默认**超时：所有工作流都遵守。如果保持默认的 `-1`，表示「不设置超时」，工作流可以无限期跑下去——建议至少设一个值，防止工作流卡死。怎么换算：小时数 × 3600 = 秒数（2 小时 = 7200，24 小时 = 86400）。
{% endhint %}

你也可以为**每条工作流单独**设置最大执行时间（以秒为单位）。例如，如果你想设置最大执行时间为 2 小时：

```bash
export EXECUTIONS_TIMEOUT_MAX=7200
```

{% hint style="info" %}
**大白话**：`EXECUTIONS_TIMEOUT_MAX` 是一个**上限**：它限制了「单条工作流允许设置的最大超时时间」。当你在 n8n 编辑器里给某条工作流单独设置超时时，不能超过这个上限值。这样管理员就可以控制全局：比如全局默认 1 小时，但允许某些工作流自己放宽到最多 2 小时（上限 7200 秒）。如果你没有在编辑器里给工作流单独设置过超时，这个上限主要用于约束，实际生效的仍是 `EXECUTIONS_TIMEOUT`。
{% endhint %}

{% hint style="info" %}
**国内部署提示**：如果你在国内网络环境下调用国外 API（很多国外服务响应慢、甚至需要重试），工作流跑得久是常事。建议超时值不要设得太短（比如至少 10 分钟起步，即 `EXECUTIONS_TIMEOUT=600`），否则工作流可能因为「慢」而不是「错」被超时终止；同时也不要完全不设（`-1`），以防接口彻底卡死时无限挂起。
{% endhint %}

关于这些变量的更多信息，请参阅[环境变量参考](../use-environment-variables/executions.md)。
