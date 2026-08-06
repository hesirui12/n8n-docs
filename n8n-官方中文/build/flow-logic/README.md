---
title: 流程逻辑
description: 如何在 n8n 工作流中表达逻辑。
contentType: overview
nodeTitle: 流程逻辑
originalFilePath: flow-logic/index.md
originalUrl: 'https://docs.n8n.io/flow-logic'
url: 'https://docs.n8n.io/build/'
layout:
  description:
    visible: false
---

# 流程逻辑 / Flow logic

n8n 允许你在工作流（workflow）里表达复杂的逻辑。

{% hint style="info" %}
**大白话**：这一章讲的是「怎么让工作流有脑子」——比如根据条件走不同的分支（IF / Switch）、把两路数据合并、循环处理一批数据、等待一段时间、调用子工作流、出错时怎么处理。学会这些，你的工作流就不只是「一条直线跑到底」了。
{% endhint %}

## 相关章节 / Related sections

你需要先对 n8n 中的[数据](../work-with-data/overview.md)有一定了解，包括[数据结构](../work-with-data/understand-n8ns-data-structure.md)和[节点内的数据流动](../work-with-data/understand-n8ns-data-structure.md#how-data-flows-within-nodes)。

在搭建你的逻辑时，你会用到 n8n 的[核心节点（Core nodes）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes)，包括：

* 拆分（Splitting）：[IF](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.if)（如果，二选一）和 [Switch](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.switch)（开关，多选一）。
* 合并（Merging）：[Merge](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.merge)（合并）、[Compare Datasets](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.comparedatasets)（比较数据集）和 [Code](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.code)（代码）。
* 循环（Looping）：[IF](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.if) 和 [Loop Over Items](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.splitinbatches)（循环遍历数据项）。
* 等待（Waiting）：[Wait](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.wait)（等待）。
* 创建子工作流（Creating sub-workflows）：[Execute Workflow](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.executeworkflow)（执行工作流）和 [Execute Workflow Trigger](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger)（执行工作流触发器）。
* 错误处理（Error handling）：[Stop And Error](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.stopanderror)（停止并报错）和 [Error Trigger](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.errortrigger)（错误触发器）。
