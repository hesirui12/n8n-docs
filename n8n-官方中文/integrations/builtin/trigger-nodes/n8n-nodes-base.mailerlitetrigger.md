---
title: MailerLite Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 MailerLite Trigger 节点。按照本文档将
  MailerLite Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: MailerLite Trigger 节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.mailerlitetrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.mailerlitetrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.mailerlitetrigger
layout:
  description:
    visible: false
---

# MailerLite Trigger 节点

> **大白话**：MailerLite 是一款邮件营销工具，界面友好、订阅者管理简单、还带关键指标的报表。这个触发器节点监听 MailerLite 里的各种事件——比如有人订阅、退订、被退回、收到新邮件活动、加入群组等等——一有动静就启动你的工作流。

[MailerLite](https://www.mailerlite.com/) 是一款电子邮件营销解决方案，提供用户友好的内容编辑器、简化的订阅者管理，以及包含最重要统计数据的营销活动报告。

本页面列出了 MailerLite Trigger 节点可以响应的事件，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

你可以[在这里](../credentials/mailerlite.md)找到此节点的认证信息。
{% endhint %}

{% hint style="info" %}
**示例与模板**

想找使用示例和入门模板，可以查看 n8n 的 [MailerLite Trigger 集成](https://n8n.io/integrations/mailerlite-trigger/) 页面。
{% endhint %}

## 事件（Events）

- Campaign Sent（营销活动已发送）
- Subscriber Added to Group（订阅者已加入群组）
- Subscriber Automation Completed（订阅者自动化流程已完成）
- Subscriber Automation Triggered（订阅者自动化流程已触发）
- Subscriber Bounced（订阅者邮件被退回）
- Subscriber Created（订阅者已创建）
- Subscriber Complained（订阅者投诉）
- Subscriber Removed from Group（订阅者已移出群组）
- Subscriber Unsubscribe（订阅者退订）
- Subscriber Updated（订阅者信息已更新）
