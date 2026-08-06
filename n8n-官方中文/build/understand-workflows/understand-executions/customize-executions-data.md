---
description: >-
  使用代码节点（Code node）为你的工作流执行添加自定义数据，之后还可以用这些数据来筛选执行记录。
contentType: howto
nodeTitle: 自定义执行数据
originalFilePath: workflows/executions/custom-executions-data.md
originalUrl: 'https://docs.n8n.io/workflows/executions/custom-executions-data'
url: >-
  https://docs.n8n.io/build/understand-workflows/understand-executions/customize-executions-data
layout:
  description:
    visible: false
---

# 自定义执行数据 / Custom executions data

你可以使用代码节点（Code node）或[执行数据节点（Execution Data node）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.executiondata)来给工作流设置自定义数据。n8n 会把这份数据连同每次执行一起记录下来。之后你可以用这些数据来筛选执行记录列表，或者在工作流里用代码节点（Code node）把它取出来。

{% hint style="info" %}
**大白话**：这就像给每次「执行」贴一张便利贴——你可以写上任意想记录的信息（比如「这次是哪个用户触发的」「这次处理了哪个订单」）。以后翻执行记录的时候，就能按便利贴上的内容快速筛选，找出你想要的那次执行。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/hEbJHXcEBce6m2wEE65f/" %}

## 用代码节点（Code node）设置和读取自定义数据 / Set and access custom data using the Code node

这一节介绍如何使用代码节点（Code node）设置和读取数据。关于用执行数据节点（Execution Data node）设置数据，请参考[执行数据节点（Execution Data node）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.executiondata)的文档。注意：你**不能**用执行数据节点（Execution Data node）来读取自定义数据。

{% hint style="info" %}
**大白话**：简单分工——想「写」（设置）自定义数据，用代码节点或执行数据节点都行；想「读」（取出）自定义数据，只能用代码节点。
{% endhint %}

### 设置自定义执行数据 / Set custom executions data

设置一条额外的数据：

{% tabs %}
{% tab title="JavaScript" %}
```js
$execution.customData.set("key", "value");
```
{% endtab %}

{% tab title="Python" %}
```python
_execution.customData.set("key", "value");
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：`set("key", "value")` 就是「存一个键值对」。`key` 相当于数据的名字（比如 `"userId"`），`value` 是它对应的内容（比如 `"12345"`）。`$execution.customData`（JavaScript 版）或 `_execution.customData`（Python 版）就是这份自定义数据的「储物柜」。
{% endhint %}

一次性设置所有额外数据。这会**覆盖（overwrite）**这次执行中整个自定义数据对象：

{% tabs %}
{% tab title="JavaScript" %}
```js
$execution.customData.setAll({"key1": "value1", "key2": "value2"})
```
{% endtab %}

{% tab title="Python" %}
```python
_execution.customData.setAll({"key1": "value1", "key2": "value2"})
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：`set` 是「往储物柜里放一件东西」，`setAll` 是「清空储物柜，然后把一整套东西全部放进去」。注意 `setAll` 会把之前存的所有自定义数据整个替换掉，不只是加几条。
{% endhint %}

存在一些限制：

* 数据必须是字符串（strings）
* `key`（键名）最长 50 个字符
* `value`（键值）最长 255 个字符
* 每次执行最多支持 10 条自定义数据

{% hint style="info" %}
**大白话**：存数据不是无限存——键名别超过 50 个字、内容别超过 255 个字，而且最多只能存 10 条。存之前先规划好要记哪些关键信息，别把整段日志都塞进去。
{% endhint %}

### 在执行过程中读取自定义数据对象 / Access the custom data object during execution

你可以在执行过程中取出整个自定义数据对象，或者取出其中的某一个值：

{% tabs %}
{% tab title="JavaScript" %}
```js
// Access the current state of the object during the execution
const customData = $execution.customData.getAll();

// Access a specific value set during this execution
const customData = $execution.customData.get("key");
```
{% endtab %}

{% tab title="Python" %}
```python
# Access the current state of the object during the execution
customData = _execution.customData.getAll();

# Access a specific value set during this execution
customData = _execution.customData.get("key");
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：`getAll()` 把储物柜里的东西全部拿出来（一个包含所有键值对的对象）；`get("key")` 只拿指定名字的那一条。一个「全量取回」，一个「按名字精确取」，按需选择。
{% endhint %}
