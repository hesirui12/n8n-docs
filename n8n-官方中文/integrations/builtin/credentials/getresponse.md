---
title: GetResponse 凭证
description: >-
  GetResponse 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  GetResponse 的身份。
contentType:
  - integration
  - reference
nodeTitle: GetResponse credentials
originalFilePath: integrations/builtin/credentials/getresponse.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/getresponse'
url: 'https://docs.n8n.io/integrations/builtin/credentials/getresponse'
layout:
  description:
    visible: false
---

# GetResponse 凭证

{% hint style="info" %}
**大白话**：GetResponse 是一款邮件营销工具（建邮件列表、发营销邮件）。n8n 想自动管你的订阅者和邮件，有两条路：用 **API key（API 密钥）**（简单，进后台就能拿到），或者用 **OAuth2**（更标准，要先注册一个应用拿到 Client ID / Client Secret）。注意：GetResponse 不认 localhost 回调地址，如果在自己电脑上调试，需要用 ngrok 把本地服务映射到公网。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [GetResponse](../app-nodes/n8n-nodes-base.getresponse.md)
- [GetResponse Trigger](../trigger-nodes/n8n-nodes-base.getresponsetrigger.md)

## 准备工作

创建一个 [GetResponse](https://www.getresponse.com/) 账号。

## 支持的验证方式

- API key（API 密钥）
- OAuth2

## 相关资源

关于该服务的更多信息，请参考 [GetResponse 官方 API 文档](https://apidocs.getresponse.com/v3)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：查看或生成 API key，请到 **Integrations and API > API**。更详细的步骤请参考 [GetResponse 帮助中心](https://www.getresponse.com/help/where-do-i-find-the-api-key.html)。

## 使用 OAuth2

要配置这个凭证，你需要准备：

- 一个 **Client ID（客户端 ID）**：在你 [注册应用](https://apidocs.getresponse.com/v3/authentication/oauth2) 时生成。
- 一个 **Client Secret（客户端密钥）**：在你 [注册应用](https://apidocs.getresponse.com/v3/authentication/oauth2) 时生成，对应其中的 **Client Secret Key**。

注册应用时，从 n8n 里复制 **OAuth Redirect URL（OAuth 回调地址）**，在 GetResponse 里把它填成应用的 **Redirect URL（回调地址）**。

{% hint style="info" %}
**localhost 回调地址的限制**

Redirect URL 应该是你域名下的一个地址，例如：`https://mytemplatemaker.example.com/gr_callback`。GetResponse 不接受 localhost 回调地址。要在本地环境配置凭证，请参考下方的 [配置本地环境的 OAuth2 凭证](#配置本地环境的-oauth2-凭证)。
{% endhint %}

## 配置本地环境的 OAuth2 凭证

GetResponse 不接受 localhost 回调地址。按下面的步骤在本地环境配置 OAuth 凭证：

1. 用 [ngrok](https://ngrok.com/) 把本地运行在 `5678` 端口的服务暴露到公网。在终端里运行下面的命令：
```sh
ngrok http 5678
```
2. 在新的终端里运行下面的命令。把 `<YOUR-NGROK-URL>` 替换成上一步得到的那个 URL。
```sh
export WEBHOOK_URL=<YOUR-NGROK-URL>
```
3. 按照上面的 [使用 OAuth2](#使用-oauth2) 说明配置你的凭证，把上面得到的 URL 作为 **Redirect URL（回调地址）**。
