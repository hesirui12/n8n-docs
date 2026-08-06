---
contentType: explanation
nodeTitle: Ask n8n AI
originalFilePath: manage-cloud/ai-assistant.md
originalUrl: https://docs.n8n.io/manage-cloud/ai-assistant
url: https://docs.n8n.io/build/ways-of-building-workflows/use-the-ai-assistant
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

# 向 n8n AI 提问（Ask n8n AI）

「向 n8n AI 提问」（Ask n8n AI）能帮你**构建、调试和优化**工作流。从回答 n8n 的使用问题，到提供编程和表达式[^1]方面的帮助，Ask n8n AI 会在你探索 n8n 各项功能时全程陪伴你。

{% hint style="info" %}
**注意：** Ask n8n AI 是 n8n 内置的帮助助手，但**已不再积极开发**。如果你想通过聊天来构建、编辑和运行工作流，请改用 [使用 AI 助手](ai-assistant.md)（Use AI Assistant）——那是新一代、功能更强的聊天助手。
{% endhint %}

{% hint style="info" %}
**小白解释——Ask n8n AI 和 AI 助手的区别？**
简单说：Ask n8n AI 更像「客服/老师」，主要回答问题和给建议；而 AI 助手（AI Assistant）是「施工队」，可以直接动手帮你建工作流、改配置。这篇页面介绍的是前者（老版答疑助手）。
{% endhint %}

## 当前具备的能力（Current capabilities）

Ask n8n AI 提供了一系列工具来支持你：

* **调试助手（Debug helper）：** 帮你定位和排查工作流中节点的执行问题，让工作流保持顺畅运行。
* **回答 n8n 问题（Answer n8n questions）：** 即时回答你关于 n8n 的各种疑问，无论是某个具体功能还是通用操作。
* **编程支持（Coding support）：** 提供编码方面的指导，包括 SQL 和 JSON，帮你优化节点和数据处理。
* **表达式帮助（Expression assistance）：** 教你如何创建和优化[表达式](../work-with-data/expressions-versus-data-nodes.md)，充分发挥工作流的潜力。
* **凭据设置技巧（Credential setup tips）：** 告诉你如何安全、高效地设置和管理节点的[凭据](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/credentials)（即连接外部服务所需的账号/密钥等认证信息）。

## 充分发挥助手作用的技巧（Tips for getting the most out of the Assistant）

1. **像聊天一样对话：** Ask n8n AI 可以和你一步步协作。如果它的建议不是你想要的，直接告诉它！你提供的上下文（背景信息）越多，它的建议就越好。
2. **问具体的问题：** 为了获得最佳效果，请提**聚焦明确**的问题（例如：「如何为 Google Sheets 设置凭据？」）。助手对清晰的提问回答最好。
3. **在建议基础上迭代：** 大胆地在助手的回答上继续追问、调整。多尝试不同的方法，根据助手的反馈不断优化，直到接近你理想的解决方案。
4. **可以试试这些玩法：**
   * 让它调试你看到的任何错误；
   * 问它如何设置凭据；
   * 问它「解释一下这个工作流是干什么的」（Explain what this workflow does）；
   * 说「我需要你帮我写代码：\[在这里描述你的代码需求]」；
   * 问「我该怎么在 n8n 里构建 X？」

## AI 使用设置（AI usage settings）

{% hint style="info" %}
**可用版本：** 该设置需要 n8n **v2.7.0 及以上**版本。
{% endhint %}

你可以在 n8n 实例中进入 **Settings（设置） > AI Usage（AI 使用）** 来管理 AI 使用设置。在这里，你可以控制**哪些数据会分享给 Ask n8n AI**。

这些设置**只有实例所有者和管理员**可以修改，并且会应用到实例上的**所有用户**。

![ai\_usage\_settings.png](../.gitbook/assets/ai_usage_settings.png)

你可以通过开关，决定是否把**真实的工作流数据**（比如节点名称、参数和结构）分享给 Ask n8n AI。如果关闭这个选项，助手的「结合你的工作流提供上下文感知帮助」的能力就会受到限制。

{% hint style="warning" %}
**特别注意：** 由于访问工作流数据是 AI 工作流构建器（AI Workflow Builder）**正常运行的前提**，**关闭这个选项也会同时禁用 AI 工作流构建器功能**。如果你还想用构建器，就不要关它。
{% endhint %}

### 关闭数据发送（Disable sending data）

如果你不想把真实的数据值发送给 Ask n8n AI，请在 **AI Usage**（AI 使用）设置页面关闭 **Send actual data values**（发送真实数据值）复选框。

## 常见问题（FAQs）

### 助手能看到哪些上下文？（What context does the Assistant have?）

Ask n8n AI 可以访问你 n8n 屏幕上显示的所有元素，**但不包括实际的输入/输出数据值**（比如客户信息这类真实数据）。想了解更多 n8n 会与 Ask n8n AI 分享哪些数据，请参阅 [n8n 中的 AI](https://app.gitbook.com/s/ukPPOMQ6NId4gpAIkPXa/#ai-in-n8n)。

### 谁可以使用助手？（Who can use the Assistant?）

任何 **Cloud（云端）套餐**的用户都可以使用。

### 助手是如何工作的？（How does the Assistant work?）

助手底层的逻辑是用 n8n 的高级 AI 能力构建的。它综合使用了多种技术：

* 一组分工不同的 **Agent（智能代理）**[^2]，各自专注于 n8n 的不同领域；
* **RAG（检索增强生成）**，用于从文档和社区论坛中检索知识；
* 自定义提示词（custom prompts）、**记忆（memory）**[^3] 和上下文（context）。

[^1]: 在 n8n 中，表达式（expressions）允许你通过执行 JavaScript 代码来**动态填充**节点参数。与其提供一个固定的静态值，你可以使用 n8n 的表达式语法，用来自前面节点、其他工作流或你的 n8n 环境中的数据来定义这个值。
[^2]: AI Agent（智能代理）是能够响应用户请求、做出决策并帮用户完成真实世界任务的人工智能系统。它们使用大语言模型（LLM）来理解用户的输入，并根据手头掌握的信息和资源，决定如何最好地处理请求。
[^3]: 在 AI 的语境下，记忆（memory）允许 AI 工具在多次交互之间保留消息上下文。这样你就可以和 AI 智能代理持续对话，而不用每条消息都重复提交完整上下文。在 n8n 中，AI Agent 节点可以使用记忆，但 AI 链（chains）不能。
