---
title: SSE Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 SSE Trigger（SSE 触发器）节点。按照本文档将
  SSE Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: SSE Trigger 节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.ssetrigger.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ssetrigger'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ssetrigger'
layout:
  description:
    visible: false
---

# SSE Trigger 节点

> **大白话**：SSE（服务器推送事件）是一种"服务器主动往客户端推消息"的技术。这个节点就像一根一直挂着的电话线，服务器一旦有新消息（比如实时通知、行情更新），就顺着这条线推给 n8n，n8n 立刻启动工作流处理。你只需要填一个服务器的 SSE 地址即可。

服务器推送事件（Server-Sent Events，简称 SSE）是一种服务器推送技术，它让客户端可以通过 HTTP 连接自动接收来自服务器的更新。SSE Trigger（SSE 触发器）节点用于接收服务器推送事件。

## 节点参数

SSE Trigger 节点只有一个参数：**URL（网址）**。输入你要从中接收服务器推送事件（SSE）的 URL。

## 模板与示例

[浏览 SSE Trigger 节点的集成模板](https://n8n.io/integrations/sse-trigger) 或 [搜索所有模板](https://n8n.io/workflows/)
