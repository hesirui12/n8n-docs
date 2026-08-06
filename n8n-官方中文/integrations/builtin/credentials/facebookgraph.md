---
title: Facebook Graph API 凭证（Facebook Graph API credentials）
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Facebook Graph API 凭证（Facebook Graph API credentials）
originalFilePath: integrations/builtin/credentials/facebookgraph.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/facebookgraph
url: https://docs.n8n.io/integrations/builtin/credentials/facebookgraph
description: >-
  Facebook Graph API 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  Facebook Graph API。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# Facebook Graph API 凭证（Facebook Graph API credentials）

> **大白话**：Graph API 是 Meta（Facebook）的统一数据接口，n8n 靠它读写主页帖子、消息、广告等数据。这个凭证有两种方式：**OAuth2**（需要 Client ID + Client Secret，更标准）或 **App access token**（应用访问令牌，更简单）。两种方式都要先在 Meta 开发者后台创建一个应用（App）。

你可以使用这些凭证来认证以下节点：

* [Facebook Graph API](../app-nodes/n8n-nodes-base.facebookgraphapi.md)

{% hint style="info" %}
**Facebook Trigger 凭证**

如果你想为 [Facebook Trigger](../trigger-nodes/n8n-nodes-base.facebooktrigger/README.md) 节点创建凭证，请按照 [Facebook App 凭证](facebookapp.md) 文档中的说明操作。
{% endhint %}

## 支持的认证方式（Supported authentication methods）

* OAuth2
* App access token（应用访问令牌）

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [Meta 的 Graph API 文档](https://developers.facebook.com/docs/graph-api/overview)。

## 前置条件（Prerequisites）

无论你选择哪种认证方式，都需要一个 [Meta for Developers](https://developers.facebook.com/) 账号和一个 Meta 应用。

## 创建一个 Meta 应用（Create a Meta app）

要创建 Meta 应用：

1. 前往 Meta 开发者 [App Dashboard](https://developers.facebook.com/apps)（应用仪表盘），点击 **Create App**（创建应用）。
2. 填写应用信息：
   * 添加 **App name**（应用名称）。
   * 添加 **App contact email**（应用联系邮箱）。
3. 选择符合你使用 Facebook Graph API 意图的 **Use case**（使用场景）。对于 Meta **Business**（商务）套件中的产品（如 Messenger、Instagram、WhatsApp、Marketing API、App Events、Audience Network、Commerce API、Fundraisers、Jobs、Threat Exchange 和 Webhooks），选择 **Other**（其他），然后点击 **Next**（下一步）。
4. 在 **App type**（应用类型）中，选择 **Business**（商务），然后点击 **Next**（下一步）。
5. 如果你有商务主页（business portfolio）并准备把应用关联到它，请选择该商务主页。如果没有商务主页，或者还没准备好关联，就保持 **No business portfolio selected**（未选择商务主页）。
6. 点击 **Create app**（创建应用）。
7. 打开 **Add products to your app**（为你的应用添加产品）页面后，选择适合你应用的产品。

   {% hint style="info" %}
   **商务版 Facebook 登录（Facebook Login for Business）**

   如果你打算使用 [OAuth2](#使用-oauth2using-oauth2) 认证方式，必须添加 **Facebook Login for Business**。如果只用应用访问令牌，就不需要这个产品。
   {% endhint %}

更多关于创建应用、必填字段（如 Privacy Policy URL 隐私政策地址）和添加产品的信息，请参考 Meta 的[创建应用](https://developers.facebook.com/docs/development/create-an-app)文档。

### 让 Meta 应用上线（Taking a Meta app live）

{% hint style="info" %}
**什么时候把应用设为 Live（上线）**

在 **Development**（开发）模式下，只有拥有应用角色的人（Administrator 管理员、Developer 开发者或 Tester 测试者）才能认证或生成令牌。如果你只连接自己的账号，可以把应用保持在开发模式。
{% endhint %}

1. 在左侧菜单选择 **App settings > Basic**（应用设置 > 基本信息）。
2. 输入 **Privacy Policy URL**（隐私政策地址）。（这是把应用上线前的必填项。）
3. 点击 **Save changes**（保存更改）。
4. 如果你需要没有应用角色的用户也能认证，把 **App Mode**（应用模式）从 **Development**（开发）切换到 **Live**（上线）。

更多关于应用模式及切换到 **Live** 模式的信息，请参考 [App Modes](https://developers.facebook.com/docs/development/build-and-test/app-modes)（应用模式）和 [Publish | App Types](https://developers.facebook.com/docs/development/release#app-types)（发布 | 应用类型）。

## 使用 OAuth2（Using OAuth2）

要配置这个凭证，你需要一个 [Meta for Developers](https://developers.facebook.com/) 账号，以及：

* 一个 **Client ID**（客户端 ID）
* 一个 **Client Secret**（客户端密钥）

设置凭证分两步：

1. [创建一个 Meta 应用](#创建一个-meta-应用create-a-meta-app)，并添加你需要访问的产品。
2. [为该应用生成 Client ID 和 Client Secret](#生成-client-id-和-client-secretgenerate-a-client-id-and-client-secret)。

### 生成 Client ID 和 Client Secret（Generate a Client ID and Client Secret）

生成 Client ID 和 Client Secret，供你的 n8n 凭证和你选择的产品使用：

1. 前往 Meta 开发者 [App Dashboard](https://developers.facebook.com/apps)（应用仪表盘）。
2. 在左上角的下拉框中，选择你[创建](<#创建一个-meta-应用create-a-meta-app>)的 **Meta App**。
3. 在左侧菜单中，选择 **Products**（产品）> **Facebook Login for Business**（商务版 Facebook 登录）> **Settings**（设置）。
4. 从你的 n8n 凭证中复制 **OAuth Redirect URL**（OAuth 回调地址），粘贴到 **Valid OAuth Redirect URIs**（有效的 OAuth 回调地址）框中，然后点击 **Save changes**（保存更改）。
5. 在左侧菜单中，选择 **App settings**（应用设置）> **Basic**（基本信息）。
6. 复制 **App ID**，在 n8n 凭证中作为 **Client ID** 填入。
7. 复制 **App Secret**，在 n8n 凭证中作为 **Client Secret** 填入。
8. 在 n8n 凭证中，点击 **Connect to Facebook Graph (App)**（连接到 Facebook Graph）。

更多信息请参考 Meta 的 [Facebook Login for Business](https://developers.facebook.com/docs/facebook-login/facebook-login-for-business) 文档。

## 使用 App access token（Using app access token）

要配置这个凭证，你需要一个 [Meta for Developers](https://developers.facebook.com/) 账号，以及：

* 一个应用 **Access Token**（访问令牌）

设置凭证分两步：

1. [创建一个 Meta 应用](#创建一个-meta-应用create-a-meta-app)，并添加你需要访问的产品。
2. [为该应用生成 App Access Token](#生成-app-access-tokengenerate-an-app-access-token)。

### 生成 App Access Token（Generate an App Access Token）

创建一个应用访问令牌，供你的 n8n 凭证和你选择的产品使用：

1. 打开 [Graph API explorer](https://developers.facebook.com/tools/explorer/)（Graph API 浏览器）。
2. 在 **Access Token**（访问令牌）区域，选择你[创建](<#创建一个-meta-应用create-a-meta-app>)的 **Meta App**。
3. 在 **User or Page**（用户或主页）中，选择 **Get App Token**（获取应用令牌）。
4. 点击 **Generate Access Token**（生成访问令牌）。
5. 页面会提示你登录并授权。按照屏幕上的提示操作。

   {% hint style="warning" %}
   **应用不可用（App unavailable）**

   你可能会收到「应用不可用」的警告。应用[上线](<#让-meta-应用上线taking-a-meta-app-live>)后，可能需要等几分钟才能生成访问令牌。
   {% endhint %}
6. 复制令牌，作为 **Access Token** 填入你的 n8n 凭证。

更多关于生成令牌的信息，请参考 Meta 的[第一个请求（Your First Request）](https://developers.facebook.com/docs/graph-api/get-started#get-started)说明。
