---
title: Google Drive Trigger 节点文档（Google Drive Trigger node）
description: >-
  学习如何在 n8n 中使用 Google Drive Trigger 节点。按照技术文档把 Google
  Drive Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: n8n-nodes-base.googledrivetrigger
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.googledrivetrigger/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googledrivetrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googledrivetrigger
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**

简单来说，这个触发器节点就是帮你「盯住」你的 Google Drive 云盘。只要云盘里发生了符合你设定条件的变化（比如新建了文件），它就自动启动你的工作流。
{% endhint %}

# Google Drive Trigger 节点

[Google Drive](https://drive.google.com) 是 Google 提供的文件存储和同步服务。它允许用户将文件存储在服务器上、跨设备同步文件，以及共享文件。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../../credentials/google/README.md)找到此节点的认证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

要获取帮助你快速上手的使用示例和模板，请参阅 n8n 的 [Google Drive Trigger 集成](https://n8n.io/integrations/google-drive-trigger/) 页面。
{% endhint %}

{% hint style="info" %}
**手动执行 vs. 激活（Manual Executions vs. Activation）**

在手动执行时，此节点将返回符合其搜索条件的最后一个事件。如果没有事件符合条件（例如，你在监听文件创建，但到目前为止还没有文件被创建），则会抛出错误。保存并发布后，该节点会定期检查是否有匹配的事件，并为找到的每个事件触发你的工作流。
{% endhint %}

## 常见问题（Common issues）

对于常见问题或疑问以及建议的解决方案，请参阅[常见问题](common-issues.md)。
