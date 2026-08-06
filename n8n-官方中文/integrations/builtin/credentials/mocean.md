---
title: Mocean 凭证
description: >-
  Mocean 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Mocean 的身份。
contentType:
  - integration
  - reference
nodeTitle: Mocean credentials
originalFilePath: integrations/builtin/credentials/mocean.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/mocean'
url: 'https://docs.n8n.io/integrations/builtin/credentials/mocean'
layout:
  description:
    visible: false
---

# Mocean 凭证

{% hint style="info" %}
**大白话**：Mocean 是一个短信/语音消息发送服务（发验证码、通知短信之类）。n8n 想用它发消息，需要两个东西：**API Key（API 密钥）**和 **API Secret（API 密钥对应的密码/密钥串）**。这两个都在你的 Mocean 控制台（Dashboard）里能找到。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Mocean](../app-nodes/n8n-nodes-base.mocean.md)

## 准备工作

创建一个 [Mocean](https://moceanapi.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Mocean 官方 API 文档](https://moceanapi.com/docs/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**
- 一个 **API Secret（API 密钥对应的密钥串）**

Key 和 Secret 都可以在你的 Mocean [控制台 Dashboard](https://dashboard.moceanapi.com/) 里找到。更多信息请参考 [API Authentication（API 身份验证）](https://moceanapi.com/docs/#authentication)。
