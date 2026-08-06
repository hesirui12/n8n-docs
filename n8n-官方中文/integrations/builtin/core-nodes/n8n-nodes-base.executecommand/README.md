---
title: 执行命令（Execute Command）
contentType:
  - integration
  - reference
priority: high
nodeTitle: n8n-nodes-base.executecommand
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.executecommand/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executecommand
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executecommand
description: >-
  n8n（工作流自动化平台）中「执行命令」节点的文档。
  包含使用指南和示例链接。
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

# 执行命令（Execute Command）

> **大白话**：这个节点能让你在**运行 n8n 的那台电脑/容器**上直接执行系统命令（shell 命令），就像你在命令行里敲命令一样。比如：压缩文件、跑一个脚本、备份数据库、用 ffmpeg 处理视频等。**注意安全**：因为它能执行任意命令，相当于把"整台机器的钥匙"交给了工作流，所以从 n8n 2.0 开始默认是禁用状态，也**不能用在 n8n 云版**上。

「执行命令」节点会在运行 n8n 的主机上执行 shell 命令。

{% hint style="warning" %}
**安全注意事项**

在存在不可信用户的环境中，「执行命令」节点可能会带来显著的安全风险。因此，从 2.0 版本开始，该节点默认被[禁用](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/security/block-specific-nodes#exclude-nodes)。
{% endhint %}

> **小白提示**：想象一下——如果工作流可以执行任何命令，那一个被恶意篡改的工作流就等于直接控制了服务器。所以官方默认关掉它，只有管理员确认环境安全后才手动开启。

{% hint style="info" %}
**命令由哪个 shell 执行？**

此节点在宿主机的默认 shell 中执行命令。例如，Windows 上是 `cmd`，macOS 上是 `zsh`。

如果你用 Docker 运行 n8n，你的命令将在 n8n 容器内执行，而不是在 Docker 宿主机上。

如果你使用的是[队列模式（queue mode）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/scaling/enable-queue-mode)，在生产模式下，命令由执行任务的工作器（worker）运行。手动执行时，命令在主实例上运行——除非你把 `OFFLOAD_MANUAL_EXECUTIONS_TO_WORKERS` 设置为 `true`。
{% endhint %}

{% hint style="info" %}
**云版不可用**

此节点在 n8n Cloud 上不可用。
{% endhint %}

## 节点参数（Node parameters）

使用以下参数配置节点。

### 只执行一次（Execute Once）

选择是要让节点只执行一次（打开，turned on），还是为它接收到的每一个数据项各执行一次（关闭，turned off）。

> **小白提示**：如果前面的节点输出了 100 行数据，关闭时命令会被执行 100 次；打开时只执行 1 次（可以引用第一项数据）。一般来说处理"整批文件"时选"只执行一次"更高效。

### 命令（Command）

输入要在宿主机上执行的命令。运行[多条命令](#运行多条命令)和 [cURL 命令](#运行-curl-命令)的示例请参考下文。

#### 运行多条命令（Run multiple commands）

在同一个「执行命令」节点中运行多条命令，有两种方法：

*   每条命令各占一行，用 `&&` 分隔。例如，你可以用 `&&` 把切换目录（cd）命令和列出文件（ls）命令组合在一起。

    ```bash
    cd bin && ls
    ```
*   每条命令各占一行（换行分隔）。例如，你可以在切换目录（cd）命令之后新起一行写列出文件（ls）命令。

    ```bash
    cd bin
    ls
    ```

> **小白提示**：两种写法的区别：`cd bin && ls` 是"第一条成功后才执行第二条"（就像流水线，上一步失败就停）；换行写法是"不管上一条成不成功，都按顺序执行"。

#### 运行 cURL 命令（Run cURL command）

你也可以使用 [HTTP 请求（HTTP Request）](../n8n-nodes-base.httprequest/README.md) 节点来发起 cURL 请求。

如果你想在「执行命令」节点中运行 curl 命令，你需要基于现有的 n8n 镜像构建一个 Docker 镜像。默认的 n8n Docker 镜像使用 Alpine Linux，你需要安装 curl 软件包。

1. 创建一个名为 `Dockerfile` 的文件。
2.  把下面的代码片段添加到 Dockerfile 中。

    ```shell
    FROM docker.n8n.io/n8nio/n8n
    USER root
    RUN apk --update add curl
    USER node
    ```
3.  在同一个文件夹中，执行下面的命令来构建 Docker 镜像。

    ```shell
    docker build -t n8n-curl
    ```
4. 替换你之前使用的 Docker 镜像。例如，把 `docker.n8n.io/n8nio/n8n` 替换成 `n8n-curl`。
5. 运行新建的 Docker 镜像。现在你就可以使用「执行命令」节点执行 curl 了。

> **小白提示**：为什么这么麻烦？因为 n8n 的官方镜像为了精简体积，没有预装 curl。如果你想在容器里用 curl（或 ssh 等工具），就要自己做一个"加了料"的镜像。不熟悉 Docker 的话，直接用「HTTP 请求」节点替代 curl 更省事。

## 模板和示例（Templates and examples）

[浏览 n8n-nodes-base.executecommand 集成模板](https://n8n.io/integrations/execute-command) 或 [搜索所有模板](https://n8n.io/workflows/)

## 常见问题（Common issues）

关于常见问题或疑问以及建议的解决方案，请参考 [常见问题（Common Issues）](common-issues.md)。
