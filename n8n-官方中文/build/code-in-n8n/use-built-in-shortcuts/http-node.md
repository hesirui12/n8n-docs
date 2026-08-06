---
description: >-
  n8n 提供这些方法，让你在表达式中更轻松地完成常见任务。
contentType: reference
hide:
  - toc
nodeTitle: HTTP node
originalFilePath: code/builtin/http-node-variables.md
originalUrl: 'https://docs.n8n.io/code/builtin/http-node-variables'
url: 'https://docs.n8n.io/build/code-in-n8n/use-built-in-shortcuts/http-node'
layout:
  description:
    visible: false
---

# HTTP 节点变量 / HTTP node variables

这些变量用于在 HTTP 节点中处理请求（request）和响应（response）时使用，尤其是在**配置了分页（pagination）**的情况下。

{% hint style="info" %}
**大白话**：什么是分页？当你用 HTTP 节点去调用一个接口，而这个接口的数据量很大、一次只能返回一页（比如每页 100 条、总共有 1000 条）时，你就需要「翻页」把所有数据都拉回来。本页介绍的是 n8n 专门为 HTTP 节点准备好的几个**内置变量**，方便你在写表达式时直接使用，不用自己苦思冥想怎么拿数据。
{% endhint %}

关于如何使用 HTTP 节点（包括如何配置分页），请参阅 [HTTP Request（HTTP 请求）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.httprequest) 文档。

关于分页配置的示例，请参阅 [HTTP Request 节点菜谱（cookbook）| 分页（Pagination）](../cookbook/http-request-node/pagination.md)。

{% hint style="info" %}
**仅限 HTTP 节点使用**

这些变量**只能在 HTTP 节点**的表达式中使用，不能用在其他节点里。
{% endhint %}

{% hint style="info" %}
**大白话**：也就是说，这些变量是「HTTP 节点专属的快捷方式」。你在 HTTP 节点的任何参数（比如 URL、请求体、分页设置）里都能用它们，但拿到别的节点（比如 Code 节点、Set 节点）里去写就会报错。它们通常配合 HTTP 请求的请求头（headers）、响应体（response body）等数据使用，帮你快速取出想要的部分。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/I3wrw8MpZtbjn2khruiw/" %}

{% hint style="info" %}
**大白话**：上面嵌入的这段内容会列出 HTTP 节点分页时可用变量的详细清单（例如 `response`、`pageCount`、`request` 等）。它们能让你在写分页相关的表达式时少踩坑——比如判断「是否还有下一页」「当前是第几页」等，都可以直接用现成的变量完成，不需要自己手写复杂的判断逻辑。
{% endhint %}
