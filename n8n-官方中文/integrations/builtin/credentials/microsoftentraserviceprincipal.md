---
title: Microsoft Entra Service Principal 凭证
description: >-
  Microsoft Entra Service Principal 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Microsoft 服务的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Microsoft Entra Service Principal credentials
originalFilePath: integrations/builtin/credentials/microsoftentraserviceprincipal.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/microsoftentraserviceprincipal'
url: 'https://docs.n8n.io/integrations/builtin/credentials/microsoftentraserviceprincipal'
layout:
  description:
    visible: false
---

# Microsoft Entra Service Principal 凭证

> **大白话**：一般微软凭证是以「某个人的账号」登录的，而这个凭证是让 n8n 以「应用」的身份直接访问微软 Graph，不依赖任何人的登录状态，适合无人值守、定时跑的工作流。管理员先在 Entra 里注册一个应用并授权一次，再把三个 ID/密钥填进 n8n 就行。

Microsoft Entra Service Principal 凭证让 n8n 获得对 Microsoft Graph 的纯应用（app-only）访问权限。n8n 不是以某个人的身份登录，而是以管理员在 Microsoft Entra 管理中心设置过一次的应用注册（app registration）的身份进行认证。这非常适合无人值守和共享的工作流：没有会过期的用户会话，也不需要管理每个用户的同意。

你可以使用这些凭证来验证以下节点的身份：

* [Microsoft Excel (OneDrive)](../app-nodes/n8n-nodes-base.microsoftexcel.md)
* [Microsoft Excel (SharePoint)](../app-nodes/n8n-nodes-base.microsoftexcelsharepoint.md)
* [Microsoft OneDrive](../app-nodes/n8n-nodes-base.microsoftonedrive.md)
* [Microsoft OneDrive Trigger](../trigger-nodes/n8n-nodes-base.microsoftonedrivetrigger.md)
* [Microsoft Outlook](../app-nodes/n8n-nodes-base.microsoftoutlook.md)
* [Microsoft Outlook Trigger](../trigger-nodes/n8n-nodes-base.microsoftoutlooktrigger.md)
* [Microsoft Teams](../app-nodes/n8n-nodes-base.microsoftteams.md)
* [Microsoft Teams Trigger](../trigger-nodes/n8n-nodes-base.microsoftteamstrigger.md)
* [Microsoft To Do](../app-nodes/n8n-nodes-base.microsofttodo.md)

{% hint style="info" %}
**节点版本要求**

Microsoft Excel (OneDrive)、Microsoft Outlook 和 Microsoft Teams 节点从版本 2 起支持这个凭证。Microsoft Excel (SharePoint) 节点从版本 1 起支持。n8n 计划支持 Microsoft SharePoint 节点。
{% endhint %}

## 前提条件

- 一个 Microsoft 365 组织租户。个人微软账号不支持应用程序权限。
- 能访问 [Microsoft Entra 管理中心](https://entra.microsoft.com/)，且你是可以创建应用注册并授予管理员同意的管理员，或者有人可以为你授权。

## 支持的认证方式

- OAuth2 客户端凭证（client credentials），使用客户端密钥

证书认证将在未来的版本中推出。

## 相关资源

更多信息请参考微软的文档：

- [无需用户即可获取访问权限](https://learn.microsoft.com/en-us/graph/auth-v2-service)：纯应用认证是如何工作的
- [Microsoft Graph 权限参考](https://learn.microsoft.com/en-us/graph/permissions-reference)
- [为应用程序授予租户级管理员同意](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent)

## 纯应用访问与 OAuth2 的区别

使用 OAuth2 的 Microsoft 凭证时，节点以登录用户的身份行事。而使用 Service Principal 凭证时没有登录用户，这会改变你使用节点的方式：

- **由你决定对谁或对什么进行操作。** 选择这个凭证后，每个节点都会多出一个必填参数：Microsoft OneDrive、Microsoft OneDrive Trigger 和 Microsoft Excel (OneDrive) 是 **Access As**（以谁的身份访问，用户或驱动器），Microsoft Outlook 和 Microsoft Outlook Trigger 是 **Mailbox**（邮箱），Microsoft To Do 是 **User**（用户）。输入用户主体名称（UPN），例如 `jane@contoso.com`，或用户对象 ID。在 **Access As** 字段中你也可以选择 **Drive**（驱动器）并输入驱动器 ID。这些字段没有下拉选择器：直接把值粘贴进去。在 Microsoft Teams 节点中，**Authentication**（认证方式）选项标记为 **Service Principal (App-Only)**（服务主体，仅应用），且 **Task**（任务）操作把群组、计划、存储桶和成员的选择器都换成了纯 ID 字段。
- **权限适用于整个租户。** 应用程序权限不局限于某个用户。例如，`Mail.Send` 应用程序权限让应用可以以租户内任意邮箱的身份发信，除非你用 [Exchange Online 应用程序访问策略](https://learn.microsoft.com/en-us/graph/auth-limit-mailbox-access)加以限制。n8n 建议用应用程序访问策略来限定租户级的邮件权限范围。
- **选择器能看到整个租户。** 例如，Microsoft Teams 的 **Team**（团队）选择器会列出组织里的所有团队，而不只是应用加入的团队。
- **有些操作不可用。** 节点会隐藏那些只对登录用户存在的功能（如驱动器搜索、Teams 聊天），或用报错信息拦下。请参考[纯应用访问下不可用的操作](#纯应用访问下不可用的操作)。

## 设置应用注册

在 n8n 里创建凭证之前，请先在 Microsoft Entra 管理中心完成以下步骤。

### 注册应用

1. 打开 [Microsoft Entra 管理中心](https://entra.microsoft.com/)，进入 **Entra ID** > **App registrations**（应用注册）。
2. 选择 **New registration**（新建注册）。
3. 为你的应用输入一个 **Name（名称）**，例如 `n8n service principal`。
4. 在 **Supported account types**（支持的账号类型）中，选择 **Accounts in this organizational directory only**（仅此组织目录中的账号）。你不需要重定向地址。
5. 选择 **Register**（注册）。
6. 在应用的 **Overview**（概览）页面，复制 **Application (client) ID**（应用程序客户端 ID）和 **Directory (tenant) ID**（目录租户 ID）。这两个在 n8n 里都要用。

### 添加应用程序权限

1. 在应用注册中，选择 **API permissions**（API 权限）> **Add a permission**（添加权限）> **Microsoft Graph**。
2. 选择 **Application permissions**（应用程序权限）。不要选 **Delegated permissions**（委派权限）：纯应用访问会忽略委派权限范围，而且两种类型的权限名称也不一样。
3. 添加你打算使用的节点所需的权限。请参考[各节点所需应用程序权限](#各节点所需应用程序权限)。
4. 添加 `Organization.Read.All`（或范围更广的 `Directory.Read.All`）。n8n 的凭证测试会从 Microsoft Graph 读取你的组织信息，没有这两个权限之一测试就会失败。
5. 选择 **Add permissions**（添加权限）。

### 授予管理员同意

1. 在 **API permissions**（API 权限）页面上，选择 **Grant admin consent for \<your tenant\>**（为\<你的租户\>授予管理员同意）并确认。
2. 检查 **Status**（状态）列里每个权限都显示 **Granted**（已授予）。

{% hint style="warning" %}
**缺少管理员同意会报一个笼统的权限错误**

如果没有人授予管理员同意，一开始一切看起来都很正常：凭证能保存，微软也照样发令牌。但这个令牌里没有任何权限，所以每个操作都会报一个笼统的 Microsoft Graph 权限错误，比如 HTTP 403 `Authorization_RequestDenied`（"权限不足，无法完成该操作"）。问题不在凭证的值。

解决办法：打开应用注册的 **API permissions**（API 权限）页面，确认每个权限都显示 **Granted**（已授予），没有的话就授予管理员同意。n8n 会缓存访问令牌，所以授予同意后要重新测试凭证。如果仍然失败，就重新创建凭证以强制获取新令牌。
{% endhint %}

### 创建客户端密钥

1. 在应用注册中，选择 **Certificates & secrets**（证书与密钥）> **Client secrets**（客户端密钥）> **New client secret**（新建客户端密钥）。
2. 输入一个 **Description（说明）**，例如 `n8n credential`，并选择有效期。
3. 选择 **Add**（添加）。
4. 立即复制密钥的 **Value**（值）。微软只会显示一次。

### 在 n8n 中创建凭证

在 n8n 中，新建一个 **Microsoft Entra Service Principal** 凭证，并填写以下字段：

1. **Directory (Tenant) ID（目录租户 ID）**：应用注册 **Overview**（概览）页上的 Directory (tenant) ID。你也可以用已验证的域名，例如 `contoso.onmicrosoft.com`。
2. **Application (Client) ID（应用程序客户端 ID）**：应用注册 **Overview**（概览）页上的 Application (client) ID。
3. **Client Secret（客户端密钥）**：你复制的客户端密钥值。
4. **Microsoft Graph API Base URL（基础地址）**：除非你的租户在主权云（sovereign cloud）里，否则保持 **Global**（全球版）。请参考[主权云环境](#主权云环境)。

保存并测试凭证。连接测试会调用 Microsoft Graph 的 `/v1.0/organization` 端点，所以即使你已经授予了所有节点权限，测试要通过仍然需要已获管理员同意的 `Organization.Read.All`（或 `Directory.Read.All`）应用程序权限。

## 各节点所需应用程序权限

为你打算使用的每个节点都添加应用程序权限，然后授予管理员同意。本表中所有权限都是 Microsoft Graph **Application**（应用程序）权限，不是 Delegated（委派）权限。

| 节点（Node） | 所需应用程序权限（Required application permissions） |
|---|---|
| 所有节点（凭证测试） | `Organization.Read.All` 或 `Directory.Read.All` |
| Microsoft OneDrive 和 Microsoft OneDrive Trigger | `Files.ReadWrite.All`（只读操作和触发器用 `Files.Read.All` 就够） |
| Microsoft Excel (OneDrive) | `Files.ReadWrite.All` |
| Microsoft Outlook | `Mail.ReadWrite`（邮件、草稿、文件夹和附件；Reply 和 Draft: Send 操作也需要，因为它们会在发送前创建或更新草稿）、`Mail.Send`（发送和回复）、`Calendars.ReadWrite`（日历和事件）、`Contacts.ReadWrite`（联系人）、`MailboxSettings.Read`（加载 Categories 下拉框）。只添加你操作中用到的即可。 |
| Microsoft Outlook Trigger | `Mail.Read` |
| Microsoft Teams 和 Microsoft Teams Trigger | `Team.ReadBasic.All`，再加上下表里你所用操作需要的权限 |
| Microsoft To Do | `Tasks.ReadWrite.All` |

Microsoft Teams 节点要列出团队需要 `Team.ReadBasic.All`，另外每个操作还需要一个对应权限：

| Teams 操作（Teams operation） | 应用程序权限（Application permission） |
|---|---|
| Channel: Get, Get Many | `Channel.ReadBasic.All` |
| Channel: Create | `Channel.Create` |
| Channel: Update | `ChannelSettings.ReadWrite.All` |
| Channel: Delete | `Channel.Delete.All` |
| Channel Message: Get Many | `ChannelMessage.Read.All` |
| Task: 所有操作 | `Tasks.ReadWrite.All` |
| Trigger: New Channel | `Channel.ReadBasic.All` |
| Trigger: New Channel Message | `ChannelMessage.Read.All` |
| Trigger: New Team Member | `TeamMember.Read.All` |

{% hint style="info" %}
**读取 Teams 频道消息用的是计量 API**

用这个凭证读取频道消息，使用的是微软的计量（metered）Teams API。你的租户可能需要配置计费或评估模式，否则微软会返回 HTTP 402。详情请参考 [Microsoft Teams API 的付费模式](https://learn.microsoft.com/en-us/graph/teams-licenses)。
{% endhint %}

## 纯应用访问下不可用的操作

有些 Microsoft Graph 操作只对已登录用户存在。选择这个凭证后，节点会隐藏这些操作，或用报错信息拦下。如果你需要这些功能，请改用 OAuth2 凭证：

- **Microsoft OneDrive**：File: Search 和 Folder: Search。Microsoft Graph 只对已登录用户提供驱动器搜索。
- **Microsoft Excel (OneDrive)**：Workbook: Get Many，以及在 **Workbook**（工作簿）字段里按名称搜索工作簿。请把该字段改为 **By ID**（按 ID）。
- **Microsoft Teams**：整个 Chat Message 资源、Channel Message: Create，以及 Group Member 模式下的 Task: Get Many。
- **Microsoft Teams Trigger**：New Chat 和 New Chat Message 事件，以及 watch-all 选项。请改选特定的团队或频道。

Microsoft Outlook、Microsoft Outlook Trigger 和 Microsoft To Do 节点没有受限操作。

Microsoft OneDrive 里的 File: Share 和 Folder: Share 仍然可用，但纯应用方式创建分享链接可能需要额外的租户或管理员配置。节点在这些操作上会显示提示。

## 主权云环境

选择与你租户云环境匹配的 **Microsoft Graph API Base URL**（基础地址）：

- **Global（全球版，https://graph.microsoft.com）**：标准 Microsoft 365 租户（默认）
- **US Government（https://graph.microsoft.us）**：Azure 美国政府云租户，包括 GCC High
- **US Government DOD（https://dod-graph.microsoft.us）**：Azure 美国国防部云租户
- **China（https://microsoftgraph.chinacloudapi.cn）**：由世纪互联（21Vianet）运营的 Microsoft 365

n8n 会自动推导对应的登录端点，例如美国政府云用 `login.microsoftonline.us`，中国版用 `login.partner.microsoftonline.cn`，所以你不需要配置任何令牌或授权地址。请在你所在云的 Entra 管理中心完成应用注册，节点会把所有 Microsoft Graph 调用路由到你选择的端点。

## 常见问题

以下是 Microsoft Entra Service Principal 凭证的常见报错和问题：

- **凭证测试失败，但你明明已经授予了节点权限。** 连接测试调用的是 `GET /v1.0/organization`，需要已获管理员同意的 `Organization.Read.All`（或 `Directory.Read.All`）应用程序权限。请添加该权限并授予管理员同意。
- **每个操作都报一个笼统的权限错误。** 这几乎总是意味着缺少应用程序权限或缺少管理员同意。请参考[授予管理员同意](#授予管理员同意)中的警告。Microsoft Teams 节点会显示更明确的提示："The app registration is missing a consented application permission for this operation."（应用注册缺少已获同意的应用程序权限来完成此操作。）
- **权限或密钥的修改不会立即生效。** n8n 会缓存访问令牌。授予同意或轮换密钥后请重新测试凭证；如果缓存的令牌一直失败，就重新创建凭证。
- **提示 "Microsoft Entra tenant ID is not a valid GUID or domain."（Microsoft Entra 租户 ID 不是有效的 GUID 或域名。）** 请输入应用注册 **Overview**（概览）页上的 Directory (tenant) ID GUID，或像 `contoso.onmicrosoft.com` 这样的已验证域名。不要输入 URL。
