---
title: Kafka 凭证
description: >-
  Kafka 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Kafka 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Kafka credentials
originalFilePath: integrations/builtin/credentials/kafka.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/kafka'
url: 'https://docs.n8n.io/integrations/builtin/credentials/kafka'
layout:
  description:
    visible: false
---

# Kafka 凭证

{% hint style="info" %}
**大白话**：Kafka 是「消息队列」界的当红炸子鸡，专门用来在系统之间高速传递大量消息（比如订单、日志、事件流）。n8n 要连它，只需要填**一个客户端 ID + 一堆 broker 地址**（格式是 `服务名:端口`）。如果 Kafka 那边开了登录认证（SASL），再把用户名密码和加密方式填上。没开 SSL 就把 SSL 开关关掉。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Kafka](../app-nodes/n8n-nodes-base.kafka.md)
- [Kafka Trigger（触发器）](../trigger-nodes/n8n-nodes-base.kafkatrigger.md)

{% hint style="info" %}
**Schema Registry（模式注册表）**

这些凭证只用来验证 Kafka broker。如果想连接需要认证的 Confluent Schema Registry 做 Avro 编解码，请使用单独的 [Schema Registry 凭证](schemaregistry.md)。
{% endhint %}

## 支持的验证方式

- Client ID（客户端 ID）

## 相关资源

关于该服务的更多信息，请参考 [Kafka 的文档](https://kafka.apache.org/documentation/)。

如果你是 Kafka 新手，请参考 [Apache Kafka 快速入门](https://kafka.apache.org/quickstart) 完成初始设置。

在 Kafka 中使用 SSL，请参考 [使用 SSL 进行加密和认证](https://kafka.apache.org/documentation/#security_ssl)。

## 使用 Client ID（客户端 ID）

要配置这个凭证，你需要一个正在运行的 Kafka 环境，以及：

- 一个 **Client ID（客户端 ID）**
- 相关的 **Brokers（Broker 列表）**
- 如果你的 Kafka 环境开启了认证，还需要用户名/密码等认证信息

设置步骤：

1. 在凭证的 **Client ID** 字段里输入客户端或消费组的 `CLIENT-ID`。
2. 以逗号分隔输入相关的 **Brokers** 列表，格式为 `<broker-service-name>:<port>`（broker 服务名:端口）。使用你在 `services` 列表里给 broker 定义的那个名字。例如 `kafka-1:9092,kafka-2:9092` 表示添加 `kafka-1` 和 `kafka-2` 两个 broker，端口都是 `9092`。
3. 如果你的 Kafka 环境没有用 SSL，把 **SSL** 开关关掉。
4. 如果你在 Kafka 环境里启用了 SASL 认证，把 **Authentication（认证）** 开关打开。然后填写：
    1. **Username（用户名）**
    2. **Password（密码）**
    3. 选择 broker 配置的 **SASL Mechanism（SASL 机制）**。更多信息请参考 [SASL 配置](https://kafka.apache.org/documentation/#security_sasl_config)。可选值包括：
        - `Plain`
        - `scram-sha-256`
        - `scram-sha-512`
