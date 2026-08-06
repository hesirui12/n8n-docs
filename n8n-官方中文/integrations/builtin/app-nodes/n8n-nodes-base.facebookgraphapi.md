---
title: Facebook Graph API 节点文档
description: >-
  了解如何在 n8n 中使用 Facebook Graph API 节点。按照技术文档把 Facebook Graph API 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Facebook Graph API 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.facebookgraphapi.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.facebookgraphapi
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.facebookgraphapi
layout:
  description:
    visible: false
---

# Facebook Graph API 节点

> **大白话**：Facebook Graph API 是 Facebook 官方 API，用来读写 Facebook 上的页面、帖子、用户等数据。这个节点像一个「万能请求器」：你指定接口地址（Host URL）、请求方式（GET/POST/DELETE）和参数，它帮你把请求发出去，视频上传也能做。

用 Facebook Graph API 节点在 Facebook Graph API 里自动化干活，并把 Facebook Graph API 和其他应用串起来。n8n 内置支持 Facebook Graph API 的大量功能，包括对多个参数使用 GET、POST、DELETE 查询，比如主机 URL、请求方法等等。

本页面列出了 Facebook Graph API 节点支持的所有操作，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何配置认证，请参考 [Facebook Graph API 凭据](../credentials/facebookgraph.md)。
{% endhint %}

## 支持的操作

* **Default（默认）**
    * GET
    * POST
    * DELETE
* **Video Uploads（视频上传）**
    * GET
    * POST
    * DELETE

### 参数

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

* **Host URL（主机地址）**：请求发往的主机地址。可选值如下：
    * **Default（默认）**：请求发送到 `graph.facebook.com` 主机地址。适用于大多数请求。
    * **Video（视频）**：请求发送到 `graph-video.facebook.com` 主机地址。仅用于视频上传请求。
* **HTTP Request Method（HTTP 请求方法）**：本次请求使用的方法，可选：
    * **GET**
    * **POST**
    * **DELETE**
* **Graph API Version（Graph API 版本）**：本次请求使用的 [Facebook Graph API](https://developers.facebook.com/docs/graph-api/changelog) 版本。
* **Node（节点）**：要操作的节点，例如 `/<page-id>/feed`。更多信息见[Facebook 官方开发者文档](https://developers.facebook.com/docs/graph-api/using-graph-api)。
* **Edge（边）**：要操作的节点边。Edge 表示挂在该节点上的一类对象集合。
* **Ignore SSL Issues（忽略 SSL 问题）**：开启后，即使无法验证 SSL 证书，也会继续下载响应内容。
* **Send Binary File（发送二进制文件）**：仅用于 `POST` 操作。开启后，二进制数据会作为请求体发送。需要设置以下参数：
    * **Input Binary Field（输入二进制字段）**：包含待上传文件数据的二进制属性名称。

## 模板和示例

[浏览 Facebook Graph API 节点文档集成模板](https://n8n.io/integrations/facebook-graph-api)，或[搜索所有模板](https://n8n.io/workflows/)
