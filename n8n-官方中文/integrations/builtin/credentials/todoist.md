---
title: Todoist 凭证
description: >-
  Todoist 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Todoist 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Todoist credentials
originalFilePath: integrations/builtin/credentials/todoist.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/todoist'
url: 'https://docs.n8n.io/integrations/builtin/credentials/todoist'
layout:
  description:
    visible: false
---

# Todoist 凭证

{% hint style="info" %}
**大白话**：Todoist 是流行的待办事项（任务清单）工具。n8n 连它有两种方式：**API Key（API 密钥）**（简单，去 Todoist 的集成设置里复制你的 API token 就行）或 **OAuth2（网页授权登录）**（更规范，需要创建应用拿 Client ID 和 Client Secret）。绝大多数情况用 API Key 就够了。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Todoist](../app-nodes/n8n-nodes-base.todoist.md)

## 支持的验证方式

- API key（API 密钥）
- OAuth2（网页授权登录）

## 相关资源

关于该服务的更多信息，请参考 [Todoist 官方 REST API 文档](https://developer.todoist.com/rest/v2/#overview)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要一个 [Todoist](https://todoist.com/) 账号，以及：

- 一个 **API Key（API 密钥）**

获取你的 **API Key**：

1. 在 Todoist 里打开你的[**集成设置**](https://todoist.com/prefs/integrations)。
2. 选择 **Developer（开发者）** 标签页。
3. 复制你的 **API token（API 令牌）**，填进 n8n 凭证的 **API Key（API 密钥）** 字段。

更多信息请参考[找到你的 API token](https://todoist.com/help/articles/find-your-api-token-Jpzx9IIlB)。

## 使用 OAuth2（网页授权登录）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你是[自托管](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n) n8n，你需要一个 [Todoist](https://todoist.com/) 账号，以及：

- 一个 **Client ID（客户端 ID）**
- 一个 **Client Secret（客户端密钥）**

通过创建应用来获取这两个值：

1. 打开 Todoist [App Management Console（应用管理控制台）](https://developer.todoist.com/appconsole.html)。
2. 选择 **Create a new app（创建新应用）**。
3. 为你的应用输入 **App name（应用名称）**，比如 `n8n integration`。
4. 选择 **Create app（创建应用）**。
5. 复制 n8n 的 **OAuth Redirect URL（OAuth 回调地址）**，填到 Todoist 的 **OAuth redirect URL（OAuth 回调地址）** 里。
6. 从 Todoist 复制 **Client ID（客户端 ID）**，填进 n8n 的凭证里。
7. 从 Todoist 复制 **Client Secret（客户端密钥）**，填进 n8n 的凭证里。
8. 按你的使用场景配置 Todoist 应用的其余部分。

更多信息请参考 Todoist [授权指南](https://developer.todoist.com/guides/#authorization)。
