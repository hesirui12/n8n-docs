---
title: monday.com 凭证
description: >-
  monday.com 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  monday.com 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: monday.com credentials
originalFilePath: integrations/builtin/credentials/mondaycom.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/mondaycom'
url: 'https://docs.n8n.io/integrations/builtin/credentials/mondaycom'
layout:
  description:
    visible: false
---

# monday.com 凭证

{% hint style="info" %}
**大白话**：monday.com 是一个在线项目管理/看板工具（类似 Trello、Notion 的项目视图）。n8n 想自动操作你的 monday.com 项目，有两条路：**API token（API 令牌）**——去 monday.com 后台生成一个个人令牌填进来，适合自己一个人或小团队用，简单；**OAuth2**——需要先在 monday.com 开发者中心注册一个应用，拿到 **Client ID** 和 **Client Secret**，然后在 n8n 里点「连接我的账号」走授权流程。小白推荐先用 API token。另外注意：monday.com 节点要求 n8n 版本 **1.22.6 或以上**。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [monday.com](../app-nodes/n8n-nodes-base.mondaycom.md)

{% hint style="info" %}
**最低版本要求**

monday.com 节点要求 n8n 版本 1.22.6 或以上。
{% endhint %}

## 支持的验证方式

- API token（API 令牌）
- OAuth2

## 相关资源

关于如何用该服务验证身份，请参考 [monday.com 官方 API 文档](https://developer.monday.com/api-reference/docs/basics)。

## 使用 API token（API 令牌）

要配置这个凭证，你需要一个 [monday.com](https://monday.com/) 账号，以及：

- 一个 API **Token V2（V2 版令牌）**

获取你的令牌：

1. 在 monday.com 账号里，点击右上角的个人头像。
2. 选择 **Developers（开发者）**。开发者中心会在新标签页里打开。
3. 在开发者中心里，选择 **My Access Tokens > Show（我的访问令牌 > 显示）**。
4. 复制你的个人令牌，作为 **Token V2** 填到 n8n 凭证里。

更多信息请参考 [monday.com API Authentication（API 身份验证）](https://developer.monday.com/api-reference/docs/authentication)。

## 使用 OAuth2

要配置这个凭证，你需要一个 [monday.com](https://monday.com/) 账号，以及：

- 一个 **Client ID（客户端 ID）**
- 一个 **Client Secret（客户端密钥）**

要生成这两个字段，需要注册一个新的 monday.com 应用：

1. 在 monday.com 账号里，点击右上角的个人头像。
2. 选择 **Developers（开发者）**。开发者中心会在新标签页里打开。
3. 在开发者中心里，选择 **Build app（创建应用）**。应用详情会打开。
4. 给你的应用起一个 **Name（名称）**，比如 `n8n integration`。
5. 复制 **Client ID（客户端 ID）**，填到你的 n8n 凭证里。
6. 点 **Show（显示）** 查看 **Client Secret（客户端密钥）**，复制后填到你的 n8n 凭证里。
7. 在左侧菜单里选择 **OAuth**。
8. 在 **Scopes（权限范围）** 里，勾选 `boards:write` 和 `boards:read`。
9. 选择 **Save Scopes（保存权限范围）**。
10. 选择 **Redirect URLs（重定向地址）** 标签页。
11. 从 n8n 复制 **OAuth Redirect URL（OAuth 重定向地址）**，填为 monday.com 里的 **Redirect URL（重定向地址）**。
12. 在 monday.com 里 **Save（保存）** 你的更改。
13. 回到 n8n，选择 **Connect my account（连接我的账号）** 完成设置。

关于创建应用的更多信息，请参考 [Create an app（创建应用）](https://developer.monday.com/apps/docs/create-an-app)。

关于可用权限范围和 Redirect URL 设置的更多信息，请参考 [OAuth and permissions（OAuth 与权限）](https://developer.monday.com/apps/docs/oauth)。
