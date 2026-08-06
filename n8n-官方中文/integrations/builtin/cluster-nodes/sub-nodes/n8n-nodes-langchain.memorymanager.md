---
title: Chat Memory Manager 节点文档
description: >-
  了解如何在 n8n 中使用 Chat Memory Manager 节点。阅读技术文档，把
  Chat Memory Manager 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Chat Memory Manager 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymanager.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymanager
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymanager
layout:
  description:
    visible: false
---

# Chat Memory Manager 节点

> **大白话**：这个节点是"聊天记忆管家"，专门帮你管理 AI 的聊天记忆。它有三种操作：**Get Many Messages**（读取多条消息）、**Insert Messages**（插入消息，可以追加也可以整体覆盖）、**Delete Messages**（删除消息，删最近 N 条或全部删光）。记忆是存在内存里的向量存储（vector store）中，适合调试和轻量场景。

Chat Memory Manager 节点负责管理工作流里的聊天消息记忆[^1]。用这个节点在内存中的向量存储[^2]里加载、插入和删除聊天消息。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ipTfg43EHN14P930L6JP/" %}

在本页中，你可以找到 Chat Memory Manager 节点支持的操作列表，以及更多资源链接。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Operation Mode**（操作模式）：在 **Get Many Messages**（读取多条消息）、**Insert Messages**（插入消息）和 **Delete Messages**（删除消息）之间选择。
* **Insert Mode**（插入模式）：仅在 **Insert Messages** 模式下可用。可选：
    * **Insert Messages**（插入消息）：把消息插入到已有消息旁边。
    * **Override All Messages**（覆盖所有消息）：替换当前的记忆。
* **Delete Mode**（删除模式）：仅在 **Delete Messages** 模式下可用。可选：
    * **Last N**（最近 N 条）：删除最近 N 条消息。
    * **All Messages**（所有消息）：把消息从记忆里删除。
* **Chat Messages**（聊天消息）：仅在 **Insert Messages** 模式下可用。定义要插入到记忆中的聊天消息，包括：
	* **Type Name or ID**（类型名称或 ID）：设置消息类型。可选：
		* **AI**：用于 AI 发出的消息。
		* **System**（系统）：添加包含给 AI 指令的消息。
		* **User**（用户）：用于用户发出的消息。这种消息类型在其他 AI 工具和教程里有时也叫 "human"（人类）消息。
	* **Message**（消息）：输入消息内容。
	* **Hide Message in Chat**（在聊天中隐藏消息）：选择 n8n 是否在聊天界面中向用户显示这条消息（关闭=显示，开启=隐藏）。
* **Messages Count**（消息数量）：在 **Delete Messages** 模式下选择 **Last N** 时可用。输入要删除的最新消息条数。
* **Simplify Output**（简化输出）：在 **Get Many Messages** 模式下可用。开启后把输出简化为只包含发送方（AI、user 或 system）和文本。

## 模板与示例

[浏览 Chat Memory Manager 节点集成模板](https://n8n.io/integrations/chat-memory-manager) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Memory 文档](https://langchain-ai.github.io/langgraphjs/concepts/memory/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: 在 AI 语境里，记忆（memory）让 AI 工具能够在多次交互之间保留消息上下文。这样你就能和 AI Agent 进行连续的对话，而不用每次发消息都重新提交一遍上下文。在 n8n 里，AI Agent 节点可以用记忆，但 AI 链（AI chains）不能用。
[^2]: 向量存储（vector store，也叫向量数据库）存储信息的数学表示。配合 embeddings（嵌入）和检索器（retrievers）使用，可以创建一个 AI 在回答问题时能访问的数据库。
