---
nodeTitle: Prevnodedata
originalFilePath: data/expression-reference/prevnodedata.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/prevnodedata'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/prevnodedata
layout:
  description:
    visible: false
---
# PrevNodeData 上一个节点数据 <a href="#prevnodedata" id="prevnodedata"></a>

{% hint style="info" %}
**大白话**：`$prevNode` 告诉你当前输入来自哪个节点：`name` 是节点名、`outputIndex` 是它第几个输出口、`runIndex` 是它的第几次运行。节点有多个输入口时，永远取第一个。
{% endhint %}

## **`name`** <a href="#name" id="name"></a>

**说明：** 当前输入来自的节点名称。

如果当前节点有多个输入连接（例如在「Merge（合并）」节点里），则始终使用第一个输入连接。

**语法：** **`name`**

**返回：** String（字符串）

**来源：** n8n 自定义功能

## **`outputIndex`** <a href="#outputindex" id="outputindex"></a>

**说明：** 当前输入来自的输出连接（output connector）的索引。当前一个节点有多个输出（例如「If（如果）」或「Switch（切换）」节点）时使用它。

如果当前节点有多个输入连接（例如在「Merge（合并）」节点里），则始终使用第一个输入连接。

**语法：** **`outputIndex`**

**返回：** Number（数字）

**来源：** n8n 自定义功能

## **`runIndex`** <a href="#runindex" id="runindex"></a>

**说明：** 产生当前输入的上一个节点的运行（run）次数索引。

如果当前节点有多个输入连接（例如在「Merge（合并）」节点里），则始终使用第一个输入连接。

**语法：** **`runIndex`**

**返回：** Number（数字）

**来源：** n8n 自定义功能
