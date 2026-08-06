---
title: One Simple API 节点文档
description: >-
  学习如何在 n8n 中使用 One Simple API 节点。按照技术
  文档将 One Simple API 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: One Simple API 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.onesimpleapi.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.onesimpleapi'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.onesimpleapi'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：One Simple API 是一个「杂项小工具 API」服务，把一堆常用的网络小功能打包成接口：货币换算、获取网页图片元数据、查 Instagram / Spotify 资料、还原短链接、生成二维码、验证邮箱、网页转 PDF、查网站 SEO 信息、网页截图等。这个节点让你在 n8n 里一键调用这些工具，不用自己写代码。
{% endhint %}

# One Simple API 节点

使用 One Simple API 节点来自动化你在 One Simple API 中的工作，并把它与其它应用集成。n8n 内置支持 One Simple API 的大量功能，包括获取个人资料、检索信息和生成工具（utilities）。

在本页你可以看到 One Simple API 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [One Simple API 凭证](../credentials/onesimpleapi.md)。
{% endhint %}

## 操作

* Information（信息）
    * Convert a value between currencies（货币换算）
    * Retrieve image metadata from a URL（从 URL 获取图片元数据）
* Social Profile（社交资料）
    * Get details about an Instagram profile（获取 Instagram 个人资料详情）
    * Get details about a Spotify Artist（获取 Spotify 艺人详情）
* Utility（工具）
    * Expand a shortened url（还原被缩短的链接）
    * Generate a QR Code（生成二维码）
    * Validate an email address（验证邮箱地址）
* Website（网站）
    * Generate a PDF from a webpage（把网页生成 PDF）
    * Get SEO information from website（获取网站 SEO 信息）
    * Create a screenshot from a webpage（给网页截图）

## 模板与示例

[浏览 One Simple API 节点的官方集成模板](https://n8n.io/integrations/one-simple-api)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [One Simple API 官方文档](https://onesimpleapi.com/docs)。
