---
contentType: howto
nodeTitle: 设置日志（Set up logging）
originalFilePath: hosting/logging-monitoring/logging.md
originalUrl: 'https://docs.n8n.io/hosting/logging-monitoring/logging'
url: 'https://docs.n8n.io/deploy/host-n8n/keep-n8n-running/set-up-logging'
layout:
  description:
    visible: false
---

# n8n 中的日志（Logging in n8n）

日志（logging）是调试的重要功能。n8n 使用 [winston](https://www.npmjs.com/package/winston) 日志库。

{% hint style="info" %}
**日志流（Log streaming）**

n8n 自托管企业版（Self-hosted Enterprise）除了本文档描述的日志选项外，还包括[日志流（Log streaming）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/stream-logs-to-external-systems)功能。
{% endhint %}

## 如何在 n8n 中设置日志？

要在 n8n 中设置日志，你需要设置以下环境变量（你也可以在[配置文件](../configure-n8n/basic-configuration/use-environment-variables/README.md)中设置这些值）：

| 配置文件中的设置 | 使用环境变量 | 说明 |
|-----------------------------------|-----------------------------|-------------|
| n8n.log.level | N8N_LOG_LEVEL | 日志输出级别。可用选项（从低到高）为 error、warn、info 和 debug。默认值为 `info`。关于这些选项的更多信息见[这里](#log-levels)。 |
| n8n.log.output | N8N_LOG_OUTPUT | 日志输出到哪里。可用选项为 `console`（控制台）和 `file`（文件）。多个值可以用逗号（`,`）分隔。默认使用 `console`。 |
| n8n.log.file.location | N8N_LOG_FILE_LOCATION | 日志文件的位置，仅当日志输出设置为 file 时使用。默认使用 `<n8nFolderPath>/logs/n8n.log`。 |
| n8n.log.file.fileSizeMax | N8N_LOG_FILE_SIZE_MAX | 每个日志文件的最大大小（以 MB 为单位）。默认情况下，n8n 使用 16 MB。 |
| n8n.log.file.fileCountMax | N8N_LOG_FILE_COUNT_MAX | 保留的最大日志文件数量。默认值为 100。使用 worker 时应该设置这个值。 |

```bash
# Set the logging level to 'debug'
export N8N_LOG_LEVEL=debug

# Set log output to both console and a log file
export N8N_LOG_OUTPUT=console,file

# Set a save location for the log file
export N8N_LOG_FILE_LOCATION=/home/jim/n8n/logs/n8n.log

# Set a 50 MB maximum size for each log file
export N8N_LOG_FILE_SIZE_MAX=50

# Set 60 as the maximum number of log files to be kept
export N8N_LOG_FILE_COUNT_MAX=60
```

### 日志级别（Log levels）

n8n 使用标准的日志级别来报告：

- `silent`：什么都不输出
- `error`：只输出错误，其他都不输出
- `warn`：输出错误和警告消息
- `info`：包含有关进度的有用信息
- `debug`：最详细的输出。n8n 会输出大量信息，帮助你调试问题。

## 如何在开发过程中添加日志？

在开发过程中，添加日志消息是一个好习惯。它有助于调试错误。要为开发配置日志，请按照下面的指南操作。

### 实现细节（Implementation details）

n8n 使用位于 `workflow` 包中的 `LoggerProxy` 类。通过传入一个 `Logger` 实例来调用 `LoggerProxy.init()`，即可在使用之前完成类的初始化。

初始化过程只发生一次。[`start.ts`](https://github.com/n8n-io/n8n/blob/master/packages/cli/src/commands/start.ts) 文件已经为你完成了这个过程。如果你要从零开始创建一个新命令，则需要自己初始化 `LoggerProxy` 类。

一旦在 `cli` 包中创建了 `Logger` 实现，就可以通过从导出的模块调用 `getInstance` 便捷方法来获取它。

请查看 [start.ts](https://github.com/n8n-io/n8n/blob/master/packages/cli/src/commands/start.ts) 文件，了解更多关于这个过程的工作原理。

### 添加日志（Adding logs）

一旦在项目中初始化了 `LoggerProxy` 类，你就可以把它导入到任何其他文件中并添加日志。

所有日志级别都提供了便捷方法，因此可以随时按需添加新日志，格式为 `Logger.<logLevel>('<message>', ...meta)`，其中 `meta` 代表除 `message` 之外你想要的任何附加属性。

在上面的示例中，我们使用上面描述的[标准日志级别](#log-levels)。`message` 参数是一个字符串，`meta` 是一个数据对象。

```js
// You have to import the LoggerProxy. We rename it to Logger to make it easier

import {
	LoggerProxy as Logger
} from 'n8n-workflow';

// Info-level logging of a trigger function, with workflow name and workflow ID as additional metadata properties

Logger.info(`Polling trigger initiated for workflow "${workflow.name}"`, {workflowName: workflow.name, workflowId: workflow.id});
```

创建新的日志时，一些有用的标准值得记住：

- 尽量让日志消息对人类可读。例如，始终用引号包裹名称。
- 在日志消息和元数据中重复信息（例如上面示例中的工作流名称）是有用的，因为消息更容易搜索，而元数据便于过滤。
- 在所有日志中包括多个 ID（例如 `executionId`、`workflowId` 和 `sessionId`）。
- 使用节点类型（node types）而不是节点名称（或两者都用），因为这样更一致，也更容易搜索。

## 前端日志可用吗？

截至目前，前端日志不可用。在 `editor-ui` 包中使用 `Logger` 或 `LoggerProxy` 会产生错误。这个功能将在未来的版本中实现。

{% hint style="info" %}
**小白提示**：日志就是 n8n 的"黑匣子"。出了问题（比如工作流失败、节点报错），第一件事就是去看日志。建议日常把日志级别保持默认的 `info`，排查问题时临时调成 `debug` 看细节；想要永久留存，把输出设成 `console,file` 同时写文件，再配合日志滚动（大小/数量上限），就不会把磁盘塞满。
{% endhint %}
