---
title: Linear 凭证
description: >-
  Linear 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Linear 的身份。
contentType:
  - integration
  - reference
nodeTitle: Linear credentials
originalFilePath: integrations/builtin/credentials/linear.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/linear'
url: 'https://docs.n8n.io/integrations/builtin/credentials/linear'
layout:
  description:
    visible: false
---

# Linear 凭证

{% hint style="info" %}
**大白话**：Linear 是程序员圈口碑极好的「极简项目/Issue 管理工具」（快捷键流操作，很多创业团队在用）。n8n 连它有两种方式：**API key（个人密钥，最快，个人用推荐）** 或 **OAuth2（网页授权，适合多用户或公司应用）**。注意：如果要用 Linear Trigger（触发器）节点，OAuth2 方式必须打开 **Include Admin Scope（包含管理员权限）** 开关。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Linear Trigger（触发器）](../trigger-nodes/n8n-nodes-base.lineartrigger.md)
* [Linear](../app-nodes/n8n-nodes-base.linear.md)

## 准备工作

创建一个 [Linear](https://linear.app/) 账号。

## 支持的验证方式

- API key（API 密钥）
- OAuth2（网页授权）

## 相关资源

关于该服务的更多信息，请参考 [Linear 的 API 文档](https://developers.linear.app/docs/graphql/working-with-the-graphql-api)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个个人 **API Key（API 密钥）**：在 [**Settings（设置）** > **Security & access（安全与访问）**](https://linear.app/n8n/settings/account/security) 里创建一个专用的个人 API key。更多信息请参考 [Linear 个人 API keys 文档](https://linear.app/developers/graphql#personal-api-keys)。

## 使用 OAuth2（网页授权）

要配置这个凭证，你需要准备：

- 一个 **Client ID（客户端 ID）**：创建新的 OAuth2 应用时生成。
- 一个 **Client Secret（客户端密钥）**：创建新的 OAuth2 应用时生成。
- 选择 **Actor（操作主体）**：它决定 OAuth2 应用以谁的名义创建 Issue、评论和其他变更。可选值包括：
    - **User（用户）**（Linear 默认）：应用以授权用户的名义创建资源。如果你想每个用户各自授权，选这个。
    - **Application（应用）**：应用以自身的名义创建资源。如果你只有一个人（比如管理员）给应用授权，选这个。
- 要把这个凭证用在 [Linear Trigger（触发器）](../trigger-nodes/n8n-nodes-base.lineartrigger.md) 节点上，必须打开 **Include Admin Scope（包含管理员权限）** 开关。

更详细的步骤和解释请参考 [Linear OAuth2 认证文档](https://developers.linear.app/docs/oauth/authentication)。在 Linear 的 OAuth2 应用里，用 n8n 的 **OAuth Redirect URL** 作为 **Redirect callback URL（回调地址）**。
