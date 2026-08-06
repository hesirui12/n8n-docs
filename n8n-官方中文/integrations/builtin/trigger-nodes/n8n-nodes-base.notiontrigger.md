---
title: Notion 触发器节点文档
contentType:
  - integration
  - reference
priority: high
nodeTitle: Notion 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.notiontrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.notiontrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.notiontrigger
description: >-
  学习如何在 n8n 中使用 Notion 触发器节点。按照本文档将
  Notion 触发器节点集成到你的工作流中。
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

# Notion 触发器节点

> **大白话**：这个节点是 Notion 的「盯梢员」。它专门盯着你的 Notion 数据库，只要「有页面被添加」或者「页面被修改」，它就立刻启动你的工作流。比如：客户提交了新的数据库记录 → 自动发通知、同步到别处。它只能放在工作流开头，负责"发现变化并开个头"。

[Notion](https://notion.so) 是一个集笔记、任务、知识库和数据库于一体的全能工作空间。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/notion.md)找到此节点的身份验证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [Notion Trigger integrations](https://n8n.io/integrations/notion-trigger-beta/) 页面。
{% endhint %}

## 事件（Events）

* 页面添加到数据库（Page added to database）
* 页面在数据库中被更新（Page updated in database）

## 相关资源（Related resources）

n8n 为 Notion 提供了一个应用节点（app node）。你可以[在此处](../app-nodes/n8n-nodes-base.notion/README.md)找到该节点的文档。

在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/notion-trigger-beta/)。

更多 API 细节请参考 [Notion 的官方文档](https://developers.notion.com/)。
