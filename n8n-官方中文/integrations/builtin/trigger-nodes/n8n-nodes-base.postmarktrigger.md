---
title: Postmark 触发器节点文档
description: >-
  学习如何在 n8n 中使用 Postmark 触发器节点。按照本文档将
  Postmark 触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Postmark 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.postmarktrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.postmarktrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.postmarktrigger
layout:
  description:
    visible: false
---

# Postmark 触发器节点

> **大白话**：这个节点是 Postmark 邮件服务的「统计播报员」。当应用邮件出现"已发送、已打开、被退回、被举报为垃圾邮件"等情况时，它会启动你的工作流，方便你实时跟踪邮件状态，比如自动提醒"有退信啦"或把统计同步到报表里。放在工作流开头用。

[Postmark](https://postmarkapp.com) 帮助应用投递和跟踪邮件。你可以跟踪诸如已发送或已处理的邮件数量、打开量、退信量以及垃圾邮件投诉量等统计数据。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/postmark.md)找到此节点的身份验证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [Postmark Trigger integrations](https://n8n.io/integrations/postmark-trigger/) 页面。
{% endhint %}
