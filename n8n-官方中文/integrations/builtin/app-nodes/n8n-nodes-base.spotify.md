---
title: Spotify 节点文档
description: >-
  学习如何在 n8n 中使用 Spotify 节点。按照技术文档将 Spotify
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Spotify 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.spotify.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.spotify'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.spotify'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Spotify 是全球最大的「在线音乐流媒体平台」。这个节点可以帮你：查专辑、歌手、歌曲信息，搜索音乐，管理你的音乐库和播放列表，甚至控制播放器（播放/暂停/切歌/调音量/把歌加进队列）。适合做「每周新歌推荐推送」「歌手动态监控」「自动生成播放列表」等音乐类自动化。
{% endhint %}

# Spotify 节点

使用 Spotify 节点来自动化你在 Spotify 中的工作，并把它与其它应用集成。n8n 内置支持 Spotify 的大量功能，包括获取专辑和歌手信息。

在本页你可以看到 Spotify 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Spotify 凭证](../credentials/spotify.md)。
{% endhint %}

## 操作

* Album（专辑）
    * Get an album by URI or ID.（按 URI 或 ID 获取专辑）
    * Get a list of new album releases.（获取新专辑发布列表）
    * Get an album's tracks by URI or ID.（按 URI 或 ID 获取专辑的歌曲）
    * Search albums by keyword.（按关键词搜索专辑）
* Artist（歌手）
    * Get an artist by URI or ID.（按 URI 或 ID 获取歌手）
    * Get an artist's albums by URI or ID.（按 URI 或 ID 获取歌手的专辑）
    * Get an artist's related artists by URI or ID.（按 URI 或 ID 获取歌手的相关歌手）
    * Get an artist's top tracks by URI or ID.（按 URI 或 ID 获取歌手的热门歌曲）
    * Search artists by keyword.（按关键词搜索歌手）
* Library（音乐库）
    * Get the user's liked tracks.（获取用户喜欢的歌曲）
* My Data（我的数据）
    * Get your followed artists.（获取你关注的歌手）
* Player（播放器）
    * Add a song to your queue.（把歌曲加进你的播放队列）
    * Get your currently playing track.（获取你当前正在播放的歌曲）
    * Skip to your next track.（跳到下一首）
    * Pause your music.（暂停播放）
    * Skip to your previous song.（回到上一首）
    * Get your recently played tracks.（获取你最近播放的歌曲）
    * Resume playback on the current active device.（在当前的活跃设备上恢复播放）
    * Set volume on the current active device.（设置当前活跃设备的音量）
    * Start playing a playlist, artist, or album.（开始播放一个播放列表、歌手或专辑）
* Playlist（播放列表）
    * Add tracks from a playlist by track and playlist URI or ID.（按歌曲和播放列表的 URI 或 ID，把歌曲加进播放列表）
    * Create a new playlist.（创建新播放列表）
    * Get a playlist by URI or ID.（按 URI 或 ID 获取播放列表）
    * Get a playlist's tracks by URI or ID.（按 URI 或 ID 获取播放列表的歌曲）
    * Get a user's playlists.（获取用户的播放列表）
    * Remove tracks from a playlist by track and playlist URI or ID.（按歌曲和播放列表的 URI 或 ID，从播放列表移除歌曲）
    * Search playlists by keyword.（按关键词搜索播放列表）
* Track（歌曲）
    * Get a track by its URI or ID.（按 URI 或 ID 获取歌曲）
    * Get audio features for a track by URI or ID.（按 URI 或 ID 获取歌曲的音频特征，如节奏、能量等）
    * Search tracks by keyword（按关键词搜索歌曲）

## 模板与示例

[浏览 Spotify 节点的官方集成模板](https://n8n.io/integrations/spotify)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
