---
title: Azure Cosmos DB 凭证
description: >-
  Azure Cosmos DB 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Azure Cosmos DB 的身份。
contentType:
  - integration
  - reference
nodeTitle: Azure Cosmos DB credentials
originalFilePath: integrations/builtin/credentials/azurecosmosdb.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/azurecosmosdb'
url: 'https://docs.n8n.io/integrations/builtin/credentials/azurecosmosdb'
layout:
  description:
    visible: false
---

# Azure Cosmos DB 凭证

{% hint style="info" %}
**大白话**：Azure Cosmos DB 是微软云上的「全球分布式数据库」（高可用、低延迟）。n8n 连它需要填三样：**Account（账号名）**、**Key（密钥）**、**Database（数据库名）**。密钥在 Azure 门户里对应数据库的 **Overview > Keys** 页面，两把主密钥随便用哪把都行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Azure Cosmos DB](../app-nodes/n8n-nodes-base.azurecosmosdb.md)

## 准备工作

- 创建 [Azure](https://azure.microsoft.com) 订阅。
- 创建 [Azure Cosmos DB 账号](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-manage-database-account)。

## 支持的验证方式

- API Key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Azure Cosmos DB 官方 API 文档](https://learn.microsoft.com/en-us/rest/api/cosmos-db/)。

## 使用 API Key（API 密钥）

要配置这个凭证，你需要准备：

- **Account（账号）**：你的 Azure Cosmos DB 账号名称。
- **Key（密钥）**：你的 Azure Cosmos DB 账号的密钥。在 Azure 门户中你的 Azure Cosmos DB 里选择 **Overview（概览）> Keys（密钥）** 即可查看。两把账号密钥随便用哪把都行。
- **Database（数据库）**：要连接的 Azure Cosmos DB 数据库名称。

更详细的操作步骤请参考 [获取你的主密钥 | Microsoft](https://learn.microsoft.com/en-us/previous-versions/azure/cosmos-db/how-to-obtain-keys?tabs=azure-portal)。

## 常见问题

以下是 Azure Cosmos DB 凭证已知的常见错误和问题。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/fXYywkPyzPTxeGOEnYgb/" %}
