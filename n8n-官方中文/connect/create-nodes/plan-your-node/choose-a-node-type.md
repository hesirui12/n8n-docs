---
contentType: explanation
nodeTitle: Choose a node type
originalFilePath: integrations/creating-nodes/plan/node-types.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/plan/node-types'
url: 'https://docs.n8n.io/connect/create-nodes/plan-your-node/choose-a-node-type'
layout:
  description:
    visible: false
---

# 节点类型：触发器和动作（Node types: Trigger and Action）

你可以为 n8n 构建两种节点类型：触发器节点（trigger nodes）和动作节点（action nodes）。

两种类型的节点都能与外部服务集成。

## 触发器节点（Trigger nodes）

[触发器节点](#user-content-fn-1)[^1] 用来启动一个工作流，并提供初始数据。一个工作流可以包含多个触发器节点，但在每次执行时，根据触发事件的不同，只有其中一个会真正执行。

n8n 中有三种触发器节点：

| 类型 | 说明 | 示例节点 |
| --- | --- | --- |
| Webhook（网络钩子） | 用于支持 webhook 的服务。这类节点监听事件，并实时触发工作流。 | [Zendesk Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Zendesk)、[Telegram Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Telegram)、[Brevo Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Brevo) |
| Polling（轮询） | 用于不支持 webhook 的服务。这类节点会定时检查有没有新数据，发现更新时触发工作流。 | [Airtable Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Airtable)、[Gmail Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Google/Gmail)、[Google Sheet Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Google/Sheet)、[RssFeed Read Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/RssFeedRead) |
| 其他（Others） | 处理与 HTTP 请求或轮询无关的实时响应的节点。包括消息队列节点和基于时间的触发器节点。 | [AMQP Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Amqp)、[RabbitMQ Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/RabbitMQ)、[MQTT Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/MQTT)、[Schedule Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Schedule)、[Email Trigger (IMAP)](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/EmailReadImap) |

{% hint style="info" %}
**小白提示：Webhook vs 轮询，怎么选？**

- **Webhook**：外部服务主动「敲门」通知 n8n（「有新事件啦，快跑工作流！」），实时性最好，n8n 不用一直盯着。前提是服务支持 webhook。
- **轮询（Polling）**：外部服务不支持 webhook 时，n8n 只能每隔一段时间自己去「敲门」问一次（「有新数据吗？有新数据吗？」），缺点是可能有延迟、且会消耗少量资源。

另外提醒一下：因为一个工作流每次执行只跑一个触发器，所以如果你在同一份工作流里放多个触发器，要清楚「这次到底是哪个事件把它跑起来的」。
{% endhint %}

## 动作节点（Action nodes）

动作节点在工作流中执行具体操作。这些操作可以包括处理数据，以及在外部系统中触发事件。

[^1]: 触发器节点是一种特殊的节点，负责在满足特定条件时执行工作流。所有用于生产环境的工作流至少需要一个触发器，来确定工作流应该在什么时候运行。
