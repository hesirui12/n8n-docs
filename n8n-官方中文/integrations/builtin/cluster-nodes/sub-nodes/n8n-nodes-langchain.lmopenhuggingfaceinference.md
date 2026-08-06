---
title: Hugging Face Inference Model 节点文档
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Hugging Face Inference Model 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmopenhuggingfaceinference.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmopenhuggingfaceinference
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmopenhuggingfaceinference
description: >-
  了解如何在 n8n 中使用 Hugging Face Inference Model 节点。阅读技术文档，把
  Hugging Face Inference Model 节点集成到你的工作流中。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# Hugging Face Inference Model 节点

> **大白话**：这个节点通过 Hugging Face 的推理接口调用它上面的开源大模型（不用自己部署，用人家托管的 API）。Hugging Face 有海量开源模型，适合想尝试各种模型的用户。**注意**：它不支持工具调用，所以**不能配 AI Agent 节点**，只能连 [Basic LLM Chain](../root-nodes/n8n-nodes-langchain.chainllm.md) 这类普通链。

使用 Hugging Face Inference Model 节点来调用 Hugging Face 的模型。

在本页中，你可以找到 Hugging Face Inference Model 节点的参数，以及更多资源链接。

这个节点不支持工具（tools），所以它不能配合 [AI Agent](../root-nodes/n8n-nodes-langchain.agent/README.md) 节点使用。请把它连接到 [Basic LLM Chain](../root-nodes/n8n-nodes-langchain.chainllm.md) 节点上。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/huggingface.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Model**（模型）：选择用来生成补全内容的模型。

## 节点选项

* **Custom Inference Endpoint**（自定义推理端点）：输入自定义推理端点的 URL。
* **Frequency Penalty**（频率惩罚）：用这个选项控制模型重复自己的概率。数值越高，模型越不容易原样重复。
* **Maximum Number of Tokens**（最大 Token 数）：输入使用的最大 token 数量，用来设置补全内容的长度。
* **Presence Penalty**（存在惩罚）：用这个选项控制模型讨论新话题的概率。数值越高，模型越可能去聊新话题。
* **Sampling Temperature**（采样温度）：用这个选项控制采样过程的随机性。温度越高，输出越多样，但幻觉风险也越高。
* **Top K**：输入模型在生成下一个 token 时会考虑的候选 token 数量。
* **Top P**：用这个选项设置补全内容应该使用的概率。用更低的数值可以忽略那些不太可能被选中的选项。

## 模板与示例

[浏览 Hugging Face Inference Model 节点集成模板](https://n8n.io/integrations/hugging-face-inference-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Hugging Face Inference 文档](https://js.langchain.com/docs/integrations/llms/huggingface_inference/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
