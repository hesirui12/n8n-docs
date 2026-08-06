---
title: Facebook Lead Ads 触发器节点文档
description: >-
  Learn how to use the Facebook Lead Ads Trigger node in n8n. Follow technical
  documentation to integrate Facebook Lead Ads Trigger node into your workflows.
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Facebook Lead Ads 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.facebookleadadstrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebookleadadstrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebookleadadstrigger
layout:
  description:
    visible: false
---

# Facebook Lead Ads 触发器节点

> **大白话**：这个节点用来"监听" Facebook 广告里的潜在客户（Lead Ads，即广告线索表单）。只要有人在你的广告里填了线索表单，它就立刻触发工作流，把新线索送进来，方便你自动跟进。

使用 Facebook Lead Ads 触发器节点来响应 [Facebook Lead Ads](https://www.facebook.com/business/ads/lead-ads/) 中的事件，并将 Facebook Lead Ads 与其他应用集成。n8n 内置了对"响应新线索"的支持。

本页列出了 Facebook Lead Ads 触发器节点可以响应的事件，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以在此处找到该节点的认证信息：[Facebook Lead Ads 凭据](../credentials/facebookleadads.md)。
{% endhint %}

{% hint style="info" %}
**示例与模板**

如需使用示例和入门模板，请参阅 n8n 的 [Facebook Lead Ads 触发器集成](https://n8n.io/integrations/facebook-lead-ads-trigger/) 页面。
{% endhint %}

## 事件（Events）

* 新线索（New lead）

## 相关资源

在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/facebook-lead-ads-trigger/)。

关于其 API 的细节，请参阅 [Facebook Lead Ads 官方文档](https://developers.facebook.com/docs/marketing-api/guides/lead-ads/)。

## 常见问题（Common issues）

以下是 Facebook Lead Ads 触发器节点的一些常见错误和问题，以及解决或排查步骤。

### 工作流只在测试或生产环境有效

Facebook Lead Ads 只允许每个应用（App）注册一个 webhook。这意味着每次你在测试 URL 和生产 URL 之间切换时，Facebook Lead Ads 都会覆盖已注册的 webhook URL。

如果你试图测试一个已经发布的工作流，就会遇到这个问题：Facebook Lead Ads 只会把事件发送到两个 webhook URL 中的一个，另一个永远收不到通知。

解决方法是：测试时先停用你的工作流。

{% hint style="warning" %}
**会暂停生产流量**

这个变通方法会暂时停用你的生产工作流以便测试。工作流在取消发布期间将不再接收生产流量。
{% endhint %}

1. 进入你的工作流页面。
2. 从工作流设置下拉菜单中，点击 **Unpublish（取消发布）** 暂时停用工作流。
3. 使用测试 webhook URL 测试你的工作流。
4. 测试完成后，点击 **Publish（发布）**。生产 webhook URL 应恢复正常工作。
