---
title: Autopilot 节点文档
description: >-
  学习如何在 n8n 中使用 Autopilot 节点。按照技术文档将 Autopilot
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Autopilot 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.autopilot.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.autopilot'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.autopilot'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Autopilot 是「客户旅程自动化」营销工具，可以自动给客户发邮件、短信，把客户按列表分组管理。这个节点让你在 n8n 里管理联系人（Contact）、列表（List），以及把联系人加进/移出列表、检查是否在列表里。典型场景：新用户注册 → 自动创建联系人并加入「新用户」列表。
{% endhint %}

# Autopilot 节点

使用 Autopilot 节点来自动化你在 Autopilot 中的工作，并把它与其它应用集成。n8n 内置支持 Autopilot 的大量功能，包括创建、删除、更新联系人，以及把联系人添加到列表。

在本页你可以看到 Autopilot 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="warning" %}
**Autopilot 品牌变更提示**

Autopilot 已更名为 Ortto。Autopilot 的凭证和节点只兼容旧的 Autopilot，不兼容新的 Ortto API。
{% endhint %}

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Autopilot 凭证](../credentials/autopilot.md)。
{% endhint %}

## 操作

* Contact（联系人）
    * Create/Update a contact（创建/更新联系人）
    * Delete a contact（删除联系人）
    * Get a contact（获取联系人）
    * Get all contacts（获取全部联系人）
* Contact Journey（联系人旅程）
    * Add contact to list（把联系人加入列表）
* Contact List（联系人列表）
    * Add contact to list（把联系人加入列表）
    * Check if contact is on list（检查联系人是否在列表中）
    * Get all contacts on list（获取列表中的全部联系人）
    * Remove a contact from a list（把联系人移出列表）
* List（列表）
    * Create a list（创建列表）
    * Get all lists（获取全部列表）

## 模板与示例

[浏览 Autopilot 节点的官方集成模板](https://n8n.io/integrations/autopilot)，或[搜索全部模板](https://n8n.io/workflows/)。
