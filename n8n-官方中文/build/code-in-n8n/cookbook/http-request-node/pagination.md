---
description: Pagination examples for the HTTP Request node.
contentType: howto
nodeTitle: Pagination
originalFilePath: code/cookbook/http-node/pagination.md
originalUrl: 'https://docs.n8n.io/code/cookbook/http-node/pagination'
url: 'https://docs.n8n.io/build/code-in-n8n/cookbook/http-request-node/pagination'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话：** 接口数据太多、一页装不下时，就用「分页」逐页拉取。n8n 支持三种玩法：①用响应里返回的下一页 URL（`$response`）；②按页码递增（`$pageCount + 1`）；③把分页参数放进请求体。照着下面的步骤配置就行。
{% endhint %}

# HTTP 请求节点中的分页 <a href="#pagination-in-the-http-request-node" id="pagination-in-the-http-request-node"></a>

HTTP 请求节点支持分页。本页提供一些配置示例，包括使用 [HTTP 节点变量](../../use-built-in-shortcuts/http-node.md)。

关于该节点的更多信息，参见 [HTTP Request](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.httprequest)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/91KTZVqkKv8rY72iELNl/" %}

## 启用分页 <a href="#enable-pagination" id="enable-pagination"></a>

在 HTTP 请求节点中，选择 **添加选项（Add Option）** > **分页（Pagination）**。

## 用响应里的 URL 获取下一页（使用 `$response`） <a href="#use-a-url-from-the-response-to-get-the-next-page-using-dollarresponse" id="use-a-url-from-the-response-to-get-the-next-page-using-dollarresponse"></a>

如果 API 在响应里返回了下一页的 URL：

1. 把**分页模式（Pagination Mode）**设置为 **响应包含下一页 URL（Response Contains Next URL）**。n8n 会显示该选项的参数。
1. 在**下一页 URL（Next URL）**里，用表达式[^1]来设置 URL。具体怎么写取决于你的 API 返回的数据。例如，如果 API 在响应体里带了一个叫 `next-page` 的参数：
	```javascript
	{{ $response.body["next-page"] }}
	```

## 用 `$pageCount` 按页码获取下一页 <a href="#get-the-next-page-by-number-using-dollarpagecount" id="get-the-next-page-by-number-using-dollarpagecount"></a>

如果你用的 API 支持按页码指定具体某一页：

1. 把**分页模式（Pagination Mode）**设置为 **每次请求更新一个参数（Update a Parameter in Each Request）**。
1. 把**类型（Type）**设置为 **查询（Query）**。
1. 输入查询参数的**名称（Name）**。这取决于你的 API，通常它的文档里会写。例如，有些 API 用名为 `page` 的查询参数来设置页码，所以**名称（Name）**就填 `page`。
1. 鼠标悬停在**值（Value）**上，打开**表达式（Expression）**开关。
1. 输入 `{{ $pageCount + 1 }}`

`$pageCount` 是 HTTP 请求节点已经抓取的页数，从 0 开始计数。大多数 API 的分页从 1 开始数（第一页就是第 1 页）。所以给 `$pageCount` 加上 `+1` 后：第一次循环抓第 1 页，第二次抓第 2 页，以此类推。

## 通过请求体参数进行分页 <a href="#navigate-pagination-through-body-parameters" id="navigate-pagination-through-body-parameters"></a>

如果你用的 API 允许通过请求体参数分页：

1. 把 HTTP 请求方法（Method）设置为 **POST**
1. 把**分页模式（Pagination Mode）**设置为 **每次请求更新一个参数（Update a Parameter in Each Request）**。
1. 在**类型（Type）**参数中选择 **请求体（Body）**。
1. 输入请求体参数的**名称（Name）**。这取决于你用的 API，`page` 是常见的键名。
1. 鼠标悬停在**值（Value）**上，打开**表达式（Expression）**开关。
1. 输入 `{{ $pageCount + 1 }}`

## 在查询中设置页大小 <a href="#set-the-page-size-in-the-query" id="set-the-page-size-in-the-query"></a>

如果你用的 API 支持在查询中指定页大小：

1. 在主节点参数里选择 **发送查询参数（Send Query Parameters）**（就是你刚打开节点时看到的那些参数，不是选项里的设置）。
1. 输入查询参数的**名称（Name）**。这取决于你的 API。例如，很多 API 用名为 `limit` 的查询参数来设置页大小，所以**名称（Name）**就填 `limit`。
1. 在**值（Value）**里输入你的页大小。

[^1]: 在 n8n 中，表达式（expressions）允许你通过执行 JavaScript 代码来动态填充节点参数。你可以不用静态值，而是用 n8n 表达式语法，根据之前节点的数据、其他工作流或你的 n8n 环境来定义值。
