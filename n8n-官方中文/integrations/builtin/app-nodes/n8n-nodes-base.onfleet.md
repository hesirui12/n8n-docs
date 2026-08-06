---
title: Onfleet 节点文档
description: >-
  学习如何在 n8n 中使用 Onfleet 节点。按照技术文档将 Onfleet
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Onfleet 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.onfleet.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.onfleet'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.onfleet'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Onfleet 是「最后一公里配送」的管理平台（给快递/外卖/同城配送公司排路线、派单、跟踪司机）。这个节点让你在 n8n 里直接操作 Onfleet 的各种资源：任务（Task）、管理员（Admin）、配送点（Destination）、枢纽（Hub）、组织（Organization）、收件人（Recipient）、团队（Team）、司机（Worker）等，实现自动派单、自动跟踪等配送自动化。
{% endhint %}

# Onfleet 节点

使用 Onfleet 节点来自动化你在 Onfleet 中的工作，并把它与其它应用集成。n8n 内置支持 Onfleet 的大量功能，包括在 Onfleet 中创建和删除任务（Task），以及获取组织（Organization）的详情。

在本页你可以看到 Onfleet 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Onfleet 凭证](../credentials/onfleet.md)。
{% endhint %}

## 操作

* Admin（管理员）
    * Create a new Onfleet admin（创建新的 Onfleet 管理员）
    * Delete an Onfleet admin（删除 Onfleet 管理员）
    * Get all Onfleet admins（获取全部 Onfleet 管理员）
    * Update an Onfleet admin（更新 Onfleet 管理员）
* Container（容器，指配送任务的集合）
    * Add task at index (or append)（在指定位置添加任务，或追加到末尾）
    * Get container information（获取容器信息）
    * Fully replace a container's tasks（完全替换容器中的任务）
* Destination（配送点）
    * Create a new destination（创建新的配送点）
    * Get a specific destination（获取指定配送点）
* Hub（枢纽）
    * Create a new Onfleet hub（创建新的 Onfleet 枢纽）
    * Get all Onfleet hubs（获取全部 Onfleet 枢纽）
    * Update an Onfleet hub（更新 Onfleet 枢纽）
* Organization（组织）
    * Retrieve your own organization's details（获取你自己组织的详情）
    * Retrieve the details of an organization with which you are connected（获取与你有连接的组织详情）
* Recipient（收件人）
    * Create a new Onfleet recipient（创建新的 Onfleet 收件人）
    * Get a specific Onfleet recipient（获取指定 Onfleet 收件人）
    * Update an Onfleet recipient（更新 Onfleet 收件人）
* Task（任务）
    * Create a new Onfleet task（创建新的 Onfleet 任务）
    * Clone an Onfleet task（克隆 Onfleet 任务）
    * Force-complete a started Onfleet task（强制完成一个已开始的任务）
    * Delete an Onfleet task（删除 Onfleet 任务）
    * Get all Onfleet tasks（获取全部 Onfleet 任务）
    * Get a specific Onfleet task（获取指定 Onfleet 任务）
    * Update an Onfleet task（更新 Onfleet 任务）
* Team（团队）
    * Automatically dispatch tasks assigned to a team to on-duty drivers（把分配给团队的任务自动派给当班司机）
    * Create a new Onfleet team（创建新的 Onfleet 团队）
    * Delete an Onfleet team（删除 Onfleet 团队）
    * Get a specific Onfleet team（获取指定 Onfleet 团队）
    * Get all Onfleet teams（获取全部 Onfleet 团队）
    * Get estimated times for upcoming tasks for a team, returns a selected driver（获取团队即将执行任务的预估时间，并返回选定的司机）
    * Update an Onfleet team（更新 Onfleet 团队）
* Worker（司机）
    * Create a new Onfleet worker（创建新的 Onfleet 司机）
    * Delete an Onfleet worker（删除 Onfleet 司机）
    * Get a specific Onfleet worker（获取指定 Onfleet 司机）
    * Get all Onfleet workers（获取全部 Onfleet 司机）
    * Get a specific Onfleet worker schedule（获取指定 Onfleet 司机的排班）
    * Update an Onfleet worker（更新 Onfleet 司机）

## 模板与示例

[浏览 Onfleet 节点的官方集成模板](https://n8n.io/integrations/onfleet)，或[搜索全部模板](https://n8n.io/workflows/)。
