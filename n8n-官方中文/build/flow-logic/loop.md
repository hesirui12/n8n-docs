---
contentType: howto
nodeTitle: Loop
originalFilePath: flow-logic/looping.md
originalUrl: 'https://docs.n8n.io/flow-logic/looping'
url: 'https://docs.n8n.io/build/flow-logic/loop'
layout:
  description:
    visible: false
---

# 在 n8n 中循环（Looping in n8n）

循环（Looping）非常有用——当你想要处理多条数据，或者想反复执行某个操作时，就要用到它。比如：给通讯录里的每一位联系人都发一条消息。n8n 会自动帮你处理这种「重复处理」的工作，也就是说：大多数情况下，你根本不需要专门在工作流里搭建循环结构。不过，也有[一些节点](#node-exceptions)是例外，需要你手动处理。

{% hint style="info" %}
**大白话解释：什么是「循环」？**

「循环」就是让同一段操作自动反复执行很多次。比如你有 100 个客户，想给每个人都发一条短信。如果手动做，就要把「发短信」这个操作复制 100 次。而 n8n 的巧妙之处在于：它默认就会把「发给一个人」的操作自动重复执行 100 次，不需要你手动去搭循环。
{% endhint %}

## 在 n8n 中使用循环（Using loops in n8n）

n8n 的节点（Node）可以接收任意数量的数据项（Item）作为输入，处理这些数据项，然后输出处理结果。你可以把每一个数据项（Item）想象成一个独立的数据点，或者节点输出表格中的一行数据。

![The Customer Datastore node output](../.gitbook/assets/customer_datastore_node.png)

节点通常会针对每个数据项各执行一次。举个例子：假如你想把 Customer Datastore（客户数据存储）节点里每位客户的「姓名」和「备注」作为消息发送到 Slack，你只需要：

1. 把 Slack 节点连接到 Customer Datastore 节点。
2. 配置好相关参数。
3. 执行这个节点。

然后你就会收到 5 条消息——因为每个数据项各对应一条消息。

{% hint style="info" %}
**大白话解释：为什么能自动发出 5 条消息？**

Customer Datastore 节点输出了 5 行数据（也就是 5 个客户）。Slack 节点收到这 5 行数据后，会「一行一行」地处理：第一行发一条、第二行发一条……所以一共发出 5 条消息。这就是 n8n 处理多条数据的原理——你不需要手动把节点连成一个循环，n8n 内部已经自动这么做了。
{% endhint %}

这就是处理多条数据的方法：不需要显式地把节点连接成循环，n8n 会自动遍历处理。

### 节点只执行一次（Executing nodes once）

有些情况下，你并不想让一个节点处理收到的所有数据项。比如：只想给第一位客户发 Slack 消息。这时你可以打开该节点 **Settings（设置）** 标签页中的 **Execute Once（只执行一次）** 参数。当传入的数据包含多个数据项、而你想只处理第一个时，这个设置非常有用。

## 创建循环（Creating loops）

通常情况下，n8n 会自动对传入的所有数据项进行遍历（迭代）。但也有一些特殊场景，你必须自己手动创建一个循环来遍历所有数据项。哪些节点不会自动遍历所有传入的数据呢？请看下面的 [节点例外情况](#node-exceptions) 列表。

### 循环直到满足某个条件（Loop until a condition is met）

要在 n8n 工作流中创建循环，方法是：把一个节点的输出，连接回它前面某个节点的输入（也就是把连线「绕回来」）。然后添加一个 [IF](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.if) 节点，用来判断「什么时候该停止循环」。

{% hint style="info" %}
**大白话解释：循环怎么停下来？**

如果只是把线绕回来，工作流就会无限循环、永远停不下来。所以需要放一个 IF 节点当「刹车」：每循环一次就问一次「条件满足了吗？」——满足就跳出循环继续往后走，不满足就再绕回去执行一遍。
{% endhint %}

这里有一个[示例工作流](https://n8n.io/workflows/1130)，展示了如何使用 `IF` 节点实现循环：

![Editor UI view of sample workflow](../.gitbook/assets/example_workflow.png)

### 循环直到所有数据项都被处理完（Loop until all items are processed）

当你想要一直循环、直到所有数据项都被处理完时，可以使用 [Loop Over Items](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.splitinbatches)（遍历数据项）节点。如果想逐个处理每个数据项，请把 **Batch Size（批量大小）** 设置为 `1`。

你也可以把数据分成一组一组（即「批次」）来处理。这种「分批处理」的方式很有用：当你要处理的数据量很大时，可以避免触发 API 的速率限制（rate limit，指单位时间内允许的调用次数上限）；或者当你想只处理返回结果中的某一组特定数据时，也非常有用。

Loop Over Items 节点会在所有传入的数据项都被分成批次、并传递给工作流中的下一个节点之后，自动停止执行。所以使用这个节点时，你**不需要**额外添加 IF 节点来手动停止循环。

## 节点例外情况（Node exceptions）

下面这些节点和操作，需要你在工作流里手动设计循环：

* [CrateDB](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.cratedb)：`insert`（插入）和 `update`（更新）操作只会执行一次。
* [Code](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.code)（代码）节点，在 **Run Once for All Items（所有数据项只运行一次）** 模式下：会根据你输入的代码片段一次性处理所有数据项。
* [Execute Workflow](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.executeworkflow)（执行工作流）节点，在 **Run Once for All Items（所有数据项只运行一次）** 模式下。
* [HTTP Request](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.httprequest)（HTTP 请求）节点：分页（pagination）必须由你自己处理。如果你的 API 调用返回的是分页结果，你必须创建一个循环，一页一页地获取数据。
* [Microsoft SQL](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.microsoftsql)：`insert`（插入）、`update`（更新）和 `delete`（删除）操作只会执行一次。
* [MongoDB](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.mongodb)：`insert`（插入）和 `update`（更新）操作只会执行一次。
* [QuestDB](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.questdb)：`insert`（插入）操作只会执行一次。
* [Redis](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.redis)：
	* 提示：无论传入的数据有多少条，这个操作都只会执行一次。
* [RSS Read](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.rssfeedread)（RSS 订阅读取）节点：只针对请求的 URL 执行一次。
* [TimescaleDB](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.timescaledb)：`insert`（插入）和 `update`（更新）操作只会执行一次。

{% hint style="info" %}
**大白话解释：这些节点为什么特殊？**

大多数节点收到 5 条数据，就会自动执行 5 次。但上面这些节点或操作「偷懒」：不管你给它们多少条数据，它们都只执行一次（比如数据库的 `insert` 操作，通常是把整批数据一次性写进去）。所以当你需要它们逐条处理时，就要自己动手设计循环了。
{% endhint %}
