---
title: Question and Answer Chain 节点常见问题
contentType:
  - integration
  - reference
priority: high
nodeTitle: Question and Answer Chain node common issues
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainretrievalqa/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainretrievalqa/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainretrievalqa/common-issues
description: >-
  n8n（工作流自动化平台）中 Question and Answer Chain 节点的常见问题与解答文档，包括问题详情和建议的解决方案。
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

# 常见问题（Common issues）

{% hint style="info" %}
**大白话**：这一页是 Question and Answer Chain（问答链）节点的「排错手册」。最常见的坑有三个：提示词里传了空值、忘记连接 Retriever（检索器）子节点、以及模型回答太短。照着下面的方法排查就行。
{% endhint %}

以下是 [Question and Answer Chain 节点](./README.md) 的一些常见错误和问题，以及解决或排查步骤。

## 未指定提示词错误（No prompt specified）

当 **Prompt（提示词）** 为空或无效时，会显示这个错误。

你可能会在以下两种场景中遇到它：

1. 你把 **Prompt** 设置成了 **Define below（在下方定义）**，但 **Text（文本）** 里的表达式没有生成任何值。
   * 解决办法：在 **Text（文本）** 字段中输入一个有效的提示词。
   * 确保任何表达式引用的字段都是真实存在的，并且解析出来是有效输入，而不是 null。
2. 你把 **Prompt** 设置成了 **Connected Chat Trigger Node（连接聊天触发器节点）**，而传入的数据里含有 null 值。
   * 解决办法：确保你的输入包含 `chatInput` 字段。添加一个 [Edit Fields (Set)（编辑字段）](../../../core-nodes/n8n-nodes-base.set.md) 节点，把传入字段名改成 `chatInput`。
   * 把输入节点的 `chatInput` 字段里的 null 值都清理掉。

## 必须连接 Retriever 子节点的错误（A Retriever sub-node must be connected）

这个错误是当 n8n 在没有连接 Retriever（检索器）的情况下尝试执行节点时显示的。

解决办法：当节点处于打开状态时，点击屏幕底部的 + Retriever 按钮；或者当节点未打开时，点击 Retriever 的 + 连接器。n8n 会弹出一个可选检索器列表供你选择。

## 无法生成长回复（Can't produce longer responses）

如果你需要生成比 Question and Answer Chain 节点默认更长的回复，可以尝试以下一种或多种技巧：

* **连接一个更「话痨」的模型**：有些 AI 模型比其他模型回答更简练。换一个上下文窗口更大、输出更详尽的模型，可以增加回复的字数。
* **提高最大 token 数量**：很多模型节点（例如 [OpenAI Chat Model](../../sub-nodes/n8n-nodes-langchain.lmchatopenai/README.md#maximum-number-of-tokens)）都带有 **Maximum Number of Tokens（最大令牌数）** 选项。调高它，可以增加模型用于生成回复的最大 token 数。
* **分阶段构建更长的回复**：对于需要更详细答案的场景，你可以用各种 AI 节点分阶段构建回复。比如让 AI 把一个问题拆成多个提示词，分别生成回复，最后再把各段回复组合成最终答案。虽然细节不同，但[这个用 AI 写 WordPress 文章的模板](https://n8n.io/workflows/2187-write-a-wordpress-post-with-ai-starting-from-a-few-keywords/)里可以看到这个思路的很好的例子。
