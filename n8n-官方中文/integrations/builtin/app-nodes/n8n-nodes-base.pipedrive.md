---
title: Pipedrive 节点文档
description: >-
  学习如何在 n8n 中使用 Pipedrive 节点。按照技术文档将 Pipedrive
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Pipedrive 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.pipedrive.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.pipedrive'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.pipedrive'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Pipedrive 是面向销售团队的 CRM（客户关系管理）软件，主打「可视化销售管道」。这个节点让你在 n8n 里直接操作 Pipedrive 的各种数据：活动（Activity）、交易（Deal）、文件（File）、线索（Lead）、备注（Note）、组织（Organization）、联系人（Person）、产品（Product）等，支持增删改查、搜索、复制交易——适合做「表单提交→自动创建交易」等销售自动化。
{% endhint %}

# Pipedrive 节点

使用 Pipedrive 节点来自动化你在 Pipedrive 中的工作，并把它与其它应用集成。n8n 内置支持 Pipedrive 的大量功能，包括创建、更新、删除和获取活动（activity）、文件（file）、备注（note）、组织（organization）和线索（lead）。

在本页你可以看到 Pipedrive 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Pipedrive 凭证](../credentials/pipedrive.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作

* Activity（活动）
    * Create an activity（创建活动）
    * Delete an activity（删除活动）
    * Get data of an activity（获取单个活动的数据）
    * Get data of all activities（获取全部活动的数据）
    * Update an activity（更新活动）
* Deal（交易）
    * Create a deal（创建交易）
    * Delete a deal（删除交易）
    * Duplicate a deal（复制交易）
    * Get data of a deal（获取单个交易的数据）
    * Get data of all deals（获取全部交易的数据）
    * Search a deal（搜索交易）
    * Update a deal（更新交易）
* Deal Activity（交易活动）
    * Get all activities of a deal（获取一个交易下的全部活动）
* Deal Product（交易产品）
    * Add a product to a deal（把产品添加到交易）
    * Get all products in a deal（获取交易中的全部产品）
    * Remove a product from a deal（从交易中移除产品）
    * Update a product in a deal（更新交易中的产品）
* File（文件）
    * Create a file（创建文件）
    * Delete a file（删除文件）
    * Download a file（下载文件）
    * Get data of a file（获取文件的数据）
* Lead（线索）
    * Create a lead（创建线索）
    * Delete a lead（删除线索）
    * Get data of a lead（获取单个线索的数据）
    * Get data of all leads（获取全部线索的数据）
    * Update a lead（更新线索）
* Note（备注）
    * Create a note（创建备注）
    * Delete a note（删除备注）
    * Get data of a note（获取单个备注的数据）
    * Get data of all notes（获取全部备注的数据）
    * Update a note（更新备注）
* Organization（组织）
    * Create an organization（创建组织）
    * Delete an organization（删除组织）
    * Get data of an organization（获取单个组织的数据）
    * Get data of all organizations（获取全部组织的数据）
    * Update an organization（更新组织）
    * Search organizations（搜索组织）
* Person（联系人）
    * Create a person（创建联系人）
    * Delete a person（删除联系人）
    * Get data of a person（获取单个联系人的数据）
    * Get data of all persons（获取全部联系人的数据）
    * Search all persons（搜索全部联系人）
    * Update a person（更新联系人）
* Product（产品）
    * Get data of all products（获取全部产品的数据）

## 模板与示例

[浏览 Pipedrive 节点的官方集成模板](https://n8n.io/integrations/pipedrive)，或[搜索全部模板](https://n8n.io/workflows/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
