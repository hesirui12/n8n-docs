---
title: Gumroad 凭证
description: >-
  Gumroad 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Gumroad 的身份。
contentType:
  - integration
  - reference
nodeTitle: Gumroad credentials
originalFilePath: integrations/builtin/credentials/gumroad.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/gumroad'
url: 'https://docs.n8n.io/integrations/builtin/credentials/gumroad'
layout:
  description:
    visible: false
---

# Gumroad 凭证

{% hint style="info" %}
**大白话**：Gumroad 是一个卖数字商品（电子书、课程、素材等）的电商平台。n8n 想监听它的销售动态，可以用两种方式：简单点的 **Access Token（访问令牌）**，或者走标准的 **OAuth2（网页授权登录）**。自己部署（自托管）n8n 的话需要选 OAuth2，并按步骤去 Gumroad 创建一个应用。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Gumroad Trigger（Gumroad 触发器）](../trigger-nodes/n8n-nodes-base.gumroadtrigger.md)

## 前提条件

创建一个 [Gumroad](https://gumroad.com/) 账号。

## 支持的验证方式

- API access token（API 访问令牌）
- OAuth2（网页授权登录）

## 相关资源

关于该服务的更多信息，请参考 [Gumroad 的 API 文档](https://app.gumroad.com/api)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要：

- 一个 API **Access Token（访问令牌）**：需要先创建一个应用（application）才能生成访问令牌。关于创建应用、生成访问令牌的详细步骤，请参考 [Gumroad 官方说明：为 API 创建应用](https://gumroad.com/help/article/280-create-application-api)。

## 使用 OAuth2（网页授权登录）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你是[自托管 n8n](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n)（自己部署），还需要准备：

- 一个 **OAuth Redirect URL（OAuth 回调地址）**
- 一个 **Client ID（客户端 ID）**
- 一个 **Client Secret（客户端密钥）**

要拿到这些信息，需要创建一个 Gumroad 应用：

1. 进入 Gumroad 的 **Settings（设置）> Advanced（高级）**。详细步骤请参考 [Gumroad 官方说明：为 API 创建应用](https://gumroad.com/help/article/280-create-application-api)。
2. 把 n8n 凭证里的 **OAuth Redirect URL** 复制出来，在 Gumroad 创建应用时填为 **Redirect URI（回调地址）**。
3. 创建应用。Gumroad 会生成一个 **Application ID（应用 ID）** 和 **Application Secret（应用密钥）**。
4. 把 **Application ID** 复制到 n8n 凭证的 **Client ID** 里。
5. 把 **Application Secret** 复制到 n8n 凭证的 **Client Secret** 里。
6. 如果你想申请超过默认 `view_sales` 范围的权限，在 n8n 凭证里打开 **Custom Scopes（自定义权限范围）** 并填写你需要的 scope；不需要就别开。
