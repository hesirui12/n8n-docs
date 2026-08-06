---
title: Segment 节点文档
description: >-
  学习如何在 n8n 中使用 Segment 节点。按照技术文档将 Segment
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Segment 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.segment.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.segment'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.segment'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Segment 是一个「用户数据收集中枢」——你的网站、App 上发生的各种用户行为（注册、点击、购买等），都统一发给它，再由它转发给各个分析工具。这个节点可以帮你：把用户加入分组、创建用户身份、记录用户行为事件、记录网页访问。适合搭建用户行为分析数据管道。
{% endhint %}

# Segment 节点

使用 Segment 节点来自动化你在 Segment 中的工作，并把它与其它应用集成。n8n 内置支持 Segment 的大量功能，包括把用户添加到群组、创建身份、跟踪活动。

在本页你可以看到 Segment 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Segment 凭证](../credentials/segment.md)。
{% endhint %}

## 操作

* Group（群组）
    * Add a user to a group（把用户添加到群组）
* Identify（身份识别）
    * Create an identity（创建用户身份）
* Track（跟踪）
    * Record the actions your users perform. Every action triggers an event, which can also have associated properties.（记录用户执行的行为。每个行为都会触发一个事件，事件还可以带上相关属性。）
    * Record page views on your website, along with optional extra information about the page being viewed.（记录你网站上的页面浏览，还可以附带被浏览页面的额外信息。）

## 模板与示例

[浏览 Segment 节点的官方集成模板](https://n8n.io/integrations/segment)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
