---
title: Formstack Trigger 凭证
description: >-
  Formstack Trigger 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Formstack Trigger 的身份。
contentType:
  - integration
  - reference
nodeTitle: Formstack Trigger credentials
originalFilePath: integrations/builtin/credentials/formstacktrigger.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/formstacktrigger'
url: 'https://docs.n8n.io/integrations/builtin/credentials/formstacktrigger'
layout:
  description:
    visible: false
---

# Formstack Trigger 凭证

{% hint style="info" %}
**大白话**：Formstack 是一个在线表单工具。想让 n8n 在「有人填了你的表单」时自动触发工作流，就得先建一个凭证。Formstack 给了两条路：用 **API access token（访问令牌）**，或者用 **OAuth2**（更标准的授权方式）。两条路都要先去 Formstack 后台「创建应用（application）」拿到对应的密钥，再回来填进 n8n。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Formstack Trigger](../trigger-nodes/n8n-nodes-base.formstacktrigger.md)

## 准备工作

创建一个 [Formstack](https://www.formstack.com/) 账号。

## 支持的验证方式

- API access token（API 访问令牌）
- OAuth2

## 相关资源

关于该服务的更多信息，请参考 [Formstack 官方 API 文档](https://developers.formstack.com/reference/api-overview)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要准备：

- 一个 API **Access Token（访问令牌）**：要生成 Access Token，请先在 Formstack 里 [创建一个新应用](https://www.formstack.com/admin/apiKey/main)，创建时按下面的信息填写：
    * **Redirect URI（回调地址）**：如果你用的是 n8n 云端版，填 `https://oauth.n8n.cloud/oauth2/callback`。
        - 如果你是自己部署的 n8n，填你自己 n8n 实例的 OAuth 回调地址，格式是 `https://<n8n_url>/rest/oauth2-credential/callback`。例如 `https://localhost:5678/rest/oauth2-credential/callback`。
    * **Platform（平台）**：选择 **Website（网站）**。

创建好应用后，你可以从应用列表里复制访问令牌，也可以点开这个应用查看它的详细信息来复制。

更详细的步骤请参考 [Formstack 的 API 授权文档](https://developers.formstack.com/reference/api-overview#obtaining-an-api-key-oauth2-access-token)。

{% hint style="info" %}
**访问令牌的权限**

Formstack 把访问令牌和 Formstack 用户绑定在一起。访问令牌的权限跟着 Formstack（应用内）的用户权限走。
{% endhint %}

## 使用 OAuth2

要配置这个凭证，你需要准备：

- 一个 **Client ID（客户端 ID）**
- 一个 **Client Secret（客户端密钥）**

这两个值都要先在 Formstack 里 [创建一个新应用](https://www.formstack.com/admin/apiKey/main)，创建时按下面的信息填写：

- **Redirect URI（回调地址）**：从 n8n 凭证里复制 **OAuth Redirect URL（OAuth 回调地址）** 填到这里。
    - 如果你是自己部署的 n8n，填你自己 n8n 实例的 OAuth 回调地址，格式是 `https://<n8n_url>/rest/oauth2-credential/callback`。例如 `https://localhost:5678/rest/oauth2-credential/callback`。
- **Platform（平台）**：选择 **Website（网站）**。

创建好应用后，在应用列表里选中它，就能看到 **Application Details（应用详情）**。把里面的 **Client ID** 和 **Client Secret** 复制进 n8n。填好这两个值后，点击 **Connect my account（连接我的账号）** 按钮，开始走 OAuth2 授权流程。

更详细的步骤请参考 [Formstack 的 API 授权文档](https://developers.formstack.com/reference/api-overview#obtaining-an-api-key-oauth2-access-token)。

{% hint style="info" %}
**访问令牌的权限**

Formstack 把访问令牌和 Formstack 用户绑定在一起。访问令牌的权限跟着 Formstack（应用内）的用户权限走。
{% endhint %}
