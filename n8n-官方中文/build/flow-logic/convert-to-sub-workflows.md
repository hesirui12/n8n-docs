---
title: 子工作流转换
description: 选中工作流中的节点，把它们转换成子工作流。
contentType: howto
nodeTitle: 转换成子工作流
originalFilePath: workflows/subworkflow-conversion.md
originalUrl: 'https://docs.n8n.io/workflows/subworkflow-conversion'
url: 'https://docs.n8n.io/build/flow-logic/convert-to-sub-workflows'
layout:
  description:
    visible: false
---

# 子工作流转换 / Sub-workflow conversion

{% hint style="info" %}
**功能可用性（Feature availability）**

从 n8n 1.97.0 版本起，所有套餐（plans）都可用。
{% endhint %}

{% hint style="info" %}
**大白话**：「子工作流转换」是 n8n 提供的「一键重构」功能：你选中现有工作流里的某几个节点，点一下按钮，它们就会被自动变成一个独立的子工作流。你不需要手动复制粘贴、重新连线，n8n 会帮你把「搬家」的活干完。
{% endhint %}

使用子工作流转换功能，可以把你的工作流重构（refactor）成可复用的组成部分。引用其他节点的表达式（expressions）会被**自动更新**，并作为参数自动添加到 [Execute Sub-workflow Trigger（执行子工作流触发器）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger)节点中。

{% hint style="info" %}
**大白话**：假设原工作流里某个节点写过 `{{ $json.orderId }}`，引用的是前一个节点的数据。转换后，这个引用并不会失效——n8n 会自动把「被引用的那个值」变成子工作流的入参（parameter），挂在 `Execute Sub-workflow Trigger` 节点上，子工作流内部再用这个入参。整个过程自动完成，你不用手动改表达式。
{% endhint %}

关于子工作流概念的总体介绍，请参阅[子工作流（Sub-workflows）](break-workflows-into-smaller-parts.md)。

## 为子工作流选择节点 / Selecting nodes for a sub-workflow

要把工作流的一部分转换成子工作流，你必须先在原工作流中选中你想转换的那些节点。

做法是：在画布（canvas）上选中一组「合法」的节点。选择必须是**连续的（continuous）**，并且与工作流其余部分的连接最多只能有**一个起点节点（start node）**和**一个终点节点（end node）**。选择必须满足以下条件：

{% hint style="info" %}
**大白话**：一句话概括——你选中的这一串节点必须像「一节火车车厢」：前后各只有一个「车门」和外部相连。如果选中的部分有多个入口、多个出口，或者中间断开了，n8n 就不知道从哪里开始、到哪里结束，转换就会失败。
{% endhint %}

- 不能包含触发器节点（trigger nodes）。
- 选中范围内只能有**一个**节点，接收来自选中范围**外部**节点的传入连接（incoming connections）。
	- 这个节点可以有多个传入连接，但只能有一个传入**分支（branch）**（比如它**不能**是 [Merge（合并）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.merge)节点）。
	- 这个节点不能接收来自选中范围内**其他**节点的传入连接。
- 选中范围内只能有**一个**节点，拥有指向选中范围**外部**节点的传出连接（outgoing connections）。
	- 这个节点可以有多个传出连接，但只能有一个传出分支（它**不能**是 [If（如果）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.if)节点这样的多分支节点）。
	- 这个节点不能有指向选中范围内**其他**节点的传出连接。
- 选中范围必须包含输入节点和输出节点之间的**所有**节点。

{% hint style="info" %}
**大白话**：为什么要这么多限制？因为 n8n 需要保证：转换后「入口在哪、出口在哪」是唯一明确的。如果中间漏了某个节点，或者入口/出口有两个，转换出来的子工作流就说不清楚该接收谁的数据、把结果送给谁。至于「不能是 Merge / If 这类节点」，是因为它们天生有多个输入/输出分支，会让「唯一入口/出口」的条件不成立。
{% endhint %}

## 如何把工作流的一部分转换成子工作流 / How to convert part of a workflow to a sub-workflow

在画布（canvas）上选中你想要的节点。右键点击画布空白处，选择 **Convert to sub-workflow（转换为子工作流）**。

{% hint style="info" %}
**大白话**：操作流程非常简单：先用鼠标框选（或按住 Shift / Ctrl 逐个点选）你要的节点 → 在画布空白处点右键 → 点击菜单里的「转换为子工作流」。n8n 会立刻把选中的节点打包成一个新的子工作流，并在原来的位置放一个 `Execute Workflow`（执行工作流）节点来调用它。
{% endhint %}

## 需要记住的事项 / Things to keep in mind

大多数子工作流转换都能顺利完成，不需要额外操作，但也有一些注意事项和限制需要记住：

{% hint style="info" %}
**大白话**：这一节是「避坑指南」。转换通常很顺利，但在某些特殊情况下（比如 AI 节点、类型约束、访问函数），你需要手动做一点调整，否则转换后的子工作流可能行为不符合预期。
{% endhint %}

* **你必须手动设置输入和输出的类型约束（type constraints）**：默认情况下，子工作流的输入和输出允许所有类型。你可以在子工作流的 [Execute Sub-workflow Trigger（执行子工作流触发器）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger)节点和 [Edit Fields (set)（编辑字段）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.set)节点中设置期望的类型（这个节点标注为 **Return（返回）**，并且只有子工作流有输出时才会被包含进来）。
* **对 AI 节点的支持有限（Limited support for AI nodes）**：当涉及 AI 工具这类子节点（sub-nodes）时，你必须把它们**全部选中**，而且在转换之前，可能需要复制（duplicate）那些与其他 AI Agent 共享的节点。
- **使用 v1 执行顺序（v1 execution ordering）**：新创建的工作流使用 [`v1` 执行顺序](understand-execution-order.md)，**不管**父工作流（parent workflow）的设置是什么——如果你想改回去，可以在设置里改。
* **`first()`、`last()`、`all()` 这类访问函数（accessor functions）需要格外小心**：使用这些函数的表达式不一定能干净利落地转换到子工作流的语境中。n8n 可能会对它们进行转换（transform），以尽量保留原有功能，但你**应该自行检查**它们在新语境中是否按预期工作。<br>

	<div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>子节点参数后缀（Sub-node parameter suffixes）</strong></p><p>n8n 会为这些函数访问的变量名添加类似 <code>_firstItem</code>、<code>_lastItem</code>、<code>_allItems</code> 的后缀。这有助于保留关于原始表达式的信息，因为在子工作流的语境中，数据项的排列顺序（item ordering）可能不同。</p></div>

{% hint style="info" %}
**大白话**：`first()` 意思是「拿第一条数据」，`last()` 是「拿最后一条」，`all()` 是「全部都要」。转换时 n8n 会自动改这些表达式、给变量名加上 `_firstItem` 之类的后缀，好让它们在子工作流里还能用。但因为子工作流里数据的顺序可能和原来不一样，改完之后你最好跑一次、亲眼确认结果对不对，别想当然。
{% endhint %}

* **`itemMatching` 函数需要一个固定的索引（fixed index）**：使用 [`itemMatching` 函数](../work-with-data/reference-data/reference-previous-nodes.md)时，你不能用表达式（expressions）作为索引值，必须传给它一个固定数字。

{% hint style="info" %}
**大白话**：`itemMatching` 的作用是「按条件从某批数据里精确匹配出一条」。它要求你直接写死一个数字（比如 `itemMatching(3)`），不能写 `itemMatching($json.someNumber)` 这种动态表达式。原因是在子工作流语境中，动态计算出来的索引位置可能不可靠，n8n 索性要求你写死。
{% endhint %}
