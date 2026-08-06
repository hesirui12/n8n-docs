---
title: Medium 凭证
description: >-
  Medium 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Medium 的身份。
contentType:
  - integration
  - reference
nodeTitle: Medium credentials
originalFilePath: integrations/builtin/credentials/medium.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/medium'
url: 'https://docs.n8n.io/integrations/builtin/credentials/medium'
layout:
  description:
    visible: false
---

# Medium 凭证

> **大白话**：Medium 是写作平台。注意：Medium 官方已经停用了它的 API，所以这个凭证虽然还能在 n8n 里看到，但基本没法用来新建集成了。如果还要了解它的配置方法，往下看即可。

你可以使用这些凭证来验证以下节点的身份：

- [Medium](../app-nodes/n8n-nodes-base.medium.md)

{% hint style="warning" %}
**Medium API 已不再支持**

Medium 已停止支持 Medium API。这些凭证仍会出现在 n8n 中，但你无法再用它们配置新的集成。
{% endhint %}

## 前提条件

- 在 [Medium](https://www.medium.com/) 上注册一个账号。
- 对于 OAuth2 方式，需要发邮件到 [yourfriends@medium.com](mailto:yourfriends@medium.com) 申请凭证访问权限。

## 支持的认证方式

- API access token（API 访问令牌）
- OAuth2（授权码认证）

## 相关资源

关于该服务的更多信息，请参考 [Medium 的 API 文档](https://github.com/Medium/medium-api-docs)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要：

- 一个 API **Access Token（访问令牌）**：在 **Settings >** [**Security and apps**](https://medium.com/me/settings/security) **> Integration tokens**（设置 > 安全与应用 > 集成令牌）里生成。用生成出来的集成令牌作为你的 n8n **Access Token**。

更多信息请参考 Medium API 的[自签发访问令牌文档](https://github.com/Medium/medium-api-docs?tab=readme-ov-file#21-self-issued-access-tokens)。

## 使用 OAuth2

要配置这个凭证，你需要：

- 一个 **Client ID（客户端 ID）**
- 一个 **Client Secret（客户端密钥）**

要生成 **Client ID** 和 **Client Secret**，你需要能进入 **Developers**（开发者）菜单。在那里新建一个应用，即可生成 Client ID 和 Secret。

新应用请使用以下设置：

- 选择 **OAuth 2** 作为 **Authorization Protocol**（授权协议）。
- 从 n8n 复制 **OAuth Callback URL**（OAuth 回调地址），把它作为 Medium 里的 **Callback URL**（回调地址）。
