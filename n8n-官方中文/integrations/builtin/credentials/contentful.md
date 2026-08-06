---
title: Contentful 凭证
description: >-
  Contentful 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Contentful 的身份。
contentType:
  - integration
  - reference
nodeTitle: Contentful credentials
originalFilePath: integrations/builtin/credentials/contentful.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/contentful'
url: 'https://docs.n8n.io/integrations/builtin/credentials/contentful'
layout:
  description:
    visible: false
---

# Contentful 凭证

> **大白话**：Contentful 是「无头 CMS」（内容管理后台 + API 分发内容，常用于网站/App 的内容管理）。n8n 连接它需要：**Space ID（空间 ID）**，以及按需准备两个令牌——内容分发用的 **Content Delivery** 令牌和预览用的 **Content Preview** 令牌（不用对应功能就可以留空）。在 Contentful 的 Settings > API keys 里一起生成。

这些凭证可以用来验证以下节点的身份：

- [Contentful](../app-nodes/n8n-nodes-base.contentful.md)

## 准备工作（Prerequisites）

- 创建一个 [Contentful](https://www.contentful.com/) 账号。
- 创建一个 [Contentful space（空间）](https://www.contentful.com/help/getting-started/contentful-101/#step-2-create-a-space)。

## 支持的验证方式（Supported authentication methods）

- API access token（API 访问令牌）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Contentful 的 API 文档](https://www.contentful.com/developers/docs/references/)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要准备：

- Contentful **Space ID（空间 ID）**：生成令牌时会显示 Space ID；也可以参考 [Contentful 查找 Space ID 的文档](https://www.contentful.com/help/spaces/find-space-id/) 查看。
- **Content Delivery API Access Token（内容分发 API 访问令牌）**：如果要使用 [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) 则需要填写；不打算用这个接口就留空。
- **Content Preview API Access Token（内容预览 API 访问令牌）**：如果要使用 [Content Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/) 则需要填写；不打算用这个接口就留空。

在 Contentful 的 **Settings > API keys** 中查看并生成访问令牌。Contentful 会在同一个 key 下同时为 Content Delivery API 和 Content Preview API 生成令牌。详细步骤请参考 [Contentful 的 API 认证文档](https://www.contentful.com/developers/docs/references/authentication/)。
