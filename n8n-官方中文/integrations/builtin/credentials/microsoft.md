---
title: Microsoft 凭证
description: >-
  Microsoft 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Microsoft 的身份。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Microsoft credentials
originalFilePath: integrations/builtin/credentials/microsoft.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/microsoft'
url: 'https://docs.n8n.io/integrations/builtin/credentials/microsoft'
layout:
  description:
    visible: false
---

# Microsoft 凭证

> **大白话**：这个凭证是 n8n 连微软全家桶（Outlook、Teams、Excel、OneDrive、SharePoint 等）的「万能钥匙」，一次配置，多个微软节点通用。核心就三步：去微软注册一个应用、给它生成客户端密钥（或证书）、把 Client ID 和密钥填回 n8n 授权登录。

你可以使用这些凭证来验证以下节点的身份：

- [Microsoft Dynamics CRM](../app-nodes/n8n-nodes-base.microsoftdynamicscrm.md)
- [Microsoft Excel (OneDrive)](../app-nodes/n8n-nodes-base.microsoftexcel.md)
- [Microsoft Excel (SharePoint)](../app-nodes/n8n-nodes-base.microsoftexcelsharepoint.md)
- [Microsoft Graph Security](../app-nodes/n8n-nodes-base.microsoftgraphsecurity.md)
- [Microsoft OneDrive](../app-nodes/n8n-nodes-base.microsoftonedrive.md)
- [Microsoft Outlook](../app-nodes/n8n-nodes-base.microsoftoutlook.md)
- [Microsoft Outlook Trigger](../trigger-nodes/n8n-nodes-base.microsoftoutlooktrigger.md)
- [Microsoft SharePoint](../app-nodes/n8n-nodes-base.microsoftsharepoint.md)
- [Microsoft Teams](../app-nodes/n8n-nodes-base.microsoftteams.md)
- [Microsoft Teams Trigger](../trigger-nodes/n8n-nodes-base.microsoftteamstrigger.md)
- [Microsoft To Do](../app-nodes/n8n-nodes-base.microsofttodo.md)

{% hint style="info" %}
**如何选择凭证类型**

有些节点（比如 Microsoft Excel (OneDrive) 和 Microsoft OneDrive）可以让你在「节点专属凭证」（例如 **Microsoft Excel OAuth2 API**）和这个通用的 **Microsoft OAuth2 API** 凭证之间选择。通用凭证可以在多个微软节点之间复用；使用它时，要确保它已经获得了每个节点需要的权限范围（scopes）。不显示这个下拉框的节点则使用各自的节点专属凭证。Microsoft Excel (SharePoint) 节点只支持这个通用凭证（或者用 Microsoft Entra Service Principal 凭证做纯应用访问）；它不接受节点专属的 Microsoft Excel 或 Microsoft SharePoint 凭证。
{% endhint %}

## 前提条件

- 注册一个 [Microsoft Azure](https://azure.microsoft.com/) 账号。
- 至少创建一个有权访问相应服务的用户账号。
- 如果该用户账号由企业版 Microsoft Entra 账号管理，则管理员账号必须已经为用户开启了「用户可以代表自己同意应用访问公司数据」的选项（见 [Microsoft Entra 文档](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent)）。

## 支持的认证方式

- OAuth2（授权码认证）

## 相关资源

关于每个服务的 API，请参考下面链接的 Microsoft API 文档：

- Dynamics CRM：[Web API](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview)
- Excel：[Graph API](https://learn.microsoft.com/en-us/graph/api/resources/excel)
- Graph Security：[Graph API](https://learn.microsoft.com/en-us/graph/api/overview)
- OneDrive：[Graph API](https://learn.microsoft.com/en-us/onedrive/developer/rest-api/)
- Outlook：[Graph API](https://learn.microsoft.com/en-us/graph/api/resources/mail-api-overview) 和 [Outlook API](https://learn.microsoft.com/en-us/outlook/rest/reference)
- Teams：[Graph API](https://learn.microsoft.com/en-us/graph/api/resources/teams-api-overview)
- To Do：[Graph API](https://learn.microsoft.com/en-us/graph/todo-concept-overview)

## 使用 OAuth2

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

有些微软服务在 OAuth2 之外还需要额外的信息。关于这些服务，请参考下方的[服务专属设置](#服务专属设置)。

对于自托管（self-hosted）用户，从零配置 OAuth2 主要有两大步骤：

1. 在 Microsoft Identity Platform 上[注册一个应用](#注册一个应用)。
2. 为这个应用添加凭证，方式二选一：[生成客户端密钥](#生成客户端密钥) 或 [注册证书](#使用证书进行认证)。

请按下面的详细步骤操作。关于 Microsoft OAuth2 网页授权流程的更多细节，请参考[Microsoft 认证与授权基础](https://learn.microsoft.com/en-us/graph/auth/auth-concepts)。

### 注册一个应用

在 Microsoft Identity Platform 上注册一个应用：

1. 打开 [Microsoft Application Registration Portal](https://aka.ms/appregistrations)（微软应用注册门户）。
2. 选择 **Register an application**（注册应用）。
3. 为你的应用输入一个 **Name（名称）**。
4. 在 **Supported account types**（支持的账号类型）中，选择 **Accounts in any organizational directory (Any Azure AD directory - Multi-tenant) and personal Microsoft accounts (for example, Skype, Xbox)**（任何组织目录中的账号 + 个人微软账号）。
5. 在「注册应用」页面：
   1. 从你的 n8n 凭证里复制 **OAuth Callback URL**（OAuth 回调地址）。
   2. 把它粘贴到 **Redirect URI (optional)**（重定向地址，可选）字段。
   3. 选择 **Select a platform**（选择平台）> **Web**。
6. 选择 **Register**（注册）完成应用创建。
7. 复制 **Application (client) ID**（应用程序客户端 ID），把它作为 **Client ID** 粘贴到 n8n 中。

更多信息请参考[在 Microsoft Identity Platform 上注册应用](https://learn.microsoft.com/en-us/graph/auth-register-app-v2)。

### 生成客户端密钥

应用创建好之后，为它生成一个客户端密钥（client secret）：

1. 在你的微软应用页面，点击左侧导航里的 **Certificates & secrets**（证书与密钥）。
2. 在 **Client secrets**（客户端密钥）下，选择 **+ New client secret**（新建客户端密钥）。
3. 为客户端密钥输入一个 **Description（说明）**，例如 `n8n credential`。
4. 选择 **Add**（添加）。
5. 复制 **Value**（值）列中的 **Secret**（密钥）。
6. 把它作为 **Client Secret** 粘贴到 n8n 中。
7. 如果 n8n 凭证里还有其他字段，请参考下方[服务专属设置](#服务专属设置)来填写。
8. 在 n8n 中选择 **Connect my account**（连接我的账号）完成设置。
9. 登录你的微软账号，允许应用访问你的信息。

关于添加客户端密钥的更多信息，请参考微软的[添加凭证](https://learn.microsoft.com/en-us/graph/auth-register-app-v2#add-credentials)。

### 使用证书进行认证

除了客户端密钥，你也可以用**证书**（一种签名的客户端断言，也叫 `private_key_jwt`）来认证应用。当你的组织安全策略不允许使用明文客户端密钥时，这种方式很有用。OAuth2 流程其他部分不变：登录、同意授权、权限都一样，只是应用在换取/刷新令牌时证明身份的方式从密钥变成了签名断言。

默认认证方式是 **Client Secret（客户端密钥）**，所以已有的凭证不受影响。只有当你想用证书时，才把凭证切换到 **Certificate（证书）**。

#### 生成证书

如果你还没有证书，可以用 [OpenSSL](https://www.openssl.org/) 生成一个自签名证书和私钥：

```shell
openssl req -x509 -newkey rsa:2048 -nodes \
  -keyout private-key.pem \
  -out certificate.pem \
  -days 365 \
  -subj "/CN=n8n-microsoft-cert"
```

这条命令会生成两个文件：

- `private-key.pem`：RSA 私钥。请保密：你把它粘贴进 n8n，n8n 永远不会把它发给微软。
- `certificate.pem`：公共证书。你把它上传到你的 Entra 应用注册里。

私钥必须是 **RSA** 类型的。n8n 用 RS256 算法给客户端断言签名，所以 EC 和 Ed25519 密钥不行。

#### 在应用上注册证书

1. 在你的微软应用页面，点击左侧导航里的 **Certificates & secrets**（证书与密钥）。
2. 选择 **Certificates**（证书）标签页，然后选择 **Upload certificate**（上传证书）。
3. 选择你的 `certificate.pem` 文件（公共证书，不是私钥）。
4. 输入一个可选的 **Description（说明）**，例如 `n8n credential`，然后选择 **Add**（添加）。

关于添加证书的更多信息，请参考微软的[添加凭证](https://learn.microsoft.com/en-us/graph/auth-register-app-v2#add-credentials)。

#### 在 n8n 中完成凭证

1. 把 **Authentication**（认证方式）设为 **Certificate**（证书）。
2. 把 `private-key.pem` 的内容粘贴到 **Private Key**（私钥）字段。
3. 把 `certificate.pem` 的内容粘贴到 **Certificate**（证书）字段。
4. 如果 n8n 凭证里还有其他字段，请参考下方[服务专属设置](#服务专属设置)来填写。
5. 在 n8n 中选择 **Connect my account**（连接我的账号）完成设置。
6. 登录你的微软账号，允许应用访问你的信息。

令牌刷新时也使用证书，所以 n8n 永远不会发送客户端密钥。

### Microsoft Graph API Base URL（基础地址）

这个 Microsoft OAuth2 凭证支持不同的微软云环境。请根据你的租户所在的云环境选择对应的端点：

- **Global（全球版）**：用于标准 Microsoft 365 租户（默认）
- **US Government**：用于 Azure 美国政府云（GCC）租户
- **US Government DOD**：用于 Azure 美国国防部云租户
- **China（中国版）**：用于由世纪互联（21Vianet）运营的 Microsoft 365

这个设置适用于所有使用 Microsoft 凭证的 Microsoft Graph API 节点，包括：

- Microsoft Teams
- Microsoft Outlook
- Microsoft Excel (OneDrive)
- Microsoft Excel (SharePoint)
- Microsoft OneDrive
- Microsoft Graph Security
- Microsoft To Do

{% hint style="warning" %}
**政府云授权地址**

如果你用的是政府云租户，可能还需要更新凭证里的 **Authorization URL**（授权地址）和 **Access Token URL**（访问令牌地址）字段，改用政府云的端点。例如：

- 美国政府云：使用 `https://login.microsoftonline.us/{tenant}/oauth2/v2.0/authorize` 和 `https://login.microsoftonline.us/{tenant}/oauth2/v2.0/token`
- 把 `{tenant}` 换成你的租户 ID；多租户应用也可以用 `common`
{% endhint %}

### 自定义权限范围（Custom Scopes）

可以为以下微软服务定义细粒度的权限：

* Microsoft Teams
* Microsoft Excel (OneDrive)

### 服务专属设置

以下服务在 OAuth2 之外还需要额外信息：

#### Dynamics

Dynamics 的 OAuth2 需要你的 Dynamics 域名和区域信息。请额外完成这些步骤：

1. 输入你的 Dynamics **Domain（域名）**。
2. 选择你所在的 Dynamics 数据中心 **Region（区域）**。

关于区域选项及对应地址的更多信息，请参考 [Microsoft 数据中心区域文档](https://learn.microsoft.com/en-us/power-platform/admin/new-datacenter-regions)。

#### Microsoft（通用）

通用的 Microsoft OAuth2 还需要你提供一个以空格分隔的 **Scope（权限范围）** 列表。

可能的权限范围列表请参考 [Microsoft 标识平台中的范围和权限](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc)。

#### Outlook

Outlook 的 OAuth2 凭证可以访问用户的主邮箱收件箱，也可以访问共享收件箱。默认情况下，凭证访问的是用户的主邮箱收件箱。要改变这个行为：

1. 打开 **Use Shared Inbox**（使用共享收件箱）。
2. 把目标用户的 UPN 或 ID 填入 **User Principal Name**（用户主体名称）。

#### SharePoint

SharePoint 的 OAuth2 需要你的 SharePoint **Subdomain（子域名）** 信息。

要完成凭证配置，请输入你的 SharePoint URL 中 **Subdomain**（子域名）部分。例如，如果你的 SharePoint URL 是 `https://tenant123.sharepoint.com`，那么子域名就是 `tenant123`。

SharePoint 需要以下权限：

应用程序权限（Application permissions）：

* `Sites.Read.All`
* `Sites.ReadWrite.All`

委派权限（Delegated permissions）：

* `SearchConfiguration.Read.All`
* `SearchConfiguration.ReadWrite.All`

## 常见问题

以下是 Microsoft OAuth2 凭证已知的常见报错和问题。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/fXYywkPyzPTxeGOEnYgb/" %}
