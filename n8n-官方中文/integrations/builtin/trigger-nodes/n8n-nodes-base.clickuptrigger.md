---
title: ClickUp 触发器节点文档（ClickUp Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 ClickUp 触发器节点。按照技术文档将 ClickUp
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: ClickUp Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.clickuptrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.clickuptrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.clickuptrigger
layout:
  description:
    visible: false
---

# ClickUp 触发器节点（ClickUp Trigger node）

{% hint style="info" %}
**大白话**：ClickUp 是一款云端项目管理/协作工具，功能包括任务分配、状态管理、提醒、沟通协作等。这个触发器节点会在 ClickUp 里发生变动时自动唤醒工作流，比如：任务（Task）被创建/删除/更新、状态改了、被移动、加了评论、改了截止日期，以及列表（List）、空间（Space）、关键结果（Key result）的增删改等。它支持 4 大类事件，其中任务类的事件最丰富（共 12 种）。用法：选好要监听的对象和事件即可。
{% endhint %}

[ClickUp](https://clickup.com/) 是一款基于云的协作和项目管理工具，适用于各种规模和行业的企业。功能包括沟通与协作工具、任务分配与状态、提醒以及任务工具栏。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/clickup.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [ClickUp Trigger 集成](https://n8n.io/integrations/clickup-trigger/)页面。
{% endhint %}

## 事件（Events）

* Key result（关键结果）
    * Created（已创建）
    * Deleted（已删除）
    * Updated（已更新）
* List（列表）
    * Created（已创建）
    * Deleted（已删除）
    * Updated（已更新）
* Space（空间）
    * Created（已创建）
    * Deleted（已删除）
    * Updated（已更新）
* Task（任务）
    * Assignee updated（负责人变更）
    * Comment（评论）
      * Posted（发布评论）
      * Updated（更新评论）
    * Created（已创建）
    * Deleted（已删除）
    * Due date updated（截止日期变更）
    * Moved（被移动）
    * Status updated（状态变更）
    * Tag updated（标签变更）
    * Time estimate updated（工时估算变更）
    * Time tracked updated（已记录工时变更）
    * Updated（已更新）

## 相关资源（Related resources）

n8n 也为 ClickUp 提供了应用节点（用来读写数据的常规节点）。你可以在[这里](../app-nodes/n8n-nodes-base.clickup.md)找到该节点的文档。

在 n8n 网站上查看[示例工作流和相关内容](https://n8n.io/integrations/clickup-trigger/)。

关于他们的 API 细节，请参考 [ClickUp 的官方文档](https://developer.clickup.com/docs/authentication)。
