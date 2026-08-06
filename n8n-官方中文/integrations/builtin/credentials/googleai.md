---
title: Google Gemini(PaLM) 凭证
description: >-
  Google Gemini(PaLM) 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Google Gemini 和 Google PaLM AI 节点的身份。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Google Gemini(PaLM) credentials
originalFilePath: integrations/builtin/credentials/googleai.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/googleai'
url: 'https://docs.n8n.io/integrations/builtin/credentials/googleai'
layout:
  description:
    visible: false
---

# Google Gemini(PaLM) 凭证

{% hint style="info" %}
**大白话**：Gemini 和 PaLM 是 Google 的 AI 大模型。n8n 里那些「聊天模型、文本嵌入」节点要用上它们，只需要填一个 **API Key（API 密钥）**。这个密钥去 Google AI Studio 官网点一下「Create API Key」就能免费生成，然后填回 n8n。API 地址默认用官方的 `https://generativelanguage.googleapis.com`，目前还不支持改自定义地址。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Embeddings Google Gemini](../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsgooglegemini.md)
- [Google Gemini](../app-nodes/n8n-nodes-langchain.googlegemini.md)
- [Google Gemini Chat Model](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglegemini.md)
- [Embeddings Google PaLM](../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsgooglepalm.md)

## 准备工作

- 创建一个 [Google Cloud](https://cloud.google.com/) 账号。
- 创建一个 [Google Cloud Platform 项目](https://developers.google.com/workspace/marketplace/create-gcp-project)。

## 支持的验证方式

- Gemini(PaLM) API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Google Gemini API 文档](https://ai.google.dev/gemini-api/docs)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 Gemini(PaLM) API key（API 密钥）

要配置这个凭证，你需要准备：

- API **Host（主机）** URL：PaLM 和 Gemini 都使用默认的 `https://generativelanguage.googleapis.com`。
- 一个 **API Key（API 密钥）**：在 [Google AI Studio](https://aistudio.google.com/apikey) 里创建一个密钥。

{% hint style="warning" %}
**不支持自定义主机**

相关节点目前还不支持为 API 主机配置自定义地址或代理，必须使用 `https://generativelanguage.googleapis.com`。
{% endhint %}

创建 API key 的步骤：

1. 打开 Google AI Studio 的 API Key 页面：[https://aistudio.google.com/apikey](https://aistudio.google.com/apikey)。
2. 选择 **Create API Key（创建 API 密钥）**。
3. 你可以选择 **Create API key in new project（在新项目中创建 API 密钥）**，也可以搜索一个已有的 Google Cloud 项目来 **Create API key in existing project（在现有项目中创建 API 密钥）**。
4. 复制生成的 API key，填到你的 n8n 凭证里。
