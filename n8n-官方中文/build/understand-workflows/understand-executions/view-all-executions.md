---
description: 查看并筛选所有工作流的所有执行记录。
---

# 查看所有执行 / View all executions

要查看 n8n 实例中**所有**的执行记录，请进入 **Overview**（概览）页面，然后点击进入 **Executions**（执行）标签页。这里会显示你有权访问的所有工作流的全部执行记录。

如果你的 n8n 实例支持**项目（projects）**，你还可以在你有权访问的项目内查看执行标签页。项目内的执行列表，只会显示**该项目内**工作流的执行记录，其他项目的不会混进来。

{% hint style="info" %}
**已删除的工作流（Deleted workflows）**

当你删除一个工作流时，n8n 会连它的执行历史一起删除。这意味着你没法查看已删除工作流的执行记录。
{% endhint %}

{% hint style="info" %}
**大白话**：想看"整个系统最近都跑了什么"，就去 **Overview**（概览）→ **Executions**（执行）标签页，所有工作流的运行记录都在这里一屏看全。有项目（projects）的话，还能按项目切着看，互不干扰。
{% endhint %}

## 过滤执行 / Filter executions

你可以对执行列表进行筛选过滤：

1. 在 **Overview**（概览）页面或某个具体的**项目（project）**中，选择 **Executions**（执行）标签页，打开列表。
2. 选择 **Filters**（筛选）。
3. 输入你的筛选条件。你可以按以下条件过滤：
   * **Workflows（工作流）**：选择全部工作流，或者指定某个工作流的名称。
   * **Status（状态）**：从 **Failed**（失败）、**Running**（运行中）、**Success**（成功）或 **Waiting**（等待中）中选择。
   * **Execution start（执行开始时间）**：查看在指定时间段内开始的执行。
   * **Saved custom data（已保存的自定义数据）**：这是你在工作流里用 Code（代码）节点创建的数据。输入键（key）和值（value）即可筛选。关于如何添加自定义数据，请参考[自定义执行数据](customize-executions-data.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/hEbJHXcEBce6m2wEE65f/" %}

{% hint style="info" %}
**大白话**：所有工作流的记录都堆在一起不好找？这个筛选器就是"全局搜索"：按工作流名、按状态、按时间、按自定义标签，几下就把你要的那批记录筛出来。
{% endhint %}

## 重试失败的工作流 / Retry failed workflows

如果你的工作流执行失败了，你可以重试这次执行。重试失败工作流的方法：

1. 在 **Overview**（概览）页面或某个具体的**项目（project）**中，选择 **Executions**（执行）标签页，打开列表。
2. 在你想重试的那条执行记录上，选择 **Retry execution**（重试执行）<img src="../../.gitbook/assets/three-dot-options-menu (1).png" alt="Options menu icon" data-size="line">。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/yD2T5eTeZvZaPRV8P7MJ/" %}

{% hint style="info" %}
**大白话**：全局列表里也能重试！在失败的那条记录上，点三个点的菜单（Options），选 **Retry execution**（重试执行），就能用同样的数据再跑一次，不用切回工作流里操作。
{% endhint %}

## 把之前的执行数据加载回当前工作流 / Load data from previous executions into your current workflow

你可以把某次之前的执行数据重新加载回画布（canvas）中。更多信息请参考[调试执行](debug-executions.md)（Debug executions）文档。

{% hint style="info" %}
**大白话**：以前跑过的数据也能"捞回来"接着用——把某次执行的数据灌回画布，基于真实的历史数据继续调试工作流，非常实用。
{% endhint %}
