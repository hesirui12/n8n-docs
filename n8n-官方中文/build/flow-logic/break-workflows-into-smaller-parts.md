---
contentType: howto
description: >-
  从其他工作流调用工作流，并把大型工作流拆分成更小的组件。
nodeTitle: 把工作流拆成更小的部分
originalFilePath: flow-logic/subworkflows.md
originalUrl: 'https://docs.n8n.io/flow-logic/subworkflows'
url: 'https://docs.n8n.io/build/flow-logic/break-workflows-into-smaller-parts'
layout:
  description:
    visible: false
---

# 子工作流 / Sub-workflows

你可以从一个工作流调用另一个工作流。这让你可以构建「模块化」的工作流，就像微服务（microservice）一样——每个子工作流是一个独立的小服务，随时可以被主工作流调用。另外，当你的工作流变得太大，大到出现[内存问题](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/scaling/fix-memory-issues)时，拆分子工作流也能帮上忙。

{% hint style="info" %}
**大白话**：想象你写了一份超长的操作手册，几十步全写在一页纸上，又乱又难改。子工作流就是让你把手册拆成好几本小册子：一本管「发邮件」，一本管「算价格」，一本管「存数据库」。主工作流需要哪本就调用哪本。这样每本小册子都能单独测试、单独修改、重复使用，整个系统也清晰得多。
{% endhint %}

创建子工作流需要使用 [Execute Workflow（执行工作流）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.executeworkflow)节点和 [Execute Sub-workflow Trigger（执行子工作流触发器）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger)节点。

{% hint style="info" %}
**大白话**：这两个节点是一对「出入口」：`Execute Workflow`（执行工作流）节点放在主工作流里，负责「喊」子工作流开始干活；`Execute Sub-workflow Trigger`（执行子工作流触发器）节点放在子工作流的最开头，负责「接住」这次调用并开始运行。没有这两个节点，子工作流就没法被调用。
{% endhint %}

子工作流的执行次数**不计入**你套餐（plan）的每月执行次数限制，也**不占用**活跃工作流（active workflows）的数量限制。

{% hint style="info" %}
**大白话**：这是子工作流的一大省钱好处——「调用子工作流」产生的执行不会扣你的月度额度，也就是说你可以放心大胆地把逻辑拆成很多个子工作流，不用担心把每月执行次数用光。
{% endhint %}

## 设置并使用子工作流 / Set up and use a sub-workflow

这一节会带你一步步配置父工作流（parent workflow）和子工作流（sub-workflow）。

{% hint style="info" %}
**大白话**：父工作流就是「发起调用」的那个工作流，子工作流就是「被调用」的那个。下面这段内容（以 GitBook 可复用片段的形式嵌入）会手把手教你两边分别怎么设置。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/wlwT5JcWyWTecnDN6aul/" %}

## 数据如何在工作流之间传递 / How data passes between workflows

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/edKlUxnfiRMq38CujuFv/" %}

{% hint style="info" %}
**大白话**：子工作流不是「黑盒子」——父工作流可以把数据「递」给子工作流（比如把订单号传进去），子工作流处理完还能把结果「还」给父工作流（比如把计算好的价格传回来）。上面这段嵌入内容会详细解释数据在两边之间具体怎么流动、哪些数据能传、怎么在表达式中引用。想深入细节的话，请查阅上方的可复用内容说明。
{% endhint %}

## 子工作流转换 / Sub-workflow conversion

想了解如何把现有的工作流拆分成多个子工作流，请参阅[子工作流转换（Sub-workflow conversion）](convert-to-sub-workflows.md)。

{% hint style="info" %}
**大白话**：这一节讲的是「从零搭建」子工作流；而「子工作流转换」讲的是「把已经写好的一个大工作流，选中其中一部分，一键变成子工作流」——适合用来给旧工作流做「大扫除」式重构。
{% endhint %}
