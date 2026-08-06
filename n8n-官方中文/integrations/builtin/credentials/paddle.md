---
title: Paddle 凭证
description: >-
  Paddle 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Paddle 的身份。
contentType:
  - integration
  - reference
nodeTitle: Paddle credentials
originalFilePath: integrations/builtin/credentials/paddle.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/paddle'
url: 'https://docs.n8n.io/integrations/builtin/credentials/paddle'
layout:
  description:
    visible: false
---

# Paddle 凭证

{% hint style="info" %}
**大白话**：Paddle 是「帮你代收货款、处理订阅和税务」的支付服务商（Merchant of Record）。n8n 连的是 **Paddle Classic**（老版 API），需要填 **Vendor Auth Code（商家授权码）+ Vendor ID（商家 ID）** 两个值，在 Paddle 后台的「Developer Tools > Authentication」里生成。注意：2023 年 8 月之后注册的用户用的是新版 Paddle Billing API，这套凭证可能不适用。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Paddle](../app-nodes/n8n-nodes-base.paddle.md)

## 准备工作

注册一个 [Paddle](https://paddle.com/) 账号。

## 支持的验证方式

- API access token（Classic，经典版）

{% hint style="warning" %}
**Paddle Classic API（经典版 API）**

这套凭证对接的是 Paddle Classic 的 API。如果你是在 2023 年 8 月之后加入 Paddle 的，那你用的是 [Paddle Billing API](https://developer.paddle.com/api-reference/overview)，这套凭证可能对你无效。
{% endhint %}

## 相关资源

关于该服务的更多信息，请参考 [Paddle Classic 官方 API 文档](https://developer.paddle.com/classic/api-reference/1384a288aca7a-api-reference)。

## 使用 API access token（Classic，经典版）

要配置这个凭证，你需要：

- 一个 **Vendor Auth Code（商家授权码）**：生成 API key 时创建。
- 一个 **Vendor ID（商家 ID）**：生成 API key 时显示。
- **Use Sandbox Environment API（使用沙盒环境 API）**：打开后，使用这个凭证的节点会访问沙盒（测试）API 地址，而不是线上 API 地址。

要生成授权码并查看你的 Vendor ID，进入 **Paddle > Developer Tools（开发者工具）> Authentication（身份验证）> Generate Auth Code（生成授权码）**。点击 **Reveal Auth Code（显示授权码）** 即可看到授权码。更多说明请参考 [API Authentication（API 身份验证）](https://developer.paddle.com/api-reference/about/authentication)。
