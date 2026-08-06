---
title: RSS Feed Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 RSS Feed Trigger（RSS 订阅触发器）节点。按照本文档将
  RSS Feed Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: RSS Feed Trigger 节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.rssfeedreadtrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.rssfeedreadtrigger
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.rssfeedreadtrigger
layout:
  description:
    visible: false
---

# RSS Feed Trigger 节点

> **大白话**：这个节点是个「RSS 订阅雷达」。它会定时去"盯"一个 RSS 源（比如某个博客、新闻站的最新文章列表），一旦发现有新文章发布，就立刻启动工作流。常用来做"新文章自动通知"或"自动抓取入库"。

RSS Feed Trigger（RSS 订阅触发器）节点允许你在 RSS 源发布了新条目时启动一个 n8n 工作流。

本页将介绍 RSS Feed Trigger 节点支持的操作列表，以及更多资源的链接。

## 节点参数

* **Poll Times（轮询时间）**：选择一个轮询 **Mode（模式）** 来设置多久触发一次轮询。你选择的 **Mode** 会添加或移除相应的字段。请参考下面的小节，为每种模式类型配置参数。
* **Feed URL（订阅源 URL）**：输入要轮询的 RSS 源的 URL。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/DnRpcOvtlMPcHD6I3kyx/" %}

> **小白提示**：上面嵌入的是官方文档中关于"轮询时间"设置的通用说明（如何选择轮询模式、是否要在节点执行之间保留数据等），内容会在文档站点中自动渲染。

## 模板与示例

[浏览 RSS Feed Trigger 节点的集成模板](https://n8n.io/integrations/rss-feed-trigger) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

n8n 还提供了用于 RSS 订阅的应用节点（app node）。你可以[在这里](n8n-nodes-base.rssfeedread.md)找到该节点的文档。
