---
title: UptimeRobot 凭证
description: >-
  UptimeRobot 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 UptimeRobot 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: UptimeRobot credentials
originalFilePath: integrations/builtin/credentials/uptimerobot.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/uptimerobot'
url: 'https://docs.n8n.io/integrations/builtin/credentials/uptimerobot'
layout:
  description:
    visible: false
---

# UptimeRobot 凭证

> **大白话**：UptimeRobot 是网站/服务监控工具。去「我的设置 > API 设置」创建一个 Main API Key（主密钥）填进 n8n 就行。注意 API Key 分三种，n8n 节点要跑全部功能建议用 Main 那种。

你可以使用这些凭证对以下节点进行身份验证：

- [UptimeRobot](../app-nodes/n8n-nodes-base.uptimerobot.md)

## 前置条件

创建一个 [UptimeRobot](https://uptimerobot.com/) 账户。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

更多关于该服务的信息，请参考 [UptimeRobot 的 API 文档](https://uptimerobot.com/api/)。

## 使用 API key

要配置此凭证，你需要：

- **API Key**：从 **My Settings > API Settings**（我的设置 > API 设置）获取你的 API Key。创建一个 **Main API Key**（主 API 密钥），填入 n8n 凭证。

### API key 类型

UptimeRobot 支持三种 API key 类型：

- **Account-specific**（账户专用，也称为 **main** 主密钥）：可获取多个监控项的数据。
- **Monitor-specific**（监控项专用）：只获取单个监控项的数据。
- **Read-only**（只读）：只能执行 `GET` API 调用。

要完成 UptimeRobot 节点中的全部操作，请使用 **Main** 或 **Account-specific** API key 类型。更多信息请参考 [API authentication](https://uptimerobot.com/api/#auth)。
