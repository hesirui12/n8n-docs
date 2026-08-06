---
title: Asana 凭证
description: >-
  Asana 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Asana 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Asana credentials
originalFilePath: integrations/builtin/credentials/asana.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/asana'
url: 'https://docs.n8n.io/integrations/builtin/credentials/asana'
layout:
  description:
    visible: false
---

# Asana 凭证

{% hint style="info" %}
**大白话**：Asana 是非常流行的项目管理工具（管任务、管项目进度）。n8n 连它有两种方式：简单版是生成一个个人 **Access Token（访问令牌）** 填进来；进阶版是 **OAuth2**（网页授权登录，更安全，自建 n8n 时推荐用这个）。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Asana](../app-nodes/n8n-nodes-base.asana.md)
- [Asana Trigger（触发器）](../trigger-nodes/n8n-nodes-base.asanatrigger.md)

## 支持的验证方式

- Access token（访问令牌）
- OAuth2（网页授权登录）

## 相关资源

关于该服务的更多信息，请参考 [Asana 开发者指南](https://developers.asana.com/docs/overview)。

## 使用 Access token（访问令牌）

要配置这个凭证，你需要一个 [Asana](https://asana.com/) 账号，以及：

- 一个 Personal **Access Token（个人访问令牌，PAT）**

获取 PAT 的步骤：

1. 打开 Asana [开发者控制台](https://app.asana.com/0/my-apps)。
2. 在 **Personal access tokens（个人访问令牌）** 区域，点 **Create new token（创建新令牌）**。
3. 输入 **Token name（令牌名称）**，比如 `n8n integration`。
4. 勾选同意 **Asana API terms（Asana API 条款）** 的复选框。
5. 点 **Create token（创建令牌）**。
6. 复制这个令牌，作为 **Access Token** 填进 n8n 的凭证里。

更多信息请参考 [Asana 快速入门指南](https://developers.asana.com/docs/quick-start#setup)。

## 使用 OAuth2（网页授权登录）

要配置这个凭证，你需要一个 [Asana](https://asana.com/) 账号。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你是[自己搭建（self-hosting）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n) n8n，需要注册一个应用来配置 OAuth：

1. 打开 Asana [开发者控制台](https://app.asana.com/0/my-apps)。
2. 在 **My apps（我的应用）** 区域，点 **Create new app（创建新应用）**。
3. 为你的应用输入 **App name（应用名称）**，比如 `n8n integration`。
4. 为应用选择一个用途（purpose）。
5. 勾选同意 **Asana API terms（Asana API 条款）** 的复选框。
6. 点 **Create app（创建应用）**。页面会打开到应用的 **Basic Information（基本信息）**。
7. 在左侧菜单里选择 **OAuth**。
8. 在 n8n 里复制 **OAuth Redirect URL（OAuth 回调地址）**。
9. 在 Asana 里点 **Add redirect URL（添加回调地址）**，粘贴从 n8n 复制的地址。
10. 复制 Asana 里的 **Client ID**，填进 n8n 凭证。
11. 复制 Asana 里的 **Client Secret**，填进 n8n 凭证。

更多信息请参考 [Asana OAuth 注册应用文档](https://developers.asana.com/docs/oauth#register-an-application)。
