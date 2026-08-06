---
title: Pinecone 凭证
description: >-
  Pinecone 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Pinecone 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Pinecone credentials
originalFilePath: integrations/builtin/credentials/pinecone.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/pinecone'
url: 'https://docs.n8n.io/integrations/builtin/credentials/pinecone'
layout:
  description:
    visible: false
---

# Pinecone 凭证

{% hint style="info" %}
**大白话**：Pinecone 是「向量数据库」服务，专门用来存 AI 的向量数据、做相似度检索（配合 RAG 用）。n8n 连它只需要一把 **API Key（API 密钥）**，去 Pinecone 控制台选中项目后，在「API Keys」里复制即可。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Pinecone Vector Store（向量存储）](../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorepinecone.md)

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Pinecone 官方文档](https://docs.pinecone.io/reference/api/introduction)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key（API 密钥）

要配置这个凭证，你需要一个 [Pinecone](https://www.pinecone.io/) 账号，还需要：

- 一个 **API Key（API 密钥）**

获取 API key 的步骤：

1. 打开你的 [Pinecone 控制台](https://app.pinecone.io/organizations/-/projects)。
2. 选中你想为其创建 API key 的项目。如果你还没有任何项目，先创建一个。更多说明请参考 Pinecone 的[快速入门](https://docs.pinecone.io/guides/get-started/quickstart)。
3. 进入 **API Keys（API 密钥）**。
4. 复制里面显示的 API Key，填进你的 n8n 凭证里。

更多说明请参考 Pinecone 的 API [身份验证文档](https://docs.pinecone.io/guides/get-started/authentication)。
