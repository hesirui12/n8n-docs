---
contentType: overview
nodeTitle: 数据总览
originalFilePath: data/index.md
originalUrl: 'https://docs.n8n.io/data'
url: 'https://docs.n8n.io/build/work-with-data/overview'
layout:
  description:
    visible: false
---

# 数据总览 / Overview

{% hint style="info" %}
**大白话**：n8n 的工作流（workflow）就像一条流水线，数据在这条流水线上从一个节点（node）流到下一个节点。每个节点负责「收货 → 加工 → 交货」。这篇文章是「处理数据」栏目的总目录，告诉你：数据在 n8n 里是怎么流动的、怎么查看每个节点经过的数据、怎么引用前面节点的数据、以及怎么转换数据。把这篇文章看完，你就能对「数据在整个工作流里如何运转」有一个整体印象。
{% endhint %}

在 n8n 中，数据会在你的工作流里从一个节点（node）流向下一个节点。每个节点接收数据、处理数据，然后把结果传给下一个节点。理解数据在你的工作流中是如何流动和转换的，是搭建高效工作流的关键。

## 数据在 n8n 中是如何工作的 / How data works in n8n

**数据在节点间流动（Data flows through nodes）**：当你把节点连接起来后，数据会自动从一个节点传给下一个节点。每个节点都会处理收到的数据，并根据自己的配置输出结果。

**在每个阶段查看数据（View data at every stage）**：你可以随时检查工作流中任意位置的数据：

- **节点详情视图（Node details view）**：双击任意节点，就能看到它的输入和输出数据。可以选择 **Schema**（结构）视图、**Table**（表格）视图或 **JSON** 视图。其中 Schema 视图只显示「第一个数据条目」的简化结构，而 Table 和 JSON 视图会显示完整的数据集。
- **执行日志（Execution logs）**：回看过去的工作流运行记录，就能看到每个节点当时流过什么数据。

**引用之前的数据（Reference previous data）**：使用[数据映射（data mapping）](reference-data/README.md)可以引用工作流中前面节点的数据。你可以：

- 通过界面（UI）直接选择前面节点的值
- 编写[表达式（expressions）](expressions-versus-data-nodes.md)来动态地访问和组合数据
- 按节点名称引用指定节点，获取它的输出

**转换数据（Transform data）**：n8n 提供了多种修改数据的方式：

- 使用专用的转换节点（如 Aggregate 聚合、Split Out 拆分、Sort 排序等）
- 直接在节点参数里写[表达式（expressions）](transform-data/expressions-for-data-transformation.md)
- 用[代码节点（Code node）](expressions-versus-data-nodes.md#code-node)编写自定义的 JavaScript 或 Python 逻辑
- 使用 [AI Transform 节点](expressions-versus-data-nodes.md#ai-transform-node)（AI 转换节点）用 AI 辅助完成转换

**理解数据结构（Understand the data structure）**：n8n 在所有节点中使用[统一的数据结构](understand-n8ns-data-structure.md)，这让数据在工作流中的流动和转换变得可预测、有规律可循。

{% hint style="info" %}
**大白话**：如果你之前没接触过编程，可以这样理解——每个节点就是一台上岗的小机器。它拿到上一台机器传来的「料」（数据），按自己预设的「工序」（配置）加工一遍，再传给下一台。n8n 有个很贴心的设计：不管数据跑到哪，它的「包装格式」都统一，所以你可以放心地在任何环节查看它、引用它、改它。
{% endhint %}

## 本栏目内容 / In this section

* [n8n 如何组织数据](understand-n8ns-data-structure.md)
* [转换数据](transform-data/approaches-for-transforming-data.md)
* [用代码处理数据](expressions-versus-data-nodes.md#code-node)
* 在工作流开发期间[固定（pinning）、模拟（mocking）和编辑数据](pin-and-mock-data.md)
* [引用数据](reference-data/README.md)与[条目链接（item linking）](reference-data/link-data-items/README.md)：了解数据条目之间是如何互相联系的
