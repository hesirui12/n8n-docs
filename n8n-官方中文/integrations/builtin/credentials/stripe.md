---
title: Stripe 凭证
description: >-
  Stripe 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Stripe 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Stripe credentials
originalFilePath: integrations/builtin/credentials/stripe.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/stripe'
url: 'https://docs.n8n.io/integrations/builtin/credentials/stripe'
layout:
  description:
    visible: false
---

# Stripe 凭证

{% hint style="info" %}
**大白话**：Stripe 是全球最流行的在线支付平台。n8n 连它主要用 **Secret Key（密钥）**，并强烈建议再配一个 **Signature Secret（签名密钥）**，这样 Stripe 发来的 webhook（回调通知）才能验明正身、防止别人伪造。注意区分**测试模式（test）** 和**正式模式（live）**：两种模式的密钥是分开的，测试密钥以 `sk_test_` 开头，正式密钥以 `sk_live_` 开头。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Stripe Trigger（触发器）](../trigger-nodes/n8n-nodes-base.stripetrigger.md)
- [Stripe](../app-nodes/n8n-nodes-base.stripe.md)

## 支持的验证方式

- Secret key（密钥）

n8n 强烈建议同时设置一个 **Signature Secret（签名密钥）**（有时也叫 endpoint secret，端点密钥），它是每个 webhook 端点独有的密钥。这样 [Stripe Trigger（触发器）](../trigger-nodes/n8n-nodes-base.stripetrigger.md) 节点就能验证传入的请求确实来自 Stripe。设置步骤请参考[验证传入请求](#verify-incoming-requests)。

## 相关资源

要配置这个凭证，你需要一个 Stripe 管理员或开发者账号。关于该服务的更多信息，请参考 [Stripe 官方 API 文档](https://docs.stripe.com/api)。

在生成 API key 之前，先决定是生成正式模式（live mode）还是测试模式（test mode）的。关于两种模式的更多信息，请参考[测试模式与正式模式](#test-mode-and-live-mode)。

### 正式模式（live mode）的 Secret key（密钥）

在正式模式下生成 Secret key：

1. 打开 [Stripe 开发者控制台](https://dashboard.stripe.com/developers)，选择 [**API Keys（API 密钥）**](https://dashboard.stripe.com/apikeys)。
2. 在 **Standard Keys（标准密钥）** 区域，选择 **Create secret key（创建密钥）**。
3. 输入一个 **Key name（密钥名称）**，比如 `n8n integration`。
4. 选择 **Create（创建）**。新的 API key 会显示出来。
4. 复制这个密钥，填进 n8n 凭证的 **Secret Key（密钥）** 字段。

更多信息请参考 Stripe 的[创建 API 密钥](https://docs.stripe.com/keys#create-api-secret-key)。

### 测试模式（test mode）的 Secret key（密钥）

要在测试模式下使用 Secret key，你必须复制已有的密钥：

1. 进入你的 [Stripe 测试模式开发者控制台](https://dashboard.stripe.com/test/developers)，选择 [**API Keys（API 密钥）**](https://dashboard.stripe.com/test/apikeys)。
2. 在 **Standard Keys（标准密钥）** 区域，对 **Secret key（密钥）** 选择 **Reveal test key（显示测试密钥）**。
3. 复制这个密钥，填进 n8n 凭证的 **Secret Key（密钥）** 字段。

更多信息请参考 Stripe 的[创建 API 密钥](https://docs.stripe.com/keys#create-api-secret-key)。

## 验证传入请求

从 n8n 2.25.7 和 2.26.2 版本开始，[Stripe Trigger（触发器）](../trigger-nodes/n8n-nodes-base.stripetrigger.md) 节点可以验证传入的 webhook 请求确实来自 Stripe。n8n 强烈建议设置 **Signature Secret（签名密钥）**，这样即使别人知道了你的 webhook 地址，也无法向你的工作流发送伪造的事件。

当你发布工作流时，n8n 会替你在 Stripe 里创建并管理 webhook 端点，所以你要等端点创建好之后再设置 **Signature Secret（签名密钥）**：

1. 用 **Stripe Trigger（触发器）** 节点搭建工作流并发布。n8n 会在你的 Stripe 账号里创建一个 webhook 端点。
2. 在 Stripe 控制台，进入 **Workbench（工作台）> Webhooks**。在旧版控制台里，进入 **Developers（开发者）> Webhooks**。
3. 选择 n8n 创建的端点。可以通过描述 `Created by n8n for workflow ID: <workflow-id>`（由 n8n 为工作流 ID 创建）以及 webhook 地址（与你 n8n 生产环境 webhook 地址一致）来识别它。
4. 在 **Signing secret（签名密钥）** 下方，选择 **Click to reveal（点击显示）** 并复制该值。它以 `whsec_` 开头。
5. 在 n8n 里打开你的 Stripe 凭证，把该值粘贴到 **Signature Secret（签名密钥）** 字段里并保存。

Stripe 会为每个端点生成唯一的签名密钥，测试模式和正式模式各有一个。请从与你正在使用的凭证匹配的端点复制密钥。更多信息请参考 Stripe 的 [Webhooks 文档](https://docs.stripe.com/webhooks)。

## 测试模式与正式模式

Stripe 的所有 API 请求都发生在[测试模式](https://docs.stripe.com/test-mode)或正式模式（live mode）中。每种模式都有自己的 API key。

用测试模式访问模拟测试数据，用正式模式访问真实账号数据。一个模式里的对象在另一个模式里无法访问。

关于每种模式下可用内容的更多信息，以及何时该用哪种模式，请参考 [API 密钥 | 测试模式与正式模式对比](https://docs.stripe.com/keys#test-live-modes)。

{% hint style="info" %}
**两种模式各建一个 n8n 凭证**

如果你想同时使用正式模式和测试模式的密钥，请把每种模式的密钥分别存到独立的 n8n 凭证里。
{% endhint %}

## 密钥前缀

Stripe 的 Secret key（密钥）总是以 `sk_` 开头：

- 正式模式密钥以 `sk_live_` 开头。
- 测试模式密钥以 `sk_test_` 开头。

n8n 没有用受限密钥（Restricted keys，前缀 `rk_`）测试过这些凭证。

{% hint style="warning" %}
**Publishable keys（公开密钥）**

不要在你的 n8n 凭证中使用公开密钥（Publishable keys，前缀 `pk_`）。
{% endhint %}
