---
title: Autopilot 触发器节点文档（Autopilot Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 Autopilot 触发器节点。按照技术文档将 Autopilot
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Autopilot Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.autopilottrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.autopilottrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.autopilottrigger
layout:
  description:
    visible: false
---

# Autopilot 触发器节点（Autopilot Trigger node）

{% hint style="info" %}
**大白话**：Autopilot 是一款可视化营销软件，让你能自动化、个性化地管理客户从了解到下单的全过程。这个触发器节点会在客户信息变化时唤醒你的工作流，比如：新增了联系人、联系人进了/出了某个列表或细分（Segment）、退订、资料更新等。它支持 7 种事件，全部围绕联系人（Contact）的增删改。用法：把节点放工作流开头，勾选要监听的事件即可。
{% endhint %}

[Autopilot](https://www.autopilothq.com/) 是一款可视化营销软件，让你可以跨越整个客户旅程，自动化并个性化你的营销活动。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/autopilot.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [Autopilot Trigger 集成](https://n8n.io/integrations/autopilot-trigger/)页面。
{% endhint %}

## 事件（Events）

- Contact added（新增联系人）
- Contact added to a list（联系人被加入列表）
- Contact entered to a segment（联系人进入细分）
- Contact left a segment（联系人离开细分）
- Contact removed from a list（联系人被移出列表）
- Contact unsubscribed（联系人退订）
- Contact updated（联系人资料更新）
