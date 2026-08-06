---
title: X（原 Twitter）节点文档
description: >-
  学习如何在 n8n 中使用 X（原 Twitter）节点。按照技术文档将
  X（原 Twitter）节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: X（原 Twitter）节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.twitter.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.twitter'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.twitter'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：X（就是以前的 Twitter）。这个节点让你在 n8n 里发私信（Direct Message）、发推/回复推文、删推、搜推、点赞、转推，还能查用户资料、把成员加进列表。常用场景：新内容发布时自动发推；收集某个关键词的推文做舆情监控。
{% endhint %}

# X（原 Twitter）节点

使用 X 节点来自动化你在 X 中的工作，并把它与其它应用集成。n8n 内置支持 X 的大量功能，包括创建私信（Direct Message），以及删除、搜索、点赞和转推推文（Tweet）。

在本页你可以看到 X 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [X 凭证](../credentials/twitter.md)。
{% endhint %}

（官方此处嵌入了「如何开始使用应用节点」的通用说明组件，此处从略。）

## 操作

* Direct Message（私信）
    * Create a direct message（创建私信）
* Tweet（推文）
    * Create or reply a tweet（发推或回复推文）
    * Delete a tweet（删除推文）
    * Search tweets（搜索推文）
    * Like a tweet（点赞推文）
    * Retweet a tweet（转推推文）
* User（用户）
  	* Get a user（获取用户）
* List（列表）
    * Add a member to a list（把成员添加进列表）

## 模板与示例

[浏览 X（原 Twitter）节点的官方集成模板](https://n8n.io/integrations/twitter)，或[搜索全部模板](https://n8n.io/workflows/)。
