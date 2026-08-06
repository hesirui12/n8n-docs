---
contentType: howto
description: 合并你 n8n 工作流中的数据流。
nodeTitle: Merge data
originalFilePath: flow-logic/merging.md
originalUrl: 'https://docs.n8n.io/flow-logic/merging'
url: 'https://docs.n8n.io/build/flow-logic/merge-data'
layout:
  description:
    visible: false
---

# 合并数据（Merging data）

合并（Merging）就是把多条数据流汇合到一起。根据你的工作流需求不同，可以使用不同的节点来实现。

- 合并来自不同数据流或不同节点的数据：使用 [Merge](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.merge)（合并）节点，把来自多个来源的数据组合成一个。
- 合并来自「多次节点执行」的数据：使用 [Code](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.code)（代码）节点，适用于比较复杂的情况——比如需要合并同一个节点多次执行的结果，或者合并多个节点执行的结果。
- 比较并合并数据：使用 [Compare Datasets](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.comparedatasets)（比较数据集）节点，先比较、再合并，并根据比较结果输出数据流。

想更详细地了解每种方法，请看下面的各个小节。

{% hint style="info" %}
**大白话解释：什么是「数据流」？**

你可以把数据流想象成一条「传送带」，上面放着一行一行的数据。合并数据流，就是把几条传送带上的数据汇到一条传送带上（或者做各种组合处理）。
{% endhint %}

## 合并来自不同数据流的数据（Merge data from different data streams）

如果你的工作流[进行了分流](split-with-conditionals.md)（比如用条件把数据分成了几路），你可以用合并把这几路数据重新汇合成一路。

这里有一个[示例工作流](https://n8n.io/workflows/1747-joining-different-datasets/)，展示了不同类型的合并方式：追加（append）数据集、只保留新数据项、只保留已存在的数据项。[Merge 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.merge)的文档里有每种合并操作的详细介绍。

{% @n8n-blocks/n8n-workflow-demo content="" url="https://api.n8n.io/workflows/templates/1747" %}

{% hint style="info" %}
**大白话解释：追加、只保留新项、只保留已存在项的区别**

假设你有一份「本地已有客户名单」，又从网上同步了一份「最新客户名单」：
- 追加（Append）：把两份名单直接首尾相连拼在一起，不去重。
- 只保留新项（Keep Only New Items）：只留下「最新名单里有、但本地名单里没有」的客户。
- 只保留已存在项（Keep Only Existing Items）：只留下两边名单里都有的客户（常用于找出双方重叠的部分）。
{% endhint %}

## 合并来自不同节点的数据（Merge data from different nodes）

你还可以用 Merge 节点来合并「两个前面的节点」输出的数据——即使你的工作流并没有分流成多个数据流。当你希望把多个节点各自生成的数据，组合成一个完整的数据集时，这个方法很有用。

<figure>
<img src="../.gitbook/assets/merge-node-data.png" alt="">
<figcaption>合并来自两个前面节点的数据（Merging data from two previous nodes）</figcaption>
</figure>

## 合并来自多次节点执行的数据（Merge data from multiple node executions）

使用 Code 节点来合并「同一节点多次执行」产生的数据。这在某些[循环](loop.md)场景中非常有用。

{% hint style="info" %}
**节点执行 与 工作流执行（Node executions and workflow executions）**

本节讲的是「合并来自多次节点执行的数据」。这里的「多次节点执行」指的是：在**一次**工作流执行的过程中，某个节点被**重复执行了多次**。
{% endhint %}

请参考这个[示例工作流](https://n8n.io/workflows/1814-merge-multiple-runs-into-one/)，它使用 Loop Over Items 和 Wait 节点，人为地制造了多次执行。

{% @n8n-blocks/n8n-workflow-demo content="" url="https://api.n8n.io/workflows/templates/1814" %}

{% hint style="info" %}
**大白话解释：为什么要人为制造「多次执行」？**

正常情况下，一个节点在一次工作流运行中可能只执行一次，这样你就拿不到「多次执行的结果」。示例工作流里用循环让节点跑好几遍，再用 Wait 让每遍之间隔开，然后就能演示如何把这几遍的结果合并到一块儿了。
{% endhint %}

## 比较、合并、再分流（Compare, merge, and split again）

[Compare Datasets](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.comparedatasets)（比较数据集）节点会在合并之前先比较数据流。它会输出最多四个不同的数据流。

{% hint style="info" %}
**大白话解释：为什么最多输出 4 个数据流？**

Compare Datasets 会把两个数据流的数据按「匹配/不匹配」拆开：可能分出「只有左边独有的」「只有右边独有的」「两边都有的」等组合。所以最多会有 4 种结果分流，方便你针对不同情况分别处理。
{% endhint %}

可以参考这个[示例工作流](https://n8n.io/workflows/1943-comparing-data-with-the-compare-datasets-node/)。

{% @n8n-blocks/n8n-workflow-demo content="" url="https://api.n8n.io/workflows/templates/1943" %}
