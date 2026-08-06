---
title: Twilio 节点文档
description: >-
  学习如何在 n8n 中使用 Twilio 节点。按照技术文档将
  Twilio 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Twilio 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.twilio.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.twilio'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.twilio'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Twilio 是云通信平台，主要用来发短信（SMS）、彩信（MMS）、WhatsApp 消息，还能打电话。这个节点让你在 n8n 里发短信/彩信/WhatsApp 消息，或者打电话（用文字转语音播放一段话）。常用场景：订单发货后自动给客户发短信；系统报警时自动拨打电话。
{% endhint %}

# Twilio 节点

使用 Twilio 节点来自动化你在 Twilio 中的工作，并把它与其它应用集成。n8n 支持用 Twilio 发送 MMS/SMS 和 WhatsApp 消息。

在本页你可以看到 Twilio 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Twilio 凭证](../credentials/twilio.md)。
{% endhint %}

（官方此处嵌入了「如何开始使用应用节点」的通用说明组件，此处从略。）

## 操作

* SMS（短信）
    * Send SMS/MMS/WhatsApp message（发送 SMS/MMS/WhatsApp 消息）
* Call（电话）
    * Make a phone call using text-to-speech to say a message（使用文字转语音拨打电话并朗读一段话）

## 模板与示例

[浏览 Twilio 节点的官方集成模板](https://n8n.io/integrations/twilio)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Twilio 官方文档](https://www.twilio.com/docs/usage/api)。

（官方此处嵌入了通用资源组件，此处从略。）
