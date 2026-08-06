---
title: 停止并报错 Stop And Error
description: >-
  n8n 工作流自动化平台中「停止并报错 Stop And Error」节点的中文文档。
  包含使用方法说明和示例链接。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Stop And Error
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.stopanderror.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.stopanderror
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.stopanderror
layout:
  description:
    visible: false
---

# 停止并报错 Stop And Error

> **大白话**：这个节点是「主动刹车」——当工作流走到这一步时，它会立刻停下来，并且抛出一个错误。你可以自己决定错误信息写什么（甚至是一段结构化的 JSON 错误对象）。这样当某些不该发生的情况出现时（比如数据是空的、金额是负数），工作流可以明确地失败，并把你自己写的错误信息传给「错误工作流」去处理。

使用「停止并报错 Stop And Error」节点显示自定义错误消息、让执行在特定条件下失败，并把自定义错误信息发送给错误工作流（error workflow）。

## 操作

* 错误消息 Error Message
* 错误对象 Error Object

## 节点参数

两个操作都包含一个节点参数，即 **错误类型 Error Type**。使用这个参数选择要抛出的错误类型。在两个操作之间选择：**错误消息 Error Message** 和 **错误对象 Error Object**。

其他参数取决于你选择哪个操作。

### 错误消息的参数

「错误消息 Error Message」错误类型增加一个参数，即 **错误消息 Error Message** 字段。输入你想要抛出的消息。

（白话解释：选这个，错误信息就是一句简单的文本，比如「库存不足，无法下单」。）

### 错误对象的参数

「错误对象 Error Object」错误类型增加一个参数，即 **错误对象 Error Object**。输入一个包含你想要抛出的错误属性的 JSON 对象。

（白话解释：选这个，错误信息是一段结构化的 JSON，比如 `{"code": 400, "message": "参数不合法", "detail": {...}}`，适合给程序做判断用。）

## 模板和示例

[浏览停止并报错（Stop And Error）的集成模板](https://n8n.io/integrations/stop-and-error) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

你可以把「停止并报错 Stop And Error」节点与 [错误触发器 Error trigger](n8n-nodes-base.errortrigger.md) 节点一起使用。

在 n8n 工作流中了解更多关于[错误工作流](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/flow-logic/handle-errors-gracefully)的信息。
