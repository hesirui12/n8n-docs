---
title: ActiveCampaign 节点文档
description: >-
  学习如何在 n8n 中使用 ActiveCampaign 节点。按照技术文档将
  ActiveCampaign 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: ActiveCampaign 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.activecampaign.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.activecampaign
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.activecampaign
---

{% hint style="info" %}
**大白话**：ActiveCampaign 是一个集「邮件营销 + CRM 客户管理」于一体的营销自动化平台。这个节点可以让你在 n8n 里直接管理客户（Contact）、订单（Order）、电商客户（E-commerce Customer）、列表（List）、标签（Tag）、交易（Deal）和连接（Connection），还能给客户加标签、加列表。适合做「新客户自动建档、下单自动标记、按标签自动分组」这类营销自动化流程。
{% endhint %}

# ActiveCampaign 节点

使用 ActiveCampaign 节点来自动化你在 ActiveCampaign 中的工作，并把它与其它应用集成。n8n 内置支持 ActiveCampaign 的大量功能，包括创建、获取、更新、删除账户、联系人、订单、电商客户、连接、列表、标签和交易。

在本页你可以看到 ActiveCampaign 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [ActiveCampaign 凭证](../credentials/activecampaign.md)。
{% endhint %}

## 操作

* Account（账户）
    * Create an account（创建账户）
    * Delete an account（删除账户）
    * Get data of an account（获取账户数据）
    * Get data of all accounts（获取全部账户数据）
    * Update an account（更新账户）
* Account Contact（账户与联系人关联）
    * Create an association（创建关联）
    * Delete an association（删除关联）
    * Update an association（更新关联）
* Contact（联系人）
    * Create a contact（创建联系人）
    * Delete a contact（删除联系人）
    * Get data of a contact（获取联系人数据）
    * Get data of all contact（获取全部联系人数据）
    * Update a contact（更新联系人）
* Contact List（联系人列表）
    * Add contact to a list（把联系人加入列表）
    * Remove contact from a list（把联系人移出列表）
* Contact Tag（联系人标签）
    * Add a tag to a contact（给联系人加标签）
    * Remove a tag from a contact（移除联系人标签）
* Connection（连接）
    * Create a connection（创建连接）
    * Delete a connection（删除连接）
    * Get data of a connection（获取连接数据）
    * Get data of all connections（获取全部连接数据）
    * Update a connection（更新连接）
* Deal（交易）
    * Create a deal（创建交易）
    * Delete a deal（删除交易）
    * Get data of a deal（获取交易数据）
    * Get data of all deals（获取全部交易数据）
    * Update a deal（更新交易）
    * Create a deal note（创建交易备注）
    * Update a deal note（更新交易备注）
* E-commerce Order（电商订单）
    * Create a order（创建订单）
    * Delete a order（删除订单）
    * Get data of a order（获取订单数据）
    * Get data of all orders（获取全部订单数据）
    * Update a order（更新订单）
* E-Commerce Customer（电商客户）
    * Create a E-commerce Customer（创建电商客户）
    * Delete a E-commerce Customer（删除电商客户）
    * Get data of a E-commerce Customer（获取电商客户数据）
    * Get data of all E-commerce Customer（获取全部电商客户数据）
    * Update a E-commerce Customer（更新电商客户）
* E-commerce Order Products（电商订单商品）
    * Get data of all order products（获取全部订单商品数据）
    * Get data of a ordered product（获取单个订单商品数据）
    * Get data of an order's products（获取某个订单的商品数据）
* List（列表）
    * Get all lists（获取全部列表）
* Tag（标签）
    * Create a tag（创建标签）
    * Delete a tag（删除标签）
    * Get data of a tag（获取标签数据）
    * Get data of all tags（获取全部标签数据）
    * Update a tag（更新标签）

## 模板与示例

[浏览 ActiveCampaign 节点的官方集成模板](https://n8n.io/integrations/activecampaign)，或[搜索全部模板](https://n8n.io/workflows/)。

