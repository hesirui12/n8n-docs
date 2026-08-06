---
title: Google OAuth2 generic（通用版）
contentType:
  - integration
  - reference
nodeTitle: Google OAuth2 generic
originalFilePath: integrations/builtin/credentials/google/oauth-generic.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic
url: https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic
description: >-
  通用版 Google OAuth2 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Google 服务的身份。
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

# Google OAuth2 generic（通用版）

{% hint style="info" %}
**大白话**：这个「通用版 Google OAuth2 凭证」是给「自定义 API 请求」用的——也就是 n8n 内置的 Google 节点满足不了你，你想自己拼 HTTP 请求去调某个 Google API 时的方案。它和单服务版（oauth-single-service）的配置步骤几乎一样，都要去 Google Cloud Console 创建项目、开 API、配授权同意页、创建 OAuth 客户端，唯一多出来的关键一步是：你要自己填 **Scopes（权限范围）**，而且只能填 n8n 支持的那几个范围。全程跟着下面的五步走就行，大约要 20 分钟。
{% endhint %}

本文档包含创建通用版 Google OAuth2 API 凭证的说明，用于配合 [自定义 API 操作](../../custom-api-actions-for-existing-nodes.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/OI5s27oyRBdDvpwcuMQF/" %}

## 准备工作

- 创建一个 [Google Cloud](https://cloud.google.com/) 账号。

## 设置 OAuth

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
3. 你必须为这个凭证提供 scopes（权限范围）。更多信息请参考 [Scopes](#scopes)。多个 scope 用空格隔开，例如：

    ```
    https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/gmail.addons.current.action.compose
    ```
4. 在 n8n 里选择 **Sign in with Google（使用 Google 登录）** 来完成 Google 身份验证。
5. **Save（保存）** 你的新凭证。

## 视频

下面的视频演示了上面描述的步骤：

{% embed url="https://www.youtube.com/embed/FBGtpWMTppw" %}

## Scopes（权限范围）

Google 服务有一个或多个可用的访问范围（scope）。scope 限制了用户能做什么。所有服务的 scope 列表请参考 [Google API 的 OAuth 2.0 Scopes](https://developers.google.com/identity/protocols/oauth2/scopes)。

n8n 并不支持所有 scope。创建通用版 Google OAuth2 API 凭证时，你只能从下面 **Supported scopes（支持的权限范围）** 列表里选。如果你填了一个 n8n 不支持的 scope，它是不会生效的。

<details>

<summary>Supported scopes（支持的权限范围）</summary>

| 服务 | 可用的 scopes |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Gmail | <ul><li><code>https://www.googleapis.com/auth/gmail.labels</code></li><li><code>https://www.googleapis.com/auth/gmail.addons.current.action.compose</code></li><li><code>https://www.googleapis.com/auth/gmail.addons.current.message.action</code></li><li><code>https://mail.google.com/</code></li><li><code>https://www.googleapis.com/auth/gmail.modify</code></li><li><code>https://www.googleapis.com/auth/gmail.compose</code></li></ul> |
| Google Ads | <ul><li><code>https://www.googleapis.com/auth/adwords</code></li></ul> |
| Google Analytics | <ul><li><code>https://www.googleapis.com/auth/analytics</code></li><li><code>https://www.googleapis.com/auth/analytics.readonly</code></li></ul> |
| Google BigQuery | <ul><li><code>https://www.googleapis.com/auth/bigquery</code></li></ul> |
| Google Books | <ul><li><code>https://www.googleapis.com/auth/books</code></li></ul> |
| Google Calendar | <ul><li><code>https://www.googleapis.com/auth/calendar</code></li><li><code>https://www.googleapis.com/auth/calendar.events</code></li></ul> |
| <p>Google Cloud<br>Natural Language</p> | <ul><li><code>https://www.googleapis.com/auth/cloud-language</code></li><li><code>https://www.googleapis.com/auth/cloud-platform</code></li></ul> |
| <p>Google Cloud<br>Storage</p> | <ul><li><code>https://www.googleapis.com/auth/cloud-platform</code></li><li><code>https://www.googleapis.com/auth/cloud-platform.read-only</code></li><li><code>https://www.googleapis.com/auth/devstorage.full_control</code></li><li><code>https://www.googleapis.com/auth/devstorage.read_only</code></li><li><code>https://www.googleapis.com/auth/devstorage.read_write</code></li></ul> |
| Google Contacts | <ul><li><code>https://www.googleapis.com/auth/contacts</code></li></ul> |
| Google Docs | <ul><li><code>https://www.googleapis.com/auth/documents</code></li><li><code>https://www.googleapis.com/auth/drive</code></li><li><code>https://www.googleapis.com/auth/drive.file</code></li></ul> |
| Google Drive | <ul><li><code>https://www.googleapis.com/auth/drive</code></li><li><code>https://www.googleapis.com/auth/drive.appdata</code></li><li><code>https://www.googleapis.com/auth/drive.photos.readonly</code></li></ul> |
| <p>Google Firebase<br>Cloud Firestore</p> | <ul><li><code>https://www.googleapis.com/auth/datastore</code></li><li><code>https://www.googleapis.com/auth/firebase</code></li></ul> |
| <p>Google Firebase<br>Realtime Database</p> | <ul><li><code>https://www.googleapis.com/auth/userinfo.email</code></li><li><code>https://www.googleapis.com/auth/firebase.database</code></li><li><code>https://www.googleapis.com/auth/firebase</code></li></ul> |
| Google Perspective | <ul><li><code>https://www.googleapis.com/auth/userinfo.email</code></li></ul> |
| Google Sheets | <ul><li><code>https://www.googleapis.com/auth/drive.file</code></li><li><code>https://www.googleapis.com/auth/spreadsheets</code></li></ul> |
| Google Slide | <ul><li><code>https://www.googleapis.com/auth/drive.file</code></li><li><code>https://www.googleapis.com/auth/presentations</code></li></ul> |
| Google Tasks | <ul><li><code>https://www.googleapis.com/auth/tasks</code></li></ul> |
| Google Translate | <ul><li><code>https://www.googleapis.com/auth/cloud-translation</code></li></ul> |
| GSuite Admin | <ul><li><code>https://www.googleapis.com/auth/admin.directory.group</code></li><li><code>https://www.googleapis.com/auth/admin.directory.user</code></li><li><code>https://www.googleapis.com/auth/admin.directory.domain.readonly</code></li><li><code>https://www.googleapis.com/auth/admin.directory.userschema.readonly</code></li></ul> |

</details>

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
