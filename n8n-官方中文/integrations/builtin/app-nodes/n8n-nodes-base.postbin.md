---
title: PostBin 节点文档
description: >-
  学习如何在 n8n 中使用 PostBin 节点。按照技术文档将 PostBin
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: PostBin 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.postbin.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.postbin'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.postbin'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：PostBin 是一个「Webhook 测试工具」——它给你一个临时网址，任何发到这个网址的请求都会被记录下来，方便你调试 API 客户端和 Webhook（比如看看第三方到底往你的接口发了什么）。这个节点让你在 n8n 里直接创建/删除/获取 bin（垃圾桶），以及发送、获取、移除请求。
{% endhint %}

# PostBin 节点

PostBin 是一个帮助你测试 API 客户端和 Webhook 的服务。使用 PostBin 节点来自动化你在 PostBin 中的工作，并把它与其它应用集成。n8n 内置支持 PostBin 的大量功能，包括创建和删除 bin（垃圾桶），以及获取和发送请求（request）。

在本页你可以看到 PostBin 节点支持的全部操作列表，以及更多资源的链接。

## 操作

* Bin（垃圾桶）
	* Create（创建）
	* Get（获取）
	* Delete（删除）
* Request（请求）
	* Get（获取）
	* Remove First（移除第一个）
	* Send（发送）

## 模板与示例

[浏览 PostBin 节点的官方集成模板](https://n8n.io/integrations/postbin)，或[搜索全部模板](https://n8n.io/workflows/)。

## 发送请求

要向 PostBin bin 发送请求：

1. 前往 [PostBin](https://www.toptal.com/developers/postbin/) 并按步骤生成一个新的 bin。PostBin 会给你一个唯一 URL，其中包含一个 bin ID。
2. 在 PostBin 节点中，选择 **Request（请求）** 资源。
3. 选择你要执行的 **Operation（操作）** 类型。
4. 在 **Bin ID** 中填入你的 bin ID。

## 创建和管理 bin

你可以用 PostBin 节点创建和管理 PostBin bin。

1. 在 **Resource（资源）** 中选择 **Bin（垃圾桶）**。
2. 选择一个 **Operation（操作）**。你可以创建、删除或获取一个 bin。
