---
description: Stream events from n8n to your logging tools.
contentType: howto
nodeTitle: Stream logs to external systems
originalFilePath: log-streaming.md
originalUrl: 'https://docs.n8n.io/log-streaming'
url: 'https://docs.n8n.io/administer/observe-and-log/stream-logs-to-external-systems'
layout:
  description:
    visible: false
---

# 日志流式传输 (Log streaming)

{% hint style="info" %}
**功能可用性**

日志流式传输（Log Streaming）在所有 Enterprise（企业版）套餐中可用。
{% endhint %}

日志流式传输允许你把 n8n 中的事件（events）发送到你自己的日志工具中。这样一来，你就可以在自己现有的告警（alerting）和日志（logging）处理流程中统一管理 n8n 的监控。

{% hint style="info" %}
**小白解释：什么是"事件"？**

n8n 在运行过程中会发生很多"事情"，比如：工作流开始执行、执行成功、执行失败、某个节点开始运行、用户登录成功或失败等。这些"事情"就叫事件（events）。日志流式传输的作用，就是把这些事件实时转发到你自己的日志系统（比如 ELK、Splunk、Sentry 等），方便你集中监控、设置告警和排查问题。
{% endhint %}

## 设置日志流式传输 (Set up log streaming)

要使用日志流式传输，你需要先添加一个"流式传输目的地"（streaming destination）——简单说，就是告诉 n8n：这些事件要往哪里发。

1. 进入 **Settings**（设置）> **Log Streaming**（日志流式传输）。
2. 选择 **Add new destination**（添加新目的地）。
3. 选择你的目的地类型。n8n 会打开 **New Event Destination**（新事件目的地）弹窗。
4. 在 **New Event Destination** 弹窗中，输入你的事件目的地所需的配置信息。具体需要填写哪些字段，取决于你选择的目的地类型。
5. 选择 **Events**（事件），挑选要流式传输哪些事件。
6. 选择 **Save**（保存）。

{% hint style="info" %}
**自托管用户（Self-hosted users）**

如果你是自托管（自己部署）n8n，还可以用[环境变量](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/logs#log-streaming)配置额外的日志流式传输行为。你也可以完全通过环境变量来管理目的地，参见[使用环境变量配置日志流式传输目的地](#configure-using-environment-variables)（配置日志流式传输目的地）一节。
{% endhint %}

## 每个进程的事件日志文件 (Per-process event log files)

n8n 在把每个产生的事件转发到流式传输目的地之前，会先把事件持久化（永久保存）到一个本地日志文件中。这个文件在服务重启后依然存在，让 n8n 可以把之前没有成功投递的事件重新发送出去（防止因为网络抖动等原因丢事件）。

默认情况下，n8n 会把事件日志写到 `<n8n-user-folder>/n8nEventLog.log`；在 worker（工作进程）或 webhook-processor（Webhook 处理器）进程中，文件名会带有 `-worker` 或 `-webhook-processor` 后缀。当只有一个 n8n 进程持有（独占）这个文件时，这个默认行为是没问题的。

{% hint style="warning" %}
**警告：共享可写文件系统（Shared writable filesystems）**

如果有多个 n8n 进程共享同一个可写的磁盘卷，例如[队列模式](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/scaling/enable-queue-mode)下、使用 NFS 或 EFS 上共享持久卷的 worker，那么它们绝不能写入同一个事件日志文件。多个进程同时往同一个文件里追加内容，会导致内容交错（interleave）甚至文件损坏，进而引发恢复失败和事件丢失。
{% endhint %}

要避免这个问题，请在每个进程上设置 [`N8N_EVENTBUS_LOGWRITER_LOGFULLPATH`](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/logs#log-streaming) 为一个唯一的、以 `.log` 结尾的绝对路径。n8n 会原样使用你配置的这个路径，不会自动追加进程类型后缀，所以"每个进程路径必须唯一"这件事，需要由你的编排工具（orchestrator，例如 Docker、Kubernetes 等）来保证。

配套变量 [`N8N_EVENTBUS_LOGWRITER_MAXTOTALMESSAGESPERFILE`](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/logs#log-streaming) 限定了 n8n 在恢复期间最多从单个事件日志文件中解析多少行，这样即使日志文件损坏，也不会把进程的内存耗尽。

{% hint style="info" %}
**小白解释：为什么要限制解析行数？**

如果某个日志文件被写坏了，文件内容可能变得非常巨大或者格式异常。如果不加限制，n8n 在启动时尝试恢复并解析这个文件，可能会占用大量内存甚至卡死。加上 `N8N_EVENTBUS_LOGWRITER_MAXTOTALMESSAGESPERFILE` 这个"上限"，就相当于给解析工作加了一道保险，超过行数就不管了。
{% endhint %}

注意事项：

* 如果不设置 `N8N_EVENTBUS_LOGWRITER_LOGFULLPATH`，默认行为保持不变。
* 设置该变量后，n8n 不会自动给路径加后缀。每个进程都必须设置属于自己的路径值。
* 如果之前部署时遗留了一个共享的 `n8nEventLog-worker.log` 文件，请在启用这个功能之前手动把它隔离（移走或删除）。n8n 不会自动删除旧文件。

## 事件 (Events)

下面列出了所有可用的事件。你可以在 **Settings**（设置）> **Log Streaming**（日志流式传输）> **Events**（事件）中选择要流式传输哪些事件。

{% hint style="info" %}
**小白解释：事件名称怎么看？**

下面每个事件都标注了中文说明和英文原名（英文原名就是 n8n 界面里显示的名字）。在实际使用中，n8n 内部会用 `n8n.工作流`、`n8n.审计` 这样的"事件前缀"来分类，后面配置环境变量时会用到。
{% endhint %}

* 工作流 (Workflow)
	* 已开始 (Started)
	* 成功 (Success)
	* 失败 (Failed)
	* 已取消 (Cancelled)
* 节点执行 (Node executions)
	* 已开始 (Started)
	* 已完成 (Finished)
* 审计 (Audit)
	* 用户登录成功 (User login success)
	* 用户登录失败 (User login failed)
	* 用户注册 (User signed up)
	* 用户信息更新 (User updated)
	* 用户被删除 (User deleted)
	* 用户被邀请 (User invited)
	* 用户接受邀请 (User invitation accepted)
	* 用户被重新邀请 (User re-invited)
	* 用户邮件发送失败 (User email failed)
	* 用户请求重置密码 (User reset requested)
	* 用户已重置密码 (User reset)
	* 用户创建了凭据 (User credentials created)
	* 用户共享了凭据 (User credentials shared)
	* 用户更新了凭据 (User credentials updated)
	* 用户删除了凭据 (User credentials deleted)
	* 用户创建了 API 密钥 (User API created)
	* 用户删除了 API 密钥 (User API deleted)
	* 用户开启了 MFA（多因素认证）(User MFA enabled)
	* 用户关闭了 MFA（多因素认证）(User MFA disabled)
	* 用户删除了执行记录 (User execution deleted)
	* 执行数据被查看（揭示）(Execution data revealed)
	* 执行数据查看失败 (Execution data reveal failed)
	* 安装了新包（插件）(Package installed)
	* 更新了包（插件）(Package updated)
	* 删除了包（插件）(Package deleted)
	* 工作流被创建 (Workflow created)
	* 工作流被删除 (Workflow deleted)
	* 工作流被更新 (Workflow updated)
	* 工作流被归档 (Workflow archived)
	* 工作流被取消归档 (Workflow unarchived)
	* 工作流被激活 (Workflow activated)
	* 工作流被停用 (Workflow deactivated)
	* 工作流版本已更新 (Workflow version updated)
	* 工作流被执行 (Workflow executed)
	* 工作流进入等待 (Workflow waiting)
	* 工作流恢复运行 (Workflow resumed)
	* 变量被创建 (Variable created)
	* 变量被更新 (Variable updated)
	* 变量被删除 (Variable deleted)
	* 外部密钥提供者设置已保存 (External secrets provider settings saved)
	* 外部密钥提供者已重新加载 (External secrets provider reloaded)
	* 外部密钥连接被创建 (External secrets connection created)
	* 外部密钥连接被更新 (External secrets connection updated)
	* 外部密钥连接被删除 (External secrets connection deleted)
	* 外部密钥连接已测试 (External secrets connection tested)
	* 外部密钥连接已重新加载 (External secrets connection reloaded)
	* 个人发布限制已启用 (Personal publishing restricted enabled)
	* 个人发布限制已禁用 (Personal publishing restricted disabled)
	* 个人共享限制已启用 (Personal sharing restricted enabled)
	* 个人共享限制已禁用 (Personal sharing restricted disabled)
	* 2FA（双因素认证）强制执行已启用 (2FA enforcement enabled)
	* 2FA（双因素认证）强制执行已禁用 (2FA enforcement disabled)
	* 令牌交换成功 (Token exchange succeeded)
	* 令牌交换失败 (Token exchange failed)
	* 令牌交换：嵌入登录 (Token exchange embed login)
	* 令牌交换：嵌入登录失败 (Token exchange embed login failed)
	* 令牌交换：身份已关联 (Token exchange identity linked)
	* 令牌交换：用户已开通 (Token exchange user provisioned)
	* 令牌交换：角色已更新 (Token exchange role updated)
	* 角色映射：角色已解析 (Role mapping roles resolved)
	* 角色映射：规则被创建 (Role mapping rule created)
	* 角色映射：规则被更新 (Role mapping rule updated)
	* 角色映射：规则被删除 (Role mapping rule deleted)
	* 角色映射：规则被批量删除 (Role mapping rules bulk deleted)
* Worker（工作进程）
	* 已启动 (Started)
	* 已停止 (Stopped)
* AI 节点日志 (AI node logs)
	* 记忆：获取消息 (Memory get messages)
	* 记忆：添加了消息 (Memory added message)
	* 输出解析器：解析完成 (Output parser parsed)
	* 检索器：获取相关文档 (Retriever get relevant documents)
	* 嵌入模型：文档已嵌入 (Embeddings embedded document)
	* 嵌入模型：查询已嵌入 (Embeddings embedded query)
	* 文档已处理 (Document processed)
	* 文本分割器：分割完成 (Text splitter split)
	* 工具被调用 (Tool called)
	* 向量库已搜索 (Vector store searched)
	* 大语言模型生成完成 (LLM generated)
	* 大语言模型出错 (LLM error)
	* 向量库已填充 (Vector store populated)
	* 向量库已更新 (Vector store updated)
* Runner（执行器）
	* 任务已请求 (Task requested)
	* 已收到响应 (Response received)
* 队列 (Queue)
	* 任务已入队 (Job enqueued)
	* 任务已出队 (Job dequeued)
	* 任务已完成 (Job completed)
	* 任务失败 (Job failed)
	* 任务卡住/停滞 (Job stalled)

## 目的地 (Destinations)

n8n 支持三种目的地类型：

* 一个 syslog 服务器（系统日志服务器，常用于集中收集日志）
* 一个通用 webhook（一个可以接收 HTTP 请求的接口地址）
* 一个 Sentry 客户端（Sentry 是一个流行的错误监控平台）

{% hint style="info" %}
**小白解释：三种目的地怎么选？**

* **syslog**：如果你的公司用 syslog 协议集中收集日志（很多运维监控系统都支持），就选它。
* **webhook**：如果你想把事件发给任意一个能接收 HTTP 请求的服务（比如自建接口、Slack、企业微信机器人等），就选它。
* **Sentry**：如果你用 Sentry 做错误监控和告警，就选它。Sentry 只需要一个 DSN 密钥就能接入。
{% endhint %}

## 使用环境变量配置 (Configure using environment variables)

如果你是自托管 n8n，可以不通过界面（UI），而是直接用环境变量来管理日志流式传输目的地。该功能从 n8n v2.19.0 开始可用。把 `N8N_LOG_STREAMING_MANAGED_BY_ENV` 设为 `true`，然后在 `N8N_LOG_STREAMING_DESTINATIONS` 中以 JSON 数组的形式提供你的目的地配置。n8n 每次启动时都会重新应用这些配置，并把 **Log Streaming**（日志流式传输）界面锁定为只读。完整的用法模式参见[使用环境变量管理实例设置 (Manage instance settings using environment variables)](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/manage-settings-using-environment-variables)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/JvN9TDUUWTwpWaT83YrH/" %}

### 通用字段 (Common fields)

每个目的地都接受下面这些字段，无论 `type`（类型）是什么。

| 字段 (Field) | 类型 (Type) | 必填 (Required) | 说明 (Description) |
| --- | --- | --- | --- |
| `type` | `"webhook"` \| `"syslog"` \| `"sentry"` | 是 | 目的地类型。决定使用哪些类型专属的字段。 |
| `label` | string（字符串） | 否 | 在界面中显示的显示名称。 |
| `enabled` | boolean（布尔值） | 否 | 该目的地是否转发事件。 |
| `subscribedEvents` | string[]（字符串数组） | 否 | 要转发的事件名称或分组前缀（例如 `n8n.audit`、`n8n.workflow`）。 |
| `anonymizeAuditMessages` | boolean（布尔值） | 否 | 是否从 `n8n.audit.*` 事件中去掉敏感载荷数据（匿名化）。 |
| `circuitBreaker` | object（对象） | 否 | 故障保护设置。详见[熔断器 (Circuit breaker)](#circuit-breaker)。 |

### Webhook（网页钩子）

| 字段 (Field) | 类型 (Type) | 必填 (Required) | 默认值 (Default) | 说明 (Description) |
| --- | --- | --- | --- | --- |
| `url` | string (URL) | 是 | - | 接收事件数据的接口地址（端点）。 |
| `method` | `"GET"` \| `"POST"` \| `"PUT"` | 否 | `"POST"` | 投递事件时使用的 HTTP 方法。 |
| `sendQuery` | boolean（布尔值） | 否 | `false` | 是否发送查询参数（URL 中 `?` 后面的参数）。 |
| `specifyQuery` | `"keypair"` \| `"json"` | 否 | `"keypair"` | 当 `sendQuery` 为 `true` 时，查询参数的填写格式。 |
| `queryParameters` | `{ parameters: [{ name, value }] }` | 否 | - | 以键值对形式填写的查询参数。当 `specifyQuery` 为 `"keypair"` 时使用。 |
| `jsonQuery` | string（字符串） | 否 | `""` | 以 JSON 字符串形式填写的查询参数。当 `specifyQuery` 为 `"json"` 时使用。 |
| `sendHeaders` | boolean（布尔值） | 否 | `false` | 是否发送请求头（Headers）。 |
| `specifyHeaders` | `"keypair"` \| `"json"` | 否 | `"keypair"` | 当 `sendHeaders` 为 `true` 时，请求头的填写格式。 |
| `headerParameters` | `{ parameters: [{ name, value }] }` | 否 | - | 以键值对形式填写的请求头。当 `specifyHeaders` 为 `"keypair"` 时使用。 |
| `jsonHeaders` | string（字符串） | 否 | `""` | 以 JSON 字符串形式填写的请求头。当 `specifyHeaders` 为 `"json"` 时使用。 |
| `options` | object（对象） | 否 | `{}` | 连接级别的选项。详见[Webhook 选项 (Webhook options)](#webhook-options)。 |

{% hint style="info" %}
**小白解释：keypair 和 json 有什么区别？**

* **keypair（键值对）**：按"参数名 = 参数值"一行一个地填写，比如 `Authorization` 和 `Bearer s3cret`。适合少量、固定的参数。
* **json**：把所有参数写成一个 JSON 字符串。适合参数很多或结构复杂的情况。
{% endhint %}

#### Webhook 选项 (Webhook options)

| 字段 (Field) | 类型 (Type) | 必填 (Required) | 默认值 (Default) | 说明 (Description) |
| --- | --- | --- | --- | --- |
| `allowUnauthorizedCerts` | boolean（布尔值） | 否 | `false` | 是否忽略 SSL 证书校验（跳过验证。生产环境不建议开启）。 |
| `queryParameterArrays` | `"repeat"` \| `"brackets"` \| `"indices"` | 否 | `"brackets"` | 查询参数中数组的格式。当 `sendQuery` 为 `true` 时使用。 |
| `redirect` | `{ redirect: { followRedirects, maxRedirects } }` | 否 | `{ redirect: {} }` | 是否跟随 HTTP 重定向。`followRedirects`（是否跟随）默认为 `false`；`maxRedirects`（最多跟随次数）默认为 `21`。 |
| `proxy` | `{ proxy: { protocol, host, port } }` | 否 | `{ proxy: {} }` | HTTP/HTTPS 代理设置。`protocol`（协议）为 `"https"` 或 `"http"`；`host`（主机）默认为 `"127.0.0.1"`；`port`（端口）默认为 `9000`。 |
| `timeout` | integer ≥ 1 (毫秒) | 否 | `5000` | 等待服务器开始响应的时间上限（毫秒），超过这个时间就中断请求。 |
| `socket` | `{ keepAlive, maxSockets, maxFreeSockets }` | 否 | `{ keepAlive: true, maxSockets: 50, maxFreeSockets: 5 }` | Socket 连接池配置。`maxSockets` 和 `maxFreeSockets` 为大于等于 1 的整数。 |

```json
[
  {
    "type": "webhook",
    "label": "Audit",
    "subscribedEvents": ["n8n.audit", "n8n.workflow"],
    "anonymizeAuditMessages": true,
    "url": "https://hooks.example.com/n8n",
    "method": "POST",
    "sendHeaders": true,
    "specifyHeaders": "keypair",
    "headerParameters": {
      "parameters": [
        { "name": "Authorization", "value": "Bearer s3cret" }
      ]
    },
    "options": {
      "timeout": 5000,
      "redirect": { "redirect": { "followRedirects": true, "maxRedirects": 5 } }
    }
  }
]
```

{% hint style="info" %}
**小白解释：上面这个 JSON 例子是什么意思？**

它配置了一个 webhook 类型的目的地：订阅了 `n8n.audit`（审计）和 `n8n.workflow`（工作流）两组事件，把事件匿名化后 POST 到 `https://hooks.example.com/n8n`，并带上了 `Authorization`（授权）请求头，还设置了 5 秒超时、最多跟随 5 次重定向。
{% endhint %}

### Syslog（系统日志）

| 字段 (Field) | 类型 (Type) | 必填 (Required) | 默认值 (Default) | 说明 (Description) |
| --- | --- | --- | --- | --- |
| `host` | string（字符串） | 是 | - | Syslog 服务器的主机名或 IP 地址。 |
| `port` | number（数字） | 否 | `514` | Syslog 服务器的端口。 |
| `protocol` | `"udp"` \| `"tcp"` \| `"tls"` | 否 | `"udp"` | 传输协议（udp 用户数据报协议 / tcp 传输控制协议 / tls 加密传输）。 |
| `tlsCa` | string（字符串） | 当 `protocol` 为 `"tls"` 时 | `""` | 用于 TLS 连接的 PEM 格式 CA 证书（加密证书）。 |
| `facility` | number（数字） | 否 | `16` | Syslog 设备代码（facility code）。允许的值：`0`（内核 Kernel）、`1`（用户 User）、`3`（系统 System）、`13`（审计 Audit）、`14`（告警 Alert）、`16` 到 `23`（Local0 到 Local7）。 |
| `app_name` | string（字符串） | 否 | `"n8n"` | 用作 syslog `APP-NAME`（应用名）的值。 |

```json
[
  {
    "type": "syslog",
    "label": "SIEM",
    "subscribedEvents": ["n8n.audit", "n8n.workflow"],
    "host": "syslog.example.com",
    "port": 514,
    "protocol": "tls",
    "tlsCa": "-----BEGIN CERTIFICATE-----\n…\n-----END CERTIFICATE-----",
    "facility": 16,
    "app_name": "n8n"
  }
]
```

{% hint style="info" %}
**小白解释：SIEM 是什么？**

SIEM（Security Information and Event Management，安全信息和事件管理）是一类用于集中收集、分析安全日志的系统，例如 Splunk、QRadar 等。上面这个例子就是把 n8n 的审计和工作流事件通过 TLS 加密方式发送到一个 SIEM 系统。
{% endhint %}

### Sentry（错误监控平台）

| 字段 (Field) | 类型 (Type) | 必填 (Required) | 默认值 (Default) | 说明 (Description) |
| --- | --- | --- | --- | --- |
| `dsn` | string (URL) | 是 | - | Sentry DSN 客户端密钥（在 Sentry 项目设置里可以找到）。 |

```json
[
  {
    "type": "sentry",
    "label": "Sentry prod",
    "subscribedEvents": ["n8n.workflow"],
    "dsn": "https://public@sentry.example.com/1"
  }
]
```

### 熔断器 (Circuit breaker)

熔断器（circuit breaker）会在连续多次失败后，暂时停止向某个目的地投递事件，从而避免给一个已经不堪重负的下游服务（比如你的日志接口）继续增加压力。所有目的地类型都支持这个设置。

{% hint style="info" %}
**小白解释：熔断器是什么原理？**

就像电路里的保险丝：如果短时间内失败次数太多，说明目标服务可能出问题了。熔断器会"断开电路"——暂停投递一段时间，让下游服务缓一缓；等窗口期过去、失败记录过期后，再恢复正常投递。这能防止"日志系统挂了，n8n 还死命往里面发请求"导致的雪崩。
{% endhint %}

| 字段 (Field) | 类型 (Type) | 必填 (Required) | 默认值 (Default) | 说明 (Description) |
| --- | --- | --- | --- | --- |
| `maxFailures` | integer ≥ 1（整数） | 否 | `5` | 在 `failureWindow`（失败统计窗口）内，失败次数达到这个数字时，n8n 就停止向该目的地发送请求。 |
| `failureWindow` | integer ≥ 100 (毫秒) | 否 | `60000` | 统计失败次数的滑动时间窗口（毫秒）。窗口之外的旧失败记录会自动过期、不再计入。 |

```json
{ "circuitBreaker": { "maxFailures": 3, "failureWindow": 30000 } }
```

{% hint style="info" %}
**小白解释：上面这个 JSON 例子**

意思是：在 30 秒（30000 毫秒）的时间窗口内，如果失败了 3 次，熔断器就会触发，暂停向这个目的地投递事件。
{% endhint %}

### 完整示例 (Complete example)

下面是一个完整的示例，把两个目的地（一个 webhook、一个 Sentry）配置进了环境变量：

```bash
N8N_LOG_STREAMING_MANAGED_BY_ENV=true
N8N_LOG_STREAMING_DESTINATIONS='[
  {
    "type": "webhook",
    "label": "Ops webhook",
    "enabled": true,
    "subscribedEvents": ["n8n.workflow", "n8n.audit"],
    "anonymizeAuditMessages": true,
    "url": "https://hooks.example.com/n8n",
    "method": "POST",
    "sendHeaders": true,
    "specifyHeaders": "keypair",
    "headerParameters": {
      "parameters": [
        { "name": "Authorization", "value": "Bearer s3cret" }
      ]
    },
    "circuitBreaker": { "maxFailures": 5, "failureWindow": 60000 }
  },
  {
    "type": "sentry",
    "label": "Sentry prod",
    "subscribedEvents": ["n8n.workflow"],
    "dsn": "https://public@sentry.example.com/1"
  }
]'
```

{% hint style="info" %}
**使用提示**

* `N8N_LOG_STREAMING_MANAGED_BY_ENV=true` 表示：日志流式传输的配置完全由环境变量管理（界面会被锁定为只读）。
* `N8N_LOG_STREAMING_DESTINATIONS` 的值是一个 JSON 数组（用 `[...]` 包裹），每个元素是一个目的地配置对象。
* 配置完成后重启 n8n，配置就会生效。任何手动修改界面设置的操作都会被锁定，防止两边配置不一致。
{% endhint %}
