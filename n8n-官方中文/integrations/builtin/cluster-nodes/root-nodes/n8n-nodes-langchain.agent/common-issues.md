---
title: AI Agent 节点常见问题
contentType:
  - integration
  - reference
priority: critical
nodeTitle: AI Agent node common issues
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/common-issues
description: >-
  n8n（工作流自动化平台）中 AI Agent 节点的常见问题与解答文档，包括问题详情和建议的解决方案。
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
**大白话**：这一页收集了用 AI Agent 节点时最容易踩的坑和对应的解决方法。如果你运行工作流报错，先来这里对号入座找找看——大部分报错都是「提示词（Prompt）里传了空值」「没连聊天模型」「子节点版本太旧」这几个原因。
{% endhint %}

以下是 [AI Agent 节点](./README.md) 的一些常见错误和问题，以及解决或排查步骤。

## 内部错误：400 Invalid value for 'content'（'content' 的值无效）

完整的错误信息可能长这样：

```
Internal error
Error: 400 Invalid value for 'content': expected a string, got null.
<stack-trace>
```

这个错误通常是因为 **Prompt（提示词）** 输入里包含 null（空值）。

你可能会在以下两种场景中遇到它：

1. 你把 **Prompt** 设置成了 **Define below（在下方定义）**，但 **Text（文本）** 里的表达式没有生成任何值。
   * 解决办法：确保你的表达式引用的字段都是真实存在的，并且它们解析出来是有效输入，而不是 null。
2. 你把 **Prompt** 设置成了 **Connected Chat Trigger Node（连接聊天触发器节点）**，而传入的数据里含有 null 值。
   * 解决办法：把输入节点的 `chatInput` 字段里的 null 值都清理掉。

## 子节点 Simple Memory 报错（Error in sub-node Simple Memory）

这个错误是当 n8n 在使用 [Simple Memory（简易记忆）](../../sub-nodes/n8n-nodes-langchain.memorybufferwindow/README.md) 子节点时出问题显示的。

最常见的原因是：你的工作流（或你复制的模板）里用的是旧版本的 Simple Memory 节点（旧名叫做「Window Buffer Memory 窗口缓冲记忆」）。

试试把工作流里的 Simple Memory 节点删掉再重新添加，这样可以确保你使用的是最新版本的节点。

## 必须连接 Chat Model 子节点的错误（A Chat Model sub-node must be connected）

这个错误是当 n8n 在没有连接 Chat Model（聊天模型）的情况下尝试执行节点时显示的。

解决办法：当节点处于打开状态时，点击屏幕底部的 + Chat Model 按钮；或者当节点未打开时，点击 Chat Model 的 + 连接器。n8n 会弹出一个可选聊天模型列表供你选择。

## 未指定提示词错误（No prompt specified）

这个错误是当智能体期望自动从上一个节点获取提示词时出现的。通常发生在你使用 [Chat Trigger 节点（聊天触发器）](../../../core-nodes/n8n-nodes-langchain.chattrigger/README.md) 的情况下。

解决办法：找到 AI Agent 节点的 **Prompt（提示词）** 参数，把它从 **Connected Chat Trigger Node（连接聊天触发器节点）** 改成 **Define below（在下方定义）**。这样你就可以通过引用其他节点的输出数据或添加静态文本来手动构建提示词。
