---
title: Strava 触发器节点文档
description: >-
  学习如何在 n8n 中使用 Strava 触发器节点。按照本文档将
  Strava 触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Strava 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.stravatrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.stravatrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.stravatrigger
layout:
  description:
    visible: false
---

# Strava 触发器节点

> **大白话**：这个节点是 Strava 运动记录的「播报员」。当用户上传了新的运动记录、或运动记录/运动员资料被创建、删除、更新时，它就启动你的工作流。适合做"跑完步自动发祝贺、统计运动数据"这类自动化。

[Strava](https://www.strava.com/) 是一个跟踪人类运动的互联网服务，并带有社交网络功能。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/strava.md)找到此节点的身份验证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [Strava Trigger integrations](https://n8n.io/integrations/strava-trigger/) 页面。
{% endhint %}

## 事件（Events）

- **\[All\]（全部）**
    - \[All\]（全部）
    - Created（已创建）
    - Deleted（已删除）
    - Updated（已更新）
- **Activity（运动记录）**
    - \[All\]（全部）
    - Created（已创建）
    - Deleted（已删除）
    - Updated（已更新）
- **Athlete（运动员）**
    - \[All\]（全部）
    - Created（已创建）
    - Deleted（已删除）
    - Updated（已更新）
