---
title: TOTP 凭证
description: >-
  TOTP 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  TOTP 的身份。
contentType:
  - integration
  - reference
nodeTitle: TOTP credentials
originalFilePath: integrations/builtin/credentials/totp.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/totp'
url: 'https://docs.n8n.io/integrations/builtin/credentials/totp'
layout:
  description:
    visible: false
---

# TOTP 凭证

{% hint style="info" %}
**大白话**：TOTP（基于时间的一次性密码）就是「动态验证码」——像 Google Authenticator（谷歌身份验证器）这类 App 生成的 6 位数字验证码，每 30 秒变一次。n8n 的这个凭证用来在**身份验证（2FA，双重验证）类流程**里生成或验证这种验证码。配置时只需要两样东西：**Secret（密钥）**（你绑定验证器时 QR 码里编码的那个密钥）和 **Label（标签）**（账号标识）。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [TOTP](../core-nodes/n8n-nodes-base.totp.md)

## 先决条件

生成一个 TOTP **Secret（密钥）** 和 **Label（标签）**。

## 支持的验证方式

- Secret and label（密钥和标签）

## 相关资源

基于时间的一次性密码（Time-based One-time Password，TOTP）是一种利用当前时间生成一次性密码（OTP）的算法。更多信息请参考 [Google Authenticator | Key URI format（密钥 URI 格式）](https://github.com/google/google-authenticator/wiki/Key-Uri-Format)。

## 使用 Secret 和 Label（密钥和标签）

要配置这个凭证，你需要：

- 一个 **Secret（密钥）**：设置验证器时 QR 码里编码的密钥。它是一个用 Base32 编码的任意密钥值，例如：`BVDRSBXQB2ZEL5HE`。更多信息请参考 [Google Authenticator Secret（密钥）](https://github.com/google/google-authenticator/wiki/Key-Uri-Format#secret)。
- 一个 **Label（标签）**：账号的标识符。它包含一个 URI 编码的账号名称字符串。你可以加前缀来标识管理该账号的提供商或服务。如果使用前缀，请用字面冒号或 url 编码的冒号来分隔发行方前缀和账号名称，例如：`GitHub:john-doe`。更多信息请参考 [Google Authenticator Label（标签）](https://github.com/google/google-authenticator/wiki/Key-Uri-Format#label)。
