---
contentType: howto
nodeTitle: 表达式 vs 数据节点
originalFilePath: data/expressions.md
originalUrl: 'https://docs.n8n.io/data/expressions'
url: 'https://docs.n8n.io/build/work-with-data/expressions-versus-data-nodes'
layout:
  description:
    visible: false
---

# 表达式 vs 数据节点 / Expressions versus data nodes

n8n 提供了多种处理和转换数据的方式。搞清楚什么时候该用哪一种，能帮你搭出更高效的工作流（workflow）。

| 方法 | 什么时候用 | 示例 | 可用范围 |
|---|---|---|---|
| 表达式（Expressions） | 用已有数据设置单个参数值 | 取 `{{$json.city}}`、格式化日期、简单数学计算 | 云版（Cloud）和自托管版（Self-hosted） |
| 代码节点（Code node） | 写完整的 JavaScript/Python 做复杂转换 | 重构数据、循环遍历数据项、使用外部库 | 云版（Cloud）和自托管版（Self-hosted） |
| AI 转换节点（AI Transform node） | 用自然语言描述需求，自动生成转换代码 | `Group by user and sum totals`（按用户分组并求和）、`categorize by sentiment`（按情感分类） | 仅云版（Cloud） |
| 其他数据转换节点（Other data transformation nodes） | 用可视化界面完成常见操作 | 聚合数据项、拆分数组、排序数据、去除重复 | 云版（Cloud）和自托管版（Self-hosted） |

{% hint style="info" %}
**大白话**：一句话总结——简单的取值、算数，就用表达式（Expressions），又快又直观；逻辑复杂、要写循环或算法，就用代码节点（Code node）；不想写代码，就让 AI 转换节点（AI Transform node）帮你生成；常见的聚合、排序、去重这类操作，直接用现成的转换节点拖一拖就好。
{% endhint %}

### 表达式 / Expressions

表达式（Expressions）是像 JavaScript 一样的一小段代码，你用 n8n 的 `{{ ... }}` 语法把它直接写进节点参数里。它可以利用前面节点的数据、工作流元数据（metadata）或环境变量（environment variables）来动态地设置参数值。

{% hint style="info" %}
**能用表达式就尽量用表达式**

表达式有个好处：能立即预览计算出来的值。所以能用表达式的地方，就优先用表达式。
{% endhint %}

**什么时候用表达式：**

* 从上一个节点的数据里取一个值。例如 `{{$json.body.city}}`。
* 直接在字段里做轻量的转换或计算。
* 想少加几个节点，让逻辑紧挨着你要设置的参数。

### 代码节点 / Code node

[代码节点（Code node）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.code) 是一个专门的节点，你可以在里面写 JavaScript 或 Python，作为工作流的一步来运行。它让你能拿到前面节点传入的数据，并通过添加、删除或更新数据项来操作它们。你可以写任何你需要的自定义函数，还可以通过 `$` 语法使用 n8n 内置的方法和变量。

**什么时候用代码节点（Code node）：**

* 你需要比表达式更复杂的逻辑或数据转换，比如重构数组和对象、聚合或拆分数据项、自定义算法。
* 你想一次性转换很多条数据项。
* 你想使用 promises、`console.log`，或者（自托管版的情况下）外部的 npm 模块。

### AI 转换节点 / AI Transform node

这个节点（AI Transform node）会根据一句简短的自然语言提示（prompt）生成代码片段。它能理解上下文，知道你的工作流里有哪些节点和数据类型。生成的代码在节点里是只读的；你可以把它复制到代码节点（Code node）里再编辑。

**什么时候用 AI 转换节点（AI Transform node）：**

* 你知道自己想要什么样的转换效果，但不想手写代码。
* 你想让 AI 先起草转换逻辑，然后在节点里直接运行，或者复制到代码节点里做进一步定制。

### 其他数据转换节点 / Other data transformation nodes

n8n 提供了一组现成的数据转换节点：

* [聚合（Aggregate）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.aggregate)：把单独的数据项（或其中的一部分）收集起来，合并成一条条新的数据项。
* [限制条数（Limit）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.limit)：删掉超出设定最大数量的数据项。
* [去除重复（Remove Duplicates）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.removeduplicates)：找出并删除在所有字段（或部分字段）上完全相同的重复数据项。
* [排序（Sort）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.sort)：按想要的顺序整理列表，或者生成随机抽取结果。
* [拆分（Split Out）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.splitout)：把一条包含列表的数据项拆成多条数据项。
* [汇总（Summarize）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.summarize)：把数据项聚合到一起，用法有点像 Excel 的数据透视表（pivot table）。

**什么时候用数据转换节点：**

* 你要做的操作正好对应某个转换节点的功能。
* 你想要一个带引导式界面的无代码（no-code）方案。
* 比起写表达式或代码，你更喜欢用可视化方式搭工作流。
