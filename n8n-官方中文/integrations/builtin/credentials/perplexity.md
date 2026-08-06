---
title: Perplexity 凭证
description: >-
  Perplexity 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Perplexity 的身份。
contentType:
  - integration
  - reference
nodeTitle: Perplexity credentials
originalFilePath: integrations/builtin/credentials/perplexity.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/perplexity'
url: 'https://docs.n8n.io/integrations/builtin/credentials/perplexity'
layout:
  description:
    visible: false
---

# Perplexity 凭证

{% hint style="info" %}
**大白话**：Perplexity 是以「AI 搜索问答」出名的公司，也开放了 API 让程序调用它的 AI 搜索能力。n8n 连它只需要一把 **API Key（API 密钥）**，去 Perplexity 的 API 后台（docs.perplexity.ai 上有指引）生成一个，复制进 n8n 即可。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Perplexity](../app-nodes/n8n-nodes-langchain.perplexity.md)

## 支持的验证方式

* API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Perplexity 官方 API 文档](https://docs.perplexity.ai/api-reference/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要一个 [Perplexity 账号](https://www.perplexity.ai/account)，还需要：

- **一个 Perplexity API key（API 密钥）**：如何创建 Perplexity API key，请看 [Perplexity API 入门指南](https://docs.perplexity.ai/guides/getting-started)。

关于如何验证该服务身份，更多说明请参考 [Perplexity 官方 API 文档](https://docs.perplexity.ai/)。
