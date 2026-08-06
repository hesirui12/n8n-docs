---
title: Stripe 触发器节点文档
description: >-
  学习如何在 n8n 中使用 Stripe 触发器节点。按照本文档将
  Stripe 触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Stripe 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.stripetrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.stripetrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.stripetrigger
layout:
  description:
    visible: false
---

# Stripe 触发器节点

> **大白话**：这个节点是 Stripe 支付系统的「收款报喜员」。当你的 Stripe 账户发生"成功收款、退款、订阅变化"等事件时，它就启动你的工作流。它还能通过签名密钥验证请求是不是真的来自 Stripe，防止坏人伪造事件骗你的工作流。放在工作流开头用。

[Stripe](https://stripe.com/) 是一套支付 API，为在线企业的商务交易提供动力。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/stripe.md)找到此节点的身份验证信息。
{% endhint %}

## Webhook 身份验证（Webhook authentication）

从 n8n 版本 2.25.7 和 2.26.2 开始，Stripe 触发器节点可以验证收到的请求确实来自 Stripe。当你在 [Stripe 凭据](../credentials/stripe.md)上设置了 **Signature Secret（签名密钥）** 后，节点会检查每个请求的 `Stripe-Signature` 请求头，并拒绝任何未签名、伪造或超过五分钟的请求，返回 `401 Unauthorized` 响应。n8n 不会为被拒绝的请求运行你的工作流。

如果没有设置 **Signature Secret（签名密钥）**，节点就不会验证收到的请求，所以任何知道你 webhook URL 的人都可能发送伪造的事件。n8n 强烈建议设置一个。设置步骤请参考 [Verify incoming requests（验证收到的请求）](../credentials/stripe.md#verify-incoming-requests)。

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [Stripe Trigger integrations](https://n8n.io/integrations/stripe-trigger/) 页面。
{% endhint %}
