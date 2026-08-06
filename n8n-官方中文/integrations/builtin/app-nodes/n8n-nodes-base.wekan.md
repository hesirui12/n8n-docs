---
title: Wekan 节点文档
description: >-
  学习如何在 n8n 中使用 Wekan 节点。按照技术文档将 Wekan
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Wekan 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.wekan.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.wekan'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.wekan'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Wekan 是一个「开源看板项目管理工具」（类似 Trello）——用「看板 → 列表 → 卡片」来管理任务。这个节点可以帮你：管理看板（Board）、列表（List）、卡片（Card）、卡片评论（Card Comment）、检查清单（Checklist）和检查清单项（Checklist Item）的增删改查。适合做任务自动化，比如新工单自动建卡片。
{% endhint %}

# Wekan 节点

使用 Wekan 节点来自动化你在 Wekan 中的工作，并把它与其它应用集成。n8n 内置支持 Wekan 的大量功能，包括创建、更新、删除和获取看板与卡片。

在本页你可以看到 Wekan 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Wekan 凭证](../credentials/wekan.md)。
{% endhint %}

## 操作

* Board（看板）
    * Create a new board（创建新看板）
    * Delete a board（删除看板）
    * Get the data of a board（获取看板数据）
    * Get all user boards（获取用户的所有看板）
* Card（卡片）
    * Create a new card（创建新卡片）
    * Delete a card（删除卡片）
    * Get a card（获取卡片）
    * Get all cards（获取全部卡片）
    * Update a card（更新卡片）
* Card Comment（卡片评论）
    * Create a comment on a card（在卡片上创建评论）
    * Delete a comment from a card（删除卡片上的评论）
    * Get a card comment（获取卡片评论）
    * Get all card comments（获取全部卡片评论）
* Checklist（检查清单）
    * Create a new checklist（创建新检查清单）
    * Delete a checklist（删除检查清单）
    * Get the data of a checklist（获取检查清单数据）
    * Returns all checklists for the card（返回卡片上的全部检查清单）
* Checklist Item（检查清单项）
    * Delete a checklist item（删除检查清单项）
    * Get a checklist item（获取检查清单项）
    * Update a checklist item（更新检查清单项）
* List（列表）
    * Create a new list（创建新列表）
    * Delete a list（删除列表）
    * Get the data of a list（获取列表数据）
    * Get all board lists（获取看板上的全部列表）

## 模板与示例

[浏览 Wekan 节点的官方集成模板](https://n8n.io/integrations/wekan)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）

## 加载节点的全部参数

要加载全部参数（例如 Author ID 作者 ID），你需要给该用户授予管理员权限。请参考 [Wekan 文档](https://github.com/wekan/wekan/wiki/Features#members-click-member-initials-or-avatar--permissions-adminnormalcomment-only) 了解如何修改权限。
