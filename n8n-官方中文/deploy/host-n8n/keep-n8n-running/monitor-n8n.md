---
description: 获取健康检查的指标
contentType: howto
nodeTitle: 监控 n8n（Monitor n8n）
originalFilePath: hosting/logging-monitoring/monitoring.md
originalUrl: 'https://docs.n8n.io/hosting/logging-monitoring/monitoring'
url: 'https://docs.n8n.io/deploy/host-n8n/keep-n8n-running/monitor-n8n'
layout:
  description:
    visible: false
---

# 监控（Monitoring）

有三个 API 端点可以用来检查实例的状态：`/healthz`、`healthz/readiness` 和 `/metrics`。

## healthz 和 healthz/readiness

`/healthz` 端点返回标准的 HTTP 状态码。200 表示实例可以访问。它不表示数据库的状态。自托管和 Cloud 用户都可以使用。

访问该端点：

```
<your-instance-url>/healthz
```

`/healthz/readiness` 端点与 `/healthz` 类似，但如果数据库已连接并完成迁移（migrated），它会返回 HTTP 状态码 200，表示实例已经准备好接收流量。

访问该端点：

```
<your-instance-url>/healthz/readiness
```

{% hint style="info" %}
**自定义健康检查端点**

你可以使用 [`N8N_ENDPOINT_HEALTH`](../configure-n8n/basic-configuration/use-environment-variables/endpoints.md) 环境变量来自定义健康检查端点的路径。
{% endhint %}

## metrics

`/metrics` 端点提供有关实例当前状态的更详细信息。

访问该端点：

```
<your-instance-url>/metrics
```

{% hint style="info" %}
**功能可用性**

`/metrics` 端点在 n8n Cloud 上不可用。
{% endhint %}

## 如何启用指标（metrics）和健康检查？

`/metrics` 端点默认是禁用的。健康检查端点在主 n8n 服务器上始终启用。对于[队列模式（queue mode）](../configure-n8n/scaling/enable-queue-mode.md)下的 worker 服务器，健康检查端点默认禁用。

要启用它们，请配置你的 n8n 实例：

```shell
# metrics
N8N_METRICS=true
# healthz
QUEUE_HEALTH_CHECK_ACTIVE=true
```

有关如何使用环境变量配置实例的更多信息，请参阅[配置方法（Configuration methods）](../configure-n8n/basic-configuration.md)。

{% hint style="info" %}
**小白提示**：这三个端点就是 n8n 的"体检接口"。`/healthz` 管"活着没"（进程在不在），`/healthz/readiness` 管"准备好没"（数据库连没连上、迁移完成没），`/metrics` 管"状态好不好"（各项指标明细，供 Prometheus 抓取）。云厂商的负载均衡、监控告警系统都靠它们来探活。
{% endhint %}
