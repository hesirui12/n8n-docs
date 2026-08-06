---
title: Copper 凭证
description: >-
  Copper 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Copper 的身份。
contentType:
  - integration
  - reference
nodeTitle: Copper credentials
originalFilePath: integrations/builtin/credentials/copper.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/copper'
url: 'https://docs.n8n.io/integrations/builtin/credentials/copper'
layout:
  description:
    visible: false
---

# Copper 凭证

> **大白话**：Copper 是 CRM 客户管理软件（和 Google Workspace 深度集成）。n8n 连接它需要：一把 **API Key**，加上**创建这把 Key 的那个人的邮箱**（两样要配套，别填错）。注意：只有 Professional 或 Business 套餐才支持 API。

这些凭证可以用来验证以下节点的身份：

- [Copper](../app-nodes/n8n-nodes-base.copper.md)
- [Copper Trigger](../trigger-nodes/n8n-nodes-base.coppertrigger.md)

## 准备工作（Prerequisites）

创建一个 **Professional** 或 **Business** 套餐级别的 [Copper](https://www.copper.com/) 账号。

## 支持的验证方式（Supported authentication methods）

- API key（API 密钥）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Copper 的 API 文档](https://developer.copper.com/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- **API Key（API 密钥）**：生成 API 密钥的方法请参考 [Copper 的生成 API key 文档](https://support.copper.com/en/articles/8823347-generating-an-api-key)。
- **Email（邮箱）**：使用创建该 API 密钥的那个人的邮箱地址。
