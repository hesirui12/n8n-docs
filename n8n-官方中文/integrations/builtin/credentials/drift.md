---
title: Drift 凭证（Drift credentials）
description: >-
  Drift 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  Drift。
contentType:
  - integration
  - reference
nodeTitle: Drift 凭证（Drift credentials）
originalFilePath: integrations/builtin/credentials/drift.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/drift'
url: 'https://docs.n8n.io/integrations/builtin/credentials/drift'
layout:
  description:
    visible: false
---

# Drift 凭证（Drift credentials）

> **大白话**：Drift 是一个营销/客服聊天工具（网站上的在线对话小窗）。n8n 连它有两种方式：**Personal Access Token**（个人访问令牌，适合自己用）或 **OAuth2**（标准授权，适合做成正式应用给别人用）。

你可以使用这些凭证来认证以下节点：

- [Drift](../app-nodes/n8n-nodes-base.drift.md)

## 前置条件（Prerequisites）

- 创建一个 [Drift](https://www.drift.com/) 账号。
- [创建一个 Drift 应用](https://devdocs.drift.com/docs/quick-start#3-install-it-to-your-drift-account-)。

## 支持的认证方式（Supported authentication methods）

- API personal access token（API 个人访问令牌）
- OAuth2

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [Drift 的 API 文档](https://devdocs.drift.com/docs/using-drift-apis)。

## 使用 API personal access token（Using API personal access token）

要配置这个凭证，你需要：

- 一个 **Personal Access Token**（个人访问令牌）：要获取令牌，先[创建一个 Drift 应用](https://devdocs.drift.com/docs/quick-start#3-install-it-to-your-drift-account-)，然后[安装这个应用](https://devdocs.drift.com/docs/quick-start#3-install-it-to-your-drift-account-)来生成 OAuth Access token。把它作为 **Personal Access Token** 填入 n8n 凭证。

## 使用 OAuth2（Using OAuth2）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你需要从零开始配置 OAuth2，或者想更详细地了解 OAuth 网页授权流程中发生了什么，请参考 [Drift 认证与权限范围文档](https://devdocs.drift.com/docs/authentication-and-scopes) 中的说明来为你的应用设置 OAuth。
