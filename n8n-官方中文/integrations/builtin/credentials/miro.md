---
title: Miro 凭证
description: >-
  Miro 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Miro 的身份。
contentType:
  - integration
  - reference
nodeTitle: Miro credentials
originalFilePath: integrations/builtin/credentials/miro.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/miro'
url: 'https://docs.n8n.io/integrations/builtin/credentials/miro'
layout:
  description:
    visible: false
---

# Miro 凭证

> **大白话**：Miro 是在线白板/协作画布工具。在 n8n 里连它，去 Miro 开发者后台建一个 OAuth2 应用，把拿到的 Client ID 和 Client Secret 填进 n8n 就行。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 前提条件

注册一个 [Miro](https://miro.com/) 账号。

## 支持的认证方式

* OAuth2（授权码认证）

## 相关资源

关于该服务的更多信息，请参考 [Miro 的 API 文档](https://developers.miro.com/reference/overview)。

这是一个仅凭证（credential-only）节点。更多信息请参考[为现有节点自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。也可以到 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/miro/)。

## 使用 OAuth2

要配置这个凭证，你需要一个 [Miro](https://miro.com/login/) 账号和应用，以及：

- 一个 **Client ID（客户端 ID）**：创建新的 OAuth2 应用时自动生成。
- 一个 **Client Secret（客户端密钥）**：创建新的 OAuth2 应用时自动生成。

关于如何向该服务认证的更多信息，请参考 [Miro 的 API 文档](https://developers.miro.com/reference/overview)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你是[自托管](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n) n8n，需要先[创建一个应用](https://developers.miro.com/docs/rest-api-build-your-first-hello-world-app)才能配置 OAuth2。关于设置 OAuth2 的更多信息，请参考 [Miro 的 OAuth 文档](https://developers.miro.com/docs/getting-started-with-oauth)。
