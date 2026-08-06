---
title: Cortex 节点文档
description: >-
  学习如何在 n8n 中使用 Cortex 节点。按照技术文档将 Cortex
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Cortex 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.cortex.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.cortex'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.cortex'
layout:
  description:
    visible: false
---

# Cortex 节点

> **大白话**：Cortex（TheHive 出品）是一个安全事件响应的"分析引擎"，可以调用各种分析器（Analyzer）和处理程序（Responder）来处理威胁情报。这个节点让 n8n 能远程调用 Cortex——比如收到告警后自动运行一个恶意软件分析器，再读取分析任务（Job）的详情和报告。举例：SIEM 报警时，工作流自动让 Cortex 分析可疑文件并把报告发到群里。

使用 Cortex 节点可以自动化处理 Cortex 里的工作，并让 Cortex 与其他应用程序互通。n8n 内置支持 Cortex 的众多功能，包括执行分析器（Analyzer）和处理程序（Responder），以及获取任务（Job）详情等。

本页列出了 Cortex 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Cortex 凭证](../credentials/cortex.md)。
{% endhint %}

## 支持的操作

* Analyzer（分析器）
    * 执行分析器
* Job（任务）
    * 获取任务详情
    * 获取任务报告
* Responder（处理程序）
    * 执行处理程序

## 模板与示例


[浏览 Cortex 节点集成模板](https://n8n.io/integrations/cortex) 或 [搜索全部模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}

