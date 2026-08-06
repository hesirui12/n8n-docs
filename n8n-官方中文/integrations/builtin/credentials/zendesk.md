---
title: Zendesk 凭证
description: >-
  Zendesk 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Zendesk 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Zendesk credentials
originalFilePath: integrations/builtin/credentials/zendesk.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/zendesk'
url: 'https://docs.n8n.io/integrations/builtin/credentials/zendesk'
layout:
  description:
    visible: false
---

# Zendesk 凭证

> **大白话**：Zendesk 是客服工单系统（接客户提问、跟踪处理进度）。连它有两种方式，二选一：**API token（API 令牌）**——先在后台 **Apps and integrations > APIs > Zendesk APIs** 开启令牌访问并生成令牌，填上子域名、邮箱、令牌就行；**OAuth2**——在后台创建 OAuth 客户端，把 n8n 的回调地址填进去，再把客户端的 Unique identifier 填成 Client ID、Secret 填成 Client Secret。子域名就是网址里 `https://` 和 `.zendesk.com` 之间的部分。

你可以使用这些凭证对以下节点进行身份验证：

- [Zendesk](../app-nodes/n8n-nodes-base.zendesk.md)
- [Zendesk Trigger](../trigger-nodes/n8n-nodes-base.zendesktrigger.md)

## 前提条件

- 创建一个 [Zendesk](https://zendesk.com/) 账户。
- 对于 API 令牌认证，需要在 Admin Center（管理中心）的 **Apps and integrations > APIs > Zendesk APIs** 下开启 API 的令牌访问权限。

## 支持的认证方式

- API token（API 令牌）
- OAuth2

## 相关资源

关于该服务的更多信息，请参考 [Zendesk 的 API 文档](https://developer.zendesk.com/api-reference/)。

## 使用 API token

要配置此凭证，你需要：

- 你的 **Subdomain**（子域名）：你的 Zendesk 子域名是网址中 `https://` 和 `.zendesk.com` 之间的部分。例如，如果 Zendesk 网址是 `https://n8n-example.zendesk.com/agent/dashboard`，子域名就是 `n8n-example`。
- 一个 **Email**（邮箱）地址：填写你登录 Zendesk 时使用的邮箱地址。
- 一个 **API Token**（API 令牌）：在 **Apps and integrations > APIs > Zendesk API** 中生成一个 API 令牌。更多信息请参考 [API token](https://developer.zendesk.com/api-reference/introduction/security-and-auth/#api-token)。

## 使用 OAuth2

要配置此凭证，你需要：

- 一个 **Client ID**（客户端 ID）：创建新的 OAuth 客户端时生成。
- 一个 **Client Secret**（客户端秘密）：创建新的 OAuth 客户端时生成。
- 你的 **Subdomain**（子域名）：你的 Zendesk 子域名是网址中 `https://` 和 `.zendesk.com` 之间的部分。例如，如果 Zendesk 网址是 `https://n8n-example.zendesk.com/agent/dashboard`，子域名就是 `n8n-example`。

要创建新的 OAuth 客户端，进入 **Apps and integrations > APIs > Zendesk API > OAuth Clients**。

使用以下设置：

 - 从 n8n 复制 **OAuth Redirect URL**，在 OAuth 客户端中填为 **Redirect URL**（回调地址）。
 - 复制 Zendesk 客户端的 **Unique identifier**（唯一标识符），填为你的 n8n **Client ID**。
 - 从 Zendesk 复制 **Secret**，填为你的 n8n **Client Secret**。

更多信息请参考 [Registering your application with Zendesk](https://support.zendesk.com/hc/en-us/articles/4408845965210-Using-OAuth-authentication-with-your-application#topic_s21_lfs_qk)。
