---
title: Shopify 凭证
description: >-
  Shopify 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来验证
  Shopify。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Shopify 凭证
originalFilePath: integrations/builtin/credentials/shopify.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/shopify'
url: 'https://docs.n8n.io/integrations/builtin/credentials/shopify'
layout:
  description:
    visible: false
---

# Shopify 凭证

> **大白话**：Shopify 是全球流行的电商建站平台。这篇文档教你怎么在 n8n 里配置 Shopify 凭证。**推荐用「Access token（访问令牌）」方式**：自己在店铺后台创建一个「自定义应用」，把生成的令牌填进 n8n 就行。OAuth2 方式需要 Shopify 合作伙伴账号，适合开发公开应用给很多人用。旧版的「API key」方式已经被废弃，别用了。

你可以使用这些凭证来验证以下 Shopify 节点：

- [Shopify](../app-nodes/n8n-nodes-base.shopify.md)
- [Shopify Trigger](../trigger-nodes/n8n-nodes-base.shopifytrigger.md)

## 支持的认证方式

- Access token（访问令牌，推荐）：用于私有应用/单一店铺使用。普通管理员就能创建。
- OAuth2：用于公开应用。必须由合作伙伴（partner）账号创建。
- API key：已废弃（Deprecated）。

## 相关资源

关于该服务的更多信息，请参阅 [Shopify 的认证文档](https://shopify.dev/docs/apps/auth)。

## 使用 access token（访问令牌）

要配置此凭证，你需要一个 [Shopify](https://shopify.com/) 管理员账号，以及：

- 你的 **Shop Subdomain（店铺子域名）**
- **Access Token（访问令牌）**：创建自定义应用时生成。
- **APP Secret Key（应用密钥）**：创建自定义应用时生成。

要设置凭证，你需要创建并安装一个自定义应用：

1. 输入你的 **Shop Subdomain（店铺子域名）**。
    - 你的子域名在网址里：`https://<subdomain>.myshopify.com`。例如，完整网址是 `https://n8n.myshopify.com`，那么 Shop Subdomain 就是 `n8n`。
2. 在 Shopify 中，前往 **Admin（后台）> Settings（设置）>** [**Apps and sales channels（应用和销售渠道）**](https://admin.shopify.com/settings/apps)。
3. 选择 **Develop apps（开发应用）**。
4. 选择 **Create a custom app（创建自定义应用）**。<br>

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>看不到这个选项？</strong></p><p>如果你看不到这个选项，你的店铺可能没有开启自定义应用开发功能。更多信息请参阅 <a href="#enable-custom-app-development">启用自定义应用开发</a>。</p></div>

5. 在弹出的窗口中，输入 **App name（应用名称）**。
6. 选择一个 **App developer（应用开发者）**。开发者可以是店铺所有者，也可以是任何拥有 **Develop apps（开发应用）** 权限的账号。
7. 选择 **Create app（创建应用）**。
8. 选择 **Select scopes（选择权限范围）**。在 **Admin API access scopes（Admin API 访问权限）** 部分，为你的应用选择所需的 API 权限范围。
    - 要使用 [Shopify](../app-nodes/n8n-nodes-base.shopify.md) 节点的全部功能，请添加 `read_orders`、`write_orders`、`read_products` 和 `write_products` 这几个权限范围。
    - 关于可用权限范围的更多信息，请参阅 [Shopify API Access Scopes（Shopify API 访问权限范围）](https://shopify.dev/docs/api/usage/access-scopes)。
9. 选择 **Save（保存）**。
10. 选择 **Install app（安装应用）**。
11. 在弹出的窗口中，选择 **Install app（安装应用）**。
12. 打开应用的 **API Credentials（API 凭证）** 部分。
13. 复制 **Admin API Access Token（Admin API 访问令牌）**。把它填入 n8n 凭证的 **Access Token** 字段。
14. 复制 **API Secret Key（API 密钥）**。把它填入 n8n 凭证的 **APP Secret Key** 字段。

关于这些步骤的更多信息，请参阅 [创建自定义应用](https://help.shopify.com/en/manual/apps/app-types/custom-apps) 和 [在 Shopify 后台为自定义应用生成访问令牌](https://shopify.dev/docs/apps/build/authentication-authorization/access-token-types/generate-app-access-tokens-admin)。

## 使用 OAuth2

要配置此凭证，你需要一个 [Shopify 合作伙伴](https://www.shopify.com/partners) 账号，以及：

- **Client ID**：创建自定义应用时生成。
- **Client Secret**：创建自定义应用时生成。
- 你的 **Shop Subdomain（店铺子域名）**

要设置凭证，你需要创建并安装一个自定义应用：

{% hint style="info" %}
**自定义应用开发**

Shopify 提供了用于创建新应用的模板。下面的说明只覆盖配置 n8n 凭证所必需的要素。关于构建应用和使用应用模板的更多信息，请参阅 Shopify 的 [Build 开发文档](https://shopify.dev/docs/apps/build)。
{% endhint %}

1. 打开你的 [Shopify Partner dashboard（合作伙伴面板）](https://partners.shopify.com/)。
2. 在左侧导航中选择 **Apps（应用）**。
3. 选择 **Create app（创建应用）**。
4. 在 **Use Shopify Partners** 部分，输入 **App name（应用名称）**。
6. 选择 **Create app（创建应用）**。
7. 打开应用详情后，复制 **Client ID**，填入你的 n8n 凭证。
8. 复制 **Client Secret**，填入你的 n8n 凭证。
9. 在左侧菜单中选择 **Configuration（配置）**。
10. 在 n8n 中复制 **OAuth Redirect URL（OAuth 重定向地址）**，粘贴到 **URLs（网址）** 部分的 **Allowed redirection URL(s)（允许的重定向地址）** 中。
10. 在 **URLs（网址）** 部分，为你的应用输入 **App URL（应用网址）**。这里填的主机名需要与 **Allowed redirection URL(s)（允许的重定向地址）** 的主机名一致，比如你 n8n 实例的基础网址。
8. 选择 **Save and release（保存并发布）**。
1. 从左侧菜单中选择 **Overview（概览）**。此时，你可以选择 **Test your app（测试应用）** 把它安装到你自己的某个店铺，或者选择 **Choose distribution（选择分发方式）** 公开发布。
1. 在 n8n 中输入你安装应用的那个店铺的 **Shop Subdomain（店铺子域名）**（无论是测试安装还是公开发布）。
    - 你的子域名在网址里：`https://<subdomain>.myshopify.com`。例如，完整网址是 `https://n8n.myshopify.com`，那么 Shop Subdomain 就是 `n8n`。

## 使用 API key（API 密钥）

{% hint style="warning" %}
**此方式已废弃**

Shopify 不再生成带密码的 API 密钥。请改用 [Access token（访问令牌）](#using-access-token) 方式。
{% endhint %}

要配置此凭证，你需要准备：

- **API Key（API 密钥）**
- **Password（密码）**
- 你的 **Shop Subdomain（店铺子域名）**：你的子域名在网址里：`https://<subdomain>.myshopify.com`。例如，完整网址是 `https://n8n.myshopify.com`，那么 Shop Subdomain 就是 `n8n`。
- _可选：_ **Shared Secret（共享密钥）**

## 常见问题

这里列出了一些配置 Shopify 凭证时的常见问题，以及解决或排查方法。

### 启用自定义应用开发

如果你看不到 **Create a custom app（创建自定义应用）** 选项，说明你的店铺还没有人启用自定义应用开发功能。

要启用自定义应用开发，你必须以店铺所有者身份登录，或者使用拥有 **Enable app development（启用应用开发）** 权限的账号登录：

1. 在 Shopify 中，前往 **Admin（后台）> Settings（设置）>** [**Apps and sales channels（应用和销售渠道）**](https://admin.shopify.com/settings/apps)。
2. 选择 **Develop apps（开发应用）**。
3. 选择 **Allow custom app development（允许自定义应用开发）**。
4. 阅读提供的警告和信息，然后选择 **Allow custom app development（允许自定义应用开发）**。

### 凭证报 Forbidden（禁止访问）错误

如果测试凭证时出现 **Couldn't connect with these settings / Forbidden - perhaps check your credentials（无法用这些设置连接 / 禁止访问 - 请检查你的凭证）** 警告，可能是你的应用的[访问权限范围（access scope）](https://shopify.dev/docs/api/usage/access-scopes)存在依赖关系导致的。例如，`read_orders` 权限范围同时要求 `read_products` 权限范围。请检查你分配了哪些权限范围，以及你想执行的操作。
