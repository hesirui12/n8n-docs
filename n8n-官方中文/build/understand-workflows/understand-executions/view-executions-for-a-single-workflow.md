---
description: 查看并筛选当前画布上打开的工作流的所有执行记录。
---

# 工作流级执行列表 / Workflow-level executions list

工作流里的 **Executions**（执行）列表，会显示这个工作流的**所有**执行记录。也就是说，只要这个工作流跑过，不管成功失败，都在这里看得到。

{% hint style="info" %}
**已删除的工作流（Deleted workflows）**

当你删除一个工作流时，n8n 会连它的执行历史一起删除。这意味着你没法查看已删除工作流的执行记录。所以重要的工作流执行记录，请在删除前确认不需要了。
{% endhint %}

{% hint style="info" %}
**执行历史和工作流历史（Execution history and workflow history）**

别把执行列表和[工作流历史](../../manage-workflows/view-change-history.md)搞混了。

执行（Executions）是工作流的**运行记录**。通过执行列表，你可以看到当前版本工作流之前跑过的每一次。你可以把以前的执行记录复制回编辑器里，用来在当前工作流中[调试并重新运行过去的执行](debug-executions.md)（Debug and re-run past executions）。

工作流历史（Workflow history）则是工作流的**历史版本**：比如某个换过节点的版本、或者参数设置不同的版本。简单说：一个是"跑过的记录"，一个是"改过的版本"。
{% endhint %}

{% hint style="info" %}
**大白话**：执行历史 = "这台机器跑过的每一次流水记录"；工作流历史 = "机器本身改过几次版"。一个是运行日志，一个是版本记录，别混。
{% endhint %}

## 查看单个工作流的执行 / View executions for a single workflow

在工作流里，选择顶部菜单中的 **Executions**（执行）标签页，就可以预览这个工作流的所有执行记录。

{% hint style="info" %}
**使用最终用户凭据的执行（Executions using end-user credentials）**

当一次执行使用了[最终用户凭据](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/end-user-credentials)（end-user credential）时，只有"那个连接了账号并运行了节点"的用户本人，才能看到该节点的数据。对其他人来说——包括管理员——输出数据都会被脱敏（redacted）隐藏。
{% endhint %}

{% hint style="info" %}
**大白话**：最终用户凭据 = 每个用户用**自己的账号**登录去跑节点。这时候运行出来的数据是"私人财产"，只有本人能看，连管理员都看不到（为了保护个人隐私）。
{% endhint %}

## 过滤执行 / Filter executions

你可以对执行列表进行筛选过滤：

1. 在你的工作流中，选择 **Executions**（执行）。
2. 选择 **Filters**（筛选）。
3. 输入你的筛选条件。你可以按以下条件过滤：
	* **Status（状态）**：从 **Failed**（失败）、**Running**（运行中）、**Success**（成功）或 **Waiting**（等待中）中选择。
	* **Execution start（执行开始时间）**：查看在指定时间段内开始的执行。
	* **Saved custom data（已保存的自定义数据）**：这是你在工作流里用 Code（代码）节点创建的数据。输入键（key）和值（value）即可筛选。关于如何添加自定义数据，请参考[自定义执行数据](customize-executions-data.md)。

		{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/hEbJHXcEBce6m2wEE65f/" %}

{% hint style="info" %}
**大白话**：执行多了不好找？像逛淘宝筛选商品一样，按状态、按时间、按自定义标签把记录筛出来，一眼定位你要找的那次。
{% endhint %}

## 重试失败的工作流 / Retry failed workflows

如果你的工作流执行失败了，你可以重试这次执行。重试失败工作流的方法：

1. 打开 **Executions**（执行）列表。
2. 在你想重试的那条执行记录上，选择 **Refresh**（刷新）<img src="../../.gitbook/assets/refresh.png" alt="Refresh icon" data-size="line">。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/yD2T5eTeZvZaPRV8P7MJ/" %}

{% hint style="info" %}
**大白话**：跑挂了不用重头再来——直接在失败记录上点"刷新/重试"，让它用同样的数据再跑一遍。适合那种"偶发故障"（比如对方服务短暂抽风）的情况。
{% endhint %}
