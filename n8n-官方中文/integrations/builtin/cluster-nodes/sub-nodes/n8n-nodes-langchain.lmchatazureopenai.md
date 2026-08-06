---
title: Azure OpenAI Chat Model 节点文档
description: >-
  了解如何在 n8n 中使用 Azure OpenAI Chat Model 节点。阅读技术文档，把
  Azure OpenAI Chat Model 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Azure OpenAI Chat Model 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatazureopenai.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatazureopenai
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatazureopenai
layout:
  description:
    visible: false
---

# Azure OpenAI Chat Model 节点

> **大白话**：这个节点把微软 Azure 上托管的 OpenAI 模型接进来，给 AI Agent 当"大脑"。功能上跟你直接用 OpenAI 差不多，区别是走 Azure 的企业通道——数据不出企业合规边界，适合公司项目、已在用 Azure 或需要国内/欧洲合规的场景。

使用 Azure OpenAI Chat Model 节点，把 OpenAI 的聊天模型接入对话式智能体[^1]。

在本页中，你可以找到 Azure OpenAI Chat Model 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/azureopenai.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Model**（模型）：选择用来生成补全内容的模型。

## 节点选项

* **Frequency Penalty**（频率惩罚）：控制模型重复自己的概率。数值越高，模型越不容易重复说过的话。
* **Maximum Number of Tokens**（最大 token 数）：输入使用的最大 token 数，用来限制回复的长度。
* **Response Format**（响应格式）：选择 **Text**（文本）或 **JSON**。选 **JSON** 可以确保模型返回合法的 JSON。
* **Presence Penalty**（存在惩罚）：控制模型谈论新话题的概率。数值越高，模型越容易聊新话题。
* **Sampling Temperature**（采样温度）：控制采样过程的随机性。温度越高，输出越多样，但也更容易产生幻觉。
* **Timeout**（超时时间）：输入请求允许的最大时间（毫秒）。
* **Max Retries**（最大重试次数）：输入请求失败后的最大重试次数。
* **Top P**：设置补全内容应该使用的概率范围。数值调低，就会忽略概率较低的选项，输出更保守。

## 代理限制（Proxy limitations）

该节点不支持 [`NO_PROXY` 环境变量](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/deployment)。

## 模板与示例

[浏览 Azure OpenAI Chat Model 节点集成模板](https://n8n.io/integrations/azure-openai-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Azure OpenAI 文档](https://js.langchain.com/docs/integrations/chat/azure)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: AI 智能体（AI agents）是能够响应用户请求、做决策并替用户执行真实世界任务的人工智能系统。它们用大语言模型（LLMs）来理解用户输入，并根据手头掌握的信息和资源，决定如何最好地处理请求。
