---
contentType: howto
nodeTitle: 管理你的数据
originalFilePath: manage-cloud/cloud-data-management.md
originalUrl: https://docs.n8n.io/manage-cloud/cloud-data-management
url: https://docs.n8n.io/deploy/use-n8n-cloud/configure-cloud/manage-your-data
description: 如何在 Cloud 上管理你的数据。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# 管理你的数据（Manage your data）

在 Cloud 上管理数据，主要关心两件事：

* **内存占用（Memory usage）**：处理大量数据的复杂工作流，可能超出 n8n 的内存上限。一旦超限，实例（instance）可能会崩溃并无法访问。
* **数据存储（Data storage）**：根据你的执行设置和工作量，n8n 的数据库可能会越来越大，最终占满存储空间。

为了避免这些问题，n8n 建议你在构建工作流时就考虑「内存效率（memory efficiency）」，并且**不要保存不必要的数据**。

{% hint style="info" %}
**小白提示**：可以把「内存」理解为工作流运行时的「临时工作台」，把「存储」理解为「长期仓库」。工作台放不下会当场崩溃（内存超限），仓库塞太满会没地方放新东西（存储耗尽）。下面这篇文章就是教你怎么两样都省着用。
{% endhint %}

## 各 Cloud 套餐的内存上限（Memory limits on each Cloud plan）

当前套餐（Current plans）：

* Trial（试用）：320MiB 内存（RAM），10 millicore CPU（可突发 burstable）
* Starter（入门）：320MiB 内存（RAM），10 millicore CPU（可突发 burstable）
* Pro-1（1 万次执行）：640MiB 内存（RAM），20 millicore CPU（可突发 burstable）
* Pro-2（5 万次执行）：1280MiB 内存（RAM），80 millicore CPU（可突发 burstable）
* Enterprise（企业版）：4096MiB 内存（RAM），80 millicore CPU（可突发 burstable）

历史套餐（Legacy plans）：

* Start：320MiB 内存（RAM），10 millicore CPU（可突发 burstable）
* Power：1280MiB 内存（RAM），80 millicore CPU（可突发 burstable）

n8n 为每个实例提供最多 **100GB** 的数据存储空间。

{% hint style="info" %}
**小白提示**：MiB 和 MB 基本可以看作一回事（1 MiB ≈ 1.05 MB）。「millicore」是 CPU 份额单位，1000 millicore = 1 个完整的 CPU 核心；「可突发（burstable）」意思是短时间内可以超出基准线运行，但不能长期满负荷。简单记：**套餐等级越高，内存越大，能跑的数据越复杂**。
{% endhint %}

## 如何在你的工作流中降低内存占用（How to reduce memory consumption in your workflow）

工作流的构建方式会直接影响它执行时的内存消耗。虽然下面的这些准则并非适用于所有情况，但它们提供了一套「最佳实践基线（baseline of best practices）」，可以帮助你避免超出实例内存上限。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/EzVIOV8i2lmQ5HW3xFoo/" %}

{% hint style="info" %}
**小白提示**：上面这行是 GitBook 的「复用内容块（reusable block）」，会直接引用官方另一篇关于内存优化技巧的文档（通常包括：只保留需要的字段、及时清理不需要的数据、把大文件改用二进制方式处理等）。由于它是由官方平台动态加载的内容，这里无法展开成纯文字，请以官方页面显示的内容为准。
{% endhint %}

注意：n8n 软件本身运行就要占用内存。平均来说，光软件本身大约就要占 **180MiB** 内存。

和界面（UI）的交互也会消耗内存。在工作流还在执行重任务的同时，如果还在界面上频繁操作，也可能把内存推过上限。

## 如何在 Cloud 上管理执行数据（How to manage execution data on Cloud）

执行数据（execution data）包括：节点数据（node data）、参数（parameters）、变量（variables）、执行上下文（execution context）以及二进制数据引用（binary data references）。这类数据是基于文本的（text-based）。

二进制数据（binary data）是 n8n 无法用纯文本表示的非文本数据，比如图片、文档、音频和视频等文件。它的体积比文本数据大得多。

如果一个工作流消耗了大量数据，并且已经过了测试阶段（即已经在生产环境稳定运行），那么**停止保存成功的执行记录（successful executions）**是个不错的选择，可以省下大量存储空间。

{% hint style="info" %}
**小白提示**：n8n 默认会把每次「执行」的详细记录（每个节点进了什么数据、输出了什么）存进数据库，方便你事后排查问题。但在生产环境中，成功执行的记录大多没人再去看，存下来纯属浪费空间。下面的操作就是告诉你：怎么关掉成功执行的记录保存，只保留失败的记录用于排查问题。
{% endhint %}

控制 n8n 在数据库中保存多少执行数据，有两种方法：

**方法一：在管理后台（admin dashboard）里设置**

1. 从你的工作区（workspace）或编辑器（editor）中，进入 **Admin Panel**（管理面板）。
2. 选择 **Manage**（管理）。
3. 在 **Executions to Save**（要保存的执行记录）中，取消勾选你不想记录的执行类型。

**方法二：在工作流设置（workflow settings）里设置**

1. 点击 **Options**（选项）<img src="../../.gitbook/assets/three-dot-options-menu (1).png" alt="Options menu" data-size="line"> 菜单（通常位于工作流界面的右上角，是一个由三个点组成的「更多选项」按钮）。
2. 选择 **Settings**（设置）。n8n 会打开 **Workflow settings**（工作流设置）弹窗。
3. 把 **Save successful production executions**（保存成功的生产执行）改为 **Do not save**（不保存）。

{% hint style="info" %}
**小白提示**：上面步骤里的「生产执行（production executions）」指的是由触发器（如定时、Webhook）自动启动的执行，而不是你手动点击「执行」按钮触发的测试运行。生产环境里的成功执行最没必要保存，关掉它省空间又不影响排查失败问题。
{% endhint %}

## Cloud 数据清理与内存耗尽事故预防（Cloud data pruning and out of memory incident prevention）

### 自动数据清理（Automatic data pruning）

n8n 会**自动清理**执行日志（execution logs）：要么是达到了保留时间，要么是你达到了最大存储上限——**以先发生的那个为准**。清理总是从最旧到最新进行，具体限额取决于你的 Cloud 套餐：

* Start 和 Starter（入门）套餐：最多保存 **2500** 条执行记录，执行日志保留 **7 天**；
* Pro（专业）套餐：最多保存 **25000** 条执行记录，执行日志保留 **30 天**；
* Enterprise（企业版）套餐：最多保存 **50000** 条执行记录，执行日志**不限**保留时间。

### 手动数据清理（Manual data pruning）

尽管有自动清理机制，一些更重的执行和使用场景仍然可能超出数据库容量。在这种情况下，n8n 会进行**手动数据清理（manual pruning）**，以保护实例的稳定性。

1. 当某个实例的磁盘容量达到 **85%** 时，警报系统（alert system）会提醒 n8n。
2. n8n 随后清理执行数据。具体做法是：先给实例做一次备份（包括工作流、用户、凭据和执行数据），然后**不带执行数据**地恢复这个备份。

{% hint style="warning" %}
**注意：警报系统并不完美**

由于这个过程涉及人工操作的步骤，警报系统并不完美。如果警报在非工作时间（after hours）触发，或者数据消耗速度很快，那么在剩余磁盘空间被填满之前，可能来不及完成数据清理。
{% endhint %}

{% hint style="info" %}
**小白提示**：简而言之，官方给你的承诺是「自动清理 + 必要时人工兜底」，但它并不保证 100% 及时。所以你自己也要养成好习惯：**别让工作流产生太多无用数据、别保存不需要的执行记录**，这才是最稳妥的省钱（省空间）之道。
{% endhint %}
