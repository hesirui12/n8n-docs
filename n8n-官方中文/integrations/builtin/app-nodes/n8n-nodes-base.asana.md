---
title: Asana 节点文档
description: >-
  学习如何在 n8n 中使用 Asana 节点。按照技术文档将 Asana
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Asana 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.asana.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.asana'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.asana'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Asana 是团队项目管理工具，里面有项目（Project）、任务（Task）、子任务（Subtask）、评论和标签。这个节点让你在 n8n 里自动建任务、改任务、移动任务、加评论、贴标签、查用户。典型场景：收到客户邮件 → 自动在 Asana 建一个跟进任务并打上标签。
{% endhint %}

# Asana 节点

使用 Asana 节点来自动化你在 Asana 中的工作，并把它与其它应用集成。n8n 内置支持 Asana 的大量功能，包括创建、更新、删除、获取用户、任务、项目和子任务。

在本页你可以看到 Asana 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Asana 凭证](../credentials/asana.md)。
{% endhint %}

{% hint style="warning" %}
**请升级到 1.22.2 或更高版本**

由于 Asana API 的变更，本节点的一些操作已于 2023 年 1 月 17 日起停止工作。请升级到 n8n 1.22.2 或更高版本。
{% endhint %}

（官方此处嵌入了「如何开始使用应用节点」的通用说明组件，此处从略。）

## 操作

* Project（项目）
    * Create a new project（创建项目）
    * Delete a project（删除项目）
    * Get a project（获取项目）
    * Get all projects（获取全部项目）
    * Update a project（更新项目）
* Subtask（子任务）
    * Create a subtask（创建子任务）
    * Get all subtasks（获取全部子任务）
* Task（任务）
    * Create a task（创建任务）
    * Delete a task（删除任务）
    * Get a task（获取任务）
    * Get all tasks（获取全部任务）
    * Move a task（移动任务）
    * Search for tasks（搜索任务）
    * Update a task（更新任务）
* Task Comment（任务评论）
    * Add a comment to a task（给任务加评论）
    * Remove a comment from a task（删除任务评论）
* Task Tag（任务标签）
    * Add a tag to a task（给任务加标签）
    * Remove a tag from a task（移除任务标签）
* Task Project（任务与项目）
    * Add a task to a project（把任务加入项目）
    * Remove a task from a project（把任务移出项目）
* User（用户）
    * Get a user（获取用户）
    * Get all users（获取全部用户）

## 模板与示例

[浏览 Asana 节点的官方集成模板](https://n8n.io/integrations/asana)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
