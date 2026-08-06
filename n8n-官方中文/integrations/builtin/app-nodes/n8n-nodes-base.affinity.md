---
title: Affinity 节点文档
description: >-
  学习如何在 n8n 中使用 Affinity 节点。按照技术文档将 Affinity
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Affinity 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.affinity.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.affinity'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.affinity'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Affinity 是一个做「关系管理」的 CRM，专门帮投资机构、销售团队管理人脉网络。这个节点让你在 n8n 里管理列表（List）、列表条目（List Entry）、组织（Organization）和人（Person）。常用场景：把新认识的客户自动建档进 Affinity，或者定时同步联系人资料。
{% endhint %}

# Affinity 节点

使用 Affinity 节点来自动化你在 Affinity 中的工作，并把它与其它应用集成。n8n 内置支持 Affinity 的大量功能，包括创建、获取、更新、删除列表、条目、组织和人员。

在本页你可以看到 Affinity 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Affinity 凭证](../credentials/affinity.md)。
{% endhint %}

（官方此处嵌入了「如何开始使用应用节点」的通用说明组件，此处从略。）

## 操作

* List（列表）
    * Get a list（获取列表）
    * Get all lists（获取全部列表）
* List Entry（列表条目）
    * Create a list entry（创建条目）
    * Delete a list entry（删除条目）
    * Get a list entry（获取条目）
    * Get all list entries（获取全部条目）
* Organization（组织）
    * Create an organization（创建组织）
    * Delete an organization（删除组织）
    * Get an organization（获取组织）
    * Get all organizations（获取全部组织）
    * Update an organization（更新组织）
* Person（人员）
    * Create a person（创建人员）
    * Delete a person（删除人员）
    * Get a person（获取人员）
    * Get all persons（获取全部人员）
    * Update a person（更新人员）

## 模板与示例

[浏览 Affinity 节点的官方集成模板](https://n8n.io/integrations/affinity)，或[搜索全部模板](https://n8n.io/workflows/)。
