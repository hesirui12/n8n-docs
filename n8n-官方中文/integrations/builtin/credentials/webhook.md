---
title: Webhook 凭证
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Webhook credentials
originalFilePath: integrations/builtin/credentials/webhook.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/webhook
url: https://docs.n8n.io/integrations/builtin/credentials/webhook
description: >-
  Webhook 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Webhook 进行身份验证。
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

# Webhook 凭证

> **大白话**：这个凭证是给 Webhook 节点做"来电验证"用的，防止陌生人乱调你的 Webhook 网址。它支持四种方式：Basic auth（账号密码）、Header auth（请求头里放密钥）、JWT auth（用加密签名验证）、None（不验证，谁都能调）。选哪种取决于给你发请求的那个系统支持哪种。

你可以使用这些凭证对以下节点进行身份验证：

* [Webhook](../core-nodes/n8n-nodes-base.webhook/README.md)

## 前置条件

你必须使用你要查询的应用或服务所要求的认证方式。

## 支持的认证方式

* Basic auth（基本认证）
* Header auth（请求头认证）
* JWT auth（JWT 认证）
* None（无认证）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/vIyn1XsEkjlolZzHTfTG/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/fjWxEWe1g0CDvsx1igf6/" %}

## 使用 JWT auth

[**JWT Auth**](https://jwt.io/introduction/) 是一种使用 JSON Web Tokens (JWT) 对数据进行数字签名的认证方法。此认证方式使用 **JWT credential**（JWT 凭证），密钥类型可以是 **Passphrase**（口令）或 **PEM Key**。更多信息请参考 [JWT 凭证](jwt.md)。
