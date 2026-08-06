---
title: MQTT 节点文档
description: >-
  学习如何在 n8n 中使用 MQTT 节点。按照技术文档将 MQTT
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: MQTT 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.mqtt.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mqtt'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mqtt'
layout:
  description:
    visible: false
---

# MQTT 节点

> 💡 **大白话**：MQTT 是一种轻量级的「消息传递协议」，常用于物联网设备之间传消息。用这个节点，你可以让 n8n 往某个 MQTT 主题（Topic）发布一条消息，比如「传感器报警时自动把消息发给 MQTT 服务器」。注意：接收消息要用另一个专门的「MQTT Trigger（触发器）」节点。

使用 MQTT 节点来自动化你在 MQTT 中的工作，并把它与其它应用集成。n8n 支持用 MQTT 传输消息。

在本页你可以看到 MQTT 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [MQTT 凭证](../credentials/mqtt.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作（Operations）

使用 MQTT 节点发送消息。你可以设置消息主题（topic），并选择是否把节点的输入数据作为消息的一部分发送。

## 模板与示例（Templates and examples）

[浏览 MQTT 节点文档集成模板](https://n8n.io/integrations/mqtt)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源（Related resources）

n8n 为 MQTT 提供了一个触发器节点。你可以在这里找到触发器节点的文档：[MQTT Trigger 节点](../trigger-nodes/n8n-nodes-base.mqtttrigger.md)。

关于该服务的更多信息，请参考 [MQTT 的文档](https://mqtt.org/getting-started/)。
