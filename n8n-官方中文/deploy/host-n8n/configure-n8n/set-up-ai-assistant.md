---
description: 在自托管 n8n 上使用环境变量设置 AI 助手（AI Assistant）。
tags:
  - tag: preview
    primary: true
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# 设置 AI 助手（Set up AI Assistant）

{% hint style="info" %}
AI 助手（AI Assistant）是一个预览功能（preview feature）。
{% endhint %}

{% hint style="warning" %}
AI 助手目前还不可用于自托管企业版（self-hosted Enterprise）。对自托管企业版的支持即将推出。

如果你是企业版客户，并且想在此之前试用 AI 助手，请联系你的客户成功经理（Customer Success Manager, CSM）申请预览权限。
{% endhint %}

{% hint style="info" %}
**小白提示**：AI 助手 = n8n 内置的 AI 功能，它像一个「搭工作流的 AI 帮手」，你可以在编辑器里用自然语言描述需求，它帮你生成/修改工作流，还能联网搜索、在沙盒里运行代码等。本文讲的是在自托管 n8n 上如何通过环境变量把它配置起来。
{% endhint %}

要在自托管实例上运行 AI 助手，你需要：

* 一个 LLM 提供商（大语言模型服务商）的 API 密钥。
* 一个 AI 模型。n8n 默认使用 `anthropic/claude-opus-4-8`，你也可以设置自己的模型。
* 一个沙盒提供商（sandbox provider）。推荐使用 Daytona。
* 如果你需要联网搜索，还需要一个搜索提供商。推荐使用 Brave Search（Brave 搜索）。

{% hint style="info" %}
大多数 AI 助手的设置都使用 `N8N_INSTANCE_AI_*` 开头的环境变量。`INSTANCE_AI_BRAVE_SEARCH_API_KEY` 是一个有意为之的例外。内部模块名为 `instance-ai`。
{% endhint %}

### 开始之前（Before you start）

请确保你有：

* 修改 n8n 实例环境变量的权限。
* 一个较新版本的 n8n。请运行最新稳定版或更新版本；旧版本也许能用，但越新越好。
* 一个受支持的 LLM 提供商的 API 密钥：
  * Anthropic
  * OpenAI
  * OpenRouter
* 一个沙盒提供商。推荐使用 Daytona。
* 如果你需要联网搜索，还需要一个搜索提供商。推荐使用 Brave Search。

{% hint style="info" %}
**小白提示**：LLM（Large Language Model，大语言模型）= 像 ChatGPT 背后的那种 AI 模型。这里你需要先到 Anthropic（Claude）、OpenAI（GPT）或 OpenRouter（聚合多家模型的平台）之一注册账号，拿到一串 API 密钥（通常以 `sk-` 开头）。沙盒（sandbox）= 一个隔离的临时运行环境，AI 助手会在里面安全地执行代码，不会碰你的真实服务器环境。
{% endhint %}

### 用 Daytona 快速配置（Quick setup with Daytona）

Daytona 是大多数自托管配置推荐使用的沙盒提供商。

这个配置方案使用 Anthropic 模型 + Daytona + Brave Search 实现联网搜索，为 AI 助手提供完整能力。

在你的 n8n 实例上设置以下环境变量：

```bash
# Enable the module and choose a model
N8N_ENABLED_MODULES=instance-ai
N8N_INSTANCE_AI_MODEL=anthropic/claude-opus-4-8
N8N_INSTANCE_AI_MODEL_API_KEY=sk-ant-xxx

# Sandbox, required
N8N_INSTANCE_AI_SANDBOX_ENABLED=true
N8N_INSTANCE_AI_SANDBOX_PROVIDER=daytona
N8N_INSTANCE_AI_SANDBOX_IMAGE=daytonaio/sandbox:0.5.3-slim

# Daytona
DAYTONA_API_URL=https://app.daytona.io/api
DAYTONA_API_KEY=dtn_xxx

# Web search, recommended
INSTANCE_AI_BRAVE_SEARCH_API_KEY=BSA-xxx
```

这些变量的作用如下：

| 变量（Variable）                           | 说明（Description）                                                                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `N8N_ENABLED_MODULES`              | 必须包含 `instance-ai` 才能启用该模块。                                                                    |
| `N8N_INSTANCE_AI_MODEL`            | 用 `提供商/模型`（provider/model）格式选择 LLM。有默认值（`anthropic/claude-opus-4-8`），所以这一项是可选的。 |
| `N8N_INSTANCE_AI_MODEL_API_KEY`    | 所选提供商的 API 密钥。                                                                                  |
| `N8N_INSTANCE_AI_SANDBOX_ENABLED`  | 设为 `true`。AI 助手需要一个沙盒。                                                                     |
| `N8N_INSTANCE_AI_SANDBOX_PROVIDER` | 沙盒提供商。使用 Daytona 就填 `daytona`。                                                                        |
| `N8N_INSTANCE_AI_SANDBOX_IMAGE`    | Daytona 沙盒使用的基础容器镜像。                                                                         |
| `DAYTONA_API_URL`                  | Daytona API 的地址。                                                                                               |
| `DAYTONA_API_KEY`                  | 你的 Daytona API 密钥。                                                                                               |
| `INSTANCE_AI_BRAVE_SEARCH_API_KEY` | 用于联网搜索的 Brave Search API 密钥。这个变量故意不使用 `N8N_` 前缀。                     |

{% hint style="info" %}
**小白提示**：上面的 `sk-ant-xxx`、`dtn_xxx`、`BSA-xxx` 都是占位符，要换成你从各个服务商拿到的真实密钥。其中 `xxx` 表示「一串真实的密钥字符」。
{% endhint %}

### Docker Compose 示例

```yaml
services:
  n8n:
    image: docker.n8n.io/n8nio/n8n
    environment:
      N8N_ENABLED_MODULES: instance-ai
      N8N_INSTANCE_AI_MODEL: anthropic/claude-opus-4-8
      N8N_INSTANCE_AI_MODEL_API_KEY: sk-ant-xxx
      N8N_INSTANCE_AI_SANDBOX_ENABLED: 'true'
      N8N_INSTANCE_AI_SANDBOX_PROVIDER: daytona
      N8N_INSTANCE_AI_SANDBOX_IMAGE: daytonaio/sandbox:0.5.3-slim
      DAYTONA_API_URL: https://app.daytona.io/api
      DAYTONA_API_KEY: dtn_xxx
      INSTANCE_AI_BRAVE_SEARCH_API_KEY: BSA-xxx
```

{% hint style="info" %}
**小白提示**：如果你用 Docker Compose 部署 n8n，就把这些变量填到 `n8n` 服务的 `environment` 配置里，效果和用 `export` 设置环境变量完全一样。注意 `N8N_INSTANCE_AI_SANDBOX_ENABLED` 的值 `'true'` 用引号包起来，是因为 YAML 里 `true` 会被解析成布尔值，而 n8n 期望的是字符串 `"true"`。
{% endhint %}

### 应用并验证（Apply and verify）

设置好变量之后：

1. 重启所有 n8n 进程。
2. 打开编辑器（editor）。
3. 确认 AI 助手出现并且可以正常回复。

### 选择模型提供商（Choose a model provider）

`N8N_INSTANCE_AI_MODEL` 使用这种格式：

```
provider/model
```

受支持的提供商有：

* `anthropic`
* `openai`
* `openrouter`

对于托管提供商，可以从 `anthropic/claude-opus-4-8` 或 `openai/gpt-5.5` 开始。

示例：

```bash
# Anthropic
N8N_INSTANCE_AI_MODEL=anthropic/claude-opus-4-8

# OpenAI
N8N_INSTANCE_AI_MODEL=openai/gpt-5.5

# OpenRouter
N8N_INSTANCE_AI_MODEL=openrouter/deepseek/deepseek-v4-pro
```

把 `N8N_INSTANCE_AI_MODEL_API_KEY` 设置为所选提供商的 API 密钥。

如果没有设置 `N8N_INSTANCE_AI_MODEL_API_KEY`，n8n 会使用该提供商的标准环境变量作为后备：

* `ANTHROPIC_API_KEY`
* `OPENAI_API_KEY`
* `OPENROUTER_API_KEY`

{% hint style="info" %}
**小白提示**：`provider/model` 就是「哪个服务商 + 哪个模型」。比如 `anthropic/claude-opus-4-8` 表示用 Anthropic 的 claude-opus-4-8 模型。如果你没有单独设置 `N8N_INSTANCE_AI_MODEL_API_KEY`，n8n 会自动去读 `ANTHROPIC_API_KEY` 这类更通用的密钥变量，所以你自己设一个即可。
{% endhint %}

### 使用本地或自定义的 OpenAI 兼容接口（Use a local or custom OpenAI-compatible endpoint）

要使用本地或自定义的 OpenAI 兼容接口，请设置 `N8N_INSTANCE_AI_MODEL_URL`。

```bash
N8N_INSTANCE_AI_MODEL_URL=http://localhost:1234/v1
N8N_INSTANCE_AI_MODEL_API_KEY=optional-key
```

有些本地服务器不需要 API 密钥。

{% hint style="info" %}
**小白提示**：这个功能适合用 Ollama、LM Studio、vLLM 等本地模型工具的用户——你在本机跑一个 OpenAI 兼容的服务（通常是 `http://localhost:端口/v1`），然后让 n8n 通过这个地址调用本地模型，数据不出内网，更私密也更省钱。
{% endhint %}

### 配置沙盒提供商（Configure a sandbox provider）

AI 助手在隔离的沙盒中运行它的工作，所以必须配置一个沙盒提供商。

| 提供商（Provider）      | 最适合（Best for）                                                           |
| ------------- | ------------------------------------------------------------------ |
| `daytona`     | 大多数自托管实例的推荐配置。                  |
| `n8n-sandbox` | 高级配置：你想自己托管沙盒服务时使用。 |

### 方案 A：Daytona

如果你按照 [用 Daytona 快速配置](set-up-ai-assistant.md#quick-setup-with-daytona) 操作过，你已经有必要的 Daytona 变量了。

Daytona 会按需创建沙盒。

用这些变量调整沙盒的生命周期：

```bash
N8N_INSTANCE_AI_SANDBOX_AUTO_STOP_MINUTES=15
N8N_INSTANCE_AI_SANDBOX_AUTO_ARCHIVE_MINUTES=60
N8N_INSTANCE_AI_SANDBOX_AUTO_DELETE_MINUTES=10080
```

{% hint style="info" %}
默认情况下，Daytona 会在沙盒空闲 15 分钟后将其停止，停止 1 小时后归档，7 天后删除。你可以用上面的 auto-stop（自动停止）、auto-archive（自动归档）和 auto-delete（自动删除）变量来修改这些时间。
{% endhint %}

{% hint style="info" %}
**小白提示**：这些「生命周期」设置是为了省钱和省资源：AI 助手不用沙盒时，沙盒会自动停下来、归档、最终删除，避免一直占着云资源计费。默认值已经很合理，一般不用改。
{% endhint %}

### 方案 B：n8n 沙盒服务（n8n Sandbox Service）

如果你想自己托管沙盒服务，可以使用 [n8n 沙盒服务（n8n Sandbox Service）](https://github.com/n8n-io/n8n-sandbox-service)。

{% hint style="warning" %}
这是一个高级配置。除非你需要自己运行沙盒服务，否则请使用 Daytona。
{% endhint %}

n8n 沙盒服务包含两个容器：

* `n8nio/n8n-sandbox-service-api`：HTTP API，n8n 通过它通信。
* `n8nio/n8n-sandbox-service-runner-dind`：负责把沙盒作为 Docker-in-Docker（Docker 里的 Docker）容器执行的运行器（runner）。

{% hint style="warning" %}
运行器必须以特权模式（privileged mode）运行。
{% endhint %}

API 和运行器之间通过双向 TLS（mutual TLS, mTLS）通信。API 镜像中包含一个 `bootstrap-mtls.sh` 脚本，用于生成证书。

#### 完整的 Docker Compose 示例

把它和你的 n8n 服务放在一起运行：

{% code expandable="true" %}
```yaml
volumes:
  sandbox-tls:

services:
  # One-shot: generates mTLS certificates, then exits
  sandbox-certs:
    image: n8nio/n8n-sandbox-service-api:latest
    user: '0:0'
    entrypoint: ['sh', '-c']
    command:
      - >
        bootstrap-mtls.sh --out-dir /tls --api-san sandbox-api
        --control-san-prefix sandbox-runner --world-readable &&
        chown -R sandbox-api:sandbox-api /tls/api && chmod -R a+rX /tls
    environment:
      NUM_RUNNERS: '1'
    volumes:
      - sandbox-tls:/tls

  sandbox-api:
    image: n8nio/n8n-sandbox-service-api:latest
    depends_on:
      sandbox-certs:
        condition: service_completed_successfully
    environment:
      SANDBOX_API_KEYS: my-sandbox-api-key
      SANDBOX_API_RUNNER_REGISTRATION_TOKEN: my-registration-token
      SANDBOX_API_RUNNER_API_KEY: my-runner-key
      SANDBOX_API_GRPC_TLS_CERT_FILE: /tls/api/grpc-server.crt
      SANDBOX_API_GRPC_TLS_KEY_FILE: /tls/api/grpc-server.key
      SANDBOX_API_GRPC_TLS_CLIENT_CA_FILE: /tls/api/ca.crt
      SANDBOX_API_RUNNER_CONTROL_GRPC_TLS_CA_FILE: /tls/api/ca.crt
      SANDBOX_API_RUNNER_CONTROL_GRPC_TLS_CERT_FILE: /tls/api/control-grpc-api-client.crt
      SANDBOX_API_RUNNER_CONTROL_GRPC_TLS_KEY_FILE: /tls/api/control-grpc-api-client.key
      SANDBOX_API_RUNNER_CONTROL_GRPC_TLS_SERVER_NAME: sandbox-runner-1
    volumes:
      - sandbox-tls:/tls:ro

  sandbox-runner-1:
    image: n8nio/n8n-sandbox-service-runner-dind:latest
    privileged: true
    depends_on:
      - sandbox-api
    environment:
      SANDBOX_RUNNER_API_KEYS: my-runner-key
      SANDBOX_RUNNER_REGISTRATION_TOKEN: my-registration-token
      SANDBOX_RUNNER_API_GRPC_ADDR: sandbox-api:9090
      SANDBOX_RUNNER_HTTP_BASE_URL: http://sandbox-runner-1:8080
      SANDBOX_RUNNER_CONTROL_GRPC_LISTEN_ADDR: ':9091'
      SANDBOX_RUNNER_CONTROL_GRPC_ADVERTISE_ADDR: sandbox-runner-1:9091
      SANDBOX_RUNNER_ID: runner-1
      SANDBOX_RUNNER_DOCKER_SANDBOX_IMAGE: n8nio/n8n-sandbox-service-sandbox:latest
      SANDBOX_RUNNER_REGISTRATION_GRPC_CA_FILE: /tls/runner/ca.crt
      SANDBOX_RUNNER_REGISTRATION_GRPC_CERT_FILE: /tls/runner/grpc-client.crt
      SANDBOX_RUNNER_REGISTRATION_GRPC_KEY_FILE: /tls/runner/grpc-client.key
      SANDBOX_RUNNER_REGISTRATION_GRPC_SERVER_NAME: sandbox-api
      SANDBOX_RUNNER_CONTROL_GRPC_TLS_CERT_FILE: /tls/runner/control-grpc-server.crt
      SANDBOX_RUNNER_CONTROL_GRPC_TLS_KEY_FILE: /tls/runner/control-grpc-server.key
      SANDBOX_RUNNER_CONTROL_GRPC_TLS_CLIENT_CA_FILE: /tls/runner/ca.crt
    volumes:
      - sandbox-tls:/tls:ro
```
{% endcode %}

#### 让 n8n 指向沙盒服务（Point n8n at the sandbox service）

服务运行起来之后，在你的 n8n 实例上设置这些变量：

```bash
N8N_INSTANCE_AI_SANDBOX_ENABLED=true
N8N_INSTANCE_AI_SANDBOX_PROVIDER=n8n-sandbox
N8N_SANDBOX_SERVICE_URL=http://sandbox-api:8080
N8N_SANDBOX_SERVICE_API_KEY=my-sandbox-api-key
```

| 变量（Variable）                           | 说明（Description）                                         |
| ---------------------------------- | --------------------------------------------------- |
| `N8N_INSTANCE_AI_SANDBOX_ENABLED`  | 设为 `true`。                                      |
| `N8N_INSTANCE_AI_SANDBOX_PROVIDER` | 设为 `n8n-sandbox`。                               |
| `N8N_SANDBOX_SERVICE_URL`          | 沙盒 API 的 URL，需要能从 n8n 访问到。         |
| `N8N_SANDBOX_SERVICE_API_KEY`      | 必须与 API 容器上的 `SANDBOX_API_KEYS` 一致。 |

验证服务是否正在运行：

```bash
curl http://<sandbox-api-host>:8080/healthz
```

预期的响应：

```json
{"status":"ok"}
```

注意事项：

* 把 `my-sandbox-api-key`、`my-registration-token` 和 `my-runner-key` 替换为你自己的密钥。
* 运行器在第一次使用时，会从 Docker Hub 拉取 `n8nio/n8n-sandbox-service-sandbox` 镜像。
* 对于离线（air-gapped）环境，请把 `n8nio/n8n-sandbox-service-sandbox` 预加载到运行器的内部 Docker 中。
* 主机名很重要。证书是为 `sandbox-api` 和 `sandbox-runner-<n>` 签发的，所以请保持这些服务名不变，或者重新生成带匹配 SAN（主题备用名称）的证书。

### 可选功能（Optional features）

基础配置跑通之后，你可以调整联网搜索。

#### 启用联网搜索（Enable web search）

联网搜索让 AI 助手可以在网上查找信息。它需要一个搜索提供商。

Brave Search 是推荐的提供商。推荐的配置方案默认就包含 Brave Search。如果你不配置联网搜索，AI 助手的其他功能仍可正常工作，只是「联网搜索」这个动作会保持禁用状态。

```bash
# Brave Search
INSTANCE_AI_BRAVE_SEARCH_API_KEY=BSA-xxx

# SearXNG
N8N_INSTANCE_AI_SEARXNG_URL=http://searxng:8080
```

{% hint style="info" %}
`INSTANCE_AI_BRAVE_SEARCH_API_KEY` 故意不使用 `N8N_` 前缀。请严格按照示例使用这个变量名。
{% endhint %}

如果你想使用联网搜索，请配置 Brave Search。如果你同时配置了 SearXNG，Brave Search 的优先级高于 SearXNG。

免费或无需认证的提供商（包括 SearXNG）可能会遇到速率限制（rate limits）。使用 Brave Search 可以获得更可靠的配置。

如果实例管理员在 AI 设置界面中选择了 Brave Search 或 SearXNG 的凭据，n8n 会优先使用该凭据，而不是这些环境变量。

{% hint style="info" %}
**小白提示**：SearXNG 是一个开源的元搜索引擎，你可以自己部署；Brave Search 是商业搜索 API。两者都能让 AI 助手联网，Brave 更稳定、有免费额度，SearXNG 免费但容易触发限流。
{% endhint %}

### 启用智能体（Enable agents）

智能体（agents）与 AI 助手运行在同一个自托管技术栈上。AI 助手能正常工作后，把 `agents` 模块加进来，即可在 [你的实例上构建和运行智能体](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/build-and-manage-agents)。智能体需要 n8n `2.32.3`（Beta）或更高版本。

{% hint style="warning" %}
智能体目前还不能用于自托管企业版。对自托管企业版的支持即将推出。
{% endhint %}

你可以只用 `agents` 模块手动构建智能体：自己选择模型、编写指令、自己挂载工具（tools）和技能（skills）。AI 助手（`instance-ai`）是可选的，它提供「AI 辅助构建」：你描述一个智能体，n8n 为你搭建出它的骨架。

把 `agents` 加入 `N8N_ENABLED_MODULES`，如果你还想要 AI 辅助构建，就同时保留 `instance-ai`：

```bash
# Enable the agents module (keep instance-ai for AI-assisted building)
N8N_ENABLED_MODULES=instance-ai,agents

# Knowledge base, optional: reuses the Daytona sandbox you set up for AI Assistant
N8N_AGENTS_AI_SANDBOX_ENABLED=true
N8N_AGENTS_AI_SANDBOX_PROVIDER=daytona

# Channels, optional: public URL so Slack, Telegram, and Linear can reach your instance
WEBHOOK_URL=https://your-public-url
```

| 变量（Variable）                        | 说明（Description）                                                                                                                    |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `N8N_ENABLED_MODULES`           | 包含 `agents` 即可启用该模块。想保留 AI 辅助构建就同时保留 `instance-ai`。                                            |
| `N8N_AGENTS_AI_SANDBOX_ENABLED` | 设为 `true` 以启用知识库，让智能体可以搜索上传的文件。需要 Daytona 沙盒。                    |
| `N8N_AGENTS_AI_SANDBOX_PROVIDER`| 知识库使用的沙盒提供商。填 `daytona`。会复用你为 AI 助手设置的 Daytona 密钥。                       |
| `WEBHOOK_URL`                   | 实例的公开、安全 URL。要把智能体连接到 Slack、Telegram、Linear 等渠道时必需。              |

{% hint style="info" %}
知识库是自托管环境下的一个预览功能，需要 Daytona 沙盒。没有它，智能体的其他功能仍然可以正常工作。
{% endhint %}

{% hint style="info" %}
**小白提示**：智能体（agent）可以理解成「有 AI 大脑的自动化机器人」：你给它目标和工具，它会自己决定调用哪些工具、按什么顺序完成任务，还能通过 Slack/Telegram 等渠道和你对话。知识库 = 把一些文档/文件喂给智能体，让它能基于你的资料回答和干活。
{% endhint %}

完整的部署示例请参见 [安装方式（Installation options）](../install-options/README.md)。启用模块之后，请参见 [构建和管理智能体（Build and manage agents）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/build-and-manage-agents)。

### 禁用 AI 助手（Disable AI Assistant）

要禁用 AI 助手，把 `instance-ai` 从 `N8N_ENABLED_MODULES` 中移除即可。

你也可以显式禁用该模块：

```bash
N8N_DISABLED_MODULES=instance-ai
```

### 故障排查（Troubleshooting）

如果 AI 助手没有出现或无法工作，请检查：

* `N8N_ENABLED_MODULES` 是否包含 `instance-ai`。
* 如果你设置了 `N8N_INSTANCE_AI_MODEL`，模型值是否使用了 `provider/model` 格式。
* API 密钥是否对所选提供商有效。
* `N8N_INSTANCE_AI_SANDBOX_ENABLED` 是否设为 `true`。
* 是否配置了沙盒提供商。
* 沙盒提供商是否可以从 n8n 实例访问到。
* 使用 Daytona 时，`DAYTONA_API_URL` 和 `DAYTONA_API_KEY` 是否已设置。
* 如果你需要联网搜索，`INSTANCE_AI_BRAVE_SEARCH_API_KEY` 是否已设置，或 `N8N_INSTANCE_AI_SEARXNG_URL` 是否已设置。
* 使用 n8n 沙盒服务时，`N8N_SANDBOX_SERVICE_API_KEY` 是否与 API 容器上的 `SANDBOX_API_KEYS` 一致。
* 沙盒服务的健康检查是否返回 `{"status":"ok"}`。

{% hint style="info" %}
**小白提示**：按上面列表从上到下逐条核对，大部分问题都出在：模块没启用（少了 `instance-ai`）、沙盒没配好（`N8N_INSTANCE_AI_SANDBOX_ENABLED=true` 加提供商）、或者密钥不对。改完环境变量记得重启 n8n。
{% endhint %}
