---
title: Disqus 节点文档
description: >-
  学习如何在 n8n 中使用 Disqus 节点。按照技术文档将 Disqus
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Disqus 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.disqus.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.disqus'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.disqus'
layout:
  description:
    visible: false
---

# Disqus 节点

> **大白话**：Disqus 是第三方评论插件，很多网站用它在文章下面挂评论区，统一管理用户的留言和讨论。这个节点让 n8n 能读取 Disqus 里的讨论数据——比如论坛详情、分类、讨论串（Thread）和帖子列表。举例：每天定时把文章评论区的新留言拉下来，汇总发到邮箱，方便你统一回复。

使用 Disqus 节点可以自动化处理 Disqus 里的工作，并让 Disqus 与其他应用程序互通。n8n 内置支持 Disqus 的众多功能，包括获取论坛（Forum）信息等。

本页列出了 Disqus 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Disqus 凭证](../credentials/disqus.md)。
{% endhint %}

## 支持的操作

* Forum（论坛）
    * 返回论坛详情
    * 返回论坛内的分类列表
    * 返回论坛内的讨论串（Thread）列表
    * 返回论坛内的帖子列表

## 模板与示例


[浏览 Disqus 节点集成模板](https://n8n.io/integrations/disqus) 或 [搜索全部模板](https://n8n.io/workflows/)
