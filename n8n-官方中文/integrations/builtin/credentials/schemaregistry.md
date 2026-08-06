---
title: Schema Registry 凭证
description: Schema Registry 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证 Schema Registry 的身份。
contentType:
  - integration
  - reference
priority: medium
layout:
  description:
    visible: false
---

# Schema Registry 凭证

{% hint style="info" %}
**大白话**：Kafka 在传数据时经常用 Avro 这种「带格式定义」的消息格式，而 Schema Registry 就是「存放这些格式定义（schema）的注册中心」，负责统一管格式、做兼容性检查。n8n 连它需要填一个 **URL**（注册中心的地址），如果它要密码就在 **Basic Auth** 里填用户名和密码——比如 Confluent Cloud 的 Schema Registry，用户名就是 API key，密码就是 API secret。
{% endhint %}

当你在节点上启用 **Use Schema Registry（使用 Schema Registry）** 时，这些凭证可以用来验证以下节点的身份：

- [Kafka](../app-nodes/n8n-nodes-base.kafka.md)
- [Kafka Trigger（触发器）](../trigger-nodes/n8n-nodes-base.kafkatrigger.md)

Kafka 节点和 Kafka Trigger 使用 Schema Registry 来编码和解码 Avro 消息。这个凭证和你的 [Kafka 凭证](kafka.md)是分开的：注册中心有自己独立的端点和验证方式，和 Kafka brokers（消息代理）不一样。

## 支持的验证方式

- None（无）
- Basic Auth（用户名和密码），比如 Confluent Cloud Schema Registry 的 API key 和 secret

## 相关资源

关于使用该服务的更多信息，请参考 [Confluent Schema Registry 文档](https://docs.confluent.io/platform/current/schema-registry/index.html)。

## 配置凭证

要配置这个凭证，你需要 Schema Registry 的 URL，以及（如果它需要验证）访问它的凭据。

1. 在 **URL** 字段里，输入你的 Schema Registry 基础地址，比如 `https://psrc-xxxxx.region.aws.confluent.cloud`。
2. 选择 **Authentication（验证方式）**：
    - **None（无）**：用于不需要验证的 Schema Registry。
    - **Basic Auth（账号密码验证）**：用于需要 HTTP Basic Auth 的 Schema Registry，比如 Confluent Cloud。然后填写：
        1. **Username（用户名）**。对于 Confluent Cloud，这是 Schema Registry API key。
        2. **Password（密码）**。对于 Confluent Cloud，这是 Schema Registry API secret。
3. 选择 **Save（保存）**。n8n 会通过调用注册中心的 `/subjects` 端点来测试这个凭证。

要使用这个凭证，打开你的 Kafka 或 Kafka Trigger 节点，启用 **Use Schema Registry（使用 Schema Registry）**，然后选择这个凭证。
