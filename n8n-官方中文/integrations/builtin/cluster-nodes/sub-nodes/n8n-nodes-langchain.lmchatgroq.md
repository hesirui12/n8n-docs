---
title: Groq Chat Model 节点文档
description: >-
  了解如何在 n8n 中使用 Groq Chat Model 节点。阅读技术文档，把
  Groq Chat Model 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Groq Chat Model 节点文档
originalFilePath: integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgroq.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgroq
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgroq
layout:
  description:
    visible: false
---

# Groq Chat Model 节点

> **大白话**：这个节点把 Groq 的大语言模型接进 n8n。Groq 的最大卖点是**快**——它用自研的 LPU 芯片跑模型，推理速度非常快，适合对响应速度有要求的场景（比如实时对话、客服机器人）。它的模型选项会自动从 Groq API 加载，填好密钥就能用。

使用 Groq Chat Model 节点，访问 Groq 的大语言模型，用于对话式 AI 和文本生成任务。

在本页中，你可以找到 Groq Chat Model 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/groq.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Model**（模型）：选择用来生成补全内容的模型。n8n 会从 Groq API 动态加载可用模型。更多信息请看 [Groq 模型文档](https://console.groq.com/docs/models)。

## 节点选项

* **Maximum Number of Tokens**（最大 Token 数）：输入使用的最大 token 数量，用来设置补全内容的长度。
* **Sampling Temperature**（采样温度）：用这个选项控制采样过程的随机性。温度越高，输出越多样，但幻觉风险也越高。

## 模板与示例

[浏览 Groq Chat Model 节点集成模板](https://n8n.io/integrations/groq-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [Groq 的 API 文档](https://console.groq.com/docs/quickstart)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
