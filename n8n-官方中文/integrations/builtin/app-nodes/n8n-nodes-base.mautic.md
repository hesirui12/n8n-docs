---
title: Mautic 节点文档
description: >-
  学习如何在 n8n 中使用 Mautic 节点。按照技术文档将 Mautic
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Mautic 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.mautic.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mautic'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mautic'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Mautic 是开源的营销自动化平台（可以自己部署，数据不外泄，是 HubSpot 的自托管替代品）。核心概念：联系人（Contact，人）、公司（Company）、营销活动（Campaign）、细分（Segment，用户分组）。这个节点基本全覆盖：联系人/公司的增删改查、把联系人加进或移出活动/公司/细分、给联系人发邮件、调整联系人积分等。
{% endhint %}

# Mautic 节点

使用 Mautic 节点来自动化你在 Mautic 中的工作，并把它与其它应用集成。n8n 内置支持 Mautic 的大量功能，包括创建、更新、删除和获取公司与联系人，以及添加和移除活动联系人（campaign contacts）。

在本页你可以看到 Mautic 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Mautic 凭证](../credentials/mautic.md)。
{% endhint %}

（官方此处嵌入了通用资源组件，此处从略。）

## 操作

* Campaign Contact（活动联系人）
    * Add contact to a campaign（把联系人加入营销活动）
    * Remove contact from a campaign（把联系人移出营销活动）
* Company（公司）
    * Create a new company（创建新公司）
    * Delete a company（删除公司）
    * Get data of a company（获取公司数据）
    * Get data of all companies（获取全部公司数据）
    * Update a company（更新公司）
* Company Contact（公司联系人）
    * Add contact to a company（把联系人加入公司）
    * Remove a contact from a company（把联系人移出公司）
* Contact（联系人）
    * Create a new contact（创建新联系人）
    * Delete a contact（删除联系人）
    * Edit contact's points（修改联系人的积分）
    * Add/remove contacts from/to the don't contact list（把联系人加入/移出「不要联系」名单）
    * Get data of a contact（获取联系人数据）
    * Get data of all contacts（获取全部联系人数据）
    * Send email to contact（给联系人发送邮件）
    * Update a contact（更新联系人）
* Contact Segment（联系人细分）
    * Add contact to a segment（把联系人加入细分）
    * Remove contact from a segment（把联系人移出细分）
* Segment Email（细分邮件）
    * Send（发送）

## 模板与示例

[浏览 Mautic 节点的官方集成模板](https://n8n.io/integrations/mautic)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
