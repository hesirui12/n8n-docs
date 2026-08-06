---
title: Qwen Cloud Chat Model 节点文档
contentType:
  - integration
  - reference
nodeTitle: Qwen Cloud Chat Model 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatalibabacloud.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatalibabacloud
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatalibabacloud
description: >-
  Qwen Cloud Chat Model 节点向 Qwen Cloud 上可用的对话模型发送提示词
  （用于高级 AI 链）。本页说明如何在 n8n 工作流中配置该节点，并介绍常见用法
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

# Qwen Cloud Chat Model

> **大白话**：这个节点把你的提示词发给阿里云百炼（Qwen Cloud）上的通义千问系列模型，让模型返回对话式的回答。它是给 AI Agent 这类高级 AI 链配"大脑"用的：选好模型后，你可以自己调节各种生成参数（温度、惩罚、重试次数、超时等）。国内用户想用千问大模型做自动化，选它就对了。

Qwen Cloud Chat Model 节点向 Qwen Cloud 上可用的对话模型发送聊天提示词，用于高级 AI 链和 LangChain 集成。你可以用它生成对话式回复、把模型输出接入工作流，或者用自定义的采样（sampling）、重试和超时设置来运行提示词。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/alibaba.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 操作（Operations）

### Generate chat response（生成聊天回复）

从选定的 Qwen Cloud 模型生成聊天风格的回复。

**参数（Parameters）**

* **Model** (type: _options_, field: `model`)：负责生成补全内容（completion）的模型。想了解 Qwen Cloud 上有哪些模型可用：[选择模型](https://docs.qwencloud.com/developer-guides/getting-started/model-selection)。

**选项（Options）**

* **Frequency Penalty** (type: _number_, field: `frequencyPenalty`)：频率惩罚。正值会惩罚"之前已经频繁出现"的新 token，从而降低模型原样重复同一句话的概率。默认值：`0`。
* **Maximum Number of Tokens** (type: _number_, field: `maxTokens`)：生成内容的最大 token 数。上限取决于所选模型；设为 -1 则使用模型自身的默认上限。默认值：`-1`。
* **Response Format** (type: _options_, field: `responseFormat`)：节点返回的输出格式，例如纯文本或结构化格式。默认：text。
* **Presence Penalty** (type: _number_, field: `presencePenalty`)：存在惩罚。正值会惩罚"是否在已有文本中出现过"的新 token，从而提高模型讨论新话题的可能性。默认值：`0`。
* **Sampling Temperature** (type: _number_, field: `temperature`)：采样温度。控制随机性：数值越低输出越稳定，接近 0 时几乎是确定性的。默认值：`0.7`。
* **Timeout** (type: _number_, field: `timeout`)：请求在被中止前允许的最大时间（毫秒）。默认值：`360000`。
* **Max Retries** (type: _number_, field: `maxRetries`)：请求失败后的最大重试次数。默认值：`2`。
* **Top P** (type: _number_, field: `topP`)：核采样（nucleus sampling）参数，控制多样性。0.5 意味着只考虑概率质量的前一半。调整 **Top P** 或 **Sampling Temperature** 其中一个即可，不要两个都调。默认值：`1`。

## 模板与示例

[浏览 Qwen Cloud Chat Model 节点集成模板](https://n8n.io/integrations/alibaba-cloud-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

想了解可用模型及其能力，请参考[选择模型](https://docs.qwencloud.com/developer-guides/getting-started/model-selection)。
