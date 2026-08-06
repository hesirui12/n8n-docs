---
title: Evaluations
description: >-
  Use n8n evaluations to build reliable AI workflows. Build confidence in your
  LLM-powered workflows by comparing the output from known test cases.
contentType: overview
nodeTitle: Understand why to test
originalFilePath: advanced-ai/evaluations/overview.md
originalUrl: 'https://docs.n8n.io/advanced-ai/evaluations/overview'
url: >-
  https://docs.n8n.io/build/integrate-ai/test-and-improve-ai-workflows/understand-why-to-test
layout:
  description:
    visible: false
---

# 概览（Overview）

## 什么是评估？（What are evaluations?）

评估（evaluation）是检查你的 AI 工作流是否可靠的关键技术。它可能是「不稳定的概念验证（proof of concept）」和「可靠的生产工作流」之间的分水岭。无论在构建阶段，还是在部署到生产环境之后，它都很重要。

评估的基础，是把一个测试数据集（test dataset）跑过你的工作流。这个数据集包含多个测试用例（test case）。每个测试用例包含一个针对你的工作流的示例输入（sample input），通常还包括预期的输出（expected output）。

评估可以让你：

* **在一系列输入上测试你的工作流**，从而了解它在边界情况（edge case）下的表现
* **有信心地进行修改**，而不会在别处无意中把事情弄糟
* **比较不同模型或提示词（prompt）之间的性能**

下面的视频解释了什么是评估、为什么它有用，以及它是如何工作的：

{% embed url="https://www.youtube.com/embed/5LlF196PKaE" %}

{% hint style="info" %}
**大白话**：评估就是「给 AI 工作流出考题」。你先准备一批问题和标准答案（测试数据集），然后把工作流跑一遍，看看它的回答对不对。有了这个过程，你改提示词、换模型时才不会两眼一抹黑——改完跑一遍考题，好不好立刻见分晓。
{% endhint %}

## 为什么需要评估？（Why is evaluation needed?）

AI 模型与代码有着本质的不同。代码是确定性的（deterministic），你可以对它进行推理。而 LLM 很难做到这一点，因为它们就像黑盒（black box）。相反，你必须通过把数据送进模型并观察输出来*衡量*（measure）LLM 的输出。

只有在用多个能准确反映生产环境中会遇到的**所有边界情况**的输入跑过模型之后，你才能建立起「模型表现可靠」的信心。

{% hint style="info" %}
**大白话**：普通代码是「写死的」——同样的输入一定得到同样的输出，出错了你能顺着逻辑查。但大模型是「猜的」——你没法从代码层面推理它为什么这么回答，只能把它当成黑盒：多喂一些输入，观察它的输出是否稳定、是否合理。喂得越多、覆盖的边角情况越全，你心里才越有底。
{% endhint %}

## 两种评估方式（Two types of evaluation）

### 轻量评估（部署前）（Light evaluation (pre-deployment)）

构建一个干净、全面的数据集很难。在初始构建阶段，通常只需要生成少量示例。这些示例足以把工作流迭代到可发布的状态（或概念验证）。你可以直观地比较结果，感受工作流的质量，而无需建立正式的指标（metric）。

{% hint style="info" %}
**大白话**：刚开始做的时候，别急着搞高大上的指标。手写十来条有代表性的问题，把工作流跑一遍，肉眼对比回答质量就够了。这一步能帮你快速把「能跑」变成「能用」。
{% endhint %}

### 基于指标的评估（部署后）（Metric-based evaluation (post-deployment)）

一旦部署了工作流，就更容易从生产执行中构建更大、更有代表性的数据集。当你发现一个 bug 时，可以把导致它的输入添加到数据集中。修复 bug 时，重要的是把整个数据集重新在工作流上跑一遍，作为[回归测试](https://en.wikipedia.org/wiki/Regression_testing)（regression test），以检查修复有没有无意中让其他方面变糟。

由于测试用例太多，无法逐一检查，评估使用指标（metric，即代表特定特征的数值）来衡量输出的质量。这也让你可以跟踪不同运行之间的质量变化。

{% hint style="info" %}
**大白话**：上线之后，真实用户会替你「生成」大量真实输入，这时候数据集可以越攒越大。发现某个输入让 AI 答错了？把它加进数据集，修好之后再跑一遍全量数据——这就是回归测试：保证修好 A 问题的同时，没有弄坏 B、C、D。用例太多没法肉眼看，就交给指标（metric）自动打分。
{% endhint %}

### 评估方式对比（Comparison of evaluation types）

|                                                     | 轻量评估（部署前）（Light evaluation (pre-deployment)） | 基于指标的评估（部署后）（Metric-based evaluation (post-deployment)） |
|-----------------------------------------------------|---------------------------------------------------------|-----------------------------------------------------------------------|
| **每次迭代的性能提升<br>（Performance improvements with each iteration）** | 大（Large）                                             | 小（Small）                                                           |
| **数据集规模（Dataset size）**                      | 小（Small）                                             | 大（Large）                                                           |
| **数据集来源（Dataset sources）**                   | 手工生成（Hand-generated）<br>AI 生成（AI-generated）<br>其他（Other） | 生产执行记录（Production executions）<br>AI 生成（AI-generated）<br>其他（Other） |
| **实际输出（Actual outputs）**                      | 必需（Required）                                        | 必需（Required）                                                      |
| **预期输出（Expected outputs）**                    | 可选（Optional）                                        | 必需（通常是）（Required (usually)）                                  |
| **评估指标（Evaluation metric）**                   | 可选（Optional）                                        | 必需（Required）                                                      |

{% hint style="info" %}
**大白话**：怎么理解这张表？简单说：开发阶段数据少、肉眼能看完，所以轻量评估就够了，而且每一步改动带来的提升都很大（因为基础差，进步空间大）；上线后数据海量、肉眼看不完，必须靠指标自动打分，此时每次优化的空间反而变小了（已经接近不错的状态）。两阶段各有分工：轻量评估帮你「快速起飞」，指标评估帮你「稳住不翻车」。
{% endhint %}

## 了解更多（Learn more）

* [轻量评估（Light evaluations）](run-quick-evaluations.md)：在开发过程中，针对手工挑选的测试用例评估你的 AI 工作流，非常合适。
* [基于指标的评估（Metric-based evaluations）](use-metrics-to-measure-quality.md)：使用评分（scoring）和指标对大型数据集进行评估，是在生产环境中保持性能和正确性的高级评估方式。
* [技巧与常见问题（Tips and common issues）](fix-common-issues.md)：了解如何设置特定的评估用例，并解决常见问题。
