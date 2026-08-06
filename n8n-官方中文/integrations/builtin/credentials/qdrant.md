---
title: Qdrant 凭证
description: >-
  Qdrant 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Qdrant 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Qdrant credentials
originalFilePath: integrations/builtin/credentials/qdrant.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/qdrant'
url: 'https://docs.n8n.io/integrations/builtin/credentials/qdrant'
layout:
  description:
    visible: false
---

# Qdrant 凭证

{% hint style="info" %}
**大白话**：Qdrant 是一个「向量数据库」，专给 AI 应用存「向量」用（比如把文档切块转成向量存进去，方便后面做相似度搜索）。n8n 连它只需要两样东西：一个 Qdrant 集群，以及它的 **API Key（API 密钥）** 和 **Qdrant URL（集群地址）**——去 Qdrant 云控制台里创建一个密钥，把密钥和集群地址填进 n8n 就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Qdrant Vector Store（向量存储）](../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreqdrant.md)

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Qdrant 官方文档](https://qdrant.tech/documentation/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key（API 密钥）

要配置这个凭证，你需要一个 [Qdrant 集群](https://qdrant.tech/documentation/cloud/create-cluster/)，以及：

- **API Key（API 密钥）**
- **Qdrant URL（Qdrant 集群地址）**

配置步骤如下：

1. 前往 [Cloud Dashboard（云控制台）](https://qdrant.to/cloud)。
2. 选择 **Access Management（访问管理）** 查看可用的 API 密钥（也可以进入 **Cluster detail（集群详情）** 页面的 **API Keys** 区域）。
3. 选择 **Create（创建）**。
4. 在下拉列表中选择该密钥可以访问的集群。
5. 选择 **OK（确定）**。
6. 复制 API Key，填入你的 n8n 凭证。
7. 在 **Qdrant URL** 里填写你的 Qdrant 集群地址。更多说明请参考 [Qdrant Web UI](https://qdrant.tech/documentation/interfaces/web-ui/) 文档。

关于如何创建和使用 API 密钥的更多说明，请参考 [Qdrant 的认证文档](https://qdrant.tech/documentation/cloud/authentication/)。
