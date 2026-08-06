---
title: Reddit 节点文档
description: >-
  学习如何在 n8n 中使用 Reddit 节点。按照技术文档将 Reddit
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Reddit 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.reddit.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.reddit'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.reddit'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Reddit 是全球知名的社区论坛网站，里面有无数个按主题划分的版块（subreddit），用户可以发帖、评论。用这个节点，你可以在 n8n 里自动发帖、删帖、查帖、搜索帖子、获取帖子的评论以及回复评论，比如「每天自动把网站新文章发布到某个版块」。
{% endhint %}

# Reddit 节点

使用 Reddit 节点来自动化你在 Reddit 中的工作，并把它与其它应用集成。n8n 内置支持 Reddit 的大量功能，包括获取个人资料和用户信息、获取帖子评论和版块（subreddit）信息，以及提交（submit）、获取和删除帖子。

在本页你可以看到 Reddit 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Reddit 凭证](../credentials/reddit.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作（Operations）

* Post（帖子）
    * Submit a post to a subreddit（向版块提交一个帖子）
    * Delete a post from a subreddit（删除版块里的一个帖子）
    * Get a post from a subreddit（获取版块里的一个帖子）
    * Get all posts from a subreddit（获取版块里的全部帖子）
    * Search posts in a subreddit or in all of Reddit（在某个版块或整个 Reddit 搜索帖子）
* Post Comment（帖子评论）
    * Create a top-level comment in a post（在帖子里创建一条顶层评论）
    * Retrieve all comments in a post（获取帖子里的全部评论）
    * Remove a comment from a post（删除帖子里的评论）
    * Write a reply to a comment in a post（回复帖子里的某条评论）
* Profile（个人资料）
    * Get（获取个人资料）
* Subreddit（版块）
    * Retrieve background information about a subreddit（获取某个版块的背景信息）
    * Retrieve information about subreddits from all of Reddit（获取整个 Reddit 上版块的信息）
* User（用户）
    * Get（获取用户信息）

## 模板与示例（Templates and examples）

[浏览 Reddit 节点文档集成模板](https://n8n.io/integrations/reddit)，或[搜索全部模板](https://n8n.io/workflows/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
