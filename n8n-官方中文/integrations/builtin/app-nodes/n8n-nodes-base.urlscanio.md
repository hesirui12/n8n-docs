---
title: urlscan.io 节点文档
description: >-
  学习如何在 n8n 中使用 urlscan.io 节点。按照技术文档将 urlscan.io
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: urlscan.io 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.urlscanio.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.urlscanio'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.urlscanio'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：urlscan.io 是一个「网址安全扫描服务」——你给它一个 URL，它会在隔离环境里用真实浏览器打开并分析这个网页，看它有没有恶意行为（钓鱼、恶意软件、可疑重定向等），然后生成一份详细报告。这个节点可以帮你：发起扫描（Perform）、获取单个扫描结果（Get）、获取扫描列表（Get All）。适合做链接安全检测、钓鱼邮件分析。
{% endhint %}

# urlscan.io 节点

使用 urlscan.io 节点来自动化你在 urlscan.io 中的工作，并把它与其它应用集成。n8n 内置支持 urlscan.io 的大量功能，包括获取和发起扫描。

在本页你可以看到 urlscan.io 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [urlscan.io 凭证](../credentials/urlscanio.md)。
{% endhint %}

（官方此处嵌入了通用资源组件，此处从略。）

## 操作

* Scan（扫描）
    * Get（获取单个扫描结果）
    * Get All（获取全部扫描结果）
    * Perform（发起扫描）

## 模板与示例

[浏览 urlscan.io 节点的官方集成模板](https://n8n.io/integrations/urlscanio)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
