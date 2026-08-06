---
title: Programmatic-style execute() method
description: >-
  A reference document for the programmatic-style execute() method of the node
  base file.
contentType: reference
nodeTitle: Programmatic-style execute method
originalFilePath: >-
  integrations/creating-nodes/build/reference/node-base-files/programmatic-style-execute-method.md
originalUrl: >-
  https://docs.n8n.io/integrations/creating-nodes/build/reference/node-base-files/programmatic-style-execute-method
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/reference/base-files/programmatic-style-execute-method
layout:
  description:
    visible: false
---

# 编程式 execute() 方法（Programmatic-style execute() method）

声明式和编程式这两种风格最主要的区别在于：它们如何处理传入的数据，以及如何构建 API 请求。编程式风格需要一个 `execute()` 方法，它读取传入的数据和参数，然后构建一个请求。声明式风格则通过 `operations` 对象中的 `routing` 键来处理请求。

`execute()` 方法会创建并返回一个 `INodeExecutionData` 的实例。

{% hint style="warning" %}
**配对数据项（Paired items）**

你必须在返回的数据中包含输入项和输出项的配对信息。更多信息请参考[配对数据项（Paired items）](../item-linking.md)。
{% endhint %}

{% hint style="info" %}
**小白提示**：这一页内容很短，但点很重要——`execute()` 就是你写编程式节点核心逻辑的地方（怎么读数据、怎么发请求、怎么返回结果都在这里）。同时，你返回的数据里必须带着「这个输出对应哪个输入」的配对信息（pairedItem），否则后面节点的「输入映射」「数据追踪」等功能会失效。具体怎么写，请看[编程式节点教程](../../tutorial-build-a-programmatic-style-node.md)和[数据项关联（item linking）](../item-linking.md)。
{% endhint %}
