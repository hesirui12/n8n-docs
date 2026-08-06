---
title: n8n v2.0 breaking changes
description: Breaking changes coming in version 2.0
contentType: reference
nodeTitle: v2.0 breaking changes
originalFilePath: 2-0-breaking-changes.md
originalUrl: 'https://docs.n8n.io/2-0-breaking-changes'
url: 'https://docs.n8n.io/release-notes/v20-breaking-changes'
layout:
  description:
    visible: false
---

# n8n v2.0 破坏性变更

{% hint style="info" %}
**大白话**：n8n 2.0 已经发布，这次升级带来了一些"不兼容"的变化——升级后，老工作流可能表现不一样，有些老功能被删了，有些安全设置默认变严格了。本文就是"变更清单 + 应对手册"：每一条都告诉你会发生什么、以及你该怎么改。升级前务必对照检查一遍。
{% endhint %}

n8n v2.0 已发布，随之而来的一些重要变更。本文重点列出了破坏性变更，以及你为过渡到 v2.0 需要采取的行动。这些更新提升了安全性、简化了配置，并移除了旧功能。

n8n 2.0 的发布延续了 n8n 致力于提供安全、可靠、可用于生产环境的自动化平台的承诺。这个大版本包含重要的安全增强和对废弃功能的清理。

## 行为变更（Behavior changes）

### 子工作流从等待状态恢复时，返回预期的子工作流数据（等待 webhook、表单、人工介入 HITL 等）

之前，当一个执行（父工作流）调用一个包含会让子执行进入等待状态节点的子执行（子工作流），并且父执行被设置为等待子执行完成时，父执行会收到错误的结果。

子执行进入等待状态的情况例如：子执行包含一个超时时间超过 65 秒的 Wait（等待）节点、一次 webhook 调用、一次表单提交，或一个类似 Slack 节点的人工介入（human-in-the-loop）节点。

父工作流（Parent-Workflow）：
![Parent-Workflow](.gitbook/assets/parentworkflow1.png)

子工作流（Sub-Workflow）：
![Sub-Workflow](.gitbook/assets/subworkflow.png)

v1：父执行会把子执行的输入复制作为自己的输出：
![v1: Parent execution won't receive the result of the child execution](.gitbook/assets/before1.png)

v2：父执行会收到子执行的结果：
![v2: Parent execution will receive the result of the child execution](.gitbook/assets/after1.png)

这使得你可以在子工作流中使用人工介入（human-in-the-loop）节点，并在父工作流中使用其结果（例如批准或拒绝某个操作）。

**迁移路径：** 检查所有调用子工作流并期望收到子工作流输入的流程。更新这些流程以适配新行为：现在父工作流收到的是子工作流末尾节点输出的结果。

### Start（开始）节点已移除

Start 节点不再受支持。这个节点是最初开始工作流的方式，但现在更专门的触发节点已取代它。

**迁移路径：** 根据你的工作流使用方式替换 Start 节点：

- **手动执行：** 用 [Manual Trigger](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.manualworkflowtrigger)（手动触发）节点替换 Start 节点。
- **子工作流：** 如果另一个工作流把该工作流当作子工作流调用，用 [Execute Workflow Trigger](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger)（执行工作流触发）节点替换 Start 节点，并激活该工作流。
- **已禁用的 Start 节点：** 如果 Start 节点处于禁用状态，直接从工作流中删除它。

### 保存和发布工作流

新的工作流发布系统取代了之前"激活/停用"（active/inactive）的开关。这意味着旧的 "Activate/Deactivate（激活/停用）" 开关变成了新的 "Publish/Unpublish（发布/取消发布）" 按钮。这一变更让你能更好地控制工作流变更何时上线，降低把进行中的改动意外部署到生产环境的风险。更多信息请参见：[Saving and publishing workflows（保存和发布工作流）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/understand-workflows/save-and-publish-workflows)。

### 已退役服务的节点被移除

以下节点已被移除，因为它们所连接的外部服务已不再可用：

- Spontit 节点
- crowd.dev 节点
- Kitemaker 节点
- Automizy 节点

**迁移路径：** 如果你的工作流使用了这些节点中的任何一个，请更新或删除这些工作流，以免出错。

## 安全（Security）

### 默认阻止 Code（代码）节点访问环境变量

为了提高安全性，n8n 默认将阻止 Code 节点访问环境变量。`N8N_BLOCK_ENV_ACCESS_IN_NODE` 的默认值现在为 `true`。

**迁移路径：** 如果你的工作流需要在 Code 节点中访问环境变量，请在环境配置中设置 `N8N_BLOCK_ENV_ACCESS_IN_NODE=false`。对于敏感数据，请使用凭证或其他安全方法，而不是环境变量。

### 强制配置文件权限

为了提高安全性，n8n 将要求配置文件使用严格的文件权限。默认情况下，配置文件必须使用 `0600` 权限，这意味着只有文件所有者才能读写它们。这种方式类似于 SSH 保护私钥的做法。

**迁移路径：** 要在 v2.0 之前测试此行为，请设置 `N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true`。如果你的环境不支持文件权限（例如在 Windows 上），请设置 `N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=false` 来禁用此要求。

### 默认启用任务运行器（task runners）

为了提高安全性和隔离性，n8n 将默认启用[任务运行器](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/set-up-task-runners)。所有 Code 节点执行都将在任务运行器上运行。

**迁移路径：** 升级到 v2.0 之前，设置 `N8N_RUNNERS_ENABLED=true` 来测试此行为。确保你的基础设施满足运行任务运行器的要求。为了更高的安全性，可以考虑使用[外部模式（external mode）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/set-up-task-runners#external-mode)。

### `$evaluateExpression` 在 Code 节点中不再可用

由于 Code 节点执行现在默认以安全模式（secure mode）在任务运行器上运行，`$evaluateExpression()` 便捷方法在 Code 节点内部不再可用。安全模式禁用了把字符串当作代码求值的能力（这正是表达式所依赖的机制），因此 Code 节点中的 `$evaluateExpression()` 调用会返回 `null` 或报错。常规节点字段中的表达式（例如 Edit Fields (Set) 节点）不受影响。

**迁移路径：** 按优先级顺序，把表达式求值移出 Code 节点：

- 直接用 JavaScript 编写逻辑，而不是调用 `$evaluateExpression()`。
- 在 Code 节点之前用 Edit Fields (Set) 节点求值表达式，然后从传入的条目中读取结果。
- 如果没有其他办法，设置 `N8N_RUNNERS_INSECURE_MODE=true` 来重新启用被禁用的 JavaScript 功能。这会关闭任务运行器的安全措施，不建议在生产环境中使用。

Code 节点中的 `$evaluateExpression()` 可能会在未来的版本中被完全移除，所以请把 `N8N_RUNNERS_INSECURE_MODE=true` 当作临时应急方案，而不是长期解决方案。

### 从 `n8nio/n8n` Docker 镜像中移除任务运行器

从 v2.0 开始，主 `n8nio/n8n` Docker 镜像将不再包含用于外部模式的任务运行器。你必须使用单独的 `n8nio/runners` Docker 镜像在外部模式下运行任务运行器。

**迁移路径：** 如果你在 Docker 中使用外部模式运行任务运行器，请更新你的配置，改用 `n8nio/runners` 镜像而不是 `n8nio/n8n`。

### 移除基于 Pyodide 的 Python Code 节点和工具

n8n 将移除基于 Pyodide 的 Python Code 节点和工具，并用基于[任务运行器](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/set-up-task-runners)的实现替代，该实现使用原生 Python，以获得更好的安全性和性能。从 v2.0 开始，你只能配合[外部模式](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/set-up-task-runners#external-mode)下的任务运行器和原生 Python 工具来使用 Python Code 节点。

原生 Python Code 节点不支持内置变量（如 `_input`）或点访问表示法（dot access notation），这些在基于 Pyodide 的版本中是有的。详情请参见 [Code 节点文档](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.code#python-native)。

原生 Python 工具支持用 `_query` 获取 AI Agent 调用工具时传入的输入字符串。

**迁移路径：** 要继续在 Code 节点中使用 Python，请设置外部模式下的任务运行器，并检查你现有的 Python Code 节点和工具的兼容性。

### 默认禁用 ExecuteCommand 和 LocalFileTrigger 节点

n8n 默认将禁用 `ExecuteCommand`（执行命令）和 `LocalFileTrigger`（本地文件触发）节点，因为它们存在安全风险。这些节点允许用户运行任意命令并访问文件系统。

**迁移路径：** 如果你需要使用这些节点，请更新 n8n 配置中的 `NODES_EXCLUDE` 环境变量，把它们从禁用节点列表中移除。例如，设置 `NODES_EXCLUDE="[]"` 可启用所有节点，或者只移除你需要的特定节点。

### OAuth 回调 URL 默认要求身份验证

n8n 默认将要求对 OAuth 回调端点进行身份验证。`N8N_SKIP_AUTH_ON_OAUTH_CALLBACK` 的默认值将从 `true`（不需要身份验证）变为 `false`（需要身份验证）。

**迁移路径：** 升级到 v2.0 之前，设置 `N8N_SKIP_AUTH_ON_OAUTH_CALLBACK=false` 并测试你的 OAuth 集成，确保它们在启用身份验证的情况下正常工作。

### 为 N8N_RESTRICT_FILE_ACCESS_TO 设置默认值

n8n 将为 `N8N_RESTRICT_FILE_ACCESS_TO` 设置默认值，以控制文件操作可以发生的位置。这会影响 `ReadWriteFile`（读写文件）和 `ReadBinaryFiles`（读取二进制文件）节点。默认情况下，这些节点只能访问 `~/.n8n-files` 目录中的文件。

**迁移路径：** 检查你使用文件节点的工作流，确保它们只访问允许目录中的文件。如果你需要允许访问其他目录，请将 `N8N_RESTRICT_FILE_ACCESS_TO` 环境变量设置为你想要的路径。

### 将 N8N_GIT_NODE_DISABLE_BARE_REPOS 的默认值改为 true

出于安全原因，Git 节点默认将阻止裸仓库（bare repositories）。`N8N_GIT_NODE_DISABLE_BARE_REPOS` 的默认值设置为 `true`，这意味着除非你更改此设置，否则裸仓库会被禁用。

**迁移路径：** 如果你的工作流需要使用裸仓库，请在环境配置中设置 `N8N_GIT_NODE_DISABLE_BARE_REPOS=false` 来启用它们。

## 数据（Data）

### 放弃 MySQL/MariaDB 支持

n8n 将不再支持 MySQL 和 MariaDB 作为存储后端。这一支持在 v1.0 中已被标记为弃用。为了获得最佳兼容性和长期支持，请使用 PostgreSQL。MySQL 节点将继续像以前一样受支持。

**迁移路径：** 升级到 v2.0 之前，使用数据库迁移工具把数据从 MySQL 或 MariaDB 迁移到 PostgreSQL 或 SQLite。

### 移除 SQLite 旧版驱动

由于可靠性问题，n8n 将移除旧版 SQLite 驱动。连接池驱动（pooling driver）将成为默认且唯一的 SQLite 驱动。连接池驱动使用 WAL 模式、一个写入连接和一组读取连接。我们的基准测试显示，它的速度最高可提升 10 倍。

**迁移路径：** `sqlite-pooled` 驱动将自动成为默认驱动。你现在就可以通过把 `DB_SQLITE_POOL_SIZE` 设置为大于 `0` 的值来启用连接池。默认池大小将设置为 `2`。

### 移除内存二进制数据模式

n8n 将移除 `N8N_DEFAULT_BINARY_DATA_MODE` 的 `default` 模式（该模式在执行期间把二进制数据保存在内存中）。为了获得更好的性能和稳定性，从 v2 开始将提供以下选项：

- `filesystem`：二进制数据存储在文件系统中。常规模式的默认选项。
- `database`：二进制数据存储在数据库中。队列模式（queue mode）的默认选项。
- `s3`：二进制数据存储在兼容 S3 的存储中。

`N8N_AVAILABLE_BINARY_DATA_MODES` 设置也将被移除，因此现在只由 `N8N_DEFAULT_BINARY_DATA_MODE` 决定模式。

**迁移路径：** 系统会根据配置自动使用文件系统或数据库模式。确保你的 n8n 实例有足够的磁盘空间来存储二进制数据。详情请参见[二进制数据配置](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/binary-data)。

## 配置与环境（Configuration & Environment）

### 升级 dotenv

n8n 使用 `dotenv` 库从 `.env` 文件加载环境配置。该库将从 8.6.0 版本升级到最新版本，这可能会改变 `.env` 文件的解析方式。关键的破坏性变更包括：

* 反引号支持（[#615](https://github.com/motdotla/dotenv/pull/615)）：如果你的值中包含反引号，请用单引号或双引号把它们包起来。
* 多行支持：你现在可以使用多行值。
* `#` 表示注释开始：以 # 开头的行会被当作注释处理。

**迁移路径：** 查看 [dotenv 更新日志](https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md)，并更新你的 `.env` 文件，确保与新版本兼容。

### 移除 `n8n --tunnel` 选项

`n8n --tunnel` 命令行选项将在 v2.0 中移除。

**迁移路径：** 如果你目前使用 `--tunnel` 选项进行开发或测试，请改用其他隧道方案，例如 ngrok、localtunnel 或 Cloudflare Tunnel。更新你的工作流和文档以反映这一变化。

### 移除 QUEUE_WORKER_MAX_STALLED_COUNT

`QUEUE_WORKER_MAX_STALLED_COUNT` 环境变量以及 Bull 对停滞任务（stalled jobs）的重试机制将被移除，因为它们经常造成困惑，而且运行并不可靠。

**迁移路径：** 从你的配置中删除这个环境变量。升级后，n8n 将不再自动重试停滞的任务。如果你需要处理停滞任务，请考虑实现自己的重试逻辑或监控。

### 移除 N8N_CONFIG_FILES

`N8N_CONFIG_FILES` 环境变量已被移除。

**迁移路径：** 从你的配置中删除这个环境变量。把配置迁移到环境变量、`.env` 文件或基于 [`_FILE`](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration#keeping-sensitive-data-in-separate-files) 的配置中。

## CLI 与工作流（CLI & Workflow）

### 替换 CLI 命令 update:workflow

`update:workflow` CLI 命令将被弃用，由两个新命令取代，以提供类似的功能和更清晰的语义：

- `publish:workflow`，参数为 `id` 和 `versionId`（可选）
    - `--all` 参数将被移除，以防止在生产环境中意外发布工作流
- `unpublish:workflow`，参数为 `id` 和 `all`

**迁移路径：** 使用新的 `publish:workflow` 命令按 ID 逐个发布工作流，可选指定版本。取消发布请使用新的 `unpublish:workflow` 命令。这样可以更清晰、更可控地管理工作流的发布状态。

## 外部钩子（External Hooks）

### 弃用前端工作流钩子

钩子 `workflow.activeChange` 和 `workflow.activeChangeCurrent` 将被弃用，由新的钩子 `workflow.published` 取代。当工作流的任何版本被发布时，新钩子都会被触发。

**迁移路径：** 更新你的代码，使用新的 `workflow.published` 钩子，而不是 `workflow.activeChange` 和 `workflow.activeChangeCurrent`。这个钩子提供更一致的行为，每当工作流版本被发布时都会触发。

## 发布渠道（Release channels）

n8n 已把发布渠道从 `latest` 和 `next` 分别重命名为 `stable` 和 `beta`。

`stable` 标签表示最新的稳定版本，`beta` 标签表示最新的实验性版本。这些标签在 npm 和 Docker Hub 上都可用。目前，n8n 仍会继续用 `latest` 和 `next` 标记发布版本。这些标签将在未来的大版本中移除。

**建议：** 把 n8n 版本固定到具体的版本号，例如 `2.0.0`。

## 报告问题（Reporting issues）

如果你在升级到 n8n 2.0 的过程中遇到任何问题，请访问社区[论坛](https://community.n8n.io/)寻求帮助和支持。
