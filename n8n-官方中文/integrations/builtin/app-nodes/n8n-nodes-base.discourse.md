---
title: Discourse 节点文档
description: >-
  学习如何在 n8n 中使用 Discourse 节点。按照技术文档将 Discourse
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Discourse 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.discourse.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.discourse'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.discourse'
layout:
  description:
    visible: false
---

# Discourse 节点

> **大白话**：Discourse 是一个开源的论坛/社区建站系统，很多技术社区都用它。这个节点让 n8n 能自动操作 Discourse——比如自动发帖、管理分类（Category）、用户组和用户。举例：你在官网发布了新文章，工作流自动在 Discourse 社区发一条置顶帖，引导大家讨论。

使用 Discourse 节点可以自动化处理 Discourse 里的工作，并让 Discourse 与其他应用程序互通。n8n 内置支持 Discourse 的众多功能，包括创建、获取、更新和删除分类、用户组、帖子和用户等。

本页列出了 Discourse 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Discourse 凭证](../credentials/discourse.md)。
{% endhint %}

## 支持的操作

* Category（分类）
    * 创建分类
    * 获取所有分类
    * 更新分类
* Group（用户组）
    * 创建用户组
    * 获取一个用户组
    * 获取所有用户组
    * 更新用户组
* Post（帖子）
    * 创建帖子
    * 获取一个帖子
    * 获取所有帖子
    * 更新帖子
* User（用户）
    * 创建用户
    * 获取一个用户
    * 获取所有用户
* User Group（用户-用户组关系）
    * 把用户加入用户组
    * 把用户从用户组移除

## 模板与示例


[浏览 Discourse 节点集成模板](https://n8n.io/integrations/discourse) 或 [搜索全部模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}

