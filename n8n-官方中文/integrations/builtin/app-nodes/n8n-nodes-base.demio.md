---
title: Demio 节点文档
description: >-
  学习如何在 n8n 中使用 Demio 节点。按照技术文档将 Demio
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Demio 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.demio.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.demio'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.demio'
layout:
  description:
    visible: false
---

# Demio 节点

> **大白话**：Demio 是一个做网络研讨会（Webinar）的工具，用来办线上直播课、在线分享会。这个节点让 n8n 能自动操作 Demio——比如查询活动（Event）信息、把报名的人自动注册进某场活动、拉取活动报告数据。举例：用户在官网填写报名表，工作流自动把他注册到对应场次的直播课。

使用 Demio 节点可以自动化处理 Demio 里的工作，并让 Demio 与其他应用程序互通。n8n 内置支持 Demio 的众多功能，包括获取和注册活动（Event）以及查看报告等。

本页列出了 Demio 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Demio 凭证](../credentials/demio.md)。
{% endhint %}

## 支持的操作

* Event（活动）
    * 获取一个活动
    * 获取所有活动
    * 把某人注册到活动
* Report（报告）
    * 获取活动报告

## 模板与示例


[浏览 Demio 节点集成模板](https://n8n.io/integrations/demio) 或 [搜索全部模板](https://n8n.io/workflows/)
