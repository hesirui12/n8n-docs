---
title: Customer.io 触发器节点文档（Customer.io Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 Customer.io 触发器节点。按照技术文档将 Customer.io
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Customer.io Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.customeriotrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.customeriotrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.customeriotrigger
layout:
  description:
    visible: false
---

# Customer.io 触发器节点（Customer.io Trigger node）

{% hint style="info" %}
**大白话**：Customer.io 是一个客户消息营销平台，可以基于用户在你网站上的行为数据，给特定客户群发邮件、推送通知和短信，用来降低流失、增进关系、提升订阅。这个触发器节点会在消息送达状态或客户状态变化时自动唤醒工作流。它支持 5 大类事件：客户订阅/退订，以及邮件、推送、Slack、短信这四类消息的各种状态（已发送、已送达、被点击、退信、失败等）。用法：选好要监听的渠道和状态即可。
{% endhint %}

[Customer.io](https://customer.io/) 让用户可以使用网站数据向选定的客户群体发送新闻通讯。你可以发送定向邮件、推送通知和短信，以降低流失率、建立更牢固的关系并推动订阅增长。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/customerio.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [Customer.io Trigger 集成](https://n8n.io/integrations/customerio-trigger/)页面。
{% endhint %}

## 事件（Events）

* Customer（客户）
    * Subscribed（已订阅）
    * Unsubscribe（已退订）
* Email（邮件）
    * Bounced（退信）
    * Clicked（被点击）
    * Converted（已转化）
    * Delivered（已送达）
    * Drafted（已草拟）
    * Failed（失败）
    * Opened（被打开）
    * Sent（已发送）
    * Spammed（被标记为垃圾邮件）
* Push（推送通知）
    * Attempted（已尝试）
    * Bounced（退信）
    * Clicked（被点击）
    * Delivered（已送达）
    * Drafted（已草拟）
    * Failed（失败）
    * Opened（被打开）
    * Sent（已发送）
* Slack（Slack 消息）
    * Attempted（已尝试）
    * Clicked（被点击）
    * Drafted（已草拟）
    * Failed（失败）
    * Sent（已发送）
* Sms（短信）
    * Attempted（已尝试）
    * Bounced（退信）
    * Clicked（被点击）
    * Delivered（已送达）
    * Drafted（已草拟）
    * Failed（失败）
    * Sent（已发送）

## 相关资源（Related resources）

n8n 也为 Customer.io 提供了应用节点（用来读写数据的常规节点）。你可以在[这里](../app-nodes/n8n-nodes-base.customerio.md)找到该节点的文档。

在 n8n 网站上查看[示例工作流和相关内容](https://n8n.io/integrations/customerio-trigger/)。

关于他们的 API 细节，请参考 [Customer.io 的官方文档](https://docs.customer.io/api/)。
