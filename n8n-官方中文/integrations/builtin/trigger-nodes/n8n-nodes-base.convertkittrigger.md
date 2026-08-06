---
title: ConvertKit 触发器节点文档（ConvertKit Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 ConvertKit 触发器节点。按照技术文档将 ConvertKit
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: ConvertKit Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.convertkittrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.convertkittrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.convertkittrigger
layout:
  description:
    visible: false
---

# ConvertKit 触发器节点（ConvertKit Trigger node）

{% hint style="info" %}
**大白话**：ConvertKit（现在叫 Kit）是面向创作者的邮件营销平台，功能包括建邮件列表、发群发邮件、自动化邮件序列、建用户细分、做落地页。这个触发器节点会在订阅者行为发生时自动唤醒工作流，比如：订阅了表单、点击了链接、购买了产品、完成/订阅了邮件序列、打了标签、退订等。它支持 11 种事件。用法：放工作流开头，选好要监听的事件即可。
{% endhint %}

[ConvertKit](https://www.convertkit.com/) 是一个功能齐全的邮件营销平台。使用 ConvertKit 可以建立邮件列表、发送广播邮件、自动化邮件序列、创建用户细分以及构建落地页。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/convertkit.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [ConvertKit Trigger 集成](https://n8n.io/integrations/convertkit-trigger/)页面。
{% endhint %}

## 事件（Events）

* Form subscribe（订阅表单）
* Link click（点击链接）
* Product purchase（购买产品）
* Purchase created（创建购买记录）
* Purchase complete（购买完成）
* Sequence complete（完成邮件序列）
* Sequence subscribe（订阅邮件序列）
* Subscriber activated（订阅者被激活）
* Subscriber unsubscribe（订阅者退订）
* Tag add（添加标签）
* Tag Remove（移除标签）

## 相关资源（Related resources）

n8n 也为 ConvertKit 提供了应用节点（用来读写数据的常规节点）。你可以在[这里](../app-nodes/n8n-nodes-base.convertkit.md)找到该节点的文档。

在 n8n 网站上查看[示例工作流和相关内容](https://n8n.io/integrations/convertkit-trigger/)。

关于他们的 API 细节，请参考 [ConvertKit 的官方文档](https://developers.kit.com/v4#introduction)。
