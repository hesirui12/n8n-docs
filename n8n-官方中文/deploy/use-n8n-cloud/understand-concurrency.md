---
contentType: explanation
nodeTitle: 理解并发
originalFilePath: manage-cloud/concurrency.md
originalUrl: 'https://docs.n8n.io/manage-cloud/concurrency'
url: 'https://docs.n8n.io/deploy/use-n8n-cloud/understand-concurrency'
layout:
  description:
    visible: false
---

# Cloud 并发（Cloud concurrency）

{% hint style="info" %}
**仅适用于 n8n Cloud**

本文档讨论的是 n8n Cloud 中的并发。想了解自托管 n8n 实例的并发控制，请阅读[自托管 n8n 的并发控制（self-hosted n8n concurrency control）](../host-n8n/configure-n8n/scaling/control-concurrency.md)。
{% endhint %}

{% hint style="info" %}
**小白提示：什么是「并发」？**

「并发（concurrency）」指的是**同一时刻有多少个任务在同时运行**。想象一下餐厅：厨房一次只能同时炒几个菜，如果订单一下子来太多，厨师就会忙不过来。n8n 也一样——如果同时运行的执行（executions）太多，实例就会变慢甚至没反应。所以 n8n 给每个套餐设置了并发上限。
{% endhint %}

过多的并发执行会导致性能下降（performance degradation）和失去响应（unresponsiveness）。为了防止这种情况并提高实例的稳定性，n8n 会对「普通模式（regular mode）」下的**生产执行（production executions）**设置并发限制。

超出限制的执行会进入**队列（queue）**等待稍后处理。这些执行会一直排在队列里，直到有并发额度空出来，然后按照 **FIFO（先进先出）** 的顺序被处理。

{% hint style="info" %}
**小白提示**：FIFO = First In, First Out，即「先来先服务」，和银行排队取号一样：先到先办，后来的排队等。所以如果你看到某个执行一直处于「排队中（queued）」状态，不用慌，等前面的处理完就会轮到它。
{% endhint %}

## 并发限制（Concurrency limits）

n8n 根据你的套餐来限制 Cloud 实例的并发执行数量。具体数字请参考[定价页面（Pricing）](https://n8n.io/pricing/)。

你可以在项目（project）或工作流（workflow）的 **executions**（执行）标签页顶部，看到当前的活跃执行数（number of active executions）以及你套餐的并发限制。

## 其他细节（Details）

关于并发，还有几个细节需要记住：

- **并发控制只作用于生产执行**：也就是由 webhook（网络钩子）或触发器节点（trigger node）启动的执行。它**不**适用于其他类型的执行，比如手动执行（manual executions）、子工作流执行（sub-workflow executions）或错误执行（error executions）。
- [测试评估（Test evaluations）](#user-content-fn-1)[^1] **不计入**生产并发限制。它们使用每个套餐独立的限额，来控制单次测试运行中最多能并行跑多少个测试用例：Community 和 Pro 1 为串行（sequential），Business 为 3，Enterprise 为 5。你可以在 **Run Test**（运行测试）弹窗中为某次运行调整这个数值。详见[基于指标的质量评估（Metric-based evaluations）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/test-and-improve-ai-workflows/use-metrics-to-measure-quality#run-test-cases-in-parallel)。
- **不能重试（retry）排队的执行**。取消或删除一个排队中的执行，也会把它从队列里移除。
- **实例启动时**，n8n 会把排队的执行恢复到并发上限的数量继续运行，其余的执行则重新放回队列。

## 与队列模式（queue mode）的对比（Comparison to queue mode）

{% hint style="info" %}
**功能可用性（Feature availability）**

队列模式（Queue mode）仅对 Cloud 的 Enterprise（企业版）套餐开放。要启用它，请[联系 n8n](https://n8n-community.typeform.com/to/y9X2YuGa)。
{% endhint %}

队列模式下的并发与普通模式下的并发是**两套不同的机制**。在队列模式下，并发设置决定的是**每个 worker（工作进程）可以并行运行多少个任务**；而在普通模式下，并发限制作用于**整个实例**。

{% hint style="info" %}
**小白提示**：把实例想象成一家公司：普通模式限制「整个公司同时能接多少单」；队列模式限制的是「每个员工（worker）同时能处理多少单」，公司整体能接的单量 = 员工数 × 每人的上限。这也解释了为什么队列模式需要更多的资源规划，以及它为什么仅限 Enterprise 套餐使用。
{% endhint %}

[^1]: 在 n8n 中，评估（evaluation）功能允许你给执行历史打标签、分类，并与新的执行进行对比。你可以利用它来了解：随着你的修改，工作流在长期运行中的表现如何。在开发以 AI 为中心的工作流时，这一功能尤其有用。
