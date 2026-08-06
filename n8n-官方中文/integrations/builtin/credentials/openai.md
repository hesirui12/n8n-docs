---
title: OpenAI 凭证
description: >-
  OpenAI 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  OpenAI 的身份。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: OpenAI credentials
originalFilePath: integrations/builtin/credentials/openai.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/openai
url: https://docs.n8n.io/integrations/builtin/credentials/openai
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# OpenAI 凭证

{% hint style="info" %}
**大白话**：OpenAI 就是 ChatGPT 背后的公司。n8n 想调用 GPT 等模型，只需要一把 **API Key（API 密钥）**——去 platform.openai.com 注册账号，在「API keys」页面生成一个「secret key」（私密密钥），复制粘贴到 n8n 里就能用了。如果账号属于多个组织，还要填 **Organization ID（组织 ID）**；只有一个组织的话可以不填。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [OpenAI](../app-nodes/n8n-nodes-langchain.openai/README.md)
* [Chat OpenAI（聊天）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenai/README.md)
* [Embeddings OpenAI（向量化）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsopenai.md)
* [LM OpenAI](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenai/README.md)

## 准备工作

注册一个 [OpenAI](https://platform.openai.com/signup/) 账号。

## 支持的验证方式

* API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [OpenAI 官方 API 文档](https://platform.openai.com/docs/introduction)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

* 一个 **API Key（API 密钥）**
* 一个 **Organization ID（组织 ID）**：只有当你属于多个组织时才需要填；否则留空即可。

生成 API Key 的步骤：

1. 登录你的 OpenAI 账号，或者先[注册](https://platform.openai.com/signup/)一个账号。
2. 打开你的 [API keys（API 密钥）](https://platform.openai.com/api-keys) 页面。
3. 点击 **Create new secret key（新建私密密钥）** 来创建 API key，可以顺便给这个 key 起个名字。
4. 复制这个 key，填到 n8n 的 **API Key** 字段里。

更多说明请参考 [API 快速入门：账号设置文档](https://platform.openai.com/docs/quickstart/account-setup)。

查找 Organization ID 的步骤：

1. 打开你的 [Organization Settings（组织设置）](https://platform.openai.com/account/organization) 页面。
2. 复制你的 Organization ID，填到 n8n 的 **Organization ID** 字段里。

更多说明请参考 [设置你的组织](https://platform.openai.com/docs/guides/production-best-practices/setting-up-your-organization)。注意：使用 Organization ID 发起的 API 请求，会算进该组织的订阅额度里。
