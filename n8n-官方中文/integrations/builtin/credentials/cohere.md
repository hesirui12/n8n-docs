---
title: Cohere 凭证
description: >-
  Cohere 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Cohere 的身份。
contentType:
  - integration
  - reference
nodeTitle: Cohere credentials
originalFilePath: integrations/builtin/credentials/cohere.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/cohere'
url: 'https://docs.n8n.io/integrations/builtin/credentials/cohere'
layout:
  description:
    visible: false
---

# Cohere 凭证

> **大白话**：Cohere 是提供大模型 API 的服务商（文本生成、聊天、向量等）。n8n 里几个 AI 节点（Chat、Embeddings、Reranker 等）都会用到它。做法很简单：注册账号后，去 Cohere 控制台的 API Keys 页面生成一把 API Key，填进 n8n 凭证即可。注意：试用版接口要有 User 或 Owner 权限，生产版接口必须要 Owner 权限。

这些凭证可以用来验证以下节点的身份：

- [Cohere](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmcohere.md)
- [Cohere Chat](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatcohere.md)
- [Reranker Cohere](../cluster-nodes/sub-nodes/n8n-nodes-langchain.rerankercohere.md)
- [Embeddings Cohere](../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingscohere.md)

## 准备工作（Prerequisites）

创建一个 [Cohere 账号](https://cohere.com/)。

你需要一个拥有以下权限的账号：

- 使用 Trial API（试用版接口）：需要 User（用户）或 Owner（所有者）权限。
- 使用 Production API（生产版接口）：需要 Owner（所有者）权限。

更多信息请参考 [Cohere 的团队与角色（Teams and Roles）文档](https://docs.cohere.com/reference/teams-and-roles)。

## 支持的验证方式（Supported authentication methods）

- API key（API 密钥）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Cohere 的文档](https://docs.cohere.com/reference/about)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- **API Key（API 密钥）**：前往 [Cohere 控制台的 API Keys 区域](https://dashboard.cohere.com/api-keys) 生成。
