---
title: GetResponse 触发器节点文档
description: >-
  Learn how to use the GetResponse Trigger node in n8n.
contentType:
  - integration
  - reference
nodeTitle: GetResponse 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.getresponsetrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.getresponsetrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.getresponsetrigger
layout:
  description:
    visible: false
---

# GetResponse 触发器节点

> **大白话**：GetResponse 是做邮件营销的平台。这个节点负责"监听"邮件营销里的关键动作——有人订阅了列表、退订了、打开了邮件、点击了邮件里的链接、提交了调查问卷，都会触发工作流。

[GetResponse](https://www.getresponse.com/) 是一个在线平台，提供邮件营销软件、落地页创建器、网络研讨会托管等功能。

{% hint style="info" %}
**凭据（Credentials）**

你可以在此处找到该节点的认证信息：[GetResponse 凭据](../credentials/getresponse.md)。
{% endhint %}

{% hint style="info" %}
**示例与模板**

如需使用示例和入门模板，请参阅 n8n 的 [GetResponse 触发器集成](https://n8n.io/integrations/getresponse-trigger/) 页面。
{% endhint %}

## 事件（Events）

- 客户订阅到列表时接收通知
- 客户从列表退订时接收通知
- 邮件被打开时接收通知
- 邮件被点击时接收通知
- 调查问卷被提交时接收通知
