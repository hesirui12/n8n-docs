---
title: Sendy 凭证
description: >-
  Sendy 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来验证
  Sendy。
contentType:
  - integration
  - reference
nodeTitle: Sendy 凭证
originalFilePath: integrations/builtin/credentials/sendy.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/sendy'
url: 'https://docs.n8n.io/integrations/builtin/credentials/sendy'
layout:
  description:
    visible: false
---

# Sendy 凭证

> **大白话**：Sendy 是一个邮件群发软件，可以部署在你自己的服务器上（自托管），利用亚马逊 SES 等来群发邮件，便宜且数据在自己手里。这篇文档教你怎么在 n8n 里填好「网址 + API 密钥」，让 n8n 能操作你的 Sendy 发邮件。

你可以使用这些凭证来验证以下节点：

- [Sendy](../app-nodes/n8n-nodes-base.sendy.md)

## 前置条件

自行托管（部署）一个 [Sendy](https://sendy.co/get-started) 应用。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参阅 [Sendy 的 API 文档](https://sendy.co/api)。

## 使用 API Key（API 密钥）

要配置此凭证，你需要准备：

- **URL（网址）**：你的 Sendy 应用的网址。
- **API Key（API 密钥）**：从你的用户资料 > **Settings（设置）> Your API Key（你的 API 密钥）** 中获取。
