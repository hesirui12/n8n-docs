---
title: GraphQL
description: >-
  n8n（工作流自动化平台）中 GraphQL 节点的文档。
  包含使用指南和示例链接。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: GraphQL
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.graphql.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.graphql'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.graphql'
layout:
  description:
    visible: false
---

# GraphQL

> **大白话**：GraphQL 是"更聪明的 API 查询语言"。普通 API 通常一次性返回一大堆固定字段，而 GraphQL 可以让你**精确指定**：我只想要这几个字段，一次请求就拿到，不多不少。这个节点就是用来向 GraphQL 接口发查询请求的。比如查 GitHub 的 GraphQL 接口，获取某个仓库的星标数、最新版本等信息。

[GraphQL](https://graphql.org/) 是一种开源的 API 数据查询和操作语言，也是一个用现有数据来满足查询的运行时。使用 GraphQL 节点来查询 GraphQL 端点（endpoint）。

## 节点参数（Node parameters）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

### 身份验证（Authentication）

选择要使用的身份验证类型。

如果你选择了除 **None（无）** 之外的任何类型，屏幕上会出现 **Credential for <所选验证类型>（<所选验证类型>的凭据）** 参数，让你为该验证类型选择现有的或创建一个新的身份验证凭据。

> **小白提示**：公共接口通常选 **None**（不需要登录）；私有接口按对方文档要求选 Basic Auth、Header Auth、OAuth2 等，然后填对应的凭据。

### HTTP 请求方法（HTTP Request Method）

选择节点应使用的底层 HTTP 请求方法。可选：

* **GET**
* **POST**：如果选择此方法，你还需要选择节点用于查询数据（payload）的 **Request Format（请求格式）**。可选：
    * **GraphQL (Raw)（GraphQL 原始格式）**
    * **JSON**

### 端点（Endpoint）

输入你想要访问的 GraphQL 端点地址。

> **小白提示**：端点就是"接口的网址"，通常是某个以 `/graphql` 结尾的 URL，比如 `https://api.github.com/graphql`。

### 忽略 SSL 问题（Ignore SSL Issues）

打开此开关时，n8n 会忽略 SSL 证书验证失败。

> **小白提示**：生产环境请保持关闭（更安全）。只有测试环境证书有问题时才临时打开。

### 查询（Query）

输入你想要执行的 GraphQL 查询。

有关如何编写查询的信息，请参考 [相关资源](#相关资源)。

### 响应格式（Response Format）

选择你希望接收查询结果的格式。可选：

* **JSON**
* **String（字符串）**：如果选择此格式，请输入一个 **Response Data Property Name（响应数据属性名称）**，用来定义字符串写入的属性。

> **小白提示**：选 JSON 时结果以结构化数据传给下一个节点，方便后续处理；选 String 时结果是一段纯文本，适合只想简单看一眼或用作文本处理的场景。

## 请求头（Headers）

输入你希望作为查询一部分传递的任何 **Headers（请求头）**，以 **Name（名称）** / **Value（值）** 键值对形式填写。

> **小白提示**：很多 GraphQL 接口需要在请求头里带上 Token 或 API Key，比如 GitHub 需要 `Authorization: Bearer 你的Token`。在这里把请求头的名字和值填进去即可。

## 模板和示例（Templates and examples）

[浏览 GraphQL 集成模板](https://n8n.io/integrations/graphql) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

要使用 GraphQL 节点，你需要理解 GraphQL 查询语言。GraphQL 官方提供了一份 [GraphQL 入门教程（Introduction to GraphQL）](https://graphql.org/learn/)。

> **小白提示**：GraphQL 查询长得像 JSON 的"精简版"，例如查询某个用户的名字和邮箱可以写成类似：
> ```graphql
> query {
>   user(id: "1") {
>     name
>     email
>   }
> }
> ```
> 想入门就先看看官方教程，理解 query（查询）、mutation（变更）、schema（结构定义）这几个概念即可。
