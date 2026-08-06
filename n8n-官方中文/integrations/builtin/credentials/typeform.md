---
title: Typeform 凭证
description: >-
  Typeform 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Typeform 进行身份验证。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Typeform credentials
originalFilePath: integrations/builtin/credentials/typeform.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/typeform'
url: 'https://docs.n8n.io/integrations/builtin/credentials/typeform'
layout:
  description:
    visible: false
---

# Typeform 凭证

> **大白话**：Typeform 是做在线问卷的。n8n 连它有两种方式：个人令牌（API token，简单，去设置里生成一个就行）或 OAuth2（要注册开发者应用）。n8n 的 Typeform 触发器节点两种都支持。

你可以使用这些凭证对以下节点进行身份验证：

- [Typeform Trigger](../trigger-nodes/n8n-nodes-base.typeformtrigger.md)

## 支持的认证方式

- API token（API 令牌）
- OAuth2

## 相关资源

更多关于该服务的信息，请参考 [Typeform 的 API 文档](https://www.typeform.com/developers/get-started/)。

## 使用 API token

要配置此凭证，你需要一个 [Typeform](https://typeform.com/) 账户，以及：

- 一个个人 **Access Token**（访问令牌）

获取个人访问令牌的方法：

1. 登录你的 Typeform 账户。
2. 点击右上角的个人头像，前往 **Account > Your settings >** [**Personal Tokens**](https://admin.typeform.com/user/tokens)（账户 > 你的设置 > 个人令牌）。
3. 选择 **Generate a new token**（生成新令牌）。
4. 给你的令牌起一个 **Name**（名称），例如 `n8n integration`。
5. 在 **Scopes**（权限范围）中选择 **Custom scopes**（自定义范围），并勾选以下权限：
    - Forms: Read（表单：读取）
    - Webhooks: Read, Write（Webhooks：读取、写入）
6. 选择 **Generate token**（生成令牌）。
7. 复制令牌并填入 n8n 凭证。

更多信息请参考 Typeform 的 [个人访问令牌文档](https://www.typeform.com/developers/get-started/personal-access-token/)。

## 使用 OAuth2

要配置此凭证，你需要一个 [Typeform](https://typeform.com/) 账户，以及：

- **Client ID**（客户端 ID）：注册应用时生成。
- **Client Secret**（客户端密钥）：注册应用时生成。

要获取你的 Client ID 和 Client Secret，请注册一个新的 Typeform 应用：

1. 登录你的 Typeform 账户。
2. 在左上角，打开组织的下拉菜单，选择 **Developer apps**（开发者应用）。
3. 选择 **Register a new app**（注册新应用）。
4. 输入一个合理的 **App Name**（应用名称），例如 `n8n OAuth2 integration`。
5. 将你的 n8n 基础 URL 填写为 **App website**（应用网站），例如 `https://n8n-sample.app.n8n.cloud/`。
6. 从 n8n 复制 **OAuth Redirect URL**（OAuth 重定向 URL），在 Typeform 中将其填写为 **Redirect URI(s)**（重定向 URI）。
7. 选择 **Register app**（注册应用）。
8. 复制 **Client Secret** 并填入 n8n 凭证。
9. 在 Typeform 中选择 **Got it**（知道了）关闭 Client Secret 弹窗。
10. **Developer apps**（开发者应用）面板会显示你的新应用。复制 **Client ID** 并填入 n8n 凭证。
11. 在 n8n 中填好 **Client ID** 和 **Client Secret** 后，选择 **Connect my account**（连接我的账户），按屏幕提示完成应用授权。

更多信息请参考 [Create applications that integrate with Typeform's APIs](https://www.typeform.com/developers/get-started/applications/#1-create-an-application-in-the-typeform-admin-panel)。
