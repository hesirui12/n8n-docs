---
title: HubSpot 节点文档
description: >-
  学习如何在 n8n 中使用 HubSpot 节点。按照技术文档将
  HubSpot 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: HubSpot 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.hubspot.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.hubspot'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.hubspot'
---

{% hint style="info" %}
**大白话**：HubSpot 是全球最流行的「CRM 客户管理 + 营销自动化」平台。这个节点能让你在 n8n 里操作联系人（Contact）、公司（Company）、交易（Deal）、互动记录（Engagement）、表单（Form）、工单（Ticket）和联系人列表（Contact List），支持增删改查、搜索、加名单、提交表单等操作。适合做「线索自动建档、客户分群、销售跟进提醒」这类营销自动化流程。
{% endhint %}

# HubSpot 节点

使用 HubSpot 节点来自动化你在 HubSpot 中的工作，并把它与其它应用集成。n8n 内置支持 HubSpot 的大量功能，包括创建、更新、删除、获取联系人（Contact）、交易（Deal）、列表（List）、互动记录（Engagement）和公司（Company）。

在本页你可以看到 HubSpot 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [HubSpot 凭证](../credentials/hubspot.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作

* Contact（联系人）
    * Create/Update a contact（创建/更新联系人）
    * Delete a contact（删除联系人）
    * Get a contact（获取单个联系人）
    * Get all contacts（获取全部联系人）
    * Get recently created/updated contacts（获取最近创建/更新的联系人）
    * Search contacts（搜索联系人）
* Contact List（联系人列表）
    * Add contact to a list（把联系人加入列表）
    * Remove a contact from a list（把联系人移出列表）
* Company（公司）
    * Create a company（创建公司）
    * Delete a company（删除公司）
    * Get a company（获取单个公司）
    * Get all companies（获取全部公司）
    * Get recently created companies（获取最近创建的公司）
    * Get recently modified companies（获取最近修改的公司）
    * Search companies by domain（按域名搜索公司）
    * Update a company（更新公司）
* Deal（交易）
    * Create a deal（创建交易）
    * Delete a deal（删除交易）
    * Get a deal（获取单个交易）
    * Get all deals（获取全部交易）
    * Get recently created deals（获取最近创建的交易）
    * Get recently modified deals（获取最近修改的交易）
    * Search deals（搜索交易）
    * Update a deal（更新交易）
* Engagement（互动记录）
    * Create an engagement（创建互动记录）
    * Delete an engagement（删除互动记录）
    * Get an engagement（获取单个互动记录）
    * Get all engagements（获取全部互动记录）
* Form（表单）
    * Get all fields from a form（获取表单的全部字段）
    * Submit data to a form（向表单提交数据）
* Ticket（工单）
    * Create a ticket（创建工单）
    * Delete a ticket（删除工单）
    * Get a ticket（获取单个工单）
    * Get all tickets（获取全部工单）
    * Update a ticket（更新工单）

## 模板与示例

[浏览 HubSpot 节点的官方集成模板](https://n8n.io/integrations/hubspot)，或[搜索全部模板](https://n8n.io/workflows/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
