---
title: Cockpit 节点文档
description: >-
  学习如何在 n8n 中使用 Cockpit 节点。按照技术文档将 Cockpit
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Cockpit 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.cockpit.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.cockpit'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.cockpit'
layout:
  description:
    visible: false
---

# Cockpit 节点

> **大白话**：Cockpit 是一个"无头 CMS"（只存内容、不管显示的网站后台），适合给网站存文章、产品之类的结构化数据。这个节点让 n8n 能自动往 Cockpit 里写数据——比如创建/更新集合条目（Collection Entry）、保存表单提交的内容、读取单例（Singleton）数据。举例：网站上的留言表单一提交，工作流就自动把内容存进 Cockpit。

使用 Cockpit 节点可以自动化处理 Cockpit 里的工作，并让 Cockpit 与其他应用程序互通。n8n 内置支持 Cockpit 的众多功能，包括创建集合条目（Collection Entry）、保存表单提交的数据，以及获取单例（Singleton）等。

本页列出了 Cockpit 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Cockpit 凭证](../credentials/cockpit.md)。
{% endhint %}

## 支持的操作

* Collection（集合）
    * 创建集合条目
    * 获取所有集合条目
    * 更新集合条目
* Form（表单）
    * 保存表单提交的数据
* Singleton（单例）
    * 获取单例数据

## 模板与示例


[浏览 Cockpit 节点集成模板](https://n8n.io/integrations/cockpit) 或 [搜索全部模板](https://n8n.io/workflows/)
