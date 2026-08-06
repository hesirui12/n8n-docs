---
title: 端点（Endpoints）环境变量
description: >-
  使用环境变量为自托管 n8n 实例自定义应用的 API 和 Webhook 端点。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 端点（Endpoints）
originalFilePath: hosting/configuration/environment-variables/endpoints.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/endpoints'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/endpoints
layout:
  description:
    visible: false
---

# 端点（Endpoints）环境变量

{% hint style="info" %}
**大白话**：端点（endpoint）就是 n8n 对外「收信和发信」的网址路径。这一页告诉你如何自定义这些路径（比如把 Webhook 地址改短、把健康检查地址换掉），以及如何限制请求的大小、开启监控指标等。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

本页列出了用于自定义 n8n 端点的环境变量。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_PAYLOAD_SIZE_MAX` | Number | `16` | 最大的请求体（payload）大小，单位 MiB。默认是 16 MiB，可以通过把该变量调大来增大。修改后需要重启 n8n 实例才能生效。注意：增大请求体大小需要更多的内存和 CPU 资源，可能影响性能，请确保你的基础设施能处理更大的请求体。 |
| `N8N_FORMDATA_FILE_SIZE_MAX` | Number | `200` | form-data（表单）Webhook 请求体中文件的最大大小，单位 MiB。 |
| `N8N_METRICS` | Boolean | `false` | 是否启用 `/metrics` 端点（用于输出监控指标）。 |
| `N8N_METRICS_PREFIX` | String | `n8n_` | n8n 专属指标名称的可选前缀。 |
| `N8N_METRICS_INCLUDE_DEFAULT_METRICS` | Boolean | `true` | 是否暴露默认的系统指标和 node.js 指标。 |
| `N8N_METRICS_INCLUDE_CACHE_METRICS` | Boolean | false | 是否包含缓存命中/未命中的指标（true），或是不包含（false）。 |
| `N8N_METRICS_INCLUDE_MESSAGE_EVENT_BUS_METRICS` | Boolean | `false` | 是否包含事件相关的指标（true），或是不包含（false）。 |
| `N8N_METRICS_INCLUDE_WORKFLOW_ID_LABEL` | Boolean | `false` | 是否在工作流指标中包含工作流 ID 标签。 |
| `N8N_METRICS_INCLUDE_NODE_TYPE_LABEL` | Boolean | `false` | 是否在节点指标中包含节点类型标签。 |
| `N8N_METRICS_INCLUDE_CREDENTIAL_TYPE_LABEL` | Boolean | `false` | 是否在凭据指标中包含凭据类型标签。 |
| `N8N_METRICS_INCLUDE_API_ENDPOINTS` | Boolean | `false` | 是否暴露 API 端点的指标。 |
| `N8N_METRICS_INCLUDE_API_PATH_LABEL` | Boolean | `false` | 是否包含 API 调用路径的标签。 |
| `N8N_METRICS_INCLUDE_API_METHOD_LABEL` | Boolean | `false` | 是否包含 API 调用 HTTP 方法（GET、POST 等）的标签。 |
| `N8N_METRICS_INCLUDE_API_STATUS_CODE_LABEL` | Boolean | `false` | 是否包含 API 调用 HTTP 状态码（200、404 等）的标签。 |
| `N8N_METRICS_INCLUDE_QUEUE_METRICS` | Boolean | `false` | 是否包含伸缩模式（queue/scaling mode）下队列任务的指标。 |
| `N8N_METRICS_QUEUE_METRICS_INTERVAL` | Integer | `20` | 队列指标多久更新一次（秒）。 |
| `N8N_METRICS_INCLUDE_SSRF_METRICS` | Boolean | `false` | 是否包含 SSRF 防护检查的指标。 |
| `N8N_METRICS_INCLUDE_DNS_CACHE_METRICS` | Boolean | `false` | 是否包含 DNS 缓存的指标（目前仅 SSRF 防护使用）。 |
| `N8N_ENDPOINT_REST` | String | `rest` | REST 端点使用的路径。 |
| `N8N_ENDPOINT_WEBHOOK` | String | `webhook` | Webhook 端点使用的路径。 |
| `N8N_ENDPOINT_WEBHOOK_TEST` | String | `webhook-test` | 测试 Webhook 端点使用的路径。 |
| `N8N_ENDPOINT_WEBHOOK_WAIT` | String | `webhook-waiting` | 等待中的 Webhook 端点使用的路径。 |
| `N8N_ENDPOINT_HEALTH` | String | `healthz` | 健康检查端点使用的路径。 |
| `N8N_WEBHOOK_URL` | String | - | 当 n8n 运行在反向代理后面时，用它来设置测试和生产 Webhook 的基础 URL。请使用这个变量，而不是上面的 `N8N_ENDPOINT_*` 系列变量——那些变量只能设置端点的路径（_path_），不能设置完整 URL。参见[用反向代理配置 Webhook URL](../configuration-examples/configure-webhook-urls-with-reverse-proxy.md)。 |
| `WEBHOOK_URL` | String | - | `N8N_WEBHOOK_URL` 的已废弃别名。仍然可用，但 n8n 会在启动时打印一条弃用警告日志。 |
| `N8N_DISABLE_PRODUCTION_MAIN_PROCESS` | Boolean | `false` | 禁用主进程中的生产 Webhook。当使用 Webhook 专用进程时，这有助于确保主进程不承担 HTTP 流量负载。 |
