---
title: HubSpot Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 HubSpot Trigger 节点。按照本文档将
  HubSpot Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: HubSpot Trigger 节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.hubspottrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.hubspottrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.hubspottrigger
layout:
  description:
    visible: false
---

# HubSpot Trigger 节点

> **大白话**：HubSpot 是一站式营销/销售/客服平台（社媒营销、内容管理、数据分析、落地页、客服、SEO 都有）。这个触发器节点监听 HubSpot 里的各种事件——比如新增了客户联系人、商机状态变了、工单被删了——一有动静就启动你的工作流。⚠️ 注意：HubSpot 一次只允许一个 webhook，所以如果你同时激活了第二个触发器，前一个会失效。

[HubSpot](https://www.hubspot.com/) 提供社交媒体营销、内容管理、网站分析、落地页、客户支持和搜索引擎优化等工具。

{% hint style="warning" %}
**Webhooks**

如果你激活了第二个触发器，之前那个触发器就会停止工作。这是因为每次激活时，触发器都会向 HubSpot 注册一个新的 webhook，而 HubSpot 一次只允许一个 webhook 存在。
{% endhint %}

{% hint style="info" %}
**凭证（Credentials）**

你可以[在这里](../credentials/hubspot.md)找到此节点的认证信息。
{% endhint %}

{% hint style="info" %}
**示例与模板**

想找使用示例和入门模板，可以查看 n8n 的 [HubSpot Trigger 集成](https://n8n.io/integrations/hubspot-trigger/) 页面。
{% endhint %}

## 事件（Events）

* Company（公司）
	* Created（已创建）
	* Deleted（已删除）
	* Property changed（属性变更）
* Contact（联系人）
	* Created（已创建）
	* Deleted（已删除）
	* Privacy deleted（因隐私被删除）
	* Property changed（属性变更）
* Conversation（对话）
	* Created（已创建）
	* Deleted（已删除）
	* New message（新消息）
	* Privacy deletion（隐私删除）
	* Property changed（属性变更）
* Deal（商机）
	* Created（已创建）
	* Deleted（已删除）
	* Property changed（属性变更）
* Ticket（工单）
	* Created（已创建）
	* Deleted（已删除）
	* Property changed（属性变更）

## 相关资源

n8n 为 HubSpot 提供了一个应用节点（app node）。你可以[在这里](../app-nodes/n8n-nodes-base.hubspot.md)找到该节点的文档。

在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/hubspot-trigger/)。

关于 HubSpot API 的详细信息，请参考 [HubSpot 官方文档](https://developers.hubspot.com/docs/api/overview)。
