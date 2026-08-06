---
title: Storyblok 节点文档
description: >-
  学习如何在 n8n 中使用 Storyblok 节点。按照技术文档将 Storyblok
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Storyblok 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.storyblok.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.storyblok'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.storyblok'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Storyblok 是一个「无头 CMS（内容管理系统）」——用可视化的方式管理网站内容，再通过 API 把内容发给任何前端。里面的内容单元叫 Story（故事/内容条目）。这个节点分两套 API 操作：Content API（内容 API，只读内容）和 Management API（管理 API，可删、可发布/取消发布内容）。适合做网站内容自动发布、批量更新内容。
{% endhint %}

# Storyblok 节点

使用 Storyblok 节点来自动化你在 Storyblok 中的工作，并把它与其它应用集成。n8n 内置支持 Storyblok 的大量功能，包括获取、删除和发布内容条目（Story）。

在本页你可以看到 Storyblok 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Storyblok 凭证](../credentials/storyblok.md)。
{% endhint %}

## 操作

### Content API（内容 API）

- **Story（内容条目）**
    - Get a story（获取一个内容条目）
    - Get all stories（获取全部内容条目）

### Management API（管理 API）

- **Story（内容条目）**
    - Delete a story（删除内容条目）
    - Get a story（获取内容条目）
    - Get all stories（获取全部内容条目）
    - Publish a story（发布内容条目）
    - Unpublish a story（取消发布内容条目）

## 模板与示例

[浏览 Storyblok 节点的官方集成模板](https://n8n.io/integrations/storyblok)，或[搜索全部模板](https://n8n.io/workflows/)。
