---
title: 执行（Executions）环境变量
description: 用于配置工作流执行相关设置的环境变量。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 执行（Executions）
originalFilePath: hosting/configuration/environment-variables/executions.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/executions'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/executions
layout:
  description:
    visible: false
---

# 执行（Executions）环境变量

{% hint style="info" %}
**大白话**：执行（execution）就是「工作流跑一次」的过程。这一页的变量用来控制工作流怎么跑：能不能超时、跑完的数据要不要保存、保存多久、最多同时跑几个等。想让 n8n 跑得更稳、不把磁盘塞满，就看这一页。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

本页列出了用于配置工作流执行设置的环境变量。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `EXECUTIONS_MODE` | Enum string: `regular`, `queue` | `regular` | 执行是直接运行，还是通过队列运行。<br><br>更多细节请参见[队列模式](../../scaling/enable-queue-mode.md)。 |
| `EXECUTIONS_TIMEOUT` | Number | `-1` | 为所有工作流设置一个默认超时时间（秒），超过后 n8n 会停止执行。用户可以在单个工作流上覆盖此设置，但最长不能超过 `EXECUTIONS_TIMEOUT_MAX` 设置的值。把 `EXECUTIONS_TIMEOUT` 设为 `-1` 可禁用超时。 |
| `EXECUTIONS_TIMEOUT_MAX` | Number | `3600` | 用户可以为单个工作流设置的最大执行时间（秒）。 |
| `N8N_AI_TIMEOUT_MAX` | Number | `3600000` | AI 和 LLM 节点（如 OpenAI、Anthropic、Mistral 和 Ollama）的 HTTP 请求超时时间（毫秒）。这控制着 n8n 等待 AI 服务响应的最长时间。对于较慢的本地 AI 服务或需要较长处理时间的复杂提示词，这个设置很有用。 |
| `EXECUTIONS_DATA_SAVE_ON_ERROR` | Enum string: `all`, `none` | `all` | n8n 是否在出错时保存执行数据。 |
| `EXECUTIONS_DATA_SAVE_ON_SUCCESS` | Enum string: `all`, `none` | `all` | n8n 是否在成功时保存执行数据。 |
| `EXECUTIONS_DATA_SAVE_ON_PROGRESS` | Boolean | `false` | 是否为每个执行的节点保存进度（true）或是不保存（false）。 |
| `EXECUTIONS_DATA_SAVE_MANUAL_EXECUTIONS` | Boolean | `true` | 是否保存手动启动的执行数据。 |
| `N8N_EXECUTION_DATA_STORAGE_MODE` | Enum string: `database`, `filesystem`, `s3`, `azure` | `database` | n8n 把执行数据存在哪里。`s3` 和 `azure` 模式需要企业版许可证。相关存储变量请参见[外部数据存储](external-data-storage.md)。 |
| `N8N_STORAGE_PATH` | String | `N8N_USER_FOLDER/storage` | 文件系统存储的基础路径。当 `N8N_EXECUTION_DATA_STORAGE_MODE` 为 `filesystem` 时，n8n 会把执行数据存在这里。n8n 也把此路径用于文件系统二进制数据。 |
| `EXECUTIONS_DATA_PRUNE` | Boolean | `true` | 是否滚动删除过去执行的数据（防止数据库无限增长）。 |
| `EXECUTIONS_DATA_MAX_AGE` | Number | `336` | 执行数据在被删除前的保留时间（小时）。 |
| `EXECUTIONS_DATA_PRUNE_MAX_COUNT` | Number | `10000` | 数据库中最多保留的执行记录数。0 = 不限制 |
| `EXECUTIONS_DATA_HARD_DELETE_BUFFER` | Number | `1` | 已完成的执行数据至少要「多旧」（小时）才会被硬删除。默认情况下，这个缓冲会保护较新的执行数据不被删，因为用户在搭建工作流时可能还需要它们。 |
| `EXECUTIONS_DATA_PRUNE_HARD_DELETE_INTERVAL` | Number | `15` | 执行数据硬删除多久执行一次（分钟）。 |
| `EXECUTIONS_DATA_PRUNE_SOFT_DELETE_INTERVAL` | Number | `60` | 执行数据软删除多久执行一次（分钟）。 |
| `EXECUTIONS_DATA_MAX_DISPLAY_SIZE` | Number | `104857600` | n8n 在显示执行记录（编辑器、执行详情和公共 API）时加载的执行数据最大大小（字节）。对于更大的执行，n8n 会省略数据（显示为「too large to display」），以免内存较小的实例内存耗尽。不影响重试或恢复执行——那些操作始终加载完整数据。设为 `0` 可禁用此限制。 |
| `N8N_CONCURRENCY_PRODUCTION_LIMIT` | Number | `-1` | 允许同时运行的生产执行的最大数量，适用于常规模式和伸缩模式。`-1` 表示在常规模式下不限制。 |
| `N8N_CONCURRENCY_EVALUATION_LIMIT` | Number | 按许可证层级决定的默认值 | 单个[评测](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/test-and-improve-ai-workflows/use-metrics-to-measure-quality#run-test-cases-in-parallel)测试运行中最多可并行运行的测试用例数。未设置时，限制遵循许可证层级（社区版/专业版：1，商业版：3，企业版：5）。设置此变量会覆盖层级默认值。 |
| `N8N_WORKFLOW_AUTODEACTIVATION_ENABLED` | Boolean | `false` | 工作流是否在反复崩溃执行后自动取消发布。 |
| `N8N_WORKFLOW_AUTODEACTIVATION_MAX_LAST_EXECUTIONS` | Number | `3` | 工作流崩溃执行多少次后自动取消发布。 |
