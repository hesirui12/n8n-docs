---
title: Basic LLM Chain 节点文档
description: >-
  学习如何在 n8n 中使用 Basic LLM Chain 节点。按照技术文档把 Basic LLM Chain 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Basic LLM Chain node documentation
originalFilePath: integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm
layout:
  description:
    visible: false
---

# Basic LLM Chain 节点（基础大语言模型链）

{% hint style="info" %}
**大白话**：Basic LLM Chain 节点是「最简单的一条 AI 流程」：你设置一句提示词（Prompt），连上一个聊天模型，它就把模型的回答返回给你。不像 AI Agent 会自己调用工具，这个节点就是个「问一句、答一句」的直通管道。你还可以给它接一个输出解析器（Output Parser）来规范返回的格式。
{% endhint %}

使用 Basic LLM Chain 节点来设置模型要使用的提示词（Prompt），也可以为响应设置一个可选的解析器（parser）。

在这个页面上，你可以找到 Basic LLM Chain 节点的节点参数，以及更多资源的链接。

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [Basic LLM Chain 集成页面](https://n8n.io/integrations/basic-llm-chain/)。
{% endhint %}

## 节点参数（Node parameters）

### Prompt（提示词）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Ss9Y6clfLTwlXMx69w6E/" %}

### Require Specific Output Format（要求特定输出格式）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/IsHMhvgDA3Ok5qdqnHnJ/" %}

## 聊天消息（Chat Messages）

当你使用聊天模型（chat model）时，用 **Chat Messages（聊天消息）** 来设置一条消息。

如果你没有连接聊天模型，n8n 会忽略这些选项。选择你希望节点使用的 **Type Name or ID（类型名称或 ID）**：

#### AI

在 **Message（消息）** 字段中输入一个示例期望响应。模型会尝试在它的回复中用同样的方式回应。

#### System（系统）

输入一条系统 **Message（消息）**，让它随用户输入一起发给模型，帮助引导模型应该做什么。

可以用这个选项来定义语气，例如：`Always respond talking like a pirate`（总是像海盗一样说话）。

#### User（用户）

输入一条示例用户输入。和 AI 选项一起使用可以改善智能体的输出。两者一起使用相当于给模型提供了一组「输入示例 + 期望响应（**AI Message**）」的样本，让模型照着学。

选择以下输入类型之一：

* **Text（文本）**：以文本 **Message（消息）** 形式输入示例用户输入。
* **Image (Binary)（图片-二进制）**：选择上一个节点的二进制输入。输入 **Image Data Field Name（图片数据字段名）** 来指定上一个节点中哪个二进制字段包含图片数据。
* **Image (URL)（图片-链接）**：用这个选项从 URL 传入图片。输入 **Image URL（图片链接）**。

对于两种 **Image（图片）** 类型，都要选择 **Image Details（图片细节）** 来控制模型如何处理图片以及如何生成对图片的文字理解。可选值：

* **Auto（自动）**：模型使用自动设置，根据图片输入的大小来决定使用 Low（低）还是 High（高）设置。
* **Low（低）**：模型接收一张低分辨率（512px × 512px）的图片，并只用 65 个 token 的预算来表示这张图片。这样 API 响应更快、消耗的输入 token 更少。适合不需要高细节的场景。
* **High（高）**：模型可以先访问低分辨率图片，然后根据输入图片的尺寸，把图片切成多个 512px 见方的详细小块。每个详细小块使用两倍的 token 预算（65 × 2 = 129 个 token）。适合需要高细节的场景。

## 模板和示例（Templates and examples）

[浏览 Basic LLM Chain 节点文档集成模板](https://n8n.io/integrations/basic-llm-chain) 或[搜索全部模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [LangChain 的 Basic LLM Chains 文档](https://js.langchain.com/docs/tutorials/llm_chain/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 常见问题（Common issues）

以下是 Basic LLM Chain 节点的一些常见错误和问题，以及解决或排查步骤。

### 未指定提示词错误（No prompt specified）

当 **Prompt（提示词）** 为空或无效时，会显示这个错误。

你可能会在以下两种场景中遇到它：

1. 你把 **Prompt** 设置成了 **Define below（在下方定义）**，但 **Text（文本）** 字段里什么都没填。
    * 解决办法：在 **Text（文本）** 字段中输入一个有效的提示词。
2. 你把 **Prompt** 设置成了 **Connected Chat Trigger Node（连接聊天触发器节点）**，而传入的数据里没有名为 `chatInput` 的字段。
    * 节点期望收到 `chatInput` 字段。如果你的上一个节点没有这个字段，请添加一个 [Edit Fields (Set)（编辑字段）](../../core-nodes/n8n-nodes-base.set.md) 节点，把传入字段名改成 `chatInput`。
