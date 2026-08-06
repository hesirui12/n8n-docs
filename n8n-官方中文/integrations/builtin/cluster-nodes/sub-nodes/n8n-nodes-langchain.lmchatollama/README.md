---
title: Ollama Chat Model 节点文档
description: >-
  了解如何在 n8n 中使用 Ollama Chat Model 节点。阅读技术文档，把
  Ollama Chat Model 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: n8n-nodes-langchain.lmchatollama
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatollama/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatollama
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatollama
layout:
  description:
    visible: false
---

# Ollama Chat Model 节点

> **大白话**：这个节点让你用 Ollama 在本地跑的大模型（比如 Llama 2）给 AI Agent 当"大脑"。数据完全不出本机，隐私最好、还免费，就是吃电脑配置。配置很简单：装好 Ollama，在凭据里填上地址（默认 `http://localhost:11434`），选个模型就行。如果 Ollama 跑在 Docker 里，注意容器之间不能直接通过 `localhost` 互通，底下"常见问题"里讲得很清楚。

使用 Ollama Chat Model 节点，把本地运行的 Llama 2 等模型用于会话式 AI Agent[^1]。

在本页中，你可以找到 Ollama Chat Model 节点的参数，以及更多资源链接。

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

[浏览 n8n-nodes-langchain.lmchatollama 集成模板](https://n8n.io/integrations/ollama-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Ollama Chat Model 文档](https://js.langchain.com/docs/integrations/chat/ollama/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 常见问题（Common issues）

关于常见问题、错误及建议的解决方案，请参考[常见问题](common-issues.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/dN5Se1JVH7wYGtmN4n0v/" %}

[^1]: AI Agent 是能够响应用户请求、做出决策并替用户完成实际任务的智能系统。它们用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
