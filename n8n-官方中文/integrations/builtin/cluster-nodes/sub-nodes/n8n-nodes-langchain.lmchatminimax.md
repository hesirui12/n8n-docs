---
title: MiniMax Chat Model 节点文档
description: >-
  了解如何在 n8n 中使用 MiniMax Chat Model 节点。阅读技术文档，把
  MiniMax Chat Model 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: MiniMax Chat Model 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatminimax.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatminimax
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatminimax
layout:
  description:
    visible: false
---

# MiniMax Chat Model 节点

> **大白话**：这个节点把 MiniMax（稀宇科技）的对话大模型接进 n8n，给 AI Agent 当"大脑"。MiniMax 支持多模态，中文能力也不错。有个比较实用的开关叫 **Hide Thinking**（隐藏思考）：默认开启，会帮你把模型输出里的 `<think>` 思考标签去掉；如果你想把模型的推理过程也一起输出，关掉它就行。

使用 MiniMax Chat Model 节点，将 MiniMax 的对话模型用于会话式 AI Agent[^1]。

在本页中，你可以找到 MiniMax Chat Model 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/minimax.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Model**（模型）：选择生成补全内容的模型。可用模型请参考 [MiniMax 的模型文档](https://platform.minimax.io/docs/guides/models-intro)。

## 节点选项

* **Hide Thinking**（隐藏思考）：开启时（默认开启），节点会从模型响应中去掉 `<think>` 标签。关闭它，把模型的推理内容包含在输出里。
* **Maximum Number of Tokens**（最大 Token 数）：输入使用的最大 token 数量，用来设置补全内容的长度。
* **Sampling Temperature**（采样温度）：用这个选项控制采样过程的随机性。温度越高，输出越多样，但幻觉风险也越高。
* **Timeout**（超时时间）：输入最大请求时间，单位毫秒。
* **Max Retries**（最大重试次数）：输入请求失败后的最大重试次数。
* **Top P**：用这个选项设置补全内容应该使用的概率。用更低的数值可以忽略那些不太可能被选中的选项。

## 模板与示例

[浏览 MiniMax Chat Model 节点集成模板](https://n8n.io/integrations/minimax-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [MiniMax 的文档](https://platform.minimax.io/docs/guides/models-intro)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: AI Agent 是能够响应用户请求、做出决策并替用户完成实际任务的智能系统。它们用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
