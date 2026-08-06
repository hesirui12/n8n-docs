---
title: Moonshot Kimi Chat Model 节点文档
contentType:
  - integration
  - reference
nodeTitle: Moonshot Kimi Chat Model 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmoonshot.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmoonshot
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmoonshot
description: >-
  把 Moonshot Kimi Chat Model 集成到 n8n 工作流中，为 AI 链生成聊天回复。
  常见用途包括生成对话式回复、集成到 LangChain 风格的工作流中，以及
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

# Moonshot Kimi Chat Model 节点

> **大白话**：这个节点把月之暗面的 Kimi 大模型接进 n8n，向 Kimi 聊天 API 发请求、拿回复。Kimi 长文本处理能力强，适合做客服助手、多步 AI 链、内容生成这些场景。默认模型是 `kimi-k2.5`，可以在参数里换，还能调温度、惩罚等生成参数。

使用 Moonshot Kimi Chat Model 节点，向 Kimi 聊天 API 发送聊天请求并生成对话式回复。当你的工作流里需要一个 AI 聊天模型时就用它。例如，你可以用它驱动助手、搭建多步 AI 链，或者用可调的采样和 token 设置来生成由模型驱动的内容。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/moonshot.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 操作（Operations）

### Generate chat response（生成聊天回复）

向选定的 Kimi 模型发送聊天请求，并返回模型的响应。

**参数（Parameters）**

* **Model** (type: options, field: `model`)：负责生成补全内容的模型。默认值：`kimi-k2.5`。更多信息请看 [Moonshot Kimi Chat API 文档](https://platform.kimi.ai/docs/api/chat)。

**选项（Options）**

* **Frequency Penalty** (type: number, field: `frequencyPenalty`)：正值会根据 token 已有的出现频率进行惩罚，让模型少重复。默认值：`0`。
* **Maximum number of tokens** (type: number, field: `maxTokens`)：补全内容中最多生成的 token 数。设为 `-1` 使用模型默认值。token 上限取决于所选模型。默认值：`-1`。
* **Response format** (type: options, field: `responseFormat`)：模型响应的格式。默认值：`text`。
* **Presence penalty** (type: number, field: `presencePenalty`)：正值会根据 token 是否已经出现在文本中来惩罚，从而提高模型讨论新话题的可能性。默认值：`0`。
* **Sampling temperature** (type: number, field: `temperature`)：控制随机性。数值越低输出越不随机；接近 0 时模型几乎变成确定性输出。默认值：`0.7`。
* **Timeout** (type: number, field: `timeout`)：单个请求允许的最大耗时，单位毫秒。默认值：360000（六分钟）。
* **Max retries** (type: number, field: `maxRetries`)：请求失败后最多重试的次数。默认值：两次。
* **Top P** (type: number, field: `topP`)：核采样（nucleus sampling）参数，控制多样性。0.5 意味着模型只考虑按概率加权后前一半的选项。我们建议只调 **Top P** 或 **Sampling Temperature** 其中一个，不要两个都调。默认值：`1`。

## 模板与示例

[浏览 Moonshot Kimi Chat Model 节点集成模板](https://n8n.io/integrations/moonshot-kimi-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务及可用模型选项的更多信息，请参考 [Moonshot Kimi Chat Model 的文档](https://platform.kimi.ai/docs/api/chat)。
