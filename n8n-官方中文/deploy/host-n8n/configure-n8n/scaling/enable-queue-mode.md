---
contentType: howto
nodeTitle: 启用队列模式（Enable queue mode）
originalFilePath: hosting/scaling/queue-mode.md
originalUrl: 'https://docs.n8n.io/hosting/scaling/queue-mode'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/enable-queue-mode'
layout:
  description:
    visible: false
---

# 队列模式（Queue mode）

你可以根据需求以不同的模式运行 n8n。队列模式提供了最好的可扩展性（scalability）。

{% hint style="info" %}
**二进制数据存储（Binary data storage）**

n8n 不支持「队列模式 + 文件系统存储二进制数据」的组合。如果你的工作流需要在队列模式下持久化二进制数据，可以使用 [S3 外部存储](use-external-storage.md)。
{% endhint %}

{% hint style="info" %}
**大白话**：队列模式是给「工作流很多、要横向扩展」的部署方式准备的。简单说，就是把 n8n 拆成两类角色：一类负责「接活儿」（收到触发就安排执行，但不亲自跑），另一类是「干活儿的工人」（worker），从消息队列里领任务并真正执行工作流。这样你随时可以加工人来提升吞吐量。本页会带你完成队列模式的完整配置。
{% endhint %}

## 工作原理（How it works）

在队列模式下运行时，你会部署多个 n8n 实例：一个主实例（main instance）负责接收工作流信息（例如触发器），而 worker（工作进程）实例负责执行工作流。

每个 worker 都是一个独立的 Node.js 实例，以 `main` 模式运行，但由于它们有很高的 IOPS（每秒输入/输出操作数），因此能够同时处理多个工作流执行。

通过使用 worker 实例并以队列模式运行，你可以根据需要向上扩容（增加 worker）或向下缩容（移除 worker）来处理工作负载。

执行流程如下：

1. 主 n8n 实例处理定时器（timer）和 Webhook 调用，生成（但不运行）一个工作流执行。
1. 主实例把执行 ID 交给消息代理（message broker）——也就是 [Redis](#启动-redisstart-redis)，Redis 维护待处理执行的队列，并允许下一个空闲的 worker 领取任务。
1. 池中的一个 worker 从 Redis 中取走消息。
1. worker 使用执行 ID 从数据库中获取工作流信息。
1. worker 完成工作流执行后：
	- 把结果写入数据库。
	- 向 Redis 发布消息，说明该执行已完成。
1. Redis 通知主实例。

![Diagram showing the flow of data between the main n8n instance, Redis, the n8n workers, and the n8n database](../../../.gitbook/assets/queue-mode-flow.png)

> 图片说明：上面这张图展示了数据在主 n8n 实例、Redis、n8n worker 和 n8n 数据库之间的流动过程。

## 配置 worker（Configuring workers）

Worker 是真正干活的 n8n 实例。它们从主 n8n 进程接收需要执行的工作流信息，执行工作流，并在每次执行完成后更新状态。

{% hint style="info" %}
**每个进程的独立事件日志文件（Per-process event log files）**

如果你的 worker 共享一个可写的文件系统，请给每个 worker 进程一个唯一的事件日志路径。详情请参考[每个进程的事件日志文件（Per-process event log files）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/stream-logs-to-external-systems#per-process-event-log-files)。
{% endhint %}

### 设置加密密钥（Set encryption key）

n8n 在首次启动时会自动生成一个加密密钥。如果你想，也可以使用 [环境变量](../basic-configuration/use-environment-variables/README.md) 提供你自己的自定义密钥。

主 n8n 实例的加密密钥必须与所有 worker 节点和 webhook 处理器节点共享，以确保这些 worker 节点能够访问存储在数据库中的凭据（credentials）。

在[配置文件](../basic-configuration.md)中为每个 worker 节点设置加密密钥，或者通过设置相应的环境变量：

```bash
export N8N_ENCRYPTION_KEY=<main_instance_encryption_key>
```

> 代码说明：把 `<main_instance_encryption_key>` 替换成主实例的加密密钥值。请确保所有 worker 都使用同一个密钥，否则它们将无法解密数据库里的凭据。

### 设置执行模式（Set executions mode）

{% hint style="info" %}
**数据库注意事项（Database considerations）**

关于 n8n 支持的 PostgreSQL 版本，请参考[支持的 PostgreSQL 版本](../choose-n8ns-database.md#supported-postgresql-versions)。

不建议在执行模式为 `queue` 时搭配 SQLite 数据库运行 n8n。
{% endhint %}

在主实例和所有 worker 上使用以下命令把环境变量 `EXECUTIONS_MODE` 设置为 `queue`：

```bash
export EXECUTIONS_MODE=queue
```

或者，你也可以在[配置文件](../basic-configuration/use-environment-variables/README.md)中把 `executions.mode` 设置为 `queue`。

### 启动 Redis（Start Redis）

{% hint style="info" %}
**在单独的机器上运行 Redis**

你可以把 Redis 运行在单独的机器上，只要确保 n8n 实例能够访问到它即可。
{% endhint %}

要在 Docker 容器中运行 Redis，请按照下面的说明操作：

运行以下命令启动一个 Redis 实例：

```
docker run --name some-redis -p 6379:6379  -d redis
```

默认情况下，Redis 运行在 `localhost` 的 `6379` 端口，且没有密码。根据你的 Redis 配置，为主 n8n 进程设置以下配置项。这些配置可以让 n8n 与 Redis 正常交互。

| 使用配置文件（Using configuration file） | 使用环境变量（Using environment variables） | 说明（Description） |
| ------ | ------ | ----- |
| `queue.bull.redis.host:localhost` | `QUEUE_BULL_REDIS_HOST=localhost` | 默认情况下，Redis 运行在 `localhost` 上。 |
| `queue.bull.redis.port:6379` | `QUEUE_BULL_REDIS_PORT=6379` | 默认端口是 `6379`。如果 Redis 运行在不同的端口，请配置该值。 |

你还可以设置以下可选配置项：

| 使用配置文件（Using configuration file） | 使用环境变量（Using environment variables） | 说明（Description） |
| ------ | ------ | ----- |
| `queue.bull.redis.username:USERNAME` | `QUEUE_BULL_REDIS_USERNAME` | 默认情况下，Redis 不需要用户名。如果你使用特定用户，请配置该变量。 |
| `queue.bull.redis.password:PASSWORD` | `QUEUE_BULL_REDIS_PASSWORD` | 默认情况下，Redis 不需要密码。如果你设置了密码，请配置该变量。 |
| `queue.bull.redis.db:0` | `QUEUE_BULL_REDIS_DB` | 默认值是 `0`。如果你改了该值，请同步更新配置。 |
| `queue.bull.redis.timeoutThreshold:10000ms` | `QUEUE_BULL_REDIS_TIMEOUT_THRESHOLD` | 告诉 n8n 在 Redis 不可用时等待多久再退出。默认值是 `10000`（毫秒）。 |
| `queue.bull.gracefulShutdownTimeout:30` | `N8N_GRACEFUL_SHUTDOWN_TIMEOUT` | worker 在进程终止前完成正在执行任务的优雅关闭（graceful shutdown）超时时间。默认值是 `30` 秒。 |

> 代码说明：`queue.bull.redis.xxx` 是写在 n8n 配置文件里的键，等号形式 `QUEUE_BULL_REDIS_XXX` 是环境变量。两种方式二选一即可，效果相同。

现在你可以启动你的 n8n 实例，它会连接到你的 Redis 实例。

### 启动 worker（Start workers）

你需要启动 worker 进程，n8n 才能执行工作流。如果你想在单独的机器上托管 worker，请在那台机器上安装 n8n，并确保它可以连接到你的 Redis 实例和 n8n 数据库。

在根目录下运行以下命令来启动 worker 进程：

```
./packages/cli/bin/n8n worker
```

如果你使用 Docker，请使用以下命令：

```
docker run --name n8n-queue -p 5679:5678 docker.n8n.io/n8nio/n8n worker
```

你可以设置多个 worker 进程。请确保所有 worker 进程都能访问 Redis 和 n8n 数据库。

#### Worker 服务器（Worker server）

每个 worker 进程都会运行一个服务器，提供可选端点（endpoint）：

- `/healthz`：如果你启用了 `QUEUE_HEALTH_CHECK_ACTIVE` 环境变量，该端点返回 worker 是否在线。
- `/healthz/readiness`：如果你启用了 `QUEUE_HEALTH_CHECK_ACTIVE` 环境变量，该端点返回 worker 的数据库和 Redis 连接是否就绪。
- [凭据覆盖端点（credentials overwrite endpoint）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/credential-overwrites)
- [`/metrics`](../basic-configuration/configuration-examples/enable-prometheus-metrics.md)

{% hint style="info" %}
**自定义健康检查端点**

你可以使用 [`N8N_ENDPOINT_HEALTH`](../basic-configuration/use-environment-variables/endpoints.md) 环境变量自定义健康检查端点的路径。
{% endhint %}

#### 查看正在运行的 worker（View running workers）

{% hint style="info" %}
**功能可用性（Feature availability）**

* 适用于自托管企业版（Self-hosted Enterprise）套餐。
* 如果你想在 Cloud 企业版上使用此功能，请[联系 n8n](https://n8n-community.typeform.com/to/y9X2YuGa)。
{% endhint %}

你可以在 n8n 中选择 **设置（Settings）** > **Worker** 来查看正在运行的 worker 及其性能指标。

## 使用队列运行 n8n（Running n8n with queues）

使用队列运行 n8n 时，所有生产工作流执行都由 worker 进程处理。对于 Webhook 来说，这意味着 HTTP 请求由主/webhook 进程接收，但实际的工作流执行会被交给 worker，这会带来一些额外的开销和延迟。

Redis 充当消息代理，数据库负责持久化数据，因此两者都必须可访问。不支持在 SQLite 上运行这种分布式系统。

{% hint style="info" %}
**迁移数据（Migrate data）**

如果你想将数据从一个数据库迁移到另一个数据库，可以使用导出（Export）和导入（Import）命令。请参考 [n8n 的 CLI 命令](../use-the-command-line.md#export-workflows-and-credentials) 文档来了解如何使用这些命令。
{% endhint %}

## Webhook 处理器（Webhook processors）

{% hint style="info" %}
**请记住（Keep in mind）**

Webhook 进程依赖 Redis，并且也需要设置 `EXECUTIONS_MODE` 环境变量。请按照上面的[配置 worker](#configuring-workers) 部分来设置 webhook 处理器节点。
{% endhint %}

Webhook 处理器是 n8n 中另一层扩展（scaling）能力。配置 webhook 处理器是可选的，它可以让你扩展入站 Webhook 请求的处理能力。

这种方法可以让 n8n 处理大量并行请求。你只需要相应地增加 webhook 进程和 worker 的数量即可。Webhook 进程会监听同一端口（默认：`5678`）上的请求。把这些进程运行在容器或单独的机器中，并配备一个负载均衡（load balancing）系统来相应地路由请求。

n8n 不建议把主进程加入负载均衡池。如果把主进程加入池中，它会收到请求并可能承受较重的负载，导致编辑、查看和与 n8n 界面交互时的性能下降。

你可以从根目录执行以下命令来启动 webhook 处理器：

```
./packages/cli/bin/n8n webhook
```

如果你使用 Docker，请使用以下命令：

```
docker run --name n8n-queue -p 5679:5678 -e "EXECUTIONS_MODE=queue" docker.n8n.io/n8nio/n8n webhook
```

### 配置 Webhook URL（Configure webhook URL）

要在运行主 n8n 实例的机器上配置 Webhook URL，请执行以下命令：

```bash
export WEBHOOK_URL=https://your-webhook-url.com
```

你也可以在配置文件中设置该值。

### 配置负载均衡器（Configure load balancer）

当使用多个 webhook 进程时，你需要一个负载均衡器来路由请求。如果你为 n8n 实例和 webhook 使用同一个域名，你可以按如下方式设置负载均衡器的路由规则：

- 把 Webhook 触发器的请求重定向到 webhook 服务器池。需要考虑的路径：
  - `/webhook/*`：Webhook 触发器节点的端点
  - `/webhook-waiting/*`：用于执行「发送并等待（send and wait）」操作的节点（例如 Slack 节点）的人工参与（human-in-the-loop）Webhook 端点。
- 所有其他路径（n8n 内部 API、编辑器的静态文件等）都应路由到主进程。

**注意：** 手动工作流执行的默认 URL 是 `/webhook-test/*`。请确保这些 URL 路由到你的主进程。

你可以在配置文件 `endpoints.webhook` 中更改此路径，或使用 `N8N_ENDPOINT_WEBHOOK` 环境变量。如果更改了这些设置，请同步更新你的负载均衡器。

### 禁用主进程中的 Webhook 处理（可选）

你已经有 webhook 处理器来执行工作流了。你可以在主进程中禁用 Webhook 处理。这样可以确保所有 Webhook 执行都在 webhook 处理器中完成。在配置文件中把 `endpoints.disableProductionWebhooksOnMainProcess` 设置为 `true`，这样 n8n 就不会在主进程上处理 Webhook 请求。

或者，你也可以使用以下命令：

```bash
export N8N_DISABLE_PRODUCTION_MAIN_PROCESS=true
```

在主进程中禁用 Webhook 处理时，请运行主进程，但不要把它加入负载均衡器的 webhook 池。

## 大型 Webhook 响应（Large webhook responses）

在队列模式下，执行由 worker 运行，但发送 Webhook 请求的客户端仍然与主实例或 webhook 实例保持连接。**Respond to Webhook（响应 Webhook）** 节点的响应会通过队列消息从 worker 传回该实例，因此在消息传输期间，Redis 会持有整个响应。

`N8N_WEBHOOK_RESPONSE_RELAY_SIZE_MAX` 设置该消息可以有多大，单位是 MiB。默认值是 `64`。Redis 会同时保存一个响应的多个副本（在传输中的各阶段），因此对于每一个传输中的响应，请在 Redis 内存中预留大约该值 1.5 倍的空间。如果不卸载（offload）到存储，超过限制的响应会导致节点失败。

同样的限制也适用于 MCP 触发器工作流从 worker 返回的工具结果（tool result）。工具结果无法卸载到存储，因此超大的工具结果会以「工具错误」的形式到达 MCP 客户端，并在错误信息中写明该限制。

### 把大型响应体卸载到存储（Offload a large response body to storage）

{% hint style="info" %}
**从 n8n 2.34.0 版本开始可用**
{% endhint %}

在你的 worker 上设置 `N8N_WEBHOOK_RESPONSE_RELAY_OFFLOAD_ENABLED=true`，可以把超过限制的响应体存储到[二进制数据存储](../basic-configuration/use-environment-variables/binary-data.md)中，而不是让节点失败。这样队列消息中携带的只是一个引用（reference），主实例会从存储中把响应体流式发送给客户端，n8n 在响应发送完成后会删除存储的响应体。

卸载（offloading）需要每个实例都能读取的存储。除 `default` 之外的所有模式都会存储，因此请把 `N8N_DEFAULT_BINARY_DATA_MODE` 设置为 `filesystem`、`database`、`s3` 或 `azure`：

```bash
export N8N_WEBHOOK_RESPONSE_RELAY_SIZE_MAX=64
export N8N_WEBHOOK_RESPONSE_RELAY_OFFLOAD_ENABLED=true
export N8N_DEFAULT_BINARY_DATA_MODE=s3
```

对于大型响应，n8n 推荐使用 `s3` 或 `azure`。这两种模式都会流式传输响应体，因此主实例每次只持有其中一块数据。关于如何配置它们，请参考[外部存储（External storage）](use-external-storage.md)。在 `database` 模式下，主实例在发送前会把整个响应体加载到内存中，并且响应会经过你的主数据库。在 `filesystem` 模式下，每个实例都需要挂载同一块磁盘，n8n 不推荐这样做。`default` 模式会把二进制数据保留在内存中，因此主实例没有可读取的内容，超过限制的响应仍然会导致节点失败。

n8n 只卸载响应体。它会把响应的其余部分（响应头和状态码）与同一限制进行比对，因此仅响应头就超过限制的响应无论如何都会失败。

### 在升级期间开启卸载（Turn on offloading during an upgrade）

只有运行 n8n 2.34.0 或更高版本的主实例才能读取已卸载的响应体。旧版本会把存储引用返回给客户端，而不是响应体。请先升级所有主实例和 webhook 实例，然后再在你的 worker 上设置 `N8N_WEBHOOK_RESPONSE_RELAY_OFFLOAD_ENABLED`。未设置该变量的 worker 会把每个响应都内联发送，超过限制的响应会失败。

### 大型 Webhook 响应故障排查（Troubleshoot large webhook responses）

| 错误（Error） | 原因（Cause） | 修复（Fix） |
| :---- | :---- | :-- |
| `The response is too large to be sent back from the worker`（响应太大，无法从 worker 发回），并提到 `N8N_WEBHOOK_RESPONSE_RELAY_OFFLOAD_ENABLED` | worker 上的卸载功能是关闭的。 | 在你的 worker 上设置该变量，或者调高 `N8N_WEBHOOK_RESPONSE_RELAY_SIZE_MAX`。 |
| `The response is too large to be sent back from the worker`（响应太大，无法从 worker 发回），并提到 `N8N_DEFAULT_BINARY_DATA_MODE` | 二进制数据存储把数据保存在内存中，因此没有地方可以卸载。 | 把 `N8N_DEFAULT_BINARY_DATA_MODE` 设置为 `filesystem`、`database`、`s3` 或 `azure`。 |
| `The response is too large for the binary-data store to hold`（响应太大，二进制数据存储无法容纳） | `database` 模式因为自身的大小限制而拒绝了该响应体。 | 调高 `N8N_BINARY_DATA_DATABASE_MAX_FILE_SIZE`，上限为数据库列可容纳的 1 GB；或者切换到 `filesystem`、`s3`、`azure`，它们本身不施加限制。 |
| `The stored webhook response body could not be read`（无法读取已存储的 Webhook 响应体） | 主实例无法读取 worker 写入的存储。 | 把所有实例指向同一存储。在 `filesystem` 模式下，每个实例都需要挂载同一块磁盘，n8n 不推荐这样做。 |

## 配置 worker 并发（Configure worker concurrency）

你可以使用 `concurrency` 标志来定义每个 worker 可以并行运行的任务数量。默认值是 `10`。要更改它：

```bash
n8n worker --concurrency=5
```

> 代码说明：上面这条命令把 worker 的并发数设为 5，意思是每个 worker 最多同时运行 5 个工作流执行。

## 并发与扩展建议（Concurrency and scaling recommendations）

n8n 建议为你的 worker 实例把并发数设置为 5 或更高。如果并发数设置得很低、而 worker 数量又很多，可能会耗尽你数据库的连接池，导致处理延迟和失败。

## 多主实例（Multi-main setup）

{% hint style="info" %}
**功能可用性（Feature availability）**

* 适用于自托管企业版（Self-hosted Enterprise）套餐。
{% endhint %}

在队列模式下，你可以运行多个 `main` 进程来实现高可用（high availability）。

在单主实例（single-mode）的部署中，`main` 进程负责两类任务：

- **常规任务（regular tasks）**：例如运行 API、提供界面服务、监听 Webhook；
- **至多执行一次的任务（at-most-once tasks）**：例如运行非 HTTP 触发器（定时器、轮询器，以及 RabbitMQ 和 IMAP 等持久连接），以及清理执行数据和二进制数据。

在多主实例（multi-main）部署中，有两种 `main` 进程：

- **从节点（followers）**：只运行**常规任务**；
- **主节点（the leader）**：同时运行**常规任务和至多执行一次的任务**。

### 主节点指定（Leader designation）

在多主实例部署中，所有主实例都会对用户透明地处理领导权（leadership）进程。如果当前主节点变得不可用（例如崩溃或事件循环过于繁忙），其他从节点可以接管。如果之前的主节点恢复响应，它会变回从节点。

### 配置多主实例部署（Configuring multi-main setup）

要以多主实例部署方式运行 n8n，请确保：

- 所有 `main` 进程都以队列模式运行，并连接到 Postgres 和 Redis。
- 所有 `main` 和 `worker` 进程运行相同版本的 n8n。
- 所有 `main` 进程都设置了环境变量 `N8N_MULTI_MAIN_SETUP_ENABLED` 为 `true`。
- 所有 `main` 进程都运行在启用了会话保持（粘性会话 sticky sessions）的负载均衡器后面。

如果需要，你可以调整主节点密钥（leader key）选项：

| 使用配置文件（Using configuration file） | 使用环境变量（Using environment variables） | 说明（Description） |
| ------ | ------ | ----- |
| `multiMainSetup.ttl:10` | `N8N_MULTI_MAIN_SETUP_KEY_TTL=10` | 多主实例部署中主节点密钥的生存时间（Time to live，秒）。 |
| `multiMainSetup.interval:3` | `N8N_MULTI_MAIN_SETUP_CHECK_INTERVAL=3` | 多主实例部署中主节点检查的间隔（秒）。 |
