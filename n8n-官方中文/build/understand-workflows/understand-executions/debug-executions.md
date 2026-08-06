---
contentType: howto
title: 调试并重新运行过去的执行
description: >-
  如何把过去某次执行（Execution）的数据复制到当前工作流中，用来调试之前失败的执行。
nodeTitle: 调试执行
originalFilePath: workflows/executions/debug.md
originalUrl: 'https://docs.n8n.io/workflows/executions/debug'
url: >-
  https://docs.n8n.io/build/understand-workflows/understand-executions/debug-executions
layout:
  description:
    visible: false
---

# 调试并重新运行过去的执行 / Debug and re-run past executions

{% hint style="info" %}
**功能可用性**

在 n8n 云版（Cloud）和已注册的社区版（Community）套餐中可用。
{% endhint %}

你可以把过去某一次执行（Execution）[^1] 的数据加载到当前的工作流里。这在调试生产环境（production）里失败的执行时非常有用：你可以先看看那次失败的执行，然后修改工作流把它修好，再用之前那次执行的数据重新运行一遍。

{% hint style="info" %}
**大白话**：简单说，就是「把上次跑出问题的数据原样搬回来，再修修补补重跑一遍」。不用重新构造数据，也不用靠猜，直接用真实的生产数据来复现问题、验证修复是否有效。
{% endhint %}

## 加载数据 / Load data

要把过去某次执行的数据加载进来，步骤如下：

1. 在工作流中，点击 **Executions**（执行记录）标签页，查看**执行记录列表**。
1. 选择你想要调试的那次执行。n8n 会根据这次执行是成功还是失败，显示不同的选项：
	* 对于失败的执行：选择 **Debug in editor**（在编辑器中调试）。
	* 对于成功的执行：选择 **Copy to editor**（复制到编辑器）。
1. n8n 会把这次执行的数据复制到当前工作流中，并[把数据固定（pin）](../../work-with-data/pin-and-mock-data.md)在工作流中的第一个节点上。

{% hint style="info" %}
**大白话**：第 3 步里的「固定（pin）」可以理解为「把数据钉在节点上」——这些数据会被当成该节点的输出存下来，工作流运行时直接使用这份固定的数据，不会重新执行这个节点去取新数据。这样你就能安心地在它后面的节点上做调试。
{% endhint %}

{% hint style="info" %}
**检查你会保存哪些执行记录**

**Executions**（执行记录）列表上能看到哪些执行，取决于你的[工作流设置](../../manage-workflows/configure-workflow-settings.md)。
{% endhint %}

[^1]: 执行（Execution）是工作流被触发后的一次完整运行过程，包括从触发开始到最后一个节点结束的所有数据处理。n8n 会记录每次执行的结果，方便你之后查看和调试。
