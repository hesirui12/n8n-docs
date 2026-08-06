---
title: AMQP Sender 节点文档
description: >-
  学习如何在 n8n 中使用 AMQP Sender 节点。按照技术文档将 AMQP
  Sender 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: AMQP Sender 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.amqp.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.amqp'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.amqp'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：AMQP 是一种消息队列通信协议（RabbitMQ 就是基于它的），消息队列就是「先把消息放进一个信箱，别的程序稍后来取」的机制。这个节点的作用很简单：往 AMQP 消息队列里发一条消息。适合做系统之间的异步通知，比如：订单创建后，把订单数据发到队列，让下游程序慢慢处理。
{% endhint %}

# AMQP Sender 节点

使用 AMQP Sender 节点来自动化你在 AMQP Sender 中的工作，并把它与其它应用集成。n8n 内置支持 AMQP Sender 的发送消息功能。

在本页你可以看到 AMQP Sender 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [AMQP Sender 凭证](../credentials/amqp.md)。
{% endhint %}

## 操作

- Send message（发送消息）

## 模板与示例

[浏览 AMQP Sender 节点的官方集成模板](https://n8n.io/integrations/amqp-sender)，或[搜索全部模板](https://n8n.io/workflows/)。
