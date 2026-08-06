---
title: 脏节点
description: 什么是脏节点（Dirty node），以及它们如何影响工作流的执行。
contentType: explanation
nodeTitle: 理解脏节点
originalFilePath: workflows/executions/dirty-nodes.md
originalUrl: 'https://docs.n8n.io/workflows/executions/dirty-nodes'
url: >-
  https://docs.n8n.io/build/understand-workflows/understand-executions/understand-dirty-nodes
layout:
  description:
    visible: false
---

# 脏节点 / Dirty nodes

**脏节点（dirty node）**指的是一个过去执行成功过、但现在 n8n 认为它的输出已经「过期」（stale）或不可靠的节点。给它贴上这个标签，意思是：如果这个节点再执行一次，它的输出可能会和之前不一样。它也可能是一次[部分执行（partial execution）](types-of-executions.md#partial-executions)开始的地方。

{% hint style="info" %}
**大白话**：想象你有一个自动流水线，之前每个环节都正常。后来你改了流水线的某个环节（比如换了个零件、改了设置），那它后面那些环节的「结果」就不再可信了——因为上游变了，下游的结果可能就跟着变。n8n 把这些「结果不可信」的节点标出来，提醒你：这些节点的旧数据只能参考，不能当真。
{% endhint %}

## 如何识别脏节点的数据 / How to recognize dirty node data

在工作流编辑器的画布（canvas）上，你可以通过节点的边框颜色来识别脏节点：它的边框颜色不同，而且原来显示绿色对勾（表示成功）的位置变成了一个黄色三角形。例如：

!["Image of node displayed with yellow border"](../../.gitbook/assets/dirty-node-canvas.png)

在节点编辑器视图中，输出面板上也会显示一个黄色三角形。如果把鼠标悬停在这个三角形上，会出现一个提示气泡（tooltip），告诉你 n8n 认为这份数据「过期」的原因：

!["Image of node displayed with yellow border"](../../.gitbook/assets/dirty-node-editor.png)

{% hint style="info" %}
**大白话**：记住一个口诀——「看到黄三角，数据别当真」。黄色三角形 = 这个节点的输出已经过时了，需要重新执行一遍才会恢复可信。
{% endhint %}

## 为什么 n8n 会把节点标记为脏 / Why n8n marks nodes dirty

n8n 可能因为多种原因把执行数据标记为「过期」。例如：

- 插入或删除一个节点：会把紧跟在被插入节点后面的第一个节点标记为脏。
- 修改节点参数：会把被修改的那个节点标记为脏。
- 添加一条连线（connector）：会把新连线指向的目标节点标记为脏。
- 停用（deactivate）一个节点：会把紧跟在被停用节点后面的第一个节点标记为脏。

<details>

<summary>其他会让 n8n 把节点标记为脏的情况</summary>

- 取消固定（unpin）一个节点：会把被取消固定的节点标记为脏。
- 修改已固定的数据：会把固定数据后面的那个节点标记为脏。
- 如果上面的任何操作发生在循环（loop）内部，还会把循环的第一个节点也标记为脏。

对于子节点（sub-node），当出现以下情况时，还会把已执行过的父节点（一直到根节点）也标记为脏：

- 编辑一个已执行过的子节点
- 添加一个新的子节点
- 断开或删除一个子节点
- 停用一个子节点
- 激活一个子节点

</details>

{% hint style="info" %}
**大白话**：其实规则很好理解——只要「会影响某个节点输出的东西」变了，那个节点就被标脏。连在它后面的节点也可能受影响，所以也会跟着变脏。核心思想是：n8n 宁可多标，也不让你误用旧数据。
{% endhint %}

<div class="grid cards" markdown>

-   当你在工作流中删除一个已连接的节点时：

    !["Image of node displayed with yellow border"](../../.gitbook/assets/dirty-before.png)

-   序列中的下一个节点就变成了脏节点：

    !["Image of node displayed with yellow border"](../../.gitbook/assets/dirty-after.png)

</div>

当你使用循环（loop，配合 [Loop over Items](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.splitinbatches) 节点）时，只要循环内部的任何一个节点是脏的，循环的起始节点也会被标记为脏：

!["Image of node displayed with yellow border"](../../.gitbook/assets/dirty-loop.png)

## 如何消除脏状态 / Resolving dirty nodes

只要让节点再执行一次，就能清除它的脏状态。你可以手动触发整个工作流，也可以对某个节点（或它后面的任意节点）使用 **Execute step**（执行此步）来运行一次[部分执行（partial execution）](types-of-executions.md#partial-executions)。

{% hint style="info" %}
**大白话**：让节点「重新跑一遍」就行——跑完它就有最新的输出了，黄色三角自然消失。要么一键跑整个工作流，要么只跑那一个节点（部分执行），两种都可以。
{% endhint %}
