---
title: Twilio 触发器节点文档
description: >-
  学习如何在 n8n 中使用 Twilio 触发器节点。按照本文档将
  Twilio 触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Twilio 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.twiliotrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.twiliotrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.twiliotrigger
layout:
  description:
    visible: false
---

# Twilio 触发器节点

> **大白话**：这个节点是 Twilio 通信服务的「来电来信铃」。当有新的短信（SMS）或新的来电时，它就启动你的工作流，让你自动回复短信、转发电话、记录通话。注意：通话结束后，Twilio 生成通话摘要可能需要最多三十分钟。放在工作流开头使用。

使用 Twilio 触发器节点来响应 [Twilio](https://www.twilio.com) 中的事件，并把 Twilio 与其他应用集成起来。n8n 内置支持多种多样的 Twilio 事件，包括新的短信和来电。

在本页，你会看到 Twilio 触发器节点可以响应的事件列表，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/twilio.md)找到此节点的身份验证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [Twilio integrations](https://n8n.io/integrations/twilio-trigger/) 页面。
{% endhint %}

## 事件（Events）

* 新短信（On New SMS）
* 新来电（On New Call）

{% hint style="info" %}
**新来电延迟（New Call Delay）**

Twilio 为一个已完成的通话生成摘要可能需要最多三十分钟。
{% endhint %}

## 相关资源（Related resources）

n8n 为 Twilio 提供了一个应用节点（app node）。你可以[在此处](../app-nodes/n8n-nodes-base.twilio.md)找到该节点的文档。

在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/twilio/)。

更多 API 细节请参考 [Twilio 的官方文档](https://www.twilio.com/docs)。
