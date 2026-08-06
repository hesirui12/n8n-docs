---
title: Sendy 节点文档
description: >-
  学习如何在 n8n 中使用 Sendy 节点。按照技术文档将 Sendy
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Sendy 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.sendy.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.sendy'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.sendy'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Sendy 是一个「省钱版邮件群发工具」——你自己有 Amazon SES（亚马逊邮件服务）账号，用 Sendy 来管理订阅者、发营销邮件，比用 Mailchimp 这类 SaaS 便宜得多。这个节点可以帮你：创建邮件活动（Campaign）、管理订阅者（增删、统计数量、退订、查状态）。适合做邮件营销自动化。
{% endhint %}

# Sendy 节点

使用 Sendy 节点来自动化你在 Sendy 中的工作，并把它与其它应用集成。n8n 内置支持 Sendy 的大量功能，包括创建邮件活动，以及添加、统计、删除、获取订阅者。

在本页你可以看到 Sendy 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Sendy 凭证](../credentials/sendy.md)。
{% endhint %}

## 操作

* Campaign（邮件活动）
    * Create a campaign（创建邮件活动）
* Subscriber（订阅者）
    * Add a subscriber to a list（把订阅者添加到列表）
    * Count subscribers（统计订阅者数量）
    * Delete a subscriber from a list（从列表中删除订阅者）
    * Unsubscribe user from a list（把用户从列表中退订）
    * Get the status of subscriber（获取订阅者状态）

## 模板与示例

[浏览 Sendy 节点的官方集成模板](https://n8n.io/integrations/sendy)，或[搜索全部模板](https://n8n.io/workflows/)。
