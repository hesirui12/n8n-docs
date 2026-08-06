---
contentType: reference
nodeTitle: Item linking errors
originalFilePath: data/data-mapping/data-item-linking/item-linking-errors.md
originalUrl: 'https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors'
url: >-
  https://docs.n8n.io/build/work-with-data/reference-data/link-data-items/item-linking-errors
layout:
  description:
    visible: false
---

# 条目链接错误（Item linking errors）

{% hint style="info" %}
**大白话解释**

在 n8n 中，你可以引用**任意一个前置节点**的数据，不一定是紧挨着的前一个节点。引用更早节点时用的语法是 `$(node_name).item`——`item` 的意思是"自动找出那条与当前数据配对的原始数据"。但有时候这个"自动配对"会失败。本文就是教你遇到错误时怎么办。
{% endhint %}

在 n8n 中，你可以引用任意前置节点的数据。它不一定是紧挨着的前一个节点：可以是链条中的任意一个前置节点。当引用更靠后的节点时，你要使用表达式语法 `$(node_name).item`。

<figure markdown>
<img src="../../../.gitbook/assets/item-linking-multiple-lines.png" alt="">
<figcaption markdown>不同条目各自"血缘线"的示意图。得益于条目链接，你可以用 `$('Get famous movie actors').item` 拿到每一部电影对应的演员数据。</figcaption>
</figure>

由于前置节点里可能有多个条目，n8n 需要知道该用哪一个。使用 `.item` 时，n8n 会在后台自动帮你找出答案。想深入了解它的工作原理，请参考[条目链接概念（Item linking concepts）](how-items-link-through-workflows.md)。

如果信息缺失，`.item` 就会失败。为了确定该使用哪个条目，n8n 为每一个条目维护了一条"追溯线（thread）"，沿着工作流的各个节点往回延伸。对某个条目而言，这条线告诉 n8n：是前置节点里的哪些条目生成了它。为了在某个前置节点中找到匹配的条目，n8n 会沿着这条线往回走，直到抵达那个节点。

使用 `.item` 时，出现以下情况 n8n 会报错：

- 追溯线断了（thread is broken）
- 追溯线指向前置节点中的**多个**条目（因为无法确定该用哪一个）

要解决这些错误，你可以：要么避免使用 `.item`，要么修复导致问题的根本原因。

**避免使用 `.item` 的办法**：改用 `.first()`、`.last()` 或 `.all()[index]`。使用它们的前提是：你得知道目标条目在目标节点的输出条目中排第几位（位置）。这些方法的更多细节请参考[引用前置节点（Referencing previous nodes）](../reference-previous-nodes.md)。

**修复根本原因**：取决于具体是哪种错误，见下文。

### 修复「Info for expressions missing from previous node」错误

如果你看到这条错误信息：

> ERROR: Info for expression missing from previous node

（中文大意：无法从前置节点获取表达式所需的信息）

这说明链条中有某个节点没有返回"配对信息"——也就是它没有告诉 n8n「每条输出数据是由哪条输入数据生成的」。解决办法取决于这个前置节点的类型：

- **Code（代码）节点**：确保你在代码中返回了"每个输出条目是由哪些输入条目生成的"信息。参考[在 Code 节点中保留条目链接（Preserving linking in the Code node）](preserving-linking-in-the-code-node.md)。
- **自定义节点或社区节点**：需要节点开发者更新节点，让它返回"每个输出条目使用了哪些输入条目"的信息。参考[节点开发者的条目链接（Item linking for node creators）](item-linking-for-node-creators.md)。

### 修复「Multiple matching items for expression」错误

这是对应的错误信息：

> ERROR: Multiple matching items for expression

（中文大意：表达式匹配到多个条目）

有时候 n8n 会用**多个条目**来创建**一个**条目。典型的例子有 Summarize（汇总）、Aggregate（聚合）和 Merge（合并）节点——它们会把多条数据的信息合并到一起。

{% hint style="info" %}
**大白话解释为什么会"匹配到多个"**

比如 Merge（合并）节点把 3 条订单数据合并成了 1 条汇总数据。当你在这条汇总数据后面用 `$('订单节点').item` 时，n8n 不知道该返回这 3 条里的哪一条——因为这条数据同时由它们 3 个"生出来"。
{% endhint %}

当你使用 `.item` 却存在多个可能的匹配时，n8n 不知道该选哪一个。要解决这个问题，你可以：

- 改用 `.first()`、`.last()` 或 `.all()[index]`。这些方法的更多细节请参考[引用前置节点（Referencing previous nodes）](../reference-previous-nodes.md)。
- 引用另一个包含相同信息、但不会产生多个匹配条目的节点。
