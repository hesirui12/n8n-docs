---
title: AWS SNS 触发器节点文档（AWS SNS Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 AWS SNS 触发器节点。按照技术文档将 AWS SNS
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: AWS SNS Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.awssnstrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.awssnstrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.awssnstrigger
layout:
  description:
    visible: false
---

# AWS SNS 触发器节点（AWS SNS Trigger node）

{% hint style="info" %}
**大白话**：AWS SNS（简单通知服务）是亚马逊云的消息推送服务，可以低成本地把消息批量发给大量订阅者（最常见的是推送通知给手机用户，也能推给邮件、短信、其他服务等）。这个触发器节点的作用是：每当 SNS 主题（Topic）收到新消息，就自动触发你的工作流。用法：把节点放工作流开头，授权 AWS 账号，指定要监听的 SNS 主题即可。
{% endhint %}

[AWS SNS](https://aws.amazon.com/sns/) 是 Amazon Web Services（亚马逊云服务）提供的通知服务。它为大规模消息投递提供了低成本的基础设施，主要面向移动用户推送消息。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/aws.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [AWS SNS Trigger 集成](https://n8n.io/integrations/aws-sns-trigger/)页面。
{% endhint %}

## 事件（Events）

* New AWS SNS event（新的 AWS SNS 事件）

## 相关资源（Related resources）

n8n 也为 AWS SNS 提供了应用节点（用来读写数据的常规节点）。你可以在[这里](../app-nodes/n8n-nodes-base.awssns.md)找到该节点的文档。

在 n8n 网站上查看[示例工作流和相关内容](https://n8n.io/integrations/aws-sns-trigger/)。

关于他们的 API 细节，请参考 [AWS SNS 的官方文档](https://docs.aws.amazon.com/sns/latest/api/welcome.html)。
