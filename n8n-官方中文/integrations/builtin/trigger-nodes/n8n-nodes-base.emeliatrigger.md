---
title: Emelia 触发器节点文档（Emelia Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 Emelia 触发器节点。按照技术文档将 Emelia
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Emelia Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.emeliatrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.emeliatrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.emeliatrigger
layout:
  description:
    visible: false
---

# Emelia 触发器节点（Emelia Trigger node）

{% hint style="info" %}
**大白话**：Emelia 是一款「冷邮件」工具（Cold Email，主动发给潜在客户的开发信邮件），常用于开发客户。这个触发器节点会在邮件相关事件发生时自动唤醒工作流，比如：邮件已发送、被打开、被退信、被回复、链接被点击、联系人退订。它支持 6 种事件。用法：放工作流开头，选好要监听的事件，邮件状态一变就自动触发。
{% endhint %}

[Emelia](https://emelia.io) 是一款冷邮件（cold-mailing）工具。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/emelia.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [Emelia Trigger 集成](https://n8n.io/integrations/emelia-trigger/)页面。
{% endhint %}

## 事件（Events）

- Email Bounced（邮件退信）
- Email Opened（邮件被打开）
- Email Replied（邮件被回复）
- Email Sent（邮件已发送）
- Link Clicked（链接被点击）
- Unsubscribed Contact（联系人退订）
