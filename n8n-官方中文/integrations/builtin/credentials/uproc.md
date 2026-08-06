---
title: uProc 凭证
description: >-
  uProc 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 uProc 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: uProc credentials
originalFilePath: integrations/builtin/credentials/uproc.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/uproc'
url: 'https://docs.n8n.io/integrations/builtin/credentials/uproc'
layout:
  description:
    visible: false
---

# uProc 凭证

> **大白话**：uProc 是数据清洗/数据丰富工具。在「设置 > 集成 > API 凭证」页面把邮箱和真实的 API Key 复制出来填进 n8n 就行。

你可以使用这些凭证对以下节点进行身份验证：

- [uProc](../app-nodes/n8n-nodes-base.uproc.md)

## 前置条件

创建一个 [uProc](https://uproc.io) 账户。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

更多关于该服务的信息，请参考 [uProc 的 API 文档](https://docs.uproc.io/api/)。

## 使用 API Key

要配置此凭证，你需要：

- **Email**（邮箱）：输入你登录 uProc 时使用的邮箱地址。该邮箱也会显示在 **Settings > Integrations > API Credentials**（设置 > 集成 > API 凭证）中。
- **API Key**：前往 **Settings > Integrations > API Credentials**（设置 > 集成 > API 凭证）。从 **API Credentials** 部分复制 **API Key (real)**（真实 API 密钥），填入 n8n 凭证。
