---
title: Google OAuth2 single service（单服务版）
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Google OAuth2 single service
originalFilePath: integrations/builtin/credentials/google/oauth-single-service.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service
url: >-
  https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service
description: >-
  单服务版 Google OAuth2 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Google 的身份。
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

# Google OAuth2 single service（单服务版）

{% hint style="info" %}
**大白话**：这个凭证是「给某一个具体的 Google 服务用的」，比如你只想让 n8n 操作你的 Gmail 或日历。如果你用的是 **n8n Cloud**，大部分 Google 节点直接点 **Sign in with Google** 就能完成授权，什么都不用配（这叫 Managed OAuth2）。如果你是自己部署的 n8n，就得走 **Custom OAuth2**：去 Google Cloud Console 建项目、开 API、配同意屏幕、建 OAuth 客户端，把生成的 Client ID / Client Secret 填回 n8n，再点一次登录。下面五步照着做就行。文档末尾还有常见报错的解决方法。
{% endhint %}

本文档包含为单个服务创建 Google 凭证的说明。这些步骤也有对应的 [视频](oauth-single-service.md#video)。

## 准备工作

- 创建一个 [Google Cloud](https://cloud.google.com/) 账号。

## Managed OAuth2（托管授权）

n8n Cloud 用户可以对以下节点使用 **Managed OAuth2**：

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/OI5s27oyRBdDvpwcuMQF/" %}

使用 **Managed OAuth2** 时，只需要在凭证界面点击 **Sign in with Google（使用 Google 登录）** 即可。不需要再去 Google Cloud Console 或其他地方做任何配置。

![Managed OAuth2 凭证界面](../../../.gitbook/assets/managed-oauth.png)

如果你更想用 Custom OAuth2，用下拉框把验证类型切换过去即可。

## Custom OAuth2（自定义授权）

Managed OAuth2 不适用于自己部署（self-hosted）的 n8n 用户，也不适用于上面 [没列出来](oauth-single-service.md#managed-oauth2) 的 Google 节点。你必须创建一个自定义的单服务 OAuth2 凭证。这需要在 Google Cloud Console 里创建一个应用，然后用 Client ID 和 Client Secret 把它连到 n8n。

本文档的其余部分介绍的就是完整流程。

## 设置 Custom OAuth2

把 n8n 凭证连接到 Google 服务，一共五步：

1. [创建 Google Cloud Console 项目](#创建-google-cloud-console-项目)。
2. [启用 API](#启用-api)。
3. [配置 OAuth 同意屏幕](#配置-oauth-同意屏幕)。
4. [创建 Google OAuth 客户端凭证](#创建-google-oauth-客户端凭证)。
5. [完成 n8n 凭证](#完成-n8n-凭证)。

### 创建 Google Cloud Console 项目

首先，创建一个 Google Cloud Console 项目。如果你已经有项目了，直接跳到 [下一节](#启用-api)：

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/n3k6ZZ7BRnKZ6enSxeVQ/" %}

### 启用 API

项目创建好之后，启用你需要的 API：

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Xs1r022aU39nYSgCg3At/" %}

### 配置 OAuth 同意屏幕

如果你以前没在 Google Cloud 项目里用过 OAuth，需要先 [配置 OAuth 同意屏幕](https://developers.google.com/workspace/guides/configure-oauth-consent)：

1. 打开 [Google Cloud Console - Library](https://console.cloud.google.com/apis/library)。确保你当前在正确的项目里。

    <figure><img src="../../../.gitbook/assets/google-cloud-project-dropdown (1).png" alt=""><figcaption><p>检查 Google Cloud 顶部导航栏里的项目下拉框</p></figcaption></figure>
2. 打开左侧导航菜单，进入 **APIs & Services > OAuth consent screen**。Google 会把你重定向到 Google Auth Platform 的概览页。
3. 在 **Overview（概览）** 标签页上选择 **Get started（开始）**，开始配置 OAuth 同意。
4. 填写 **App name（应用名称）** 和 **User support email（用户支持邮箱）**，它们会显示在 OAuth 同意屏幕上。选择 **Next（下一步）** 继续。
5. 对于 **Audience（受众）**：选择 **Internal（内部）** 表示只允许你组织内 Google Workspace 的用户访问；选择 **External（外部）** 表示任何有 Google 账号的用户都能访问。关于用户类型的更多信息，请参考 Google 的 [用户类型文档](https://support.google.com/cloud/answer/15549945?sjid=17061891731152303663-EU#user-type)。选择 **Next（下一步）** 继续。<br>

    {% hint style="info" %}
    **测试模式和测试用户**

    如果你选择 **External（外部）**，你的应用默认会处于 Testing（测试）模式。在这个模式下，只有你手动添加为测试用户的 Google 账号才能完成 OAuth 流程——其他所有人都会看到一个 "access denied（访问被拒绝）" 的界面。怎么添加测试用户，请看 [Google 还没有验证这个应用](#google-还没有验证这个应用)。
    {% endhint %}
6. 选择 Google 应该用来联系你（通知项目变更）的 **Email addresses（邮箱地址）**。选择 **Next（下一步）** 继续。
7. 阅读并接受 Google 的 User Data Policy（用户数据政策）。选择 **Continue（继续）**，然后选择 **Create（创建）**。
8. 在左侧菜单里选择 **Branding（品牌信息）**。
9. 在 **Authorized domains（已授权域名）** 区域，选择 **Add domain（添加域名）**：
   - 如果你用的是 n8n 的 Cloud 服务，添加 `n8n.cloud`
   - 如果你是 [自己部署](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n)，添加你 n8n 实例的域名。
10. 在页面底部选择 **Save（保存）**。

### 创建 Google OAuth 客户端凭证

接下来，在 Google 里创建 OAuth 客户端凭证：

1. 打开 [Google Cloud Console](https://console.cloud.google.com/)。确保你当前在正确的项目里。
2. 在 **APIs & Services** 区域，选择 [**Credentials（凭证）**](https://console.cloud.google.com/apis/credentials)。
3. 选择 **+ Create credentials（创建凭证）** > **OAuth client ID**。
4. 在 **Application type（应用类型）** 下拉框里选择 **Web application（网页应用）**。
5. Google 会自动生成一个 **Name（名称）**。把它改成你在控制台里一眼能认出来的名字。
6. 从你的 n8n 凭证里复制 **OAuth Redirect URL（OAuth 回调地址）**，粘贴到 Google Console 的 **Authorized redirect URIs（已授权的回调地址）** 里。<br>

    {% hint style="info" %}
    **自建 n8n 的 OAuth 回调地址**

    如果你在自己电脑上运行 n8n，不需要公网域名、SSL 证书或端口转发就能使用 Google OAuth。Google 允许 localhost 作为开发用途的合法回调地址。你的 n8n OAuth 回调地址大概长这样：`http://localhost:5678/rest/oauth2-credential/callback`。关于可接受的回调地址的更多细节，请参考 [Google 的回调地址文档](https://support.google.com/cloud/answer/15549257?hl=en#zippy=%2Cweb-applications)。
    {% endhint %}
7. 选择 **Create（创建）**。

### 完成 n8n 凭证

Google 项目和凭证都配置好之后，完成 n8n 凭证：

1. 在 Google 的 **OAuth client created（OAuth 客户端已创建）** 弹窗里复制 **Client ID（客户端 ID）**，填到你的 n8n 凭证里。
2. 在同一个 Google 弹窗里复制 **Client Secret（客户端密钥）**，填到你的 n8n 凭证里。
3. 在 n8n 里选择 **Sign in with Google（使用 Google 登录）** 来完成 Google 身份验证。
4. **Save（保存）** 你的新凭证。

## 视频

{% embed url="https://www.youtube.com/embed/FBGtpWMTppw" %}

## 故障排查

### Google 还没有验证这个应用

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/uEYII1oKijzYurya61sf/" %}

### Google Cloud 应用变成未授权状态

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/PlbR0ntmBBE0DgjKiavq/" %}

### redirect_uri_mismatch（回调地址不匹配）

这个错误的意思是：n8n 发出的回调地址和你 Google Cloud Console OAuth 客户端里注册的任何地址都对不上。

**解决办法：** 从你的 n8n 凭证面板复制 **OAuth Redirect URL（OAuth 回调地址）**，原样粘贴——包括协议（`http` 或 `https`）和端口号——到 Google OAuth 客户端的 **Authorized redirect URIs（已授权的回调地址）** 字段里。

### Access denied / "app not verified"（访问被拒绝 / 应用未验证）

这通常是因为你的应用还处于 Testing（测试）模式，而你想用来登录的那个 Google 账号还没被添加为测试用户。

**解决办法：** 进入 **APIs & Services** > **OAuth consent screen** > **Test users（测试用户）**，把你正在用的账号添加进去。

### invalid_client（无效客户端）

这个错误通常意味着你 n8n 凭证里的 Client ID 或 Client Secret 和 Google Cloud Console 里的不一致。

**解决办法：** 回到 Google Cloud Console 里的 OAuth 客户端，重新复制这两个值，再填回 n8n。复制的时候小心别带上多余的空格。
