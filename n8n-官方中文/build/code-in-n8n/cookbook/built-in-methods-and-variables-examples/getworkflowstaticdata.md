---
tags:
  - static data
  - global variables
hide:
  - tags
contentType: reference
nodeTitle: getWorkflowStaticData
originalFilePath: code/cookbook/builtin/get-workflow-static-data.md
originalUrl: 'https://docs.n8n.io/code/cookbook/builtin/get-workflow-static-data'
url: >-
  https://docs.n8n.io/build/code-in-n8n/cookbook/built-in-methods-and-variables-examples/getworkflowstaticdata
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话：** `$getWorkflowStaticData('global'/'node')` 让你把「少量数据」直接存进工作流本身，下次运行还能再读出来。常用于记住「上次处理到哪一条了」。注意：测试模式下不保存数据；数据要小；高频运行可能不太稳定。
{% endhint %}

# `getWorkflowStaticData(type)` <a href="#getworkflowstaticdatatype" id="getworkflowstaticdatatype"></a>

这个方法可以访问工作流的静态数据。

{% hint style="info" %}
**实验性功能**

- 测试工作流时静态数据不可用。工作流必须发布（published）并被触发器[^1]或 Webhook 调用，才能保存静态数据。
- 在高频执行工作流时，此功能可能表现不稳定。
{% endhint %}

你可以直接把数据存到工作流里。注意数据要小。

举个例子：你可以保存「上一次处理到哪一条」的时间戳，比如来自 RSS 源或数据库的数据。它总是返回一个对象。你可以对该对象上的属性进行读取、删除或设置。当工作流执行成功时，n8n 会自动检查数据是否发生了变化，并在需要时保存。

静态数据有两种类型：全局（global）和节点（node）。全局静态数据在整个工作流中都是同一个，工作流里的每个节点都能访问它。节点静态数据是某个节点独有的，只有设置它的那个节点才能再次取回。

全局数据示例：

{% tabs %}
{% tab title="JavaScript" %}
```javascript
// Get the global workflow static data
const workflowStaticData = $getWorkflowStaticData('global');

// Access its data
const lastExecution = workflowStaticData.lastExecution;

// Update its data
workflowStaticData.lastExecution = new Date().getTime();

// Delete data
delete workflowStaticData.lastExecution;
```
{% endtab %}

{% tab title="Python" %}
```python
# Get the global workflow static data
workflowStaticData = _getWorkflowStaticData('global')

# Access its data
lastExecution = workflowStaticData.lastExecution

# Update its data
workflowStaticData.lastExecution = new Date().getTime()

# Delete data
delete workflowStaticData.lastExecution
```
{% endtab %}
{% endtabs %}

节点数据示例：

{% tabs %}
{% tab title="JavaScript" %}
```js
// Get the static data of the node
const nodeStaticData = $getWorkflowStaticData('node');

// Access its data
const lastExecution = nodeStaticData.lastExecution;

// Update its data
nodeStaticData.lastExecution = new Date().getTime();

// Delete data
delete nodeStaticData.lastExecution;
```
{% endtab %}

{% tab title="Python" %}
```python
# Get the static data of the node
nodeStaticData = _getWorkflowStaticData('node')

# Access its data
lastExecution = nodeStaticData.lastExecution

# Update its data
nodeStaticData.lastExecution = new Date().getTime()

# Delete data
delete nodeStaticData.lastExecution
```
{% endtab %}
{% endtabs %}

## 模板和示例 <a href="#templates-and-examples" id="templates-and-examples"></a>

{% @n8n-blocks/n8n-workflow-demo content="" url="https://api.n8n.io/workflows/templates/2538" %}

[^1]: 触发器节点是一种特殊节点，负责在满足特定条件时执行工作流。所有生产环境的工作流至少需要一个触发器，用来决定工作流什么时候该运行。
