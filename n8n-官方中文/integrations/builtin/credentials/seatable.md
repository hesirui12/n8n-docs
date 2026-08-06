---
title: SeaTable 凭证
description: >-
  SeaTable 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来验证
  SeaTable。
contentType:
  - integration
  - reference
nodeTitle: SeaTable 凭证
originalFilePath: integrations/builtin/credentials/seatable.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/seatable'
url: 'https://docs.n8n.io/integrations/builtin/credentials/seatable'
layout:
  description:
    visible: false
---

# SeaTable 凭证

> **大白话**：SeaTable 是一个在线表格数据库（类似「表格 + 数据库」的结合体）。这篇文档教你怎么在 n8n 里填好它的凭证，让 n8n 能连上你的 SeaTable 表格。

你可以使用这些凭证来验证以下节点：

- [SeaTable](../app-nodes/n8n-nodes-base.seatable.md)
- [SeaTable Trigger](../trigger-nodes/n8n-nodes-base.seatabletrigger.md)

## 前置条件

先创建一个 [SeaTable](https://seatable.io/en/) 账号（可以用云端服务，也可以自己搭建服务器）。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参阅 [SeaTable 的 API 文档](https://api.seatable.io)。

## 使用 API key（API 密钥）

要配置此凭证，你需要准备：

- **Environment（环境）**：选择与你 SeaTable 实例匹配的环境：
    - **Cloud-Hosted**（云端托管）
    - **Self-Hosted**（自托管/自己搭建）
- **API Token (of a Base)（某个 Base 的 API 令牌）**：在 SeaTable 中生成一个 **Base-Token**，路径为：基础（Base）选项 > **Advanced（高级）** > **API Token**。
    - 为你的令牌选择 **Read-Write（读写）** 权限。
    - 更多信息请参阅 [创建 API 令牌](https://seatable.io/en/docs/seatable-api/erzeugen-eines-api-tokens/)。
- **Timezone（时区）**：选择你的 SeaTable 服务器所在的时区。
