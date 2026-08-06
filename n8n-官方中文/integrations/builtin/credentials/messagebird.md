---
title: MessageBird 凭证
description: >-
  MessageBird 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  MessageBird 的身份。
contentType:
  - integration
  - reference
nodeTitle: MessageBird credentials
originalFilePath: integrations/builtin/credentials/messagebird.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/messagebird'
url: 'https://docs.n8n.io/integrations/builtin/credentials/messagebird'
layout:
  description:
    visible: false
---

# MessageBird 凭证

> **大白话**：MessageBird（现在叫 Bird）是发短信、WhatsApp 消息等服务。在 n8n 里想用它发消息，就去它的「Access keys」页面拿一个 API Key 填进来。

你可以使用这些凭证来验证以下节点的身份：

- [MessageBird](../app-nodes/n8n-nodes-base.messagebird.md)

## 前提条件

注册一个 [Bird](https://bird.com/) 账号。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [MessageBird 的 API 文档](https://docs.bird.com/api)。

## 使用 API key

要配置这个凭证，你需要：

- 一个 **API Key**：要生成合适的密钥，请访问 MessageBird 的 [Access keys](https://app.bird.com/settings/access-keys)（访问密钥）页面。详细说明请参考[API 授权文档](https://docs.bird.com/api/api-access/api-authorization)。
