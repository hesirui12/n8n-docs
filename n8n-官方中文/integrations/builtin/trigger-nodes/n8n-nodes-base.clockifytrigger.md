---
title: Clockify 触发器节点文档（Clockify Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 Clockify 触发器节点。按照技术文档将 Clockify
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Clockify Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.clockifytrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.clockifytrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.clockifytrigger
layout:
  description:
    visible: false
---

# Clockify 触发器节点（Clockify Trigger node）

{% hint style="info" %}
**大白话**：Clockify 是一款免费的时间追踪工具，用来记录员工在各个项目上花了多少工时。这个触发器节点会在有新的时间记录（Time Entry）时自动触发工作流。**注意一个小坑**：这个节点是根据工作流的时区设置来确定「开始时间」范围的——如果你的时区没配对，可能查到的时间记录就不对。所以记得先在**工作流设置（Workflow Settings）**里把时区配好。
{% endhint %}

[Clockify](https://clockify.me/) 是一款免费的时间追踪器和工时表应用，用于跨项目追踪工作时长。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/clockify.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [Clockify Trigger 集成](https://n8n.io/integrations/clockify-trigger/)页面。
{% endhint %}

此节点使用工作流的时区设置来确定时间记录的开始时间范围。如果你想让它取到正确的时间记录，请在[工作流设置](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/manage-workflows/configure-workflow-settings)中配置好时区。
