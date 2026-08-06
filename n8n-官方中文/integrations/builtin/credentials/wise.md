---
title: Wise 凭证
description: >-
  Wise 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Wise 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Wise credentials
originalFilePath: integrations/builtin/credentials/wise.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/wise'
url: 'https://docs.n8n.io/integrations/builtin/credentials/wise'
layout:
  description:
    visible: false
---

# Wise 凭证

> **大白话**：Wise 是跨境转账汇款平台。连它只需要一个 **API Token（API 令牌）**，在你的 Wise 账户里就能生成。注意环境要选对：测试沙盒选 **Test**，正式环境选 **Live**。另外，如果你想调用一些需要「强客户认证（SCA）」的正式接口，还得额外生成一对公钥/私钥（用 openssl 命令行生成），公钥填到 Wise 后台、私钥填回 n8n。

你可以使用这些凭证对以下节点进行身份验证：

- [Wise](../app-nodes/n8n-nodes-base.wise.md)
- [Wise Trigger](../trigger-nodes/n8n-nodes-base.wisetrigger.md)

## 前提条件

创建一个 [Wise](https://wise.com/) 账户。

## 支持的认证方式

- API token（API 令牌）

## 相关资源

关于该服务的更多信息，请参考 [Wise 的 API 文档](https://docs.wise.com/api-docs/api-reference)。

## 使用 API token

要配置此凭证，你需要：

- 一个 **API Token**：进入你的 **用户菜单 > Settings > API tokens** 生成一个 API 令牌。把生成的令牌填进 n8n 凭证里。更多信息请参考 [Getting started with the API](https://wise.com/help/articles/2958107/getting-started-with-the-api)。
- 你的 **Environment（环境）**：选择与你 Wise 账户环境匹配的选项。
    - 如果你用的是 Wise 测试沙盒账户，选 **Test**。
    - 否则选 **Live**。
- **Private Key（私钥，可选）**：对于要求强客户认证（SCA）的正式（Live）接口，你需要生成一对公钥和私钥，把私钥填在这里。更多信息请参考 [添加私钥](#添加私钥)。
    - 如果你用的是 **Test** 环境，只有当你在[公钥管理页面](https://sandbox.transferwise.tech/public-keys)上启用了强客户认证时，才需要填私钥。

## 添加私钥

Wise 会用强客户认证（SCA）保护一些正式接口和操作。详情请参考 [Strong Customer Authentication & 2FA](https://docs.wise.com/api-docs/features/strong-customer-authentication-2fa)。

如果你请求了一个要求 SCA 的接口，Wise 会返回 403 Forbidden（禁止访问）的 HTTP 状态码，错误信息类似这样：

> This request requires Strong Customer Authentication (SCA). Please add a key pair to your account and n8n credentials. See https://api-docs.transferwise.com/#strong-customer-authentication-personal-token

要使用这些需要 SCA 的接口，请生成一对 RSA 密钥，并把相关信息同时填到 Wise 和 n8n 两边：

1. 生成 RSA 密钥对：

    ```sh
    $ openssl genrsa -out private.pem 2048 
    $ openssl rsa -pubout -in private.pem -out public.pem
    ```

2. 把公钥文件 `public.pem` 的内容添加到你的 Wise **用户菜单 > Settings > API tokens > Manage public keys**。
3. 在 n8n 中把私钥文件 `private.pem` 的内容填到 **Private Key (Optional)** 字段。

更多信息请参考 [Personal Token SCA](https://docs.wise.com/api-docs/guides/strong-customer-authentication-2fa/personal-token-sca)。
