---
description: 用于处理 n8n 元数据的方法。
contentType: reference
hide:
  - toc
nodeTitle: n8n metadata
originalFilePath: code/builtin/n8n-metadata.md
originalUrl: 'https://docs.n8n.io/code/builtin/n8n-metadata'
url: 'https://docs.n8n.io/build/code-in-n8n/use-built-in-shortcuts/n8n-metadata'
layout:
  description:
    visible: false
---

# n8n 元数据 / n8n metadata

用于处理 n8n 元数据的方法。

{% hint style="info" %}
**大白话**：什么是「元数据」（metadata）？就是「关于数据的数据」——不是工作流里处理的具体业务数据，而是描述工作流本身的信息：比如这个工作流叫什么名字、ID 是多少、当前这次执行是谁触发的、n8n 服务配置了什么环境变量等等。本页介绍的方法就是用来在代码里读取这些「幕后信息」的。
{% endhint %}

主要包括：

* 访问自托管（self-hosted）n8n 实例的环境变量（environment variables）。
* 关于工作流（workflows）、执行（executions）和节点（nodes）的元数据。
* 关于实例[变量（Variables）](../define-custom-variables.md)和[外部密钥（External secrets）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/use-external-secret-stores)的信息。

{% hint style="info" %}
**Python 支持**

你可以在 Code 节点（代码节点）中使用 Python，但它不能用在表达式（expressions）里。
{% endhint %}

{% tabs %}
{% tab title="JavaScript" %}
| 方法（Method） | 说明（Description） | 是否可在 Code 节点中使用？ |
| ------ | ----------- | :-------------------------: |
| `$env` | 包含 n8n 实例配置的[环境变量（environment variables）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables)。 | ✅ |
| `$execution.customData` | 设置和获取自定义执行数据。更多信息请参阅[自定义执行数据（Custom executions data）](../../understand-workflows/understand-executions/customize-executions-data.md)。 | ✅ | 
| `$execution.id` | 当前工作流执行的唯一 ID。 | ✅ |
| `$execution.mode` | 判断这次执行是自动触发的，还是手动运行工作流触发的。可能的取值是 `test`（测试，即手动运行）和 `production`（生产，即自动触发）。 | ✅ |
| `$execution.resumeUrl` | 用于恢复在 [Wait 节点（等待节点）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.wait)处等待的工作流的 Webhook URL。 | ✅ |
| `$getWorkflowStaticData(type)` | 查看[示例](../cookbook/built-in-methods-and-variables-examples/getworkflowstaticdata.md)。静态数据在测试工作流时不会保存；工作流必须发布（publish）并由触发器（trigger）或 Webhook 调用，才能保存静态数据。这个方法用于访问工作流的静态数据。 | ✅ |
| `$("<node-name>").isExecuted` | 检查某个节点是否已经执行过。 | ✅ |
| `$itemIndex` | 某个数据项在数据项列表中的索引（第几个）。 | ❌ |
| `$nodeVersion` | 获取当前节点的版本。 | ✅ |
| `$prevNode.name` | 当前输入数据来自哪个节点（该节点的名称）。使用 Merge（合并）节点时请注意：`$prevNode` 总是使用第一个输入连接器（first input connector）。 | ✅ |
| `$prevNode.outputIndex` | 当前输入数据来自前一个节点的哪个输出连接器（第几个输出）。当前一个节点有多个输出时（例如 If（条件判断）节点或 Switch（开关）节点）使用此方法。使用 Merge（合并）节点时请注意：`$prevNode` 总是使用第一个输入连接器。 | ✅ |
| `$prevNode.runIndex` | 生成当前输入数据的是前一个节点的第几次运行（run）。使用 Merge（合并）节点时请注意：`$prevNode` 总是使用第一个输入连接器。 | ✅ |
| `$runIndex` | n8n 已经执行当前节点的次数。从零开始计数（第一次运行是 0，第二次是 1，依此类推）。 | ✅ |
| `$secrets` | 包含关于你的[外部密钥（External secrets）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/use-external-secret-stores)配置的信息。 | ❌ |
| `$vars` | 包含当前环境中可用的[变量（Variables）](../define-custom-variables.md)。 | ✅ |
| `$version` | 当前节点的版本。 | ❌ |
| `$workflow.active` | 工作流是否处于激活状态（true 表示激活，false 表示未激活）。 | ✅ |
| `$workflow.id` | 工作流 ID。 | ✅ |
| `$workflow.name` | 工作流名称。 | ✅ |
{% endtab %}

{% tab title="Python (native)" %}
| 方法（Method） | 说明（Description） |
| ------ | ----------- |
| `_items` | 在「为所有数据项各运行一次（Run once for all items）」模式下，包含传入的所有数据项。 |
| `_item` | 在「为每个数据项各运行一次（Run once for each item）」模式下，包含当前正在迭代处理的那个数据项。 |
{% endtab %}

{% tab title="Python (Pyodide, deprecated)" %}
| 方法（Method） | 说明（Description） |
| ------ | ----------- |
| `_env` | 包含 n8n 实例配置的[环境变量（environment variables）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables)。 |
| `_execution.customData` | 设置和获取自定义执行数据。更多信息请参阅[自定义执行数据（Custom executions data）](../../understand-workflows/understand-executions/customize-executions-data.md)。 | 
| `_execution.id` | 当前工作流执行的唯一 ID。 | 
| `_execution.mode` | 判断这次执行是自动触发的，还是手动运行工作流触发的。可能的取值是 `test`（测试，即手动运行）和 `production`（生产，即自动触发）。 | 
| `_execution.resumeUrl` | 用于恢复在 [Wait 节点（等待节点）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.wait)处等待的工作流的 Webhook URL。 |
| `_getWorkflowStaticData(type)` | 查看[示例](../cookbook/built-in-methods-and-variables-examples/getworkflowstaticdata.md)。静态数据在测试工作流时不会保存；工作流必须发布（publish）并由触发器（trigger）或 Webhook 调用，才能保存静态数据。这个方法用于访问工作流的静态数据。 |
| `_("<node-name>").isExecuted` | 检查某个节点是否已经执行过。 |
| `_nodeVersion` | 获取当前节点的版本。 | ✅ |
| `_prevNode.name` | 当前输入数据来自哪个节点（该节点的名称）。使用 Merge（合并）节点时请注意：`_prevNode` 总是使用第一个输入连接器（first input connector）。 | 
| `_prevNode.outputIndex` | 当前输入数据来自前一个节点的哪个输出连接器（第几个输出）。当前一个节点有多个输出时（例如 If（条件判断）节点或 Switch（开关）节点）使用此方法。使用 Merge（合并）节点时请注意：`_prevNode` 总是使用第一个输入连接器。 | 
| `_prevNode.runIndex` | 生成当前输入数据的是前一个节点的第几次运行（run）。使用 Merge（合并）节点时请注意：`_prevNode` 总是使用第一个输入连接器。 |
| `_runIndex` | n8n 已经执行当前节点的次数。从零开始计数（第一次运行是 0，第二次是 1，依此类推）。 |
| `_secrets` | 包含关于你的[外部密钥（External secrets）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/use-external-secret-stores)配置的信息。 | 
| `_vars` | 包含当前环境中可用的[变量（Variables）](../define-custom-variables.md)。 | 
| `_workflow.active` | 工作流是否处于激活状态（true 表示激活，false 表示未激活）。 |
| `_workflow.id` | 工作流 ID。 | 
| `_workflow.name` | 工作流名称。 |
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话（使用技巧）**：这些方法/变量能帮你写出更「聪明」的代码。举几个常见场景：想知道当前工作流 ID？用 `$workflow.id`。想在代码里读配置好的环境变量（比如 API Key）？用 `$env.YOUR_VAR_NAME`（注意不要把密钥写死在代码里，通过环境变量读取更安全）。想判断现在是手动测试还是生产运行？用 `$execution.mode`，分别处理两种模式下的逻辑。想在多输出节点之后知道「上一步走的是哪条分支」？用 `$prevNode.outputIndex`。注意表中标 ❌ 的（如 `$itemIndex`、`$secrets`、`$version`）只能在**表达式**里使用，不能用在 Code 节点里；而带 ✅ 的既能在 Code 节点里用，也能在表达式里用。另外在 Python 中，对应的变量名把开头的 `$` 换成 `_` 即可（例如 `$execution.id` ↔ `_execution.id`）。
{% endhint %}
