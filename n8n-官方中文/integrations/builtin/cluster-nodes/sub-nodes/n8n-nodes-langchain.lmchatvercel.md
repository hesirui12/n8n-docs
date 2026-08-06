---
title: Vercel AI Gateway Chat Model 节点文档
description: >-
  了解如何在 n8n 中使用 Vercel AI Gateway Chat Model 节点。阅读技术文档，把
  Vercel AI Gateway Chat Model 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Vercel AI Gateway Chat Model 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatvercel.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatvercel
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatvercel
layout:
  description:
    visible: false
---

# Vercel AI Gateway Chat Model 节点

> **大白话**：这个节点通过 Vercel 的 AI Gateway（AI 网关）来调用模型。AI Gateway 像一个"模型中转站"：统一的 API 格式、缓存、日志、失败重试这些它都帮你管了，适合公司统一管理多家模型的调用。因为它兼容 OpenAI 接口，配置方式跟 OpenAI 节点基本一样，只是凭据要填 Vercel 的。

使用 Vercel AI Gateway Chat Model 节点，将 AI Gateway 的对话模型用于会话式 AI Agent。

在本页中，你可以找到 Vercel AI Gateway Chat Model 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/vercel.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

### Model（模型）

选择用来生成补全内容的模型。

n8n 会从 AI Gateway 动态加载模型，你只会看到自己账号可用的模型。

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

[浏览 Vercel AI Gateway Chat Model 节点集成模板](https://n8n.io/integrations/vercel-ai-gateway-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

由于 Vercel AI Gateway 的 API 与 OpenAI 兼容，你可以参考 [LangChain 的 OpenAI 文档](https://js.langchain.com/docs/integrations/chat/openai/) 了解该服务的更多信息。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
