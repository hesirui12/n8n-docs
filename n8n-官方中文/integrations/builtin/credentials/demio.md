---
title: Demio 凭证
description: >-
  Demio 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Demio 的身份。
contentType:
  - integration
  - reference
nodeTitle: Demio credentials
originalFilePath: integrations/builtin/credentials/demio.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/demio'
url: 'https://docs.n8n.io/integrations/builtin/credentials/demio'
layout:
  description:
    visible: false
---

# Demio 凭证

> **大白话**：Demio 是在线研讨会/直播工具（办 webinar 用）。n8n 连接它需要**一对**钥匙：**API Key** 和 **API Secret**。注意：只有账户的 **Owner（所有者）** 身份才有权限生成它们，位置在 Demio 的 Account Settings > API。

这些凭证可以用来验证以下节点的身份：

- [Demio](../app-nodes/n8n-nodes-base.demio.md)

## 准备工作（Prerequisites）

先注册一个 [Demio](https://demio.com/) 账号。

## 支持的验证方式（Supported authentication methods）

- API key（API 密钥）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Demio 的 API 文档](https://publicdemioapi.docs.apiary.io/#)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- **API Key**
- **API Secret**

你必须拥有 Demio 的 **Owner（所有者）** 身份才能生成 API 密钥和密钥串。要查看和生成它们，请前往 **Account Settings > API**。更详细的步骤请参考 [Demio 的账户所有者设置（Account Owner Settings）文档](https://help.demio.com/en/articles/6456716-account-owner-settings)。
