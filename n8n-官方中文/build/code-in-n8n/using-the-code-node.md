---
contentType:
  - integration
  - reference
tags:
  - code node
  - code
hide:
  - tags
nodeTitle: 使用代码节点
originalFilePath: code/code-node.md
originalUrl: 'https://docs.n8n.io/code/code-node'
url: 'https://docs.n8n.io/build/code-in-n8n/using-the-code-node'
layout:
  description:
    visible: false
---

# 使用代码节点 / Using the Code node

代码节点（Code node）是 n8n 里一个很特殊的节点：你可以在里面直接写 **JavaScript** 或 **Python** 代码，作为工作流中的一步来运行。它可以接收前面节点传来的数据，通过添加、删除或更新数据项（items）来处理这些数据，还能使用 n8n 内置的方法和变量（如 `$input`、`$json` 等，以 `$` 开头）。

{% hint style="info" %}
**大白话**：前面拖的节点就像是「搭积木」，而代码节点（Code node）就像一个「自由发挥区」——当现成的积木满足不了你的需求时，你就写几行代码，想怎么处理数据都行。
{% endhint %}

本篇的详细教程内容由 n8n 官方以可复用组件（reusable block）的形式提供，原样保留在下方（包含在 GitBook 渲染时自动展开）：

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/A6AUEJWQnhjgrypgRNwY/" %}
