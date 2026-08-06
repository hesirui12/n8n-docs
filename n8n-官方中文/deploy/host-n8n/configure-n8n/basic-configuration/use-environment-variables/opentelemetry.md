---
title: OpenTelemetry 环境变量
description: >-
  通过环境变量为你的自托管 n8n 实例配置 OpenTelemetry 追踪（tracing）。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: OpenTelemetry
originalFilePath: hosting/configuration/environment-variables/opentelemetry.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/opentelemetry'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/opentelemetry
layout:
  description:
    visible: false
---

# OpenTelemetry 环境变量

{% hint style="info" %}
**大白话**：OpenTelemetry 是一套「可观测性」标准。n8n 可以把每个工作流、每个节点的运行追踪信息（trace）通过 OTLP 协议发给监控平台（如 Jaeger、Grafana Tempo 等），方便你排查「哪一步慢」。这一页的变量用来开关追踪、设置上报地址、采样率，以及控制要不要记录 AI 智能体的输入输出。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

n8n 可以通过 OTLP 协议把工作流和节点执行的追踪（trace）导出到 OpenTelemetry 采集器（collector）。详情请参见 [OpenTelemetry 追踪（OpenTelemetry tracing）](../../../keep-n8n-running/trace-executions-with-opentelemetry.md)。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) | 自哪个版本可用 (Available from) |
| :------- | :--- | :------ | :---------- | :------ |
| `N8N_OTEL_ENABLED` | Boolean | `false` | 是否启用 OpenTelemetry 追踪。设为 `false` 时，n8n 不会加载 OpenTelemetry SDK。 | 2.19.0 |
| `N8N_OTEL_EXPORTER_OTLP_ENDPOINT` | String | `http://localhost:4318` | 导出追踪数据所用的 OTLP HTTP 端点的 Base URL。n8n 会把 `N8N_OTEL_EXPORTER_OTLP_TRACING_PATH` 的值追加到这个 URL 后面。 | 2.19.0 |
| `N8N_OTEL_EXPORTER_OTLP_TRACING_PATH` | String | `/v1/traces` | 追加到 `N8N_OTEL_EXPORTER_OTLP_ENDPOINT` 后面、用于导出追踪数据的路径。 | 2.19.0 |
| `N8N_OTEL_EXPORTER_OTLP_HEADERS` | String | - | 逗号分隔的 `key=value` 列表，作为 HTTP 请求头随每次 OTLP 请求发送。用它来传认证令牌或租户请求头。例如：`authorization=Bearer <token>,x-tenant=acme`。 | 2.19.0 |
| `N8N_OTEL_EXPORTER_SERVICE_NAME` | String | `n8n` | 导出 span 上的 `service.name` 资源属性（resource attribute）的值。 | 2.19.0 |
| `N8N_OTEL_TRACES_SAMPLE_RATE` | Number | `1.0` | 要导出的追踪比例，取值在 `0` 和 `1` 之间。n8n 使用 trace ID 比例采样器（ratio sampler），因此一个追踪里的所有 span 要么一起被采样，要么一起被丢弃。 | 2.19.0 |
| `N8N_OTEL_TRACES_INCLUDE_NODE_SPANS` | Boolean | `true` | 是否为每次节点执行发出一个 `node.execute` span。设为 `false` 则只导出工作流级别的 span。 | 2.19.0 |
| `N8N_OTEL_TRACES_PRODUCTION_ONLY` | Boolean | `true` | 是否只为[生产执行（production executions）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/understand-workflows/understand-executions/types-of-executions)导出追踪。设为 `false` 则为所有工作流执行导出追踪。 | 2.25.2 |
| `N8N_OTEL_TRACES_INJECT_OUTBOUND` | Boolean | `true` | 是否把 W3C 标准的 `traceparent`/`tracesstate` 请求头注入到使用 n8n HTTP 辅助工具（helpers）的节点所发出的出站 HTTP 请求中。 | 2.19.0 |
| `N8N_OTEL_STARTUP_CONNECTIVITY_TIMEOUT_MS` | Number | `2000` | 启动时对 OTLP 端点做连通性检查的超时时间（毫秒）。如果端点在这个时间内不可达，n8n 会记录一条警告日志。 | 2.19.0 |
| `N8N_AGENTS_TRACING_ENABLED` | Boolean | `true` | 智能体（agent）运行是否发出 OpenTelemetry span。它继承 `N8N_OTEL_*` 的端点、请求头、采样和传输设置。在你配置好 OTel 提供商之前，这些 span 无处可去，所以如果只想跑工作流追踪、不要智能体 span，就把它设为 `false`。 | 2.33.0 |
| `N8N_AGENTS_TRACING_RECORD_INPUTS` | Boolean | `true` | 智能体追踪是否记录输入（如提示词 prompt、工具参数 tool arguments）。设为 `false` 可以把敏感的输入数据排除在追踪之外。 | 2.33.0 |
| `N8N_AGENTS_TRACING_RECORD_OUTPUTS` | Boolean | `true` | 智能体追踪是否记录输出（如响应、工具结果）。设为 `false` 可以把敏感的输出数据排除在追踪之外。 | 2.33.0 |
