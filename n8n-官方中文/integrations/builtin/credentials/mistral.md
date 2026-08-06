---
title: Mistral Cloud 凭证
description: >-
  Mistral Cloud 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Mistral Cloud 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Mistral Cloud credentials
originalFilePath: integrations/builtin/credentials/mistral.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/mistral'
url: 'https://docs.n8n.io/integrations/builtin/credentials/mistral'
layout:
  description:
    visible: false
---

# Mistral Cloud 凭证

{% hint style="info" %}
**大白话**：Mistral 是法国的 AI 大模型公司（类似 OpenAI），Mistral Cloud 就是它家的云服务，可以调用它家的聊天模型、做向量嵌入等。n8n 要调用这些模型，只需要一个 **API key（API 密钥）**。注意有个坑：Mistral 要求你必须在账号里**先绑定支付方式并开通付费**，才能创建和使用 API key，否则申请不到。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Mistral AI](../app-nodes/n8n-nodes-base.mistralai.md)
* [Mistral Cloud](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmistralcloud.md)
* [Embeddings Mistral Cloud](../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsmistralcloud.md)

## 准备工作

- 创建一个 [Mistral](https://mistral.ai/) La Plateforme（Mistral 官方平台）账号。
- 你必须在 **Workspace（工作区）>** [**Billing（账单）**](https://admin.mistral.ai/organization/billing) 里添加支付信息并开通支付，才能启用 API keys（API 密钥）。更多信息请参考 [Account setup（账号设置）](https://docs.mistral.ai/getting-started/quickstart/#account-setup)。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于这些 API 的更多信息，请参考 [Mistral 官方 API 文档](https://docs.mistral.ai/api/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**

等你给 Mistral Cloud 账号添加了支付信息之后：

1. 登录你的 [Mistral 账号](https://console.mistral.ai/home)。
2. 进入 **API Keys（API 密钥）** 页面。
3. 选择 **Create new key（创建新密钥）**。
4. 复制这个 API key，填到你的 n8n 凭证里。

更多信息请参考 [Account setup（账号设置）](https://docs.mistral.ai/getting-started/quickstart/#account-setup)。

{% hint style="info" %}
**需要付费账号**

Mistral 要求你先添加支付信息并开通支付，才能使用 API keys（API 密钥）。更多信息请参考上面的 [准备工作](#准备工作) 一节。
{% endhint %}
