---
title: RabbitMQ 触发器节点文档
description: >-
  学习如何在 n8n 中使用 RabbitMQ 触发器节点。按照本文档将
  RabbitMQ 触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: RabbitMQ 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.rabbitmqtrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.rabbitmqtrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.rabbitmqtrigger
layout:
  description:
    visible: false
---

# RabbitMQ 触发器节点

> **大白话**：这个节点是消息队列的「取件员」。它守在 RabbitMQ 消息队列上，只要队列里来了新消息，它就立刻把消息取出来启动你的工作流去处理。适合做"系统之间解耦传数据"的场景，比如后端程序往队列里丢任务，n8n 自动消费处理。

[RabbitMQ](https://www.rabbitmq.com) 是一个开源的消息代理（message broker），负责接收并转发消息。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/rabbitmq.md)找到此节点的身份验证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [Rabbit MQ Trigger integrations](https://n8n.io/integrations/rabbitmq-trigger/) 页面。
{% endhint %}

## 相关资源（Related resources）

n8n 为 RabbitMQ 提供了一个应用节点（app node）。你可以[在此处](../app-nodes/n8n-nodes-base.rabbitmq.md)找到该节点的文档。

在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/rabbitmq-trigger/)。
