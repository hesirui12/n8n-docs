---
title: OpenRouter Chat Model 节点文档
description: >-
  了解如何在 n8n 中使用 OpenRouter Chat Model 节点。阅读技术文档，把
  OpenRouter Chat Model 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: OpenRouter Chat Model 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenrouter.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenrouter
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenrouter
layout:
  description:
    visible: false
---

# OpenRouter Chat Model 节点

> **大白话**：OpenRouter 是一个"模型聚合平台"——一个 API 能调几百种模型（GPT、Claude、Llama、DeepSeek 等），按量付费，还能自动切换低价模型省成本。这个节点就是通过 OpenRouter 给 AI Agent 当"大脑"。因为 OpenRouter 接口兼容 OpenAI，所以参数和用法跟 OpenAI 节点几乎一样。模型列表会自动从 OpenRouter 加载。

使用 OpenRouter Chat Model 节点，将 OpenRouter 的对话模型用于会话式 AI Agent。

在本页中，你可以找到 OpenRouter Chat Model 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/openrouter.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

### Model（模型）

选择用来生成补全内容的模型。

n8n 会从 OpenRouter 动态加载模型，你只会看到自己账号可用的模型。

## 节点选项

用这些选项进一步微调节点的行为。

### Frequency Penalty（频率惩罚）

用这个选项控制模型重复自己的概率。数值越高，模型越不容易原样重复。

### Maximum Number of Tokens（最大 Token 数）

输入使用的最大 token 数量，用来设置补全内容的长度。

### Response Format（响应格式）

选择 **Text**（文本）或 **JSON**。**JSON** 可以确保模型返回合法有效的 JSON。

### Presence Penalty（存在惩罚）

用这个选项控制模型讨论新话题的概率。数值越高，模型越可能去聊新话题。

### Sampling Temperature（采样温度）

用这个选项控制采样过程的随机性。温度越高，输出越多样，但幻觉风险也越高。

### Timeout（超时时间）

输入最大请求时间，单位毫秒。

### Max Retries（最大重试次数）

输入请求失败后的最大重试次数。

### Top P

用这个选项设置补全内容应该使用的概率。用更低的数值可以忽略那些不太可能被选中的选项。

## 模板与示例

[浏览 OpenRouter Chat Model 节点集成模板](https://n8n.io/integrations/openrouter-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

由于 OpenRouter 的 API 与 OpenAI 兼容，你可以参考 [LangChain 的 OpenAI 文档](https://js.langchain.com/docs/integrations/chat/openai/) 了解该服务的更多信息。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
