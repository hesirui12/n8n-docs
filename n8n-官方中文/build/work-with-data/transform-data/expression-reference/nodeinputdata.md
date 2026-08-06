---
nodeTitle: Nodeinputdata
originalFilePath: data/expression-reference/nodeinputdata.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/nodeinputdata'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/nodeinputdata
layout:
  description:
    visible: false
---
# NodeInputData 节点输入数据 <a href="#nodeinputdata" id="nodeinputdata"></a>

{% hint style="info" %}
**大白话**：`$input` 是当前节点收到的输入：`all()` 拿全部数据项、`first()`/`last()` 拿第一条/最后一条、`item` 拿正在处理的那条、`params` 拿节点自己的配置。
{% endhint %}

## `$input`.**`all()`** <a href="#dollarinputall" id="dollarinputall"></a>

**说明：** 返回当前节点的全部输入数据项（item）数组

**语法：** `$input`.all(branchIndex?, runIndex?)

**返回：** Array<Item>

**来源：** n8n 自定义功能

**参数：**

  * `branchIndex` (Number) - 可选 - 要使用的节点输出分支索引。默认使用第一个分支（索引 0）
  * `runIndex` (Number) - 可选 - 要使用的节点运行（run）索引。默认使用第一次运行（索引 0）

## `$input`.**`first()`** <a href="#dollarinputfirst" id="dollarinputfirst"></a>

**说明：** 返回当前节点的第一条输入数据项

**语法：** `$input`.first(branchIndex?, runIndex?)

**返回：** Item

**来源：** n8n 自定义功能

**参数：**

  * `branchIndex` (Number) - 可选 - 要使用的节点输出分支索引。默认使用第一个分支（索引 0）
  * `runIndex` (Number) - 可选 - 要使用的节点运行（run）索引。默认使用第一次运行（索引 0）

## `$input`.**`item`** <a href="#dollarinputitem" id="dollarinputitem"></a>

**说明：** 返回当前正在处理的那条输入数据项

**语法：** `$input`.`$input`.**`item`**

**返回：** Item

**来源：** n8n 自定义功能

## `$input`.**`last()`** <a href="#dollarinputlast" id="dollarinputlast"></a>

**说明：** 返回当前节点的最后一条输入数据项

**语法：** `$input`.last(branchIndex?, runIndex?)

**返回：** Item

**来源：** n8n 自定义功能

**参数：**

  * `branchIndex` (Number) - 可选 - 要使用的节点输出分支索引。默认使用第一个分支（索引 0）
  * `runIndex` (Number) - 可选 - 要使用的节点运行（run）索引。默认使用第一次运行（索引 0）

## `$input`.**`params`** <a href="#dollarinputparams" id="dollarinputparams"></a>

**说明：** 当前节点的配置设置。也就是你在配置节点时填写的那些参数（例如它的 operation 操作类型）。

**语法：** `$input`.`$input`.**`params`**

**返回：** NodeParams

**来源：** n8n 自定义功能
