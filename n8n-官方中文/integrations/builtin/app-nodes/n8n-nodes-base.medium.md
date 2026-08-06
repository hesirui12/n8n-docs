---
title: Medium 节点文档
description: >-
  学习如何在 n8n 中使用 Medium 节点。按照技术文档将 Medium
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Medium 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.medium.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.medium'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.medium'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Medium 是著名的写作/博客平台。不过注意！官方已经停止支持 Medium API 了——也就是说，这个节点虽然还躺在 n8n 的节点列表里，但你已经无法配置新的 API Key 来认证使用了。如果你以前配置过旧 Key，想看看还能不能用，可以参考下面的凭证文档。此节点原本支持发文章和查出版物列表。
{% endhint %}

# Medium 节点

使用 Medium 节点来自动化你在 Medium 中的工作，并把它与其它应用集成。n8n 内置支持 Medium 的大量功能，包括创建文章（post）和获取出版物（publication）。

在本页你可以看到 Medium 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="warning" %}
**Medium API 已不再支持**

Medium 已停止支持 Medium API。Medium 节点仍会出现在 n8n 中，但你将无法配置新的 API Key 进行认证。

关于如何设置已有的 API Key，请参考 [Medium 凭证](../credentials/medium.md)。
{% endhint %}

（官方此处嵌入了通用资源组件，此处从略。）

## 操作

* Post（文章）
    * Create a post（创建文章）
* Publication（出版物）
    * Get all publications（获取全部出版物）

## 模板与示例

[浏览 Medium 节点的官方集成模板](https://n8n.io/integrations/medium)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
