---
title: Embeddings HuggingFace Inference 节点文档
description: >-
  了解如何在 n8n 中使用 Embeddings HuggingFace Inference 节点。阅读技术文档，把
  Embeddings HuggingFace Inference 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Embeddings HuggingFace Inference 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingshuggingfaceinference.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingshuggingfaceinference
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingshuggingfaceinference
layout:
  description:
    visible: false
---

# Embeddings HuggingFace Inference 节点

> **大白话**：这个节点调用 Hugging Face（AI 模型界的"GitHub"）上的开源模型，把一段文字变成一串数字（向量），也就是"嵌入"。因为模型是开源的，你可以选各种免费的嵌入模型，也可以连自己部署在 Hugging Face 上的推理端点。想省钱、想自己选模型、或者不想绑定某个大厂 API，就选它。

使用 Embeddings HuggingFace Inference 节点为给定的文本生成 embeddings[^1]。

在本页中，你可以找到 Embeddings HuggingFace Inference 的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/huggingface.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Model**（模型）：选择用来生成 embedding 的模型。

可用的模型请参考 [Hugging Face 模型文档](https://huggingface.co/models?other=embeddings)（已帮你过滤出 embeddings 类模型）。

## 节点选项

* **Custom Inference Endpoint**（自定义推理端点）：输入你在 HuggingFace 上部署好的模型的 URL。如果设置了这个，n8n 会忽略 **Model Name**（模型名称）。

更多信息请参考 [HuggingFace 的推理指南](https://huggingface.co/inference-endpoints)。

## 模板与示例

[浏览 Embeddings HuggingFace Inference 节点集成模板](https://n8n.io/integrations/embeddings-hugging-face-inference) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 HuggingFace Inference embeddings 文档](https://js.langchain.com/docs/integrations/text_embedding/hugging_face_inference/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: Embeddings（嵌入）是数据用向量表示的数值形式。AI 通过把数值映射到多个维度，来理解复杂数据和数据之间的关系。向量数据库（vector databases，也叫向量库）就是专门用来存储和读取这些 embeddings 的数据库。
