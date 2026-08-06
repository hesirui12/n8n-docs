---
contentType: overview
nodeTitle: Link data items
originalFilePath: data/data-mapping/data-item-linking/index.md
originalUrl: 'https://docs.n8n.io/data/data-mapping/data-item-linking'
url: 'https://docs.n8n.io/build/work-with-data/reference-data/link-data-items'
layout:
  description:
    visible: false
---

# 数据条目的链接（Linking data items）

{% hint style="info" %}
**大白话解释：什么是「数据条目」和「条目链接」？**

在 n8n 里，**item（数据条目）**就是「一条数据」。你可以把它想象成表格里的一行，或是一张卡片。节点（node）会接收一个或多个条目 → 对它们进行处理 → 再输出新的条目。

**条目链接（item linking）**的意思就是：每一条输出的数据，都会"记住"它是从哪些输入数据变出来的。就像做菜时，每道菜都能追溯到它的原材料。有了这层"血缘关系"，你就能在工作流里往回追溯，找到某条数据的前身。
{% endhint %}

一个 item（数据条目）就是一条数据。节点会接收一个或多个条目，对它们进行处理，然后输出新的条目。每一条输出条目都会链接回（记住）生成它的那个前置节点中的条目。

通常这套机制会自动工作，你不用操心。但如果你属于下面这两类人，就需要深入了解它的原理：

* 使用 **Code（代码）节点** 处理复杂的输入/输出数据逻辑。
* 开发**程序化风格（programmatic-style）的节点**（即用代码写的自定义节点）。

本部分包含以下内容：

* 关于[条目链接的概念（Item linking concepts）](how-items-link-through-workflows.md)的概念性总览。
* 面向节点开发者的[节点开发者的条目链接（Item linking for node creators）](item-linking-for-node-creators.md)。
* 面向普通用户的支持：[在 Code 节点中保留条目链接（Preserving linking in the Code node）](preserving-linking-in-the-code-node.md)，讲解如何从之前的节点取回条目数据，并在使用 Code 节点时正确地链接条目。
* 排查问题的指南：[条目链接错误（Item linking errors）](item-linking-errors.md)。
