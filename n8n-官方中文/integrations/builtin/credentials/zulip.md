---
title: Zulip 凭证
description: >-
  Zulip 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Zulip 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Zulip credentials
originalFilePath: integrations/builtin/credentials/zulip.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/zulip'
url: 'https://docs.n8n.io/integrations/builtin/credentials/zulip'
layout:
  description:
    visible: false
---

# Zulip 凭证

> **大白话**：Zulip 是开源团队聊天工具（类似 Slack，但按「话题」组织对话）。连它很简单：填你 Zulip 域名的 **URL**、登录用的 **Email**，以及 **API Key**——API Key 在 Zulip 的 **齿轮图标 > Personal Settings > Account & privacy > API Key** 里找。三样填齐就行。

你可以使用这些凭证对以下节点进行身份验证：

- [Zulip](../app-nodes/n8n-nodes-base.zulip.md)

## 前提条件

创建一个 [Zulip](https://zulip.com/) 账户。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Zulip 的 API 文档](https://zulip.com/api/)。

## 使用 API key

要配置此凭证，你需要：

- 一个 **URL**：填写你的 Zulip 域名地址。
- 一个 **Email**（邮箱）地址：填写你登录 Zulip 时使用的邮箱地址。
- 一个 **API Key**（API 密钥）：在 **齿轮图标 > Personal Settings > Account & privacy > API Key** 中获取你的 API 密钥。更多信息请参考 [API Keys](https://zulip.com/api/api-keys)。
