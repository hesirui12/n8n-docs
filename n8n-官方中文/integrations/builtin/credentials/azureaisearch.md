---
title: Azure AI Search 凭证
description: >-
  Azure AI Search 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Azure AI Search 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Azure AI Search credentials
originalFilePath: integrations/builtin/credentials/azureaisearch.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/azureaisearch'
url: 'https://docs.n8n.io/integrations/builtin/credentials/azureaisearch'
layout:
  description:
    visible: false
---

# Azure AI Search 凭证

{% hint style="info" %}
**大白话**：Azure AI Search 是微软云上的「全文搜索 + 向量搜索」服务，常被 AI 应用用来做知识库检索。n8n 连它要填两样：服务的 **Endpoint（地址，URL）** 和 **API Key（API 密钥）**，都在 Azure Portal（Azure 门户）里能找到。注意：管理密钥（Admin key）能读写，查询密钥（Query key）只能读，按需选择。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Azure AI Search Vector Store（向量存储）](../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreazureaisearch.md)

## 准备工作

- 一个 [Azure 订阅](https://azure.microsoft.com)
- 在 [Azure Portal](https://portal.azure.com/) 里创建好的 Azure AI Search 服务

## 支持的验证方式

这个节点使用 API key 验证。

## 相关资源

关于该服务的更多信息，请参考 [Azure AI Search 官方文档](https://learn.microsoft.com/azure/search/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- **Endpoint（端点）**：你的 Azure AI Search 服务的 URL（格式：`https://your-service.search.windows.net`）
- **API Key（API 密钥）**：管理密钥（Admin key，可读写）或查询密钥（Query key，只读）

获取这些值的步骤：

1. 在 [Azure Portal](https://portal.azure.com/) 里进入你的 Azure AI Search 服务
2. 从 **Overview（概览）** 部分复制 **URL**
3. 进入 **Settings（设置）> Keys（密钥）**，复制：
   - 需要完整的读写权限就复制 **Admin key（管理密钥）**，或
   - 只做只读查询就复制 **Query key（查询密钥）**
4. 把这些值填进 n8n

{% hint style="info" %}
**API key 权限说明**

管理密钥（Admin keys）提供完整权限，包括创建和删除索引。查询密钥（Query keys）只提供只读权限。请根据你的工作流需求选择。
{% endhint %}

## 故障排查

### 身份验证错误

**API key 身份验证失败**：
- 确认 API key 是否正确，以及是否在 Azure Portal 里被重新生成过
- 确认写操作（插入/更新）用的是管理密钥
- 检查密钥是否过期或被轮换

### 连接问题

- 确认端点 URL 格式正确：`https://your-service.search.windows.net`
- 确认你的 Azure AI Search 服务正在运行
- 检查网络安全规则和防火墙设置，确保允许从你的 n8n 实例访问
