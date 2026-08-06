---
nodeTitle: Workflowdata
originalFilePath: data/expression-reference/workflowdata.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/workflowdata'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/workflowdata
layout:
  description:
    visible: false
---
# WorkflowData 工作流数据 <a href="#workflowdata" id="workflowdata"></a>

{% hint style="info" %}
**大白话**：`$workflow` 给你当前工作流的基本信息——它是否处于激活状态、ID 是什么、叫什么名字。
{% endhint %}

## `$workflow`.**`active`** <a href="#dollarworkflowactive" id="dollarworkflowactive"></a>

**说明：** 该工作流是否处于激活（active）状态

**语法：** `$workflow`.`$workflow`.**`active`**

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

## `$workflow`.**`id`** <a href="#dollarworkflowid" id="dollarworkflowid"></a>

**说明：** 工作流 ID。也可以在浏览器地址栏的工作流 URL 里看到它。

**语法：** `$workflow`.`$workflow`.**`id`**

**返回：** String（字符串）

**来源：** n8n 自定义功能

## `$workflow`.**`name`** <a href="#dollarworkflowname" id="dollarworkflowname"></a>

**说明：** 工作流的名称，也就是编辑器顶部显示的那个名字

**语法：** `$workflow`.`$workflow`.**`name`**

**返回：** String（字符串）

**来源：** n8n 自定义功能
