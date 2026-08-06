---
title: Vector Store Question Answer Tool 节点文档
description: >-
  了解如何在 n8n 中使用 Vector Store Question Answer Tool 节点。阅读技术文档，把
  Vector Store Question Answer Tool 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Vector Store Question Answer Tool 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolvectorstore.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolvectorstore
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolvectorstore
layout:
  description:
    visible: false
---

# Vector Store Question Answer Tool 节点

> **大白话**：这是 RAG 的"封装版工具"——让 Agent 直接基于[向量存储](#user-content-fn-3)[^3]里的内容**总结并回答问题**，不用自己拼检索链。两个参数：**Description of Data**（给大模型描述库里装了什么数据，帮它判断什么时候该用）和 **Limit**（最多返回几条）。**提醒**：节点名称里别用特殊字符，否则 Agent 跑起来会报错！

Vector Store Question Answer 节点是一个工具[^1]，允许 Agent[^2] 根据[向量存储](#user-content-fn-3)[^3]里的分块来总结结果并回答问题。

在本页中，你可以找到 Vector Store Question Answer 节点的参数，以及更多资源链接。

{% hint style="info" %}
**示例和模板**

关于使用示例和帮助你上手的模板，请参考 n8n 的 [Vector Store Question Answer Tool 集成](https://n8n.io/integrations/vector-store-tool/) 页面。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

### Description of Data（数据描述）

输入向量存储中数据的描述。

### Limit（限制）

最多返回的结果数量。

## n8n 如何生成工具描述

n8n 用节点名称（点名称可以编辑）和 **Description of Data** 参数，按下面的格式生成给 AI Agent 用的工具描述：

> Useful for when you need to answer questions about [节点名称]. Whenever you need information about [数据描述], you should ALWAYS use this. Input should be a fully formed question.
> （适合需要回答关于 [节点名称] 的问题时使用。每当需要关于 [数据描述] 的信息时，你应该始终使用它。输入应该是一个完整的问句。）

节点名称里的空格在工具描述中会转换成下划线。

{% hint style="warning" %}
**避免在节点名称里使用特殊字符**

节点名称里使用特殊字符会导致 Agent 运行时出错：

![model errors from special characters](../../../.gitbook/assets/name-characters-error.png)

节点名称里只能使用字母数字、空格、短横线和下划线。
{% endhint %}

## 相关资源

在 n8n 网站上看[示例工作流和相关内容](https://n8n.io/integrations/vector-store-tool/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Yl56nEscwQQAbBUeWfvp/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: 在 AI 语境里，工具（tool）是 AI 在响应请求时可以引用的附加资源，用来获取特定信息或功能。AI 模型可以用工具与外部系统交互，或完成特定的、聚焦的任务。
[^2]: AI Agent 是能够响应用户请求、做出决策并替用户完成实际任务的智能系统。它们用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
[^3]: 向量存储（vector store，也叫向量数据库）存储信息的数学表示。配合 embeddings（嵌入）和检索器（retrievers）使用，可以创建一个 AI 在回答问题时能访问的数据库。
