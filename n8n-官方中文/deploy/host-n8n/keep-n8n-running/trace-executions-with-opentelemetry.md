---
title: OpenTelemetry 追踪（OpenTelemetry tracing）
description: >-
  把 n8n 的工作流和节点执行追踪（traces）发送到 OpenTelemetry 收集器（collector）。
contentType: howto
nodeTitle: 用 OpenTelemetry 追踪执行（Trace executions with OpenTelemetry）
originalFilePath: hosting/logging-monitoring/opentelemetry.md
originalUrl: 'https://docs.n8n.io/hosting/logging-monitoring/opentelemetry'
url: >-
  https://docs.n8n.io/deploy/host-n8n/keep-n8n-running/trace-executions-with-opentelemetry
layout:
  description:
    visible: false
---

# OpenTelemetry 追踪（OpenTelemetry tracing）

{% hint style="warning" %}
**此功能仍在开发中**

- 从 2.19.0 版本开始可用
- OpenTelemetry 格式的指标（metrics）即将推出
{% endhint %}

n8n 可以为工作流和节点执行发出 [OpenTelemetry](https://opentelemetry.io/) 追踪（traces）。使用这些追踪来监控执行延迟、调试故障，并在你的可观测性（observability）技术栈中跨服务追踪请求。

观看 n8n 中 OpenTelemetry 追踪的概述：

{% embed url="https://www.youtube.com/embed/xOi8K_-GLRM" %}

{% hint style="info" %}
**小白提示**：追踪（tracing）是比日志更细的"手术级"排查工具。它能画出一张"调用链"：一次执行里，哪个节点慢、哪个节点报错、请求从哪来、又传给了谁。配合 Jaeger、Grafana Tempo 这类工具可视化，排查跨服务问题特别有用。想入门，先按文末的 Jaeger 示例跑通一遍就懂了。
{% endhint %}

## 你能得到什么（What you get）

开启追踪后，n8n 会为每次执行导出两种跨度（span）：

- **`workflow.execute`**：每次工作流执行一个跨度。它记录工作流 ID、名称、版本、节点数、执行模式、状态以及任何错误类型。
- **`node.execute`**：每个节点执行一个跨度，嵌套在其工作流跨度内。它记录节点 ID、名称、类型、版本以及输入和输出条目的数量。

每个跨度都包含用于标识 n8n 实例的资源属性（resource attributes）：

- `service.name`（默认 `n8n`）
- `service.version`（n8n 版本）
- `n8n.instance.id`
- `n8n.instance.role`（例如 `main`、`worker` 或 `webhook`）

n8n 还处理追踪上下文的传播（propagation）：

- **入站（Inbound）**：如果 webhook 请求包含 [W3C `traceparent` 请求头](https://www.w3.org/TR/trace-context/)，n8n 会把它作为工作流跨度的父跨度。这把 n8n 工作流追踪与上游调用方连接起来。
- **出站（Outbound）**：HTTP Request 节点（以及使用 n8n HTTP 帮助程序的其他节点）可以把 `traceparent` 请求头注入到出站请求中。因此，支持 W3C 追踪上下文的下游服务可以继续这条追踪。
- **子工作流（Sub-workflows）**：子工作流的跨度使用父工作流的跨度作为其父跨度。
- **恢复的工作流（Resumed workflows）**：当工作流在等待（wait）后恢复时，新跨度会通过跨度链接（span link）链接回之前的跨度。

## 在界面中启用追踪（Enable tracing in the UI）

{% hint style="info" %}
**从 n8n v2.27.0 版本起可用**

你需要是实例所有者或管理员，才能在界面中配置 OpenTelemetry。
{% endhint %}

除了设置环境变量，你还可以在 **设置（Settings）> OpenTelemetry** 中配置追踪。n8n 无需重启即可应用你的更改，并会在[队列模式（queue mode）](../configure-n8n/scaling/enable-queue-mode.md)下跨 worker 和 webhook 处理器重新加载这些配置。

配置追踪的步骤：

1. 选择 **设置（Settings）> OpenTelemetry**。
2. 打开 **启用 OpenTelemetry（Enable OpenTelemetry）**。
3. 在 **收集器连接（Collector connection）** 下，输入你的 **OTLP 端点（OTLP endpoint）** 和任何其他连接详情。
4. 在 **追踪（Tracing）** 下，设置你的采样（sampling）和跨度选项。
5. 选择 **保存设置（Save settings）**。

要检查 n8n 是否能连接到你的收集器，请在 **验证配置（Verify configuration）** 下选择 **发送测试追踪（Send test trace）**。n8n 会发送一个测试跨度，并报告收集器是否接受了它。你可以在保存之前或之后运行它。

每个字段都对应一个环境变量，显示在该字段的工具提示（tooltip）中。完整列表请参见[OpenTelemetry 环境变量](../configure-n8n/basic-configuration/use-environment-variables/opentelemetry.md)。

{% hint style="info" %}
**环境变量优先（Environment variables take precedence）**

如果你用环境变量设置了一个选项，n8n 会使用该值，并禁用界面中对应的字段。要从界面管理某个设置，请保持其环境变量不设置。当 n8n 重启时，环境变量会覆盖界面中保存的值。
{% endhint %}

## 使用环境变量启用追踪（Enable tracing with environment variables）

在你希望启用工作流追踪的每个 n8n 实例上（main、workers 和 webhook 处理器）设置以下环境变量：

```bash
export N8N_OTEL_ENABLED=true
export N8N_OTEL_EXPORTER_OTLP_ENDPOINT=http://<your-collector-host>:4318
```

重启 n8n。实例开始通过 OTLP HTTP 使用 Protobuf 编码导出跨度。

n8n 默认会在端点后追加 `/v1/traces`。请把 `N8N_OTEL_EXPORTER_OTLP_ENDPOINT` 指向收集器的基础 URL，而不是 traces 路径。

如果你的收集器需要认证，请把 `N8N_OTEL_EXPORTER_OTLP_HEADERS` 设置为以逗号分隔的 `key=value` 对列表：

```bash
export N8N_OTEL_EXPORTER_OTLP_HEADERS="authorization=Bearer <your-token>,x-tenant=acme"

// For added protection - It is recommended to use the `_FILE` postfix if you are putting a token in here:
export N8N_OTEL_EXPORTER_OTLP_HEADERS_FILE=/mnt/otel-headers
```

受支持变量的完整列表，请参阅 [OpenTelemetry 环境变量](../configure-n8n/basic-configuration/use-environment-variables/opentelemetry.md)。

{% hint style="info" %}
**队列模式（Queue mode）**

在[队列模式（queue mode）](../configure-n8n/scaling/enable-queue-mode.md)下，必须在所有实例上设置 OpenTelemetry 变量。追踪上下文会在实例之间传播。
{% endhint %}

## 采样（Sampling）

默认情况下，n8n 会导出每条追踪。要减少繁忙实例的数据量，可以把 `N8N_OTEL_TRACES_SAMPLE_RATE` 设置为 `0` 到 `1` 之间的值：

```bash
# Export 10% of traces
export N8N_OTEL_TRACES_SAMPLE_RATE=0.1
```

n8n 使用基于追踪 ID 的比率采样器（ratio sampler），因此同一条追踪 ID 要么在其所有跨度中全部被采样，要么全部被丢弃。

{% hint style="info" %}
默认情况下，n8n 只输出[生产执行（production executions）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/understand-workflows/understand-executions/types-of-executions)的追踪。要为所有工作流执行输出追踪，请设置 `N8N_OTEL_TRACES_PRODUCTION_ONLY=false`。
{% endhint %}

## 减少跨度数量（Reduce span volume）

工作流中的每个节点都会产生一个自己的跨度。对于节点很多的工作流，这可能会产生比你需要的更多的数据。要只导出工作流级别的跨度，请设置：

```bash
export N8N_OTEL_TRACES_INCLUDE_NODE_SPANS=false
```

要阻止 n8n 向出站 HTTP 请求注入 `traceparent` 请求头，请设置：

```bash
export N8N_OTEL_TRACES_INJECT_OUTBOUND=false
```

## 智能体追踪（Agent tracing）

{% hint style="info" %}
**从 n8n 2.33.0 版本起可用**
{% endhint %}

n8n 还可以为 AI 智能体（agent）的运行发出跨度，使用与工作流追踪相同的追踪器。这涵盖从工作流启动的智能体运行（例如 AI Agent 节点）、从聊天集成（chat integrations）启动的运行，以及从定时任务启动的运行。

智能体追踪与 OTel 模块的其余部分一起运行。在打开 `N8N_OTEL_ENABLED` 的情况下，再加上：

```bash
export N8N_AGENTS_TRACING_ENABLED=true
```

把它设置为 `false` 可以保留工作流和节点跨度，同时丢弃智能体跨度。

默认情况下，智能体追踪会记录提示词（prompts）、工具参数（tool arguments）、响应和工具结果。要排除敏感的输入或输出数据：

```bash
export N8N_AGENTS_TRACING_RECORD_INPUTS=false
export N8N_AGENTS_TRACING_RECORD_OUTPUTS=false
```

变量的完整列表，请参阅 [OpenTelemetry 环境变量](../configure-n8n/basic-configuration/use-environment-variables/opentelemetry.md)。

### 你能得到什么（What you get）

每次智能体运行产生一个根跨度（root span），命名为 `<agent name>.generate` 或 `<agent name>.stream`，取决于运行是否流式返回（stream）其响应。智能体每次调用工具都会产生一个嵌套的 `execute_tool <tool name>` 跨度。

这些跨度使用 OpenTelemetry 的 [GenAI 语义约定（semantic conventions）](https://opentelemetry.io/docs/specs/semconv/gen-ai/)（`gen_ai.*` 属性），因此它们在任何 OTLP 后端中都是可读的，而不仅仅是在为 LangSmith 构建的工具中。

## 自定义跨度属性（Custom span attributes）

你可以向项目、工作流和节点跨度添加自定义属性。n8n 会把每个自定义属性作为 OpenTelemetry 跨度属性导出到你配置的可观测性后端。

{% hint style="info" %}
**功能可用性**

自定义跨度属性在企业版（Enterprise）套餐中可用。
{% endhint %}

不要在属性值中包含密钥（secrets）、个人数据或其他敏感值。

n8n 支持以下自定义属性级别：

| 级别 | 配置位置 | 导出的跨度 | 属性前缀 |
| :---- | :----------- | :------------ | :--------------- |
| 项目（Project） | **项目设置（Project settings）** | `workflow.execute` | `n8n.project.custom.<key>` |
| 工作流（Workflow） | **工作流设置（Workflow settings）** | `workflow.execute` | `n8n.workflow.custom.<key>` |
| 节点（Node） | 节点的 **设置（Settings）** 标签页 | `node.execute` | `n8n.node.custom.<key>` |

项目和工作流自定义跨度属性从 n8n `2.24.0` 版本起可用。节点自定义跨度属性从 n8n `2.22.0` 版本起可用。

### 添加项目跨度属性（Add project span attributes）

要添加项目级跨度属性：

1. 打开一个项目。
2. 选择 **项目设置（Project settings）**。
3. 在 **自定义跨度属性（Custom Span Attributes）** 下，添加一个或多个跨度属性。
4. 选择 **保存（Save）**。

项目属性值使用纯文本。

### 添加工作流跨度属性（Add workflow span attributes）

要添加工作流级跨度属性：

1. 打开工作流。
2. 打开 **工作流设置（Workflow settings）**。
3. 在 **自定义跨度属性（Custom Span Attributes）** 下，选择 **配置（Configure）**。
4. 添加一个或多个跨度属性。
5. 选择 **保存（Save）**。

工作流属性值使用纯文本。

### 添加节点跨度属性（Add node span attributes）

要添加节点级跨度属性：

1. 打开节点并选择 **设置（Settings）** 标签页。
2. 在 **自定义跨度属性（Custom Span Attributes）** 下，选择 **添加属性（Add Attribute）**。
3. 输入一个 **键（Key）**。键必须是纯文本。
4. 输入一个 **值（Value）**。值可以是纯文本或表达式，例如 `={{ $json.environment }}`。

节点属性值必须解析为字符串、数字或布尔值。

### 在自定义节点中用代码添加属性（Add attributes programmatically in a custom node）

如果你正在[构建自定义节点（building a custom node）](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/create-nodes/overview)，你可以从代码中附加自定义键值对。在节点的 `execute` 方法中调用 `setMetadata`：

```typescript
async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	this.setMetadata({
		tracing: {
			'llm.model': 'gpt-4o',
			'llm.token.input': 1500,
			'llm.token.output': 340,
		},
	});

	return [this.getInputData()];
}
```

n8n 会在导出的跨度上给每个键加上 `n8n.node.custom.` 前缀。值必须是字符串、数字或布尔值。

这个 API 不能从 Code 节点中使用。它面向想要用领域特定数据丰富跨度的节点作者。

如果节点在这里设置的属性键也配置为[自定义节点跨度属性](#add-node-span-attributes)，则以编程方式设置的值优先。

## 用 Jaeger 试一下（Try it out with Jaeger）

你可以把追踪发送到本地的 [Jaeger](https://www.jaegertracing.io/) 实例，看看实际效果。

1. 把下面内容保存为 `docker-compose.yml`：

```yaml
services:
  jaeger:
    image: jaegertracing/jaeger:latest
    ports:
      - "16686:16686" # UI
      - "4317:4317"   # OTLP gRPC
      - "4318:4318"   # OTLP HTTP
```

2. 启动 Jaeger：

```bash
docker compose up -d
```

3. 开启追踪并指向 Jaeger 来启动 n8n。设置细节请参阅[启动 n8n（starting n8n）](https://github.com/n8n-io/n8n/blob/master/CONTRIBUTING.md)：

```bash
N8N_OTEL_ENABLED=true N8N_OTEL_EXPORTER_OTLP_ENDPOINT=http://127.0.0.1:4318 n8n start
```

4. 运行一个工作流，然后打开 Jaeger 界面 [http://localhost:16686](http://localhost:16686) ——选择 "n8n" 作为服务，点击 "Find traces"，就能看到 n8n 发出的 OpenTelemetry 追踪。

## 跨度属性（Span attributes）

工作流和节点跨度包括以下 n8n 特有的属性。

### 工作流跨度（`workflow.execute`）

| 属性 | 说明 |
| :-------- | :---------- |
| `n8n.workflow.id` | 工作流 ID。 |
| `n8n.workflow.name` | 工作流名称。 |
| `n8n.workflow.version_id` | 工作流版本 ID。 |
| `n8n.workflow.node_count` | 工作流中的节点数。 |
| `n8n.project.id` | 项目 ID。从 n8n `2.23.0` 版本起可用。 |
| `n8n.execution.id` | 执行 ID。 |
| `n8n.execution.mode` | 执行模式（例如 `manual`、`webhook`、`trigger`、`retry`）。 |
| `n8n.execution.status` | 最终执行状态。 |
| `n8n.execution.is_retry` | 如果执行是重试，则为 `true`。 |
| `n8n.execution.retry_of` | 当执行是重试时，原始的执行 ID。 |
| `n8n.execution.error_type` | 错误类名称，执行失败时设置。 |
| `n8n.continuation.reason` | 当工作流在等待后恢复时，设置在跨度链接上。 |
| `n8n.project.custom.<key>` | 通过[项目级自定义跨度属性](#custom-span-attributes)设置的自定义属性。 |
| `n8n.workflow.custom.<key>` | 通过[工作流级自定义跨度属性](#custom-span-attributes)设置的自定义属性。 |

### 节点跨度（`node.execute`）

| 属性 | 说明 |
| :-------- | :---------- |
| `n8n.node.id` | 节点 ID。 |
| `n8n.node.name` | 节点名称。 |
| `n8n.node.type` | 节点类型（例如 `n8n-nodes-base.httpRequest`）。 |
| `n8n.node.type_version` | 节点类型版本。 |
| `n8n.node.items.input` | 节点收到的输入条目数。 |
| `n8n.node.items.output` | 节点产生的输出条目数。 |
| `n8n.node.termination_reason` | 节点跨度在没有正常完成时结束的原因（例如 `workflow_cancelled`）。 |
| `n8n.node.custom.<key>` | 通过节点设置中的[节点级自定义跨度属性](#custom-span-attributes)或自定义节点代码中的 `metadata.tracing` 设置的自定义属性。 |

当节点失败时，n8n 会在跨度上记录一个 `exception` 事件，包含标准的 OpenTelemetry 异常属性（`exception.type`、`exception.message`、`exception.stacktrace`）。

### 智能体运行跨度（`<agent name>.generate` 或 `<agent name>.stream`）

| 属性 | 说明 |
| :-------- | :---------- |
| `gen_ai.operation.name` | 始终是 `invoke_agent`。 |
| `gen_ai.agent.name` | 智能体名称。 |
| `gen_ai.request.model` | 模型 ID，格式为 `<provider>/<model name>`，当已知时。 |
| `gen_ai.conversation.id` | 线程 ID。 |
| `gen_ai.prompt` | 序列化的提示词、工具数量和工具目录。当 `N8N_AGENTS_TRACING_RECORD_INPUTS` 为 `false` 时省略。 |
| `agent_id` | 智能体 ID。 |
| `project_id` | 项目 ID。 |
| `thread_id` | 线程 ID。 |
| `source` | 运行的起点（例如 `workflow`，或某个聊天集成的名称）。 |
| `user_id` | 用户 ID，当已知时。 |
| `model_id` | 模型 ID，格式为 `<provider>/<model name>`，当已知时。 |
| `execution_id` | 执行 ID，用于工作流触发的运行。 |
| `workflow_id` | 工作流 ID，用于工作流触发的运行。 |
| `node_id` | 节点 ID，用于工作流触发的运行。 |

### 工具调用跨度（`execute_tool <tool name>`）

| 属性 | 说明 |
| :-------- | :---------- |
| `gen_ai.operation.name` | 始终是 `execute_tool`。 |
| `gen_ai.tool.name` | 工具名称。 |
| `gen_ai.tool.call.id` | 工具调用 ID。 |
| `gen_ai.agent.name` | 智能体名称。 |
| `gen_ai.tool.call.arguments` | 工具调用参数。当 `N8N_AGENTS_TRACING_RECORD_INPUTS` 为 `false` 时省略。 |
| `gen_ai.tool.call.result` | 工具调用结果。当 `N8N_AGENTS_TRACING_RECORD_OUTPUTS` 为 `false` 时省略。 |

## 故障排查（Troubleshooting）

### 后端没有出现任何追踪（No traces appear in your backend）

如果 n8n 在启动时无法访问 OTLP 端点，它会记录一条错误：

```
Failed to connect to OpenTelemetry OTLP endpoint during startup
```

请检查：

- `N8N_OTEL_ENABLED` 是否设置为 `true`。
- `N8N_OTEL_EXPORTER_OTLP_ENDPOINT` 是否指向收集器的基础 URL（而不是 `/v1/traces` 路径）。
- 收集器是否能从 n8n 容器或主机访问。
- 是否设置了任何必需的 `N8N_OTEL_EXPORTER_OTLP_HEADERS`（例如认证令牌）。

n8n 默认在 `warn` 级别记录 OpenTelemetry 诊断信息。设置 `N8N_LOG_LEVEL=debug` 可以查看更多细节。

### 自定义跨度属性缺失（Custom span attributes are missing）

请检查：

- 你有企业版许可证。
- 你把 `N8N_OTEL_ENABLED` 设置为 `true`。
- 对于节点级跨度属性，`N8N_OTEL_TRACES_INCLUDE_NODE_SPANS` 没有设置为 `false`。

### worker 追踪缺少父上下文（Worker traces are missing parent context）

在队列模式下，worker 从数据库中读取父追踪上下文。如果你只在主实例上设置 OpenTelemetry 环境变量，worker 跨度将不会链接到父工作流追踪。请在每种类型的实例上都设置相同的变量。

### 没有出现智能体跨度（No agent spans appear）

智能体跨度依赖于 OTel 模块。请检查：

- `N8N_OTEL_ENABLED` 是否设置为 `true`。
- `N8N_AGENTS_TRACING_ENABLED` 是否设置为 `true`。

当 `N8N_OTEL_ENABLED` 设置为 `false` 时，智能体运行会正常完成，但即使 `N8N_AGENTS_TRACING_ENABLED` 设置为 `true`，n8n 也不会为它们发出任何跨度。

## 相关资源（Related resources）

- [OpenTelemetry 环境变量](../configure-n8n/basic-configuration/use-environment-variables/opentelemetry.md)
- [W3C 追踪上下文规范（W3C Trace Context specification）](https://www.w3.org/TR/trace-context/)
- [OpenTelemetry 收集器文档（OpenTelemetry Collector documentation）](https://opentelemetry.io/docs/collector/)
- [n8n 中的日志（Logging in n8n）](set-up-logging.md)
- [监控（Monitoring）](monitor-n8n.md)
