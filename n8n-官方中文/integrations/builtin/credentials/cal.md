---
title: Cal.com 凭证
description: >-
  Cal.com 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Cal.com（开源预约工具）的身份。
contentType:
  - integration
  - reference
nodeTitle: Cal.com credentials
originalFilePath: integrations/builtin/credentials/cal.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/cal'
url: 'https://docs.n8n.io/integrations/builtin/credentials/cal'
layout:
  description:
    visible: false
---

# Cal.com 凭证

> 大白话：Cal.com 是开源版「预约工具」（类似 Calendly，让别人挑时间和你开会）。n8n 想监听「有人预约了」这类事件，需要一把 API Key（钥匙）和 Host（服务器地址）。用官方云版就填默认地址，自己搭建的就填自己的地址。

这些凭证可以用来验证以下节点的身份：

- [Cal.com Trigger（触发器）](../trigger-nodes/n8n-nodes-base.caltrigger.md)

## 准备工作

先注册一个 [Cal.com](https://www.cal.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Cal.com 官方 API 文档](https://cal.com/docs/enterprise-features/api#api-server-specifications)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：如何生成，请参考 [Cal API 快速入门文档](https://cal.com/docs/enterprise-features/api/quick-start)。
- 一个 **Host（服务器地址）**：如果你用的是 Cal.com 云端版，保持默认的 `https://api.cal.com` 即可；如果你是自己搭建的 Cal.com，填写你自己实例的 **Host（服务器地址）**。
