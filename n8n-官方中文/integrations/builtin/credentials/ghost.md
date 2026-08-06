---
title: Ghost 凭证
description: >-
  Ghost 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Ghost 的身份。
contentType:
  - integration
  - reference
nodeTitle: Ghost credentials
originalFilePath: integrations/builtin/credentials/ghost.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/ghost'
url: 'https://docs.n8n.io/integrations/builtin/credentials/ghost'
layout:
  description:
    visible: false
---

# Ghost 凭证

{% hint style="info" %}
**大白话**：Ghost 是一个博客/内容发布平台。n8n 想自动管理你的文章和内容，需要一把 API key。注意 Ghost 有两套完全分开的密钥：**Admin API key**（管理后台用，能写文章、改设置）和 **Content API key**（内容发布用，只能读公开内容），两者的格式和权限不一样，所以 n8n 里是分开存的两个凭证。另外还要填你的 Ghost 管理后台 URL。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Ghost](../app-nodes/n8n-nodes-base.ghost.md)

## 准备工作

创建一个 [Ghost](https://ghost.org/) 账号。

## 支持的验证方式

- Admin API key（管理后台 API 密钥）
- Content API key（内容 API 密钥）

这两类密钥的生成步骤一样，但授权流程和密钥格式不同，所以 n8n 会把它们分开存。Content API 直接用 API key；Admin API 是用 API key 生成一个令牌来做身份验证。

## 相关资源

关于 Admin API 服务的更多信息，请参考 Ghost 的 [Admin API 文档](https://ghost.org/docs/admin-api/)。关于 Content API 服务的更多信息，请参考 Ghost 的 [Content API 文档](https://ghost.org/docs/content-api/)。

## 使用 Admin API key（管理后台 API 密钥）

要配置这个凭证，你需要准备：

- 你的 Ghost 管理后台域名的 **URL**。你的 [admin domain（管理后台域名）](https://ghost.org/docs/admin-api/#base-url) 可能和你主站的域名不一样，还可能包含子目录。所有 Ghost(Pro) 博客的管理后台域名都是 `*.ghost.io` 格式，并且要求使用 https。
- 一个 **API Key（API 密钥）**：要生成新的 API key，先创建一个新的 Custom Integration（自定义集成）。更详细的步骤请参考 [Ghost Admin API 令牌身份验证文档](https://ghost.org/docs/admin-api/#token-authentication)。复制里面的 **Admin API Key**，把它填到 n8n 的 Ghost Admin 凭证里的 **API Key** 字段。

## 使用 Content API key（内容 API 密钥）

要配置这个凭证，你需要准备：

- 你的 Ghost 管理后台域名的 **URL**。你的 [admin domain（管理后台域名）](https://ghost.org/docs/content-api/#url) 可能和你主站的域名不一样，还可能包含子目录。所有 Ghost(Pro) 博客的管理后台域名都是 `*.ghost.io` 格式，并且要求使用 https。
- 一个 **API Key（API 密钥）**：要生成新的 API key，先创建一个新的 Custom Integration（自定义集成）。更详细的步骤请参考 [Ghost Content API Key 文档](https://ghost.org/docs/content-api/#key)。复制里面的 **Content API Key**，把它填到 n8n 的 Ghost Content 凭证里的 **API Key** 字段。
