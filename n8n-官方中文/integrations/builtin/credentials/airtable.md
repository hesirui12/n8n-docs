---
title: Airtable 凭证
contentType:
  - integration
  - reference
priority: high
nodeTitle: Airtable credentials
originalFilePath: integrations/builtin/credentials/airtable.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/airtable
url: https://docs.n8n.io/integrations/builtin/credentials/airtable
description: >-
  Airtable 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Airtable 的身份。
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

# Airtable 凭证

{% hint style="info" %}
**大白话**：Airtable 是「表格 + 数据库」的结合体，特别适合非程序员整理数据。n8n 连它推荐用 **Personal Access Token（个人访问令牌，简称 PAT）**，在 Airtable 官网生成后填进 n8n 就行；如果你自己搭（self-hosted）n8n，也可以选 OAuth2（网页授权登录）。注意：老的 API key 方式 2024 年 2 月起已被官方废弃，别再用啦。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Airtable](../app-nodes/n8n-nodes-base.airtable/README.md)
- [Airtable Trigger（触发器）](../trigger-nodes/n8n-nodes-base.airtabletrigger.md)

## 准备工作

注册一个 [Airtable](https://airtable.com/) 账号。

## 支持的验证方式

- Personal Access Token（个人访问令牌，PAT）
- OAuth2（网页授权登录）

{% hint style="info" %}
**API Key 已废弃**

n8n 以前提供用 API key 连接 Airtable 的方式。Airtable 已于 2024 年 2 月起[全面废弃这些密钥](https://support.airtable.com/v1/docs/airtable-api-deprecation-guidelines)。如果你之前用的是 Airtable API 凭证，请换成 Airtable Personal Access Token 或 Airtable OAuth2 凭证。n8n 推荐使用 Personal Access Token。
{% endhint %}

## 相关资源

关于该服务的更多信息，请参考 [Airtable 官方 API 文档（身份验证）](https://airtable.com/developers/web/api/authentication)。

## 使用个人访问令牌（Personal Access Token）

要配置这个凭证，你需要准备：

- 一个 Personal **Access Token（个人访问令牌，PAT）**

创建 PAT 的步骤：

1. 打开 Airtable Builder Hub 的 [Personal access tokens（个人访问令牌）](https://airtable.com/create/tokens) 页面。
2. 点 **+ Create new token（创建新令牌）**。Airtable 会打开 **Create personal access token（创建个人访问令牌）** 页面。
3. 为令牌填一个 **Name（名称）**，比如 `n8n credential`。
4. 给令牌添加 **Scopes（权限范围）**。更多信息请参考 Airtable 的 [Scopes（权限范围）指南](https://airtable.com/developers/web/api/scopes)。n8n 推荐使用以下权限范围：
   - `data.records:read`
   - `data.records:write`
   - `schema.bases:read`
5. 选择令牌的 **Access（访问范围）**：可以只选一个 base，也可以选多个 base（哪怕是不同工作区的），或者选你拥有的某个工作区里现在和未来的全部 base，或者选你拥有的所有工作区里的全部 base（包括以后新建的）。
6. 点 **Create token（创建令牌）**。
7. Airtable 会弹出一个窗口显示你的令牌。复制这个令牌，作为 **Access Token** 填进 n8n 的凭证里。

更多信息请参考 Airtable 的 [创建/查找 PAT 文档](https://support.airtable.com/v1/docs/creating-personal-access-tokens)。

## 使用 OAuth2（网页授权登录）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你是[自己搭建（self-hosting）n8n](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n)，你需要准备：

- **OAuth Redirect URL（OAuth 回调地址）**
- **Client ID（客户端 ID）**
- **Client Secret（客户端密钥）**

要生成这些信息，注册一个新的 Airtable 集成：

1. 打开你的 Airtable Builder Hub 的 [**OAuth integrations（OAuth 集成）**](https://airtable.com/create/oauth) 页面。
2. 点 **Register new OAuth integration（注册新的 OAuth 集成）** 按钮。
3. 为你的 OAuth 集成输入一个名称。
4. 从 n8n 凭证里复制 **OAuth Redirect URL**。
5. 在 Airtable 里把这个回调地址粘贴为 **OAuth redirect URL**。
6. 点 **Register integration（注册集成）**。
7. 在接下来的页面上，把 Airtable 显示的 **Client ID** 复制到 n8n 凭证的 **Client ID** 里。
8. 在 Airtable 里点 **Generate client secret（生成客户端密钥）**。
9. 复制这个 client secret，粘贴到 n8n 凭证的 **Client Secret** 里。
10. 在 Airtable 里选择以下权限范围（scopes）：
    - `data.records:read`
    - `data.records:write`
    - `schema.bases:read`
11. 在 Airtable 里点 **Save changes（保存更改）**。
12. 在 n8n 凭证里点 **Connect my account（连接我的账号）**，会弹出 **Grant access（授权访问）** 窗口。
13. 按提示选择你要操作的 base（或所有 base）。
14. 点 **Grant access（授权访问）** 完成连接。

注册新 OAuth 集成的完整步骤，请参考 [Airtable 官方文档：注册新集成](https://airtable.com/developers/web/guides/oauth-integrations)。
