---
title: Storyblok 凭证
description: >-
  Storyblok 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Storyblok 的身份。
contentType:
  - integration
  - reference
nodeTitle: Storyblok credentials
originalFilePath: integrations/builtin/credentials/storyblok.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/storyblok'
url: 'https://docs.n8n.io/integrations/builtin/credentials/storyblok'
layout:
  description:
    visible: false
---

# Storyblok 凭证

{% hint style="info" %}
**大白话**：Storyblok 是一款「无头 CMS」（内容管理后台，只管内容、不管展示）。n8n 连它有两种令牌：**Content API Key（内容密钥）** 只能读内容（适合拿数据）；**Management API Key（管理密钥）** 能做完整的增删改查（CRUD）。只读就选前者，要写内容就选后者，两种生成方法都很简单。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Storyblok](../app-nodes/n8n-nodes-base.storyblok.md)

## 先决条件

注册一个 [Storyblok](https://www.storyblok.com/) 账号。

## 支持的验证方式

- Content API key（内容 API 密钥）：只读访问
- Management API key（管理 API 密钥）：完整的增删改查（CRUD）操作

{% hint style="info" %}
**Content API 支持范围**

n8n 只支持 Content API v1 版本。
{% endhint %}

## 相关资源

关于该服务的更多信息，请参考 Storyblok 的 [Content v1 API 文档](https://www.storyblok.com/docs/api/content-delivery/v1) 和 [Management API 文档](https://www.storyblok.com/docs/api/management/getting-started/introduction)。

## 使用 Content API key（内容 API 密钥）

要配置这个凭证，你需要：

- 一个 Content **API Key（API 密钥）**：去你的 Storyblok 工作区的 **Settings（设置）> Access Tokens（访问令牌）** 获取 API key。**Access Level（访问级别）** 选 **Public（公开）**（`version=published`）或 **Preview（预览）**（`version-published` 和 `version=draft`）都可以。把这个访问令牌填成你的 **API Key**。更详细的步骤请参考 [如何获取和生成访问令牌](https://www.storyblok.com/faq/retrieve-and-generate-access-tokens)。

关于每个访问级别支持哪些操作，请参考 [Content v1 API 身份验证](https://www.storyblok.com/docs/api/content-delivery/v1#topics/authentication)。

## 使用 Management API key（管理 API 密钥）

要配置这个凭证，你需要：

- 一个 **Personal Access Token（个人访问令牌）**：去 [**My Account（我的账号）**](https://app.storyblok.com/#!/me/account) **> Personal access tokens（个人访问令牌）** 生成一个新的访问令牌。把这个访问令牌填成你的 **Personal Access Token**。
