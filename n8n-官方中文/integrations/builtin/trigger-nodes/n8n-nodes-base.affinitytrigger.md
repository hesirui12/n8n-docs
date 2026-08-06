---
title: Affinity 触发器节点文档（Affinity Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 Affinity 触发器节点。按照技术文档将 Affinity
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Affinity Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.affinitytrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.affinitytrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.affinitytrigger
layout:
  description:
    visible: false
---

# Affinity 触发器节点（Affinity Trigger node）

{% hint style="info" %}
**大白话**：Affinity 是一个「人脉关系智能平台」，帮销售团队管理客户关系、抓住下一个大单。这个触发器节点会在 Affinity 里的数据发生变化时唤醒你的工作流，比如：新增/修改/删除了某个客户（Person）、公司（Organization）、商机（Opportunity）、字段（Field）、列表（List）等。它支持 9 大类、每类又分创建/删除/更新等小事件。用法很简单：在工作流开头放这个节点，勾选你想监听的事件，一旦发生就会自动触发。
{% endhint %}

[Affinity](https://www.affinity.co/) 是一个强大的人脉关系智能平台，帮助团队利用自己的社交网络去促成下一笔大单。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/affinity.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [Affinity Trigger 集成](https://n8n.io/integrations/affinity-trigger/)页面。
{% endhint %}

## 事件（Events）

* Field value（字段值）
    * Created（已创建）
    * Deleted（已删除）
    * Updated（已更新）
* Field（字段）
    * Created（已创建）
    * Deleted（已删除）
    * Updated（已更新）
* File（文件）
    * Created（已创建）
    * Deleted（已删除）
* List entry（列表条目）
    * Created（已创建）
    * Deleted（已删除）
* List（列表）
    * Created（已创建）
    * Deleted（已删除）
    * Updated（已更新）
* Note（备注）
    * Created（已创建）
    * Deleted（已删除）
    * Updated（已更新）
* Opportunity（商机）
    * Created（已创建）
    * Deleted（已删除）
    * Updated（已更新）
* Organization（公司/组织）
    * Created（已创建）
    * Deleted（已删除）
    * Updated（已更新）
* Person（联系人）
    * Created（已创建）
    * Deleted（已删除）
    * Updated（已更新）

## 相关资源（Related resources）

n8n 也为 Affinity 提供了应用节点（用来读写数据的常规节点）。你可以在[这里](../app-nodes/n8n-nodes-base.affinity.md)找到该节点的文档。

在 n8n 网站上查看[示例工作流和相关内容](https://n8n.io/integrations/affinity-trigger/)。

关于他们的 API 细节，请参考 [Affinity 的官方文档](https://api-docs.affinity.co/)。
