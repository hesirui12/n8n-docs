---
title: 基于指标的评估
description: >-
  使用基于指标的评估（metric-based evaluations）来衡量、打分，并长期改进生产环境（production）中基于 AI 的工作流性能。
contentType: howto
nodeTitle: Use metrics to measure quality
originalFilePath: advanced-ai/evaluations/metric-based-evaluations.md
originalUrl: 'https://docs.n8n.io/advanced-ai/evaluations/metric-based-evaluations'
url: >-
  https://docs.n8n.io/build/integrate-ai/test-and-improve-ai-workflows/use-metrics-to-measure-quality
layout:
  description:
    visible: false
---

# 基于指标的评估（Metric-based evaluations）

{% hint style="info" %}
**Pro 和 Enterprise 套餐可用（Available on Pro and Enterprise plans）**

基于指标的评估（metric-based evaluation）在 Pro 和 Enterprise 套餐上可用。已注册的社区版（community）用户和 Starter 套餐用户也可以在一个工作流上使用该功能。
{% endhint %}

### 什么是基于指标的评估？（What are metric-based evaluations?）

当你的工作流准备好部署（deployment，也就是正式上线）时，你通常想用比[开发阶段](run-quick-evaluations.md)更多的例子来测试它。

举个例子：当生产环境（production）的运行开始出现边界情况（edge cases，也就是各种刁钻的极端输入）时，你希望把它们加进测试数据集，确保这些情况也能被覆盖到。

对于像由生产数据构建出来的那种大型数据集，光靠人眼一个个看结果很难判断整体表现。因此，你必须用数字来衡量性能。基于指标的评估可以给每次测试运行打一个或多个分数（scores），你可以拿这些分数和之前的运行结果做对比。单个分数会被汇总（rolled up）起来，用来衡量整个数据集的表现。

这个功能让你可以运行计算指标的评估，跟踪这些指标在不同次运行之间的变化，并深入调查（drill down）这些变化背后的原因。

指标（metrics）可以是确定性的函数（deterministic functions，比如两个字符串之间的距离），也可以用 AI 来计算。指标通常要检查输出与*参考输出（reference output）*（也叫 ground truth，即"标准答案"）之间差多远。要做到这一点，数据集里必须包含这个参考输出。不过，有些评估并不需要参考输出（例如，检查文本的情绪 sentiment 或毒性 toxicity）。

> 大白话：轻量评估是"人眼看"，指标评估是"机器打分"。工作流上线后测试用例会越来越多，人眼看不过来，就让程序给每次运行打分数：答案离标准答案越近，分数越高。分数还能跨次比较——这周 3.8 分，下周 3.9 分，说明在进步。要打"离标准答案多远"这种分，数据集里就得先有标准答案；但有些检查（比如"这回答是否带负面情绪"）不需要标准答案也能评。

## 它是怎么工作的？（How it works）

{% hint style="info" %}
**Google Sheets 凭据（Credentials for Google Sheets）**

评估功能使用数据表（data tables）或 Google Sheets 来存放测试数据集。如果要用 Google Sheets 作为数据集来源，需要先配置一个 [Google Sheets 凭据 credential](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/credentials/google)（用来授权 n8n 访问你的表格）。
{% endhint %}

1. 搭建好[轻量评估](run-quick-evaluations.md)（light evaluation）
2. 给工作流添加指标（metrics）
3. 运行评估并查看结果

### 1. 搭建轻量评估（Set up light evaluation）

按照[搭建说明](run-quick-evaluations.md)创建一个数据集，并把它接到工作流上，同时把输出写回数据集。

下面的步骤使用的是轻量评估文档里那个同样的工单分类工作流示例：

![Light evaluation workflow](../../.gitbook/assets/light-evaluation-workflow.png)

### 2. 给工作流添加指标（Add metrics to workflow）

指标（metrics）是用来给工作流输出打分的"维度"（dimensions）。它们通常会把工作流的实际输出和参考输出做对比。常见的做法是用 AI 来计算指标，不过有时候只用代码也能算。在 n8n 里，指标永远是一个数字（number）。

你需要在工作流已经产生输出之后的位置，添加计算指标的逻辑。你可以在数据集里把指标会用到的参考输出（reference output）加成一列。这样一来，由于这些参考输出会由评估触发器输出，它们在工作流里就随时可用。

使用 **Set Metrics**（设置指标）操作来计算：

* **Correctness（AI-based，基于 AI 的正确性）**：答案的含义是否与提供的参考答案（reference answer）一致。使用 1 到 5 的评分等级，5 分最好。
* **Helpfulness（AI-based，基于 AI 的有用性）**：回答是否回答了给定的问题。使用 1 到 5 的评分等级，5 分最好。
* **String Similarity（字符串相似度）**：答案与参考答案有多接近，逐字符衡量（编辑距离 edit distance）。返回 0 到 1 之间的分数。
* **Categorization（分类匹配）**：答案是否与参考答案完全一致。一致时返回 1，否则返回 0。
* **Tools Used（是否使用了工具）**：这次执行是否使用了工具（tools）。返回 0 到 1 之间的分数。

你还可以添加自定义指标（custom metrics）。只要在工作流内部把指标算出来，然后映射（mapping）到 Evaluation 节点里即可。使用 **Set Metrics** 操作，并把 Metric（指标）选成 **Custom Metrics**（自定义指标）。然后你就可以为想要返回的指标设置名称（names）和数值（values）了。

例如：

* [RAG 文档相关性（RAG document relevance）](https://n8n.io/workflows/4273)：在使用向量数据库（vector database）时，检索到的文档是否与问题相关。

> 大白话：指标就是"评分规则"。n8n 已经内置了几种常用规则：让 AI 当"阅卷老师"评正确性/有用性（1-5 分），用算法算文本相似度（0-1 分），比答案是否一字不差（1/0），看是否调用了工具（0-1 分）。内置规则不够用？自己写也行——把算好的数字映射到 Evaluation 节点里，就是自定义指标。

计算指标会带来延迟（latency）和成本，所以你可能只想在运行评估时计算，而避免在生产执行时计算。你可以把指标逻辑放在一个 ['check if evaluating' 操作](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.evaluation#check-if-evaluating)（检查是否正在评估）之后来实现这一点。

![Check if evaluating node](../../.gitbook/assets/check-if-evaluating.png)

> 大白话：让 AI 打分是要花钱、要花时间的。所以用 "check if evaluating"（是否正在评估）节点当"开关"：只有在评估模式下才让打分逻辑跑起来，平时正常干活的时候不跑，省钱又省时。

### 3. 运行评估并查看结果（Run evaluation and view results）

切换到工作流的 **Evaluations**（评估）标签页，点击 **Run Test**（运行测试）按钮。评估就会开始。评估结束后，它会为每个指标显示一个汇总分数（summary score）。

点击某次测试运行的记录行，就能看到每个测试用例（test case）的结果。点击某个具体的测试用例，会在新标签页里打开产生它的那次执行（execution）。

#### 并行运行测试用例（Run test cases in parallel）

在支持并发（concurrency）的套餐上，**Run Test** 是一个分体按钮（split-button，也就是一个能拆成两半的按钮）。右侧的插入符（caret，即那个小箭头）会打开一个弹窗（popover），里面有一个滑块，用来控制同时运行的测试用例数量。

<figure>
<img src="../../.gitbook/assets/run-test-concurrency.png" alt="">
<figcaption>并发弹窗，滑块位于 5 个并行测试用例上限中的 3 个。</figcaption>
</figure>

默认的最大值取决于你的套餐：

| 套餐（Plan） | 最大并行测试用例数（Maximum parallel test cases） |
| :--- | :-------------------------- |
| Community / Pro（社区版 / Pro） | 1（顺序执行，sequential） |
| Business | 3 |
| Enterprise | 5 |

当最大值是 `1` 时，插入符和弹窗会被隐藏，**Run Test** 就只是一个普通按钮——所有运行都是顺序执行的，和早期版本完全一样。

自托管（self-hosted，自己部署的）实例可以通过 [`N8N_CONCURRENCY_EVALUATION_LIMIT`](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/executions) 环境变量覆盖这个最大值，无论你是什么套餐等级都可以。

> 大白话：并发 = 同时开几辆车跑测试。测试用例多了，一个个跑太慢，就同时跑 3 个、5 个。但注意：AI 服务商通常会限流（rate limit），同时跑太多容易撞上"请求太频繁"的报错，遇到报错就把滑块调低。自己部署 n8n 的话，还可以用环境变量 `N8N_CONCURRENCY_EVALUATION_LIMIT` 自定义并发上限。

{% hint style="info" %}
**LLM 速率限制（LLM rate limits）**

更高的并发可以加快评估速度，但也会增加撞上上游 LLM 速率限制（rate limits）的几率。如果你看到速率限制相关的报错，就把滑块调低。
{% endhint %}
