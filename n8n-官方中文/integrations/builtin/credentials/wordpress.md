---
title: WordPress 凭证
description: >-
  WordPress 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 WordPress 进行身份验证。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: WordPress credentials
originalFilePath: integrations/builtin/credentials/wordpress.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/wordpress'
url: 'https://docs.n8n.io/integrations/builtin/credentials/wordpress'
layout:
  description:
    visible: false
---

# WordPress 凭证

> **大白话**：WordPress 是全球最流行的建站程序。连它有两种方式，二选一：**基本认证（Basic auth）**——先用「两步验证」开启、再生成一个「应用密码」，填上用户名、应用密码、站点 URL 就行；**OAuth2**——只支持 WordPress.com 托管站点，需要去开发者门户创建一个开发者应用，拿到 Client ID 和 Client Secret，再在 n8n 里点「Connect to WordPress」授权。自己搭建的 WordPress 只能用基本认证。

你可以使用这些凭证对以下节点进行身份验证：

- [WordPress](../app-nodes/n8n-nodes-base.wordpress.md)

## 前提条件

- **基本认证（Basic auth）**：创建一个 [WordPress](https://wordpress.com/) 账户，或在服务器上部署 WordPress。
- **OAuth2**：创建一个有权访问[开发者门户](https://developer.wordpress.com/apps/)的 [WordPress.com](https://wordpress.com/) 账户。

## 支持的认证方式

- Basic auth（基本认证）
- OAuth2

## 相关资源

关于该服务的更多信息，请参考 [WordPress 的 API 文档](https://developer.wordpress.com/docs/api/)。

## 使用基本认证（basic auth）

要配置此凭证，你需要：

- 你的 WordPress **Username**（用户名）
- 一个 WordPress 应用 **Password**（应用密码）
- 你的 **WordPress URL**（站点地址）
- 决定是否 **Ignore SSL Issues**（忽略 SSL 问题）

使用此凭证分三步：

1. [开启两步验证](#开启两步验证)。
2. [创建应用密码](#创建应用密码)。
3. [配置凭证](#配置凭证)。

每一步的详细说明如下。

### 开启两步验证

要生成应用密码，你必须先在 WordPress 中开启 Two-Step Authentication（两步验证）。如果你已经开启过，[直接跳到下一节](#创建应用密码)。

1. 打开你的 WordPress [个人资料](https://wordpress.com/me)页面。
2. 在左侧菜单中选择 **Security**（安全）。
3. 选择 **Two-Step Authentication**（两步验证），进入两步验证页面。
4. 如果两步验证未开启，你需要先开启它。
5. 选择用身份验证器 App 还是短信验证码来开启，然后按照屏幕提示操作。

详细步骤请参考 WordPress 的 [Enable Two-Step Authentication](https://wordpress.com/support/security/two-step-authentication/) 文档。

### 创建应用密码

开启两步验证后，你现在可以生成应用密码了：

1. 在 WordPress 的 **Security >** [**Two-Step Authentication**](https://wordpress.com/me/security/two-step) 页面，找到 **Application passwords**（应用密码）区域，点击 **+ Add new application password**。
2. 输入一个 **Application name**（应用名称），比如 `n8n integration`。
3. 点击 **Generate Password**（生成密码）。
4. 复制生成的密码，稍后填进 n8n 凭证。

### 配置凭证

1. 在 n8n 凭证中输入你的 WordPress **Username**（用户名）。
2. 把上面复制的应用密码填为 n8n 凭证中的 **Password**（密码）。
3. 把你的 WordPress 站点地址填为 **WordPress URL**。
4. 可选：使用 **Ignore SSL Issues**（忽略 SSL 问题）来决定——打开时即使 SSL 证书验证失败 n8n 也照样连接；关闭时则遵守 SSL 证书验证。

## 使用 OAuth2

{% hint style="info" %}
**仅限 WordPress.com**

OAuth2 认证只适用于 WordPress.com 托管的站点。自托管（自己搭建）的 WordPress 请改用基本认证。
{% endhint %}

要配置此凭证，你需要：

- 一个 **Client ID**（客户端 ID）：创建 WordPress.com 开发者应用时生成。
- 一个 **Client Secret**（客户端秘密）：创建 WordPress.com 开发者应用时生成。
- 你的 **WordPress.com Site**（站点）：你的 `.wordpress.com` 子域名或自定义域名（例如 `myblog.wordpress.com` 或 `myblog.com`）。

创建此凭证分两步：

1. [创建开发者应用](#创建开发者应用)。
2. [配置 OAuth2 凭证](#配置-oauth2-凭证)。

### 创建开发者应用

1. 进入你的 WordPress.com [开发者应用](https://developer.wordpress.com/apps/)页面。
2. 点击 **Create New Application**（创建新应用）。
3. 为你的应用输入一个 **Name**（名称），例如 `n8n integration`。
4. 从 n8n 的 **OAuth2 (WordPress.com)** 凭证界面复制 **OAuth Redirect URL**（OAuth 回调地址），粘贴到 WordPress 的 **Redirect URLs** 字段中。
5. 根据你的应用情况填写 **Description**（描述）、**Website URL**（网站地址）等字段。
6. 点击 **Create**（创建）保存应用。
7. 回到你的 WordPress.com [开发者应用](https://developer.wordpress.com/apps/)页面，点击你刚创建的集成应用。
8. 复制 **Client ID** 和 **Client Secret**。

### 配置 OAuth2 凭证

1. 在 n8n 的 **OAuth2 (WordPress.com)** 凭证界面，粘贴上一步复制的 **Client ID** 和 **Client Secret**。
2. 在 **WordPress.com Site** 字段中输入你的 WordPress.com 站点标识，例如 `myblog.wordpress.com`。
3. 点击 **Connect to WordPress**（连接 WordPress）。

更多信息请参考 WordPress 的 [OAuth2 认证文档](https://developer.wordpress.com/docs/oauth2/)。
