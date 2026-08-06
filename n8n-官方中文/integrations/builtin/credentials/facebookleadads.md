---
title: Facebook Lead Ads 凭证（Facebook Lead Ads credentials）
description: >-
  Facebook Lead Ads 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  Facebook Lead Ads。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Facebook Lead Ads 凭证（Facebook Lead Ads credentials）
originalFilePath: integrations/builtin/credentials/facebookleadads.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/facebookleadads'
url: 'https://docs.n8n.io/integrations/builtin/credentials/facebookleadads'
layout:
  description:
    visible: false
---

# Facebook Lead Ads 凭证（Facebook Lead Ads credentials）

> **大白话**：Facebook Lead Ads 是「线索广告」——用户点了广告填个表单，你就能拿到他的联系方式（潜客线索）。n8n 通过这个凭证 + Facebook Lead Ads Trigger 节点，能在有人提交表单时实时收到数据。你需要先在 Meta 开发者后台创建一个应用，拿到 **Client ID** 和 **Client Secret**，再把应用设为 Live（上线）才能真正使用。

你可以使用这些凭证来认证以下节点：

* [Facebook Lead Ads trigger](../trigger-nodes/n8n-nodes-base.facebookleadadstrigger.md)

## 支持的认证方式（Supported authentication methods）

- OAuth2

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [Facebook Lead Ads 的文档](https://developers.facebook.com/docs/marketing-api/guides/lead-ads/)。

你也可以在 n8n 官网上查看 [示例工作流及相关内容](https://n8n.io/integrations/facebook-lead-ads-trigger/)。

## 使用 OAuth2（Using OAuth2）

要配置这个凭证，你需要一个 [Meta for Developers](https://developers.facebook.com/) 账号，以及：

- 一个 **Client ID**（客户端 ID）
- 一个 **Client Secret**（客户端密钥）

要拿到这两项，请[创建一个 Meta 应用](https://developers.facebook.com/docs/development/create-an-app)，并添加 Facebook Login 或 Facebook Login for Business 产品。

使用 **Facebook Login for Business** 创建应用并设置凭证的步骤：

1. 前往 Meta 开发者 [App Dashboard](https://developers.facebook.com/apps)（应用仪表盘），点击 **Create App**（创建应用）。
2. 如果你有商务主页（business portfolio）并准备把应用关联到它，请选择该商务主页。如果没有商务主页，或者还没准备好关联，请选择 **I don't want to connect a business portfolio yet**（我暂时不想关联商务主页），然后点击 **Next**（下一步）。会打开 **Use cases**（使用场景）页面。
3. 选择 **Other**（其他），然后点击 **Next**（下一步）。
4. 选择 **Business**（商务），然后点击 **Next**（下一步）。
5. 填写基本信息：
    * 添加 **App name**（应用名称）。
    * 添加 **App contact email**（应用联系邮箱）。
    * 这里同样可以选择关联商务主页，或者跳过。
6. 点击 **Create app**（创建应用）。打开 **Add products to your app**（为你的应用添加产品）页面。
7. 选择 **Facebook Login for Business**（商务版 Facebook 登录）。会打开该产品的 **Settings**（设置）页面。
8. 从你的 n8n 凭证中复制 **OAuth Redirect URL**（OAuth 回调地址）。
9. 在 Meta 应用的 **Client OAuth settings**（客户端 OAuth 设置）中，把该地址粘贴为 **Valid OAuth Redirect URIs**（有效的 OAuth 回调地址）。
10. 在左侧菜单选择 **App settings > Basic**（应用设置 > 基本信息）。
11. 复制 **App ID**，在 n8n 凭证中作为 **Client ID** 填入。
12. 复制 **App Secret**，在 n8n 凭证中作为 **Client Secret** 填入。

现在你的凭证应该能成功连接了，但在与 [Facebook Lead Ads trigger](../trigger-nodes/n8n-nodes-base.facebookleadadstrigger.md) 一起使用之前，还需要完成把 Meta 应用上线（Live）的步骤。以下是需要做的事情的摘要：

1. 在 Meta 应用中，从左侧菜单选择 **App settings > Basic**（应用设置 > 基本信息）。
2. 输入 **Privacy Policy URL**（隐私政策地址）。（把应用设为「Live（上线）」的必填项。）
3. 点击 **Save changes**（保存更改）。
4. 在页面顶部，把 **App Mode**（应用模式）从 **Development**（开发）切换到 **Live**（上线）。
5. Facebook Login for Business 要求为 `public_profile` 申请高级访问权限（Advanced Access）。要添加它，请前往 **App Review > Permissions and Features**（应用审核 > 权限与功能）。
6. 搜索 `public_profile`，选择 **Request advanced access**（申请高级访问权限）。
7. 完成[商务验证（business verification）](https://www.facebook.com/business/tools/meta-verified-for-business/)的步骤。
8. 使用 [Lead Ads Testing Tool](https://developers.facebook.com/tools/lead-ads-testing)（线索广告测试工具）触发一些演示表单提交，测试你的工作流。

更多关于创建应用、必填字段（如 Privacy Policy URL 隐私政策地址）和添加产品的信息，请参考 Meta 的[创建应用](https://developers.facebook.com/docs/development/create-an-app)文档。

更多关于应用模式及切换到 **Live** 模式的信息，请参考 [App Modes](https://developers.facebook.com/docs/development/build-and-test/app-modes)（应用模式）和 [Publish | App Types](https://developers.facebook.com/docs/development/release#app-types)（发布 | 应用类型）。
