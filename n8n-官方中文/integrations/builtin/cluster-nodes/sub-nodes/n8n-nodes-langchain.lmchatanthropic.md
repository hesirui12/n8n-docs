---
title: Anthropic Chat Model 节点文档
description: >-
  了解如何在 n8n 中使用 Anthropic Chat Model 节点。阅读技术文档，把
  Anthropic Chat Model 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Anthropic Chat Model 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatanthropic.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatanthropic
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatanthropic
layout:
  description:
    visible: false
---

# Anthropic Chat Model 节点

> **大白话**：这个节点把 Anthropic 家的 Claude（克劳德）系列大模型接进来，给 AI Agent 这类对话式智能体当"大脑"。Claude 以擅长长文本、写作和代码著称。你只要配好 API 密钥、选个模型，AI 助手就能用 Claude 来思考和回答问题了。

使用 Anthropic Chat Model 节点，把 Anthropic 的 Claude 系列聊天模型接入对话式智能体[^1]。

在本页中，你可以找到 Anthropic Chat Model 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/anthropic.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Model**（模型）：选择生成补全内容的模型。可选：
	* **Claude**（Claude 标准版，能力最强）
	* **Claude Instant**（Claude 快速版，响应更快、更便宜）

更多信息请看 [Anthropic 模型文档](https://docs.anthropic.com/claude/reference/selecting-a-model)。

## 节点选项

* **Maximum Number of Tokens**（最大 token 数）：输入使用的最大 token 数，用来限制回复的长度。
* **Sampling Temperature**（采样温度）：控制采样过程的随机性。温度越高，输出越多样，但也更容易"一本正经地胡说八道"（幻觉）。
* **Top K**：输入模型生成下一个 token 时要考虑的候选 token 数量。
* **Top P**：设置补全内容应该使用的概率范围。数值调低，就会忽略概率较低的选项，输出更保守。

## 模板与示例

[浏览 Anthropic Chat Model 节点集成模板](https://n8n.io/integrations/anthropic-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Anthropic 文档](https://js.langchain.com/docs/integrations/chat/anthropic/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: AI 智能体（AI agents）是能够响应用户请求、做决策并替用户执行真实世界任务的人工智能系统。它们用大语言模型（LLMs）来理解用户输入，并根据手头掌握的信息和资源，决定如何最好地处理请求。
