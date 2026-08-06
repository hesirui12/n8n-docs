---
title: NocoDB 凭证
description: >-
  NocoDB 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  NocoDB 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: NocoDB credentials
originalFilePath: integrations/builtin/credentials/nocodb.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/nocodb'
url: 'https://docs.n8n.io/integrations/builtin/credentials/nocodb'
layout:
  description:
    visible: false
---

# NocoDB 凭证

{% hint style="info" %}
**大白话**：NocoDB 是一个开源工具，可以把各种数据库（MySQL、PostgreSQL 等）变成像 Excel/Airtable 一样的在线表格界面，让不会写 SQL 的人也能操作数据库。n8n 想读写你的 NocoDB 表格，推荐用 **API token（API 令牌）**：登录 NocoDB 后在左下角用户菜单 → Account Settings → Tokens 里新建一个令牌，再填上你 NocoDB 的地址（比如 `http://localhost:8080`）就行。注意：NocoDB 从 v0.205.1 起**已废弃用户认证令牌（user auth token）**，请用 API token。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [NocoDB](../app-nodes/n8n-nodes-base.nocodb.md)

## 支持的验证方式

- API token（API 令牌，推荐）
- User auth token（用户认证令牌）

{% hint style="info" %}
**用户认证令牌已废弃**

NocoDB 从 v0.205.1 起废弃了用户认证令牌（user auth token）。请改用 [API 令牌](#使用-api-tokenapi-令牌)。
{% endhint %}

## 相关资源

关于该服务的更多信息，请参考 [NocoDB 官方 API 文档](https://data-apis-v2.nocodb.com/)。

## 使用 API token（API 令牌）

要配置这个凭证，你需要一个 [NocoDB](https://www.nocodb.com/) 实例，以及：

- 一个 **API Token（API 令牌）**
- 你的数据库 **Host（地址）**

生成 API 令牌的步骤：

1. 登录 NocoDB，在左下角侧边栏选择 **User menu（用户菜单）**。
2. 选择 **Account Settings（账号设置）**。
3. 打开 **Tokens（令牌）** 标签页。
4. 选择 **Add new API token（添加新的 API 令牌）**。
5. 给你的令牌输入一个 **Name（名称）**，比如 `n8n integration`。
6. 选择 **Save（保存）**。
7. 复制 **API Token（API 令牌）**，填到你的 n8n 凭证里。
8. 在 n8n 凭证里输入你的 NocoDB 实例的 **Host（地址）**，例如 `http://localhost:8080`。

更详细的步骤请参考 NocoDB 的 [API Tokens 文档](https://docs.nocodb.com/account-settings/api-tokens/)。

## 使用 user auth token（用户认证令牌）

在被 NocoDB 废弃之前，用户认证令牌是一种临时令牌，用于快速试验 API，有效期为一个会话（直到用户退出登录）或 10 小时。

{% hint style="info" %}
**用户认证令牌已废弃**

NocoDB 从 v0.205.1 起废弃了用户认证令牌。请改用 [API 令牌](#使用-api-tokenapi-令牌)。
{% endhint %}

要配置这个凭证，你需要一个 [NocoDB](https://www.nocodb.com/) 实例，以及：

- 一个 **User Token（用户令牌）**
- 你的数据库 **Host（地址）**

生成用户认证令牌的步骤：

1. 登录 NocoDB，在左下角侧边栏选择 **User menu（用户菜单）**。
2. 选择 **Copy Auth token（复制认证令牌）**。
3. 把这个认证令牌作为 **User Token（用户令牌）** 填到 n8n 里。
4. 输入你的 NocoDB 实例的 **Host（地址）**，例如 `http://localhost:8080`。

更多信息请参考 NocoDB 的 [Auth Tokens 文档](https://docs.nocodb.com/account-settings/api-tokens/#auth-tokens)。
