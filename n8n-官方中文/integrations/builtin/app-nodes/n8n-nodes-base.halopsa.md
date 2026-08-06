---
title: HaloPSA 节点文档
description: 学习如何在 n8n 中使用 HaloPSA 节点。按照技术文档将 HaloPSA 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: HaloPSA 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.halopsa.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.halopsa'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.halopsa'
layout:
  description:
    visible: false
---

# HaloPSA 节点

> 💡 **大白话**：HaloPSA 是一款 IT 服务管理（ITSM）软件，用来管工单（ticket）、客户（client）、站点（site）和用户。用这个节点，n8n 可以自动创建/更新/删除/查询这些对象——比如客户邮件进来，自动生成一张工单。

使用 HaloPSA 节点自动化 HaloPSA 中的工作，并将 HaloPSA 与其他应用集成。n8n 内置支持大量 HaloPSA 功能，包括创建、更新、删除和获取客户、站点和工单。

本页列出了 HaloPSA 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何设置认证，请参考 [HaloPSA 凭据](../credentials/halopsa.md)。
{% endhint %}

## 支持的操作（Operations）

* Client（客户）
    * Create a client（创建客户）
    * Delete a client（删除客户）
    * Get a client（获取客户）
    * Get all clients（获取所有客户）
    * Update a client（更新客户）
* Site（站点）
    * Create a site（创建站点）
    * Delete a site（删除站点）
    * Get a site（获取站点）
    * Get all sites（获取所有站点）
    * Update a site（更新站点）
* Ticket（工单）
    * Create a ticket（创建工单）
    * Delete a ticket（删除工单）
    * Get a ticket（获取工单）
    * Get all tickets（获取所有工单）
    * Update a ticket（更新工单）
* User（用户）
    * Create a user（创建用户）
    * Delete a user（删除用户）
    * Get a user（获取用户）
    * Get all users（获取所有用户）
    * Update a user（更新用户）

## 模板和示例（Templates and examples）

[浏览 HaloPSA 节点文档集成模板](https://n8n.io/integrations/halopsa) 或 [搜索所有模板](https://n8n.io/workflows/)
