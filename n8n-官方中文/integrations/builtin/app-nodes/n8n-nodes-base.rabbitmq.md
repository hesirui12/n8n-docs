---
title: RabbitMQ 节点文档
description: >-
  学习如何在 n8n 中使用 RabbitMQ 节点。按照技术文档将 RabbitMQ
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: RabbitMQ 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.rabbitmq.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.rabbitmq'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.rabbitmq'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：RabbitMQ 是一款流行的开源消息队列（Message Queue）中间件，用来在系统之间传递消息、解耦各个服务。用这个节点，你可以在 n8n 里往队列发送消息，或从队列里取出（消费）消息，实现「生产-消费」模式的异步任务处理。
{% endhint %}

# RabbitMQ 节点

使用 RabbitMQ 节点来自动化你在 RabbitMQ 中的工作，并把它与其它应用集成。n8n 内置支持 RabbitMQ 的大量功能，包括接收（accepting）和转发（forwarding）消息。

在本页你可以看到 RabbitMQ 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [RabbitMQ 凭证](../credentials/rabbitmq.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作（Operations）

* Delete From Queue（从队列删除消息）
* Send a Message to RabbitMQ（向 RabbitMQ 发送消息）

## 模板与示例（Templates and examples）

[浏览 RabbitMQ 节点文档集成模板](https://n8n.io/integrations/rabbitmq)，或[搜索全部模板](https://n8n.io/workflows/)。
