---
title: Wise 触发器节点文档
description: >-
  学习如何在 n8n 中使用 Wise 触发器节点。按照本文档将
  Wise 触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Wise 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.wisetrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.wisetrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.wisetrigger
layout:
  description:
    visible: false
---

# Wise 触发器节点

> **大白话**：Wise（原 TransferWise）是个国际转账服务，手续费低，还能用国际账户信息收钱、在手机上随时查交易记录。这个触发器节点的作用是：当你的 Wise 余额账户有进账、出账，或转账状态变化时，就自动启动 n8n 工作流，让你记账、发通知或做对账。

[Wise](https://wise.com) 允许你以低成本进行国际汇款，用国际账户详情收款，并在手机上追踪交易。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/wise.md)找到此节点的身份验证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [Wise Trigger integrations](https://n8n.io/integrations/wise-trigger/) 页面。
{% endhint %}

## 事件（Events）

- 每当余额账户被入账（credited）时触发
- 每当余额账户被入账或扣款（debited）时触发
- 每当转账的有效案例（active cases）列表更新时触发
- 每当转账状态更新时触发
