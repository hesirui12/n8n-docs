---
title: What's a chain in AI?
description: Understand chains in the context of AI. Learn about chains in n8n.
contentType: explanation
nodeTitle: What chains do
originalFilePath: advanced-ai/examples/understand-chains.md
originalUrl: 'https://docs.n8n.io/advanced-ai/examples/understand-chains'
url: 'https://docs.n8n.io/build/integrate-ai/understand-ai-components/what-chains-do'
layout:
  description:
    visible: false
---

# AI 中的链（chain）是什么？（What's a chain in AI?）

链（chain）[^1]把 AI 的不同组件组合在一起，形成一个协同工作的系统。它会在这些组件之间建立一系列固定的调用顺序。这些组件可以包括模型（model）和记忆（memory）[^2]（不过要注意：在 n8n 中，链不能使用记忆）。

{% hint style="info" %}
**大白话**：链（chain）就是「一条按固定剧本走的 AI 流水线」。比如「先把用户问题发给大模型 → 大模型返回答案 → 把答案整理一下再返回给用户」，每一步该做什么、按什么顺序，都是提前定死的。它不会自己临时决定要查资料、要加步骤，一切照章办事。
{% endhint %}

## n8n 中的链（Chains in n8n）

n8n 提供了三种链节点：

* [Basic LLM Chain](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm)（基础 LLM 链）：用于与 LLM 交互，不附带任何额外组件。这是最简单的链：你给输入，它找模型要输出。
* [Question and Answer Chain](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainretrievalqa)（问答链）：可以通过检索器（retriever）连接[向量存储](#user-content-fn-3)[^3]，也可以通过 Workflow Retriever 节点连接 n8n 工作流。如果你想做一个「能就特定文档提问」的工作流，就用它。
* [Summarization Chain](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainsummarization)（摘要链）：接收一段输入，返回它的摘要。适合「把长文章、长对话浓缩成要点」这类场景。

n8n 中的链与其他工具（如 LangChain）中的链有一个重要区别：**所有链节点都不支持记忆（memory）**。这意味着它们记不住用户之前的查询。如果你用 LangChain 代码编写 AI 应用，你可以给应用加上记忆。而在 n8n 中，如果你需要工作流支持记忆，请使用智能体（agent）。如果你希望用户能和你的应用进行自然的持续对话，这一点至关重要。

{% hint style="info" %}
**大白话**：链的「死穴」是没记性。你问它一句「我们最大的客户是谁？」，它答完就忘了；你接着问「那第二名呢？」，它根本不记得刚才聊过什么。想要有来有回的连续对话，就得用智能体（agent）——智能体可以挂上记忆（memory）节点来记住对话历史。
{% endhint %}

[^1]: AI 链（AI chains）允许你通过与组件的一系列调用，与大语言模型（LLM）及其他资源交互。n8n 中的 AI 链没有持久记忆，所以你不能用它们来引用之前的上下文（如果需要，请使用 AI 智能体）。
[^2]: 在 AI 语境中，记忆（memory）允许 AI 工具在多次交互之间保存消息上下文。这样你就可以和 AI 智能体持续对话，而不必每发一条消息都把之前的上下文再提交一遍。在 n8n 中，AI 智能体节点可以使用记忆，但 AI 链（chain）不能。
[^3]: 向量存储（vector store），也叫向量数据库，存储的是信息的数学表示。把它和嵌入（embedding）、检索器（retriever）配合使用，就可以创建一个 AI 在回答问题时能够访问的数据库。
