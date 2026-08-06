---
title: Crypto 凭证
description: >-
  Crypto 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Crypto 节点的身份。
contentType:
  - integration
  - reference
priority: medium
layout:
  description:
    visible: false
---

# Crypto 凭证

> **大白话**：Crypto 是一个做**加解密运算**的节点（HMAC 签名、RSA 签名/加解密、对称加解密）。它的凭证不需要去任何网站申请，只需要按你用的操作填对应的密钥字段就行——用哪个操作就填哪个，其余留空，所有字段都是可选的。

这些凭证可以用来验证以下节点的身份：

- [Crypto](../core-nodes/n8n-nodes-base.crypto.md)

## 凭证字段（Credential fields）

只需配置你要用的操作需要的字段。所有字段都是可选的。

- **Hmac Secret**：**Hmac** 操作使用的密钥。
- **Private Key**：**Sign**（签名）操作使用的私钥。
- **Encryption Passphrase**：**Encrypt**（加密）和 **Decrypt**（解密）操作在对称模式下使用的口令。建议使用 16 个或更多随机字符，或用密码管理器生成的强口令。
- **Encryption Public Key**：**Encrypt**（加密）操作在非对称模式下使用的 RSA 公钥（PEM、SPKI 格式）。
- **Encryption Private Key**：**Decrypt**（解密）操作在非对称模式下使用的 RSA 私钥（PEM、PKCS#8 格式）。

## 相关资源（Related resources）

关于每个操作的详细说明，请参考 [Crypto 节点文档](../core-nodes/n8n-nodes-base.crypto.md)。
