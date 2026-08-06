---
title: OpenAI Assistant 操作
description: >-
  OpenAI 节点中 Assistant 操作的文档，适用于 n8n 这个工作流
  自动化平台。包括操作和配置的详细信息，以及
  示例和凭证信息的链接。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: OpenAI Assistant 操作
originalFilePath: >-
  integrations/builtin/app-nodes/n8n-nodes-langchain.openai/assistant-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/assistant-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/assistant-operations
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：这一页讲的是 OpenAI 节点的「Assistant（智能助手）」操作。Assistant 是 OpenAI 里的「自定义机器人」：你可以设定它的名字、人设（Instructions）、模型，还能给它开「代码解释器」（让它写代码算数）和「知识检索」（让它查你上传的文件）。本页教你：创建、删除、列出、发消息、更新 assistant。注意：OpenAI 节点 V2 已弃用这些操作（改用新的 Responses API），旧项目仍可用，但新项目建议用「生成模型响应」。
{% endhint %}

# OpenAI Assistant 操作

使用这些操作在 OpenAI 中创建、删除、列出、发消息或更新 assistant。关于 OpenAI 节点本身，请参考 [OpenAI](README.md)。

{% hint style="info" %}
**OpenAI 节点 V2 中 Assistant 操作已弃用**

n8n 版本 1.117.0 引入了支持 OpenAI Responses API 的 V2 版 OpenAI 节点，并移除了对[即将弃用的 Assistants API](https://platform.openai.com/docs/assistants/migration) 的支持。
{% endhint %}

## 创建 Assistant

使用此操作创建新的 assistant。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **Assistant**。
- **Operation（操作）**：选择 **Create an Assistant（创建 Assistant）**。
- **Model（模型）**：选择 assistant 将使用的模型。如果你不确定用哪个模型，需要高智能就试 `gpt-4o`，需要最快速度和最低成本就试 `gpt-4o-mini`。更多信息请参考 [模型概览 | OpenAI Platform](https://platform.openai.com/docs/models)。
- **Name（名称）**：输入 assistant 的名称。最长 256 个字符。
- **Description（描述）**：输入 assistant 的描述。最长 512 个字符。
  ```
  A virtual assistant that helps users with daily tasks, including setting reminders, answering general questions, and providing quick information.
  ```
- **Instructions（指令）**：输入 assistant 使用的系统指令。最长 32,768 个字符。用它来指定模型在回复时使用的人设。
  ```
  Always respond in a friendly and engaging manner. When a user asks a question, provide a concise answer first, followed by a brief explanation or additional context if necessary. If the question is open-ended, offer a suggestion or ask a clarifying question to guide the conversation. Keep the tone positive and supportive, and avoid technical jargon unless specifically requested by the user.
  ```
- **Code Interpreter（代码解释器）**：打开后，assistant 可以在沙箱环境中编写并执行代码。对于需要计算、数据分析或任何基于逻辑的处理的任务，请启用此工具。
- **Knowledge Retrieval（知识检索）**：打开后，assistant 可以访问外部来源或连接的知识库。更多信息请参考 [文件搜索 | OpenAI Platform](https://platform.openai.com/docs/assistants/tools/file-search)。
    - **Files（文件）**：选择要上传的文件作为外部知识来源。使用 **Upload a File（上传文件）** 操作添加更多文件。

### 选项（Options）

- **Output Randomness (Temperature)（输出随机性）**：调整响应的随机性。范围在 `0.0`（完全确定）和 `1.0`（最大随机）之间。建议只调整这个或 **Output Randomness (Top P)** 其中一个，不要两个都动。先从中间值（约 0.7）开始，再根据观察到的输出调整。如果回复过于重复或死板，就调高；如果太混乱或跑题，就调低。默认值 `1.0`。
- **Output Randomness (Top P)（输出随机性 Top P）**：调整 Top P 设置来控制 assistant 回复的多样性。例如 `0.5` 表示只考虑一半按概率加权的选项。建议只调整这个或 **Output Randomness (Temperature)** 其中一个，不要两个都动。默认值 `1.0`。
- **Fail if Assistant Already Exists（名称已存在时报错）**：启用后，如果同名的 assistant 已经存在，操作会失败。

更多信息请参考 [创建 assistant | OpenAI](https://platform.openai.com/docs/api-reference/assistants/createAssistant) 文档。

## 删除 Assistant

使用此操作从你的账号中删除已有的 assistant。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **Assistant**。
- **Operation（操作）**：选择 **Delete an Assistant（删除 Assistant）**。
- **Assistant**：选择要删除的 assistant，可以 **From list（从列表）** 或 **By ID（按 ID）** 选择。

更多信息请参考 [删除 assistant | OpenAI](https://platform.openai.com/docs/api-reference/assistants/deleteAssistant) 文档。

## 列出 Assistants

使用此操作获取你组织中的 assistant 列表。

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **Assistant**。
- **Operation（操作）**：选择 **List Assistants（列出 Assistants）**。

### 选项（Options）

- **Simplify Output（简化输出）**：打开后返回简化版的响应，而不是原始数据。此选项默认开启。

更多信息请参考 [列出 assistants | OpenAI](https://platform.openai.com/docs/api-reference/assistants/listAssistants) 文档。

## 给 Assistant 发消息

使用此操作向 assistant 发送消息并接收回复。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **Assistant**。
- **Operation（操作）**：选择 **Message an Assistant（给 Assistant 发消息）**。
- **Assistant**：选择要发消息的 assistant。
- **Prompt（提示词）**：输入要发送给 assistant 的文本提示词或消息。
    - **Connected Chat Trigger Node（连接聊天触发器节点）**：自动使用前一个节点的 `chatInput` 字段作为输入。
    - **Define Below（在下方定义）**：手动定义提示词，可以输入静态文本或使用表达式引用前面节点的数据。

### 选项（Options）

- **Base URL**：输入 assistant 发起 API 请求时使用的 base URL。当你想让 assistant 使用其他提供 OpenAI 兼容 API 的 LLM 服务商的端点时，这个选项很有用。
- **Max Retries（最大重试次数）**：指定 assistant 在失败时应该重试操作的次数。
- **Timeout（超时）**：设置 assistant 等待响应后超时的最大毫秒数。用这个选项避免操作时长时间等待。
- **Preserve Original Tools（保留原始工具）**：关闭后，会移除与 assistant 关联的原始工具。如果你想在这次特定操作中临时移除工具，可以使用此选项。

更多信息请参考 [Assistants | OpenAI](https://platform.openai.com/docs/api-reference/assistants) 文档。

## 更新 Assistant

使用此操作更新已有 assistant 的详细信息。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **Assistant**。
- **Operation（操作）**：选择 **Update an Assistant（更新 Assistant）**。
- **Assistant**：选择要更新的 assistant。

### 选项（Options）

- **Code Interpreter（代码解释器）**：打开后，assistant 可以在沙箱环境中编写并执行代码。对于需要计算、数据分析或任何基于逻辑的处理的任务，请启用此工具。
- **Description（描述）**：输入 assistant 的描述。最长 512 个字符。
  ```
  A virtual assistant that helps users with daily tasks, including setting reminders, answering general questions, and providing quick information.
  ```
- **Instructions（指令）**：输入 assistant 使用的系统指令。最长 32,768 个字符。用它来指定模型在回复时使用的人设。
  ```
  Always respond in a friendly and engaging manner. When a user asks a question, provide a concise answer first, followed by a brief explanation or additional context if necessary. If the question is open-ended, offer a suggestion or ask a clarifying question to guide the conversation. Keep the tone positive and supportive, and avoid technical jargon unless specifically requested by the user.
  ```
- **Knowledge Retrieval（知识检索）**：打开后，assistant 可以访问外部来源或连接的知识库。更多信息请参考 [文件搜索 | OpenAI Platform](https://platform.openai.com/docs/assistants/tools/file-search)。
- **Files（文件）**：选择要上传的文件作为外部知识来源。使用 [**Upload a File（上传文件）**](file-operations.md#upload-a-file) 操作添加更多文件。注意：这里只会更新 [Code Interpreter（代码解释器）](https://platform.openai.com/docs/assistants/tools/code-interpreter) 工具，不会更新 [File Search（文件搜索）](https://platform.openai.com/docs/assistants/tools/file-search) 工具。
- **Model（模型）**：选择 assistant 将使用的模型。如果你不确定用哪个模型，需要高智能就试 `gpt-4o`，需要最快速度和最低成本就试 `gpt-4o-mini`。更多信息请参考 [模型概览 | OpenAI Platform](https://platform.openai.com/docs/models)。
- **Name（名称）**：输入 assistant 的名称。最长 256 个字符。
- **Remove All Custom Tools (Functions)（移除所有自定义工具）**：打开后，从 assistant 中移除所有自定义工具（函数）。
- **Output Randomness (Temperature)（输出随机性）**：调整响应的随机性。范围在 `0.0`（完全确定）和 `1.0`（最大随机）之间。建议只调整这个或 **Output Randomness (Top P)** 其中一个，不要两个都动。先从中间值（约 0.7）开始，再根据观察到的输出调整。如果回复过于重复或死板，就调高；如果太混乱或跑题，就调低。默认值 `1.0`。
- **Output Randomness (Top P)（输出随机性 Top P）**：调整 Top P 设置来控制 assistant 回复的多样性。例如 `0.5` 表示只考虑一半按概率加权的选项。建议只调整这个或 **Output Randomness (Temperature)** 其中一个，不要两个都动。默认值 `1.0`。

更多信息请参考 [修改 assistant | OpenAI](https://platform.openai.com/docs/api-reference/assistants/modifyAssistant) 文档。

## 常见问题

关于常见错误或问题及建议的解决步骤，请参考[常见问题](common-issues.md)。
