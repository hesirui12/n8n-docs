---
title: Clockify 凭证
description: >-
  Clockify 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Clockify 的身份。
contentType:
  - integration
  - reference
nodeTitle: Clockify credentials
originalFilePath: integrations/builtin/credentials/clockify.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/clockify'
url: 'https://docs.n8n.io/integrations/builtin/credentials/clockify'
layout:
  description:
    visible: false
---

# Clockify 凭证

> **大白话**：Clockify 是免费的时间追踪/工时统计工具。想让 n8n 读写你的工时数据，去你的 Clockify 个人设置里把 API Key（钥匙）复制出来，填进 n8n 凭证即可。

这些凭证可以用来验证以下节点的身份：

- [Clockify](../app-nodes/n8n-nodes-base.clockify.md)
- [Clockify Trigger](../trigger-nodes/n8n-nodes-base.clockifytrigger.md)

## 准备工作（Prerequisites）

先注册一个 [Clockify](https://www.clockify.com/) 账号。

## 支持的验证方式（Supported authentication methods）

- API key（API 密钥）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Clockify 的 API 文档](https://docs.developer.clockify.me/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- **API Key（API 密钥）**：从你的 [Clockify 个人资料设置（Profile Settings）](https://clockify.me/help/users/profile-settings) 中获取 API 密钥。
