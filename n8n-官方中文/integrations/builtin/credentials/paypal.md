---
title: PayPal 凭证
description: >-
  PayPal 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  PayPal 的身份。
contentType:
  - integration
  - reference
nodeTitle: PayPal credentials
originalFilePath: integrations/builtin/credentials/paypal.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/paypal'
url: 'https://docs.n8n.io/integrations/builtin/credentials/paypal'
layout:
  description:
    visible: false
---

# PayPal 凭证

{% hint style="info" %}
**大白话**：PayPal 是全球通用的在线支付平台。n8n 连它用「**Client ID + Secret（应用密钥对）**」——去 PayPal 开发者后台创建一个应用（App），就会生成这一对值；还要选 **Environment（环境）**：先用 Sandbox（沙盒/测试）练手，正式上线再换 Live（线上）。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [PayPal](../app-nodes/n8n-nodes-base.paypal.md)
- [PayPal Trigger（触发器）](../trigger-nodes/n8n-nodes-base.paypaltrigger.md)

## 准备工作

注册一个 [PayPal 开发者](https://developer.paypal.com/home) 账号。

## 支持的验证方式

- API client and secret（API 客户端 ID 和密钥）

## 相关资源

关于该服务的更多信息，请参考 [PayPal 官方 API 文档](https://developer.paypal.com/api/rest/)。

## 使用 API client and secret（API 客户端 ID 和密钥）

要配置这个凭证，你需要：

- 一个 **Client ID（客户端 ID）**：创建应用时生成。
- 一个 **Secret（密钥）**：创建应用时生成。
- 一个 **Environment（环境）**：选择 **Live（线上）** 或 **Sandbox（沙盒/测试）**。

要生成 **Client ID** 和 **Secret**，登录你的 PayPal [开发者后台](https://developer.paypal.com/dashboard/)，选择 **Apps & Credentials（应用与凭证）> Rest API apps（REST API 应用）> Create app（创建应用）**。更多说明请参考[获取 client ID 和 client secret](https://developer.paypal.com/api/rest/#link-getclientidandclientsecret)。
