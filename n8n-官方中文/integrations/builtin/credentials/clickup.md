---
title: ClickUp 凭证
description: >-
  ClickUp 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  ClickUp 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: ClickUp credentials
originalFilePath: integrations/builtin/credentials/clickup.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/clickup'
url: 'https://docs.n8n.io/integrations/builtin/credentials/clickup'
layout:
  description:
    visible: false
---

# ClickUp 凭证

> **大白话**：ClickUp 是项目管理工具（管任务、管团队）。n8n 想连接它有两种「钥匙」：一是用你自己的**个人 API 令牌**（自己用，最快）；二是用 **OAuth2**（适合让别人授权安装）。个人用建议直接选第一种，按下面的步骤生成令牌填进去即可。

这些凭证可以用来验证以下节点的身份：

- [ClickUp](../app-nodes/n8n-nodes-base.clickup.md)
- [ClickUp Trigger](../trigger-nodes/n8n-nodes-base.clickuptrigger.md)

## 支持的验证方式（Supported authentication methods）

- API access token（API 访问令牌）
- OAuth2

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [ClickUp 的文档](https://clickup.com/api/)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要一个 [ClickUp](https://www.clickup.com/) 账号，以及：

- 一个 Personal API **Access Token**（个人 API 访问令牌）

获取个人 API 令牌的方法：

1. 如果你用的是 ClickUp 2.0：点击左下角的头像，然后选择 **Apps**（应用）。如果你用的是 ClickUp 3.0：点击右上角的头像，选择 **Settings**（设置），然后在侧边栏向下滚动选择 **Apps**（应用）。
2. 在 **API Token** 下面，选择 **Generate**（生成）。
3. 复制你的 **Personal API token**（个人 API 令牌），在 n8n 凭证中填为 **Access Token**。

更多信息请参考 [ClickUp 的个人令牌（Personal Token）文档](https://clickup.com/api/developer-portal/authentication#personal-token)。

## 使用 OAuth2

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你是[自托管（self-hosting）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n) n8n，就需要自己创建一个 OAuth 应用：

1. 在 ClickUp 中点击你的头像，选择 **Integrations**（集成）。
2. 选择 **ClickUp API**。
3. 选择 **Create an App**（创建应用）。
4. 为你的应用输入一个 **Name**（名称）。
5. 在 n8n 中复制 **OAuth Redirect URL**（OAuth 重定向地址），把它填入 ClickUp 应用的 **Redirect URL**。
6. 创建应用后，复制 **client_id** 和 **secret**，把它们填入 n8n 凭证。
7. 选择 **Connect my account**（连接我的账号），按屏幕提示完成连接。

更多信息请参考 [ClickUp 的 OAuth 流程文档](https://clickup.com/api/developer-portal/authentication#oauth-flow)。
