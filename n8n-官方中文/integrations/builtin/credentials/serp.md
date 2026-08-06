---
title: Serp 凭证
description: >-
  Serp 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来验证
  Serp。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Serp 凭证
originalFilePath: integrations/builtin/credentials/serp.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/serp'
url: 'https://docs.n8n.io/integrations/builtin/credentials/serp'
layout:
  description:
    visible: false
---

# Serp 凭证

> **大白话**：SerpApi 是一个「搜索引擎结果抓取服务」，你给它一个搜索关键词，它就帮你抓回 Google 等的搜索结果数据。在 n8n 里它常作为 AI 智能体（LangChain）的搜索工具。这篇文档教你怎么填 API 密钥。

你可以使用这些凭证来验证以下节点：

* [Serp](../cluster-nodes/sub-nodes/n8n-nodes-langchain.toolserpapi.md)

## 前置条件

先创建一个 [SerpApi](https://serpapi.com/) 账号。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参阅 [Serp 的 API 文档](https://serpapi.com/search-api)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key（API 密钥）

要配置此凭证，你需要准备：

- **API Key（API 密钥）**

获取 API 密钥的步骤：

1. 前往 **Your Account（你的账号）>** [**API Key（API 密钥）**](https://serpapi.com/manage-api-key)。
2. 复制 **Your Private API Key（你的私有 API 密钥）**，填入 n8n 凭证的 **API Key** 字段。
