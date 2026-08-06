---
title: Brevo 触发器节点文档（Brevo Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 Brevo 触发器节点。按照技术文档将 Brevo
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Brevo Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.brevotrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.brevotrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.brevotrigger
layout:
  description:
    visible: false
---

# Brevo 触发器节点（Brevo Trigger node）

{% hint style="info" %}
**大白话**：Brevo（原 Sendinblue）是一个数字营销平台，主要用来发营销邮件、管理客户。这个触发器节点会在邮件相关事件发生时自动唤醒工作流，比如：邮件已发送、已送达、被打开、被点击、被退信（硬退/软退）、被标记为垃圾邮件、收件人退订等。它支持 12 种事件，全是关于邮件送达状态的。用法：放工作流开头，勾选想监听的事件，邮件状态一变就自动触发。
{% endhint %}

[Brevo](https://www.brevo.com/) 是一个数字营销平台，帮助用户发展业务。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/brevo.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [Brevo Trigger 集成](https://n8n.io/integrations/brevo-trigger/)页面。
{% endhint %}

## 事件（Events）

* Email blocked（邮件被拦截）
* Email clicked（邮件被点击）
* Email deferred（邮件被延迟发送）
* Email delivered（邮件已送达）
* Email hard bounce（邮件硬退信：地址无效，永久失败）
* Email invalid（邮件地址无效）
* Email marked spam（邮件被标记为垃圾邮件）
* Email opened（邮件被打开）
* Email sent（邮件已发送）
* Email soft bounce（邮件软退信：临时失败，可能重试成功）
* Email unique open（邮件被唯一打开：同一收件人只算一次）
* Email unsubscribed（收件人退订）

## 相关资源（Related resources）

n8n 也为 Brevo 提供了应用节点（用来读写数据的常规节点）。你可以在[这里](../app-nodes/n8n-nodes-base.brevo.md)找到该节点的文档。

在 n8n 网站上查看[示例工作流和相关内容](https://n8n.io/integrations/brevo-trigger/)。

关于他们的 API 细节，请参考 [Brevo 的官方文档](https://developers.brevo.com/)。
