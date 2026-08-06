---
title: Trello 节点文档
description: >-
  学习如何在 n8n 中使用 Trello 节点。按照技术文档将
  Trello 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Trello 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.trello.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.trello'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.trello'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Trello 是看板式项目管理工具（用「看板 Board → 列表 List → 卡片 Card」来管任务）。这个节点让你在 n8n 里操作它：建卡片、移动卡片、建看板、管清单（Checklist）、加标签、加附件、评论、管成员等。常用场景：表单提交自动建卡片；卡片移动到「完成」列时自动发通知。页尾还教你怎么查某个列表的 List ID。
{% endhint %}

# Trello 节点

使用 Trello 节点来自动化你在 Trello 中的工作，并把它与其它应用集成。n8n 内置支持 Trello 的大量功能，包括创建和更新卡片（Card）、添加和移除成员。

在本页你可以看到 Trello 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Trello 凭证](../credentials/trello.md)。
{% endhint %}

（官方此处嵌入了「如何开始使用应用节点」的通用说明组件，此处从略。）

## 操作

* Attachment（附件）
    * Create a new attachment for a card（为卡片创建新附件）
    * Delete an attachment（删除附件）
    * Get the data of an attachment（获取附件数据）
    * Returns all attachments for the card（返回卡片的全部附件）
* Board（看板）
    * Create a new board（创建新看板）
    * Delete a board（删除看板）
    * Get the data of a board（获取看板数据）
    * Update a board（更新看板）
* Board Member（看板成员）
    * Add（添加）
    * Get All（获取全部）
    * Invite（邀请）
    * Remove（移除）
* Card（卡片）
    * Create a new card（创建新卡片）
    * Delete a card（删除卡片）
    * Get the data of a card（获取卡片数据）
    * Update a card（更新卡片）
* Card Comment（卡片评论）
    * Create a comment on a card（在卡片上创建评论）
    * Delete a comment from a card（删除卡片上的评论）
    * Update a comment on a card（更新卡片上的评论）
* Checklist（清单）
    * Create a checklist item（创建清单项）
    * Create a new checklist（创建新清单）
    * Delete a checklist（删除清单）
    * Delete a checklist item（删除清单项）
    * Get the data of a checklist（获取清单数据）
    * Returns all checklists for the card（返回卡片的全部清单）
    * Get a specific checklist on a card（获取卡片上的某个清单）
    * Get the completed checklist items on a card（获取卡片上已完成的清单项）
    * Update an item in a checklist on a card（更新卡片清单中的某个条目）
* Label（标签）
    * Add a label to a card（给卡片添加标签）
    * Create a new label（创建新标签）
    * Delete a label（删除标签）
    * Get the data of a label（获取标签数据）
    * Returns all labels for the board（返回看板的全部标签）
    * Remove a label from a card（移除卡片上的标签）
    * Update a label（更新标签）
* List（列表）
    * Archive/Unarchive a list（归档/取消归档列表）
    * Create a new list（创建新列表）
    * Get the data of a list（获取列表数据）
    * Get all the lists（获取全部列表）
    * Get all the cards in a list（获取列表中全部卡片）
    * Update a list（更新列表）

## 模板与示例

[浏览 Trello 节点的官方集成模板](https://n8n.io/integrations/trello)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）

## 找到 List ID（列表编号）

1. 打开包含该列表的 Trello 看板。
2. 如果列表里没有卡片，先往列表里加一张卡片。
3. 打开这张卡片，在网址末尾加上 `.json`，按回车。
4. 在返回的 JSON 文件里，你会看到一个名为 `idList` 的字段。
5. 复制 `idList` 字段的内容，粘贴到 n8n 中的 **List ID**（列表编号）字段里。
