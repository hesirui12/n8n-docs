---
title: Zammad 凭证
description: >-
  Zammad 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Zammad 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Zammad credentials
originalFilePath: integrations/builtin/credentials/zammad.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/zammad'
url: 'https://docs.n8n.io/integrations/builtin/credentials/zammad'
layout:
  description:
    visible: false
---

# Zammad 凭证

> **大白话**：Zammad 是开源的客服工单系统。连它有两种方式：**基本认证（Basic auth）**——填站点 URL + 邮箱 + 密码，最简单；**令牌认证（Token auth）**——官方推荐这种方式，先在后台 **Settings > System > API** 开启 **API Token Access**，然后用户在自己的 **头像 > Profile > Token Access** 里创建一个令牌，再按需要勾选权限（想用全节点功能就勾 `admin.group`、`admin.organization`、`admin.user`、`ticket.agent`、`ticket.customer`）。

你可以使用这些凭证对以下节点进行身份验证：

- [Zammad](../app-nodes/n8n-nodes-base.zammad.md)

## 前提条件

- 创建一个托管的 [Zammad](https://zammad.com/) 账户，或自己搭建 Zammad 实例。
- 对于令牌认证，需要在 **Settings > System > API** 中启用 **API Token Access**（API 令牌访问）。更多信息请参考 [Setting up a Zammad](https://admin-docs.zammad.org/en/latest/system/integrations/zabbix.html?#setting-up-a-zammad)。

## 支持的认证方式

- Basic auth（基本认证）
- Token auth（令牌认证）：Zammad 推荐使用这种认证方式。

## 相关资源

关于如何与该服务进行认证，请参考 [Zammad 的 API 认证文档](https://docs.zammad.org/en/latest/api/intro.html?#authentication)。

## 使用基本认证（basic auth）

要配置此凭证，你需要：

- 一个 **Base URL**（基础地址）：填写你的 Zammad 实例地址。
- 一个 **Email**（邮箱）地址：填写你登录 Zammad 时使用的邮箱地址。
- 一个 **Password**（密码）：填写你的 Zammad 密码。
- **Ignore SSL Issues**（忽略 SSL 问题）：打开后，即使 SSL 证书验证失败，n8n 也会照常连接。

## 使用令牌认证（token auth）

要配置此凭证，你需要：

- 一个 **Base URL**（基础地址）：填写你的 Zammad 实例地址。
- 一个 **Access Token**（访问令牌）：一旦 Zammad 实例启用了 **API Token Access**，任何拥有 `user_preferences.access_token` 权限的用户都可以进入 **你的头像 > Profile > Token Access**，点击 **Create** 来生成新的访问令牌。
    - 访问令牌的权限取决于你想用这个凭证完成哪些操作。要使用 [Zammad](../app-nodes/n8n-nodes-base.zammad.md) 节点的全部功能，请勾选：
        - `admin.group`
        - `admin.organization`
        - `admin.user`
        - `ticket.agent`
        - `ticket.customer`
- **Ignore SSL Issues**（忽略 SSL 问题）：打开后，即使 SSL 证书验证失败，n8n 也会照常连接。
