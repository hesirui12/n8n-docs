---
description: >-
  n8n 提供这些方法，让你在 LangChain Code 节点中更轻松地完成常见任务。
contentType: reference
hide:
  - toc
nodeTitle: LangChain Code node
originalFilePath: code/builtin/langchain-methods.md
originalUrl: 'https://docs.n8n.io/code/builtin/langchain-methods'
url: >-
  https://docs.n8n.io/build/code-in-n8n/use-built-in-shortcuts/langchain-code-node
layout:
  description:
    visible: false
---
# LangChain Code 节点方法 / LangChain Code node methods

n8n 提供了这些方法，让你在 [LangChain Code 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.code)中更轻松地完成常见任务。

{% hint style="info" %}
**大白话**：LangChain Code 节点是 n8n 中专门用于编写 LangChain（AI 相关）代码的节点，它跟普通的 Code 节点不同——它能接触到 AI 编排相关的对象（如模型、记忆、工具等）。本页介绍的就是 n8n 在这个节点里内置好的一些方法/变量，相当于官方给的「快捷工具包」，让你少写样板代码。
{% endhint %}

{% hint style="info" %}
**仅限 LangChain Code 节点使用**

本页介绍的内置方法和变量**只能在 LangChain Code 节点**的表达式中使用，不能用在其他节点里。
{% endhint %}

{% hint style="info" %}
**大白话**：和 HTTP 节点变量类似，这些快捷方式也是「专属的」——你只有在 LangChain Code 节点里用它们才有效。把它们放进普通节点的表达式里，n8n 会提示你找不到对应的方法。这是设计上的限制，不是 bug。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/iIcw3xaOoa9HryGmR8dX/" %}

{% hint style="info" %}
**大白话**：上面嵌入的这段内容会列出 LangChain Code 节点可用的内置方法/变量清单，例如获取当前节点的输入数据、访问与 AI 链（chain）、代理（agent）、记忆（memory）等相关的对象。写 AI 工作流时，直接按清单里的名字调用即可，省去自己造轮子的时间。
{% endhint %}
