---
title: ActiveCampaign 触发器节点文档（ActiveCampaign Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 ActiveCampaign 触发器节点。按照技术文档将 ActiveCampaign
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: ActiveCampaign Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.activecampaigntrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.activecampaigntrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.activecampaigntrigger
layout:
  description:
    visible: false
---

# ActiveCampaign 触发器节点（ActiveCampaign Trigger node）

{% hint style="info" %}
**大白话**：ActiveCampaign 是一家做「客户体验自动化」的云服务商，主要面向中小型企业，功能涵盖邮件营销、营销自动化、销售自动化和 CRM（客户关系管理）。这个触发器节点的作用就是：只要 ActiveCampaign 里发生新事件（比如新增了一个联系人），它就立刻唤醒你的工作流去处理。它支持一种事件类型：**New ActiveCampaign event（新的 ActiveCampaign 事件）**。简单说，把它放在工作流开头，就相当于给 ActiveCampaign 装了一个「感应器」。
{% endhint %}

[ActiveCampaign](https://www.activecampaign.com/) 是一个面向中小型企业的云软件平台。该公司提供客户体验自动化软件，集邮件营销、营销自动化、销售自动化和 CRM（客户关系管理）于一体。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/activecampaign.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [ActiveCampaign Trigger 集成](https://n8n.io/integrations/activecampaign-trigger/)页面。
{% endhint %}

## 事件（Events）

* New ActiveCampaign event（新的 ActiveCampaign 事件）

## 相关资源（Related resources）

n8n 也为 ActiveCampaign 提供了应用节点（用来读写数据的常规节点）。你可以在[这里](../app-nodes/n8n-nodes-base.activecampaign.md)找到该节点的文档。

在 n8n 网站上查看[示例工作流和相关内容](https://n8n.io/integrations/activecampaign-trigger/)。

关于他们的 API 细节，请参考 [ActiveCampaign 的官方文档](https://developers.activecampaign.com/reference/overview)。
