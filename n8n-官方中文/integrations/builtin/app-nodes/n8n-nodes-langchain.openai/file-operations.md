---
title: OpenAI 文件操作
description: >-
  OpenAI 节点中文件操作的文档，适用于 n8n 这个工作流
  自动化平台。包括操作和配置的详细信息，以及
  示例和凭证信息的链接。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: OpenAI 文件操作
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-langchain.openai/file-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/file-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/file-operations
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：这一页讲 OpenAI 节点的「文件（File）」操作，用来管理上传到 OpenAI 的文件（比如给 assistant 当知识库、微调训练数据等）：删除文件、列出文件、上传文件。上传时记得指定用途（Purpose），比如 **Assistants**（给 assistant 当知识库）或 **Fine-Tune**（微调用）。单个文件最大 512 MB 或 200 万 token。
{% endhint %}

# OpenAI 文件操作

使用这些操作在 OpenAI 中创建、删除、列出、发消息或更新文件。关于 OpenAI 节点本身，请参考 [OpenAI](README.md)。

## 删除文件

使用此操作从服务器删除文件。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **File（文件）**。
- **Operation（操作）**：选择 **Delete a File（删除文件）**。
- **File（文件）**：输入本次操作要使用的文件的 ID，或从下拉列表中选择文件名。

更多信息请参考 [删除文件 | OpenAI](https://platform.openai.com/docs/api-reference/files/delete) 文档。

## 列出文件

使用此操作列出属于用户组织的文件。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **File（文件）**。
- **Operation（操作）**：选择 **List Files（列出文件）**。

### 选项（Options）

- **Purpose（用途）**：用这个选项只返回指定用途的文件。用 **Assistants** 只返回与 Assistant 和消息操作相关的文件。用 **Fine-Tune** 返回与[微调](https://platform.openai.com/docs/api-reference/fine-tuning)相关的文件。

更多信息请参考 [列出文件 | OpenAI](https://platform.openai.com/docs/api-reference/files/list) 文档。

## 上传文件

使用此操作上传文件。该文件可以在各种操作中使用。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **File（文件）**。
- **Operation（操作）**：选择 **Upload a File（上传文件）**。
- **Input Data Field Name（输入数据字段名）**：默认值 `data`。输入包含文件的二进制属性名。对于 Assistants，单个文件最大可以是 512 MB 或 200 万 token。

### 选项（Options）

- **Purpose（用途）**：输入上传文件的预期用途。用 **Assistants** 表示文件与 Assistant 和消息操作关联。用 **Fine-Tune** 表示用于[微调](https://platform.openai.com/docs/api-reference/fine-tuning)。

更多信息请参考 [上传文件 | OpenAI](https://platform.openai.com/docs/api-reference/files/create) 文档。

## 常见问题

关于常见错误或问题及建议的解决步骤，请参考[常见问题](common-issues.md)。
