---
title: Vero 凭证
description: >-
  Vero 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Vero 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Vero credentials
originalFilePath: integrations/builtin/credentials/vero.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/vero'
url: 'https://docs.n8n.io/integrations/builtin/credentials/vero'
layout:
  description:
    visible: false
---

# Vero 凭证

> **大白话**：Vero 是做邮件/消息营销自动化的。登录后在账户「设置」页面把 Auth Token（认证令牌）复制出来填进 n8n 就行，一个字段的事。

你可以使用这些凭证对以下节点进行身份验证：

- [Vero](../app-nodes/n8n-nodes-base.vero.md)

## 前置条件

创建一个 [Vero](https://getvero.com/) 账户。

## 支持的认证方式

- API auth token（API 认证令牌）

## 相关资源

更多关于该服务的信息，请参考 [Vero 的 API 文档](https://developers.getvero.com/track-api-reference/#/)。

## 使用 API auth token

要配置此凭证，你需要：

- **Auth Token**（认证令牌）：从你的 Vero 账户[设置](https://app.getvero.com/settings/project)中获取认证令牌。更多信息请参考 [API authentication](https://developers.getvero.com/track-api-reference/#/#authentication)。
