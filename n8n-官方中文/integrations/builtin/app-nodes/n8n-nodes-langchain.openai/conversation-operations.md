---
title: OpenAI 对话（Conversation）操作
contentType:
  - integration
  - reference
priority: critical
nodeTitle: OpenAI 对话（Conversation）操作
originalFilePath: >-
  integrations/builtin/app-nodes/n8n-nodes-langchain.openai/conversation-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/conversation-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/conversation-operations
description: >-
  OpenAI 节点中对话（Conversation）操作的文档，适用于 n8n 这个工作流
  自动化平台。包括操作和配置的详细信息，以及
  示例和凭证信息的链接。
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
**大白话**：这一页讲 OpenAI 节点的「对话（Conversation）」操作，用于管理 OpenAI 里的会话记录：创建对话（可以先发几条消息进去）、获取对话（按 ID 读取）、更新对话（改元数据）、删除对话。对话就像一个「聊天记录容器」，把多次请求的消息串起来，方便后续用 API 或仪表盘检索。适合做多轮对话、聊天记录存档等场景。
{% endhint %}

# 对话（Conversation）操作

使用这些操作在 OpenAI 中创建、获取、更新或删除对话。关于 OpenAI 节点本身，请参考 [OpenAI](./README.md)。

## 创建对话

使用此操作创建新的对话。

填写以下参数：

* **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
* **Resource（资源）**：选择 **Conversation（对话）**。
* **Operation（操作）**：选择 **Create a Conversation（创建对话）**。
* **Messages（消息）**：发给模型的输入消息。`system` 角色的消息优先级高于 `user` 角色中的指令。`assistant` 角色的消息会被认为是模型在之前交互中生成的。

### 选项（Options）

* **Metadata（元数据）**：一组用于存储结构化信息的键值对。一个对象最多可以附加 16 对，可以用来添加自定义数据，便于通过 API 或仪表盘搜索。

更多信息请参考 [对话 | OpenAI](https://platform.openai.com/docs/api-reference/conversations/create) 文档。

## 获取对话

使用此操作获取已有的对话。

填写以下参数：

* **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
* **Resource（资源）**：选择 **Conversation（对话）**。
* **Operation（操作）**：选择 **Get Conversation（获取对话）**。
* **Conversation ID**：要获取的对话的 ID。

更多信息请参考 [对话 | OpenAI](https://platform.openai.com/docs/api-reference/conversations/create) 文档。

## 删除对话

使用此操作删除已有的对话。

填写以下参数：

* **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
* **Resource（资源）**：选择 **Conversation（对话）**。
* **Operation（操作）**：选择 **Remove Conversation（删除对话）**。
* **Conversation ID**：要删除的对话的 ID。

更多信息请参考 [对话 | OpenAI](https://platform.openai.com/docs/api-reference/conversations/create) 文档。

## 更新对话

使用此操作更新已有的对话。

填写以下参数：

* **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
* **Resource（资源）**：选择 **Conversation（对话）**。
* **Operation（操作）**：选择 **Update a Conversation（更新对话）**。
* **Conversation ID**：要更新的对话的 ID。

### 选项（Options）

* **Metadata（元数据）**：一组用于存储结构化信息的键值对。一个对象最多可以附加 16 对，可以用来添加自定义数据，便于通过 API 或仪表盘搜索。

更多信息请参考 [对话 | OpenAI](https://platform.openai.com/docs/api-reference/conversations/create) 文档。
