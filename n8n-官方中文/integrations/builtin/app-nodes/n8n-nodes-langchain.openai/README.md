---
title: OpenAI 节点文档
description: >-
  学习如何在 n8n 中使用 OpenAI 节点。按照技术文档将
  OpenAI 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: critical
search:
  boost: 3
nodeTitle: n8n-nodes-langchain.openai
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-langchain.openai/index.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：OpenAI 节点是 n8n 里调用 ChatGPT 系列能力的入口，也是最常用的 AI 节点。它能干的事很多：文字对话（Chat Completions 或新的 Responses API）、看图分析、生成/编辑图片、生成语音、把录音转成文字（转写）、翻译录音、上传/列出/删除文件、生成视频（Sora）、管理对话（Conversation）等。新版（V2，n8n 1.117.0 起）支持 OpenAI 的 Responses API，旧版的 Assistant 操作将被逐步淘汰。本页是总览，各操作的详细说明在下面的子页面里。
{% endhint %}

# OpenAI 节点

使用 OpenAI 节点来自动化你在 OpenAI 中的工作，并把它与其它应用集成。n8n 内置支持 OpenAI 的多种功能，包括创建图片和智能助手（assistants），以及与模型聊天。

在本页你可以看到 OpenAI 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**旧版本节点说明**

从版本 1.29.0 起，OpenAI 节点取代了原来的 OpenAI assistant 节点。
n8n 版本 1.117.0 引入了支持 OpenAI Responses API 的 V2 版 OpenAI 节点，并移除了对[即将弃用的 Assistants API](https://platform.openai.com/docs/assistants/migration) 的支持。
{% endhint %}

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [OpenAI 凭证](../../credentials/openai.md)。
{% endhint %}

## 操作

- **Text（文本）**
	- [**生成聊天补全**](text-operations.md#generate-a-chat-completion)
	- [**生成模型响应**](text-operations.md#generate-a-model-response)
	- [**违规内容分类**](text-operations.md#classify-text-for-violations)
- **Image（图片）**
	- [**分析图片**](image-operations.md#analyze-image)
	- [**生成图片**](image-operations.md#generate-an-image)
	- [**编辑图片**](image-operations.md#edit-an-image)
- **Audio（音频）**
	- [**生成音频**](audio-operations.md#generate-audio)
	- [**转写录音**](audio-operations.md#transcribe-a-recording)
	- [**翻译录音**](audio-operations.md#translate-a-recording)
- **File（文件）**
	- [**删除文件**](file-operations.md#delete-a-file)
	- [**列出文件**](file-operations.md#list-files)
	- [**上传文件**](file-operations.md#upload-a-file)
- **Video（视频）**
	- [**生成视频**](video-operations.md#generate-video)
- **Conversation（对话）**
	- [**创建对话**](conversation-operations.md#create-a-conversation)
	- [**获取对话**](conversation-operations.md#get-a-conversation)
	- [**更新对话**](conversation-operations.md#update-a-conversation)
	- [**删除对话**](conversation-operations.md#remove-a-conversation)

## 模板与示例

[浏览 n8n-nodes-langchain.openai 的集成模板](https://n8n.io/integrations/openai)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [OpenAI 的文档](https://beta.openai.com/docs/introduction)。

关于 assistant 的工作原理，请参考 [OpenAI 的 assistant 文档](https://platform.openai.com/docs/assistants/how-it-works/objects)。

关于处理限流（rate limits）的问题，请参考[处理限流](../../handle-rate-limits.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}

## 在 OpenAI 节点中使用工具（Tools）

有些操作允许你连接工具。[工具](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/understand-ai-components/how-tools-work)就像是你的 AI 的插件，可以用来获取额外的上下文或资源。

选择 **Tools** 连接器即可浏览可用工具并添加它们。

一旦你添加了工具连接，OpenAI 节点就变成了[根节点](#user-content-fn-1)[^1]，可以与工具子节点组成[集群节点](#user-content-fn-2)[^2][^3]。关于集群节点和根节点的更多信息，请参见[节点类型](../../node-types.md#cluster-nodes)。

### 支持工具连接器的操作

- **Text（文本）**
	- [**生成聊天补全**](text-operations.md#generate-a-chat-completion)
	- [**生成模型响应**](text-operations.md#generate-a-model-response)

## 常见问题

关于常见问题、报错及建议的解决方案，请参考[常见问题](common-issues.md)。

[^1]: 每个 n8n 集群节点包含一个定义集群主要功能的根节点。一个或多个子节点连接到根节点以扩展其功能。
[^2]: 在 n8n 中，集群节点是一组协同工作以在工作流中提供功能的节点。它们由一个根节点和一个或多个扩展节点功能的子节点组成。
[^3]: n8n 集群节点由一个或多个连接到根节点的子节点组成。子节点扩展根节点的功能，提供对特定服务或资源的访问，或提供特定类型的专用处理，例如计算器功能。
