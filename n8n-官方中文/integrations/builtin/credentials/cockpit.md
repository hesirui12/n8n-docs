---
title: Cockpit 凭证
description: >-
  Cockpit 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Cockpit 的身份。
contentType:
  - integration
  - reference
nodeTitle: Cockpit credentials
originalFilePath: integrations/builtin/credentials/cockpit.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/cockpit'
url: 'https://docs.n8n.io/integrations/builtin/credentials/cockpit'
layout:
  description:
    visible: false
---

# Cockpit 凭证

> **大白话**：Cockpit 是开源的轻量内容管理工具（管网站内容）。n8n 连接它需要两样东西：你的 **Cockpit 网址** 和一把 **Access Token（访问令牌）**。去 Cockpit 后台创建令牌后填进来即可。

这些凭证可以用来验证以下节点的身份：

- [Cockpit](../app-nodes/n8n-nodes-base.cockpit.md)

## 准备工作（Prerequisites）

- 创建一个 [Cockpit](https://getcockpit.com/) 账号。
- 搭建一个[自托管（self-hosted）的 Cockpit 实例](https://getcockpit.com/documentation/core/quickstart/installation)。

## 支持的验证方式（Supported authentication methods）

- API access token（API 访问令牌）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Cockpit 的 API 文档](https://getcockpit.com/documentation/core/api/introduction)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要准备：

- **Cockpit URL（Cockpit 网址）**：你用来访问 Cockpit 实例的地址
- **Access Token（访问令牌）**：创建 API 令牌的方法请参考 [Cockpit 的令牌管理（Managing tokens）文档](https://getcockpit.com/documentation/core/api/authentication/#managing-tokens)。把生成的 **API token** 作为 n8n 的 **Access Token** 填入。
