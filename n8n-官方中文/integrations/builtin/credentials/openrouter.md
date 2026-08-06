---
title: OpenRouter 凭证
description: >-
  OpenRouter 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  OpenRouter 的身份。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: OpenRouter credentials
originalFilePath: integrations/builtin/credentials/openrouter.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/openrouter'
url: 'https://docs.n8n.io/integrations/builtin/credentials/openrouter'
layout:
  description:
    visible: false
---

# OpenRouter 凭证

{% hint style="info" %}
**大白话**：OpenRouter 是一个「AI 模型中转站」——它把各家 AI 模型（GPT、Claude、Llama 等）的接口统一成一个入口，一个 key 就能调所有模型，不用每家各办一个账号。n8n 连它只需要一把 **API Key（API 密钥）**，注册后在「keys」页面生成即可。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Chat OpenRouter（聊天）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenrouter.md)

## 准备工作

注册一个 [OpenRouter](https://openrouter.ai/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [OpenRouter 官方 API 文档](https://openrouter.ai/docs/quick-start)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API Key（API 密钥）**

生成 API Key 的步骤：

1. 登录你的 OpenRouter 账号，或者先[注册](https://openrouter.ai/)一个账号。
2. 打开你的 [API keys（API 密钥）](https://openrouter.ai/keys) 页面。
3. 点击 **Create new secret key（新建私密密钥）** 来创建 API key，可以顺便给这个 key 起个名字。
4. 复制这个 key，填到 n8n 的 **API Key** 字段里。

更多说明请参考 [OpenRouter 快速入门](https://openrouter.ai/docs/quick-start) 页面。
