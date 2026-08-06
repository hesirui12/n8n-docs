---
title: 任务运行器（Task runners）
contentType: howto
nodeTitle: 设置任务运行器（Set up task runners）
originalFilePath: hosting/configuration/task-runners.md
originalUrl: https://docs.n8n.io/hosting/configuration/task-runners
url: https://docs.n8n.io/deploy/host-n8n/configure-n8n/set-up-task-runners
description: >-
  如何配置任务运行器（task runners），使用内部或外部的运行器进程来执行任务。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
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

# 设置任务运行器（Set up task runners）

任务运行器（task runners）是一种以安全、高效的方式执行任务的通用机制。它们被用来在 [Code 节点（Code node）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.code) 中执行用户提供的 JavaScript 和 Python 代码。

本文档介绍任务运行器的工作原理以及如何配置它们。

{% hint style="info" %}
**小白提示**：为什么 n8n 要专门搞一套「任务运行器」？因为 Code 节点允许用户写任意代码，如果让这段代码直接跑在 n8n 主进程里，一旦代码出 bug（比如死循环、占用大量内存）就可能拖垮整个 n8n。任务运行器把代码放到独立的进程/容器里执行，n8n 本体和用户代码之间有了隔离，安全性和稳定性都更高。
{% endhint %}

{% hint style="warning" %}
**内部模式不建议用于生产环境**

在生产环境中使用内部模式（internal mode）可能带来安全风险。生产部署请使用 [外部模式](set-up-task-runners.md#external-mode)，以确保 n8n 与任务运行器进程之间有适当的隔离。更多安全措施请参见 [加固任务运行器（Hardening task runners）](security/harden-task-runners.md)。
{% endhint %}

## 工作原理（How it works）

任务运行器功能由以下组件组成：一个或多个任务运行器（task runner）、一个任务代理（task broker）和一个任务请求者（task requester）。

![Task runner overview](<../../.gitbook/assets/task-runner-concept (1).png>)

任务运行器通过 websocket 连接连接到任务代理。任务请求者向代理提交一个任务请求，可用的任务运行器可以在代理处领取该任务并执行。

运行器执行任务并把结果提交给任务请求者。任务代理负责协调运行器和请求者之间的通信。

n8n 实例（主实例 main 和 worker 进程）充当代理。在这个场景下，Code 节点就是任务请求者。

{% hint style="info" %}
**小白提示**：可以把这套架构理解成「派单系统」：任务请求者（Code 节点）把「帮我跑这段代码」的订单交给中介（任务代理），中介把订单派给空闲的「码农」（任务运行器），码农干完活把结果交回来。这样谁有空谁干活，还能隔离在不同进程里。
{% endhint %}

## 任务运行器模式（Task runner modes）

你可以在两种不同的模式下使用任务运行器：内部模式（internal）和外部模式（external）。

### 内部模式（Internal mode）

在内部模式下，n8n 实例把任务运行器作为子进程（child process）启动。n8n 进程负责监控和管理任务运行器的生命周期。任务运行器进程与 n8n 共享相同的 `uid` 和 `gid`（用户和组标识）。**不建议**在生产环境使用这种模式。

{% hint style="info" %}
**小白提示**：内部模式 = 任务运行器只是 n8n 自己启动的一个小进程，和 n8n 用同一个系统用户运行。好处是零额外配置、开箱即用；坏处是用户代码和 n8n 的隔离不彻底——如果用户代码有恶意或有 bug，理论上可能影响到 n8n 本身。所以只适合本地开发/学习，正式环境请用外部模式。
{% endhint %}

### 外部模式（External mode）

在外部模式下，一个[启动器应用（launcher application）](https://github.com/n8n-io/task-runner-launcher) 会按需启动任务运行器并管理它们的生命周期。通常来说，这意味着在 n8n 旁边再添加一个运行着 [`n8nio/runners`](https://hub.docker.com/r/n8nio/runners) 镜像的边车容器（sidecar container），该镜像包含启动器、JS 任务运行器和 Python 任务运行器。这个边车容器与 n8n 实例相互独立。

![Task runner deployed as a side-car container](../../.gitbook/assets/task-runner-external-mode.png)

使用[队列模式（Queue mode）](scaling/enable-queue-mode.md)时，每个 worker 都需要有自己的任务运行器边车容器。

此外，如果 [`OFFLOAD_MANUAL_EXECUTIONS_TO_WORKERS=false`](basic-configuration/use-environment-variables/queue-mode.md#queue-mode-environment-variables)，那么你的主实例会运行手动执行（manual executions），因此它也需要自己的任务运行器边车容器。请注意，不推荐在生产环境中以「关闭任务卸载」的方式运行 n8n。

{% hint style="info" %}
**小白提示**：外部模式 = 任务运行器住在独立的「边车容器」里，和 n8n 完全隔离。你可以把它理解成「n8n 主程序和代码执行者是两栋楼，中间只通过一个受控的通道（任务代理）沟通」。多 worker 架构下，每个 worker 都要配一个自己的边车。
{% endhint %}

## 设置外部模式（Setting up external mode）

在外部模式下，你把 `n8nio/runners` 镜像作为边车容器运行在 n8n 旁边。下面是参考用的 docker compose 配置。请记住：`n8nio/runners` 镜像的版本必须与 `n8nio/n8n` 镜像的版本一致，并且 n8n 版本必须 >= 1.111.0。

```yaml
services:
  n8n:
    image: n8nio/n8n:1.111.0
    container_name: n8n-main
    environment:
      - N8N_RUNNERS_ENABLED=true
      - N8N_RUNNERS_MODE=external
      - N8N_RUNNERS_BROKER_LISTEN_ADDRESS=0.0.0.0
      - N8N_RUNNERS_AUTH_TOKEN=your-secret-here
      - N8N_NATIVE_PYTHON_RUNNER=true
    ports:
      - "5678:5678"
    volumes:
      - n8n_data:/home/node/.n8n
    # etc.

  task-runners:
    image: n8nio/runners:1.111.0
    container_name: n8n-runners
    environment:
      - N8N_RUNNERS_TASK_BROKER_URI=http://n8n-main:5679
      - N8N_RUNNERS_AUTH_TOKEN=your-secret-here
      # etc.
    depends_on:
      - n8n

volumes:
  n8n_data:
```

{% hint style="info" %}
**小白提示**：这个 compose 文件里有两个服务：`n8n`（主程序）和 `task-runners`（边车）。要点：① 两个镜像的版本号要一致（示例都是 `1.111.0`）；② `N8N_RUNNERS_AUTH_TOKEN` 是两边共享的「对接暗号」，两个服务里填同一个值；③ `N8N_RUNNERS_TASK_BROKER_URI` 告诉边车「去 n8n 容器的 5679 端口找任务代理」；④ `your-secret-here` 记得换成你自己的随机密钥。
{% endhint %}

配置分为三层：n8n 容器、runners 容器，以及 runners 容器内部的启动器（launcher）。

### 配置外部模式下的 n8n 容器（Configuring n8n container in external mode）

以下是可以设置在外部模式下运行的 n8n 容器上的主要环境变量：

{% hint style="info" %}
**`N8N_RUNNERS_ENABLED` 从 2.0 版本起已弃用（deprecated）**

从 2.0 版本开始，`N8N_RUNNERS_ENABLED` 已被弃用，你不再需要设置它。在 1.x 版本中它仍然受支持，且必须设为 `true` 才能启用任务运行器。
{% endhint %}

| 环境变量（Environment variables）                                  | 说明（Description）                                                                                                                                                                   |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `N8N_RUNNERS_ENABLED=true`                             | 启用任务运行器。从 2.0 版本起已弃用。在 1.x 版本中仍然受支持。                                                                                    |
| `N8N_RUNNERS_MODE=external`                            | 使用外部模式的任务运行器。                                                                                                                                            |
| `N8N_RUNNERS_AUTH_TOKEN=<random secure shared secret>` | 任务运行器用来连接代理的共享密钥（shared secret）。                                                                                                                    |
| `N8N_RUNNERS_BROKER_LISTEN_ADDRESS=0.0.0.0`            | 默认情况下，任务代理只监听 localhost。当使用多个容器时（例如使用 Docker Compose），它需要能够接受外部连接。 |

完整的环境变量列表请参见 [任务运行器环境变量（task runner environment variables）](basic-configuration/use-environment-variables/task-runners.md)。

### 配置外部模式下的 runners 容器（Configuring runners container in external mode）

以下是可以设置在外部模式下运行的 runners 容器上的主要环境变量：

| 环境变量（Environment variables）                                  | 说明（Description）                                                                                                                                                                                                                 |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `N8N_RUNNERS_AUTH_TOKEN=<random secure shared secret>` | 任务运行器用来连接代理的共享密钥。                                                                                                                                                            |
| `N8N_RUNNERS_TASK_BROKER_URI=localhost:5679`           | n8n 实例内任务代理服务器的地址。                                                                                                                                                              |
| `N8N_RUNNERS_AUTO_SHUTDOWN_TIMEOUT=15`                 | 在关闭任务运行器进程之前等待的空闲秒数。有新的任务要执行时，启动器会自动再次启动运行器。设为 `0` 可禁用自动关闭。 |

完整的环境变量列表请参见 [任务运行器环境变量（task runner environment variables）](basic-configuration/use-environment-variables/task-runners.md)。

### 配置外部模式下 runners 容器中的启动器（Configuring launcher in runners container in external mode）

启动器（launcher）会读取 runners 容器环境中的环境变量，并执行以下操作：

* 把环境变量从启动器自身环境传递给所有运行器（`allowed-env`，允许传递的环境变量）
* 在特定运行器上设置特定的环境变量（`env-overrides`，环境变量覆盖）

要传递和设置哪些环境变量，由 runners 镜像中自带的[启动器配置文件（launcher config file）](https://github.com/n8n-io/n8n/blob/master/docker/images/runners/n8n-task-runners.json) 定义。这个配置文件位于容器内的 `/etc/task-runners.json`。想了解更多关于启动器配置文件的信息，请参见 [配置文件文档（Config file documentation）](https://github.com/n8n-io/task-runner-launcher/blob/main/docs/setup.md#config-file)。

默认的启动器配置文件是「锁定」（locked down）的，但你可以编辑这个文件，例如为第一方或第三方模块添加白名单。要自定义启动器配置文件，挂载到这个路径：

```
path/to/n8n-task-runners.json:/etc/n8n-task-runners.json
```

{% hint style="info" %}
**小白提示**：启动器的工作：它决定「哪些环境变量能传给运行器」以及「每个运行器额外获得什么环境变量」。默认配置很严格（这符合安全原则），你需要给 Code 节点开放某些包时，就把自己的配置文件通过挂载（volume mount）覆盖容器里的默认配置。
{% endhint %}

## 添加额外的依赖（Adding extra dependencies）

### 1. 扩展 `n8nio/runners` 镜像（Extend the `n8nio/runners` image）

你可以扩展 `n8nio/runners` 镜像，为运行器添加额外的依赖。要做到这一点，你需要 `n8nio/runners:1.121.0` 或更高版本。

```dockerfile
FROM n8nio/runners:1.121.0
USER root
RUN cd /opt/runners/task-runner-javascript && pnpm add moment uuid
RUN cd /opt/runners/task-runner-python && uv pip install numpy pandas
COPY n8n-task-runners.json /etc/n8n-task-runners.json
USER runner
```

你还必须把任何第一方或第三方包加入白名单，供 Code 节点使用。方法是编辑配置文件 `n8n-task-runners.json`，把你扩展镜像中的包加进去。

```json
{
  "task-runners": [
    {
      "runner-type": "javascript",
      "env-overrides": {
        "NODE_FUNCTION_ALLOW_BUILTIN": "crypto",         // <-- allowlist Node.js builtin modules here
        "NODE_FUNCTION_ALLOW_EXTERNAL": "moment,uuid",   // <-- allowlist third-party JS packages here
      }
    },
    {
      "runner-type": "python",
      "env-overrides": {
        "PYTHONPATH": "/opt/runners/task-runner-python",
        "N8N_RUNNERS_STDLIB_ALLOW": "json",              // <-- allowlist Python standard library packages here
        "N8N_RUNNERS_EXTERNAL_ALLOW": "numpy,pandas"     // <-- allowlist third-party Python packages here
      }
    }
  ]
}
```

* `NODE_FUNCTION_ALLOW_BUILTIN`：允许的 Node.js 内置模块列表，用逗号分隔。
* `NODE_FUNCTION_ALLOW_EXTERNAL`：允许的 JS 第三方包列表，用逗号分隔。
* `N8N_RUNNERS_STDLIB_ALLOW`：允许的 Python 标准库包列表，用逗号分隔。
* `N8N_RUNNERS_EXTERNAL_ALLOW`：允许的 Python 第三方包列表，用逗号分隔。

{% hint style="info" %}
**小白提示**：为什么装完包还要「白名单」？因为安全考虑——Code 节点默认不能随便 import 任意包，只有白名单里的包才允许使用。所以流程是：① 在 Dockerfile 里把包装进镜像（`pnpm add` / `pip install`）；② 在 `n8n-task-runners.json` 的白名单变量里写上这些包名；③ 重新构建镜像。JSON 里 `//` 后面的注释是官方示例自带的说明，实际 JSON 标准不允许注释，但这里保留原样。
{% endhint %}

### 2. 构建你的自定义镜像（Build your custom image）

例如，从 n8n 仓库根目录执行：

```bash
docker buildx build \
  -f docker/images/runners/Dockerfile \
  -t n8nio/runners:custom \
  .
```

### 3. 运行镜像（Run the image）

例如：

```bash
docker run --rm -it \
  -e N8N_RUNNERS_AUTH_TOKEN=test \
  -e N8N_RUNNERS_LAUNCHER_LOG_LEVEL=debug \
  -e N8N_RUNNERS_TASK_BROKER_URI=http://host.docker.internal:5679 \
  -p 5680:5680 \
  n8nio/runners:custom
```

{% hint style="info" %}
**小白提示**：`docker buildx build -t n8nio/runners:custom .` 的意思是用 n8n 仓库里现成的 `Dockerfile` 构建一个你自己的自定义镜像，起名叫 `n8nio/runners:custom`。之后用 `docker run` 测试它时，`N8N_RUNNERS_TASK_BROKER_URI` 里的 `host.docker.internal` 是 Docker 提供的「宿主机」地址，用于让容器访问宿主机上运行的 n8n。
{% endhint %}
