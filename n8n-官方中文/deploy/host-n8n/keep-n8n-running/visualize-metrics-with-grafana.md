---
contentType: howto
nodeTitle: 用 Grafana 可视化指标（Visualize metrics with Grafana）
originalFilePath: hosting/logging-monitoring/grafana.md
originalUrl: 'https://docs.n8n.io/hosting/logging-monitoring/grafana'
url: >-
  https://docs.n8n.io/deploy/host-n8n/keep-n8n-running/visualize-metrics-with-grafana
layout:
  description:
    visible: false
---

# Grafana

先在 n8n 中启用 Prometheus 指标端点，然后通过一个 Prometheus 实例把 Grafana 连接起来，即可可视化你的 n8n 数据。在按照本指南操作之前，请先参阅[启用 Prometheus 指标（Enable Prometheus metrics）](../configure-n8n/basic-configuration/configuration-examples/enable-prometheus-metrics.md)。

{% hint style="info" %}
**功能可用性**

`/metrics` 端点在 n8n Cloud 上不可用。
{% endhint %}

## 可复用的仪表盘模板（Reusable dashboard templates）

一旦你为 n8n 实例启用了 Prometheus 指标，你就会想构建仪表盘来观察它们。

n8n 在这个 GitHub 项目中发布了几个受支持 Prometheus 指标的可复用 Grafana 仪表盘：[n8n-observability](https://github.com/n8n-io/n8n-observability)

## 配置 Prometheus 抓取 n8n（Configure Prometheus to scrape n8n）

Prometheus 按计划抓取 n8n 的 `/metrics` 端点并存储数据。然后 Grafana 查询 Prometheus 来展示它。

在你的 `prometheus.yml` 中添加一个针对 n8n 实例的抓取任务（scrape job）：

```yaml
scrape_configs:
  - job_name: n8n
    static_configs:
      - targets:
          - <n8n-host>:<n8n-port>
    metrics_path: /metrics
```

把 `<n8n-host>` 和 `<n8n-port>` 替换成你的 n8n 实例地址。n8n 的默认端口是 `5678`。

编辑后，重新加载或重启 Prometheus 以应用更改。

## 把 Prometheus 添加为 Grafana 数据源（Add Prometheus as a Grafana data source）

1. 在 Grafana 中，进入 **连接（Connections）> 数据源（Data sources）**。
2. 选择 **添加新数据源（Add new data source）**。
3. 选择 **Prometheus**。
4. 把 **Prometheus 服务器 URL（Prometheus server URL）** 设置为你的 Prometheus 实例地址，例如 `http://prometheus:9090`。
5. 选择 **保存并测试（Save & test）**。

Grafana 会用一条成功消息确认连接。

## Webhook 可观测性（Webhook observability）

从 n8n 2.28.0 版本起可用。

n8n 为每次 webhook 调用暴露一个 `n8n_webhook_request_duration_seconds` 直方图（histogram）。启用以下环境变量来收集它：

| 变量 | 默认值 | 说明 |
|----------|---------|-------------|
| `N8N_METRICS_INCLUDE_WEBHOOK_METRICS` | `false` | 暴露 `n8n_webhook_request_duration_seconds` 直方图。 |
| `N8N_METRICS_INCLUDE_WORKFLOW_INFO` | `false` | 暴露 `n8n_workflow_info` 仪表（gauge），提供人类可读的工作流名称。参见[工作流名称查询](#workflow-name-lookup)。 |

你可以在我们的 n8n-observability 项目中找到这个直方图的[现成仪表盘（ready-to-use dashboard）](https://github.com/n8n-io/n8n-observability/tree/main/dashboards/grafana/n8n-webhook-executions)。

### 该指标追踪什么（What the metric tracks）

`n8n_webhook_request_duration_seconds` 是一个 Prometheus 直方图。对于每次 webhook 调用，n8n 都会记录请求花费了多长时间（"收到请求" -> "发出响应"）。该指标为每种标签组合暴露三个序列：

| 序列 | 说明 |
|--------|-------------|
| `_bucket{le="<bound>"}` | 在 `<bound>` 秒内完成的请求的累计数量。 |
| `_sum` | 所有请求花费的总秒数。 |
| `_count` | 请求总数。 |

每个序列都带有以下标签：

| 标签 | 示例 | 说明 |
|-------|---------|-------------|
| `method` | `GET` | 传入请求的 HTTP 方法。 |
| `status_code` | `200` | n8n 返回的 HTTP 状态码。 |
| `webhook_path` | `294febd8-…` | 标识 webhook 端点的 UUID 路径。 |
| `workflow_id` | `KhcGg7EmAMoa7Bmv` | webhook 所属工作流的 ID。 |

### 仪表盘思路（Dashboard ideas）

| 面板 | PromQL |
|-------|--------|
| 每个工作流的请求速率 | `sum by (workflow_id) (rate(n8n_webhook_request_duration_seconds_count[5m]))` |
| 所有 webhook 的 p95 延迟 | `histogram_quantile(0.95, sum by (le) (rate(n8n_webhook_request_duration_seconds_bucket[5m])))` |
| 每个工作流的 p95 延迟 | `histogram_quantile(0.95, sum by (le, workflow_id) (rate(n8n_webhook_request_duration_seconds_bucket[5m])))` |
| 错误率（非 2xx） | `sum by (workflow_id) (rate(n8n_webhook_request_duration_seconds_count{status_code!="2.."}[5m]))` |
| 平均请求时长 | `rate(n8n_webhook_request_duration_seconds_sum[5m]) / rate(n8n_webhook_request_duration_seconds_count[5m])` |

## 表单提交可观测性（Form submission observability）

从 n8n 2.28.0 版本起可用。

n8n 为每次表单提交暴露一个 `n8n_form_submission_duration_seconds` 直方图。启用以下环境变量来收集它：

| 变量 | 默认值 | 说明 |
|----------|---------|-------------|
| `N8N_METRICS_INCLUDE_FORM_METRICS` | `false` | 暴露 `n8n_form_submission_duration_seconds` 直方图。 |
| `N8N_METRICS_INCLUDE_WORKFLOW_INFO` | `false` | 暴露 `n8n_workflow_info` 仪表（gauge），提供人类可读的工作流名称。参见[工作流名称查询](#workflow-name-lookup)。 |

你可以在我们的 n8n-observability 项目中找到这个直方图的[现成仪表盘](https://github.com/n8n-io/n8n-observability/tree/main/dashboards/grafana/n8n-form-executions)。

### 该指标追踪什么（What the metric tracks）

`n8n_form_submission_duration_seconds` 是一个 Prometheus 直方图。对于每次表单提交，n8n 都会记录从"用户按下提交"到"用户收到表单提交反馈"花费了多长时间。该指标为每种标签组合暴露三个序列：

| 序列 | 说明 |
|--------|-------------|
| `_bucket{le="<bound>"}` | 在 `<bound>` 秒内完成的提交的累计数量。 |
| `_sum` | 处理所有提交花费的总秒数。 |
| `_count` | 提交总数。 |

每个序列都带有以下标签：

| 标签 | 示例 | 说明 |
|-------|---------|-------------|
| `status_code` | `200` | n8n 返回的 HTTP 状态码。 |
| `form_path` | `b395d2e2-…` | 标识表单端点的 UUID 路径。 |
| `workflow_id` | `qTzTyGlEROwSuVlY` | 表单所属工作流的 ID。 |

{% hint style="info" %}
**没有 method 标签**

表单提交不包含 `method` 标签，因为 n8n 只通过 `POST` 接受表单数据。
{% endhint %}

### 仪表盘思路（Dashboard ideas）

| 面板 | PromQL |
|-------|--------|
| 每个工作流的提交速率 | `sum by (workflow_id) (rate(n8n_form_submission_duration_seconds_count[5m]))` |
| 所有表单的 p95 处理时间 | `histogram_quantile(0.95, sum by (le) (rate(n8n_form_submission_duration_seconds_bucket[5m])))` |
| 每个工作流的 p95 处理时间 | `histogram_quantile(0.95, sum by (le, workflow_id) (rate(n8n_form_submission_duration_seconds_bucket[5m])))` |
| 错误率（非 2xx） | `sum by (workflow_id) (rate(n8n_form_submission_duration_seconds_count{status_code!="2.."}[5m]))` |
| 平均处理时长 | `rate(n8n_form_submission_duration_seconds_sum[5m]) / rate(n8n_form_submission_duration_seconds_count[5m])` |

## 工作流名称查询（Workflow name lookup）

从 n8n 2.28.0 版本起可用。

当你启用 `N8N_METRICS_INCLUDE_WORKFLOW_INFO` 时，n8n 会为每个工作流暴露一个仪表（gauge）：

```
n8n_workflow_info{workflow_id="VaQPuPmx9tPpo6BX",workflow_name="My workflow"} 1
```

把它通过 `workflow_id` 连接到任何其他 n8n 指标上，即可在 Grafana 面板中用人类可读的名称替换不透明的 ID。例如，要按工作流名称显示 webhook 请求速率：

```promql
sum by (workflow_name) (
  rate(n8n_webhook_request_duration_seconds_count[5m])
  * on(workflow_id) group_left(workflow_name)
  n8n_workflow_info
)
```

{% hint style="info" %}
**小白提示**：这套组合拳是业内标准的监控三件套：n8n 暴露 `/metrics` → Prometheus 定时抓取存库 → Grafana 画图看板。装上之后，你能在浏览器里看到"哪个工作流调用最多、哪个 webhook 最慢、失败率多高"这样的实时图表。想快速上手，直接用 n8n 官方的 n8n-observability 现成仪表盘导入就行。
{% endhint %}
