---
title: OpenAI Chat Model 节点文档
contentType:
  - integration
  - reference
priority: high
nodeTitle: n8n-nodes-langchain.lmchatopenai
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenai/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenai
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenai
description: >-
  了解如何在 n8n 中使用 OpenAI Chat Model 节点。阅读技术文档，把
  OpenAI Chat Model 节点集成到你的工作流中。
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

# OpenAI Chat Model 节点

> **大白话**：这是 n8n 里最常用的 AI 节点——把 OpenAI 的模型（GPT 系列）接进来给 AI Agent 当"大脑"。它支持两种 API：老的 **Chat Completions**（需要你自己管对话历史）和新的 **Responses API**（Agent 循环，一个请求里能调多个内置工具、能记对话）。如果你是搭新项目，OpenAI 官方推荐用 Responses API。内置工具（联网搜索、文件搜索、代码解释器）只能在 AI Agent 节点下用，Basic LLM Chain 用不了。

使用 OpenAI Chat Model 节点，将 OpenAI 的对话模型用于会话式 AI Agent[^1]。

在本页中，你可以找到 OpenAI Chat Model 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../../credentials/openai.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

### Model（模型）

选择用来生成补全内容的模型。

n8n 会从 OpenAI 动态加载模型，你只会看到自己账号可用的模型。

### Use Responses API（使用 Responses API）

OpenAI 提供了两个用于生成模型输出的端点：

* **Chat Completions**：Chat Completions API 根据构成一段对话的消息列表生成模型响应。这个 API 需要你自己手动维护对话状态，比如加一个 [Simple Memory](../n8n-nodes-langchain.memorybufferwindow/README.md) 子节点来记聊天记录。对于新项目，OpenAI 推荐使用 Responses API。
* **Responses**：Responses API 是一个 Agent 循环（agentic loop），允许模型在**一次 API 请求内**调用多个内置工具。它还支持通过传入 `conversation_id` 实现持久对话。

想用 Responses API 生成输出，就打开 **Use Responses API** 开关。否则，OpenAI Chat Model 节点默认使用 Chat Completions API。

关于两种 API 的对比，请参考 OpenAI 文档：[Chat Completions 与 Responses API 对比](https://platform.openai.com/docs/guides/migrate-to-responses)。

### Built-in Tools（内置工具）

OpenAI Responses API 提供了一系列[内置工具](https://platform.openai.com/docs/guides/tools)，用来丰富模型的响应。想让模型能使用下面这些内置工具，请打开 **Use Responses API** 开关：

* **Web Search**（联网搜索）：允许模型在生成响应前先上网搜索最新信息。
* **File Search**（文件搜索）：允许模型在你之前上传的文件里搜索知识库，在生成响应前查找相关信息。更多信息请参考 [OpenAI 文档](https://platform.openai.com/docs/guides/tools-file-search)。
* **Code Interpreter**（代码解释器）：允许模型在沙盒环境里编写并运行 Python 代码。

{% hint style="info" %}
**与 AI Agent 节点配合使用**

内置工具只有在 OpenAI Chat Model 节点搭配 **AI Agent** 节点使用时才支持。比如搭配 Basic LLM Chain 节点时，内置工具不可用。
{% endhint %}

## 节点选项

用这些选项进一步微调节点的行为。下面的选项无论你是否用 Responses API 生成模型输出都可用。

### Frequency Penalty（频率惩罚）

用这个选项控制模型重复自己的概率。数值越高，模型越不容易原样重复。

### Maximum Number of Tokens（最大 Token 数）

输入使用的最大 token 数量，用来设置补全内容的长度。

### Presence Penalty（存在惩罚）

用这个选项控制模型讨论新话题的概率。数值越高，模型越可能去聊新话题。

### Sampling Temperature（采样温度）

用这个选项控制采样过程的随机性。温度越高，输出越多样，但幻觉风险也越高。

### Timeout（超时时间）

输入最大请求时间，单位毫秒。

### Max Retries（最大重试次数）

输入请求失败后的最大重试次数。

### Top P

用这个选项设置补全内容应该使用的概率。用更低的数值可以忽略那些不太可能被选中的选项。

## 额外节点选项（仅限 Responses API）

打开 **Use Responses API** 开关后，还可以使用下面这些额外选项。

### Conversation ID（会话 ID）

这个响应所属的会话。该响应完成后，本次响应的输入项和输出项会自动添加到这个会话里。

### Prompt Cache Key（提示词缓存键）

用这个键来缓存相似的请求，优化缓存命中率。

### Safety Identifier（安全标识符）

应用一个标识符，用来跟踪可能违反使用政策的用户。

### Service Tier（服务等级）

选择符合你需求的服务等级：Auto（自动）、Flex（灵活）、Default（默认）或 Priority（优先）。

### Metadata（元数据）

一组键值对，用来存储结构化信息。一个对象最多可以附加 16 对，适合添加自定义数据，供 API 或控制台搜索使用。

### Top Logprobs

定义一个 0 到 20 之间的整数，指定在每个 token 位置返回多少个最可能的 token，每个都带对应的对数概率（log probability）。

### Output Format（输出格式）

选择响应格式：Text（文本）、JSON Schema 或 JSON Object（JSON 对象）。如果你希望收到 JSON 格式的数据，推荐使用 JSON Schema。

### Prompt（提示词）

配置提示词，里面包含唯一 ID、版本和可替换的变量。提示词是通过 OpenAI 控制台配置的。

## 模板与示例

[浏览 n8n-nodes-langchain.lmchatopenai 集成模板](https://n8n.io/integrations/openai-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 OpenAI 文档](https://js.langchain.com/docs/integrations/chat/openai/)。

关于这些参数的更多信息，请参考 [OpenAI 文档](https://platform.openai.com/docs/api-reference/responses/create)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 常见问题（Common issues）

关于常见问题、错误及建议的解决方案，请参考[常见问题](common-issues.md)。

[^1]: AI Agent 是能够响应用户请求、做出决策并替用户完成实际任务的智能系统。它们用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
