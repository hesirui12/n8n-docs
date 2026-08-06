---
title: n8n v1.0 migration guide
description: What's new in version 1
contentType: reference
nodeTitle: v1.0 migration guide
originalFilePath: 1-0-migration-checklist.md
originalUrl: 'https://docs.n8n.io/1-0-migration-checklist'
url: 'https://docs.n8n.io/release-notes/v10-migration-guide'
layout:
  description:
    visible: false
---

# n8n v1.0 迁移指南

{% hint style="info" %}
**大白话**：n8n 1.0 是一个"里程碑版本"——从这一版开始，n8n 正式宣告自己可以扛住生产环境的大负载了。升级前请先读这一页：它告诉你 1.0 新增了什么（比如 Code 节点支持 Python、新的执行顺序）、什么被弃用了（MySQL 后端等）、以及哪些改动会"不兼容"（比如 Docker 权限变化、强制 owner 账号等）。
{% endhint %}

本文档总结了在更新到 n8n 1.0 版本之前你应该了解的内容。

n8n 1.0 的发布是 n8n 旅程中的一个里程碑，标志着 n8n 可以为要求严苛的生产环境所用。版本 1.0 代表了 n8n 过去四年为使 n8n 成为最容易使用、最强大、最多功能的自动化工具所付出的辛勤工作。n8n 1.0 现在已准备好用于生产环境。

## 新功能（New features）

### Code 节点支持 Python

虽然 JavaScript 仍然是默认语言，但你现在也可以选择 Python 作为 [Code 节点](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/code-in-n8n/using-the-code-node)的选项，甚至可以使用[许多 Python 模块](https://pyodide.org/en/stable/usage/packages-in-pyodide.html#packages-in-pyodide)。请注意，在 v1.0 之前添加到工作流中的 Code 节点无法使用 Python。

[PR #4295](https://github.com/n8n-io/n8n/pull/4295), [PR #6209](https://github.com/n8n-io/n8n/pull/6209)

### 执行顺序（Execution order）

n8n 1.0 为多分支工作流引入了新的执行顺序：

在多分支工作流中，n8n 需要确定各分支上节点的执行顺序。以前，n8n 先执行每个分支的第一个节点，再执行每个分支的第二个节点，依此类推（广度优先）。新的执行顺序确保每个分支完整执行完毕后，才开始下一个分支（深度优先）。分支按照在画布上的位置从上到下执行。如果两个分支在同一高度，最左边的先执行。

以前，只要多输入节点在第一个输入上收到了数据，n8n 就会执行它。连接到多输入节点第二个输入的节点，无论是否收到数据都会自动执行。n8n 1.0 引入的新执行顺序简化了这一行为：节点现在只在收到数据时才执行，多输入节点需要至少在一个输入上收到数据才会执行。

你现有的工作流将继续使用旧执行顺序，而新工作流将使用 v1 执行顺序。你可以在[工作流设置](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/manage-workflows/configure-workflow-settings)中为每个工作流配置执行顺序。

[PR #4238](https://github.com/n8n-io/n8n/pull/4238), [PR #6246](https://github.com/n8n-io/n8n/pull/6246), [PR #6507](https://github.com/n8n-io/n8n/pull/6507)

## 弃用功能（Deprecations）

### MySQL 和 MariaDB

n8n 已弃用对 MySQL 和 MariaDB 作为 n8n 存储后端的支持。只有少数用户使用这些数据库系统，但它们需要持续的开发和维护投入。n8n 建议迁移到 PostgreSQL，以获得更好的兼容性和长期支持。

[PR #6189](https://github.com/n8n-io/n8n/pull/6189)

### EXECUTIONS_PROCESS 和 "own" 模式

以前，你可以使用 `EXECUTIONS_PROCESS` 环境变量指定执行应该在 `main` 进程中运行还是在它们 `own`（自己的）进程中运行。这个选项和 `own` 模式现在已被弃用，并将在未来的 n8n 版本中移除。这是因为它们增加了代码复杂性，而带来的好处微乎其微。从 n8n 1.0 开始，`main` 将成为新的默认值。

请注意，`main` 模式下的执行启动速度比 `own` 模式快得多。但是，如果一个工作流消耗的内存超过可用内存，它可能会使整个 n8n 应用崩溃，而不仅仅是工作线程崩溃。为了缓解这种情况，请确保分配足够的系统资源，或配置[队列模式](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/scaling/enable-queue-mode)把执行分发到多个 worker 中。

[PR #6196](https://github.com/n8n-io/n8n/pull/6196)

## 破坏性变更（Breaking changes）

### Docker

#### 权限变更（Permissions change）

使用基于 Docker 的部署时，n8n 进程现在由用户 `node` 而不是 `root` 运行。这一变更提高了安全性。

如果启动 n8n 时在 n8n 容器日志中出现权限错误，你可能需要在 Docker 主机上执行以下命令来更新权限：

```bash
docker run --rm -it --user root -v ~/.n8n:/home/node/.n8n --entrypoint chown n8nio/base:16 -R node:node /home/node/.n8n
```

#### 镜像移除（Image removal）

我们移除了 Debian 和 RHEL 镜像。如果你一直在使用这些镜像，需要更换所使用的镜像。除非你基于这些镜像制作了自定义镜像，否则这不会导致任何错误。

#### 入口点变更（Entrypoint change）

容器的入口点已更改，你不再需要指定 n8n 命令。如果你以前运行的是 `n8n worker --concurrency=5`，现在应该是 `worker --concurrency=5`

[PR #6365](https://github.com/n8n-io/n8n/pull/6365)

### 表达式错误导致工作流失败

由于表达式中的语法或运行时错误（例如引用不存在的节点），工作流执行可能会失败。虽然表达式已经会在前端抛出错误，但这一变更确保 n8n 在后端也会抛出错误（以前后端会静默忽略）。为了收到失败工作流的通知，n8n 建议在工作流设置中设置一个"错误工作流（error workflow）"。

[PR #6352](https://github.com/n8n-io/n8n/pull/6352)

### 强制要求 owner（所有者）账号

这一变更使[用户管理](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access)成为强制要求，并移除了对其他身份验证方法（如 BasicAuth 和外部 JWT）的支持。请注意，[n8n.cloud](https://n8n.cloud/) 或自定义套餐上允许的用户数量仍取决于你的订阅。

[PR #6362](https://github.com/n8n-io/n8n/pull/6362)

### 安装自定义节点的目录

n8n 将不再从全局 `node_modules` 目录加载自定义节点。相反，你必须把它们安装（或链接）到 `~/.n8n/custom`（或由 `N8N_CUSTOM_EXTENSIONS` 定义的目录）。作为 npm 包的自定义节点将位于 `~/.n8n/nodes`。
如果你有使用 `npm link` 链接到全局 `node_modules` 目录的自定义节点，你需要重新链接它们，改为链接到 `~/.n8n/nodes`。

[PR #6396](https://github.com/n8n-io/n8n/pull/6396)

### WebSockets

`N8N_PUSH_BACKEND` 环境变量可用于配置向用户界面推送更新的两种可用方法之一：`sse` 和 `websocket`。从 n8n 1.0 开始，`websocket` 是默认方法。

[PR #6196](https://github.com/n8n-io/n8n/pull/6196)

### 日期转换函数（Date transformation functions）

n8n 提供各种对日期进行操作的转换函数。这些函数可能返回 JavaScript `Date` 或 Luxon `DateTime` 对象。在新行为下，返回类型始终与输入匹配。如果你对 `Date` 调用日期转换函数，它会返回 `Date`。同样，如果你对 `DateTime` 对象调用，它会返回 `DateTime` 对象。

要识别可能受此变更影响的工作流和节点，你可以使用这个[实用工作流](https://n8n.io/workflows/1929-v1-helper-find-params-with-affected-expressions/)。

有关日期转换函数的更多信息，请参阅[官方文档](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/transform-data/expression-reference)。

[PR #6435](https://github.com/n8n-io/n8n/pull/6435)

### 执行数据保留（Execution data retention）

从 n8n 1.0 开始，默认将保存所有成功、失败和手动的工作流执行。这些设置可以在"工作流设置（Workflow Settings）"中针对每个工作流修改，也可以使用相应的环境变量全局修改。此外，`EXECUTIONS_DATA_PRUNE` 设置将默认启用，`EXECUTIONS_DATA_PRUNE_MAX_COUNT` 设置为 10,000。这些默认设置旨在防止使用 SQLite 时出现性能下降。请务必根据你的个人需求和系统容量进行配置。

[PR #6577](https://github.com/n8n-io/n8n/pull/6577)

### 移除 N8N_USE_DEPRECATED_REQUEST_LIB

旧的 `request` 库已被弃用一段时间了。从 n8n 1.0 开始，通过设置 `N8N_USE_DEPRECATED_REQUEST_LIB` 环境变量在 HTTP Request 节点中回退到它的能力已被完全移除。HTTP Request 节点现在将始终使用新的 `HttpRequest` 接口。

如果你构建自定义节点，请参阅 [HTTP request helpers（HTTP 请求辅助函数）](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/create-nodes/build-your-node/reference/http-request-helpers)了解如何迁移到新接口的更多信息。

[PR #6413](https://github.com/n8n-io/n8n/pull/6413)

### 移除 WEBHOOK_TUNNEL_URL

从 0.227.0 版本开始，n8n 已将 `WEBHOOK_TUNNEL_URL` 配置选项重命名为 `WEBHOOK_URL`。在 n8n 1.0 中，`WEBHOOK_TUNNEL_URL` 已被移除。请更新你的配置以使用新名称。有关此配置选项的更多信息，请参阅[文档](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/configuration-examples/configure-webhook-urls-with-reverse-proxy)。

[PR #1408](https://github.com/n8n-io/n8n/pull/1408)

### 移除 Node 16 支持

n8n 现在要求 Node 18.17.0 或以上版本。

## 更新到 n8n 1.0

1. 创建 n8n 的完整备份。
2. n8n 建议在更新到 n8n 1.x 之前，先更新到最新的 n8n 0.x 版本。这样可以让你把潜在问题精确定位到正确的版本。确认 n8n 0.x 启动无问题后，再进行下一步。
3. 仔细阅读上面的[弃用功能](#deprecations)和[破坏性变更](#breaking-changes)部分，评估它们对你的环境的影响。
4. 更新到 n8n 1.0：
	* 在 beta 期间（2023 年 7 月 24 日之前）：如果使用 Docker，请拉取 `next` Docker 镜像。
	* 2023 年 7 月 24 日之后：如果使用 Docker，请拉取 `latest` Docker 镜像。
5. 如果遇到任何问题，请重新部署之前的 n8n 版本并恢复备份。

## 报告问题（Reporting issues）

如果你在更新到 n8n 1.0 的过程中遇到任何问题，请到社区[论坛](https://community.n8n.io/)寻求帮助。

## 感谢（Thank you）

我们要借此机会向所有用户表示衷心的感谢，感谢你们一直以来的支持和反馈。你们的贡献对我们帮助巨大，让 n8n 成为最好的自动化工具。我们非常期待在 1.0 及以后版本的发布过程中继续与你们合作。感谢你们成为我们旅程的一部分！
