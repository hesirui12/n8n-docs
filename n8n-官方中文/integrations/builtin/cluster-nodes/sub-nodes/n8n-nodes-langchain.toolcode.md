---
title: Custom Code Tool 节点文档
description: >-
  了解如何在 n8n 中使用 Custom Code Tool 节点。阅读技术文档，把
  Custom Code Tool 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Custom Code Tool 节点文档
originalFilePath: integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolcode.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolcode
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolcode
layout:
  description:
    visible: false
---

# Custom Code Tool 节点

> **大白话**：这个节点让你自己写一段代码（JavaScript 或 Python），当 Agent 的工具用。比如"返回一个随机颜色"这种自定义功能。代码里通过 `query` 拿到 Agent 传来的输入，处理完把结果 return 出去。注意要写清 **Description**（描述）——大模型靠它判断"什么时候该调这个工具"。

使用 Custom Code Tool 节点，编写 Agent[^1] 可以运行的代码。

在本页中，你可以找到 Custom Code Tool 节点的参数，以及更多资源链接。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

### Description（描述）

给你的自定义代码写一段描述。这告诉 Agent 什么时候该用这个工具。例如：

> 调用这个工具来获取一个随机颜色。输入应该是一个用逗号分隔的颜色名称字符串，用来排除这些颜色。

### Language（语言）

你可以用 JavaScript 或 Python。

### JavaScript / Python 代码框

在这里写代码。

你可以用 `query` 访问工具输入。例如，把输入字符串转成小写：

```js
let myString = query;
return myString.toLowerCase();
```

## 模板与示例

[浏览 Custom Code Tool 节点集成模板](https://n8n.io/integrations/code-tool) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Yl56nEscwQQAbBUeWfvp/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: AI Agent 是能够响应用户请求、做出决策并替用户完成实际任务的智能系统。它们用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
