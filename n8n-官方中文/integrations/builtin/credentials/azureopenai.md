---
title: Azure OpenAI 凭证
description: >-
  Azure OpenAI 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Azure OpenAI 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Azure OpenAI credentials
originalFilePath: integrations/builtin/credentials/azureopenai.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/azureopenai'
url: 'https://docs.n8n.io/integrations/builtin/credentials/azureopenai'
layout:
  description:
    visible: false
---

# Azure OpenAI 凭证

{% hint style="info" %}
**大白话**：Azure OpenAI 是微软云上托管的 OpenAI 大模型服务（把 GPT 系列模型部署在你自己的 Azure 环境里）。n8n 连它有两种方式：简单版是填 **Resource Name（资源名）+ API Key + API Version**；进阶版是 **Azure Entra ID（OAuth2，企业身份认证）**，适合公司环境。注意：模型名要用你的 **Deployment name（部署名）**。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Chat Azure OpenAI（聊天模型）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatazureopenai.md)
- [Embeddings Azure OpenAI（向量嵌入）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsazureopenai.md)

## 准备工作

- 创建 [Azure](https://azure.microsoft.com) 订阅。
- 该订阅需要开通 Azure OpenAI 的访问权限。如果你的组织还没有，你可能需要[申请访问权限](https://aka.ms/oai/access)。

## 支持的验证方式

- API key（API 密钥）
- Azure Entra ID（OAuth2，企业身份认证）

## 相关资源

关于该服务的更多信息，请参考 [Azure OpenAI 官方 API 文档](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- **Resource Name（资源名称）**：你给资源起的 **Name（名称）**
- 一个 **API key（API 密钥）**：用 **Key 1** 就行。在部署前就能在 **Keys and Endpoint（密钥和端点）** 里看到。
- 凭证要使用的 **API Version（API 版本）**。关于 Azure OpenAI 的 API 版本管理，请参考 [Azure OpenAI API 预览版生命周期文档](https://learn.microsoft.com/en-us/azure/ai-services/openai/api-version-deprecation)。

要获取上面的信息，请[创建并部署一个 Azure OpenAI 服务资源](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource)。

{% hint style="info" %}
**Azure OpenAI 节点的模型名**

部署好资源后，在使用这个凭证的 Azure OpenAI 节点里，模型名请填写 **Deployment name（部署名）**。
{% endhint %}

## 使用 Azure Entra ID（OAuth2，企业身份认证）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

对于自建（self-hosted）用户，从零配置 OAuth2 主要有两大步：

1. 在 Microsoft Identity Platform 上[注册一个应用程序](#注册应用程序)。
2. 为那个应用[生成一个客户端密钥（client secret）](#生成客户端密钥)。

按下面的详细说明一步步操作即可。关于 Microsoft OAuth2 网页授权流程的更多细节，请参考 [Microsoft 身份验证和授权基础](https://learn.microsoft.com/en-us/graph/auth/auth-concepts)。

### 注册应用程序

在 Microsoft Identity Platform 上注册一个应用程序：

1. 打开 [Microsoft 应用程序注册门户](https://aka.ms/appregistrations)。
2. 选择 **Register an application（注册应用程序）**。
3. 为你的应用输入 **Name（名称）**。
4. 在 **Supported account types（支持的账户类型）** 中，选择 **Accounts in any organizational directory (Any Azure AD directory - Multi-tenant) and personal Microsoft accounts (for example, Skype, Xbox)（任何组织目录中的账户（任何 Azure AD 目录 - 多租户）和个人 Microsoft 账户（例如 Skype、Xbox））**。
5. 在 **Register an application（注册应用程序）** 表单里：
    1. 从 n8n 凭证里复制 **OAuth Callback URL（OAuth 回调地址）**。
    2. 把它粘贴到 **Redirect URI (optional)（重定向 URI（可选））** 字段。
    3. 选择 **Select a platform（选择平台）> Web（网页）**。
6. 点 **Register（注册）** 完成应用创建。
7. 复制 **Application (client) ID（应用程序（客户端）ID）**，粘贴到 n8n 的 **Client ID** 里。

更多信息请参考 [在 Microsoft Identity Platform 上注册应用程序](https://learn.microsoft.com/en-us/graph/auth-register-app-v2)。

### 生成客户端密钥

应用创建好之后，为它生成一个客户端密钥：

1. 在 Microsoft 应用页面上，选择左侧导航里的 **Certificates & secrets（证书和机密）**。
2. 在 **Client secrets（客户端机密）** 里，点 **+ New client secret（新建客户端机密）**。
3. 为你的客户端密钥输入 **Description（描述）**，比如 `n8n credential`。
4. 点 **Add（添加）**。
5. 复制 **Value（值）** 列里的 **Secret（机密）**。
6. 把它粘贴到 n8n 的 **Client Secret** 里。
7. 在 n8n 里点 **Connect my account（连接我的账号）** 完成连接配置。
8. 登录你的 Microsoft 账户，并允许应用访问你的信息。

关于添加客户端密钥的更多信息，请参考 Microsoft 的 [添加凭证](https://learn.microsoft.com/en-us/graph/auth-register-app-v2#add-credentials)。

## 设置自定义权限范围（Custom Scopes）

Azure Entra ID 凭证默认使用以下权限范围（scopes）：

- [`openid`](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc#the-openid-scope)
- [`offline_access`](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc#the-offline_access-scope)
- [`AccessReview.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#accessreviewreadwriteall)
- [`Directory.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#directoryreadwriteall)
- [`NetworkAccessPolicy.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#networkaccesspolicyreadwriteall)
- [`DelegatedAdminRelationship.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#delegatedadminrelationshipreadwriteall)
- [`EntitlementManagement.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#entitlementmanagementreadwriteall)
- [`User.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#userreadwriteall)
- [`Directory.AccessAsUser.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#directoryaccessasuserall)
- [`Sites.FullControl.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#sitesfullcontrolall)
- [`GroupMember.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#groupmemberreadwriteall)

想为你的凭证选择不同的权限范围，打开 **Custom Scopes（自定义权限范围）** 开关，然后编辑 **Enabled Scopes（已启用的权限范围）** 列表。请注意：权限范围收窄后，某些功能可能无法正常工作。
