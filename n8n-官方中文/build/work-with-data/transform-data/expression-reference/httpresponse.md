---
nodeTitle: Httpresponse
originalFilePath: data/expression-reference/httpresponse.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/httpresponse'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/httpresponse
layout:
  description:
    visible: false
---
# HTTPResponse HTTP 响应 <a href="#httpresponse" id="httpresponse"></a>

{% hint style="info" %}
**大白话**：`$response` 保存了上一次 HTTP 请求的返回结果——响应体（body）、响应头（headers）、状态码（statusCode）等。只在「HTTP 请求」节点里可用。
{% endhint %}

## `$response`.**`body`** <a href="#dollarresponsebody" id="dollarresponsebody"></a>

**说明：** 上一次 HTTP 调用返回的响应对象中的主体（body）部分。只在「HTTP Request（HTTP 请求）」节点里可用

**语法：** `$response`.`$response`.**`body`**

**返回：** Object（对象）

**来源：** n8n 自定义功能

## `$response`.**`headers`** <a href="#dollarresponseheaders" id="dollarresponseheaders"></a>

**说明：** 上一次 HTTP 调用返回的响应头（headers）。只在「HTTP Request（HTTP 请求）」节点里可用。

**语法：** `$response`.`$response`.**`headers`**

**返回：** Object（对象）

**来源：** n8n 自定义功能

## `$response`.**`statusCode`** <a href="#dollarresponsestatuscode" id="dollarresponsestatuscode"></a>

**说明：** 上一次 HTTP 调用返回的 HTTP 状态码。只在「HTTP Request（HTTP 请求）」节点里可用。

**语法：** `$response`.`$response`.**`statusCode`**

**返回：** Number（数字）

**来源：** n8n 自定义功能

## `$response`.**`statusMessage`** <a href="#dollarresponsestatusmessage" id="dollarresponsestatusmessage"></a>

**说明：** 关于请求状态的可选消息。只在「HTTP Request（HTTP 请求）」节点里可用。

**语法：** `$response`.`$response`.**`statusMessage`**

**返回：** String（字符串）

**来源：** n8n 自定义功能
