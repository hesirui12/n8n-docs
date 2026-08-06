---
title: Redis 触发器节点文档
description: >-
  学习如何在 n8n 中使用 Redis 触发器节点。按照本文档将
  Redis 触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Redis 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.redistrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.redistrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.redistrigger
layout:
  description:
    visible: false
---

# Redis 触发器节点

> **大白话**：这个节点是 Redis 频道的「收音机」。你让它订阅某个 Redis 频道，只要有人往这个频道发了一条新消息，它就立刻启动你的工作流。适合做程序之间"喊话传信"的自动化，比如后端发消息 → n8n 收到后去执行任务。

[Redis](https://redis.io/) 是一个开源的内存数据结构存储，常被用作数据库、缓存和消息代理（message broker）。

使用 Redis 触发器节点来订阅一个 Redis 频道。每当频道收到新消息时，工作流就会启动。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/redis.md)找到此节点的身份验证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [Redis Trigger integrations](https://n8n.io/integrations/redis-trigger/) 页面。
{% endhint %}
