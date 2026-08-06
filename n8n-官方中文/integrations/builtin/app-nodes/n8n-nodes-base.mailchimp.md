---
title: Mailchimp 节点文档
description: >-
  学习如何在 n8n 中使用 Mailchimp 节点。按照技术文档将 Mailchimp
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Mailchimp 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.mailchimp.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mailchimp'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mailchimp'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Mailchimp 是全球最流行的邮件营销工具之一，用来管理订阅用户、发营销邮件。这个节点让你在 n8n 里直接操作 Mailchimp：管理邮件活动（Campaign）、订阅用户名单（List）和用户标签，还能「复制活动」「重发给未打开邮件的人」这种营销骚操作。
{% endhint %}

# Mailchimp 节点

使用 Mailchimp 节点来自动化你在 Mailchimp 中的工作，并把它与其它应用集成。n8n 内置支持 Mailchimp 的大量功能，包括创建、更新和删除邮件活动（campaign），以及获取名单分组（list groups）。

在本页你可以看到 Mailchimp 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Mailchimp 凭证](../credentials/mailchimp.md)。
{% endhint %}

## 操作

* Campaign（邮件活动）
    * Delete a campaign（删除邮件活动）
    * Get a campaign（获取邮件活动）
    * Get all the campaigns（获取全部邮件活动）
    * Replicate a campaign（复制邮件活动）
    * Creates a Resend to Non-Openers version of this campaign（创建一个「重发给未打开者」版本的邮件活动）
    * Send a campaign（发送邮件活动）
* List Group（名单分组）
    * Get all groups（获取全部分组）
* Member（订阅用户）
    * Create a new member on list（在名单上创建新用户）
    * Delete a member on list（删除名单上的用户）
    * Get a member on list（获取名单上的用户）
    * Get all members on list（获取名单上的全部用户）
    * Update a new member on list（更新名单上的用户）
* Member Tag（用户标签）
    * Add tags from a list member（给名单用户添加标签）
    * Remove tags from a list member（移除名单用户的标签）

## 模板与示例

[浏览 Mailchimp 节点的官方集成模板](https://n8n.io/integrations/mailchimp)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
