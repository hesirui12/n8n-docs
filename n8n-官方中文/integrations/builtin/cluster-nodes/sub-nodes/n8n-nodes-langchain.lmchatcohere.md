---
title: Cohere Chat Model 节点文档
description: >-
  了解如何在 n8n 中使用 Cohere Chat Model 节点。阅读技术文档，把
  Cohere Chat Model 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Cohere Chat Model 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatcohere.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatcohere
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatcohere
layout:
  description:
    visible: false
---

# Cohere Chat Model 节点

> **大白话**：这个节点把 Cohere 公司的大语言模型接进来，给 AI Agent 当"大脑"，也适合做文本生成任务。Cohere 的 Command 系列模型在英文理解、分类、总结上口碑不错。模型列表是自动从 Cohere API 拉取的，你只需要配好密钥选个模型就行。

使用 Cohere Chat Model 节点，访问 Cohere 的大语言模型，用于对话式 AI 和文本生成任务。

在本页中，你可以找到 Cohere Chat Model 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/cohere.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Model**（模型）：选择生成补全内容的模型。n8n 会从 Cohere API 动态加载可用的模型列表。更多信息请看 [Cohere 模型文档](https://docs.cohere.com/v2/docs/models#command)。

## 节点选项

* **Sampling Temperature**（采样温度）：控制采样过程的随机性。温度越高，输出越多样，但也更容易产生幻觉。
* **Max Retries**（最大重试次数）：输入请求失败后的最大重试次数。

## 模板与示例

[浏览 Cohere Chat Model 节点集成模板](https://n8n.io/integrations/cohere-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [Cohere 的 API 文档](https://docs.cohere.com/v2/reference/about)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
