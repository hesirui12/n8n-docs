---
title: 多分支工作流中的执行顺序
description: n8n 如何决定多分支工作流中节点的执行顺序。
contentType: explanation
nodeTitle: 理解执行顺序
originalFilePath: flow-logic/execution-order.md
originalUrl: 'https://docs.n8n.io/flow-logic/execution-order'
url: 'https://docs.n8n.io/build/flow-logic/understand-execution-order'
layout:
  description:
    visible: false
---

# 多分支工作流中的执行顺序 / Execution order in multi-branch workflows

n8n 的节点执行顺序，取决于你使用的 **n8n 版本**：

* 对于 **1.0 版本之前**创建的工作流：n8n 会先执行每个分支的第一个节点，再执行每个分支的第二个节点，以此类推。
* 对于 **1.0 版本及之后**创建的工作流：n8n 会**依次**执行每个分支，**完成一个分支后**才开始下一个分支。n8n 根据各分支在画布（canvas）上的位置[^1]来排序：从**最上面**的分支开始，**从上到下**依次执行。如果两个分支处于同一高度，则**最左边**的分支先执行。

{% hint style="info" %}
**大白话**：两种版本的区别就像「轮流做」和「一口气做完」：
- 老版本（1.0 之前）是「轮流做」：分支 A 的第 1 步 → 分支 B 的第 1 步 → 分支 A 的第 2 步 → 分支 B 的第 2 步……所有分支齐头并进。
- 新版本（1.0 及以上）是「一口气做完」：先把分支 A 从头到尾全部做完，再开始分支 B。
- 新版本里，分支执行的先后顺序由「画布上的位置」决定：谁画得高谁先跑；同样高就左边先跑。所以如果你想控制顺序，把分支往上拖、往左放就行。
{% endhint %}

你可以在[工作流设置（workflow settings）](../manage-workflows/configure-workflow-settings.md)中更改执行顺序。

{% hint style="info" %}
**大白话**：如果默认顺序不符合你的需求（比如你希望右边的分支先执行），不用重画工作流——打开工作流设置，里面有一个「执行顺序」相关的选项，可以直接切换成你想要的模式。注意：执行顺序影响的是节点运行的先后，不影响工作流最终的结果是否正确（只要各分支之间没有依赖关系）。
{% endhint %}

[^1]: 画布（canvas）是 n8n 编辑器界面中用来构建工作流的主要界面。你可以在画布上添加节点、把节点连接起来，从而组成完整的工作流。
