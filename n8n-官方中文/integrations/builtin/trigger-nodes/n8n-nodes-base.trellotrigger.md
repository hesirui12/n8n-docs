---
title: Trello 触发器节点文档
description: >-
  学习如何在 n8n 中使用 Trello 触发器节点。按照本文档将
  Trello 触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Trello 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.trellotrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.trellotrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.trellotrigger
layout:
  description:
    visible: false
---

# Trello 触发器节点

> **大白话**：这个节点是 Trello 看板的「动作哨兵」。当看板上发生"新建了卡片、卡片被移动、列表有变化"等事件时，它就启动你的工作流。使用这个节点前，你需要先找到想监听对象的 **Model ID（模型 ID）**，下面教你怎么找。

[Trello](https://trello.com/) 是一个基于网页的看板式（Kanban）列表应用，属于 Atlassian 旗下。用户可以创建带不同列的任务看板，并在各列之间移动任务。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/trello.md)找到此节点的身份验证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [Trello Trigger integrations](https://n8n.io/integrations/trello-trigger/) 页面。
{% endhint %}

## 找到模型 ID（Find the Model ID）

模型 ID 就是 Trello 中任何一个模型的 ID。根据使用场景不同，它可能是用户 ID、列表 ID 等等。

以这个具体例子来说，列表 ID 就是模型 ID：

1. 打开包含该列表的 Trello 看板。
2. 如果列表里没有任何卡片，先往列表里添加一张卡片。
3. 打开这张卡片，在 URL 末尾加上 `.json`，然后按回车。
4. 在返回的 JSON 文件中，你会看到一个叫 `idList` 的字段。
5. 复制 `idList`，粘贴到 n8n 的 **Model ID（模型 ID）** 字段里。
