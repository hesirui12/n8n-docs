---
nodeTitle: Execdata
originalFilePath: data/expression-reference/execdata.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/execdata'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/execdata
layout:
  description:
    visible: false
---
# ExecData 执行数据 <a href="#execdata" id="execdata"></a>

{% hint style="info" %}
**大白话**：`$exec` 提供本次执行（execution）的信息：`id` 是本次执行的编号，`mode` 说明是测试还是正式运行，`customData` 用于读写自定义标签，还有两个 URL 用于恢复等待中的工作流。
{% endhint %}

## `$exec`.**`customData`** <a href="#dollarexeccustomdata" id="dollarexeccustomdata"></a>

**说明：** 设置和读取自定义执行数据（例如用于筛选执行记录）。你也可以用「执行数据（Execution Data）」节点来做这件事。 <a href="../../../understand-workflows/understand-executions/customize-executions-data.md">更多信息</a>

**语法：** `$exec`.`$exec`.**`customData`**

**返回：** CustomData

**来源：** n8n 自定义功能

## `$exec`.**`id`** <a href="#dollarexecid" id="dollarexecid"></a>

**说明：** 当前工作流执行的 ID

**语法：** `$exec`.`$exec`.**`id`**

**返回：** String（字符串）

**来源：** n8n 自定义功能

## `$exec`.**`mode`** <a href="#dollarexecmode" id="dollarexecmode"></a>

**说明：** 取值有 3 种：<code>test</code>（表示这次执行是在 n8n 里点按钮触发的）或 <code>production</code>（表示自动触发的正式运行）。运行工作流测试时，则使用 <code>evaluation</code>。

**语法：** `$exec`.`$exec`.**`mode`**

**返回：** String（字符串）

**来源：** n8n 自定义功能

## `$exec`.**`resumeFormUrl`** <a href="#dollarexecresumeformurl" id="dollarexecresumeformurl"></a>

**说明：** 访问<a href="https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.wait">「等待（Wait）」节点</a>生成的表单所用的 URL。

**语法：** `$exec`.`$exec`.**`resumeFormUrl`**

**返回：** String（字符串）

**来源：** n8n 自定义功能

## `$exec`.**`resumeUrl`** <a href="#dollarexecresumeurl" id="dollarexecresumeurl"></a>

**说明：** 用于恢复在<a href="https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.wait">「等待（Wait）」节点</a>处等待的工作流时，需要调用的 webhook URL。

**语法：** `$exec`.`$exec`.**`resumeUrl`**

**返回：** String（字符串）

**来源：** n8n 自定义功能
