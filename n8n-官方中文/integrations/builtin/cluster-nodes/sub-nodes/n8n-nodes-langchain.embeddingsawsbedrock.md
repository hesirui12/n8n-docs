---
title: Embeddings AWS Bedrock 节点文档
description: >-
  了解如何在 n8n 中使用 Embeddings AWS Bedrock 节点。阅读技术文档，把
  Embeddings AWS Bedrock 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Embeddings AWS Bedrock 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsawsbedrock.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsawsbedrock
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsawsbedrock
layout:
  description:
    visible: false
---

# Embeddings AWS Bedrock 节点

> **大白话**：这个节点调用 AWS Bedrock 平台上的模型，把一段文字转换成一串数字（向量），也就是"嵌入"（embedding）。AI 靠这些向量来判断文字之间像不像，是做语义搜索、向量库、知识库问答的基础步骤。想用 AWS 的模型做这件事，就选它。

使用 Embeddings AWS Bedrock 节点为给定的文本生成 embeddings[^1]。

在本页中，你可以找到 Embeddings AWS Bedrock 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/aws.md)找到该节点的认证信息。

如果你通过[VPC 接口端点（PrivateLink）](https://docs.aws.amazon.com/bedrock/latest/userguide/vpc-interface-endpoints.html)路由 Bedrock 流量，且没有启用私有 DNS，需要在凭据里手动设置 **Bedrock Endpoint**（Bedrock 端点）和 **Bedrock Runtime Endpoint**（Bedrock 运行时端点）这两个自定义端点。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Authentication**（认证方式）：选择认证方法：
	* **AWS (IAM)**：使用 IAM 访问密钥。选择 **AWS** 凭据。
	* **AWS (Assume Role)**：临时扮演（assume）一个 IAM 角色。选择 **AWS (Assume Role)** 凭据。
* **Model**（模型）：选择用来生成 embedding 的模型。如果下拉列表是空的，可能是因为你的 IAM 角色没有 `bedrock:ListFoundationModels` 权限。此时可以把该字段切换为 **Expression**（表达式）模式，直接手动输入模型 ID。

想了解有哪些可用模型，请看 [Amazon Bedrock 文档](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html)。

## 模板与示例

[浏览 Embeddings AWS Bedrock 节点集成模板](https://n8n.io/integrations/embeddings-aws-bedrock) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于 AWS Bedrock 的更多信息，请参考 [LangChain 的 AWS Bedrock embeddings 文档](https://js.langchain.com/docs/integrations/platforms/aws/#text-embedding-models)和 [AWS Bedrock 文档](https://docs.aws.amazon.com/bedrock/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: Embeddings（嵌入）是数据用向量表示的数值形式。AI 通过把数值映射到多个维度，来理解复杂数据和数据之间的关系。向量数据库（vector databases，也叫向量库）就是专门用来存储和读取这些 embeddings 的数据库。
