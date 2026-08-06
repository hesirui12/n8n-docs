---
title: Action Network 节点文档
description: >-
  学习如何在 n8n 中使用 Action Network 节点。按照技术文档将 Action
  Network 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Action Network 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.actionnetwork.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.actionnetwork
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.actionnetwork
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Action Network 是一个给公益组织、工会、竞选活动用的「行动动员平台」（组织活动、请愿、收集签名、管理成员）。这个节点让你不用打开网站，直接在 n8n 工作流里管理活动（Event）、人员（Person）、标签（Tag）、请愿书（Petition）、签名（Signature）和出勤记录（Attendance）。说白了：把「建活动、加成员、记签到、收签名」这些重复操作全部自动化。
{% endhint %}

# Action Network 节点

使用 Action Network 节点来自动化你在 Action Network 中的工作，并把它与其它应用集成。n8n 内置支持 Action Network 的大量功能，包括创建、更新、删除活动、人员、标签和签名。

在本页你可以看到 Action Network 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Action Network 凭证](../credentials/actionnetwork.md)。
{% endhint %}

（官方此处嵌入了「如何开始使用应用节点」的通用说明组件，此处从略。）

## 操作

* Attendance（出勤记录）
    * Create（创建）
    * Get（获取）
    * Get All（获取全部）
* Event（活动）
    * Create（创建）
    * Get（获取）
    * Get All（获取全部）
* Person（人员）
    * Create（创建）
    * Get（获取）
    * Get All（获取全部）
    * Update（更新）
* Person Tag（人员标签）
    * Add（添加）
    * Remove（移除）
* Petition（请愿书）
    * Create（创建）
    * Get（获取）
    * Get All（获取全部）
    * Update（更新）
* Signature（签名）
    * Create（创建）
    * Get（获取）
    * Get All（获取全部）
    * Update（更新）
* Tag（标签）
    * Create（创建）
    * Get（获取）
    * Get All（获取全部）

## 模板与示例

[浏览 Action Network 节点的官方集成模板](https://n8n.io/integrations/action-network)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
