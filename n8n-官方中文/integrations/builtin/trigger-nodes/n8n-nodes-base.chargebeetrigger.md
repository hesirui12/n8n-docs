---
title: Chargebee 触发器节点文档（Chargebee Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 Chargebee 触发器节点。按照技术文档将 Chargebee
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Chargebee Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.chargebeetrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.chargebeetrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.chargebeetrigger
layout:
  description:
    visible: false
---

# Chargebee 触发器节点（Chargebee Trigger node）

{% hint style="info" %}
**大白话**：Chargebee 是面向订阅制 SaaS 和电商的计费平台，负责自动扣款、开发票、算税、记账、发邮件通知、统计 SaaS 指标、管理客户等。这个触发器节点通过 webhook 接收 Chargebee 的事件（比如订阅创建、扣款成功、发票生成等）。注意：你必须先在 Chargebee 后台手动添加 n8n 给你的 webhook 地址（回调地址），节点才能收到事件。下面有详细步骤。
{% endhint %}

[Chargebee](https://www.chargebee.com/) 是一个面向订阅制 SaaS 和电商业务的计费平台。Chargebee 与支付网关集成，让你可以自动化周期性收款，同时处理开票、税务、记账、邮件通知、SaaS 指标和客户管理。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/chargebee.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [Chargebee Trigger 集成](https://n8n.io/integrations/chargebee-trigger/)页面。
{% endhint %}

## 在 Chargebee 中添加 Webhook 地址（Add webhook URL in Chargebee）

要在 Chargebee 中添加 Webhook 地址：

1. 打开你的 Chargebee 后台（dashboard）。
2. 进入 **Settings（设置）** > **Configure Chargebee（配置 Chargebee）**。
4. 向下滚动并选择 **Webhooks（Webhook 设置）**。
5. 点击 **Add Webhook（添加 Webhook）** 按钮。
6. 填写 **Webhook Name（Webhook 名称）** 和 **Webhook URL（Webhook 地址）**。
7. 点击 **Create（创建）**。
