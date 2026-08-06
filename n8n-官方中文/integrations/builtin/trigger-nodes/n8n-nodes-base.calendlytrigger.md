---
title: Calendly 触发器节点文档（Calendly Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 Calendly 触发器节点。按照技术文档将 Calendly
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Calendly Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.calendlytrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.calendlytrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.calendlytrigger
layout:
  description:
    visible: false
---

# Calendly 触发器节点（Calendly Trigger node）

{% hint style="info" %}
**大白话**：Calendly 是预约时间管理工具，让别人通过你的链接直接选时间约会议。这个触发器节点会在预约事件发生时自动唤醒工作流，支持两种事件：**Event created（预约已创建）** 和 **Event canceled（预约已取消）**。两个小坑要注意：① 只有通过 Calendly 产生的预约/取消才会触发，你自己在 Google 日历里手动改的不会触发；② Calendly 要求回调地址必须是公网 HTTPS，本地测试要用 ngrok 之类的隧道工具。
{% endhint %}

[Calendly](https://calendly.com/) 是一款自动化排期软件，旨在帮助人们找到合适的会议时间。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/calendly.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [Calendly Trigger 集成](https://n8n.io/integrations/calendly-trigger/)页面。
{% endhint %}

## 事件（Events）

* Event created（预约已创建）
* Event canceled（预约已取消）

## 常见问题（Common issues）

下面是 Calendly 触发器节点的一些常见错误和问题，以及排查、解决步骤。

### 节点只对 Calendly 管理的预约生效（Node only triggers for Calendly-managed bookings）

Calendly 的 webhook 只会在由 Calendly 管理的预约和取消时触发。如果你直接在连接的日历（比如 Google Calendar）里创建或修改事件，是不会触发 Calendly 触发器节点的。

### Webhook 回调地址必须是公网 HTTPS（Webhook callback URL must be public HTTPS）

Calendly 触发器节点使用 Calendly 的 webhook，而 Calendly 要求 webhook 回调地址必须是公网 HTTPS 地址。本地测试时，请使用 [ngrok](https://ngrok.com/) 或 [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) 之类的隧道工具，并配置 n8n 使用该公网 HTTPS 地址来处理 webhook。设置细节请参考 [Configuration > Webhook URL](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/configuration-examples/configure-webhook-urls-with-reverse-proxy)。
