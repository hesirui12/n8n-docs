---
title: SIGNL4 凭证
description: >-
  SIGNL4 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来验证
  SIGNL4。
contentType:
  - integration
  - reference
nodeTitle: SIGNL4 凭证
originalFilePath: integrations/builtin/credentials/signl4.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/signl4'
url: 'https://docs.n8n.io/integrations/builtin/credentials/signl4'
layout:
  description:
    visible: false
---

# SIGNL4 凭证

> **大白话**：SIGNL4 是一个「手机警报」服务，系统出问题时能立刻把警报推送到你手机上（电话、短信、App 通知）。这篇文档教你怎么在 n8n 里填「团队密钥（Team Secret）」，让 n8n 能通过 Webhook 发警报。

你可以使用这些凭证来验证以下节点：

- [SIGNL4](../app-nodes/n8n-nodes-base.signl4.md)

## 前置条件

创建一个 [SIGNL4](https://www.signl4.com/) 账号。

## 支持的认证方式

- Webhook secret（Webhook 密钥）

## 相关资源

关于该服务的更多信息，请参阅 [SIGNL4 的入站 Webhook 文档](https://connect.signl4.com/webhook/docs/index.html)。

## 使用 webhook secret（Webhook 密钥）

要配置此凭证，你需要准备：

- **Team Secret（团队密钥）**：SIGNL4 会在「✅ Sign up complete（注册完成）」邮件中包含这个密钥，它位于 webhook 网址的最后部分。如果你的 webhook 网址是 `https://connect.signl4.com/webhook/helloworld`，那么你的团队密钥就是 `helloworld`。
