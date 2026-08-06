---
title: Pipedrive 凭证
description: >-
  Pipedrive 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Pipedrive 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Pipedrive credentials
originalFilePath: integrations/builtin/credentials/pipedrive.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/pipedrive'
url: 'https://docs.n8n.io/integrations/builtin/credentials/pipedrive'
layout:
  description:
    visible: false
---

# Pipedrive 凭证

{% hint style="info" %}
**大白话**：Pipedrive 是销售团队用的「客户关系管理（CRM）」工具，管销售线索、商机、客户跟进。n8n 连它有两种方式：**简单版**是填一把 **API Token（API 密钥）**（在个人设置的 API 页复制）；**进阶版**是 **OAuth2**（去 Pipedrive 开发者后台注册一个公开应用，把 Client ID 和 Client Secret 填进 n8n）。注意 OAuth2 还要勾选对应的权限范围（Scopes），下面有详细对照表。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Pipedrive](../app-nodes/n8n-nodes-base.pipedrive.md)
- [Pipedrive Trigger（触发器）](../trigger-nodes/n8n-nodes-base.pipedrivetrigger.md)

## 支持的验证方式

- API token（API 密钥）
- OAuth2（网页授权登录）

## 相关资源

关于该服务的更多信息，请参考 [Pipedrive 开发者文档](https://pipedrive.readme.io/docs/getting-started)。

## 使用 API token（API 密钥）

要配置这个凭证，你需要一个 [Pipedrive](https://pipedrive.com/) 账号，还需要：

- 一个 **API Token（API 密钥）**

获取 API token 的步骤：

1. 打开你的 [**API Personal Preferences（API 个人偏好设置）**](https://app.pipedrive.com/settings/api)。
2. 复制 **Your personal API token（你的个人 API 令牌）**，填进你的 n8n 凭证里。

如果你有多个公司，需要先选对公司：

1. 点击你的账号名，确认你正在查看的是正确的公司。
2. 然后选择 **Company Settings（公司设置）**。
2. 选择 **Personal Preferences（个人偏好设置）**。
3. 选择 **API** 选项卡。
4. 复制 **Your personal API token（你的个人 API 令牌）**，填进你的 n8n 凭证里。

更多说明请参考[如何找到 API token](https://pipedrive.readme.io/docs/how-to-find-the-api-token)。

## 使用 OAuth2（网页授权登录）

要配置这个凭证，你需要一个 [Pipedrive 开发者沙盒账号](https://developers.pipedrive.com/)，还需要：

- 一个 **Client ID（客户端 ID）**
- 一个 **Client Secret（客户端密钥）**

要拿到这两个值，你需要注册一个新的应用：

1. 点击右上角你的个人资料名。
2. 找到你沙盒账号的公司名，选择 **Developer Hub（开发者中心）**。<br>

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>没有 Developer Hub？</strong></p><p>如果账号下拉菜单里看不到 <strong>Developer Hub</strong>，请先注册一个<a href="https://developers.pipedrive.com/">开发者沙盒账号</a>。</p></div>

3. 选择 **Create an app（创建一个应用）**。
4. 选择 **Create public app（创建公开应用）**。应用的基本信息（**Basic info**）选项卡会打开。
5. 给你的应用输入一个 **App name（应用名称）**，比如 `n8n integration`。
6. 把 n8n 里的 **OAuth Redirect URL（OAuth 重定向地址）** 复制到应用的 **Callback URL（回调地址）** 字段。
7. 点击 **Save（保存）**。应用的 **OAuth & access scopes（OAuth 与访问范围）** 选项卡会打开。
8. 给应用开启合适的 **Scopes（权限范围）**。更多指导见下面的 [Pipedrive 节点权限范围](#pipedrive-node-scopes) 和 [Pipedrive Trigger 节点权限范围](#pipedrive-trigger-node-scopes)。
8. 复制 **Client ID**，填进你的 n8n 凭证里。
9. 复制 **Client Secret**，填进你的 n8n 凭证里。

更多说明请参考[注册公开应用](https://pipedrive.readme.io/docs/marketplace-registering-the-app)。

### Pipedrive 节点权限范围

给你的应用添加哪些权限范围，取决于你想在 n8n 里用哪个（些）节点、以及想用它们完成什么操作。

[Pipedrive](../app-nodes/n8n-nodes-base.pipedrive.md) 节点可能需要用到的权限范围：

| **对象（Object）** | **节点操作（Node action）** | **界面上的范围（UI scope）** | **实际范围（Actual scope）** |
| --- | --- | --- | --- |
| 活动（Activity） | 获取某个活动的数据 <br> 获取所有活动的数据 | **Activities: Read only（只读）** 或 <br> **Activities: Full Access（完全访问）** | `activities:read` 或 <br> `activities:full` |
| 活动（Activity） | 创建 <br> 删除 <br> 更新 | **Activities: Full Access（完全访问）** | `activities:full` |
| 商机（Deal） | 获取某个商机的数据 <br> 获取所有商机的数据 <br> 搜索商机 | **Deals: Read only（只读）** 或 <br> **Deals: Full Access（完全访问）** | `deals:read` 或 <br> `deals:full` |
| 商机（Deal） | 创建 <br> 删除 <br> 复制 <br> 更新 | **Deals: Full Access（完全访问）** | `deals:full` |
| 商机活动（Deal Activity） | 获取某个商机的所有活动 | **Activities: Read only（只读）** 或 <br> **Activities: Full Access（完全访问）** | `activities:read` 或 <br> `activities:full` |
| 商机产品（Deal Product） | 获取某个商机里的所有产品 | **Products: Read Only（只读）** 或 <br> **Products: Full Access（完全访问）** | `products:read` 或 <br> `products:full` |
| 文件（File） | 下载 <br> 获取某个文件的数据 | 见下方说明 | 见下方说明 |
| 文件（File） | 创建 <br> 删除 | 见下方说明 | 见下方说明 |
| 线索（Lead） | 获取某个线索的数据 <br> 获取所有线索的数据 | **Leads: Read only（只读）** 或 <br> **Leads: Full access（完全访问）** | `leads:read` 或 <br> `leads:full` |
| 线索（Lead） | 创建 <br> 删除 <br> 更新 | **Leads: Full access（完全访问）** | `leads:full` |
| 备注（Note） | 获取某个备注的数据 <br> 获取所有备注的数据 | 见下方说明 | 见下方说明 |
| 备注（Note） | 创建 <br> 删除 <br> 更新 | 见下方说明 | 见下方说明 |
| 组织（Organization） | 获取某个组织的数据 <br> 获取所有组织的数据 <br> 搜索 | **Contacts: Read Only（只读）** 或 <br> **Contacts: Full Access（完全访问）** | `contacts:read` 或 <br> `contacts:full` |
| 组织（Organization） | 创建 <br> 删除 <br> 更新 | **Contacts: Full Access（完全访问）** | `contacts:full` |
| 联系人（Person） | 获取某个联系人的数据 <br> 获取所有联系人的数据 <br> 搜索 | **Contacts: Read Only（只读）** 或 <br> **Contacts: Full Access（完全访问）** | `contacts:read` 或 <br> `contacts:full` |
| 联系人（Person） | 创建 <br> 删除 <br> 更新 | **Contacts: Full Access（完全访问）** | `contacts:full` |
| 产品（Product） | 获取所有产品的数据 | **Products: Read Only（只读）** | `products:read` |

{% hint style="info" %}
**文件和备注**

文件和备注的权限范围取决于它们关联的是哪个对象：

- 文件关联的是商机（Deals）、活动（Activities）或联系人（Contacts）。
- 备注关联的是商机（Deals）或联系人（Contacts）。

请参考这些对象各自的权限范围。
{% endhint %}

Pipedrive 节点还支持自定义 API 调用（Custom API calls）。如果你想做哪些自定义调用，就添加对应的权限范围。

更多说明请参考[权限范围与权限说明](https://pipedrive.readme.io/docs/marketplace-scopes-and-permissions-explanations)。

### Pipedrive Trigger 节点权限范围

[Pipedrive Trigger（触发器）](../trigger-nodes/n8n-nodes-base.pipedrivetrigger.md) 节点要求 **Webhooks: Full access（完全访问）** 权限范围（`webhooks:full`）。
