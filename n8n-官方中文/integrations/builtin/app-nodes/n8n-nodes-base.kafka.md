---
title: Kafka 节点文档
description: >-
  学习如何在 n8n 中使用 Kafka 节点。按照技术文档将
  Kafka 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Kafka 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.kafka.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.kafka'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.kafka'
---

{% hint style="info" %}
**大白话**：Kafka 是大数据领域最常用的「消息队列」系统，专门用来高吞吐地收发消息（比如把日志、用户行为数据源源不断地送进数据管道）。这个节点能让你在 n8n 里向 Kafka 发送消息，适合做「系统事件 → 把数据写入 Kafka」这类流程。
{% endhint %}

# Kafka 节点

使用 Kafka 节点来自动化你在 Kafka 中的工作，并把它与其它应用集成。n8n 内置支持 Kafka 的大量功能，包括发送消息。

在本页你可以看到 Kafka 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Kafka 凭证](../credentials/kafka.md)。
{% endhint %}

{% hint style="info" %}
**Schema Registry（模式注册表）**

如果想用带认证的 Confluent Schema Registry（例如 Confluent Cloud）对消息进行编码，请在节点里开启 **Use Schema Registry（使用模式注册表）**，并添加一个 [Schema Registry 凭证](../credentials/schemaregistry.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作

- Send message（发送消息）

## 模板与示例

[浏览 Kafka 节点的官方集成模板](https://n8n.io/integrations/kafka)，或[搜索全部模板](https://n8n.io/workflows/)。
