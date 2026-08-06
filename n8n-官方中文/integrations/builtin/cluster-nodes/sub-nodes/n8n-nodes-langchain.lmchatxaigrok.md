---
title: xAI Grok Chat Model 节点文档
description: >-
  了解如何在 n8n 中使用 xAI Grok Chat Model 节点。阅读技术文档，把
  xAI Grok Chat Model 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: xAI Grok Chat Model 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatxaigrok.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatxaigrok
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatxaigrok
layout:
  description:
    visible: false
---

# xAI Grok Chat Model 节点

> **大白话**：这个节点把马斯克旗下 xAI 的 Grok 大模型接进 n8n，用于对话式 AI 和文本生成。Grok 的风格比较直白、会"整活"，最新模型还支持很长的上下文（最高 32,768 tokens）。配置很简单：填好 xAI 的 API 密钥，选个模型就行。

使用 xAI Grok Chat Model 节点，访问 xAI Grok 的大语言模型，用于对话式 AI 和文本生成任务。

在本页中，你可以找到 xAI Grok Chat Model 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/xai.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Model**（模型）：选择生成补全内容的模型。n8n 会从 xAI Grok API 动态加载可用模型。更多信息请看 [xAI Grok 模型文档](https://docs.x.ai/docs/models)。

## 节点选项

* **Frequency Penalty**（频率惩罚）：用这个选项控制模型重复自己的概率。数值越高，模型越不容易原样重复。
* **Maximum Number of Tokens**（最大 Token 数）：输入使用的最大 token 数量，用来设置补全内容的长度。大多数模型的上下文长度为 2048 tokens，最新的模型最高支持 32,768 tokens。
* **Response Format**（响应格式）：选择 **Text**（文本）或 **JSON**。**JSON** 可以确保模型返回合法有效的 JSON。
* **Presence Penalty**（存在惩罚）：用这个选项控制模型讨论新话题的概率。数值越高，模型越可能去聊新话题。
* **Sampling Temperature**（采样温度）：用这个选项控制采样过程的随机性。温度越高，输出越多样，但幻觉风险也越高。
* **Timeout**（超时时间）：输入最大请求时间，单位毫秒。
* **Max Retries**（最大重试次数）：输入请求失败后的最大重试次数。
* **Top P**：用这个选项设置补全内容应该使用的概率。用更低的数值可以忽略那些不太可能被选中的选项。

## 模板与示例

[浏览 xAI Grok Chat Model 节点集成模板](https://n8n.io/integrations/xai-grok-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [xAI Grok 的 API 文档](https://docs.x.ai/docs/api-reference)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
