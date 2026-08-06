---
description: 查找你的工作流 ID。
contentType: howto
nodeTitle: Find your workflow ID
originalFilePath: workflows/workflow-id.md
originalUrl: 'https://docs.n8n.io/workflows/workflow-id'
url: >-
  https://docs.n8n.io/build/understand-workflows/workflow-components/find-your-workflow-id
layout:
  description:
    visible: false
---

# 查找你的工作流 ID / Find your workflow ID

你的工作流 ID（workflow ID）可以在以下位置找到：

* 当前打开的工作流的网址（URL）中。
* 工作流设置的标题中。

{% hint style="info" %}
**大白话**：工作流 ID 是 n8n 给每个工作流分配的唯一编号，用来区分不同的工作流。当你打开一个工作流时，浏览器地址栏里网址的最后一段字符（一串字母和数字）就是它的 ID，例如网址 `https://你的-n8n-地址/workflow/abc123` 中的 `abc123`。另外，打开工作流的设置面板（Settings），标题里也会显示这个 ID。当你需要向别人提供工作流链接、或在 API / 自动化场景中引用某个工作流时，都需要用到它。
{% endhint %}
