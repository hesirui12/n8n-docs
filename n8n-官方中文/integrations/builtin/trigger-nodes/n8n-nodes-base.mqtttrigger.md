---
title: MQTT Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 MQTT Trigger 节点。按照本文档将
  MQTT Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: MQTT Trigger 节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.mqtttrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.mqtttrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.mqtttrigger
layout:
  description:
    visible: false
---

# MQTT Trigger 节点

> **大白话**：MQTT 是一种非常轻量的「发布-订阅」网络协议（OASIS 和 ISO 标准），常用于物联网设备之间传消息——设备 A 往某个话题（topic）发消息，所有订阅这个话题的设备都能收到。这个触发器节点订阅 MQTT 话题，一有消息发布就启动你的工作流。

[MQTT](https://mqtt.org) 是一种开放的开源轻量级「发布-订阅」网络协议（OASIS 和 ISO 标准），用于在设备之间传输消息。

{% hint style="info" %}
**凭证（Credentials）**

你可以[在这里](../credentials/mqtt.md)找到此节点的认证信息。
{% endhint %}

{% hint style="info" %}
**示例与模板**

想找使用示例和入门模板，可以查看 n8n 的 [MQTT Trigger 集成](https://n8n.io/integrations/mqtt-trigger/) 页面。
{% endhint %}
