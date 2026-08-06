---
title: Google Sheets Trigger 节点文档（Google Sheets Trigger node）
description: >-
  学习如何在 n8n 中使用 Google Sheets Trigger 节点。按照技术文档把 Google
  Sheets Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: n8n-nodes-base.googlesheetstrigger
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.googlesheetstrigger/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googlesheetstrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googlesheetstrigger
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

{% hint style="info" %}
**大白话**

简单来说，这个触发器节点就是帮你「盯住」你的 Google 表格。只要表格里加了新行、某一行被改了（或者两者都发生），它就自动启动你的工作流。
{% endhint %}

# Google Sheets Trigger 节点

[Google Sheets](https://www.google.com/sheets) 是一个基于网页的电子表格程序，是 Google 在其 Google Drive 服务中的办公软件套件的一部分。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../../credentials/google/README.md)找到此节点的认证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

要获取帮助你快速上手的使用示例和模板，请参阅 n8n 的 [Google Sheets Trigger 集成](https://n8n.io/integrations/google-sheets-trigger/) 页面。
{% endhint %}

## 事件（Events）

* Row added（添加行）
* Row updated（更新行）
* Row added or updated（添加或更新行）

## 相关资源（Related resources）

有关该服务的更多信息，请参阅 [Google Sheets API 文档](https://developers.google.com/sheets/api)。

n8n 为 Google Sheets 提供了一个应用节点。你可以[在这里](../../app-nodes/n8n-nodes-base.googlesheets/README.md)找到该节点的文档。

在 n8n 的网站上查看[示例工作流和相关内容](https://n8n.io/integrations/google-sheets-trigger/)。

## 常见问题（Common issues）

对于常见问题或疑问以及建议的解决方案，请参阅[常见问题](common-issues.md)。
