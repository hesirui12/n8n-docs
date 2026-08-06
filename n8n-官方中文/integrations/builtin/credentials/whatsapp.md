---
title: WhatsApp Business Cloud 凭证
contentType:
  - integration
  - reference
priority: high
nodeTitle: WhatsApp Business Cloud credentials
originalFilePath: integrations/builtin/credentials/whatsapp.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/whatsapp
url: https://docs.n8n.io/integrations/builtin/credentials/whatsapp
description: >-
  WhatsApp Business Cloud 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 WhatsApp Business Cloud 进行身份验证。
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

# WhatsApp Business Cloud 凭证

> **大白话**：想让 n8n 收发 WhatsApp 消息，得先准备三样 Meta 的东西：开发者账号、企业资产（Business Portfolio）、配置了 WhatsApp 的企业应用。这是整个配置最麻烦的部分，本页给了每一步的详细展开说明（点开折叠就能看）。之后：发消息节点用 API key（访问令牌 + 企业账户 ID），触发器节点用 OAuth2（App ID + App Secret）。

你可以使用这些凭证对以下节点进行身份验证：

* [WhatsApp Business Cloud](../app-nodes/n8n-nodes-base.whatsapp/README.md)
* [WhatsApp Trigger](../trigger-nodes/n8n-nodes-base.whatsapptrigger.md)

## 要求

要为 WhatsApp 创建凭证，你需要以下 Meta 资产：

* 一个 [Meta 开发者](https://developers.facebook.com/docs/development/register)账户：开发者账户允许你创建和管理 Meta 应用，包括 WhatsApp 集成。

<details>

<summary>设置 Meta 开发者账户</summary>

1. 访问 [Facebook Developers 网站](https://developers.facebook.com)。
2. 点击右上角的 **Getting Started**（开始使用）（如果链接显示的是 **My Apps**，说明你已经设置过开发者账户了）。
3. 同意条款和条件。
4. 提供一个用于验证的手机号码。
5. 选择你的职业或角色。

</details>

\- 一个 Meta [business portfolio](https://www.facebook.com/business/help/1710077379203657?id=180505742745347)（企业资产组合）：WhatsApp 消息服务需要一个 Meta 企业资产组合，以前称为 Business Manager 账户。界面上可能仍显示其中任一个选项。

<details>

<summary>设置 Meta 企业资产组合</summary>

1. 访问 [Facebook Business 网站](https://business.facebook.com)。
2. 选择 **Create an account**（创建账户）。
   * 如果你已经有 Facebook Business 账户和资产组合，但想要一个新的资产组合，请打开左侧菜单中的企业资产组合选择器，选择 **Create a business portfolio**（创建企业资产组合）。
3. 输入 **Business portfolio name**（企业资产组合名称）。
4. 输入你的 **name**（姓名）。
5. 输入一个 **business email**（企业邮箱）。
6. 选择 **Submit**（提交）或 **Create**（创建）。

</details>

\- 一个配置了 WhatsApp 的 Meta [business app](https://developers.facebook.com/docs/development/create-an-app/)（企业应用）：有了开发者账户之后，你将创建一个 Meta 企业应用。

<details>

<summary>设置带 WhatsApp 的 Meta 企业应用</summary>

1. 访问 [Meta for Developers 应用仪表盘](https://developers.facebook.com/apps/)。
2. 选择 **Create app**（创建应用）。
3. 在 **Add products to your app**（向你的应用添加产品）中，点击 WhatsApp 卡片上的 **Set up**（设置）。更多详情请参考 [Add the WhatsApp Product](https://developers.facebook.com/docs/whatsapp/solution-providers/get-started-for-tech-providers#step-3--add-the-whatsapp-product)。
4. 这将打开 WhatsApp **Quickstart**（快速开始）页面。选择你的企业资产组合。
5. 选择 **Continue**（继续）。
6. 在左侧菜单中，前往 **App settings** > **Basic**（应用设置 > 基本）。
7. 为应用设置 **Privacy Policy URL**（隐私政策 URL）和 **Terms of Service URL**（服务条款 URL）。
8. 将 **App Mode**（应用模式）切换为 **Live**（正式运行）。

</details>

## 支持的认证方式

* API key：用于 [WhatsApp Business Cloud](../app-nodes/n8n-nodes-base.whatsapp/README.md) 节点。
* OAuth2：用于 [WhatsApp Trigger](../trigger-nodes/n8n-nodes-base.whatsapptrigger.md) 节点。

## 相关资源

更多关于该服务的信息，请参考 [WhatsApp 的 API 文档](https://developers.facebook.com/docs/whatsapp/#platform-apis)。

Meta 将创建 WhatsApp 企业应用的用户归类为 Tech Providers（技术提供商）；更多信息请参考 Meta 的 [Get Started for Tech Providers](https://developers.facebook.com/docs/whatsapp/solution-providers/get-started-for-tech-providers)。

## 使用 API key

要使用 [WhatsApp Business Cloud](../app-nodes/n8n-nodes-base.whatsapp/README.md) 节点，你需要 WhatsApp API key 凭证。

要配置此凭证，你需要：

* 一个 API **Access Token**（访问令牌）
* 一个 **Business Account ID**（企业账户 ID）

要生成访问令牌，请按照以下步骤操作：

1. 访问 [Meta for Developers 应用仪表盘](https://developers.facebook.com/apps/)。
2. 选择你的 Meta 应用。
3. 在左侧菜单中，选择 **WhatsApp** > **API Setup**。
4. 选择 **Generate access token**（生成访问令牌），并确认你希望授予的访问权限。
5. 复制 **Access token**（访问令牌），在 n8n 中填入 **Access Token** 字段。
6. 复制 **WhatsApp Business Account ID**（WhatsApp 企业账户 ID），在 n8n 中填入 **Business Account ID** 字段。

更多关于上述步骤的信息，请参考 [Test Business Messaging on WhatsApp](https://developers.facebook.com/docs/whatsapp/solution-providers/become-a-tech-provider-legacy-flow#step-4--test-business-messaging-on-whatsapp)。

要完整验证并正式上线你的应用，还需要进一步配置。更多信息请参考 Meta 的 [Get Started for Tech Providers](https://developers.facebook.com/docs/whatsapp/solution-providers/become-a-tech-provider-legacy-flow#step-5--scale-your-solution) 第 5 步及之后的步骤。更多关于 Meta 应用审核流程的信息，请参考 [App Review](https://developers.facebook.com/docs/resp-plat-initiatives/app-review)。

## 使用 OAuth2

要使用 [WhatsApp Trigger](../trigger-nodes/n8n-nodes-base.whatsapptrigger.md) 节点，你需要 WhatsApp OAuth2 凭证。

要配置此凭证，你需要：

* 一个 **Client ID**（客户端 ID）
* 一个 **Client Secret**（客户端密钥）

要获取这些信息，请按照以下步骤操作：

1. 访问 [Meta for Developers 应用仪表盘](https://developers.facebook.com/apps/)。
2. 选择你的 Meta 应用。
3. 在左侧菜单中，选择 **App settings** > **Basic**（应用设置 > 基本）。
4. 复制 **App ID**，在 n8n 凭证中填入 **Client ID** 字段。
5. 复制 **App Secret**，在 n8n 凭证中填入 **Client Secret** 字段。

要完整验证并正式上线你的应用，还需要进一步配置。更多信息请参考 Meta 的 [Get Started for Tech Providers](https://developers.facebook.com/docs/whatsapp/solution-providers/become-a-tech-provider-legacy-flow#step-5--scale-your-solution) 第 5 步及之后的步骤。更多关于 Meta 应用审核流程的信息，请参考 [App Review](https://developers.facebook.com/docs/resp-plat-initiatives/app-review)。
