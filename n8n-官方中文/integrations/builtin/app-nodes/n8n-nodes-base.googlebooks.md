---
title: Google Books 节点文档
description: >-
  了解如何在 n8n 中使用 Google Books 节点。按照技术文档把 Google Books 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Google Books 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.googlebooks.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlebooks'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlebooks'
layout:
  description:
    visible: false
---
# Google Books 节点

> **大白话**：Google Books 是谷歌的在线图书平台。这个节点让你在 n8n 工作流里操作书架（Bookshelf）和图书（Volume），比如把某本书添加到书架、读取书架里的书、按关键词搜书。

使用 Google Books 节点可以在 Google Books 中实现工作自动化，并把 Google Books 与其他应用集成。n8n 内置支持多种 Google Books 功能，包括获取指定用户的书架、往书架里加书、获取图书信息。

本页面列出了 Google Books 节点支持的操作，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Google 凭证](../credentials/google/README.md)。
{% endhint %}

## 操作

* Bookshelf（书架）
    * Retrieve a specific bookshelf resource for the specified user（获取指定用户的单个书架）
    * Get all public bookshelf resource for the specified user（获取指定用户的全部公开书架）
* Bookshelf Volume（书架中的图书）
    * Add a volume to a bookshelf（往书架添加一本书）
    * Clears all volumes from a bookshelf（清空书架里的全部图书）
    * Get all volumes in a specific bookshelf for the specified user（获取指定用户某个书架里的全部图书）
    * Moves a volume within a bookshelf（在书架内移动一本书的位置）
    * Removes a volume from a bookshelf（从书架移除一本书）
* Volume（图书）
    * Get a volume resource based on ID（按 ID 获取一本书的信息）
    * Get all volumes filtered by query（按搜索词获取多本书）

## 模板和示例

[浏览 Google Books 节点文档集成模板](https://n8n.io/integrations/google-books) 或 [搜索全部模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
