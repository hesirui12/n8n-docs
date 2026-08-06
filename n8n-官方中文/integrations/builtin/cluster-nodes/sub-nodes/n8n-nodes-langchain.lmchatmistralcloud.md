---
title: Mistral Cloud Chat Model 节点文档
description: >-
  了解如何在 n8n 中使用 Mistral Cloud Chat Model 节点。阅读技术文档，把
  Mistral Cloud Chat Model 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Mistral Cloud Chat Model 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmistralcloud.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmistralcloud
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmistralcloud
layout:
  description:
    visible: false
---

# Mistral Cloud Chat Model 节点

> **大白话**：这个节点把 Mistral 云端的大语言模型接进 n8n，给 AI Agent 当"大脑"。Mistral 是法国团队做的大模型，欧洲用户和企业场景用得多。它有个 **Enable Safe Mode**（安全模式）开关，开启后会在生成内容前面自动加一段安全提示词，防止模型输出不当内容；还有 **Random Seed**（随机种子）可以固定随机性，让结果可复现。

使用 Mistral Cloud Chat Model 节点，将 Mistral Cloud 的对话模型与会话式 AI Agent[^1] 结合使用。

在本页中，你可以找到 Mistral Cloud Chat Model 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/mistral.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Model**（模型）：选择用来生成补全内容的模型。n8n 会从 Mistral Cloud 动态加载模型，你只会看到自己账号可用的模型。

## 节点选项

* **Maximum Number of Tokens**（最大 Token 数）：输入使用的最大 token 数量，用来设置补全内容的长度。
* **Sampling Temperature**（采样温度）：用这个选项控制采样过程的随机性。温度越高，输出越多样，但幻觉风险也越高。
* **Timeout**（超时时间）：输入最大请求时间，单位毫秒。
* **Max Retries**（最大重试次数）：输入请求失败后的最大重试次数。
* **Top P**：用这个选项设置补全内容应该使用的概率。用更低的数值可以忽略那些不太可能被选中的选项。
* **Enable Safe Mode**（启用安全模式）：开启安全模式，会在补全内容开头注入一段安全提示词。这有助于防止模型生成冒犯性内容。
* **Random Seed**（随机种子）：输入一个种子值用于随机采样。设置后，不同的调用会产生确定性的结果（即结果可复现）。

## 模板与示例

[浏览 Mistral Cloud Chat Model 节点集成模板](https://n8n.io/integrations/mistral-cloud-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Mistral 文档](https://js.langchain.com/docs/integrations/chat/mistral)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: AI Agent 是能够响应用户请求、做出决策并替用户完成实际任务的智能系统。它们用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
