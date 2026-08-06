---
title: Auth0 Management 凭证
description: >-
  Auth0 Management 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Auth0 Management 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Auth0 Management credentials
originalFilePath: integrations/builtin/credentials/auth0management.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/auth0management'
url: 'https://docs.n8n.io/integrations/builtin/credentials/auth0management'
layout:
  description:
    visible: false
---

# Auth0 Management 凭证

{% hint style="info" %}
**大白话**：Auth0 是给开发者用的「身份认证/登录服务」平台（帮应用做注册、登录、权限管理）。它的 Management API 用于管理用户、租户等资源。n8n 连它需要填三样：**Domain（域名）**、**Client ID**、**Client Secret**，都在你 Auth0 应用后台的 **Settings（设置）** 标签页里。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 准备工作

注册一个 [Auth0](https://auth0.com) 账号。

## 支持的验证方式

- API client secret（API 客户端密钥）

## 相关资源

关于该服务的更多信息，请参考 [Auth0 Management 官方文档](https://auth0.com/docs/api/management/v2)。

这是一个「仅凭证」节点（credential-only node），没有自带的可视化操作界面。更多信息请参考[为已有节点添加自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。你也可以在 n8n 官网上查看 [Auth0 Management API 示例工作流和相关内容](https://n8n.io/integrations/auth0-management-api/)。

## 使用 API client secret（API 客户端密钥）

要配置这个凭证，你需要准备：

- Auth0 的 **Domain（域名）**
- **Client ID（客户端 ID）**
- **Client Secret（客户端密钥）**

如何从应用的 **Settings（设置）** 标签页获取 Client ID 和 Client Secret，请参考 [Auth0 Management API 获取访问令牌文档](https://auth0.com/docs/secure/tokens/access-tokens/get-access-tokens)。
