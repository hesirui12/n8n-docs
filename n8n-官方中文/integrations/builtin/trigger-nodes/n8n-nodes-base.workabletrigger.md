---
title: Workable 触发器节点文档
description: >-
  学习如何在 n8n 中使用 Workable 触发器节点。按照本文档将
  Workable 触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Workable 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.workabletrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.workabletrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.workabletrigger
layout:
  description:
    visible: false
---

# Workable 触发器节点

> **大白话**：Workable 是个招聘（猎头/HR）平台。这个触发器节点的作用是：当有新的候选人加入（Candidate Created）或候选人被移动到其他招聘阶段（Candidate Moved）时，就自动启动 n8n 工作流，让你自动通知面试官、同步到表格或做人才管理。

使用 Workable 触发器节点来响应 [Workable](https://www.workable.com/) 招聘平台中的事件，并把 Workable 与其他应用集成起来。n8n 内置支持多种多样的 Workable 事件，包括候选人被创建和移动。

在本页，你会看到 Workable 触发器节点可以响应的事件列表，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/workable.md)找到此节点的身份验证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [Workable Trigger integrations](https://n8n.io/integrations/workable-trigger/) 页面。
{% endhint %}

## 事件（Events）

- **候选人已创建（Candidate Created）**
- **候选人已移动（Candidate Moved）**

## 相关资源（Related resources）

在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/workable-trigger/)。

关于使用该服务的更多细节，请参考 [Workable 的 API 文档](https://developers.workable.com/)。
