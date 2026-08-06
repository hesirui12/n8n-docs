---
title: xAI 凭证
description: >-
  xAI 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 xAI 进行身份验证。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: xAI credentials
originalFilePath: integrations/builtin/credentials/xai.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/xai'
url: 'https://docs.n8n.io/integrations/builtin/credentials/xai'
layout:
  description:
    visible: false
---

# xAI 凭证

> **大白话**：xAI 是马斯克的 AI 公司，它的 **Grok** 模型就是在这里调用。连它非常简单：注册一个 xAI 账户，然后在 [xAI 控制台的 API Keys 页面](https://console.x.ai/team/default/api-keys)创建一个 **API Key（API 密钥）**，把密钥填进 n8n 就行，没有其他花哨步骤。

你可以使用这些凭证对以下节点进行身份验证：

- [Chat xAI Grok](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatxaigrok.md)

## 前提条件

创建一个 [xAI](https://accounts.x.ai/sign-up) 账户。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [xAI 的 API 文档](https://docs.x.ai/docs/api-reference)。

## 使用 API key

要配置此凭证，你需要：

- 一个 **API Key**（API 密钥）：你可以在 [xAI Console API Keys 页面](https://console.x.ai/team/default/api-keys)创建新的 API 密钥。

更多信息请参考 [The Hitchhiker's Guide to Grok | xAI](https://docs.x.ai/docs/tutorial)。
