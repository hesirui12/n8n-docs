---
title: Microsoft Entra ID 凭证
description: >-
  Microsoft Entra ID 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Microsoft Entra ID 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Microsoft Entra ID credentials
originalFilePath: integrations/builtin/credentials/microsoftentra.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/microsoftentra'
url: 'https://docs.n8n.io/integrations/builtin/credentials/microsoftentra'
layout:
  description:
    visible: false
---

# Microsoft Entra ID 凭证

> **大白话**：Microsoft Entra ID（以前叫 Azure AD）是微软的账号/身份管理系统。在 n8n 里连它，核心还是 OAuth2 老三样：注册应用 → 生成客户端密钥 → 填回 n8n 授权。管理员还可以只注册一次应用、授权一次，让全公司同事都能直接连 Outlook、Teams 等。

你可以使用这些凭证来验证以下节点的身份：

* [Microsoft Entra ID](../app-nodes/n8n-nodes-base.microsoftentra.md)

## 前提条件

- 创建 Microsoft Entra ID 账号或订阅。
- 如果用户账号由企业版 Microsoft Entra 账号管理，则管理员账号必须已经为用户开启了「用户可以代表自己同意应用访问公司数据」的选项（见 [Microsoft Entra 文档](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent)）。

当你创建 [Microsoft Azure](https://azure.microsoft.com/) 账号时，微软会附带一个免费的 Entra ID 套餐。

## 支持的认证方式

- OAuth2（授权码认证）

## 相关资源

关于该服务的更多信息，请参考 [Microsoft Entra ID 的文档](https://www.microsoft.com/en-us/security/business/identity-access/azure-active-directory)。

## 使用 OAuth2

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

对于自托管（self-hosted）用户，从零配置 OAuth2 主要有两大步骤：

1. 在 Microsoft Identity Platform 上[注册一个应用](#注册一个应用)。
2. 为这个应用[生成客户端密钥](#生成客户端密钥)。

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
7. 选择 **Connect my account**（连接我的账号）完成设置。
8. 登录你的微软账号，允许应用访问你的信息。

关于添加客户端密钥的更多信息，请参考微软的[添加凭证](https://learn.microsoft.com/en-us/graph/auth-register-app-v2#add-credentials)。

你也可以用证书（`private_key_jwt`）而不是客户端密钥来认证这个凭证。把 **Authentication**（认证方式）设为 **Certificate**（证书），并提供私钥和证书。完整步骤请参考[使用证书进行认证](microsoft.md#authenticate-with-a-certificate)。

### Microsoft Graph API Base URL（基础地址）

Microsoft Entra ID 凭证扩展了 Microsoft OAuth2 API 凭证，支持不同的微软云环境。请根据你的租户所在的云环境选择对应的端点：

- **Global（全球版）**：用于标准 Microsoft 365 租户（默认）
- **US Government**：用于 Azure 美国政府云（GCC）租户
- **US Government DOD**：用于 Azure 美国国防部云租户
- **China（中国版）**：用于由世纪互联（21Vianet）运营的 Microsoft 365

{% hint style="warning" %}
**政府云授权地址**

如果你用的是政府云租户，可能还需要更新凭证里的 **Authorization URL**（授权地址）和 **Access Token URL**（访问令牌地址）字段，改用政府云的端点。例如：
- 美国政府云：使用 `https://login.microsoftonline.us/{tenant}/oauth2/v2.0/authorize` 和 `https://login.microsoftonline.us/{tenant}/oauth2/v2.0/token`
- 把 `{tenant}` 换成你的租户 ID；多租户应用也可以用 `common`
{% endhint %}

## 设置自定义权限范围

Microsoft Entra ID 凭证默认使用以下权限范围（scopes）：

* [`openid`](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc#the-openid-scope)
* [`offline_access`](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc#the-offline_access-scope)
* [`AccessReview.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#accessreviewreadwriteall)
* [`Directory.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#directoryreadwriteall)
* [`NetworkAccessPolicy.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#networkaccesspolicyreadwriteall)
* [`DelegatedAdminRelationship.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#delegatedadminrelationshipreadwriteall)
* [`EntitlementManagement.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#entitlementmanagementreadwriteall)
* [`User.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#userreadwriteall)
* [`Directory.AccessAsUser.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#directoryaccessasuserall)
* [`Sites.FullControl.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#sitesfullcontrolall)
* [`GroupMember.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#groupmemberreadwriteall)

要为凭证选择不同的权限范围，请打开 **Custom Scopes**（自定义权限范围）开关，然后编辑 **Enabled Scopes**（已启用的权限范围）列表。请注意：权限范围收得越窄，有些功能可能就无法正常使用了。

## 面向全公司微软集成的委派访问

这一节介绍 n8n 管理员如何只注册一个带委派权限的 Entra ID 应用、只授权一次，然后预先配置好 n8n，让公司里的其他用户无需自己做 OAuth 应用注册，就能连接微软服务（Outlook、Teams、OneDrive 等）。

### 注册应用

1. 在 [Microsoft Entra 管理中心](https://entra.microsoft.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade/quickStartType~/null/sourceType/Microsoft_AAD_IAM)中，进入 **App registrations**（应用注册），选择 **+ New registration**（新建注册）。

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p>请在 <strong>App registrations</strong>（应用注册）下注册，不要选 <strong>Enterprise applications</strong>（企业应用）。</p></div>

2. 为应用输入一个有意义的 **Name（名称）**，例如 `n8n Outlook`。
3. 在 **Supported account types**（支持的账号类型）下，选择 **Multiple Entra ID tenants**（多个 Entra ID 租户）。
4. 在 **Allow only certain tenants (Preview)**（仅允许特定租户，预览）下，选择 **Manage allowed tenants**（管理允许的租户）并添加你的租户。添加后红色横幅就会消失。
5. **Redirect URI**（重定向地址）先留空，选择 **Register**（注册）。
6. 在应用概览页面，复制 **Application (client) ID**（应用程序客户端 ID）。稍后会用到。

### 生成客户端密钥

1. 在应用概览页面，在 **Client credentials**（客户端凭证）下选择 **Add a certificate or secret**（添加证书或密钥）。
2. 选择 **+ New client secret**（新建客户端密钥）。
3. 输入一个 **Description（说明）**（例如 `n8n token`），并选择一个符合你组织凭证策略的有效期。
4. 选择 **Add**（添加）。
5. 立即复制 **Value**（值）。

    <div data-gb-custom-block data-tag="hint" data-style="warning" class="hint hint-warning"><p>密钥值只会显示一次。没复制就离开页面的话，之后再也找不回来了。</p></div>

### 配置 API 权限

1. 在左侧导航中，点击 **API permissions**（API 权限）。
2. 点击 **+ Add a permission**（添加权限）> **Microsoft Graph** > **Delegated permissions**（委派权限）。
3. 在 **Select permissions**（选择权限）框中，搜索每个需要的权限范围并勾选。为你想要启用的集成所需的所有权限范围重复此步骤。完整列表请参考下方[各集成所需权限范围](#各集成所需权限范围)。
4. 选择 **Add permissions**（添加权限）。

### 添加重定向地址

1. 在 n8n 中，创建一个包含某个微软集成节点（例如 Microsoft Outlook）的工作流。
2. 打开节点，选择 **Set up credential**（设置凭证）> **Create new credential**（新建凭证）。
3. 给凭证起一个有意义的名称（例如 `admin@yourorg.com`）。
4. 复制 n8n 凭证面板中显示的 **OAuth Redirect URL**（OAuth 重定向地址）。
5. 回到 Entra，进入应用概览页面，在 **Redirect URIs**（重定向地址）下选择 **Add a redirect URI**（添加重定向地址）。
6. 选择 **+ Add redirect URI**（添加重定向地址），选择 **Web**，粘贴从 n8n 复制的地址，然后选择 **Configure**（配置）。

### 在 n8n 中授予管理员同意

1. 在 n8n 中，把之前复制的 **Client ID** 和 **Client Secret** 粘贴到凭证面板。
2. 选择 **Connect to [service]**（连接到[服务]）（例如 **Connect to Microsoft Outlook**）。
3. 在登录弹窗中，勾选 **Consent on behalf of your organization**（代表你的组织同意），然后选择 **Accept**（接受）。

    <div data-gb-custom-block data-tag="hint" data-style="warning" class="hint hint-warning"><p>必须以管理员身份登录才能授予全组织范围的同意。非管理员账号会看到提示，说明需要管理员审批。</p></div>

4. n8n 中出现成功横幅，表示连接正常、同意已正确授予。

### 为用户预先配置凭证

管理员同意授予后，使用[凭证覆盖（credential overwrites）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/credential-overwrites)功能预先配置 Client ID 和 Client Secret，这样你组织里的用户无需自己做应用注册就能连接。Docker 和 Kubernetes 的配置方法请参考 [Microsoft OAuth 凭证覆盖配置指南](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/configuration-examples/pre-configure-microsoft-oauth-credentials)。

### 各集成所需权限范围

下表是截至 2026 年 3 月各微软集成所需的权限范围。在 Entra 里配置 API 权限时，请为你打算启用的每个集成都添加对应的权限范围。

| 集成（Integration） | 所需权限范围（Required scopes） |
|---|---|
| **Microsoft Dynamics** | `openid`, `offline_access` |
| **Microsoft Entra ID** | `openid`, `offline_access`, `AccessReview.ReadWrite.All`, `Directory.ReadWrite.All`, `NetworkAccessPolicy.ReadWrite.All`, `DelegatedAdminRelationship.ReadWrite.All`, `EntitlementManagement.ReadWrite.All`, `User.ReadWrite.All`, `Directory.AccessAsUser.All`, `Sites.FullControl.All`, `GroupMember.ReadWrite.All` |
| **Microsoft Excel** | `openid`, `offline_access`, `Files.ReadWrite` |
| **Microsoft Graph Security** | `SecurityEvents.ReadWrite.All`, `offline_access` |
| **Microsoft OneDrive** | `openid`, `offline_access`, `Files.ReadWrite.All` |
| **Microsoft Outlook** | `openid`, `offline_access`, `Contacts.Read`, `Contacts.ReadWrite`, `Calendars.Read`, `Calendars.Read.Shared`, `Calendars.ReadWrite`, `Mail.ReadWrite`, `Mail.ReadWrite.Shared`, `Mail.Send`, `Mail.Send.Shared`, `MailboxSettings.Read` |
| **Microsoft SharePoint** | `openid`, `offline_access` |
| **Microsoft Teams** | `openid`, `offline_access`, `User.Read.All`, `Group.ReadWrite.All`, `Chat.ReadWrite`, `ChannelMessage.Read.All` |
| **Microsoft To Do** | `openid`, `offline_access`, `Tasks.ReadWrite` |
| **触发器需要的额外权限** | `Chat.Read.All`, `Team.ReadBasic.All`, `Subscription.Read.All` |

## 常见问题

以下是 Microsoft Entra 凭证已知的常见报错和问题。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/fXYywkPyzPTxeGOEnYgb/" %}

### 配置委派访问时提示需要管理员审批

如果用户看到提示需要管理员审批的页面，说明该应用注册还没有获得组织范围的同意。

要解决这个问题，请用 Entra ID 管理员账号完成上面的[在 n8n 中授予管理员同意](#在-n8n-中授予管理员同意)步骤。

或者，管理员也可以不经过 n8n，直接在 Entra 中授权，路径是：

**Enterprise applications**（企业应用）> [你的应用] > **Security**（安全）> **Permissions**（权限）> **Grant admin consent for [your organisation]**（为[你的组织]授予管理员同意）

同意授予后，普通用户就能正常认证，不会再遇到管理员审批提示。
