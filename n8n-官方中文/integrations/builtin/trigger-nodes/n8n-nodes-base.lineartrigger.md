---
title: Linear Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 Linear Trigger 节点。按照本文档将
  Linear Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Linear Trigger 节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.lineartrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.lineartrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.lineartrigger
layout:
  description:
    visible: false
---

# Linear Trigger 节点

> **大白话**：Linear 是一款 SaaS 问题跟踪工具（开发者团队常用，界面清爽、操作快）。这个触发器节点监听 Linear 里的动态——比如有人创建了新 issue、给评论加了表情、项目有变化等等——一有动静就启动你的工作流。

[Linear](https://linear.app/) 是一款 SaaS 问题跟踪（issue tracking）工具。

{% hint style="info" %}
**凭证（Credentials）**

你可以[在这里](../credentials/linear.md)找到此节点的认证信息。
{% endhint %}

{% hint style="info" %}
**示例与模板**

想找使用示例和入门模板，可以查看 n8n 的 [Linear Trigger 集成](https://n8n.io/integrations/linear-trigger/) 页面。
{% endhint %}

## 事件（Events）

- Comment Reaction（评论表情回应）
- Cycle（周期）
- Issue（问题）
- Issue Comment（问题评论）
- Issue Label（问题标签）
- Project（项目）
