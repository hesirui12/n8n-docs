---
title: 提示与常见问题
description: >-
  详细介绍如何针对特定使用场景进行配置，以及如何处理工作流评估（evaluations）中的常见问题。
contentType: reference
nodeTitle: Fix common issues
originalFilePath: advanced-ai/evaluations/tips-and-common-issues.md
originalUrl: 'https://docs.n8n.io/advanced-ai/evaluations/tips-and-common-issues'
url: >-
  https://docs.n8n.io/build/integrate-ai/test-and-improve-ai-workflows/fix-common-issues
layout:
  description:
    visible: false
---

# 提示与常见问题（Tips and common issues）

> 大白话：这篇文章收集了在使用 n8n 工作流评估（evaluation）功能时，你可能会遇到的各种小麻烦，以及官方的解决办法。如果你在配置评估时卡住了，先来这篇里找找答案。

## 组合多个触发器（Combining multiple triggers）

如果你的工作流里已经有一个触发器（trigger）了，那么现在你就有两个"起点"：原来的那个触发器，以及[评估触发器 evaluation trigger](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.evaluationtrigger)（专门用来驱动评估的触发器节点）。为了确保工作流无论哪个触发器执行都能正常工作，你必须把这两条分支（branch）合并到一起。

> 大白话：触发器（trigger）就是工作流的"开关"，一旦满足条件就会启动整个流程。现在你有了两个开关，但它们送出来的数据格式可能不一样。为了让后面的节点无论收到谁的数据都能正常干活，你得先把它们"整理成同一个样子"，这就是"合并分支"。

<figure>
<img src="../../.gitbook/assets/merging-trigger-branches.png" alt="">
<figcaption>把两条触发器分支合并到一起的逻辑：让它们具有相同的数据格式，这样就能被同一个节点引用。</figcaption>
</figure>

具体做法如下：

1. **拿到另一个触发器的数据格式（data format）**：
	* 执行（execute）另一个触发器。
    * 打开它，切换到它输出面板（output pane）的 JSON 视图。
    * 点击右侧的 **copy**（复制）按钮。
2. **把评估触发器的数据重新塑造成一样的格式**：
    * 在评估触发器后面插入一个 [Edit Fields (Set) 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.set)（设置字段的节点），并把它们连接起来。
    * 把它的模式（mode）改成 **JSON**。
    * 把你复制好的数据粘贴到 'JSON' 字段里，记得删掉第一行和最后一行的 `[` 和 `]`（这两个符号是数组的方括号，我们只需要里面的内容，不需要外层括号）。
    * 把字段类型（field type）切换成 **Expression**（表达式）。
    * 从输入面板（input pane）把触发器输出的数据拖拽进来，完成字段映射（mapping）。
    * 对于字符串（string，也就是文本）类型的值，记得要替换整个值（包括引号），并且在表达式末尾加上 `.toJsonString()`（这个方法会把对象转换成 JSON 格式的字符串）。

{% hint style="info" %}
**为什么要加 `.toJsonString()`？**

在 n8n 的表达式里，如果你想把一整块数据（比如一个对象）输出成"完整的 JSON 文本"，而不是只取其中某个字段的值，就需要调用 `.toJsonString()` 把对象转成字符串。不加的话，数据格式可能对不上。
{% endhint %}

3. **用 'No-op' 节点合并两条分支**：插入一个 [No-op 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.noop)（空操作节点，它不干任何事，只是把收到的数据原样传出去），然后把另一个触发器和 Set 节点都连接到它上面。'No-op' 节点只会原样输出它收到的任何输入。
4. **在后续的工作流里引用 'No-op' 节点的输出**：因为两条路径都会以相同的格式流过这个节点，所以你可以放心，你的输入数据一定会出现在这里。

> 大白话：No-op 节点就像一个"数据汇合点"，所有数据到了这里都会变成统一的格式。后面所有节点都只从这个"汇合点"取数据，就再也不用担心格式不一致的问题了。

## 避免评估功能搞坏聊天（Avoiding evaluation breaking the chat）

n8n 内置的聊天功能（internal chat）读取的是工作流中最后一个执行节点的输出数据。当你添加了使用 ['set outputs' 操作（设置输出）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.evaluation#set-outputs) 的评估节点后，这个数据可能不是你期望的格式，甚至可能根本不包含聊天的回复内容。

![Add second output branch](../../.gitbook/assets/add-second-output-branch.png)

解决办法是：从你的 agent（智能体）节点上再接出一条额外的分支（branch）。在 n8n 中，[靠下的分支会执行得更晚](../../flow-logic/understand-execution-order.md)，这意味着你接到这条分支上的任何节点都会在最后执行。你可以在这里放一个 no-op（空操作）节点，因为它只需要把 agent 的输出原样传递过去。

> 大白话：聊天功能只看"最后一个执行完的节点"输出的数据。如果不管它，评估节点就成了最后一个节点，聊天就会看到一堆评估数据而不是对话回复。解决办法是让 agent 多伸出一条"尾巴"：把 no-op 节点接在这条尾巴的末端，让它成为真正最后执行的节点，把对话回复原样送到聊天那边。这样评估和聊天互不干扰。

## 计算指标时访问工具数据（Accessing tool data when calculating metrics）

有时候你需要知道 agent 内部执行过的子节点（sub-nodes）都干了什么，比如想检查它是否真的调用过某个工具（tool）。这些节点你不能直接用表达式（expression）引用，但你可以打开 agent 的 **Return intermediate steps**（返回中间步骤）选项。开启后，agent 会多输出一个叫做 `intermediateSteps`（中间步骤）的字段，你可以在后面的节点里使用它：

![Enable return intermediate steps](../../.gitbook/assets/enable-return-intermediate-steps.png)

> 大白话：agent 在执行任务时可能会在内部调用多个工具（比如查数据库、发请求），这些内部过程就叫"中间步骤"。默认情况下，这些过程不会暴露给外面。开启这个选项后，agent 就会把每一步都记录在 `intermediateSteps` 字段里交给你，方便你在后面的节点里做质量评估。

## 同一个工作流里的多个评估（Multiple evaluations in the same workflow）

每个工作流只能设置一个评估（evaluation）。换句话说，每个工作流只能有一个评估触发器（evaluation trigger）。

即便如此，你仍然可以用不同的评估来测试工作流的不同部分：把这些部分放进[子工作流 sub-workflows](../../flow-logic/break-workflows-into-smaller-parts.md)（把一个工作流拆成多个小工作流），然后分别对每个子工作流做评估。

> 大白话：想同时测好几样东西？那就"拆家"：把要分别测试的部分各自做成一个子工作流，每个子工作流都能拥有自己的评估，互不冲突。

## 处理不稳定的结果（Dealing with inconsistent results）

指标（metrics，也就是打分）里经常会有"噪声"（noise）：即使是完全相同的同一个工作流，不同次评估跑出来的分数也可能不一样。这是因为工作流本身每次返回的结果可能不同，或者任何基于 LLM（大语言模型）的指标本身就有自然的波动。

你可以通过复制数据集（dataset）里的行来解决这个问题，让每一行在数据集中出现不止一次。因为这样一来，每个输入实际上都会被重复运行多次，波动就会被平均掉（平滑掉）。

> 大白话：AI 的答案每次可能略有不同，所以打分也会忽高忽低，这叫"噪声"。消除噪声的笨办法就是：同一道题多考几次，取平均效果。复制数据集的行，就等于让每道题多跑几遍，最后的分数会更稳定、更可信。
