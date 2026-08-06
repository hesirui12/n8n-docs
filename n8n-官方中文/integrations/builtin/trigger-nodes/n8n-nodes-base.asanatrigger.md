---
title: Asana 触发器节点文档（Asana Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 Asana 触发器节点。按照技术文档将 Asana
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Asana Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.asanatrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.asanatrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.asanatrigger
layout:
  description:
    visible: false
---

# Asana 触发器节点（Asana Trigger node）

{% hint style="info" %}
**大白话**：Asana 是一款团队项目管理工具（网页 + 手机 App），用来组织、跟踪和管理团队工作，比如任务、项目、里程碑。这个触发器节点会在 Asana 里发生新事件时自动唤醒你的工作流。它支持一种事件类型：**New Asana event（新的 Asana 事件）**。用法很简单：把节点放在工作流开头，配好授权，之后 Asana 里的任何变动都会自动触发后续流程。
{% endhint %}

[Asana](https://asana.com/) 是一款网页和移动端应用，旨在帮助团队组织、跟踪和管理他们的工作。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/asana.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [Asana Trigger 集成](https://n8n.io/integrations/asana-trigger/)页面。
{% endhint %}

## 事件（Events）

* New Asana event（新的 Asana 事件）

## 相关资源（Related resources）

n8n 也为 Asana 提供了应用节点（用来读写数据的常规节点）。你可以在[这里](../app-nodes/n8n-nodes-base.asana.md)找到该节点的文档。

在 n8n 网站上查看[示例工作流和相关内容](https://n8n.io/integrations/asana-trigger/)。

关于他们的 API 细节，请参考 [Asana 的官方文档](https://developers.asana.com/reference/rest-api-reference)。
