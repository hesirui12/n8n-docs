---
description: 手动、部分和自动执行工作流有什么不同。
---

# 手动、部分和生产执行 / Manual, partial, and production executions

n8n 执行工作流有两种方式，它们在行为上有一些重要区别：一种是**手动**执行——你点击 **Execute Workflow**（执行工作流）按钮来运行；另一种是**自动**执行——工作流已经**发布（published）**，由某个事件或定时计划触发运行。

{% hint style="info" %}
**大白话**：手动 = 你亲自按"播放键"；自动 = 发布上线后，机器按条件自己跑。这篇文章就是讲这两种"跑法"的区别，以及它们之间还有一种"只跑某几步"的玩法（部分执行）。
{% endhint %}

## 手动执行 / Manual executions

手动执行让你可以直接在画布[^1]上运行工作流，用来测试你的工作流逻辑。这种执行是"临时性的（ad-hoc）"：只有你手动点击 **Execute workflow**（执行工作流）按钮时，它才会运行。

手动执行让搭建工作流变得更轻松，因为你可以边搭边测、反复迭代：跟着流程逻辑走，直接看到每一步的数据是怎么变化的。你可以通过提供不同的输入数据、修改节点选项，来测试条件分支（if-else 逻辑）、数据格式改动和循环（loop）行为到底对不对。

{% hint style="info" %}
**固定执行数据（Pinning execution data）**

在做手动执行时，你可以用[数据固定](../../work-with-data/pin-and-mock-data.md)（data pinning）功能，把某个节点的输出数据"钉住（pin）"或"冻结（freeze）"起来。你也可以选择直接编辑被固定的数据。

在以后的运行中，n8n 不会再真的去执行这个被固定的节点，而是直接使用你固定的数据，继续往下走流程逻辑。这样一来，你就可以反复测试，不用每次都面对变化的数据，也不用一遍遍重复请求外部服务。**生产执行会忽略所有被固定的数据**——也就是说，固定数据只影响你的手动测试，不会影响线上运行。
{% endhint %}

{% hint style="info" %}
**大白话**：数据固定 = 给某个节点"按下暂停键 + 塞一份写死的答案"。之后每次测试，这个节点都不真跑，直接用你给的答案继续。适合测试后面节点逻辑，还省请求量。注意：线上正式跑的时候，n8n 不认这份"写死的答案"。
{% endhint %}

## 部分执行 / Partial executions

在 **Editor**（编辑器）标签页里点击工作流底部的 **Execute workflow**（执行工作流）按钮，会手动运行**整个**工作流。但你也可以做**部分执行（partial executions）**，只运行工作流里的某几个特定步骤。部分执行本质上也是一种手动执行，只是它只运行工作流节点的一个子集。

要做部分执行，先选中一个节点，打开它的详情视图，然后选择 **Execute step**（执行步骤）。这会执行这个特定节点，以及为了给它提供输入数据而需要提前运行的那些节点。你也可以在搭建过程中临时禁用工作流链条里的某些节点，避免在测试时真的去调用那些外部服务。

部分执行特别适合用来修改某个节点的逻辑：因为它可以让你用**同样的输入数据**重新执行这个节点，改完立刻就能对比效果。

{% hint style="info" %}
**大白话**：整个工作流是一条流水线。部分执行 = 只让流水线里的某一段转起来（包括喂给它原料的前段）。改单个节点时特别爽：不用整条线重跑，还能用同一份数据反复试。
{% endhint %}

### 部分执行的故障排查 / Troubleshooting partial executions

跑部分执行时，你可能会遇到下面这些常见问题：

> 目标节点没有连接到任何触发器。部分执行需要一个触发器。（The destination node is not connected to any trigger. Partial executions need a trigger.）

当你尝试执行部分执行、但工作流没有连接触发器时，就会出现这个错误提示。手动执行（包括部分执行）会尽量模仿生产执行的规则，其中一条就是：需要一个触发器节点来说明"工作流逻辑应该在什么条件下执行"。

解决办法：给工作流连接一个触发器节点，再把你想要执行的节点接上去。大多数情况下，最简单的方式是加一个[手动触发器](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.manualworkflowtrigger)（Manual Trigger，手动触发器）。

{% hint style="info" %}
**大白话**：n8n 认为"任何一次执行都得有个起点触发器"，哪怕是手动测试。所以没连触发器就点"执行步骤"，它就会报这个错。加一个手动触发器就好。
{% endhint %}

> 请执行整个工作流，而不是只执行节点。（现有执行数据太大。）（Please execute the whole workflow, rather than just the node. (Existing execution data is too large.)）

这个错误可能出现在你对分支很多（有很多条线）的工作流做部分执行的时候。部分执行需要用一种"额外打包"的方式，把数据和流程逻辑发送到 n8n 后端，而这种打包方式对完整执行来说是不需要的。当你的工作流超过了这些消息允许的最大尺寸时，就会报这个错。

解决办法：考虑在运行部分执行期间，用[限制节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.limit)（Limit node，限制输出数量）来限制节点的输出。等工作流运行正常了，在开启生产执行之前，记得禁用或删掉这个限制节点。

{% hint style="info" %}
**大白话**：工作流太"胖"（分支太多、数据太多），部分执行的"快递包裹"装不下，就会报这个错。临时加个 Limit（限制）节点，让它先只处理少量数据，测通了再摘掉。
{% endhint %}

## 生产执行 / Production executions

生产执行是指由某个触发事件或定时计划**自动**运行工作流。在[付费套餐](https://n8n.io/pricing/)中，生产执行会计入你的执行配额。具体哪些情况计数、哪些不计数，请参考[执行如何计入配额](README.md#how-executions-count-towards-quotas)。

要配置生产执行，你必须给工作流接上一个[触发器节点](#user-content-fn-2)[^2]（除了[手动触发器](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.manualworkflowtrigger)以外的任意触发器都可以），然后用 **Publish**（发布）按钮[发布工作流](../save-and-publish-workflows.md)。发布之后，只要触发条件满足，工作流就会自动执行。

和手动执行不同，生产执行的运行过程不会显示在工作流的 **Editor**（编辑器）标签页里。取而代之的是，你可以根据你的[工作流设置](../../manage-workflows/configure-workflow-settings.md)，在工作流的 **Executions**（执行）标签页里查看这些执行。在那里，你可以利用[编辑器调试功能](debug-executions.md)（debug in editor）来检查和排查问题。

{% hint style="info" %}
**大白话**：生产执行 = "发布上线、机器自动跑"。它不会像手动测试那样在画布上实时"播放"给你看，而是静静地在后台跑，记录在执行列表里。要看它跑得怎么样，去 **Executions**（执行）标签页翻记录，出错了还能用调试功能回放排查。
{% endhint %}

[^1]: 画布（canvas）是 n8n 编辑器中用于搭建工作流的主界面。你在画布上添加节点、连接节点，从而组合出工作流。
[^2]: 触发器节点（trigger node）是一种特殊节点，负责在满足特定条件时执行工作流。所有生产工作流都至少需要一个触发器，用来决定工作流什么时候该运行。
