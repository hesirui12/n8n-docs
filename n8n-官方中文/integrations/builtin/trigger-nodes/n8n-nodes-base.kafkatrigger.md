---
title: Kafka Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 Kafka Trigger 节点。按照本文档将
  Kafka Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Kafka Trigger 节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.kafkatrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.kafkatrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.kafkatrigger
layout:
  description:
    visible: false
---

# Kafka Trigger 节点

> **大白话**：Kafka 是一个开源分布式「事件流」平台，常用于高性能数据管道、流式分析、数据集成和关键业务系统。这个触发器节点订阅 Kafka 的主题（topic），一有新消息进来就启动你的工作流。⚠️ 注意两个坑：①解码带认证的 Schema Registry 消息时要在节点里开启 Use Schema Registry；②Kafka 消息如果用的是 LZ4、Snappy 或 ZSTD 压缩（Confluent 和 JVM 生产端的常见默认），这个触发器读不了，会报错，得让生产端改用 gzip 或不压缩。

[Kafka](https://kafka.apache.org/) 是一个开源分布式事件流平台，可用于高性能数据管道、流式分析、数据集成和关键业务应用。

{% hint style="info" %}
**凭证（Credentials）**

你可以[在这里](../credentials/kafka.md)找到此节点的认证信息。
{% endhint %}

{% hint style="info" %}
**Schema Registry（模式注册表）**

要解码使用带认证的 Confluent Schema Registry（例如 Confluent Cloud）的消息，请在节点中启用 **Use Schema Registry（使用模式注册表）**，并添加一个 [Schema Registry 凭证](../credentials/schemaregistry.md)。
{% endhint %}

{% hint style="warning" %}
**消息压缩（Message compression）**

Kafka Trigger 可以消费未压缩的消息，以及使用 **GZIP** 压缩的消息。它无法解码使用 **LZ4**、**Snappy** 或 **ZSTD** 压缩的消息（这些是 Confluent 和 JVM 生产端的常见默认配置）：消费此类主题会报 unsupported-compression-format（不支持的压缩格式）错误。要消费该主题，请将生产端配置为使用 gzip 或不压缩。
{% endhint %}

{% hint style="info" %}
**示例与模板**

想找使用示例和入门模板，可以查看 n8n 的 [Kafka Trigger 集成](https://n8n.io/integrations/kafka-trigger/) 页面。
{% endhint %}
