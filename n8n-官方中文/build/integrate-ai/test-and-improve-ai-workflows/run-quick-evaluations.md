---
title: 轻量评估
description: >-
  在开发阶段使用轻量评估（light evaluations），通过对照已知测试用例来检查执行结果，从而构建可靠的基于 LLM 的工作流。
contentType: howto
nodeTitle: Run quick evaluations
originalFilePath: advanced-ai/evaluations/light-evaluations.md
originalUrl: 'https://docs.n8n.io/advanced-ai/evaluations/light-evaluations'
url: >-
  https://docs.n8n.io/build/integrate-ai/test-and-improve-ai-workflows/run-quick-evaluations
layout:
  description:
    visible: false
---

# 轻量评估（Light evaluations）

{% hint style="info" %}
**注册社区版用户和付费套餐均可用（Available on registered community and paid plans）**

轻量评估功能对已注册的社区版（community）用户以及所有付费套餐开放。
{% endhint %}

## 什么是轻量评估？（What are light evaluations?）

在搭建工作流的过程中，你经常想先用一小批例子测一测，看看它表现如何，然后加以改进。在这个开发阶段，逐个查看每个例子的工作流输出通常就已经足够了。为此专门搭建一套正式的[打分或指标系统](use-metrics-to-measure-quality.md)（metric-based evaluation），投入产出比还不划算。

轻量评估（light evaluation）允许你把测试数据集里的例子一条一条地跑过你的工作流，并把输出写回数据集。然后你可以把这些输出并排放在一起查看，和期望输出（expected outputs，如果你有的话）做直观的对比。

> 大白话：轻量评估 = "先跑通、用眼睛看"。开发阶段不需要复杂的打分公式，只需要把一小批测试数据喂进工作流，把每个结果记下来，然后人工对比一下，看看 AI 回答得对不对。简单、直观、够用。

## 它是怎么工作的？（How it works）

{% hint style="info" %}
**Google Sheets 凭据（Credentials for Google Sheets）**

评估功能使用数据表（data tables）或 Google Sheets 来存放测试数据集。如果要用 Google Sheets 作为数据集来源，需要先配置一个 [Google Sheets 凭据 credential](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/credentials/google)（用来授权 n8n 访问你的表格）。
{% endhint %}

轻量评估在工作流的 **'Editor'（编辑器）** 标签页里进行，不过你会在 **'Evaluations'（评估）** 标签页里找到如何设置它的说明。

步骤：

1. 创建一个数据集（dataset）
2. 把数据集连接到工作流
3. 把工作流的输出写回数据集
4. 运行评估

下面的说明会用一个示例工作流来演示：给收到的支持工单（support ticket）自动分配分类（category）并标记优先级（priority）。

![Example AI workflow ](../../.gitbook/assets/example-ai-workflow.png)

### 1. 创建数据集（Create a dataset）

创建一个数据表（data table）或 Google Sheet，里面放上少量工作流的示例。你的数据集应该包含这些列（columns）：

- 工作流输入（workflow input）
- （可选）期望的/正确的工作流输出（expected or correct workflow output）
- 实际输出（actual output）

实际输出这一列（或这几列）先留空，因为在评估过程中会由工作流来填充。

<figure>
<img src="../../.gitbook/assets/sample-dataset.png" alt="">
<figcaption>工单分类工作流用到的<a href="https://docs.google.com/spreadsheets/d/1uuPS5cHtSNZ6HNLOi75A2m8nVWZrdBZ_Ivf58osDAS8/edit?gid=294497137#gid=294497137">示例数据集</a>（sample dataset）。</figcaption>
</figure>

> 大白话：数据集就是一张"考试卷"。第 1 列是题目（工作流的输入），第 2 列是标准答案（期望输出，可以没有），第 3 列留空，等 AI 来填（实际输出）。评估跑完之后，你只要对比第 2 列和第 3 列，就知道 AI 答得好不好了。

### 2. 把数据集连接到工作流（Wire the dataset up to your workflow）

#### 插入评估触发器来拉取数据集（Insert an evaluation trigger to pull in your dataset）

每次[评估触发器 evaluation trigger](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.evaluationtrigger)（负责从数据集取数据并驱动评估的触发器节点）运行，它都会输出一个条目（item），对应数据集中的一行数据。

点击评估触发器左边的 **'Evaluate all'**（全部评估）按钮，工作流就会按顺序重复运行多次，数据集里有多少行就运行多少次。这是评估触发器的特殊行为。

在把节点连接起来（wiring）的阶段，你通常只想让它运行一次。可以这样做：

- 把触发器的 **'Max rows to process'**（最大处理行数）设置为 1
- 或者点击触发器上的 **'Execute node'**（执行节点）按钮（而不是 'Evaluate all' 按钮）

#### 把触发器接到工作流上（Wire the trigger up to your workflow）

现在你可以把评估触发器连接到工作流的其余部分，并引用它输出的数据了。至少，你需要在后面的工作流中使用数据集的输入列（input columns）。

如果你的工作流里有多个触发器，你需要把它们的[分支合并起来](fix-common-issues.md#combining-multiple-triggers)。

<figure>
<img src="../../.gitbook/assets/connecting-evaluation-trigger.png" alt="">
<figcaption>添加并接好评估触发器后的工单分类工作流。</figcaption>
</figure>

> 大白话：评估触发器就像一个"发卷机"，每次运行吐出一行数据。接好线之后，工作流里的每个节点都能用这一行的数据干活。调试阶段先让它只跑一行，确认没问题了，再点"全部评估"让它一次跑完整个数据集。

### 3. 把工作流输出写回数据集（Write workflow outputs back to dataset）

要在评估运行时把输出填充到数据集的输出列里：

- 插入[评估节点 evaluation node](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.evaluation)（专门配合评估功能使用的节点）的 **'Set outputs'**（设置输出）操作
- 把它接到工作流上，位置要在工作流已经产生你要评估的输出之后
- 在节点的参数（parameters）里，把工作流的输出映射（mapping）到正确的数据集列上

<figure>
<img src="../../.gitbook/assets/connecting-set-outputs-node.png" alt="">
<figcaption>添加并接好 'set outputs' 节点后的工单分类工作流。</figcaption>
</figure>

> 大白话：这一步是"交卷"。AI 答完题之后，得有人把答案抄回试卷上——这个 'Set outputs' 节点就是负责"抄答案"的，它把你工作流算出来的结果写回数据集对应的列。

### 4. 运行评估（Run evaluation）

点击评估触发器左边的 **Execute workflow**（执行工作流）按钮。工作流会执行多次，数据集里每一行都执行一次：

![Execute workflow button](../../.gitbook/assets/execute-workflow-button.png)

在数据表或 Google Sheets 里检查每一次执行的输出；如果需要，你也可以用工作流的 **'executions'**（执行记录）标签页查看执行详情。

一旦你的数据集规模超过了几十个示例，就可以考虑改用[基于指标的评估](use-metrics-to-measure-quality.md)（metric-based evaluation），用数字来衡量性能。另请参阅[提示与常见问题](fix-common-issues.md)（tips and common issues）。

> 大白话：跑完评估之后，一张"已批改的试卷"就到手了：左边是标准答案，右边是 AI 的答案，一眼就能看出对错。等测试用例多了、肉眼忙不过来的时候，就该上"自动打分"了，那就是下一篇要讲的基于指标的评估。
