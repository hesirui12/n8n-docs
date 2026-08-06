---
title: RSS 读取（RSS Read）
description: >-
  n8n（工作流自动化平台）中 RSS 读取节点的文档。
  包含使用指南和示例链接。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: RSS 读取（RSS Read）
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.rssfeedread.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.rssfeedread'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.rssfeedread'
layout:
  description:
    visible: false
---

# RSS 读取（RSS Read）

> **大白话**：RSS 就像网站提供的"更新通知订阅"——很多博客、新闻网站、播客都有一个 RSS 地址，里面列着它最新的文章/条目。这个节点就是"读一次 RSS"：把那个地址里的最新内容（标题、链接、摘要、发布时间等）一次性拉出来，交给后面的节点处理。注意：它是**普通节点**，不是触发器，通常放在触发器（比如定时触发）后面使用。

使用 RSS 读取节点，从互联网上发布的 RSS 订阅源中读取数据。

## 节点参数（Node parameters）

- **URL**：输入你想要读取的 RSS 出版物（订阅源）的 URL。

> **小白提示**：怎么找到 RSS 地址？很多博客会在页面里显示一个橙色的 RSS 图标或链接，网址里通常带 `feed`、`rss` 或 `atom` 字样。例如：`https://blog.n8n.io/rss/`。

## 节点选项（Node options）

* **Ignore SSL Issues（忽略 SSL 问题）**：选择 n8n 是否忽略 SSL/TLS 验证：打开（turned on）则忽略，关闭（turned off）则不忽略。

> **小白提示**：一般保持关闭（进行验证，更安全）。只有当订阅源网站的证书有问题时才临时打开。

## 模板和示例（Templates and examples）

[浏览 RSS 读取（RSS Read）集成模板](https://n8n.io/integrations/rss-read) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

n8n 还为 RSS 读取提供了触发器节点（trigger node）。你可以[在此处](n8n-nodes-base.rssfeedreadtrigger.md)找到触发器节点的文档。

> **小白提示**：如果想让工作流"一有更新就自动运行"，就用触发器版本；如果只是想"定时去读一次"，用「定时触发（Schedule Trigger）」+ 本节点即可。
