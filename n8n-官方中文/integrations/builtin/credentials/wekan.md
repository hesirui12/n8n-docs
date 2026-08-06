---
title: Wekan 凭证
description: >-
  Wekan 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Wekan 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Wekan credentials
originalFilePath: integrations/builtin/credentials/wekan.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/wekan'
url: 'https://docs.n8n.io/integrations/builtin/credentials/wekan'
layout:
  description:
    visible: false
---

# Wekan 凭证

> **大白话**：Wekan 是开源看板工具（类似 Trello 的开源版），需要自己部署在服务器上。凭证很简单：填用户名、密码和你自己服务器的域名 URL 三项就行。

你可以使用这些凭证对以下节点进行身份验证：

- [Wekan](../app-nodes/n8n-nodes-base.wekan.md)

## 前置条件

在你的服务器上安装 [Wekan](https://github.com/wekan/wekan/wiki)。

## 支持的认证方式

- Basic auth（基本认证）

## 相关资源

更多关于与该服务进行身份验证的信息，请参考 [Wekan 的 API 文档](https://github.com/wekan/wekan/wiki/REST-API)。

## 使用 basic auth

要配置此凭证，你需要：

- **Username**（用户名）：输入你的 Wekan 用户名。
- **Password**（密码）：输入你的 Wekan 密码。
- **URL**：输入你的 Wekan 域名。
