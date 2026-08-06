---
contentType: explanation
nodeTitle: How items link through workflows
originalFilePath: data/data-mapping/data-item-linking/item-linking-concepts.md
originalUrl: 'https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-concepts'
url: >-
  https://docs.n8n.io/build/work-with-data/reference-data/link-data-items/how-items-link-through-workflows
layout:
  description:
    visible: false
---

# 条目如何在工作流中链接（How items link through workflows）

{% hint style="info" %}
**大白话解释**

n8n 的每一条输出数据都自带一份"家族档案"：记录着它是从哪些输入数据来的。这份档案把整条工作流串成一条**链条（thread）**，你随时可以沿着链条往回走，找到某条数据的前身。本文就是讲这条"血缘链"是怎么工作的。
{% endhint %}

节点创建出的每一个输出条目，都包含一些元数据，用来把它与节点用来生成它的输入条目（一个或多个）链接起来。这样就在条目之间形成了一条链条，你可以沿着链条往回走，访问之前的条目。这个概念理解起来可能有点绕，尤其是当节点把数据拆分（split）或合并（merge）的时候。如果你在开发自己的程序化节点（programmatic node），或者在某些场景下使用 Code 节点，就需要理解条目链接（item linking）。

本文档提供这个功能的概念性总览。具体的使用方法，请参考：

* [节点开发者的条目链接（Item linking for node creators）](item-linking-for-node-creators.md)：了解在开发节点时如何处理条目链接。
* [在 Code 节点中保留条目链接（Preserving linking in the Code node）](preserving-linking-in-the-code-node.md)：学习在 Code 节点中如何处理条目链接。
* [条目链接错误（Item linking errors）](item-linking-errors.md)：了解你在编辑器界面中可能遇到的错误。

## n8n 的自动条目链接（n8n's automatic item linking）

如果一个节点没有自己控制"输入条目 → 输出条目"的对应关系，n8n 会尝试自动猜测应该如何链接：

* 单个输入、单个输出：输出条目链接到那一个输入条目。
* 单个输入、多个输出：所有输出条目都链接到那一个输入条目。
* 多个输入和输出：
	* 如果你保留了输入条目，但改变了顺序（或者删掉一部分、保留一部分），n8n 可以自动补上正确的链接信息。
	* 如果输入和输出的数量相等，n8n 会按顺序一一对应链接。也就是说：输出第 1 条对应输入第 1 条，输出第 2 条对应输入第 2 条，依此类推。
	* 如果数量不相等，或者你生成了完全全新的条目，n8n 就无法自动链接了。

{% hint style="info" %}
**大白话解释「按顺序对应」**

想象你把 5 张照片从左边盒子挪到右边盒子。只要没有打乱顺序、数量也一致，n8n 就能确定"右边第 1 张 = 左边第 1 张"。但如果中间你加了一张新照片、或者删了一张，n8n 就搞不清楚对应关系了。
{% endhint %}

如果 n8n 无法自动链接条目，而节点本身也没有处理条目链接，n8n 就会显示一个错误。更多信息请参考[条目链接错误（Item linking errors）](item-linking-errors.md)。

## 条目链接示例（Item linking example）

![A diagram showing the threads linking multiple items back through a workflow](../../../.gitbook/assets/item-linking-multiple-lines.png)

在这个示例中，即使条目的顺序发生了变化，n8n 也仍然可以把某个节点中的条目往回链接好几步。这意味着「按字母顺序给电影排序」的节点，依然能够访问「获取著名电影演员」节点中与之对应的那条演员信息。

{% hint style="info" %}
**大白话解读上图**

图片里那些"弯弯绕绕的连线（threads）"就代表着每条数据背后的血缘关系：即使数据在后面的节点里被重新排序、打乱了顺序，n8n 依然能通过连线找到"这条数据最早是从哪条数据变来的"。
{% endhint %}

访问链接条目的方法，根据你使用的是界面（UI）、表达式（expression）还是代码节点而不同。可以探索以下资源：

* [在 UI 中映射数据（Mapping in the UI）](../use-the-ui-mapper.md)
* [在 Code 节点中保留条目链接（Preserving linking in the Code node）](preserving-linking-in-the-code-node.md)
* [条目链接错误（Item linking errors）](item-linking-errors.md)
