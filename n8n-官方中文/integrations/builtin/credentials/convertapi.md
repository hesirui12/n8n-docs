---
title: ConvertAPI 凭证
description: >-
  ConvertAPI 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  ConvertAPI 的身份。
contentType:
  - integration
  - reference
nodeTitle: ConvertAPI credentials
originalFilePath: integrations/builtin/credentials/convertapi.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/convertapi'
url: 'https://docs.n8n.io/integrations/builtin/credentials/convertapi'
layout:
  description:
    visible: false
---

# ConvertAPI 凭证

> **大白话**：ConvertAPI 是在线文件格式转换服务（PDF、图片、Office 文档互相转换）。n8n 连接它只需要一把 **API Token（接口令牌）**。注意：这是一个「纯凭证」节点，意思是它本身没有现成的操作选项，你需要配合 n8n 的 HTTP Request 节点来手动调用 ConvertAPI 的接口。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 支持的验证方式（Supported authentication methods）

- API Token（API 令牌）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [ConvertAPI 的 API 文档](https://docs.convertapi.com/docs/getting-started)。

这是一个纯凭证（credential-only）节点。更多信息请参考[自定义 API 操作（Custom API operations）](../custom-api-actions-for-existing-nodes.md)。也可以在 n8n 官网上查看[示例工作流和相关内容](https://n8n.io/integrations/convertapi/)。

## 使用 API Token（API 令牌）

要配置这个凭证，你需要一个 [ConvertAPI](https://www.convertapi.com/a/signin) 账号，以及：

- 一个 [**API Token**](https://docs.convertapi.com/docs/api-tokens)，用于对服务请求进行身份验证。

关于如何对该服务进行身份验证的更多信息，请参考 [ConvertAPI 的 API 文档](https://docs.convertapi.com/docs/authentication)。
