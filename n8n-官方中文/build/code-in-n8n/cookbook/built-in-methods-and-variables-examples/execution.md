---
contentType: reference
nodeTitle: execution
originalFilePath: code/cookbook/builtin/execution.md
originalUrl: 'https://docs.n8n.io/code/cookbook/builtin/execution'
url: >-
  https://docs.n8n.io/build/code-in-n8n/cookbook/built-in-methods-and-variables-examples/execution
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话：** `$execution` 是 n8n 内置的「本次运行」信息对象，记录当前这次工作流执行的独有 ID（`execution.id`）、等待恢复用的回调地址（`execution.resumeUrl`），以及你自定义的执行数据（`execution.customData`）。其中 `customData` 只能在 Code 节点里用。
{% endhint %}

# `execution` <a href="#execution" id="execution"></a>

## `execution.id` <a href="#executionid" id="executionid"></a>

包含当前这次工作流执行的独有 ID。

{% tabs %}
{% tab title="JavaScript" %}
```js
let executionId = $execution.id;
```
{% endtab %}

{% tab title="Python" %}
```python
executionId = _execution.id
```
{% endtab %}
{% endtabs %}

## `execution.resumeUrl` <a href="#executionresumeurl" id="executionresumeurl"></a>

用于恢复[等待中（waiting）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.wait)工作流的 Webhook 回调地址。

更多信息参见 [Wait > On webhook call](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.wait#on-webhook-call) 文档。

`execution.resumeUrl` 在包含 Wait 节点（以及等待 Webhook 响应的节点）的工作流中可用。

## `execution.customData` <a href="#executioncustomdata" id="executioncustomdata"></a>

该属性只能在 Code 节点中使用。

{% tabs %}
{% tab title="JavaScript" %}
```js
// Set a single piece of custom execution data
$execution.customData.set("key", "value");

// Set the custom execution data object
$execution.customData.setAll({"key1": "value1", "key2": "value2"})

// Access the current state of the object during the execution
var customData = $execution.customData.getAll()

// Access a specific value set during this execution
var customData = $execution.customData.get("key")
```
{% endtab %}

{% tab title="Python" %}
```python
# Set a single piece of custom execution data
_execution.customData.set("key", "value");

# Set the custom execution data object
_execution.customData.setAll({"key1": "value1", "key2": "value2"})

# Access the current state of the object during the execution
customData = _execution.customData.getAll()

# Access a specific value set during this execution
customData = _execution.customData.get("key")
```
{% endtab %}
{% endtabs %}

更多信息参见 [自定义执行数据](../../../understand-workflows/understand-executions/customize-executions-data.md)。

---


