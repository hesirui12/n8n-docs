---
title: Calendly 凭证
description: >-
  Calendly 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Calendly（预约工具）的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Calendly credentials
originalFilePath: integrations/builtin/credentials/calendly.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/calendly'
url: 'https://docs.n8n.io/integrations/builtin/credentials/calendly'
layout:
  description:
    visible: false
---

# Calendly 凭证

> 大白话：Calendly 是大家约会议时间的预约工具。n8n 想监听「有人约了时间」这类事件，靠的是 Calendly 的 Webhook（网络钩子），而 Webhook 只有付费套餐才有。凭证有两种做法：简单版是生成一把 Personal Access Token（个人访问令牌）；进阶版是用 OAuth2。无论哪种，都必须在创建时勾选那 4 个权限范围（scopes），少一个都不行。

这些凭证可以用来验证以下节点的身份：

- [Calendly Trigger（触发器）](../trigger-nodes/n8n-nodes-base.calendlytrigger.md)

{% hint style="warning" %}
**Calendly 套餐要求**

Calendly Trigger 节点依赖 Calendly 的 Webhook 功能，而 Calendly 只在付费套餐中提供 Webhook。
{% endhint %}

## 支持的验证方式

- Personal Access Token（个人访问令牌）
- OAuth2（网页授权登录）

## 必需的权限范围（Scopes）

要在 n8n 中使用 Calendly 节点和触发器，你的凭证必须具备以下权限范围：

- `users:read`：读取用户信息
- `webhooks:read`：读取 Webhook 订阅
- `webhooks:write`：创建和管理 Webhook 订阅
- `scheduled_events:read`：读取已安排的事件信息

Personal Access Token（个人访问令牌）也需要相同的权限范围。在 Calendly 创建个人访问令牌时，请勾选上面列出的这几项。

## 相关资源

关于该服务的更多信息，请参考 [Calendly 官方 API 文档](https://developer.calendly.com/getting-started)。

## 使用 Personal Access Token（个人访问令牌）

要配置这个凭证，你需要一个 [Calendly](https://www.calendly.com/) 账号，以及：

- 一个 **Personal Access Token（个人访问令牌）**

获取访问令牌的步骤：

1. 进入 Calendly 的 [**Integrations & apps（集成与应用）**](https://calendly.com/integrations) 页面。
2. 选择 [**API & Webhooks**](https://calendly.com/integrations/api_webhooks)。
3. 在 **Your Personal Access Tokens（你的个人访问令牌）** 区域，选择 **Generate new token（生成新令牌）**。
4. 为访问令牌填写一个 **Name（名称）**，例如 `n8n integration`。
5. 选择 **Create token（创建令牌）**。
6. 选择 **Copy token（复制令牌）**，把它填进你的 n8n 凭证。

更多信息请参考 [Calendly 个人访问令牌身份验证文档](https://developer.calendly.com/how-to-authenticate-with-personal-access-tokens)。

## 使用 OAuth2（网页授权登录）

要配置这个凭证，你需要一个 [Calendly 开发者](https://developer.calendly.com) 账号，以及：

- 一个 **Client ID（客户端 ID）**
- 一个 **Client Secret（客户端密钥）**

要拿到这两样，先在 Calendly 中创建一个新的 OAuth 应用：

1. 登录 Calendly 开发者门户，进入 [**My apps（我的应用）**](https://developer.calendly.com/console/apps)。
1. 选择 **Create new app（创建新应用）**。
1. 填写 **Name of app（应用名称）**，例如 `n8n integration`。
2. 在 **Kind of app（应用类型）** 中，选择 **Web（网页应用）**。
3. 在 **Environment type（环境类型）** 中，根据你的用途选择 **Sandbox（沙盒）** 或 **Production（正式环境）**。
    - Calendly 建议先用 **Sandbox（沙盒）** 做开发测试，准备正式上线时再创建一个用于 **Production（正式环境）** 的应用。
4. 从 n8n 复制 **OAuth Redirect URL（OAuth 回调地址）**，作为 OAuth 应用里的 **Redirect URI（回调 URI）** 填进去。
5. 在 **Scopes（权限范围）** 区域，添加以下必需的权限范围：
    - `users:read`
    - `webhooks:read`
    - `webhooks:write`
    - `scheduled_events:read`
6. 选择 **Save & Continue（保存并继续）**，应用详情会显示出来。
7. 复制 **Client ID（客户端 ID）**，填进 n8n 的 **Client ID** 一栏。
8. 复制 **Client secret（客户端密钥）**，填进 n8n 的 **Client Secret** 一栏。
9. 在 n8n 中选择 **Connect my account（连接我的账号）**，按屏幕上的提示完成授权。

更多信息请参考 [在 Calendly 注册你的应用](https://developer.calendly.com/create-a-developer-account)。

{% hint style="info" %}
**本地 OAuth2 测试提示**

如果用隧道工具（如 ngrok 或 Cloudflare Tunnel）测试 OAuth2，请通过你填进 **OAuth Redirect URL** 的那个公网地址打开 n8n。否则 OAuth 回调可能会失败，因为 n8n 的会话 cookie 属于另一个域名。
{% endhint %}
