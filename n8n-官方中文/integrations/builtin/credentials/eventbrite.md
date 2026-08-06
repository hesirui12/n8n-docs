---
title: Eventbrite 凭证（Eventbrite credentials）
description: >-
  Eventbrite 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  Eventbrite。
contentType:
  - integration
  - reference
nodeTitle: Eventbrite 凭证（Eventbrite credentials）
originalFilePath: integrations/builtin/credentials/eventbrite.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/eventbrite'
url: 'https://docs.n8n.io/integrations/builtin/credentials/eventbrite'
layout:
  description:
    visible: false
---

# Eventbrite 凭证（Eventbrite credentials）

> **大白话**：Eventbrite 是活动/票务平台（办活动、卖票用）。n8n 连它有两种方式：**API private key**（私有密钥，简单，自己用）或 **OAuth2**（标准授权，适合做成应用给别人用）。这个凭证主要给 Eventbrite Trigger（触发器）节点用。

你可以使用这些凭证来认证以下节点：

- [Eventbrite Trigger](../trigger-nodes/n8n-nodes-base.eventbritetrigger.md)

## 前置条件（Prerequisites）

创建一个 [Eventbrite](https://www.eventbrite.com/) 账号。

## 支持的认证方式（Supported authentication methods）

- API private key（API 私有密钥）
- OAuth2

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [Eventbrite 的 API 文档](https://www.eventbrite.com/platform/api)。

## 使用 API private key（Using API private key）

要配置这个凭证，你需要：

- 一个 **Private Key**（私有密钥）：生成 Private Token 的详细步骤，请参考 [Eventbrite API 认证：获取私有令牌文档](https://www.eventbrite.com/platform/api#/introduction/authentication/1.-get-a-private-token)。在 n8n 凭证中把这个私有令牌用作 **Private Key**。

## 使用 OAuth2（Using OAuth2）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你需要从零开始配置 OAuth2，或者想更详细地了解 OAuth 网页授权流程中发生了什么，请参考 [Eventbrite API 认证：面向应用合作伙伴的文档](https://www.eventbrite.com/platform/api#/introduction/authentication/2.-(for-app-partners)-authorize-your-users) 中的说明来设置 OAuth。
