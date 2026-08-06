---
title: Microsoft To Do 节点文档
description: >-
  学习如何在 n8n 中使用 Microsoft To Do 节点。按照技术文档将 Microsoft
  To Do 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Microsoft To Do 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.microsofttodo.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsofttodo
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsofttodo
layout:
  description:
    visible: false
---

# Microsoft To Do 节点

> 💡 **大白话**：Microsoft To Do 是微软的「待办事项清单」应用。用这个节点，你可以让 n8n 自动创建、更新、删除、查看待办任务（Task）、清单（List）和关联资源（Linked Resource），比如「每天一早把日历里的任务自动同步成待办」。

使用 Microsoft To Do 节点来自动化你在 Microsoft To Do 中的工作，并把它与其它应用集成。n8n 内置支持 Microsoft To Do 的大量功能，包括创建、更新、删除和获取关联资源、清单和任务。

在本页你可以看到 Microsoft To Do 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Microsoft 凭证](../credentials/microsoft.md)。该节点还支持 [Microsoft Entra Service Principal 凭证](../credentials/microsoftentraserviceprincipal.md)，用于「无登录用户」的纯应用访问：在 **Authentication（认证方式）** 下拉框中选择 **Microsoft Entra Service Principal (App-Only)（Microsoft Entra 服务主体-仅应用）** 即可。
{% endhint %}

{% hint style="info" %}
**政府云支持（Government Cloud Support）**

如果你使用的是政府云租户（US Government、US Government DOD 或 China），请务必在 Microsoft 凭证配置中选择正确的 **Microsoft Graph API Base URL（Microsoft Graph API 基础 URL）**。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作（Operations）

* Linked Resource（关联资源）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get All（获取全部）
    * Update（更新）
* List（清单）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get All（获取全部）
    * Update（更新）
* Task（任务）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get All（获取全部）
    * Update（更新）

## 模板与示例（Templates and examples）

[浏览 Microsoft To Do 节点文档集成模板](https://n8n.io/integrations/microsoft-to-do)，或[搜索全部模板](https://n8n.io/workflows/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
