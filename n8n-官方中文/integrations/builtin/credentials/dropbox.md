---
title: Dropbox 凭证（Dropbox credentials）
description: >-
  Dropbox 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  Dropbox。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Dropbox 凭证（Dropbox credentials）
originalFilePath: integrations/builtin/credentials/dropbox.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/dropbox'
url: 'https://docs.n8n.io/integrations/builtin/credentials/dropbox'
layout:
  description:
    visible: false
---

# Dropbox 凭证（Dropbox credentials）

> **大白话**：Dropbox 是网盘。n8n 想读写你的 Dropbox 文件，有两种方式：**Access Token**（访问令牌，简单，适合测试和少量用户）和 **OAuth2**（标准授权，推荐用于正式生产环境或超过 50 个用户）。还有个概念叫 **App Access Type**（应用访问范围）：选 **App Folder** 只能访问一个专属文件夹，选 **Full Dropbox** 能访问整个网盘。

你可以使用这些凭证来认证以下节点：

- [Dropbox](../app-nodes/n8n-nodes-base.dropbox.md)

## 支持的认证方式（Supported authentication methods）

- API access token（API 访问令牌）：Dropbox 建议用这种方式做测试，或者只给少量用户授权。
- OAuth2：Dropbox 建议在正式环境（生产）使用，或者测试时用户超过 50 人时使用。

{% hint style="info" %}
**复用应用（App reuse）**

你可以把同一个应用从「API access token 方式」切换到 OAuth2 方式：在 n8n 中为 OAuth2 新建一个凭证，使用同一个应用即可。
{% endhint %}

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [Dropbox 的开发者文档](https://www.dropbox.com/developers/documentation)。

## 使用 Access Token（Using access token）

要配置这个凭证，你需要一个 [Dropbox](https://www.dropbox.com/developers) 开发者账号，以及：

- 一个 **Access Token**（访问令牌）：创建 Dropbox 应用后生成。
- 一个 **App Access Type**（应用访问范围）

要设置凭证，先创建一个 Dropbox 应用：

1. 打开 Dropbox 开发者门户中的 [App Console](https://www.dropbox.com/developers/apps)（应用控制台）。
2. 点击 **Create app**（创建应用）。
3. 在 **Choose an API**（选择 API）中，选择 **Scoped access**（作用域访问）。
4. 在 **Choose the type of access you need**（选择你需要的访问类型）中，选择最适合你使用 [Dropbox](../app-nodes/n8n-nodes-base.dropbox.md) 节点场景的选项：
    - **App Folder**（应用文件夹）：只允许访问专门为你的应用创建的单个文件夹。
    - **Full Dropbox**（完整 Dropbox）：允许访问用户 Dropbox 中的所有文件和文件夹。
    - 更多信息请参考 [DBX Platform 开发者指南](https://www.dropbox.com/developers/reference/developer-guide)。
5. 在 **Name your app**（为应用命名）中，输入应用的名称，例如 `n8n integration`。
6. 勾选同意 **Dropbox API Terms and Conditions**（Dropbox API 条款与条件）。
7. 点击 **Create app**（创建应用）。应用会打开 **Settings**（设置）页面。
8. 在 **OAuth 2** 区域的 **Generated access token**（生成的访问令牌）中，点击 **Generate**（生成）。
9. 复制这个访问令牌，作为 **Access Token** 填入你的 n8n 凭证。
10. 在 n8n 中，选择与你应用一致的 **App Access Type**（应用访问范围）。

更多信息请参考 [Dropbox App Console 设置文档](https://www.dropbox.com/developers/reference/getting-started)。

{% hint style="warning" %}
**用户数量限制（User limits）**

在 **Settings**（设置）标签页中，即使使用 access token 方式，你也可以把其他用户添加到应用里。一旦你的应用关联了 50 个 Dropbox 用户，你有两周时间去申请并获批生产状态（production status），否则 Dropbox 会冻结你的应用，禁止继续关联更多用户。
{% endhint %}

## 使用 OAuth2（Using OAuth2）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

云版本用户需要选择 **App Access Type**（应用访问范围）：

- **App Folder**（应用文件夹）：只允许访问专门为你的应用创建的单个文件夹。
- **Full Dropbox**（完整 Dropbox）：允许访问用户 Dropbox 中的所有文件和文件夹。
- 更多信息请参考 [DBX Platform 开发者指南](https://www.dropbox.com/developers/reference/developer-guide)。

如果你是[自托管（self-hosting）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n) n8n，需要手动配置 OAuth2：

1. 打开 Dropbox 开发者门户中的 [App Console](https://www.dropbox.com/developers/apps)（应用控制台）。
2. 点击 **Create app**（创建应用）。
3. 在 **Choose an API**（选择 API）中，选择 **Scoped access**（作用域访问）。
4. 在 **Choose the type of access you need**（选择你需要的访问类型）中，选择最适合你使用 [Dropbox](../app-nodes/n8n-nodes-base.dropbox.md) 节点场景的选项：
    - **App Folder**（应用文件夹）：只允许访问专门为你的应用创建的单个文件夹。
    - **Full Dropbox**（完整 Dropbox）：允许访问用户 Dropbox 中的所有文件和文件夹。
    - 更多信息请参考 [DBX Platform 开发者指南](https://www.dropbox.com/developers/reference/developer-guide)。
5. 在 **Name your app**（为应用命名）中，输入应用的名称，例如 `n8n integration`。
6. 勾选同意 **Dropbox API Terms and Conditions**（Dropbox API 条款与条件）。
7. 点击 **Create app**（创建应用）。应用会打开 **Settings**（设置）页面。
8. 复制 **App key**，作为 **Client ID** 填入你的 n8n 凭证。
9. 复制 **Secret**（密钥），作为 **Client Secret** 填入你的 n8n 凭证。
10. 在 n8n 中复制 **OAuth Redirect URL**（OAuth 回调地址），填入 Dropbox 的 **Redirect URIs**（重定向地址）中。
11. 在 n8n 中，选择与你应用一致的 **App Access Type**（应用访问范围）。

更多信息请参考 [Dropbox 实现 OAuth 文档](https://developers.dropbox.com/oauth-guide#implementing-oauth) 中的说明。

如果是内部工具或使用量有限，你可以让应用保持私有。但如果你的应用要被超过 50 个用户使用，或者你想分发它，就需要完成 Dropbox 的生产审批流程。更多信息请参考 [DBX Platform 开发者指南](https://www.dropbox.com/developers/reference/developer-guide) 中的 **Production Approval**（生产审批）部分。

{% hint style="warning" %}
**用户数量限制（User limits）**

在 **Settings**（设置）标签页中，你可以把其他用户添加到应用里。一旦你的应用关联了 50 个 Dropbox 用户，你有两周时间去申请并获批生产状态（production status），否则 Dropbox 会冻结你的应用，禁止继续关联更多用户。
{% endhint %}
