---
title: Cohere Model 节点文档
contentType:
  - integration
  - reference
nodeTitle: Cohere Model 节点文档
originalFilePath: integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmcohere.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmcohere
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmcohere
description: >-
  了解如何在 n8n 中使用 Cohere Model 节点。阅读技术文档，把
  Cohere Model 节点集成到你的工作流中。
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

# Cohere Model 节点

> **大白话**：这个节点用来调用 Cohere 的文本生成模型（区别于前面的 Cohere Chat Model——这个是传统的 LLM 补全接口，不叫"对话模型"）。**重要提醒**：这个节点不支持工具调用，所以它**不能配 AI Agent 节点**用，只能配 [Basic LLM Chain](../root-nodes/n8n-nodes-langchain.chainllm.md) 这种普通链。

使用 Cohere Model 节点来调用 Cohere 的模型。

在本页中，你可以找到 Cohere Model 节点的参数，以及更多资源链接。

这个节点不支持工具（tools），所以它不能配合 [AI Agent](../root-nodes/n8n-nodes-langchain.agent/README.md) 节点使用。请把它连接到 [Basic LLM Chain](../root-nodes/n8n-nodes-langchain.chainllm.md) 节点上。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/cohere.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点选项

* **Maximum Number of Tokens**（最大 Token 数）：输入使用的最大 token 数量，用来设置补全内容的长度。
* **Sampling Temperature**（采样温度）：用这个选项控制采样过程的随机性。温度越高，输出越多样，但幻觉风险也越高。

## 模板与示例

[浏览 Cohere Model 节点集成模板](https://n8n.io/integrations/cohere-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Cohere 文档](https://js.langchain.com/docs/integrations/llms/cohere/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
