---
title: Contentful 节点文档
description: >-
  学习如何在 n8n 中使用 Contentful 节点。按照技术文档将 Contentful
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Contentful 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.contentful.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.contentful'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.contentful'
layout:
  description:
    visible: false
---

# Contentful 节点

> **大白话**：Contentful 是一个很流行的"无头 CMS"（只负责存内容，显示由你的网站/App 决定），常用于给多个平台（官网、App、小程序）统一管理内容。这个节点让 n8n 能读取 Contentful 里的各种数据——比如文章条目（Entry）、图片素材（Asset）、内容类型、语言版本（Locale）和工作空间（Space）信息。举例：内容一更新，工作流自动把新文章同步推送到你的官网。

使用 Contentful 节点可以自动化处理 Contentful 里的工作，并让 Contentful 与其他应用程序互通。n8n 内置支持 Contentful 的众多功能，包括获取素材（Asset）、内容类型（Content Type）、条目（Entry）、语言版本（Locale）和空间（Space）等。

本页列出了 Contentful 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Contentful 凭证](../credentials/contentful.md)。
{% endhint %}

## 支持的操作

* Asset（素材）
    * 获取一个素材
    * 获取所有素材
* Content Type（内容类型）
    * 获取
* Entry（条目）
    * 获取一个条目
    * 获取所有条目
* Locale（语言版本）
    * 获取所有语言版本
* Space（空间）
    * 获取空间信息

## 模板与示例


[浏览 Contentful 节点集成模板](https://n8n.io/integrations/contentful) 或 [搜索全部模板](https://n8n.io/workflows/)
