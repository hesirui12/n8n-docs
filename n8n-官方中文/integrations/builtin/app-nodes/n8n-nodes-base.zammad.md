---
title: Zammad 节点文档
description: >-
  学习如何在 n8n 中使用 Zammad 节点。按照技术文档将 Zammad
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Zammad 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.zammad.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.zammad'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.zammad'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Zammad 是一个「开源客服工单系统」——客户发来的邮件、电话、聊天都汇成工单来跟踪处理。这个节点可以帮你：管理组（Group）、组织（Organization）、工单（Ticket）、用户（User）的增删改查。适合做客服自动化，比如把表单提交自动建工单、自动分配组。
{% endhint %}

# Zammad 节点

使用 Zammad 节点来自动化你在 Zammad 中的工作，并把它与其它应用集成。n8n 内置支持 Zammad 的大量功能，包括创建、获取和删除组与组织。

在本页你可以看到 Zammad 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Zammad 凭证](../credentials/zammad.md)。
{% endhint %}

## 操作

* Group（组）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get many（获取多个）
    * Update（更新）
* Organization（组织）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get many（获取多个）
    * Update（更新）
* Ticket（工单）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get many（获取多个）
    * Update（更新）
* User（用户）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get many（获取多个）
	* Get self（获取当前登录用户）
    * Update（更新）

## 模板与示例

[浏览 Zammad 节点的官方集成模板](https://n8n.io/integrations/zammad)，或[搜索全部模板](https://n8n.io/workflows/)。
