---
title: Google Slides 节点文档
description: 学习如何在 n8n 中使用 Google Slides 节点。按照技术文档将 Google Slides 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Google Slides 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.googleslides.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googleslides'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googleslides'
layout:
  description:
    visible: false
---

# Google Slides 节点

> 💡 **大白话**：Google Slides 是谷歌版「在线 PowerPoint」。用这个节点，n8n 可以自动创建演示文稿、读取幻灯片内容、获取页面缩略图，还能批量替换文字（比如把模板里的「{姓名}」替换成真实数据，适合批量生成 PPT）。

使用 Google Slides 节点自动化 Google Slides 中的工作，并将 Google Slides 与其他应用集成。n8n 内置支持大量 Google Slides 功能，包括创建演示文稿和获取页面。

本页列出了 Google Slides 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何设置认证，请参考 [Google 凭据](../credentials/google/README.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 支持的操作（Operations）

* Page（页面）
    * Get a page（获取一个页面）
    * Get a thumbnail（获取缩略图）
* Presentation（演示文稿）
    * Create a presentation（创建演示文稿）
    * Get a presentation（获取演示文稿）
    * Get presentation slides（获取演示文稿的幻灯片）
    * Replace text in a presentation（替换演示文稿中的文字）

## 模板和示例（Templates and examples）

[浏览 Google Slides 节点文档集成模板](https://n8n.io/integrations/google-slides) 或 [搜索所有模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
