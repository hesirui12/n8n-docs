---
title: Ollama Model 节点文档
contentType:
  - integration
  - reference
priority: high
nodeTitle: n8n-nodes-langchain.lmollama
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmollama/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmollama
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmollama
description: >-
  了解如何在 n8n 中使用 Ollama Model 节点。阅读技术文档，把
  Ollama Model 节点集成到你的工作流中。
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

# Ollama Model 节点

> **大白话**：这个节点让你用 Ollama 在本地跑的模型（比如 Llama 2）做文本补全，数据不出本机、完全免费。**注意**：它是"补全"类型的模型节点，不支持工具调用，所以**不能配 AI Agent 节点**，只能连 [Basic LLM Chain](../../root-nodes/n8n-nodes-langchain.chainllm.md) 这类普通链。

使用 Ollama Model 节点，调用本地运行的 Llama 2 等模型。

在本页中，你可以找到 Ollama Model 节点的参数，以及更多资源链接。

这个节点不支持工具（tools），所以它不能配合 [AI Agent](../../root-nodes/n8n-nodes-langchain.agent/README.md) 节点使用。请把它连接到 [Basic LLM Chain](../../root-nodes/n8n-nodes-langchain.chainllm.md) 节点上。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../../credentials/ollama.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Model**（模型）：选择生成补全内容的模型。可选：
  * **Llama2**
  * **Llama2 13B**
  * **Llama2 70B**
  * **Llama2 Uncensored**（无审查版）

关于可用模型的更多信息，请参考 Ollama 的 [Models Library 文档](https://ollama.com/library)。

## 节点选项

* **Sampling Temperature**（采样温度）：用这个选项控制采样过程的随机性。温度越高，输出越多样，但幻觉风险也越高。
* **Top K**：输入模型在生成下一个 token 时会考虑的候选 token 数量。
* **Top P**：用这个选项设置补全内容应该使用的概率。用更低的数值可以忽略那些不太可能被选中的选项。

## 模板与示例

[浏览 n8n-nodes-langchain.lmollama 集成模板](https://n8n.io/integrations/ollama-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Ollama 文档](https://js.langchain.com/docs/integrations/llms/ollama/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 常见问题（Common issues）

关于常见问题、错误及建议的解决方案，请参考[常见问题](common-issues.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/dN5Se1JVH7wYGtmN4n0v/" %}
