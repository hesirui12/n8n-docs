---
title: BambooHR 凭证
description: >-
  BambooHR 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  BambooHR 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: BambooHR credentials
originalFilePath: integrations/builtin/credentials/bamboohr.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/bamboohr'
url: 'https://docs.n8n.io/integrations/builtin/credentials/bamboohr'
layout:
  description:
    visible: false
---

# BambooHR 凭证

> 大白话：BambooHR 是一款人事（HR）管理软件。想让它和 n8n 配合干活，你得先告诉 n8n「怎么证明你是 BambooHR 的合法用户」——方法就是填一个子域名和一把 API Key（钥匙）。填好后，n8n 就能替你登录 BambooHR 操作数据了。

这些凭证可以用来验证以下节点的身份：

- [BambooHR](../app-nodes/n8n-nodes-base.bamboohr.md)

## 准备工作

先注册一个 [BambooHR](https://www.bamboohr.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [BambooHR 官方 API 文档](https://documentation.bamboohr.com/docs/getting-started)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 你的 BambooHR **Subdomain（子域名）**：也就是 `https://` 和 `.bamboohr.com` 中间的那一段。
- 一个 BambooHR **API Key（API 密钥）**：如何生成 API key，请参考 [BambooHR 官方入门文档中的 Authentication（身份验证）章节](https://documentation.bamboohr.com/docs/getting-started#authentication)。
