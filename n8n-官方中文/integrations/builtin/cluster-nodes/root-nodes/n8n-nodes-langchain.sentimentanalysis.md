---
title: Sentiment Analysis 节点文档
description: >-
  学习如何在 n8n 中使用 Sentiment Analysis 节点。按照技术文档把 Sentiment Analysis 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Sentiment Analysis node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.sentimentanalysis.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.sentimentanalysis
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.sentimentanalysis
layout:
  description:
    visible: false
---

# Sentiment Analysis 节点（情感分析）

{% hint style="info" %}
**大白话**：Sentiment Analysis 节点用来判断一段文字的情绪——默认分成「正面（Positive）、中性（Neutral）、负面（Negative）」。比如把用户评论喂进去，它会自动告诉你这条评论是好评还是差评，还能顺便给出情绪强度和置信度。适合做舆情监控、客服工单分类等。
{% endhint %}

使用 Sentiment Analysis 节点来分析传入文本数据的情感倾向。

语言模型使用节点选项中的 [**Sentiment Categories（情感类别）**](#node-options) 来确定每一项数据的情感。

## 节点参数（Node parameters）

* **Text to Analyze（要分析的文本）** 定义用于情感分析的输入文本。这是一个引用输入项（input items）中某个字段的表达式。例如，如果输入来自聊天或消息源，可以写成 `{{ $json.chatInput }}`。默认情况下，它期望一个 `text` 字段。

## 节点选项（Node options）

* **Sentiment Categories（情感类别）**：定义你希望把输入划分成的类别。
    * 默认是 `Positive, Neutral, Negative`（正面、中性、负面）。你可以自定义这些类别以适应你的具体场景，例如用 `Very Positive, Positive, Neutral, Negative, Very Negative`（非常正面、正面、中性、负面、非常负面）做更细致的分析。
* **Include Detailed Results（包含详细结果）**：开启后，输出中会包含情感强度和置信度分数。注意：这些分数是语言模型生成的估算值，只是粗略的指标，不是精确的测量。
* **System Prompt Template（系统提示词模板）**：使用这个选项来更改用于情感分析的系统提示词。它使用 `{categories}` 占位符来表示类别。
* **Enable Auto-Fixing（启用自动修复）**：启用后，节点会自动修复模型输出，确保它们符合期望的格式。做法是把结构解析错误发给 LLM，让它自己修正。

## 使用说明（Usage Notes）

### 模型温度设置（Model Temperature Setting）

强烈建议把所连接语言模型的 temperature（温度）设置为 0 或接近 0 的值。这有助于确保结果尽可能确定，让多次运行的情感分析结果更一致、更可靠。

### 语言方面的考虑（Language Considerations）

节点的表现可能会因输入文本的语言而异。

为了获得最佳效果，请确保你选择的语言模型支持输入语言。

### 处理大量数据（Processing Large Volumes）

当分析大量文本时，考虑把输入拆分成更小的块，以优化处理时间和资源使用。

### 迭代优化（Iterative Refinement）

对于复杂的情感分析任务，你可能需要迭代地优化系统提示词和类别，才能达到理想的结果。

## 使用示例（Example Usage）

### 基础情感分析（Basic Sentiment Analysis）

1. 把数据源（例如 RSS Feed、HTTP Request）连接到 Sentiment Analysis 节点。
2. 把「Text to Analyze」字段设置成相关项属性（例如博客文章内容用 `{{ $json.content }}`）。
3. 保持默认的情感类别。
4. 把节点的输出连接到不同的分支，分别处理正面、中性和负面情感。

### 自定义类别分析（Custom Category Analysis）

1. 把 **Sentiment Categories（情感类别）** 改成 `Excited, Happy, Neutral, Disappointed, Angry`（兴奋、开心、中性、失望、生气）。
2. 调整你的工作流来处理这五个输出类别。
3. 用这套配置来分析客户反馈，获得更细腻的情绪分类。

## 相关资源（Related resources）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
