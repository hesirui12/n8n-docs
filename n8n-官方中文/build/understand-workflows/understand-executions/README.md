---
description: 执行（Execution）就是工作流的一次运行。
---

# 执行 / Executions

执行（Execution）就是工作流的一次运行。你可以把工作流想象成一台"自动售货机"：你给它一个指令（比如"每天晚上 8 点，把 Excel 里的新行发给企业微信群"），它就会"跑一次"来完成这件事。每一次完整的"跑一遍"，就叫做一次**执行**。

{% hint style="info" %}
**大白话**：执行 = 工作流"跑了一次"这件事本身。不管结果是成功还是失败，只要它真的运行了，就产生了一次执行记录。就像你按了一次洗衣机启动键，转完一圈就是一次"执行"。
{% endhint %}

## 执行模式 / Execution modes

n8n 有两种执行模式：

* **手动（Manual）**：点击 **Execute Workflow**（执行工作流）按钮来手动运行工作流。在测试阶段，工作流还没发布（Unpublish）时，就是通过手动运行来试的。手动模式适合你边搭边测，看看每一步的数据对不对。
* **生产（Production）**：生产环境的工作流是自动运行的。你需要先**发布（Publish）**一个版本的工作流，它才会进入生产模式。发布之后，只要满足触发条件（比如到了定时时间、收到 Webhook 请求），工作流就会自动执行，不需要你手动点按钮。

{% hint style="info" %}
**大白话**：手动模式 = 你自己按"播放键"试一遍；生产模式 = 发布上线后，机器按条件自己跑。开发测试用前者，正式上线用后者。
{% endhint %}

## 执行如何计入配额 / How executions count towards quotas

[付费套餐](https://n8n.io/pricing/)（无论云托管还是自托管）都有执行次数配额（execution limit quota），也就是"你最多能跑多少次"的额度。**只有生产执行（production executions）会计入这个配额**——也就是由触发器（Trigger）、定时计划（Schedule）或轮询（Polling）自动启动的那些执行。

这个区分和你的实例环境（比如是开发环境还是生产环境）无关：判断标准只有一个，就是这次执行是不是**自动触发**的。手动点的、测试用的，都不占配额。

{% hint style="info" %}
**大白话**：配额就像手机流量包。自动跑的工作流才"耗流量"；你自己手动测试跑多少次都不扣流量。
{% endhint %}

### 按触发器类型统计执行次数 / Execution count by trigger type

执行怎么计数，取决于你用的是什么类型的触发器节点：

* **Schedule Trigger（定时触发器）节点**：每次节点触发都计 1 次执行，不管这次运行是成功还是失败。比如你设置每小时跑一次，那一天就是 24 次。
* **轮询（Polling）节点（比如 Google Drive Trigger）**：只有当轮询发现了**新数据**时才计 1 次。如果这次轮询什么都没查到（没有新文件、没有新记录），就不算一次执行。
* **Webhook Trigger（Webhook 触发器）节点**：每个到达的入站请求只要激活了触发器，就计 1 次执行——**包括 body 为空**的请求（比如 `{}`）。但如果请求本身格式错误（malformed），在工作流还没开始跑之前就失败了，这种不算执行。

{% hint style="info" %}
**大白话**：定时器是"到点就计数"；轮询是"查到新东西才计数"；Webhook 是"来一个请求计一次，格式烂的除外"。理解了这个区别，你就知道自己的用量是怎么算出来的了。
{% endhint %}

### 不计入配额的触发器和运行 / Triggers and runs that don't count

下面这些情况**不**计入你的执行配额：

* **手动执行（Manual executions）**：在编辑器中边搭建边测试时运行的工作流。
* **子工作流执行（Sub-workflow executions）**：当一个工作流用 Execute Sub-workflow（执行子工作流）节点去调用另一个工作流时，只有**父级（顶层）**那次执行会计数，被调用的子工作流不单独计数。
* **错误工作流执行（Error workflow executions）**：被设置为[错误工作流](../../flow-logic/handle-errors-gracefully.md)的工作流的运行。错误工作流是"专门用来处理其他工作流出错时的善后工作"的工作流，它自己跑不占配额。
* **轮询没查到数据（Polls that return no data）**：轮询触发器只有在发现新数据时才计数。
* **格式错误或被拒绝的请求（Malformed or rejected requests）**：工作流还没开始运行就失败的 Webhook 请求。

{% hint style="info" %}
**大白话**：官方给你留了几个"免费通道"：手动测试、子工作流、错误善后工作流、空轮询、坏请求——这些都不占你的执行额度。
{% endhint %}

## 执行列表 / Execution lists

n8n 提供两个执行列表：

* [工作流级执行列表](view-executions-for-a-single-workflow.md)：这个列表显示**某一个工作流**的所有执行记录。
* [所有执行列表](view-all-executions.md)：这个列表显示你**所有工作流**的所有执行记录。

n8n 还支持[给执行添加自定义数据](customize-executions-data.md)（Custom executions data），方便你记录额外的业务信息。

## 执行数据脱敏 / Execution data redaction

你可以对执行数据进行脱敏（redact），用来保护敏感信息。脱敏会隐藏工作流执行的**输入输出数据**，但保留执行的元数据（metadata），比如状态、耗时和节点名称。具体做法请参考 [Execution data redaction](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/security/redact-execution-data) 文档。

{% hint style="info" %}
**大白话**：脱敏 = 把执行记录里"具体跑了什么数据"盖住，只留"什么时候跑的、跑得怎么样、跑的是哪些节点"。这样即使别人能看执行记录，也看不到里面的敏感内容。
{% endhint %}
