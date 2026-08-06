---
title: 去重节点的模板和示例
description: >-
  n8n 工作流自动化平台中「去重 Remove Duplicates」节点的模板和示例文档。
  包含使用该节点的模板和使用示例。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Remove Duplicates node templates and Examples
originalFilePath: >-
  integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates/templates-and-examples.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates/templates-and-examples
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates/templates-and-examples
layout:
  description:
    visible: false
---

# 模板和示例

> **大白话**：这一页是手把手的实操教程。你会先用 Code 节点造一批带重复项的示例数据，然后分别演示「去重节点」的三种用法：① 清掉本次输入里的重复行；② 只保留以前没见过的「新」数据；③ 只保留比之前「更大/更新」的数据（数值更高、日期更晚）。每一步都配了结果表格，照着做就能学会。

这里有一些 [去重 Remove Duplicates 节点](README.md) 的模板和示例。

{% hint style="info" %}
**连续性示例**

本节包含的示例是一个连续序列。请一个接一个地跟着做，以免出现意外结果。
{% endhint %}

（白话解释：这些示例是「连起来」的——后面的示例会用到前面示例留下的执行历史，所以必须按顺序做，不能跳着来。）

## 模板

[浏览去重（Remove Duplicates）节点的集成模板](https://n8n.io/integrations/remove-duplicates) 或 [搜索所有模板](https://n8n.io/workflows/)

## 使用 Code 节点设置示例数据

创建一个带有示例输入数据的工作流，来试用「去重 Remove Duplicates」节点。

1. 在画布上添加一个 Code 节点，并把它连接到手动触发器（Manual Trigger）节点。
2. 在 Code 节点中，把 **模式 Mode** 设置为 **每个数据项运行一次 Run Once for Each Item**，**语言 Language** 设置为 **JavaScript**。
3. 在 **JavaScript** 字段中粘贴以下 JavaScript 代码片段：
```js
let data =[];

return {
  data: [
    { id: 1, name: 'Taylor Swift', job: 'Pop star', last_updated: '2024-09-20T10:12:43.493Z' },
    { id: 2, name: 'Ed Sheeran', job: 'Singer-songwriter', last_updated: '2024-10-05T08:30:59.493Z' },
    { id: 3, name: 'Adele', job: 'Singer-songwriter', last_updated: '2024-10-07T14:15:59.493Z' },
    { id: 4, name: 'Bruno Mars', job: 'Singer-songwriter', last_updated: '2024-08-25T17:45:12.493Z' },
    { id: 1, name: 'Taylor Swift', job: 'Pop star', last_updated: '2024-09-20T10:12:43.493Z' },  // duplicate
    { id: 5, name: 'Billie Eilish', job: 'Singer-songwriter', last_updated: '2024-09-10T09:30:12.493Z' },
    { id: 6, name: 'Katy Perry', job: 'Pop star', last_updated: '2024-10-08T12:30:45.493Z' },
    { id: 2, name: 'Ed Sheeran', job: 'Singer-songwriter', last_updated: '2024-10-05T08:30:59.493Z' },  // duplicate
    { id: 7, name: 'Lady Gaga', job: 'Pop star', last_updated: '2024-09-15T14:45:30.493Z' },
    { id: 8, name: 'Rihanna', job: 'Pop star', last_updated: '2024-10-01T11:50:22.493Z' },
    { id: 3, name: 'Adele', job: 'Singer-songwriter', last_updated: '2024-10-07T14:15:59.493Z' },  // duplicate
    //{ id: 9, name: 'Tom Hanks', job: 'Actor', last_updated: '2024-10-17T13:58:31.493Z' },
    //{ id: 0, name: 'Madonna', job: 'Pop star', last_updated: '2024-10-17T17:11:38.493Z' },
    //{ id: 15, name: 'Bob Dylan', job: 'Folk singer', last_updated: '2024-09-24T08:03:16.493Z'},
    //{ id: 10, name: 'Harry Nilsson', job: 'Singer-songwriter', last_updated: '2020-10-17T17:11:38.493Z' },
    //{ id: 11, name: 'Kylie Minogue', job: 'Pop star', last_updated: '2024-10-24T08:03:16.493Z'},
  ]
}
```
（这段数据里有 3 条是重复的（id 为 1、2、3 各出现两次，代码里标了 `// duplicate`）。另外有 5 条被注释掉了（行首有 `//`），后面示例会逐步取消注释用它们。）
4. 在画布上添加一个「拆分 Split Out」节点，并连接到 Code 节点。
5. 在「拆分 Split Out」节点中，在 **要拆分的字段 Fields To Split Out** 字段里输入 `data`。
（拆分后，上面的数组就变成了 11 条独立的数据项，每条一个歌手。）

## 从当前输入中删除重复项

1. 在画布上添加一个「去重 Remove Duplicates」节点，并连接到「拆分 Split Out」节点。先在 **操作 Action** 中选择 **删除当前输入中重复的数据项 Remove items repeated within current input**。
2. 打开「去重 Remove Duplicates」节点，确保 **操作 Operation** 设置为 **删除当前输入中重复的数据项 Remove Items Repeated Within Current Input**。
3. 在 **比较 Compare** 字段中选择 **所有字段 All fields**。
4. 点击 **执行步骤 Execute step** 运行去重节点，删除当前输入中的重复数据。

n8n 会删除所有字段数据都相同的数据项。你在表格视图中的输出应该长这样：

| **id** | **name**      | **job**           | **last_updated**         |
|--------|---------------|-------------------|--------------------------|
| 1      | Taylor Swift  | Pop star          | 2024-09-20T10:12:43.493Z |
| 2      | Ed Sheeran    | Singer-songwriter | 2024-10-05T08:30:59.493Z |
| 3      | Adele         | Singer-songwriter | 2024-10-07T14:15:59.493Z |
| 4      | Bruno Mars    | Singer-songwriter | 2024-08-25T17:45:12.493Z |
| 5      | Billie Eilish | Singer-songwriter | 2024-09-10T09:30:12.493Z |
| 6      | Katy Perry    | Pop star          | 2024-10-08T12:30:45.493Z |
| 7      | Lady Gaga     | Pop star          | 2024-09-15T14:45:30.493Z |
| 8      | Rihanna       | Pop star          | 2024-10-01T11:50:22.493Z |

（11 条变成 8 条：id 为 1、2、3 的重复行被删掉了。）

5. 再次打开「去重 Remove Duplicates」节点，把 **比较 Compare** 参数改为 **选定的字段 Selected Fields**。
6. 在 **要比较的字段 Fields To Compare** 字段中输入 `job`。
7. 点击 **执行步骤 Execute step** 运行去重节点，删除当前输入中的重复数据。

n8n 会删除当前输入中 `job` 数据相同的数据项。你在表格视图中的输出应该长这样：

| **id** | **name**      | **job**           | **last_updated**         |
|--------|---------------|-------------------|--------------------------|
| 1      | Taylor Swift  | Pop star          | 2024-09-20T10:12:43.493Z |
| 2      | Ed Sheeran    | Singer-songwriter | 2024-10-05T08:30:59.493Z |

（这次只比较 `job` 一个字段：8 个人里，`job` 相同的会被去重，最后只剩两条不同职业的记录——一个 Pop star、一个 Singer-songwriter。）

## 保留「值是新的」的数据项

1. 打开「去重 Remove Duplicates」节点，把 **操作 Operation** 设置为 **删除之前执行中已处理的数据项 Remove Items Processed in Previous Executions**。
2. 把 **保留哪些数据项 Keep Items Where** 参数设置为 **值是新的 Value Is New**。
3. 把 **去重依据的值 Value to Dedupe On** 参数设置为 `{{ $json.name }}`。
4. 在画布上点击 **执行工作流 Execute workflow** 运行工作流。打开「去重 Remove Duplicates」节点检查结果。

n8n 会把当前输入数据与之前执行存储的数据项进行比较。由于这是第一次用这个操作运行去重节点，n8n 会处理所有数据项，并把它们放入 **保留 Kept** 输出标签页中。数据项的顺序可能与输入数据中的顺序不同：

| **id** | **name**      | **job**           | **last_updated**         |
|--------|---------------|-------------------|--------------------------|
| 1      | Taylor Swift  | Pop star          | 2024-09-20T10:12:43.493Z |
| 1      | Taylor Swift  | Pop star          | 2024-09-20T10:12:43.493Z |
| 2      | Ed Sheeran    | Singer-songwriter | 2024-10-05T08:30:59.493Z |
| 2      | Ed Sheeran    | Singer-songwriter | 2024-10-05T08:30:59.493Z |
| 3      | Adele         | Singer-songwriter | 2024-10-07T14:15:59.493Z |
| 3      | Adele         | Singer-songwriter | 2024-10-07T14:15:59.493Z |
| 4      | Bruno Mars    | Singer-songwriter | 2024-08-25T17:45:12.493Z |
| 5      | Billie Eilish | Singer-songwriter | 2024-09-10T09:30:12.493Z |
| 6      | Katy Perry    | Pop star          | 2024-10-08T12:30:45.493Z |
| 7      | Lady Gaga     | Pop star          | 2024-09-15T14:45:30.493Z |
| 8      | Rihanna       | Pop star          | 2024-10-01T11:50:22.493Z |

（注意：这次因为是第一次执行，「以前见过哪些名字」的记忆是空的，所以 11 条全部进入 **保留 Kept**——包括本次输入里重复的 Taylor Swift 等。）

{% hint style="info" %}
**数据项只会与之前的执行进行比较**

当前输入的数据项只会与之前执行中存储的数据项进行比较。这意味着在此操作模式下，当前输入内部重复的数据项不会被删除。如果你需要同时删除当前输入内重复的数据项*以及*跨执行的重复数据项，请把两个去重节点串行连接起来：第一个设置为 **删除当前输入中重复的数据项 Remove Items Repated Within Current Input** 操作，第二个设置为 **删除之前执行中已处理的数据项 Remove Items Processed in Previous Executions** 操作。
{% endhint %}

5. 打开 Code 节点，取消注释（去掉行首的 `//`）"Tom Hanks" 那一行。
6. 在画布上再次点击 **执行工作流 Execute workflow**。再次打开「去重 Remove Duplicates」节点检查结果。

n8n 会把当前输入数据与之前执行存储的数据项进行比较。这一次，**保留 Kept** 标签页包含 Code 节点中的一条新记录：

| **id** | **name**  | **job** | **last_updated**         |
|--------|-----------|---------|--------------------------|
| 9      | Tom Hanks | Actor   | 2024-10-17T13:58:31.493Z |

**丢弃 Discarded** 标签页包含之前执行处理过的数据项：

| **id** | **name**      | **job**           | **last_updated**         |
|--------|---------------|-------------------|--------------------------|
| 1      | Taylor Swift  | Pop star          | 2024-09-20T10:12:43.493Z |
| 1      | Taylor Swift  | Pop star          | 2024-09-20T10:12:43.493Z |
| 2      | Ed Sheeran    | Singer-songwriter | 2024-10-05T08:30:59.493Z |
| 2      | Ed Sheeran    | Singer-songwriter | 2024-10-05T08:30:59.493Z |
| 3      | Adele         | Singer-songwriter | 2024-10-07T14:15:59.493Z |
| 3      | Adele         | Singer-songwriter | 2024-10-07T14:15:59.493Z |
| 4      | Bruno Mars    | Singer-songwriter | 2024-08-25T17:45:12.493Z |
| 5      | Billie Eilish | Singer-songwriter | 2024-09-10T09:30:12.493Z |
| 6      | Katy Perry    | Pop star          | 2024-10-08T12:30:45.493Z |
| 7      | Lady Gaga     | Pop star          | 2024-09-15T14:45:30.493Z |
| 8      | Rihanna       | Pop star          | 2024-10-01T11:50:22.493Z |

（第二次执行时，之前见过的 10 条（含重复的）都被丢进 **丢弃 Discarded**，只有新出现的 Tom Hanks 进了 **保留 Kept**。）

继续之前，先清除去重历史，为下一个示例做好准备：

7. 打开「去重 Remove Duplicates」节点，把 **操作 Operation** 设置为 **清除去重历史 Clear Deduplication History**。
8. 点击 **执行步骤 Execute step** 清除当前的去重历史。

## 保留「值高于任何之前的数值」的数据项

1. 打开「去重 Remove Duplicates」节点，把 **操作 Operation** 设置为 **删除之前执行中已处理的数据项 Remove Items Processed in Previous Executions**。
2. 把 **保留哪些数据项 Keep Items Where** 参数设置为 **值高于任何之前的数值 Value Is Higher than Any Previous Value**。
3. 把 **去重依据的值 Value to Dedupe On** 参数设置为 `{{ $json.id }}`。
4. 在画布上点击 **执行工作流 Execute workflow** 运行工作流。打开「去重 Remove Duplicates」节点检查结果。

n8n 会把当前输入数据与之前执行存储的数据项进行比较。由于这是在清除历史后第一次运行去重节点，n8n 会处理所有数据项，并把它们放入 **保留 Kept** 输出标签页中。数据项的顺序可能与输入数据中的顺序不同：

| **id** | **name**      | **job**           | **last_updated**         |
|--------|---------------|-------------------|--------------------------|
| 1      | Taylor Swift  | Pop star          | 2024-09-20T10:12:43.493Z |
| 1      | Taylor Swift  | Pop star          | 2024-09-20T10:12:43.493Z |
| 2      | Ed Sheeran    | Singer-songwriter | 2024-10-05T08:30:59.493Z |
| 2      | Ed Sheeran    | Singer-songwriter | 2024-10-05T08:30:59.493Z |
| 3      | Adele         | Singer-songwriter | 2024-10-07T14:15:59.493Z |
| 3      | Adele         | Singer-songwriter | 2024-10-07T14:15:59.493Z |
| 4      | Bruno Mars    | Singer-songwriter | 2024-08-25T17:45:12.493Z |
| 5      | Billie Eilish | Singer-songwriter | 2024-09-10T09:30:12.493Z |
| 6      | Katy Perry    | Pop star          | 2024-10-08T12:30:45.493Z |
| 7      | Lady Gaga     | Pop star          | 2024-09-15T14:45:30.493Z |
| 8      | Rihanna       | Pop star          | 2024-10-01T11:50:22.493Z |
| 9      | Tom Hanks     | Actor             | 2024-10-17T13:58:31.493Z |

（历史已清空，所以这次 12 条（11 条 + 新取消注释的 Tom Hanks）全部进入 **保留 Kept**。）

5. 打开 Code 节点，取消注释（去掉行首的 `//`）"Madonna" 和 "Bob Dylan" 这两行。
6. 在画布上再次点击 **执行工作流 Execute workflow**。再次打开「去重 Remove Duplicates」节点检查结果。

n8n 会把当前输入数据与之前执行存储的数据项进行比较。这一次，**保留 Kept** 标签页只包含 "Bob Dylan" 一条。n8n 保留它是因为它的 `id` 列值（15）高于任何之前的数值（之前的最大值是 9）：

| **id** | **name**  | **job**     | **last_updated**         |
|--------|-----------|-------------|--------------------------|
| 15     | Bob Dylan | Folk singer | 2024-09-24T08:03:16.493Z |

**丢弃 Discarded** 标签页包含 13 条 `id` 列值等于或小于之前最大值（9）的数据项。表格里包含 "Madonna"，即使它是一条新数据，因为它的 `id` 值（0）不大于之前的最大值：

| **id** | **name**      | **job**           | **last_updated**         |
|--------|---------------|-------------------|--------------------------|
| 0      | Madonna       | Pop star          | 2024-10-17T17:11:38.493Z |
| 1      | Taylor Swift  | Pop star          | 2024-09-20T10:12:43.493Z |
| 1      | Taylor Swift  | Pop star          | 2024-09-20T10:12:43.493Z |
| 2      | Ed Sheeran    | Singer-songwriter | 2024-10-05T08:30:59.493Z |
| 2      | Ed Sheeran    | Singer-songwriter | 2024-10-05T08:30:59.493Z |
| 3      | Adele         | Singer-songwriter | 2024-10-07T14:15:59.493Z |
| 3      | Adele         | Singer-songwriter | 2024-10-07T14:15:59.493Z |
| 4      | Bruno Mars    | Singer-songwriter | 2024-08-25T17:45:12.493Z |
| 5      | Billie Eilish | Singer-songwriter | 2024-09-10T09:30:12.493Z |
| 6      | Katy Perry    | Pop star          | 2024-10-08T12:30:45.493Z |
| 7      | Lady Gaga     | Pop star          | 2024-09-15T14:45:30.493Z |
| 8      | Rihanna       | Pop star          | 2024-10-01T11:50:22.493Z |
| 9      | Tom Hanks     | Actor             | 2024-10-17T13:58:31.493Z |

（规则是「只要比之前见过的最大值大就保留」。这次新出现的 Madonna 的 id 是 0、Bob Dylan 的 id 是 15，只有 15 > 9 被保留，0 被丢弃。）

继续之前，先清除去重历史，为下一个示例做好准备：

7. 打开「去重 Remove Duplicates」节点，把 **操作 Operation** 设置为 **清除去重历史 Clear Deduplication History**。
8. 点击 **执行步骤 Execute step** 清除当前的去重历史。

## 保留「值是晚于任何之前日期的日期」的数据项

1. 打开「去重 Remove Duplicates」节点，把 **操作 Operation** 设置为 **删除之前执行中已处理的数据项 Remove Items Processed in Previous Executions**。
2. 把 **保留哪些数据项 Keep Items Where** 参数设置为 **值是晚于任何之前日期的日期 Value Is a Date Later than Any Previous Date**。
3. 把 **去重依据的值 Value to Dedupe On** 参数设置为 `{{ $json.last_updated }}`。
4. 在画布上点击 **执行工作流 Execute workflow** 运行工作流。打开「去重 Remove Duplicates」节点检查结果。

n8n 会把当前输入数据与之前执行存储的数据项进行比较。由于这是在清除历史后第一次运行去重节点，n8n 会处理所有数据项，并把它们放入 **保留 Kept** 输出标签页中。数据项的顺序可能与输入数据中的顺序不同：

| **id** | **name**      | **job**           | **last_updated**         |
|--------|---------------|-------------------|--------------------------|
| 0      | Madonna       | Pop star          | 2024-10-17T17:11:38.493Z |
| 1      | Taylor Swift  | Pop star          | 2024-09-20T10:12:43.493Z |
| 1      | Taylor Swift  | Pop star          | 2024-09-20T10:12:43.493Z |
| 2      | Ed Sheeran    | Singer-songwriter | 2024-10-05T08:30:59.493Z |
| 2      | Ed Sheeran    | Singer-songwriter | 2024-10-05T08:30:59.493Z |
| 3      | Adele         | Singer-songwriter | 2024-10-07T14:15:59.493Z |
| 3      | Adele         | Singer-songwriter | 2024-10-07T14:15:59.493Z |
| 4      | Bruno Mars    | Singer-songwriter | 2024-08-25T17:45:12.493Z |
| 5      | Billie Eilish | Singer-songwriter | 2024-09-10T09:30:12.493Z |
| 6      | Katy Perry    | Pop star          | 2024-10-08T12:30:45.493Z |
| 7      | Lady Gaga     | Pop star          | 2024-09-15T14:45:30.493Z |
| 8      | Rihanna       | Pop star          | 2024-10-01T11:50:22.493Z |
| 9      | Tom Hanks     | Actor             | 2024-10-17T13:58:31.493Z |
| 15     | Bob Dylan     | Folk singer       | 2024-09-24T08:03:16.493Z |

（历史已清空，14 条全部进入 **保留 Kept**。）

5. 打开 Code 节点，取消注释（去掉行首的 `//`）"Harry Nilsson" 和 "Kylie Minogue" 这两行。

6. 在画布上再次点击 **执行工作流 Execute workflow**。再次打开「去重 Remove Duplicates」节点检查结果。

n8n 会把当前输入数据与之前执行存储的数据项进行比较。这一次，**保留 Kept** 标签页只包含 "Kylie Minogue" 一条。n8n 保留它是因为它的 `last_updated` 列值（`2024-10-24T08:03:16.493Z`）晚于任何之前的日期（之前最新的日期是 `2024-10-17T17:11:38.493Z`）：

| **id** | **name**      | **job**           | **last_updated**         |
|--------|---------------|-------------------|--------------------------|
| 11     | Kylie Minogue | Pop star          | 2024-10-24T08:03:16.493Z |

**丢弃 Discarded** 标签页包含 15 条 `last_updated` 列值等于或早于之前最新日期（`2024-10-17T17:11:38.493Z`）的数据项。表格里包含 "Harry Nilsson"，即使它是一条新数据，因为它的 `last_updated` 值（2020 年）不晚于之前的最大值：

| **id** | **name**      | **job**           | **last_updated**         |
|--------|---------------|-------------------|--------------------------|
| 10     | Harry Nilsson | Singer-songwriter | 2020-10-17T17:11:38.493Z |
| 0      | Madonna       | Pop star          | 2024-10-17T17:11:38.493Z |
| 1      | Taylor Swift  | Pop star          | 2024-09-20T10:12:43.493Z |
| 1      | Taylor Swift  | Pop star          | 2024-09-20T10:12:43.493Z |
| 2      | Ed Sheeran    | Singer-songwriter | 2024-10-05T08:30:59.493Z |
| 2      | Ed Sheeran    | Singer-songwriter | 2024-10-05T08:30:59.493Z |
| 3      | Adele         | Singer-songwriter | 2024-10-07T14:15:59.493Z |
| 3      | Adele         | Singer-songwriter | 2024-10-07T14:15:59.493Z |
| 4      | Bruno Mars    | Singer-songwriter | 2024-08-25T17:45:12.493Z |
| 5      | Billie Eilish | Singer-songwriter | 2024-09-10T09:30:12.493Z |
| 6      | Katy Perry    | Pop star          | 2024-10-08T12:30:45.493Z |
| 7      | Lady Gaga     | Pop star          | 2024-09-15T14:45:30.493Z |
| 8      | Rihanna       | Pop star          | 2024-10-01T11:50:22.493Z |
| 9      | Tom Hanks     | Actor             | 2024-10-17T13:58:31.493Z |
| 15     | Bob Dylan     | Folk singer       | 2024-09-24T08:03:16.493Z |

（规则是「只要日期比之前见过的最新日期还晚就保留」。Kylie Minogue 的日期 2024-10-24 最晚，被保留；Harry Nilsson 虽然是新数据，但日期是 2020 年，比之前的 2024-10-17 早，所以被丢弃。）
