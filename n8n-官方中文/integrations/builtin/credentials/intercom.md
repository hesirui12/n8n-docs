---
title: Intercom 凭证
description: >-
  Intercom 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Intercom 的身份。
contentType:
  - integration
  - reference
nodeTitle: Intercom credentials
originalFilePath: integrations/builtin/credentials/intercom.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/intercom'
url: 'https://docs.n8n.io/integrations/builtin/credentials/intercom'
layout:
  description:
    visible: false
---

# Intercom 凭证

{% hint style="info" %}
**大白话**：Intercom 是一款客服聊天 + 客户沟通平台（网站右下角那个小气泡就是它）。n8n 连它只需要一把 **API Key（API 密钥）**——而且这把钥匙不用单独生成：你只要在 Intercom 开发者后台创建一个应用，它就会自动生成一个 **Access Token（访问令牌）**，把这个令牌直接当作 n8n 的 API Key 填进去就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Intercom](../app-nodes/n8n-nodes-base.intercom.md)

## 前提条件

- 创建一个 [Intercom](https://www.intercom.com/) 开发者账号。
- 在开发者中心[创建一个应用（app）](https://developers.intercom.com/docs/build-an-integration/learn-more/authentication/)。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Intercom 的 API 文档](https://developers.intercom.com/docs/references/introduction/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API Key（API 密钥）**：当你[创建应用](https://developers.intercom.com/docs/build-an-integration/learn-more/authentication/)时，Intercom 会自动生成一个 **Access Token（访问令牌）**。把这个 **Access Token** 当作 n8n 的 **API Key** 填进去即可。更详细的说明请参考[如何获取你的 Access Token](https://developers.intercom.com/docs/build-an-integration/learn-more/authentication/#how-to-get-your-access-token)。
