---
title: Azure Storage 凭证
description: >-
  Azure Storage 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Azure Storage 的身份。
contentType:
  - integration
  - reference
nodeTitle: Azure Storage credentials
originalFilePath: integrations/builtin/credentials/azurestorage.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/azurestorage'
url: 'https://docs.n8n.io/integrations/builtin/credentials/azurestorage'
layout:
  description:
    visible: false
---

# Azure Storage 凭证

{% hint style="info" %}
**大白话**：Azure Storage 是微软云的「对象存储/文件存储」服务（类似 AWS S3，存图片、文件、备份）。n8n 连它有两种方式：**OAuth2**（企业身份认证，推荐，填 Client ID / Client Secret，或者用证书）；**Shared Key（共享密钥）**（简单版，填 **Account（账号名）+ Key（密钥）** 就行，密钥在门户的 **Security + networking > Access keys** 里）。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Azure Storage](../app-nodes/n8n-nodes-base.azurestorage.md)

## 准备工作

- 创建 [Azure](https://azure.microsoft.com) 订阅。
- 创建 [Azure 存储账号](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create)。

## 支持的验证方式

- OAuth2（企业身份认证）
- Shared Key（共享密钥）

## 相关资源

关于该服务的更多信息，请参考 [Azure Storage 官方 API 文档](https://learn.microsoft.com/en-us/rest/api/storageservices/)。

## 使用 OAuth2（企业身份认证）

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

你也可以不用客户端密钥，而是用证书（`private_key_jwt`）来验证这个凭证。把 **Authentication（验证方式）** 设为 **Certificate（证书）**，然后提供私钥和证书即可。完整步骤请参考[使用证书验证](microsoft.md#authenticate-with-a-certificate)。

## 使用 Shared Key（共享密钥）

要配置这个凭证，你需要准备：

- **Account（账号）**：你的 Azure Storage 账号名称。
- **Key（密钥）**：你的 Azure Storage 账号的共享密钥。选择 **Security + networking（安全 + 网络）**，然后选择 **Access keys（访问密钥）**。两把账号密钥随便用哪把都行。

更详细的操作步骤请参考 [管理存储账号访问密钥 | Microsoft](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage)。

## 常见问题

以下是 Azure Storage 凭证已知的常见错误和问题。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/fXYywkPyzPTxeGOEnYgb/" %}
