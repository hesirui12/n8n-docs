---
contentType: explanation
nodeTitle: 转换数据的各种方法
originalFilePath: data/transforming-data.md
originalUrl: 'https://docs.n8n.io/data/transforming-data'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/approaches-for-transforming-data
layout:
  description:
    visible: false
---

# 转换数据的各种方法 / Approaches for transforming data

{% hint style="info" %}
**大白话**：这一页是「数据转换」的**总览地图**。先记住一句话：转换（transform）= 改数据。数据在 n8n 里从节点 A 流到节点 B，途中你想让它「变个样」——改格式、过滤、合并、排序、加一列计算字段……这些都叫转换。n8n 给了你好几把「改数据的工具」，这一页就是带你认识每一把工具分别适合干什么、怎么选。
{% endhint %}

n8n 中的数据转换指的是：当数据在你的工作流中流动时，对数据进行**修改、重组或充实（enriching）**。这包括更改数据格式、过滤或聚合（aggregating）数值、添加计算字段，以及转换数据结构以适配不同的节点。

n8n 使用预定义的[数据结构（data structure）](../understand-n8ns-data-structure.md)，让所有节点都能正确处理传入的数据。当你的数据不符合这种结构，或者你需要根据自己的用例修改数据时，就需要对它进行转换。

{% hint style="info" %}
**大白话**：为什么有时候必须「转换」？因为 n8n 的每个节点都按一套「统一格式」读数据。如果你拿到的数据（比如某个网站的接口返回的）跟这套格式对不上，或者你想让两个不同来源的数据「长相统一」再合并，你就得先转换一下，节点才认得它们。
{% endhint %}

n8n 提供了多种数据转换的方法：

* [表达式（Expressions）](../expressions-versus-data-nodes.md#expressions)：允许你使用 n8n 的表达式语法（`{{ }}`）直接在节点参数里转换数据
* [代码节点（Code node）](../expressions-versus-data-nodes.md#code-node)：让你编写自定义的 JavaScript 或 Python 来处理复杂的转换
* [AI Transform 节点（AI Transform node）](../expressions-versus-data-nodes.md#ai-transform-node)：根据自然语言描述自动生成转换代码
* 高级转换技巧：对于复杂的数据操作，n8n 支持：
   * **三元运算符（Ternary operators）**：直接在表达式里写条件逻辑（`condition ? valueIfTrue : valueIfFalse`）
   * **链式函数（Chained functions）**：把多个转换函数组合起来
   * **复杂表达式（Complex expressions）**：在表达式语法内使用 JavaScript 的方法和运算符
* 用于常见结构性转换的专用转换节点：
   * [聚合（Aggregate）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.aggregate)：把多条分开的数据合并成一组
   * [限制（Limit）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.limit)：限制数据的条数
   * [去重（Remove Duplicates）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.removeduplicates)：消除完全相同的条目
   * [排序（Sort）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.sort)：给数据排序或打乱
   * [拆分（Split Out）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.splitout)：把列表拆分成一条条独立的数据
   * [汇总（Summarize）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.summarize)：像 Excel 的数据透视表（pivot table）一样聚合数据

{% hint style="info" %}
**大白话**：怎么选工具？记住这个「由简到繁」的思路——**①** 小改动（改个格式、取个字段）→ 用**表达式**，直接在参数框里写 `{{ ... }}`；**②** 常用结构操作（合并、拆分、排序、去重、汇总）→ 直接用**专用节点**（Aggregate、Split Out、Sort 等），拖进来配置一下就行，比写代码省事；**③** 很复杂、节点搞不定的逻辑 → 用**代码节点（Code node）**写 JavaScript 或 Python；**④** 不想写代码、会说人话 → 用 **AI Transform 节点**，用自然语言描述「我要什么效果」，它自动生成转换代码。
{% endhint %}

关于这些方法的对比，请参见[表达式与数据节点（Expressions versus data nodes）](../expressions-versus-data-nodes.md)。
