---
title: What's memory in AI?
description: >-
  Understand memory in the context of AI. Learn what's special about memory in
  n8n.
contentType: explanation
nodeTitle: How memory works
originalFilePath: advanced-ai/examples/understand-memory.md
originalUrl: 'https://docs.n8n.io/advanced-ai/examples/understand-memory'
url: >-
  https://docs.n8n.io/build/integrate-ai/understand-ai-components/how-memory-works
layout:
  description:
    visible: false
---

# AI 中的记忆是什么？（What's memory in AI?）

记忆（memory）是 AI 聊天服务的关键组成部分。记忆[^1]会保留之前消息的历史记录，让你可以和 AI 进行连续的对话，而不是每次交互都从零开始。

## n8n 中的 AI 记忆（AI memory in n8n）

要给 AI 工作流添加记忆，你可以使用下面两种方式之一：

* [Simple Memory](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorybufferwindow)：为当前会话存储一段可自定义长度的聊天历史。这是最容易上手的选择。
* n8n 提供了节点的各类记忆服务，包括：
	* [Motorhead](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymotorhead)
	* [Redis Chat Memory](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryredischat)
	* [Postgres Chat Memory](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorypostgreschat) 
	* [Xata](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryxata)
	* [Zep](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryzep)

如果你需要在工作流中做更高级的 AI 记忆管理，可以使用 [Chat Memory Manager](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymanager) 节点。 

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ipTfg43EHN14P930L6JP/" %}

{% hint style="info" %}
**大白话**：没有记忆的 AI 就像「金鱼」，每次对话都像第一次见面。接上 Simple Memory 后，AI 就能记住你们之前聊过什么，你说「刚才那个问题再展开讲讲」，它也知道指的是哪个。Simple Memory 只记当前会话；想要长期记忆（比如重启后还记得、多个实例共享），就用 Redis、Postgres 这类外部记忆服务。
{% endhint %}

[^1]: 在 AI 语境中，记忆（memory）允许 AI 工具在多次交互之间保存消息上下文。这样你就可以和 AI 智能体持续对话，而不必每发一条消息都把之前的上下文再提交一遍。在 n8n 中，AI 智能体节点可以使用记忆，但 AI 链（chain）不能。
