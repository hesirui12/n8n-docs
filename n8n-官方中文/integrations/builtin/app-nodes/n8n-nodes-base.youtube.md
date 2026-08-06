---
title: YouTube 节点文档
description: >-
  学习如何在 n8n 中使用 YouTube 节点。按照技术文档将 YouTube
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: YouTube 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.youtube.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.youtube'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.youtube'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：YouTube 就是全球最大的视频网站。这个节点可以帮你：管理频道（Channel，获取/更新/上传频道横幅）、播放列表（Playlist，增删改查）、播放列表项（Playlist Item，往列表里加视频）、视频（Video，上传/删除/获取/打分/更新）、以及获取视频分类（Video Category）。适合做视频内容自动化，比如把新视频自动加到播放列表、自动上传视频。
{% endhint %}

# YouTube 节点

使用 YouTube 节点来自动化你在 YouTube 中的工作，并把它与其它应用集成。n8n 内置支持 YouTube 的大量功能，包括获取和更新频道，以及创建和删除播放列表。

在本页你可以看到 YouTube 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [YouTube 凭证](../credentials/google/README.md)。
{% endhint %}

（官方此处嵌入了通用资源组件，此处从略。）

## 操作

* Channel（频道）
    * Retrieve a channel（获取频道）
    * Retrieve all channels（获取全部频道）
    * Update a channel（更新频道）
    * Upload a channel banner（上传频道横幅）
* Playlist（播放列表）
    * Create a playlist（创建播放列表）
    * Delete a playlist（删除播放列表）
    * Get a playlist（获取播放列表）
    * Retrieve all playlists（获取全部播放列表）
    * Update a playlist（更新播放列表）
* Playlist Item（播放列表项）
    * Add an item to a playlist（向播放列表添加条目）
    * Delete a item from a playlist（从播放列表删除条目）
    * Get a playlist's item（获取播放列表的条目）
    * Retrieve all playlist items（获取全部播放列表条目）
* Video（视频）
    * Delete a video（删除视频）
    * Get a video（获取视频）
    * Retrieve all videos（获取全部视频）
    * Rate a video（给视频打分/评价）
    * Update a video（更新视频）
    * Upload a video（上传视频）
* Video Category（视频分类）
    * Retrieve all video categories（获取全部视频分类）

## 模板与示例

[浏览 YouTube 节点的官方集成模板](https://n8n.io/integrations/youtube)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
