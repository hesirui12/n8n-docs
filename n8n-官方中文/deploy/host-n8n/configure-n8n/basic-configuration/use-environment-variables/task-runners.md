---
title: 任务执行器（Task runner）环境变量
description: 用于配置自托管 n8n 实例任务执行器的环境变量。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 任务执行器（Task runners）
originalFilePath: hosting/configuration/environment-variables/task-runners.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/task-runners'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/task-runners
layout:
  description:
    visible: false
---

# 任务执行器（Task runner）环境变量

{% hint style="info" %}
**大白话**：任务执行器（task runner）是专门用来跑 Code 节点代码的独立进程，把代码运行环境和主 n8n 隔离开，更安全、不拖垮主进程。这一页的变量控制执行器怎么启动（内置/外部）、能同时跑多少任务、任务超时多久、心跳间隔、认证令牌，以及 Code 节点里能导入哪些模块（Python/JS 分别有独立的名单）。
{% endhint %}

{% hint style="info" %}
**基于文件的配置（File-based configuration）**

与主 n8n 镜像不同，任务执行器镜像中**不能**使用基于文件的配置（file-based configuration）来存放机密（secrets）。这意味着带 `_FILE` 后缀的变量不会被识别。
{% endhint %}

[任务执行器（Task runners）](../../set-up-task-runners.md)用于执行由 [Code 节点（Code node）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.code)定义的代码。

## n8n 实例环境变量（n8n instance environment variables）

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_RUNNERS_ENABLED` (**已弃用 deprecated**) | Boolean | `false` | 任务执行器是否启用。**自 v2.0 起已弃用。** |
| `N8N_RUNNERS_MODE` | Enum string: `internal`, `external` | `internal` | 如何启动和运行任务执行器。`internal` 表示 n8n 会以子进程的方式启动一个任务执行器；`external` 表示由外部编排器（orchestrator）来启动任务执行器。 |
| `N8N_RUNNERS_AUTH_TOKEN` | String | 随机字符串 (Random string) | 任务执行器用来向 n8n 认证的共享密钥。使用 `external` 模式时必须设置。 |
| `N8N_RUNNERS_BROKER_PORT` | Number | `5679` | 任务代理（task broker）监听任务执行器连接的端口。 |
| `N8N_RUNNERS_BROKER_LISTEN_ADDRESS` | String | `127.0.0.1` | 任务代理监听的地址。 |
| `N8N_RUNNERS_MAX_PAYLOAD` | Number | `1 073 741 824` | 任务代理和任务执行器之间通信的最大负载（payload）大小（字节）。 |
| `N8N_RUNNERS_MAX_OLD_SPACE_SIZE` | String |  | 任务执行器使用的 `--max-old-space-size` 选项（MB）。默认情况下，Node.js 会根据可用内存自动设置它。 |
| `N8N_RUNNERS_MAX_CONCURRENCY` | Number | `5` | 一个任务执行器一次可以并发执行的任务数。 |
| `N8N_RUNNERS_TASK_TIMEOUT` | Number | `300` | 一个任务最多可以运行多长时间（秒），超过后执行器会停止该任务并重启。这个值必须大于 0。 |
| `N8N_RUNNERS_HEARTBEAT_INTERVAL` | Number | `30` | 执行器向代理发送心跳的间隔（秒）。如果执行器没有及时发送心跳，任务会停止，执行器会重启。这个值必须大于 0。 |
| `N8N_RUNNERS_INSECURE_MODE` | Boolean | `false` | 是否禁用任务执行器中的所有安全措施，以便兼容依赖不安全 JS 特性的模块。**不鼓励在生产环境中使用。** |
| `N8N_RUNNERS_TASK_REQUEST_TIMEOUT` | Number | `60` | 一个任务请求在超时之前可以等待执行器就绪多长时间（秒）。这可以防止在没有可用执行器时工作流无限挂起。必须大于 0。 |

## 任务执行器启动器（launcher）环境变量（Task runner launcher environment variables）

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_RUNNERS_LAUNCHER_LOG_LEVEL` | Enum string: `debug`, `info`, `warn`, `error` | `info` | 显示哪些日志消息。 |
| `N8N_RUNNERS_AUTH_TOKEN` | String | - | 用于向 n8n 认证的共享密钥。 |
| `N8N_RUNNERS_AUTO_SHUTDOWN_TIMEOUT` | Number | `15` | 关闭一个空闲执行器之前等待的秒数。 |
| `N8N_RUNNERS_TASK_BROKER_URI` | String | `http://127.0.0.1:5679` | 任务代理服务器（即 n8n 实例）的 URI。 |
| `N8N_RUNNERS_LAUNCHER_HEALTH_CHECK_PORT` | Number | `5680` | 启动器健康检查服务器的端口。 |
| `N8N_RUNNERS_MAX_PAYLOAD` | Number | `1 073 741 824` | 任务代理和任务执行器之间通信的最大负载（payload）大小（字节）。 |
| `N8N_RUNNERS_MAX_CONCURRENCY` | Number | `5` | 一个任务执行器一次可以并发执行的任务数。 |

## 任务执行器环境变量（所有语言）（Task runner environment variables (all languages)）

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_RUNNERS_GRANT_TOKEN` | String | 随机字符串 (Random string) | 执行器用来向任务代理认证的令牌。它由启动器自动提供。 |
| `N8N_RUNNERS_AUTO_SHUTDOWN_TIMEOUT` | Number | `15` | 关闭一个空闲执行器之前等待的秒数。 |
| `N8N_RUNNERS_TASK_BROKER_URI` | String | `http://127.0.0.1:5679` | 任务代理服务器（即 n8n 实例）的 URI。 |
| `N8N_RUNNERS_LAUNCHER_HEALTH_CHECK_PORT` | Number | `5680` | 启动器健康检查服务器的端口。 |
| `N8N_RUNNERS_MAX_PAYLOAD` | Number | `1 073 741 824` | 任务代理和任务执行器之间通信的最大负载（payload）大小（字节）。 |
| `N8N_RUNNERS_MAX_CONCURRENCY` | Number | `5` | 一个任务执行器一次可以并发执行的任务数。 |

## 任务执行器环境变量（JavaScript）（Task runner environment variables (JavaScript)）

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `NODE_FUNCTION_ALLOW_BUILTIN` | String | - | 允许用户在 Code 节点中导入特定的内置模块。使用 `*` 允许全部。默认情况下，n8n 禁用模块导入。在外部（external）模式下，在[执行器配置文件（runners config file）](../../set-up-task-runners.md#configuring-launcher-in-runners-container-in-external-mode)（`/etc/n8n-task-runners.json`）中把它作为 `env-override` 设置，而不是作为容器环境变量。 |
| `NODE_FUNCTION_ALLOW_EXTERNAL` | String | - | 允许用户在 Code 节点中导入特定的外部模块（来自 `n8n/node_modules`）。默认情况下，n8n 禁用模块导入。在外部（external）模式下，在[执行器配置文件（runners config file）](../../set-up-task-runners.md#configuring-launcher-in-runners-container-in-external-mode)（`/etc/n8n-task-runners.json`）中把它作为 `env-override` 设置，而不是作为容器环境变量。 |
| `N8N_RUNNERS_ALLOW_PROTOTYPE_MUTATION` | Boolean | `false` | 是否允许外部库进行原型（prototype）修改。设为 `true` 可以允许依赖运行时原型修改的模块（例如 [`puppeteer`](https://pptr.dev/)），代价是放松安全性。 |
| `GENERIC_TIMEZONE` | * | `America/New_York` | 与 [n8n 实例配置的默认时区相同](timezone-and-localization.md)。 |
| `NODE_OPTIONS` | String | - | 给 Node.js 的[选项（Options）](https://nodejs.org/api/cli.html#node_optionsoptions)。 |
| `N8N_RUNNERS_MAX_OLD_SPACE_SIZE` | String |  | 任务执行器使用的 `--max-old-space-size` 选项（MB）。默认情况下，Node.js 会根据可用内存自动设置它。 |

## 任务执行器环境变量（Python）（Task runner environment variables (Python)）

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_RUNNERS_STDLIB_ALLOW` | String | - | 可以在 Code 节点中使用的 Python 标准库模块（包括它们的子模块）。使用 `*` 允许全部标准库模块。默认情况下，n8n 禁用所有 Python 标准库导入。在外部（external）模式下，在[执行器配置文件（runners config file）](../../set-up-task-runners.md#configuring-launcher-in-runners-container-in-external-mode)（`/etc/n8n-task-runners.json`）中把它作为 `env-override` 设置，而不是作为容器环境变量。 |
| `N8N_RUNNERS_EXTERNAL_ALLOW` | String | - | 允许在 Code 节点中使用的第三方 Python 模块（包括它们的子模块）。使用 `*` 允许全部外部模块。默认情况下，n8n 禁用所有第三方 Python 模块。第三方 Python 模块必须[包含（included）](../../set-up-task-runners.md#adding-extra-dependencies)在 `n8nio/runners` 镜像中。在外部（external）模式下，在[执行器配置文件（runners config file）](../../set-up-task-runners.md#configuring-launcher-in-runners-container-in-external-mode)（`/etc/n8n-task-runners.json`）中把它作为 `env-override` 设置，而不是作为容器环境变量。 |
| `N8N_RUNNERS_ALLOW_TRANSITIVE_IMPORTS` | Boolean | `false` | 被允许列表（allowlist）中的包自己的代码所执行的导入，是否跳过导入允许列表（包括 `N8N_RUNNERS_EXTERNAL_ALLOW` 和 `N8N_RUNNERS_STDLIB_ALLOW`）。设为 `true` 可以让一个被允许的包加载它自己导入的任何内容（它的传递依赖和标准库），而无需逐个列出这些模块。这对那些内部导入会拉入其他模块的包很有用（例如 `pandas` 会导入 `pytz`，`boto3` 会导入 `dateutil`）。你在 Code 节点中自己的导入仍然会被检查。启用它意味着信任所有已安装包的导入行为，而不只是名单里的包：一个被攻破的依赖可能会拉入允许列表本来会阻止的模块，所以只有在执行器镜像中已安装的包可信时才启用它。在外部（external）模式下，在[执行器配置文件（runners config file）](../../set-up-task-runners.md#configuring-launcher-in-runners-container-in-external-mode)（`/etc/n8n-task-runners.json`）中把它作为 `env-override` 设置，而不是作为容器环境变量。 |
| `N8N_RUNNERS_BUILTINS_DENY` | String | `eval,exec,compile,open,input,breakpoint,getattr,object,type,vars,setattr,delattr,hasattr,dir,memoryview,__build_class__,globals,locals` | 不能在 Code 节点中使用的 Python 内置函数。设为空字符串可以允许所有内置函数。 |
| `N8N_BLOCK_RUNNER_ENV_ACCESS` | Boolean | `true` | 是否阻止从 Python 代码任务中访问执行器的环境变量。设为 `false` 可以让所有 Python Code 节点用户通过 `os.environ` 访问执行器的环境变量。出于安全原因，环境变量访问默认是禁止的。 |
