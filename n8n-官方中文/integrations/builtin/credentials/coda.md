---
title: Coda 凭证
description: >-
  Coda 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Coda 的身份。
contentType:
  - integration
  - reference
nodeTitle: Coda credentials
originalFilePath: integrations/builtin/credentials/coda.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/coda'
url: 'https://docs.n8n.io/integrations/builtin/credentials/coda'
layout:
  description:
    visible: false
---

# Coda 凭证

> **大白话**：Coda 是「文档 + 表格 + 数据库」二合一的在线协作工具。n8n 想读写你的 Coda 文档，去 Coda 的账户设置里生成一把 API 访问令牌，填进 n8n 凭证即可。

这些凭证可以用来验证以下节点的身份：

- [Coda](../app-nodes/n8n-nodes-base.coda.md)

## 准备工作（Prerequisites）

先注册一个 [Coda](https://www.coda.io/) 账号。

## 支持的验证方式（Supported authentication methods）

- API access token（API 访问令牌）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Coda 的 API 文档](https://coda.io/developers/apis/v1)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要准备：

- API **Access Token（访问令牌）**：在 Coda 的 [**Account settings（账户设置）**](https://coda.io/@oleg/getting-started-guide-coda-api/start-here-5#_luxC4) 中生成一个 API 访问令牌。
