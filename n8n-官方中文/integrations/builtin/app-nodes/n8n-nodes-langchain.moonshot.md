---
title: Moonshot Kimi 节点文档
contentType:
  - integration
  - reference
nodeTitle: Moonshot Kimi 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-langchain.moonshot.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.moonshot
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.moonshot
description: >-
  Moonshot Kimi 节点让你在 n8n 中与 Moonshot Kimi AI 模型交互。
  本文档说明如何使用该节点的操作向模型发送消息、附加
  图片，以及分析图片。
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

{% hint style="info" %}
**大白话**：Moonshot Kimi（月之暗面的 Kimi）是国产大模型。这个节点让你在 n8n 里调用 Kimi：1）文字对话——发消息给 Kimi 并接收回复，支持角色消息（user/assistant）、系统消息、附加图片，还能开启「思考模式」（思维链）或「联网搜索」；2）分析图片——上传图片让 Kimi 看图回答问题。适合做客服问答、图文分析、内容总结等流程。注意：思考模式和联网搜索不能同时开。
{% endhint %}

# Moonshot Kimi

Moonshot Kimi 节点把 n8n 工作流连接到 Moonshot Kimi AI 模型。你可以用它发送提示词并接收模型回复、给消息附加图片，或者用图片分析模型来分析图片。

{% hint style="info" %}
**凭证（Credentials）**

关于此节点的认证信息，请参考[这里](../credentials/moonshot.md)。
{% endhint %}

## 资源与操作

* **Analyze image（分析图片）**：分析图片并回答关于图片的问题。
* **Message a model（给模型发消息）**：向 Moonshot Kimi 模型发送基于文本的消息并接收回复（支持附件、系统消息，以及思考模式和联网搜索等高级选项）。

### 分析图片

分析一张图片并回答关于它的问题。

**参数（Parameters）**

* **Model**（类型：resourceLocator，字段：`modelId`）：选择用于分析的 Moonshot Kimi 模型。
* **Text Input**（类型：string，字段：`text`）：随图片一起发送的提示词或问题。默认值：`What's in this image?`
* **Input Data Field Name(s)**（类型：string，字段：`binaryPropertyName`）：包含图片的二进制字段名。提供多个字段时用逗号分隔。默认值：`data`
* **Simplify Output**（类型：boolean，字段：`simplify`）：启用时，节点返回简化版的响应，而不是完整的原始 API 响应。默认值：`true`

**选项（Options）**

* **Maximum Number of Tokens**（类型：number，字段：`maxTokens`）：token 越少，图片描述越短、细节越少。默认值：`1024`

### 给模型发消息

向 Moonshot Kimi 模型发送一条或多条消息并接收回复。支持基于角色的消息（user/assistant）、附件、系统消息和高级生成选项。

**参数（Parameters）**

* **Model**（类型：resourceLocator，字段：`modelId`）：选择要发消息的 Moonshot Kimi 模型。
* **Messages**（类型：fixedCollection，字段：`messages`）：构成对话提示词的一条或多条消息。
  * content（类型：string）：消息的文本内容。（显示名称：Prompt）
  * role（类型：options）：消息的角色，例如 `user` 或 `assistant`，用于指导模型如何回复。
* **Add Attachments**（类型：boolean，字段：`addAttachments`）：是否给消息附加图片。默认值：`false`
* **Attachment Input Data Field Name(s)**（类型：string，字段：`binaryPropertyName`）：包含要附加的图片的二进制字段名。多个字段用逗号分隔。默认值：`data`
* **Simplify Output**（类型：boolean，字段：`simplify`）：启用时，节点返回简化版的响应，而不是原始 API 输出。默认值：`true`

**选项（Options）**

* **Frequency Penalty**（类型：number，字段：`frequencyPenalty`）：正值会惩罚文本中已出现过的 token，减少重复。默认值：`0`
* **Include Merged Response**（类型：boolean，字段：`includeMergedResponse`）：返回一个把模型回复的所有文本部分合并起来的单一输出字符串。默认值：`false`
* **Maximum Number of Tokens**（类型：number，字段：`maxTokens`）：为补全生成的最大 token 数。默认值：`1024`
* **Max Tool Calls Iterations**（类型：number，字段：`maxToolsIterations`）：LLM 在停止前最多运行的工具迭代轮数。一轮迭代可包含多次工具调用。设为 `0` 表示不限制。默认值：`15`
* **Output Randomness (Temperature)**（类型：number，字段：`temperature`）：控制输出的随机性。值越低，输出越确定。默认值：`0.7`
* **Output Randomness (Top P)**（类型：number，字段：`topP`）：采样时考虑的最大累计概率。默认值：`1`
* **Presence Penalty**（类型：number，字段：`presencePenalty`）：正值会根据 token 是否已在此前的文本中出现过进行惩罚，鼓励讨论新话题。默认值：`0`
* **Response Format**（类型：options，字段：`responseFormat`）：返回响应的格式，例如 `text`。
* **System Message**（类型：string，字段：`system`）：指导模型整体行为和语气的系统级指令。
* **Thinking Mode**（类型：boolean，字段：`thinkingMode`）：启用时，模型会以思维链风格包含推理步骤。它不能与 **Web Search**（联网搜索）同时使用。默认值：`false`
* **Web Search**（类型：boolean，字段：`webSearch`）：启用时，模型会执行内置联网搜索以获取最新信息。它不能与 **Thinking Mode**（思考模式）同时使用。默认值：`false`

## 模板与示例

[浏览 Moonshot Kimi 节点的官方集成模板](https://n8n.io/integrations/moonshot-kimi)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Moonshot Kimi 文档](https://platform.kimi.ai/docs/overview)。
