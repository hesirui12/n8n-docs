---
title: DeepSeek 凭证
description: >-
  DeepSeek 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  DeepSeek 的身份。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: DeepSeek credentials
originalFilePath: integrations/builtin/credentials/deepseek.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/deepseek'
url: 'https://docs.n8n.io/integrations/builtin/credentials/deepseek'
layout:
  description:
    visible: false
---

# DeepSeek 凭证

> **大白话**：DeepSeek 是国产大模型服务商。n8n 里的 Chat DeepSeek 节点（AI 对话用）就靠它。操作很简单：去 DeepSeek 开放平台注册账号，在 API keys 页面点「创建密钥」，把复制出来的钥匙填进 n8n 凭证即可。

这些凭证可以用来验证以下节点的身份：

- [Chat DeepSeek](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatdeepseek.md)

## 准备工作（Prerequisites）

先注册一个 [DeepSeek](https://platform.deepseek.com/sign_up) 账号。

## 支持的验证方式（Supported authentication methods）

- API key（API 密钥）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [DeepSeek 的 API 文档](https://api-docs.deepseek.com/api/deepseek-api)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- **API Key**

生成 API Key 的步骤：

1. 登录你的 DeepSeek 账号，或者[注册](https://platform.deepseek.com/sign_up)一个账号。
2. 打开你的 [API keys](https://platform.deepseek.com/api_keys) 页面。
3. 选择 **Create new secret key**（创建密钥）来生成 API 密钥（可以给密钥命名）。
4. 复制密钥，在 n8n 中填为 **API Key**。

更多信息请参考[你的第一次 API 调用（Your First API Call）](https://api-docs.deepseek.com/)页面。
