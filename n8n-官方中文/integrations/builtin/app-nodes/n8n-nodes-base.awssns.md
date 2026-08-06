---
title: AWS SNS 节点文档
description: 学习如何在 n8n 中使用 AWS SNS 节点。按照技术文档将 AWS SNS 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: AWS SNS 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.awssns.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awssns'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awssns'
layout:
  description:
    visible: false
---

# AWS SNS 节点

> 💡 **大白话**：AWS SNS 是亚马逊的「消息广播站」，可以把一条消息同时推送给很多订阅者（比如发短信、发邮件、通知别的系统）。用这个节点，你可以在 n8n 里自动往一个「主题」（topic）发消息，不用自己写代码。

使用 AWS SNS 节点自动化 AWS SNS 中的工作，并将 AWS SNS 与其他应用集成。n8n 内置支持大量 AWS SNS 功能，包括发布消息。

本页列出了 AWS SNS 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何设置认证，请参考 [AWS SNS 凭据](../credentials/aws.md)。
{% endhint %}

## 支持的操作（Operations）

* Publish a message to a topic（向一个主题发布消息）

## 模板和示例（Templates and examples）

[浏览 AWS SNS 节点文档集成模板](https://n8n.io/integrations/aws-sns) 或 [搜索所有模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
