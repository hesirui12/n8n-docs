---
title: 流式响应
contentType: howto
nodeTitle: 实时流式响应
originalFilePath: workflows/streaming.md
originalUrl: https://docs.n8n.io/workflows/streaming
url: >-
  https://docs.n8n.io/build/understand-workflows/understand-executions/stream-real-time-responses
description: 构建一个支持流式响应的工作流
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

# 实时流式响应 / Stream real-time responses

{% hint style="info" %}
**功能可用性**

所有套餐均可用。
{% endhint %}

流式响应（Streaming responses）让你能够在 AI 代理节点（AI Agent node）生成内容的同时，就把数据实时发送给用户。这对聊天机器人（chatbot）特别有用：你可以边生成边把答案显示给用户看，让用户体验更好。

{% hint style="info" %}
**大白话**：普通模式是「等 AI 把一整段话想完，一次性发给你」；流式模式是「AI 想到一个字就发一个字，像打字机一样一个字一个字蹦出来」。后者让用户感觉响应更快、更自然，不用干等。
{% endhint %}

你可以通过下面两种方式之一开启流式传输：

* [聊天触发器（Chat Trigger）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-langchain.chattrigger)
* [Webhook 节点（Webhook node）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.webhook)

在这两种情况下，都需要把节点的 **Response Mode**（响应模式）设置为 **Streaming**（流式）。

## 为流式传输配置节点 / Configure nodes for streaming

要传输流式数据，你需要往工作流里添加支持流式输出的节点。并不是所有节点都支持这个功能。

1. 选择一个支持流式的节点，例如：
   * [AI 代理（AI agent）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent)
   * [响应 Webhook（Respond to Webhook）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.respondtowebhook)
2. 你可以在这些节点的选项（options）里关闭流式传输。默认情况下，只要被触发的触发器（trigger）把 `Response Mode` 设置为 `Streaming response`（流式响应），这些节点就会传输流式数据。

{% hint style="info" %}
**大白话**：流式传输要「两头都开」才行——开头要有支持流式的触发器（聊天触发器或 Webhook），中间还要有支持流式的输出节点（AI 代理或响应 Webhook）。光开一头是没用的。
{% endhint %}

## 重要信息 / Important information

配置流式响应时，请注意以下细节：

* **触发器（Trigger）**：你的触发器节点必须支持流式传输，并且已经配置了流式。否则，工作流会按照你设置的响应模式（Response Mode）来运行。
* **节点配置（Node configuration）**：即使触发器开启了流式传输，你的工作流里也至少需要有一个配置成传输流式数据的节点。否则，工作流不会发送任何数据。

{% hint style="info" %}
**大白话**：记住两个「必须」——触发器必须开流式，同时工作流里必须至少有一个支持流式的节点。缺了任何一个，要么退化成普通模式，要么干脆不返回数据，容易踩坑。
{% endhint %}
