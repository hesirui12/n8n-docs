---
title: DeepSeek Chat Model 节点文档
description: >-
  了解如何在 n8n 中使用 DeepSeek Chat Model 节点。阅读技术文档，把
  DeepSeek Chat Model 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: DeepSeek Chat Model 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatdeepseek.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatdeepseek
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatdeepseek
layout:
  description:
    visible: false
---

# DeepSeek Chat Model 节点

> **大白话**：这个节点把 DeepSeek（深度求索）的大语言模型接进 n8n，给 AI Agent 当"大脑"用。DeepSeek 的模型便宜、中文能力强，是很多国内用户的性价比之选。由于 DeepSeek 接口和 OpenAI 兼容，参数也基本一样，照着 OpenAI 的用法配就行。

使用 DeepSeek Chat Model 节点，将 DeepSeek 的对话模型用于会话式 AI Agent[^1]。

在本页中，你可以找到 DeepSeek Chat Model 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/deepseek.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

### Model（模型）

选择用来生成补全内容（completion）的模型。

n8n 会从 DeepSeek 动态加载模型，你只会看到自己账号可用的模型。

## 节点选项

用这些选项进一步微调节点的行为。

### Base URL（基础 URL）

在这里输入 URL，覆盖 API 的默认地址。

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

[浏览 DeepSeek Chat Model 节点集成模板](https://n8n.io/integrations/deepseek-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

由于 DeepSeek 的 API 与 OpenAI 兼容，你可以参考 [LangChain 的 OpenAI 文档](https://js.langchain.com/docs/integrations/chat/openai/) 了解该服务的更多信息。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: AI Agent 是能够响应用户请求、做出决策并替用户完成实际任务的智能系统。它们用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
