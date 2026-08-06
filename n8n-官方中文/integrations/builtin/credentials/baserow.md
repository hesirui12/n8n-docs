---
title: Baserow 凭证
description: >-
  Baserow 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Baserow 的身份。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Baserow credentials
originalFilePath: integrations/builtin/credentials/baserow.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/baserow'
url: 'https://docs.n8n.io/integrations/builtin/credentials/baserow'
layout:
  description:
    visible: false
---

# Baserow 凭证

> 大白话：Baserow 是一个在线数据库表格工具，可以理解成「开源版 Airtable」。n8n 想读它的数据，有两种身份验证方式：一是直接用账号密码（basic auth），二是用数据库专用的 Token（令牌）。二选一填进 n8n 就行，按下面的步骤走不会错。

这些凭证可以用来验证以下节点的身份：

- [Baserow](../app-nodes/n8n-nodes-base.baserow.md)

## 准备工作

在任意托管的 Baserow 实例上，或者自建（self-hosted）的 Baserow 实例上，先注册一个 [Baserow](https://baserow.io/) 账号。

## 支持的验证方式

- Basic auth（账号密码）
- Token（令牌）

## 相关资源

关于该服务的更多信息，请参考 [Baserow 官方文档](https://baserow.io/docs/index)。

关于 API 本身的更多信息，请参考 [Baserow 自动生成的 API 文档](https://baserow.io/api-docs)。

## 使用 basic auth（账号密码验证）

要配置这个凭证，你需要准备：

- 你的 Baserow **Host（主机地址）**
- 用于登录的 **Username（用户名）** 和 **Password（密码）**

按以下步骤操作：

1. 填写 Baserow 实例的 **Host（主机地址）**：
    - 使用 Baserow 官方托管的实例：保持默认的 `https://api.baserow.io` 即可。
    - 使用自建（self-hosted）实例：填你自己实例的 API 地址。
2. 填写 n8n 要使用的用户账号的 **Username（用户名）**。
3. 填写该用户账号的 **Password（密码）**。

如何创建用户账号，请参考 [Baserow API 身份验证文档](https://baserow.io/docs/apis/rest-api#authentication)。

## 使用 Token（令牌）

要配置数据库 Token 凭证，你需要准备：

- 你的 Baserow **Host（主机地址）**
- 一个在 Baserow.io 上创建的 **Database token（数据库令牌）**，创建时需要 **Username（用户名）** 和 **Password（密码）** 登录。

### 创建数据库令牌

1. 在 [Baserow](https://baserow.io/login) 用你的用户名和密码登录。
2. 点击左上角你的工作区（workspace），选择 **My Settings（我的设置）**。
3. 在打开的页面中，点击 **Database tokens（数据库令牌）**。
4. 点击 **Create token（创建令牌）**。
5. 为令牌填写一个 **Name（名称）** 并选择 **Workspace（工作区）**。
6. 点击 **Create token（创建令牌）** 完成创建。

然后在 n8n 中创建凭证，步骤如下：

1. 填写 Baserow 实例的 **Host（主机地址）**：
	- 使用 Baserow 官方托管的实例：保持默认的 `https://api.baserow.io` 即可。
	- 使用自建（self-hosted）实例：填你自己实例的 API 地址。
2. 填入你创建好的 **Database Token（数据库令牌）**。
