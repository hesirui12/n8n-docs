---
title: OpenAI 文本操作
description: >-
  OpenAI 节点中文本操作的文档，适用于 n8n 这个工作流
  自动化平台。包括操作和配置的详细信息，以及
  示例和凭证信息的链接。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: OpenAI 文本操作
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-langchain.openai/text-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/text-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/text-operations
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：这一页讲 OpenAI 节点的「文本（Text）」操作，是最常用的部分，共三个操作：1）生成聊天补全（Generate a Chat Completion）——用老的 Chat Completions API 跟模型对话；2）生成模型响应（Generate a Model Response）——用新的 Responses API 跟模型对话，支持内置工具（联网搜索 Web Search、文件搜索 File Search、代码解释器 Code Interpreter、连外部 MCP 服务器）和传图片/PDF；3）违规内容分类（Classify Text for Violations）——用审核模型检查文本是否违规（如暴力、色情内容），返回 `flagged`、`categories`、`category_scores`。适合做客服机器人、内容审核、RAG 问答等流程。
{% endhint %}

# OpenAI 文本操作

使用这些操作在 OpenAI 中给模型发消息或对文本进行违规分类。关于 OpenAI 节点本身，请参考 [OpenAI](README.md)。

{% hint style="info" %}
**旧版本节点说明**

n8n 版本 1.117.0 引入了支持 OpenAI Responses API 的 OpenAI 节点 V2。它把「Message a Model」操作改名为「Generate a Chat Completion」，以明确它与 Chat Completions API 的关系，并新增了使用 Responses API 的独立操作「Generate a Model Response」。
{% endhint %}

## 生成聊天补全

使用此操作（通过 Chat Completions API）向 OpenAI 模型发送消息或提示词，并接收回复。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **Text（文本）**。
- **Operation（操作）**：选择 **Generate a Chat Completion（生成聊天补全）**。
- **Model（模型）**：选择要使用的模型。如果你不确定用哪个模型，需要高智能就试 `gpt-4o`，需要最快速度和最低成本就试 `gpt-4o-mini`。更多信息请参考 [模型概览 | OpenAI Platform](https://platform.openai.com/docs/models)。
- **Messages（消息）**：输入 **Text（文本）** 提示词并指定模型用于生成回复的 **Role（角色）**。关于如何使用这些角色写出更好的提示词，请参考 [提示词工程 | OpenAI](https://platform.openai.com/docs/guides/prompt-engineering)。从以下角色中选择：
    - **User（用户）**：以用户身份发送消息并获取模型回复。
    - **Assistant（助手）**：告诉模型采用特定的语气或人格。
    - **System（系统）**：默认没有系统消息。你可以在用户消息中定义指令，但系统消息中设置的指令更有效。每个对话可以设置多条系统消息。用它来设定模型在接下来用户消息中的行为或上下文。
- **Simplify Output（简化输出）**：打开后返回简化版的响应，而不是原始数据。
- **Output Content as JSON（输出内容为 JSON）**：打开后尝试以 JSON 格式返回响应。兼容 `GPT-4 Turbo` 以及所有比 `gpt-3.5-turbo-1106` 更新的 `GPT-3.5 Turbo` 模型。

### 选项（Options）

- **Frequency Penalty（频率惩罚）**：施加惩罚以减少模型重复类似句子的倾向。范围在 `0.0` 和 `2.0` 之间。
- **Maximum Number of Tokens（最大 token 数）**：设置响应的最大 token 数。对于标准英文文本，一个 token 大约等于四个字符。用它来限制输出的长度。
- **Number of Completions（补全数量）**：默认值 1。设置每个提示词要生成的补全数量。请谨慎使用，因为设置较高的数值会很快消耗你的 token。
- **Presence Penalty（存在惩罚）**：施加惩罚以促使模型讨论新话题。范围在 `0.0` 和 `2.0` 之间。
- **Output Randomness (Temperature)（输出随机性）**：调整响应的随机性。范围在 `0.0`（完全确定）和 `1.0`（最大随机）之间。建议只调整这个或 **Output Randomness (Top P)** 其中一个，不要两个都动。先从中间值（约 `0.7`）开始，再根据观察到的输出调整。如果回复过于重复或死板，就调高；如果太混乱或跑题，就调低。默认值 `1.0`。
- **Output Randomness (Top P)（输出随机性 Top P）**：调整 Top P 设置来控制 assistant 回复的多样性。例如 `0.5` 表示只考虑一半按概率加权的选项。建议只调整这个或 **Output Randomness (Temperature)** 其中一个，不要两个都动。默认值 `1.0`。

更多信息请参考 [Chat Completions | OpenAI](https://platform.openai.com/docs/api-reference/chat) 文档。

## 生成模型响应

使用此操作（通过 Responses API）向 OpenAI 模型发送消息或提示词，并接收回复。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **Text（文本）**。
- **Operation（操作）**：选择 **Generate a Model Response（生成模型响应）**。
- **Model（模型）**：选择要使用的模型。关于模型概览请参考 [模型概览 | OpenAI Platform](https://platform.openai.com/docs/models)。
- **Messages（消息）**：从以下 **Message Types（消息类型）** 中选择：
    - **Text（文本）**：输入 **Text（文本）** 提示词并指定模型用于生成回复的 **Role（角色）**。关于如何使用这些角色写出更好的提示词，请参考 [提示词工程 | OpenAI](https://platform.openai.com/docs/guides/prompt-engineering)。
    - **Image（图片）**：通过图片 URL、文件 ID（使用 [OpenAI Files API](https://platform.openai.com/docs/api-reference/files)）或传递工作流中前面节点的二进制数据来提供 **Image（图片）**。
    - **File（文件）**：以支持的格式（目前仅 PDF）提供 **File（文件）**，可以通过文件 URL、文件 ID（使用 [OpenAI Files API](https://platform.openai.com/docs/api-reference/files)）或传递工作流中前面节点的二进制数据。
    - 对于任何消息类型，你都可以从以下角色中选择：
        - **User（用户）**：以用户身份发送消息并获取模型回复。
        - **Assistant（助手）**：告诉模型采用特定的语气或人格。
        - **System（系统）**：默认系统消息是 `"You are a helpful assistant"`。你可以在用户消息中定义指令，但系统消息中设置的指令更有效。每个对话只能设置一条系统消息。用它来设定模型在接下来用户消息中的行为或上下文。
- **Simplify Output（简化输出）**：打开后返回简化版的响应，而不是原始数据。

### 内置工具（Built-in Tools）

OpenAI Responses API 提供一系列[内置工具](https://platform.openai.com/docs/guides/tools)来丰富模型的响应：

- **Web Search（联网搜索）**：允许模型在生成响应前搜索网络获取最新信息。
- **MCP Servers（MCP 服务器）**：允许模型连接到远程 MCP 服务器。更多关于把远程 MCP 服务器用作工具的信息请见[这里](https://platform.openai.com/docs/guides/tools-connectors-mcp)。
- **File Search（文件搜索）**：允许模型在生成响应前，从你之前上传的文件中搜索知识库获取相关信息。更多信息请参考 [OpenAI 文档](https://platform.openai.com/docs/guides/tools-file-search)。
- **Code Interpreter（代码解释器）**：允许模型在沙箱环境中编写和运行 Python 代码。

### 选项（Options）

- **Maximum Number of Tokens（最大 token 数）**：设置响应的最大 token 数。对于标准英文文本，一个 token 大约等于四个字符。用它来限制输出的长度。
- **Output Randomness (Temperature)（输出随机性）**：调整响应的随机性。范围在 `0.0`（完全确定）和 `1.0`（最大随机）之间。建议只调整这个或 **Output Randomness (Top P)** 其中一个，不要两个都动。先从中间值（约 `0.7`）开始，再根据观察到的输出调整。如果回复过于重复或死板，就调高；如果太混乱或跑题，就调低。默认值 `1.0`。
- **Output Randomness (Top P)（输出随机性 Top P）**：调整 Top P 设置来控制 assistant 回复的多样性。例如 `0.5` 表示只考虑一半按概率加权的选项。建议只调整这个或 **Output Randomness (Temperature)** 其中一个，不要两个都动。默认值 `1.0`。
- **Conversation ID**：此响应所属的对话。此响应的输入项和输出项会在响应完成后自动添加到该对话中。
- **Previous Response ID**：要从中继续的上一个响应的 ID。不能与 Conversation ID 同时使用。
- **Reasoning（推理）**：模型生成响应时应投入的推理努力级别。包括返回模型执行的推理**摘要（Summary）** 的能力（例如用于调试）。
- **Store（存储）**：是否存储生成的模型响应，以便以后通过 API 检索。默认值 `true`。
- **Output Format（输出格式）**：是否以 **Text（文本）**、指定的 **JSON Schema** 或 **JSON Object** 形式返回响应。
- **Background（后台）**：是否以[后台模式](https://platform.openai.com/docs/guides/background)运行模型。这可以更可靠地执行长时间运行的任务。

更多信息请参考 [Responses | OpenAI](https://platform.openai.com/docs/api-reference/responses/create) 文档。

## 违规内容分类

使用此操作识别并标记可能有害的内容。OpenAI 模型会分析文本并返回包含以下内容的响应：

- `flagged`：布尔字段，表示内容是否可能有害。
- `categories`：各类别违规标记的列表。
- `category_scores`：每个类别的分数。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **Text（文本）**。
- **Operation（操作）**：选择 **Classify Text for Violations（违规内容分类）**。
- **Text Input（文本输入）**：输入要判断是否违反审核政策的文本。
- **Simplify Output（简化输出）**：打开后返回简化版的响应，而不是原始数据。

### 选项（Options）

- **Use Stable Model（使用稳定模型）**：打开后使用模型的稳定版本而不是最新版本，准确度可能略低。

更多信息请参考 [审核（Moderations）| OpenAI](https://platform.openai.com/docs/api-reference/moderations) 文档。

## 常见问题

关于常见错误或问题及建议的解决步骤，请参考[常见问题](common-issues.md)。
