---
title: WhatsApp 触发器节点文档
contentType:
  - integration
  - reference
priority: high
nodeTitle: WhatsApp 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.whatsapptrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.whatsapptrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.whatsapptrigger
description: >-
  学习如何在 n8n 中使用 WhatsApp 触发器节点。按照本文档将
  WhatsApp 触发器节点集成到你的工作流中。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# WhatsApp 触发器节点

> **大白话**：这个节点是 WhatsApp 的「消息门铃」。当你的 WhatsApp 商业账号收到消息、账号信息变动、或电话号码状态变化等事件时，它就启动工作流，让你能自动回复客户、把消息转发到别处、或做数据分析。内置支持账号、消息、电话号码等多种事件。放在工作流开头使用。

使用 WhatsApp 触发器节点来响应 WhatsApp 中的事件，并把 WhatsApp 与其他应用集成起来。n8n 内置支持多种多样的 WhatsApp 事件，包括账号、消息和电话号码事件。

在本页，你会看到 WhatsApp 触发器节点可以响应的事件列表，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/whatsapp.md)找到此节点的身份验证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [WhatsApp integrations](https://n8n.io/integrations/whatsapp-trigger/) 页面。
{% endhint %}

## 事件（Events）

* 账号审核更新（Account Review Update）
* 账号更新（Account Update）
* 商家能力更新（Business Capability Update）
* 消息模板质量更新（Message Template Quality Update）
* 消息模板状态更新（Message Template Status Update）
* 消息（Messages）
* 电话号码名称更新（Phone Number Name Update）
* 电话号码质量更新（Phone Number Quality Update）
* 安全（Security）
* 模板分类更新（Template Category Update）

## 相关资源（Related resources）

n8n 为 WhatsApp 提供了一个应用节点（app node）。你可以[在此处](../app-nodes/n8n-nodes-base.whatsapp/README.md)找到该节点的文档。

在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/whatsapp-trigger/)。

更多 API 细节请参考 [WhatsApp 的官方文档](https://developers.facebook.com/docs/whatsapp/cloud-api)。

## 常见问题（Common issues）

以下是 WhatsApp 触发器节点的一些常见错误和问题，以及解决或排查步骤。

### 工作流只在测试或生产模式下工作（Workflow only works in testing or production）

WhatsApp 只允许你为每个应用注册一个 webhook（网络钩子）。这意味着每次你在测试 URL 和生产 URL 之间切换时，WhatsApp 都会覆盖掉之前注册的 webhook URL。

如果你试着测试一个已经发布的工作流，就可能会遇到这个问题。WhatsApp 只会把事件发送到两个 webhook URL 中的其中一个，另一个永远不会收到事件通知。

要绕过这个问题，你可以在测试时停用你的工作流：

{% hint style="warning" %}
**会中断生产流量（Halts production traffic）**

这个解决办法会暂时停用你的生产工作流来用于测试。在你取消发布期间，你的工作流将不再接收生产流量。
{% endhint %}

1. 进入你的工作流页面。
2. 从工作流设置下拉菜单中，点击 **Unpublish（取消发布）** 来暂时停用该工作流。
3. 使用测试 webhook URL 测试你的工作流。
4. 测试完成后，点击 **Publish（发布）**。生产 webhook URL 应该会恢复工作。
