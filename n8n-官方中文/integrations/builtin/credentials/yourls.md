---
title: YOURLS 凭证
description: >-
  YOURLS 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 YOURLS 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Yourls credentials
originalFilePath: integrations/builtin/credentials/yourls.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/yourls'
url: 'https://docs.n8n.io/integrations/builtin/credentials/yourls'
layout:
  description:
    visible: false
---

# YOURLS 凭证

> **大白话**：YOURLS 是自托管的短链接服务（自己在服务器上架一个「短网址生成器」）。连它要两样东西：**Signature** 令牌——在你自己的 YOURLS 后台 **Tools > Secure passwordless API call** 页面拿；**URL**——填你 YOURLS 实例的地址。前提是你得先把 YOURLS 装到自己的服务器上。

你可以使用这些凭证对以下节点进行身份验证：

- [Yourls](../app-nodes/n8n-nodes-base.yourls.md)

## 前提条件

在你的服务器上安装 [YOURLS](https://github.com/YOURLS/YOURLS)。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [YOURLS 的文档](https://yourls.org/docs)。

## 使用 API key

要配置此凭证，你需要：

- 一个 **Signature** 令牌：进入 **Tools > Secure passwordless API call**（工具 > 安全的免密 API 调用）获取你的 **Signature** 令牌。更多信息请参考 [YOURLS 的免密 API 文档](https://yourls.org/docs/guide/advanced/passwordless-api)。
- 一个 **URL**：填写你的 YOURLS 实例地址。
