---
title: Ghost 节点文档
description: >-
  了解如何在 n8n 中使用 Ghost 节点。按照技术文档把 Ghost 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Ghost 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.ghost.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.ghost'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.ghost'
layout:
  description:
    visible: false
---

# Ghost 节点

> **大白话**：Ghost 是一个博客/内容发布平台。这个节点让你在 n8n 里管理文章（Post）：通过 Admin API 可以建、删、改、查文章；通过 Content API 只能查文章（前台公开接口，权限更小）。

用 Ghost 节点在 Ghost 里自动化干活，并把 Ghost 和其他应用串起来。n8n 内置支持 Ghost 的大量功能，包括通过 Admin API 和 Content API 创建、更新、删除和获取文章。

本页面列出了 Ghost 节点支持的所有操作，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何配置认证，请参考 [Ghost 凭据](../credentials/ghost.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 支持的操作

### Admin API（管理接口）

* **Post（文章）**
    * Create a post（创建文章）
    * Delete a post（删除文章）
    * Get a post（获取单篇文章）
    * Get all posts（获取全部文章）
    * Update a post（更新文章）

### Content API（内容接口）

* **Post（文章）**
    * Get a post（获取单篇文章）
    * Get all posts（获取全部文章）

## 模板和示例

[浏览 Ghost 节点文档集成模板](https://n8n.io/integrations/ghost)，或[搜索所有模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
