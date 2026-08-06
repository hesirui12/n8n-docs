---
title: 日志（Logs）环境变量
description: 用于配置日志和诊断数据的环境变量。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 日志（Logs）
originalFilePath: hosting/configuration/environment-variables/logs.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/logs'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/logs
layout:
  description:
    visible: false
---

# 日志（Logs）环境变量

{% hint style="info" %}
**大白话**：日志就是 n8n 运行时的「流水账记录」，出问题时靠它排查。这一页的变量决定：记什么级别的日志、日志写到哪（控制台还是文件）、一个日志文件多大、要保留几个，以及事件日志（用于把日志流式转发到外部系统）怎么配置。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

本页列出了用于设置日志以进行调试的环境变量。详细信息请参见[n8n 中的日志](../../../keep-n8n-running/set-up-logging.md)。

## n8n 日志

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_LOG_LEVEL` | Enum string: `info`, `warn`, `error`, `debug` | `info` | 日志输出级别。级别细节请参见[日志级别](../../../keep-n8n-running/set-up-logging.md#log-levels)。 |
| `N8N_LOG_OUTPUT` | Enum string: `console`, `file` | `console` | 日志输出到哪里。多个值用逗号分隔的列表提供。 |
| `N8N_LOG_FORMAT` | Enum string: `text`, `json` | `text` | 使用的日志格式。`text` 输出人类可读的消息。`json` 每行输出一个 JSON 对象，包含消息、级别、时间戳和所有元数据。这对生产监控和调试都很有用。 |
| `N8N_LOG_CRON_ACTIVE_INTERVAL` | Number | `0` | 每隔多少分钟记录一次当前活动的定时任务（cron jobs）。设为 `0` 可禁用。 |
| `N8N_LOG_FILE_COUNT_MAX` | Number | `100` | 最多保留多少个日志文件。 |
| `N8N_LOG_FILE_SIZE_MAX` | Number | `16` | 每个日志文件的最大大小（MB）。 |
| `N8N_LOG_FILE_LOCATION` | String | `<n8n-directory-path>/logs/n8n.log` | 日志文件的位置。需要把 `N8N_LOG_OUTPUT` 设为 `file`。 |
| `DB_LOGGING_ENABLED` | Boolean | `false` | 是否启用数据库专属的日志。 |
| `DB_LOGGING_OPTIONS` | Enum string: `query`, `error`, `schema`, `warn`, `info`, `log` | `error` | 数据库日志的输出级别。要启用全部日志，请指定 `all`。参见 [TypeORM 日志选项](https://orkhan.gitbook.io/typeorm/docs/docs/advanced-topics/5-logging#logging-options) |
| `DB_LOGGING_MAX_EXECUTION_TIME` | Number | `1000` | 查询执行超过多少毫秒后，n8n 记录一条警告。设为 `0` 可禁用长查询警告。 |
| `CODE_ENABLE_STDOUT` | Boolean | `false` | 设为 `true` 可将 Code 节点里 `console.log` 或 `print` 产生的日志发送到进程的标准输出（stdout），仅对生产执行生效。 |
| `NO_COLOR` | any | `undefined` | 设为任意值，可让日志输出不带 ANSI 颜色。更多信息参见 [no-color.org 网站](https://no-color.org/)。 |

## 日志流式传输（Log streaming）

此功能的更多信息请参见[日志流式传输](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/stream-logs-to-external-systems)。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_EVENTBUS_CHECKUNSENTINTERVAL` | Number | `0` | 每隔多久（毫秒）检查一次未发送的事件消息。在极少数情况下可能把消息发送两次。设为 `0` 可禁用。 |
| `N8N_EVENTBUS_LOGWRITER_SYNCFILEACCESS` | Boolean | `false` | 是否所有文件访问都在线程内同步进行（true）或不是（false）。 |
| `N8N_EVENTBUS_LOGWRITER_KEEPLOGCOUNT` | Number | `3` | 保留多少个事件日志文件。 |
| `N8N_EVENTBUS_LOGWRITER_MAXFILESIZEINKB` | Number | `10240` | 一个事件日志文件在开始写新文件之前允许达到的最大大小（千字节）。 |
| `N8N_EVENTBUS_LOGWRITER_LOGBASENAME` | String | `n8nEventLog` | 事件日志文件的基础名称。设置了 `N8N_EVENTBUS_LOGWRITER_LOGFULLPATH` 时忽略此值。 |
| `N8N_EVENTBUS_LOGWRITER_LOGFULLPATH` | String | `''` | 事件日志文件的绝对路径。必须以 `.log` 结尾。设置后，此路径会被原样使用，并覆盖 `N8N_EVENTBUS_LOGWRITER_LOGBASENAME` 和默认的按进程后缀。当多个进程共享一个可写文件系统时，可以用它给每个 n8n 进程分配唯一的事件日志路径。细节请参见[按进程的事件日志文件](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/stream-logs-to-external-systems#per-process-event-log-files)。 |
| `N8N_EVENTBUS_LOGWRITER_MAXTOTALMESSAGESPERFILE` | Number | `500000` | 恢复期间从单个事件日志文件解析的最大行数。当事件日志文件包含大量无效行时，用它来限制内存占用。 |

### 通过环境变量管理日志流式传输目标

把 `N8N_LOG_STREAMING_MANAGED_BY_ENV` 设为 `true`，即可通过环境变量来管理日志流式传输目标。关于激活模式（`*_MANAGED_BY_ENV`）如何工作，参见[使用环境变量管理实例设置](../../manage-settings-using-environment-variables.md)；关于每个目标的 JSON 结构，参见[使用环境变量配置日志流式传输目标](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/stream-logs-to-external-systems#configure-using-environment-variables)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/JvN9TDUUWTwpWaT83YrH/" %}
