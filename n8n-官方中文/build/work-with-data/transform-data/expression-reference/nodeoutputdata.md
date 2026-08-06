---
nodeTitle: Nodeoutputdata
originalFilePath: data/expression-reference/nodeoutputdata.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/nodeoutputdata'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/nodeoutputdata
layout:
  description:
    visible: false
---
# NodeOutputData 节点输出数据 <a href="#nodeoutputdata" id="nodeoutputdata"></a>

{% hint style="info" %}
**大白话**：`$('节点名')` 用来取指定节点输出的数据：`all()` 全部、`first()`/`last()` 第一条/最后一条、`item`/`itemMatching()` 找与本节点匹配的那条、`isExecuted` 看它有没有运行过、`params` 看它的配置。
{% endhint %}

## `$()`.**`all()`** <a href="#dollarall" id="dollarall"></a>

**说明：** 返回该节点的全部输出数据项（item）数组

**语法：** `$()`.all(branchIndex?, runIndex?)

**返回：** Array<Item>

**来源：** n8n 自定义功能

**参数：**

  * `branchIndex` (Number) - 可选 - 要使用的节点输出分支。默认使用第一个分支（索引 0）
  * `runIndex` (Number) - 可选 - 要使用的节点运行（run）索引。默认使用第一次运行（索引 0）

## `$()`.**`first()`** <a href="#dollarfirst" id="dollarfirst"></a>

**说明：** 返回该节点输出的第一条数据项

**语法：** `$()`.first(branchIndex?, runIndex?)

**返回：** Item

**来源：** n8n 自定义功能

**参数：**

  * `branchIndex` (Number) - 可选 - 要使用的节点输出分支。默认使用第一个分支（索引 0）
  * `runIndex` (Number) - 可选 - 要使用的节点运行（run）索引。默认使用第一次运行（索引 0）

## `$()`.**`isExecuted`** <a href="#dollarisexecuted" id="dollarisexecuted"></a>

**说明：** 如果该节点已经执行过则为 <code>true</code>，否则为 <code>false</code>

**语法：** `$()`.`$()`.**`isExecuted`**

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

## `$()`.**`item`** <a href="#dollaritem" id="dollaritem"></a>

**说明：** 返回匹配的那条数据项，也就是用来产生当前节点当前数据项的那条。 <a href="../../reference-data/link-data-items/README.md">更多信息</a>

**语法：** `$()`.`$()`.**`item`**

**返回：** Item

**来源：** n8n 自定义功能

## `$()`.**`itemMatching()`** <a href="#dollaritemmatching" id="dollaritemmatching"></a>

**说明：** 返回匹配的那条数据项，也就是用来产生当前节点指定索引处数据项的那条。 <a href="../../reference-data/link-data-items/README.md">更多信息</a>

**语法：** `$()`.itemMatching(currentItemIndex?)

**返回：** Item

**来源：** n8n 自定义功能

**参数：**

  * `currentItemIndex` (Number) - 当前节点中要匹配的数据项的索引。

## `$()`.**`last()`** <a href="#dollarlast" id="dollarlast"></a>

**说明：** 返回该节点输出的最后一条数据项

**语法：** `$()`.last(branchIndex?, runIndex?)

**返回：** Item

**来源：** n8n 自定义功能

**参数：**

  * `branchIndex` (Number) - 可选 - 要使用的节点输出分支。默认使用第一个分支（索引 0）
  * `runIndex` (Number) - 可选 - 要使用的节点运行（run）索引。默认使用第一次运行（索引 0）

## `$()`.**`params`** <a href="#dollarparams" id="dollarparams"></a>

**说明：** 指定节点的配置设置。也就是你在节点 UI 里填写的那些参数（例如它的 operation 操作类型）。

**语法：** `$()`.`$()`.**`params`**

**返回：** NodeParams

**来源：** n8n 自定义功能
