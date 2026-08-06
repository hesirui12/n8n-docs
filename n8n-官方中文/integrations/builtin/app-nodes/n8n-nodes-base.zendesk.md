---
title: Zendesk 节点文档
description: >-
  学习如何在 n8n 中使用 Zendesk 节点。按照技术文档将 Zendesk
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Zendesk 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.zendesk.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.zendesk'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.zendesk'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Zendesk 是最流行的「云客服工单系统」——客户的邮件/网页表单/电话都变成工单，客服统一处理。这个节点可以帮你：管理工单（Ticket，创建/删除/查询/恢复被挂起的工单/更新）、工单字段（Ticket Field）、用户（User）、组织（Organization）的增删改查与搜索。适合做客服自动化，比如自动建工单、自动分配客服、同步用户和组织。
{% endhint %}

# Zendesk 节点

使用 Zendesk 节点来自动化你在 Zendesk 中的工作，并把它与其它应用集成。n8n 内置支持 Zendesk 的大量功能，包括创建和删除工单、用户和组织。

在本页你可以看到 Zendesk 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Zendesk 凭证](../credentials/zendesk.md)。
{% endhint %}

（官方此处嵌入了通用资源组件，此处从略。）

## 操作

* Ticket（工单）
    * Create a ticket（创建工单）
    * Delete a ticket（删除工单）
    * Get a ticket（获取工单）
    * Get all tickets（获取全部工单）
    * Recover a suspended ticket（恢复被挂起的工单）
    * Update a ticket（更新工单）
* Ticket Field（工单字段）
    * Get a ticket field（获取工单字段）
    * Get all system and custom ticket fields（获取全部系统字段和自定义工单字段）
* User（用户）
    * Create a user（创建用户）
    * Delete a user（删除用户）
    * Get a user（获取用户）
    * Get all users（获取全部用户）
    * Get a user's organizations（获取用户所属的组织）
    * Get data related to the user（获取与用户相关的数据）
    * Search users（搜索用户）
    * Update a user（更新用户）
* Organization（组织）
    * Create an organization（创建组织）
    * Delete an organization（删除组织）
    * Count organizations（统计组织数量）
    * Get an organization（获取组织）
    * Get all organizations（获取全部组织）
    * Get data related to the organization（获取与组织相关的数据）
    * Update a organization（更新组织）

{% hint style="warning" %}
**标签替换行为（Tag Replacement Behavior）**

使用 Zendesk 节点的 "Update Ticket"（更新工单）操作并指定 `Tag Names or IDs`（标签名或 ID）字段时，工单上的整个标签列表**都会被替换**。由于 Zendesk API 默认处理标签更新的方式，更新中没有包含的任何标签都会从工单上被移除。

**为避免意外删除标签：**

- 先获取工单现有的标签，与你的新标签合并后再更新。
- 或者使用 HTTP Request 节点配合 Zendesk 的 `additional_tags` 属性来添加标签，而不会移除已有标签。
- 你也可以调用工单的 `/tags` 端点来添加标签而不替换现有标签（[Zendesk 标签端点文档](https://developer.zendesk.com/api-reference/ticketing/ticket-management/tags/)）。

详情请参见官方文档：[在不覆盖现有标签的前提下向工单添加标签](https://developer.zendesk.com/documentation/ticketing/managing-tickets/adding-tags-to-tickets-without-overwriting-existing-tags/)。
{% endhint %}

## 模板与示例

[浏览 Zendesk 节点的官方集成模板](https://n8n.io/integrations/zendesk)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
