---
title: ServiceNow 节点文档
description: >-
  学习如何在 n8n 中使用 ServiceNow 节点。按照技术文档将 ServiceNow
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: ServiceNow 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.servicenow.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.servicenow'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.servicenow'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：ServiceNow 是一套企业级「IT 服务管理（ITSM）」平台——公司内部报障（Incident）、资产配置（Configuration Items）、用户管理等都在里面。这个节点可以帮你：创建/更新/删除工单（Incident）、用户，读写各种表记录，以及查询业务服务、部门、字典等基础数据。适合做内部 IT 流程自动化、工单自动派发。
{% endhint %}

# ServiceNow 节点

使用 ServiceNow 节点来自动化你在 ServiceNow 中的工作，并把它与其它应用集成。n8n 内置支持 ServiceNow 的大量功能，包括获取业务服务、部门、配置项和字典，以及创建、更新、删除工单、用户和表记录。

在本页你可以看到 ServiceNow 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [ServiceNow 凭证](../credentials/servicenow.md)。
{% endhint %}

## 操作

* Business Service（业务服务）
    * Get All（获取全部）
* Configuration Items（配置项）
    * Get All（获取全部）
* Department（部门）
    * Get All（获取全部）
* Dictionary（字典）
    * Get All（获取全部）
* Incident（事件/工单）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get All（获取全部）
    * Update（更新）
* Table Record（表记录）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get All（获取全部）
    * Update（更新）
* User（用户）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get All（获取全部）
    * Update（更新）
* User Group（用户组）
    * Get All（获取全部）
* User Role（用户角色）
    * Get All（获取全部）

## 模板与示例

[浏览 ServiceNow 节点的官方集成模板](https://n8n.io/integrations/servicenow)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
