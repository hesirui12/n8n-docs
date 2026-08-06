---
title: 队列模式（Queue mode）环境变量
description: >-
  用于在你的自托管 n8n 实例上配置队列模式的环境变量。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 队列模式（Queue mode）
originalFilePath: hosting/configuration/environment-variables/queue-mode.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/queue-mode'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/queue-mode
layout:
  description:
    visible: false
---

# 队列模式（Queue mode）环境变量

{% hint style="info" %}
**大白话**：队列模式（queue mode）是把 n8n 拆成「主实例（main）+ 多个工人（worker）」的部署方式，适合量大、要高可用的生产环境。工人从 Redis 队列里取任务来跑。这一页全是队列模式相关的 Redis 连接、工人（worker）超时/锁、Webhook 响应转发、多主实例（multi-main）等配置变量。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

你可以根据需求以不同模式运行 n8n。队列模式提供最好的可扩展性。更多信息请参见[队列模式（Queue mode）](../../scaling/enable-queue-mode.md)。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `OFFLOAD_MANUAL_EXECUTIONS_TO_WORKERS` | Boolean | `false` | 设为 `true` 可以让手动执行在工人（worker）上运行，而不是在主实例上运行。 |
| `QUEUE_BULL_PREFIX` | String | - | 所有队列键（queue keys）使用的前缀。 |
| `QUEUE_BULL_REDIS_DB` | Number | `0` | 使用的 Redis 数据库。 |
| `QUEUE_BULL_REDIS_HOST` | String | `localhost` | Redis 主机。 |
| `QUEUE_BULL_REDIS_PORT` | Number | `6379` | 使用的 Redis 端口。 |
| `QUEUE_BULL_REDIS_USERNAME` | String | - | Redis 用户名（需要 Redis 6 或以上版本）。为了兼容 Redis 6 以下版本，不要定义它。 |
| `QUEUE_BULL_REDIS_PASSWORD` | String | - | Redis 密码。 |
| `QUEUE_BULL_REDIS_TIMEOUT_THRESHOLD` | Number | `10000` | Redis 超时阈值（毫秒）。 |
| `QUEUE_BULL_REDIS_CLUSTER_NODES` | String | - | 期望一个逗号分隔的 Redis Cluster 节点列表，格式为 `host:port`，供 Redis 客户端初始连接使用。如果在队列模式下运行（`EXECUTIONS_MODE = queue`），设置这个变量会创建一个 Redis Cluster 客户端而不是普通 Redis 客户端，此时 n8n 会忽略 `QUEUE_BULL_REDIS_HOST` 和 `QUEUE_BULL_REDIS_PORT`。 |
| `QUEUE_BULL_REDIS_TLS` | Boolean | `false` | 在 Redis 连接上启用 TLS。 |
| `QUEUE_BULL_REDIS_DUALSTACK` | Boolean | `false` | 在 Redis 连接上启用双栈支持（IPv4 和 IPv6）。 |
| `QUEUE_WORKER_TIMEOUT` (**已弃用 deprecated**) | Number | `30` | **已弃用** 请改用 `N8N_GRACEFUL_SHUTDOWN_TIMEOUT`。n8n 在关闭工人进程前，等待正在运行的执行完成多久（秒）。 |
| `QUEUE_HEALTH_CHECK_ACTIVE` | Boolean | `false` | 是否启用健康检查（true 启用 / false 禁用）。 |
| `QUEUE_HEALTH_CHECK_PORT` | Number | `5678` | 提供健康检查服务的端口。如果在使用默认端口启动工人服务器时遇到端口冲突错误，请修改这个值。 |
| `QUEUE_WORKER_LOCK_DURATION` | Number | `60000` | 工人处理一条消息的租约（lease）时长（毫秒）。 |
| `QUEUE_WORKER_LOCK_RENEW_TIME` | Number | `10000` | 工人多久续期一次租约（毫秒）。 |
| `QUEUE_WORKER_STALLED_INTERVAL` | Number | `30000` | 工人多久检查一次卡住（stalled）的任务（设为 0 表示从不检查）。 |
| `QUEUE_WORKER_MAX_STALLED_COUNT` | Number | `1` | 一个卡住的任务最多被重新处理多少次。 |

## Webhook 响应（Webhook responses）

在队列模式下，工人会通过一条队列消息把 Webhook 响应发回主实例。下面的变量设置这条消息可以有多大，以及当响应体过大时，n8n 是否把它存到二进制数据存储中而不是让节点失败。详情请参见[大型 Webhook 响应（Large webhook responses）](../../scaling/enable-queue-mode.md#large-webhook-responses)。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_WEBHOOK_RESPONSE_RELAY_SIZE_MAX` | Number | `64` | 工人通过队列消息发回主实例的响应最大大小（MiB）。Redis 会同时持有一条响应的多个副本，所以每条在途响应大约要按这个值的 1.5 倍来预留 Redis 内存。同样的限制也适用于 MCP Trigger 工作流返回的工具结果。 |
| `N8N_WEBHOOK_RESPONSE_RELAY_OFFLOAD_ENABLED` | Boolean | `false` | 工人是否把超过 `N8N_WEBHOOK_RESPONSE_RELAY_SIZE_MAX` 的响应体存入二进制数据存储，让主实例可以把它流式传输给客户端，而不是让节点失败。需要一个能存储数据的 `N8N_DEFAULT_BINARY_DATA_MODE`（`filesystem`、`database`、`s3` 或 `azure`），以及所有实例都能读取的存储。只有在所有主实例和 Webhook 实例都运行 n8n 2.34.0 或更高版本之后，才在工人上设置这个变量。 |

## 多主实例设置（Multi-main setup）

详情请参见[配置多主实例设置（Configuring multi-main setup）](../../scaling/enable-queue-mode.md#configuring-multi-main-setup)。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_MULTI_MAIN_SETUP_ENABLED` | Boolean | `false` | 是否启用队列模式的多主实例设置（需要许可证）。 |
| `N8N_MULTI_MAIN_SETUP_KEY_TTL` | Number | `10` | 多主实例设置中领导者键（leader key）的生存时间（秒）。 |
| `N8N_MULTI_MAIN_SETUP_CHECK_INTERVAL` | Number | `3` | 多主实例设置中领导者检查（leader check）的间隔（秒）。 |
