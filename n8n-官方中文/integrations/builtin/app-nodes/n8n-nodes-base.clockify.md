---
title: Clockify 节点文档
description: >-
  学习如何在 n8n 中使用 Clockify 节点。按照技术文档将 Clockify
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Clockify 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.clockify.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.clockify'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.clockify'
layout:
  description:
    visible: false
---

# Clockify 节点

> **大白话**：Clockify 是一个免费好用的计时工具，用来记录每个项目、每个任务花了多少时间，方便算工时和统计。这个节点让 n8n 能自动操作 Clockify——比如自动创建/更新项目、任务、标签和工时记录。举例：每次你在表单里提交"今天干了什么"，工作流就自动帮你记一条工时。

使用 Clockify 节点可以自动化处理 Clockify 里的工作，并让 Clockify 与其他应用程序互通。n8n 内置支持 Clockify 的众多功能，包括创建、更新、获取和删除任务、时间记录、项目和标签等。

本页列出了 Clockify 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Clockify 凭证](../credentials/clockify.md)。
{% endhint %}

## 支持的操作

* Project（项目）
    * 创建项目
    * 删除项目
    * 获取一个项目
    * 获取所有项目
    * 更新项目
* Tag（标签）
    * 创建标签
    * 删除标签
    * 获取所有标签
    * 更新标签
* Task（任务）
    * 创建任务
    * 删除任务
    * 获取一个任务
    * 获取所有任务
    * 更新任务
* Time Entry（时间记录）
    * 创建时间记录
    * 删除时间记录
    * 获取时间记录
    * 更新时间记录

## 模板与示例


[浏览 Clockify 节点集成模板](https://n8n.io/integrations/clockify) 或 [搜索全部模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}

