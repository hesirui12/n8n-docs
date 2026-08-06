---
title: Tapfiliate 节点文档
description: >-
  学习如何在 n8n 中使用 Tapfiliate 节点。按照技术文档将
  Tapfiliate 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Tapfiliate 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.tapfiliate.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.tapfiliate'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.tapfiliate'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Tapfiliate 是做「分销联盟（Affiliate）营销」的软件——你找一堆推广员帮你卖货，按成交给他们分佣。这个节点让你在 n8n 里管理推广员（Affiliate）、给推广员添加附加信息（Metadata，比如备注他的渠道来源）、以及把推广员安排到某个推广计划（Program）里。常见场景：新用户注册后自动创建推广员账号，然后把他加进主推广计划。
{% endhint %}

# Tapfiliate 节点

使用 Tapfiliate 节点来自动化你在 Tapfiliate 中的工作，并把它与其它应用集成。n8n 内置支持 Tapfiliate 的大量功能，包括创建和删除推广员（Affiliate）、添加推广员附加信息（Metadata）。

在本页你可以看到 Tapfiliate 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Tapfiliate 凭证](../credentials/tapfiliate.md)。
{% endhint %}

## 操作

* Affiliate（推广员）
    * Create an affiliate（创建推广员）
    * Delete an affiliate（删除推广员）
    * Get an affiliate by ID（按 ID 获取单个推广员）
    * Get all affiliates（获取全部推广员）
* Affiliate Metadata（推广员附加信息）
    * Add metadata to affiliate（给推广员添加附加信息）
    * Remove metadata from affiliate（移除推广员的附加信息）
    * Update affiliate's metadata（更新推广员的附加信息）
* Program Affiliate（计划中的推广员）
    * Add affiliate to program（把推广员加入推广计划）
    * Approve an affiliate for a program（批准推广员加入推广计划）
    * Disapprove an affiliate（驳回推广员）
    * Get an affiliate in a program（获取某计划中的单个推广员）
    * Get all affiliates in program（获取某计划中的全部推广员）

## 模板与示例

[浏览 Tapfiliate 节点的官方集成模板](https://n8n.io/integrations/tapfiliate)，或[搜索全部模板](https://n8n.io/workflows/)。
