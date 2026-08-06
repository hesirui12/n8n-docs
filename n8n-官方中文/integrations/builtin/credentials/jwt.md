---
title: JWT 凭证
contentType:
  - integration
  - reference
priority: medium
nodeTitle: JWT credentials
originalFilePath: integrations/builtin/credentials/jwt.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/jwt
url: https://docs.n8n.io/integrations/builtin/credentials/jwt
description: >-
  JWT 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  JWT 的身份。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# JWT 凭证

{% hint style="info" %}
**大白话**：JWT（JSON Web Token）是一种「带签名的通行证」，很多系统用它来确认请求的人是谁、数据有没有被篡改。n8n 的这个凭证是给 JWT 节点和 Webhook 节点做签名/验签用的。签名方式二选一：**Passphrase（口令，用 HMAC 对称算法）** 或 **Private key（PEM 私钥，用 RSA/ECDSA 非对称算法）**。非程序员选 Passphrase 就行，两边用同一个密钥；要对接第三方系统的才需要研究 PEM 密钥对。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [JWT](../core-nodes/n8n-nodes-base.jwt.md)
* [Webhook](../core-nodes/n8n-nodes-base.webhook/README.md)

## 支持的验证方式

* Passphrase（口令）：用 HMAC 算法配合密钥（secret）签名。
* Private key（PEM 私钥）：用于 [Private Key JWT（私钥 JWT）](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authenticate-with-private-key-jwt)，使用 RSA 或 ECDSA 算法。

## 相关资源

更多细节请参考 [JSON Web Token 规范](https://datatracker.ietf.org/doc/html/rfc7519)。

想要更通俗的入门介绍，请参考 [JWT 官网的 JSON Web Tokens 介绍](https://jwt.io/introduction)。关于两种签名方式的区别和涉及的算法，请参考 [JSON Web Token (JWT) 签名算法总览](https://auth0.com/blog/json-web-token-signing-algorithms-overview/)。

## 使用 Passphrase（口令）

配置这个凭证的步骤：

1. 把 **Key Type（密钥类型）** 选为 **Passphrase（口令）**。
2. 输入口令的 **Secret（密钥）**。
3. 选择用于签名的 **Algorithm（算法）**。支持哪些算法请看下面的[可用算法](#可用算法)列表。

## 使用 Private key（PEM 私钥）

配置这个凭证的步骤：

1. 把 **Key Type（密钥类型）** 选为 **PEM Key（PEM 密钥）**。
2. **Private Key（私钥）**：通过生成密钥对得到。参考 [生成 RSA 密钥对](https://auth0.com/docs/secure/application-credentials/generate-rsa-key-pair) 中的示例。
3. **Public Key（公钥）**：通过生成密钥对得到。参考 [生成 RSA 密钥对](https://auth0.com/docs/secure/application-credentials/generate-rsa-key-pair) 中的示例。
4. 选择用于签名的 **Algorithm（算法）**。支持哪些算法请看下面的[可用算法](#可用算法)列表。

## 可用算法

这个 n8n 凭证支持以下算法：

* `HS256`
* `HS384`
* `HS512`
* `RS256`
* `RS384`
* `RS512`
* `ES256`
* `ES384`
* `ES512`
* `PS256`
* `PS384`
* `PS512`
* `none`
