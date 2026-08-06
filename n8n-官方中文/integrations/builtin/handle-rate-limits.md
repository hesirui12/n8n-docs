---
title: 处理 API 速率限制（Handling API rate limits）
contentType: howto
nodeTitle: Handle rate limits
originalFilePath: integrations/builtin/rate-limits.md
originalUrl: https://docs.n8n.io/integrations/builtin/rate-limits
url: https://docs.n8n.io/integrations/builtin/handle-rate-limits
description: 使用 n8n 集成时，如何处理 API 速率限制。
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

# 处理速率限制（Handle rate limits）

{% hint style="info" %}
**大白话**：很多 API 都会限制你在一定时间内能调用多少次（比如「每分钟最多 100 次」）。一旦超了，服务就会报 429 错误（请求太多）。这一页教你两种应对办法：一是打开节点的 **Retry On Fail（失败重试）** 设置，让它失败后等一会儿再试；二是用 **Loop Over Items（循环项目）** 和 **Wait（等待）** 节点，把请求拆成小批、中间加停顿。另外，HTTP Request 节点自己也有「批处理」和「翻页」功能可以对付这类问题。
{% endhint %}

API[^1] 速率限制是对请求频率的限制。例如，某个 API 可能会限制你每分钟或每天可以发出的请求次数。

API 还可能限制你在单次请求中能发送的数据量，或者限制 API 在单次响应中能发送的数据量。

## 识别速率限制问题（Identify rate limit issues）

当 n8n 节点触发速率限制时，它会报错。n8n 会在节点的输出面板中显示错误信息，其中包含服务返回的错误消息。

如果 n8n 收到服务返回的 429（请求过多）错误，错误信息会是 **The service is receiving too many requests from you（服务正在接收太多来自你的请求）**。

要查看你所使用服务的速率限制，请参考该服务的 API 文档。

## 处理集成的速率限制（Handle rate limits for integrations）

在 n8n 的集成中，有两种处理速率限制的方法：使用 **Retry On Fail（失败重试）** 设置，或者组合使用 [Loop Over Items（循环项目）](core-nodes/n8n-nodes-base.splitinbatches.md) 和 [Wait（等待）](core-nodes/n8n-nodes-base.wait.md) 节点：

* Retry On Fail 会在 API 请求尝试之间增加停顿。
* 使用 Loop Over Items 和 Wait，你可以把请求数据拆成更小的块，并在请求之间暂停。

### 启用 Retry On Fail（失败重试）

当你启用 Retry On Fail 时，如果第一次请求失败，节点会自动重试。

1. 打开节点。
2. 选择 **Settings（设置）**。
3. 打开 **Retry On Fail** 开关。
4. 配置重试设置：如果用这个设置来解决速率限制问题，请把 **Wait Between Tries (ms)（重试间隔毫秒数）** 设置为大于速率限制的值。例如，如果你使用的 API 每秒只允许一个请求，就把 **Wait Between Tries (ms)** 设为 `1000`，以便等待 1 秒再重试。

### 使用 Loop Over Items 和 Wait（循环项目与等待）

使用 Loop Over Items 节点把输入数据分批，再使用 Wait 节点在每个请求之间引入暂停。

1. 在调用 API 的节点之前添加 Loop Over Items 节点。如何配置该节点，请参阅 [Loop Over Items（循环项目）](core-nodes/n8n-nodes-base.splitinbatches.md)。
2. 在调用 API 的节点之后添加 Wait 节点，并将其连接回 Loop Over Items 节点。如何配置该节点，请参阅 [Wait（等待）](core-nodes/n8n-nodes-base.wait.md)。

例如，在使用 OpenAI 时处理速率限制：

!["Screenshot of a workflow using the Loop Over Items node and Wait node to handle API rate limits for the OpenAI APIs"](../.gitbook/assets/loop-wait.png)

## 在 HTTP Request 节点中处理速率限制（Handle rate limits in the HTTP Request node）

HTTP Request 节点内置了处理速率限制和大量数据的设置。

### 批处理请求（Batch requests）

使用 **Batching（批处理）** 选项，可以发送多个请求、减小单次请求的大小，并在请求之间引入暂停。这相当于使用 Loop Over Items 和 Wait。

1. 在 HTTP Request 节点中，选择 **Add Option（添加选项）> Batching（批处理）**。
2. 设置 **Items per Batch（每批项目数）**：也就是每个请求中包含的输入项目数量。
3. 设置 **Batch Interval (ms)（批处理间隔毫秒数）**，以在请求之间添加延迟。例如，如果你使用的 API 每秒只允许一个请求，就把 **Batch Interval (ms)** 设为 `1000`，以便等待 1 秒。

### 翻页获取结果（Paginate results）

当 API 需要发送的数据量超出单次响应能力时，API 会对结果进行分页。关于 HTTP Request 节点中分页的更多信息，请参阅 [HTTP Request 节点 | 分页（Pagination）](core-nodes/n8n-nodes-base.httprequest/README.md#pagination)。

[^1]: API，即应用程序编程接口（application programming interfaces），提供对服务数据和功能的编程式访问。API 让软件更容易与外部系统交互。它们通常是传统面向用户界面（通过网页浏览器或 UI 访问）之外的另一种选择。
