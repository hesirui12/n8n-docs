---
contentType: explanation
nodeTitle: 解决内存问题（Fix memory issues）
originalFilePath: hosting/scaling/memory-errors.md
originalUrl: 'https://docs.n8n.io/hosting/scaling/memory-errors'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/fix-memory-issues'
layout:
  description:
    visible: false
---

# 内存相关错误（Memory-related errors）

n8n 不限制每个节点可以获取和处理的数据量。虽然这给了你自由，但当工作流执行所需的内存超过可用内存时，就会导致错误。本页介绍如何识别和避免这些错误。

{% hint style="info" %}
**仅适用于自托管 n8n（Only for self-hosted n8n）**

本页介绍的是[自托管 n8n](../../README.md) 时可能出现的内存相关错误。想了解 [n8n Cloud](../../../use-n8n-cloud/README.md) 的内存限制，请访问 [Cloud 数据管理](../../../use-n8n-cloud/configure-cloud/manage-your-data.md)。
{% endhint %}

{% hint style="info" %}
**大白话**：内存（memory）可以简单理解为服务器上的「临时工作台」。n8n 处理工作流时，数据都要先放到内存里才能加工。如果一次处理的数据太大（比如从接口拉了几十万条记录），内存被塞满，n8n 就会报错甚至崩掉。这一页教你：①怎么认出这类报错；②为什么会发生；③两种解决办法（加大内存 / 减少内存占用）。
{% endhint %}

## 识别内存不足的情况（Identifying out of memory situations）

在部分内存不足的情况下，n8n 会提供错误消息来提醒你。例如，类似 **Execution stopped at this node (n8n may have run out of memory while executing it)**（执行在此节点停止，n8n 在执行时可能内存不足）的消息。

包含 **Problem running workflow**（运行工作流时出现问题）、**Connection Lost**（连接丢失）或 **503 Service Temporarily Unavailable**（503 服务暂时不可用）的错误消息，通常说明某个 n8n 实例已经不可用。

自托管 n8n 时，你还有可能在服务器日志中看到类似 **Allocation failed - JavaScript heap out of memory**（分配失败 - JavaScript 堆内存不足）的错误消息。

在 n8n Cloud 上，或使用 n8n 的 Docker 镜像时，遇到此类问题 n8n 会自动重启。但如果你是用 npm 运行 n8n，则可能需要手动重启。

## 典型原因（Typical causes）

这类问题发生的原因通常是：一次工作流执行所需的内存超过了 n8n 实例可用的内存。会增加工作流执行内存用量的因素包括：

- [JSON 数据](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/understand-n8ns-data-structure)的量。
- 二进制数据的大小。
- 工作流中节点的数量。
- 有些节点很吃内存：[Code](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.code) 节点和旧的 Function 节点会显著增加内存消耗。
- 手动或自动的工作流执行：手动执行会增加内存消耗，因为 n8n 需要为前端界面复制一份数据。
- 同一时间还有其他工作流在运行。

## 避免内存不足的情况（Avoiding out of memory situations）

遇到内存不足的情况时，有两个选择：要么增加 n8n 可用的内存，要么减少内存消耗。

### 增加可用内存（Increase available memory）

自托管 n8n 时，增加 n8n 可用内存意味着给你的 n8n 实例配置更多的内存。这可能让你的托管服务商产生额外费用。

在 n8n Cloud 上，你需要升级到更大的套餐。

### 减少内存消耗（Reduce memory consumption）

这种方法更复杂，意味着需要重新构建导致问题的工作流。本节提供一些如何减少内存消耗的指导。并非所有建议都适用于所有工作流。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/EzVIOV8i2lmQ5HW3xFoo/" %}

{% hint style="info" %}
**大白话**：上面嵌入的内容是官方关于「如何减少内存消耗」的建议合集（例如：尽早用「筛选/聚合」节点缩小数据量、不要把超大文件一次性全部读进内存、把大任务拆分成小批次处理等）。当你的工作流因为数据量太大而报内存错误时，核心思路是：让每个节点「少拿一点、早点变小」，而不是让服务器硬扛。
{% endhint %}

### 增加老生代内存（Increase old memory）

这适用于自托管 n8n。当遇到 **JavaScript heap out of memory**（JavaScript 堆内存不足）错误时，给 V8 JavaScript 引擎的老生代内存区（old memory section）分配额外内存通常很有用。要做到这一点，请通过命令行或 `NODE_OPTIONS` [环境变量](https://nodejs.org/api/cli.html#node_optionsoptions) 设置合适的 [V8 选项](https://nodejs.org/api/cli.html#--max-old-space-sizesize-in-megabytes) `--max-old-space-size=SIZE`。

> 代码说明（示例）：`export NODE_OPTIONS=--max-old-space-size=4096` 表示把 Node.js 的堆内存上限提高到 4 GB（4096 MB）。请根据你服务器的物理内存合理设置该值。
