---
title: HubSpot 凭证
description: >-
  HubSpot 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  HubSpot 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: HubSpot credentials
originalFilePath: integrations/builtin/credentials/hubspot.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/hubspot'
url: 'https://docs.n8n.io/integrations/builtin/credentials/hubspot'
layout:
  description:
    visible: false
---

# HubSpot 凭证

{% hint style="info" %}
**大白话**：HubSpot 是一套很流行的 CRM + 营销自动化平台。n8n 连它有三种方式：**Service Key（服务密钥，推荐）**、**Developer API Key（开发者 API 密钥）**（给触发器节点用）和 **OAuth2（网页授权登录）**。注意：老式的普通 **API Key 已经被 HubSpot 弃用了**，别再用。本文按节点类型把「该申请哪些权限范围（scopes）」也列清楚了，照着填就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [HubSpot](../app-nodes/n8n-nodes-base.hubspot.md)
- [HubSpot Trigger（HubSpot 触发器）](../trigger-nodes/n8n-nodes-base.hubspottrigger.md)

## 支持的验证方式

- Service key（服务密钥，推荐）：配合 [HubSpot](../app-nodes/n8n-nodes-base.hubspot.md) 节点使用。
- Developer API key（开发者 API 密钥）：配合 [HubSpot Trigger](../trigger-nodes/n8n-nodes-base.hubspottrigger.md) 触发器节点使用。
- OAuth2（网页授权登录）：配合 [HubSpot](../app-nodes/n8n-nodes-base.hubspot.md) 节点使用。

{% hint style="warning" %}
**API key 已弃用**

HubSpot 已弃用普通的 **API Key（API 密钥）** 验证方式。这个选项在 n8n 里仍然显示，但你应该改用上面列出的验证方式。如果你有正在用这种 API key 方法的现有集成，请参考 HubSpot 的[把 API key 集成迁移到私有应用](https://web.archive.org/web/20240106022147/https://developers.hubspot.com/docs/api/migrate-an-api-key-integration-to-a-private-app)指南，改用 service key（服务密钥）。
{% endhint %}

{% hint style="warning" %}
**UI 创建的私有应用已过时**

HubSpot 把在界面上创建的私有应用（private apps）标记为过时（legacy）状态。如果你正在使用这类应用的私有应用访问令牌，HubSpot 建议改用 service key（服务密钥）。更多信息请参考 [HubSpot 的私有应用文档](https://developers.hubspot.com/docs/apps/legacy-apps/private-apps/overview)。
{% endhint %}

## 相关资源

关于该服务的更多信息，请参考 [HubSpot 的 API 文档](https://developers.hubspot.com/docs/api/overview)。[HubSpot Trigger](../trigger-nodes/n8n-nodes-base.hubspottrigger.md) 触发器节点使用的是 Webhooks API；关于该服务的更多信息，请参考 [HubSpot 的 Webhooks API 文档](https://developers.hubspot.com/docs/api-reference/webhooks-webhooks-v3/guide)。

## 使用 Service Key（服务密钥）

要配置这个凭证，你需要一个 [HubSpot](https://www.hubspot.com/) 账号（要有超级管理员权限，或有开发者工具访问权限），并且：

- 一个 **Service Key（服务密钥）**

生成服务密钥的步骤：

1. 在 HubSpot 账号里，进入 **Development（开发）> Keys（密钥）> Service Keys（服务密钥）**。（也可以在 **Settings（设置）> Account Management（账号管理）> Integrations（集成）> Service Keys（服务密钥）** 下找到。）

	![The Service Keys page in HubSpot's Development menu](../../.gitbook/assets/service_keys_main.png)

2. 点击 **Create service key（创建服务密钥）**。

	![The Create Service Key form with name and scopes fields](../../.gitbook/assets/service_keys_create.png)

3. 给密钥填一个描述性的 **Name（名称）**。
4. 点击 **Add new scope（添加新权限范围）**，勾选你的集成需要的权限。推荐的权限范围列表见 [HubSpot 节点所需的权限范围](#required-scopes-for-hubspot-node)。
5. 点击 **Update（更新）** 确认权限范围。
6. 点击 **Create（创建）**，然后在弹窗里确认。
7. 点击新服务密钥的名称进入详情页，选择 **Show（显示）** 来查看你的密钥。
8. 用复制按钮复制密钥值，粘贴到 n8n 凭证的 **App Token（应用令牌）** 里。

{% hint style="info" %}
**服务密钥处于公开测试阶段**

服务密钥目前处于公开测试（public beta）阶段，可能会有变动。最新信息请参考 [HubSpot 的服务密钥文档](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/authentication/account-service-keys)。
{% endhint %}

## 使用 Developer API key（开发者 API 密钥）

要配置这个凭证，你需要一个 [HubSpot 开发者](https://developers.hubspot.com/) 账号，并且：

- 一个 **Client ID（客户端 ID）**：创建公开应用（public app）后生成。
- 一个 **Client Secret（客户端密钥）**：创建公开应用后生成。
- 一个 **Developer API Key（开发者 API 密钥）**：从你的 Developer Apps（开发者应用）面板生成。
- 一个 **App ID（应用 ID）**：创建公开应用后生成。

创建公开应用并配置凭证的步骤：

1. 登录你的 [HubSpot 应用开发者账号](https://developers.hubspot.com/)。
2. 在主导航栏选择 **Apps（应用）**。
3. 选择 **Get HubSpot API key（获取 HubSpot API 密钥）**。可能需要选择 **Show key（显示密钥）** 选项。
4. 复制密钥，在 n8n 里填为 **Developer API Key（开发者 API 密钥）**。
3. 仍在 HubSpot **Apps（应用）** 页面，选择 **Create app（创建应用）**。
4. 在 **App Info（应用信息）** 选项卡上，填写 **App name（应用名称）**、**Description（描述）**、**Logo（图标）**，以及你想提供的任何支持联系方式。遇到这个应用的人都会看到这些信息。
5. 打开 **Auth（授权）** 选项卡。
6. 复制 **App ID（应用 ID）** 并填进 n8n。
6. 复制 **Client ID（客户端 ID）** 并填进 n8n。
7. 复制 **Client Secret（客户端密钥）** 并填进 n8n。
8. 在 **Scopes（权限范围）** 区域，选择 **Add new scope（添加新权限范围）**。
9. 把 [HubSpot Trigger 节点所需的权限范围](#required-scopes-for-hubspot-trigger-node) 里列出的所有 scope 都添加到你的应用。
10. 选择 **Update（更新）**。
11. 复制 n8n 里的 **OAuth Redirect URL（OAuth 回调地址）**，在 HubSpot 应用里填为 **Redirect URL（回调地址）**。
12. 选择 **Create app（创建应用）** 完成 HubSpot 应用的创建。

更详细的说明请参考 [HubSpot 公开应用文档](https://developers.hubspot.com/docs/apps/legacy-apps/public-apps/overview)。

### HubSpot Trigger 节点所需的权限范围

如果你创建应用是为了配合 [HubSpot Trigger](../trigger-nodes/n8n-nodes-base.hubspottrigger.md) 触发器节点使用，n8n 建议从这些 scope 开始：

| **元素（Element）** | **对象（Object）** | **权限（Permission）** | **Scope 名称（Scope name）** |
| --- | --- | --- | --- |
| 不适用（n/a） | 不适用（n/a） | 不适用（n/a） | `oauth` |
| CRM | 公司（Companies） | 读（Read） | `crm.objects.companies.read` |
| CRM | 公司结构（Companies schemas） | 读（Read） | `crm.schemas.companies.read` |
| CRM | 联系人（Contacts） | 读（Read） | `crm.objects.contacts.read` |
| CRM | 联系人结构（Contacts schemas） | 读（Read） | `crm.schemas.contacts.read` |
| CRM | 交易（Deals） | 读（Read） | `crm.objects.deals.read` |
| CRM | 交易结构（Deals schemas） | 读（Read） | `crm.schemas.deals.read` |

## 使用 OAuth2（网页授权登录）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你是[自托管](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n) n8n，需要从零开始配置 OAuth2，也就是创建一个新的公开应用：

1. 登录你的 [HubSpot 应用开发者账号](https://developers.hubspot.com/)。
2. 在主导航栏选择 **Apps（应用）**。
3. 选择 **Create app（创建应用）**。
4. 在 **App Info（应用信息）** 选项卡上，填写 **App name（应用名称）**、**Description（描述）**、**Logo（图标）**，以及你想提供的任何支持联系方式。遇到这个应用的人都会看到这些信息。
5. 打开 **Auth（授权）** 选项卡。
6. 复制 **App ID（应用 ID）** 并填进 n8n。
6. 复制 **Client ID（客户端 ID）** 并填进 n8n。
7. 复制 **Client Secret（客户端密钥）** 并填进 n8n。
8. 在 **Scopes（权限范围）** 区域，选择 **Add new scope（添加新权限范围）**。
9. 把 [HubSpot 节点所需的权限范围](#required-scopes-for-hubspot-node) 里列出的所有 scope 都添加到你的应用。
10. 选择 **Update（更新）**。
11. 复制 n8n 里的 **OAuth Redirect URL（OAuth 回调地址）**，在 HubSpot 应用里填为 **Redirect URL（回调地址）**。
12. 选择 **Create app（创建应用）** 完成 HubSpot 应用的创建。

更详细的说明请参考 [HubSpot 公开应用文档](https://developers.hubspot.com/docs/apps/legacy-apps/public-apps/overview)。如果你需要了解 OAuth 网页授权流程的更多细节，请参考 [HubSpot 的 OAuth 使用文档](https://developers.hubspot.com/docs/apps/legacy-apps/authentication/working-with-oauth)。

## HubSpot 节点所需的权限范围

如果你创建应用是为了配合 [HubSpot](../app-nodes/n8n-nodes-base.hubspot.md) 节点使用，n8n 建议从这些 scope 开始：

| **元素（Element）** | **对象（Object）** | **权限（Permission）** | **Scope 名称（Scope name(s)）** |
| --- | --- | --- | --- |
| 不适用（n/a） | 不适用（n/a） | 不适用（n/a） | `oauth` |
| 不适用（n/a） | 不适用（n/a） | 不适用（n/a） | `forms` |
| 不适用（n/a） | 不适用（n/a） | 不适用（n/a） | `tickets` |
| CRM | 公司（Companies） | 读（Read） <br> 写（Write） | `crm.objects.companies.read` <br> `crm.objects.companies.write`|
| CRM | 公司结构（Companies schemas） | 读（Read） | `crm.schemas.companies.read` |
| CRM | 联系人结构（Contacts schemas） | 读（Read） | `crm.schemas.contacts.read` |
| CRM | 联系人（Contacts） | 读（Read） <br> 写（Write） | `crm.objects.contacts.read` <br> `crm.objects.contacts.write`|
| CRM | 交易（Deals） | 读（Read） <br> 写（Write） | `crm.objects.deals.read` <br> `crm.objects.deals.write`|
| CRM | 交易结构（Deals schemas） | 读（Read） | `crm.schemas.deals.read` |
| CRM | 所有者（Owners） | 读（Read） | `crm.objects.owners.read` |
| CRM | 列表（Lists） | 写（Write） | `crm.lists.write` |
