---
title: TOTP（TOTP）
description: >-
  n8n 工作流自动化平台中「TOTP」节点的文档。包含用法说明和示例链接。
contentType:
  - integration
  - reference
nodeTitle: TOTP
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.totp.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.totp'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.totp'
layout:
  description:
    visible: false
---

# TOTP（TOTP）

{% hint style="info" %}
**大白话（这个节点是干什么的）**：TOTP 全称 Time-based One-Time Password（基于时间的一次性密码）——就是你手机「验证器 App」（如 Google Authenticator、Microsoft Authenticator）里那种每 30 秒刷新一次的 6 位数字验证码。TOTP 节点能在工作流里生成这种验证码，适合做自动化登录需要二次验证（2FA）的场景，或者想测试自己的验证码生成逻辑。
{% endhint %}

「TOTP」节点提供了一种生成 TOTP（基于时间的一次性密码）的方法。

{% hint style="info" %}
**凭据（Credentials）**

关于设置认证的说明，请参阅 [TOTP 凭据文档](../credentials/totp.md)。

{% hint style="info" %}
**小白提示（凭据里要准备什么）**：使用 TOTP 节点前，需要先创建 TOTP 凭据，里面保存你的密钥（Secret）。密钥就是你绑定验证器时扫码得到的那个字符串，n8n 靠它算出和手机 App 一致的验证码。
{% endhint %}
{% endhint %}

## 节点参数（Node parameters）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

使用以下参数配置此节点。

### 要连接的凭据（Credential to connect with）

选择或创建一个 [TOTP 凭据](../credentials/totp.md) 供节点使用。

### 操作（Operation）

**Generate Secret（生成密钥）** 是目前唯一支持的操作。

{% hint style="info" %}
**大白话（Generate Secret 是什么）**：这个操作会生成一个新的 TOTP 密钥（Secret）。你可以把它当成「注册新验证器」的流程：生成密钥 → 把密钥给用户绑定到验证器 App 里（或让用户扫码）→ 之后用同一个凭据随时生成验证码来校验。
{% endhint %}

## 节点选项（Node options）

使用这些**选项（Options）**进一步配置节点。

### 算法（Algorithm）

选择要使用的 HMAC 哈希算法。默认是 SHA1。

{% hint style="info" %}
**小白提示（算法怎么选）**：SHA1 是 TOTP 标准里的默认算法，绝大多数验证器 App 都支持，保持默认即可。如果你的服务端明确要求别的算法（SHA256 / SHA512），再改。
{% endhint %}

### 位数（Digits）

输入生成的验证码的位数。默认是 `6`。

### 有效期（Period）

输入 TOTP 有效的秒数。默认是 `30`（即每 30 秒刷新一次）。

{% hint style="info" %}
**大白话（Period 是什么）**：验证码不是永远有效的，过了有效期就作废、刷新成新码。`30` 秒是行业标准（Google Authenticator 等都用 30 秒）。要注意：生成验证码的服务端和校验方（你服务的接口）必须用**相同的 Period 和算法**，否则算出的码对不上。
{% endhint %}

## 模板和示例（Templates and examples）

[浏览 TOTP 集成模板](https://n8n.io/integrations/totp) 或[搜索所有模板](https://n8n.io/workflows/)
