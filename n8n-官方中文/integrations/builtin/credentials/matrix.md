---
title: Matrix 凭证
description: >-
  Matrix 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Matrix 的身份。
contentType:
  - integration
  - reference
nodeTitle: Matrix credentials
originalFilePath: integrations/builtin/credentials/matrix.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/matrix'
url: 'https://docs.n8n.io/integrations/builtin/credentials/matrix'
layout:
  description:
    visible: false
---

# Matrix 凭证

> **大白话**：Matrix 是一个开源的聊天协议，各家服务器（homeserver）都能用。在 n8n 里连 Matrix，关键是拿到「访问令牌」和「服务器地址」这两样东西，一般在客户端软件的设置里能找到。

你可以使用这些凭证来验证以下节点的身份：

- [Matrix](../app-nodes/n8n-nodes-base.matrix.md)

## 前提条件

在一个 [Matrix](https://matrix.org/) 服务器上注册账号。更多信息请参考[创建账号](https://matrix.org/docs/chat_basics/matrix-for-im/#creating-a-matrix-account)。

## 支持的认证方式

- API access token（API 访问令牌）

## 相关资源

关于该服务的更多信息，请参考 [Matrix 规范](https://spec.matrix.org/latest/)。

另外请参考你访问 Matrix 服务器所用的具体客户端（聊天软件）的文档。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要：

- 一个 **Access Token（访问令牌）**：这个令牌与你登录 Matrix 所用的账号绑定。
- 一个 **Homeserver URL（服务器地址）**：即你注册账号时填写的[homeserver](https://matrix.org/docs/matrix-concepts/elements-of-matrix/#homeserver)地址。n8n 默认预填了 matrix.org 自己的服务器地址；如果你用的是别处的服务器，请改成你自己的。

获取这些信息的步骤因客户端而异。**Access Token** 和 **Homeserver URL** 最常在 **Settings > Help & About > Advanced**（设置 > 帮助与关于 > 高级）里找到，但具体位置请以你的客户端文档为准。
