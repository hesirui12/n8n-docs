---
title: Ollama Model 节点常见问题
description: >-
  n8n（工作流自动化平台）中 Ollama Model 节点的常见问题和错误文档。
  包含问题详情和建议的解决方案。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Ollama Model 节点常见问题
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmollama/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmollama/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmollama/common-issues
layout:
  description:
    visible: false
---

# Ollama Model 节点常见问题

下面是 [Ollama Model 节点](README.md) 的一些常见错误和问题，以及排查解决的步骤。

## 处理参数时的差异（Processing parameters）

Ollama Model 节点是一个子节点[^1]。在用表达式处理多个数据项时，子节点和其他节点的行为不一样。

大多数节点（包括根节点[^2]）可以接收任意数量的数据项作为输入，处理完再输出结果。你可以用表达式引用输入项，节点会依次为每个数据项解析表达式。例如，输入五个姓名值时，表达式 `{{ $json.name }}` 会依次解析出每个姓名。

但在子节点里，表达式**始终只解析第一个数据项**。例如，输入五个姓名值时，表达式 `{{ $json.name }}` 始终解析出第一个姓名。

## 连不上远程的 Ollama 实例

Ollama Model 节点支持 Bearer token 认证，用来连接位于需要认证的代理后面（比如 Open WebUI）的远程 Ollama 实例。

对于需要认证的远程连接，需要在你的 Ollama 凭据里同时配置远程 URL 和 API key。

更多信息请参考 [Ollama 凭据说明](../../../credentials/ollama.md)。

## 用 Docker 时连不上本地的 Ollama 实例

Ollama Model 节点使用 [Ollama 凭据](../../../credentials/ollama.md) 里定义的 base URL 连接本地托管的 Ollama 实例。当 n8n 或 Ollama 跑在 Docker 里时，你需要配置网络，让 n8n 能连上 Ollama。

Ollama 通常监听 `localhost`（本机回环地址）。在 Docker 里，默认情况下每个容器都有自己的 `localhost`，只能从容器内部访问。如果 n8n 或 Ollama 跑在容器里，它们就无法通过 `localhost` 互通。

解决办法取决于这两个组件是怎么部署的。

### 只有 Ollama 在 Docker 里

如果只有 Ollama 跑在 Docker 里，把 Ollama 配置成监听所有网卡，即在容器内绑定 `0.0.0.0`（官方镜像已经默认这样配置了）。

运行容器时，用 `-p` 参数[发布端口](https://docs.docker.com/get-started/docker-concepts/running-containers/publishing-ports/)。默认情况下 Ollama 跑在 11434 端口，所以你的 Docker 命令应该长这样：

```shell
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

配置 [Ollama 凭据](../../../credentials/ollama.md) 时，`localhost` 地址应该就能正常使用（把 **base URL** 设为 `http://localhost:11434`）。

### 只有 n8n 在 Docker 里

如果只有 n8n 跑在 Docker 里，把 Ollama 配置成监听所有网卡，即在宿主机上绑定 `0.0.0.0`。

如果你在 **Linux** 上用 Docker 跑 n8n，启动容器时用 `--add-host` 参数把 `host.docker.internal` 映射到 `host-gateway`。例如：

```shell
docker run -it --rm --add-host host.docker.internal:host-gateway --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
```

如果你用的是 Docker Desktop，这个配置会自动帮你做好。

配置 [Ollama 凭据](../../../credentials/ollama.md) 时，把主机地址填成 `host.docker.internal` 而不是 `localhost`。例如，要连默认端口 11434，可以把 base URL 设为 `http://host.docker.internal:11434`。

### Ollama 和 n8n 分别跑在两个 Docker 容器里

如果 n8n 和 Ollama 都跑在 Docker 里、而且是两个容器，可以用 Docker 网络把它们连起来。

把 Ollama 配置成监听所有网卡，即在容器内绑定 `0.0.0.0`（官方镜像已经默认这样配置了）。

配置 [Ollama 凭据](../../../credentials/ollama.md) 时，把主机地址填成 Ollama 容器的名称，而不是 `localhost`。例如，如果你的 Ollama 容器叫 `my-ollama`，监听默认端口 11434，就把 base URL 设为 `http://my-ollama:11434`。

### Ollama 和 n8n 跑在同一个 Docker 容器里

如果 Ollama 和 n8n 跑在同一个 Docker 容器里，`localhost` 地址不需要任何特殊配置。你只要让 Ollama 监听 localhost，然后在 n8n 的 [Ollama 凭据](../../../credentials/ollama.md) 里把 base URL 配成 localhost 即可：`http://localhost:11434`。

## 报错：connect ECONNREFUSED ::1:11434

这个错误发生在：你的电脑开了 IPv6，但 Ollama 只在 IPv4 地址上监听。

解决办法：把 [Ollama 凭据](../../../credentials/ollama.md) 里的 base URL 改成 `127.0.0.1`（IPv4 专属的本机地址），不要用 `localhost` 这个别名（它可能解析成 IPv4 也可能解析成 IPv6）：`http://127.0.0.1:11434`。

## Ollama 与 HTTP/HTTPS 代理

Ollama 的配置不支持自定义 HTTP agent。这使得 Ollama 很难跑在自定义 HTTP/HTTPS 代理后面。根据你的代理配置，即使设置了 `HTTP_PROXY` 或 `HTTPS_PROXY` 环境变量，也可能完全连不上。

更多信息请参考 [Ollama 的 FAQ](https://github.com/ollama/ollama/blob/main/docs/faq.md#how-do-i-use-ollama-behind-a-proxy)。

[^1]: n8n 集群节点（cluster nodes）由一个或多个连接到根节点上的子节点组成。子节点扩展根节点的功能，提供对特定服务或资源的访问，或提供特定类型的专用处理（比如计算器功能）。
[^2]: 每个 n8n 集群节点都包含一个根节点，它定义了集群的主要功能。一个或多个子节点挂到根节点上，扩展它的功能。
