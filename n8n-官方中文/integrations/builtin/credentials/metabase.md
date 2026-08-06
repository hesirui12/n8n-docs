---
title: Metabase 凭证
description: >-
  Metabase 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Metabase 的身份。
contentType:
  - integration
  - reference
nodeTitle: Metabase credentials
originalFilePath: integrations/builtin/credentials/metabase.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/metabase'
url: 'https://docs.n8n.io/integrations/builtin/credentials/metabase'
layout:
  description:
    visible: false
---

# Metabase 凭证

> **大白话**：Metabase 是开源的图表/数据可视化工具。在 n8n 里连它，只需要填三个东西：Metabase 的地址、你的用户名和密码。

你可以使用这些凭证来验证以下节点的身份：

- [Metabase node](../app-nodes/n8n-nodes-base.metabase.md)

## 前提条件

注册一个 [Metabase](https://www.metabase.com/) 账号，并且能访问一个 Metabase 实例。

## 支持的认证方式

- Basic auth（账号密码认证）

## 相关资源

关于该服务的更多信息，请参考 [Metabase 的 API 文档](https://www.metabase.com/docs/latest/api-documentation)。

## 使用 Basic auth（账号密码认证）

要配置这个凭证，你需要：

- 一个 **URL（地址）**：输入你的 Metabase 实例的 Base URL。如果你用的是自定义域名，就填那个域名。
- 一个 **Username（用户名）**：输入你的 Metabase 用户名。
- 一个 **Password（密码）**：输入你的 Metabase 密码。
