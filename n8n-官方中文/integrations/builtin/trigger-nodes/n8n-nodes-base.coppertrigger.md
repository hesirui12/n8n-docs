---
title: Copper 触发器节点文档（Copper Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 Copper 触发器节点。按照技术文档将 Copper
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Copper Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.coppertrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.coppertrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.coppertrigger
layout:
  description:
    visible: false
---

# Copper 触发器节点（Copper Trigger node）

{% hint style="info" %}
**大白话**：Copper 是一款和 Google Workspace（谷歌办公套件）深度集成的 CRM（客户关系管理）软件，主要面向中小企业。这个触发器节点会在 CRM 数据变化时自动唤醒工作流，支持 3 种事件：**New（新增）**、**Update（更新）**、**Delete（删除）**。用法：放工作流开头，勾选要监听的事件，客户/商机/任务等数据一变就会自动触发。
{% endhint %}

[Copper](https://www.copper.com/) 是一款与 Google Workspace 深度集成的 CRM（客户关系管理）软件，主要面向中小型企业。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/copper.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [Copper Trigger 集成](https://n8n.io/integrations/copper-trigger/)页面。
{% endhint %}

## 事件（Events）

* Delete（删除）
* New（新增）
* Update（更新）

## 相关资源（Related resources）

n8n 也为 Copper 提供了应用节点（用来读写数据的常规节点）。你可以在[这里](../app-nodes/n8n-nodes-base.copper.md)找到该节点的文档。

在 n8n 网站上查看[示例工作流和相关内容](https://n8n.io/integrations/copper-trigger/)。

关于他们的 API 细节，请参考 [Copper 的官方文档](https://developer.copper.com/)。
