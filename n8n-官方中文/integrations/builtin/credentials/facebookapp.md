---
title: Facebook App 凭证（Facebook App credentials）
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Facebook App 凭证（Facebook App credentials）
originalFilePath: integrations/builtin/credentials/facebookapp.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/facebookapp
url: https://docs.n8n.io/integrations/builtin/credentials/facebookapp
description: >-
  Facebook App 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  Facebook App。
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

# Facebook App 凭证（Facebook App credentials）

> **大白话**：这个凭证专门给 **Facebook Trigger**（触发器）节点用——让 n8n 能实时收到 Facebook 事件通知（比如有人在你的主页发消息）。核心流程：先在 Meta 开发者后台创建一个应用（App）→ 生成 **App Access Token**（应用访问令牌）→ 把 n8n 的 Webhook 地址填进应用的 Webhooks 配置里。只连自己的账号的话，应用保持「开发模式」就行，不用走审核。

你可以使用这些凭证来认证以下节点：

* [Facebook Trigger](../trigger-nodes/n8n-nodes-base.facebooktrigger/README.md)

{% hint style="info" %}
**Facebook Graph API 凭证**

如果你想为 [Facebook Graph API](../app-nodes/n8n-nodes-base.facebookgraphapi.md) 节点创建凭证，请按照 [Facebook Graph API 凭证](facebookgraph.md) 文档中的说明操作。
{% endhint %}

## 支持的认证方式（Supported authentication methods）

* App access token（应用访问令牌）

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [Meta 的 Graph API 文档](https://developers.facebook.com/docs/graph-api/overview)。

## 使用 App access token（Using app access token）

要配置这个凭证，你需要一个 [Meta for Developers](https://developers.facebook.com/) 账号，以及：

* 一个应用 **Access Token**（访问令牌）
* 一个可选的 **App Secret**（应用密钥）：用于校验数据内容的完整性和来源。

设置凭证一共有五步：

1. [创建一个带 Webhooks 产品的 Meta 应用](#创建一个-meta-应用create-a-meta-app)。
2. [为该应用生成 App Access Token](#生成-app-access-tokengenerate-an-app-access-token)。
3. [配置 Facebook Trigger 节点](#配置-facebook-triggerconfigure-the-facebook-trigger)。
4. 可选：[添加应用密钥](#可选添加-app-secretoptional-add-an-app-secret)。
5. [应用审核（App Review）](#应用审核app-review)：只有当你的应用用户**没有**该应用角色时才需要。如果你只是为内部用途创建应用，就不需要。

每步的详细说明见下方。

### 创建一个 Meta 应用（Create a Meta app）

要创建 Meta 应用：

1. 前往 Meta 开发者 [App Dashboard](https://developers.facebook.com/apps)（应用仪表盘），点击 **Create App**（创建应用）。
2. 填写应用信息：
   * 添加 **App name**（应用名称）。
   * 添加 **App contact email**（应用联系邮箱）。
3. 选择符合你使用意图的 **Use case**（使用场景）。Webhooks 产品属于 Meta 的 **Business**（商务）套件，所以选择 **Other**（其他），然后点击 **Next**（下一步）。
4. 在 **App type**（应用类型）中，选择 **Business**（商务），然后点击 **Next**（下一步）。
5. 如果你有商务主页（business portfolio）并准备把应用关联到它，请选择该商务主页。如果没有商务主页，或者还没准备好关联，就保持 **No business portfolio selected**（未选择商务主页）。
6. 点击 **Create app**（创建应用）。
7. 打开 **Add products to your app**（为你的应用添加产品）页面后，选择 **Webhooks**。

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

### 生成 App Access Token（Generate an App Access Token）

接下来，创建一个给你的 n8n 凭证和 Webhooks 产品使用的应用访问令牌：

1. 在另一个标签页或窗口中打开 [Graph API explorer](https://developers.facebook.com/tools/explorer/)（Graph API 浏览器）。
2. 在 **Access Token**（访问令牌）区域，选择你刚刚创建的 **Meta App**。
3. 在 **User or Page**（用户或主页）中，选择 **Get App Token**（获取应用令牌）。
4. 点击 **Generate Access Token**（生成访问令牌）。
5. 页面会提示你登录并授权。按照屏幕上的提示操作。

    <div data-gb-custom-block data-tag="hint" data-style="warning" class="hint hint-warning"><p><strong>应用不可用（App unavailable）</strong></p><p>你可能会收到「应用不可用」的警告。应用上线后，可能需要等几分钟才能生成访问令牌。</p></div>
6. 复制令牌，作为 **Access Token** 填入你的 n8n 凭证。也请把这个令牌保存在其他地方，因为配置 Webhooks 时还需要用到。
7. 保存你的 n8n 凭证。

更多关于生成令牌的信息，请参考 Meta 的[第一个请求（Your First Request）](https://developers.facebook.com/docs/graph-api/get-started#get-started)说明。

### 配置 Facebook Trigger（Configure the Facebook Trigger）

现在你已经有了令牌，可以配置 Facebook Trigger 节点了：

1. 在 Meta 应用中，从顶部导航栏复制 **App ID**（应用 ID）。
2. 在 n8n 中打开你的 Facebook Trigger 节点。
3. 把 **App ID** 粘贴到 **APP ID** 字段中。
4. 点击 **Execute step**（执行步骤），让触发器进入监听模式。
5. 回到打开着 Meta 应用 **Webhooks** 产品配置的标签页或窗口。
6. 为你想接收通知的对象 **Subscribe**（订阅）。每个订阅：
   1. 从 n8n 复制 **Webhook URL**，在 Meta 应用中把它作为 **Callback URL**（回调地址）填入。
   2. 输入你上面复制的 **Access Token** 作为 **Verify token**（验证令牌）。
   3. 点击 **Verify and save**（验证并保存）。（如果你的 n8n 触发器没有在监听，这一步会失败。）
   4. 有些 webhook 订阅（如 **User** 用户）会提示你订阅具体的事件。订阅你感兴趣的事件即可。
   5. 你可以从 Meta 发送一些 **Test**（测试）事件来确认一切正常。如果发送了测试事件，请在 n8n 中确认是否收到。

更多信息请参考 [Facebook Trigger 节点](../trigger-nodes/n8n-nodes-base.facebooktrigger/README.md) 文档。

### 可选：添加 App Secret（Optional: Add an App Secret）

为了增强安全性，Meta 建议添加 **App Secret**（应用密钥）。它会给所有 API 调用加上 `appsecret_proof` 参数签名。app secret proof 是用你的应用密钥作为密钥，对你的访问令牌做 sha256 哈希得到的。

要生成 App Secret：

1. 在 Meta 中查看你的应用时，从左侧菜单选择 **App settings > Basic**（应用设置 > 基本信息）。
2. 在 **App secret**（应用密钥）字段旁边点击 **Show**（显示）。
3. 页面会提示你重新输入 Facebook 账号凭证。输入后，Meta 会显示 App Secret。
4. 选中并复制它，粘贴到你的 n8n 凭证中作为 **App Secret**。
5. **保存（Save）** 你的 n8n 凭证。

更多信息请参考 [App Secret 文档](https://developers.facebook.com/docs/facebook-login/security#appsecret)。

### 应用审核（App review）

应用审核（App Review）要求完成商务验证（Business Verification）。

在以下情况下，你的应用必须经过应用审核：

* 使用者对应用本身没有角色。
* 使用者对认领了该应用的商务（Business）没有角色。

如果你的应用用户都拥有应用本身的角色，就不需要应用审核。

在应用审核过程中，你可能需要为你的 webhook 订阅申请高级访问权限（advanced access）。

更多信息请参考 Meta 的 [App Review](https://developers.facebook.com/docs/resp-plat-initiatives/app-review)（应用审核）和 [Advanced Access](https://developers.facebook.com/docs/graph-api/overview/access-levels#advanced-access)（高级访问权限）文档。

## 常见问题（Common issues）

### 未验证应用的数量限制（Unverified apps limit）

Facebook 只允许你在**未关联 Meta 已验证商务账号（Meta Verified Business Account）**的应用中，最多拥有 15 个应用的开发者或管理员角色。

如果你超过了这个限制，请参考 [Limitations | Create an app](https://developers.facebook.com/docs/development/create-an-app#limitations)（限制 | 创建应用）。
