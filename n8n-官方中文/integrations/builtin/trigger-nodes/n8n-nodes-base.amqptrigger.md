---
title: AMQP 触发器节点文档（AMQP Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 AMQP 触发器节点。按照技术文档将 AMQP
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: AMQP Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.amqptrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.amqptrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.amqptrigger
layout:
  description:
    visible: false
---

# AMQP 触发器节点（AMQP Trigger node）

{% hint style="info" %}
**大白话**：AMQP 是一个消息队列（Message Queue）领域的标准协议，常见于 RabbitMQ、Azure Service Bus 这类消息中间件。简单说，消息队列就是「程序之间互相传话」的管道：一个程序把消息丢进队列，另一个程序取走处理。这个触发器节点就像一个「收件箱感应器」——只要有新消息到达队列，它就立刻触发工作流。本节点支持 AMQP 1.0 兼容的消息代理（Broker），适合做异步任务、削峰填谷、微服务解耦等场景。
{% endhint %}

[AMQP](https://www.amqp.org/) 是面向消息中间件（message-oriented middleware）的开放标准应用层协议。AMQP 的核心特性包括消息导向、队列、路由、可靠性和安全性。本节点支持 AMQP 1.0 兼容的消息代理（message broker）。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/amqp.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [AMQP 集成](https://n8n.io/integrations/amqp-trigger/)页面。
{% endhint %}
