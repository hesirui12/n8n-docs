---
title: Freshservice 节点文档
description: >-
  了解如何在 n8n 中使用 Freshservice 节点。按照技术文档把 Freshservice 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Freshservice 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.freshservice.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.freshservice'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.freshservice'
layout:
  description:
    visible: false
---

# Freshservice 节点

> **大白话**：Freshservice 是 Freshdesk 家的 IT 服务管理（ITSM）系统，管 IT 工单、资产、变更、问题等。这个节点让你在 n8n 里自动管理一大票对象：客服人员（Agent）、部门、资产类型、变更、问题、工单等等，每种都支持增删改查。

用 Freshservice 节点在 Freshservice 里自动化干活，并把 Freshservice 和其他应用串起来。n8n 内置支持 Freshservice 的大量功能，包括创建、更新、删除和获取客服人员信息与部门。

本页面列出了 Freshservice 节点支持的所有操作，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何配置认证，请参考 [Freshservice 凭据](../credentials/freshservice.md)。
{% endhint %}

## 支持的操作

* Agent（客服人员）
    * Create an agent（创建客服人员）
    * Delete an agent（删除客服人员）
    * Retrieve an agent（获取单个客服人员）
    * Retrieve all agents（获取全部客服人员）
    * Update an agent（更新客服人员）
* Agent Group（客服人员分组）
    * Create an agent group（创建分组）
    * Delete an agent group（删除分组）
    * Retrieve an agent group（获取单个分组）
    * Retrieve all agent groups（获取全部分组）
    * Update an agent group（更新分组）
* Agent Role（客服人员角色）
    * Retrieve an agent role（获取单个角色）
    * Retrieve all agent roles（获取全部角色）
* Announcement（公告）
    * Create an announcement（创建公告）
    * Delete an announcement（删除公告）
    * Retrieve an announcement（获取单个公告）
    * Retrieve all announcements（获取全部公告）
    * Update an announcement（更新公告）
* Asset Type（资产类型）
    * Create an asset type（创建资产类型）
    * Delete an asset type（删除资产类型）
    * Retrieve an asset type（获取单个资产类型）
    * Retrieve all asset types（获取全部资产类型）
    * Update an asset type（更新资产类型）
* Change（变更）
    * Create a change（创建变更）
    * Delete a change（删除变更）
    * Retrieve a change（获取单个变更）
    * Retrieve all changes（获取全部变更）
    * Update a change（更新变更）
* Department（部门）
    * Create a department（创建部门）
    * Delete a department（删除部门）
    * Retrieve a department（获取单个部门）
    * Retrieve all departments（获取全部部门）
    * Update a department（更新部门）
* Location（位置/地点）
    * Create a location（创建位置）
    * Delete a location（删除位置）
    * Retrieve a location（获取单个位置）
    * Retrieve all locations（获取全部位置）
    * Update a location（更新位置）
* Problem（问题）
    * Create a problem（创建问题）
    * Delete a problem（删除问题）
    * Retrieve a problem（获取单个问题）
    * Retrieve all problems（获取全部问题）
    * Update a problem（更新问题）
* Product（产品）
    * Create a product（创建产品）
    * Delete a product（删除产品）
    * Retrieve a product（获取单个产品）
    * Retrieve all products（获取全部产品）
    * Update a product（更新产品）
* Release（发布/上线）
    * Create a release（创建发布）
    * Delete a release（删除发布）
    * Retrieve a release（获取单个发布）
    * Retrieve all releases（获取全部发布）
    * Update a release（更新发布）
* Requester（请求者/报障人）
    * Create a requester（创建请求者）
    * Delete a requester（删除请求者）
    * Retrieve a requester（获取单个请求者）
    * Retrieve all requesters（获取全部请求者）
    * Update a requester（更新请求者）
* Requester Group（请求者分组）
    * Create a requester group（创建请求者分组）
    * Delete a requester group（删除请求者分组）
    * Retrieve a requester group（获取单个请求者分组）
    * Retrieve all requester groups（获取全部请求者分组）
    * Update a requester group（更新请求者分组）
* Software（软件）
    * Create a software application（创建软件应用）
    * Delete a software application（删除软件应用）
    * Retrieve a software application（获取单个软件应用）
    * Retrieve all software applications（获取全部软件应用）
    * Update a software application（更新软件应用）
* Ticket（工单）
    * Create a ticket（创建工单）
    * Delete a ticket（删除工单）
    * Retrieve a ticket（获取单个工单）
    * Retrieve all tickets（获取全部工单）
    * Update a ticket（更新工单）

## 模板和示例

[浏览 Freshservice 节点文档集成模板](https://n8n.io/integrations/freshservice)，或[搜索所有模板](https://n8n.io/workflows/)
