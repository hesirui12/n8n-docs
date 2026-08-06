---
title: Microsoft Dynamics CRM 节点文档
description: >-
  学习如何在 n8n 中使用 Microsoft Dynamics CRM 节点。按照
  技术文档将 Microsoft Dynamics CRM 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Microsoft Dynamics CRM 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.microsoftdynamicscrm.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftdynamicscrm
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftdynamicscrm
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Microsoft Dynamics CRM 是微软的企业级客户关系管理系统（管销售、客户、商机那套东西，后来改叫 Dynamics 365）。这个节点目前只操作一种数据：客户账号（Account，就是企业客户档案）。能做的就五件事：创建、删除、获取、获取全部、更新。适合做「外部系统来了新客户 → 自动建档到 Dynamics」这类集成。
{% endhint %}

# Microsoft Dynamics CRM 节点

使用 Microsoft Dynamics CRM 节点来自动化你在 Microsoft Dynamics CRM 中的工作，并把它与其它应用集成。n8n 内置支持创建、更新、删除和获取 Microsoft Dynamics CRM 客户账号（account）。

在本页你可以看到 Microsoft Dynamics CRM 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Microsoft 凭证](../credentials/microsoft.md)。
{% endhint %}

## 操作

* Account（客户账号）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get All（获取全部）
    * Update（更新）

## 模板与示例

[浏览 Microsoft Dynamics CRM 节点的官方集成模板](https://n8n.io/integrations/microsoft-dynamics-crm)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
