---
title: Raindrop 凭证
description: >-
  Raindrop 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Raindrop 的身份。
contentType:
  - integration
  - reference
nodeTitle: Raindrop credentials
originalFilePath: integrations/builtin/credentials/raindrop.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/raindrop'
url: 'https://docs.n8n.io/integrations/builtin/credentials/raindrop'
layout:
  description:
    visible: false
---

# Raindrop 凭证

{% hint style="info" %}
**大白话**：Raindrop 是一款「网络书签收藏」工具，可以把看到的好文章、好网站分类收藏，随时查阅。n8n 连它用的是 OAuth2：去 Raindrop 的 **Settings（设置）> Integrations（集成）** 里创建一个开发者应用，拿到 **Client ID（客户端 ID）** 和 **Client Secret（客户端密钥）**，再把 n8n 的回调地址填进应用即可。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Raindrop](../app-nodes/n8n-nodes-base.raindrop.md)

## 准备工作

注册一个 [Raindrop](https://raindrop.io/) 账号。

## 支持的验证方式

- OAuth2

## 相关资源

关于该服务的更多信息，请参考 [Raindrop 官方 API 文档](https://developer.raindrop.io/)。

## 使用 OAuth

要配置这个凭证，你需要准备：

- **Client ID（客户端 ID）**
- **Client Secret（客户端密钥）**

两者都通过创建一个 Raindrop 应用来生成。

要创建应用，请前往 **Settings（设置）>** [**Integrations（集成）**](https://app.raindrop.io/settings/integrations)，在 **For Developers（面向开发者）** 区域选择 **+ Create new app（+ 创建新应用）**。

为你的应用使用以下设置：

- 把 n8n 里的 **OAuth Redirect URL（OAuth 回调地址）** 复制过来，作为应用的 **Redirect URI（重定向地址）** 填入。
- 把 Raindrop 应用里的 **Client ID** 和 **Client Secret** 复制过来，填进你的 n8n 凭证。
