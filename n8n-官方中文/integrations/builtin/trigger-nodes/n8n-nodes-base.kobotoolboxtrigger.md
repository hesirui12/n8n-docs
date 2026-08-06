---
title: KoboToolbox Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 KoboToolbox Trigger 节点。按照本文档将
  KoboToolbox Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: KoboToolbox Trigger 节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.kobotoolboxtrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.kobotoolboxtrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.kobotoolboxtrigger
layout:
  description:
    visible: false
---

# KoboToolbox Trigger 节点

> **大白话**：KoboToolbox 是一款野外调研/数据采集工具，可以设计交互式表单，让用户用手机离线填写（有免费云端版和自托管版）。这个触发器节点的作用：指定表单一有新的提交，就自动启动你的工作流。节点会自己创建/删除 webhook（hook），不需要你去 KoboToolbox 里做任何设置。

[KoboToolbox](https://www.kobotoolbox.org/) 是一款田野调查和数据采集工具，用于设计交互式表单，供用户在移动设备上离线填写。它既提供免费云解决方案，也有自托管版本。

{% hint style="info" %}
**凭证（Credentials）**

你可以[在这里](../credentials/kobotoolbox.md)找到此节点的认证信息。
{% endhint %}

{% hint style="info" %}
**示例与模板**

想找使用示例和入门模板，可以查看 n8n 的 [KoboToolbox Trigger 集成](https://n8n.io/integrations/kobotoolbox-trigger/) 页面。
{% endhint %}

当指定表单有新提交时，此节点会启动一个工作流。触发器节点会自行处理 hook 的创建/删除，因此你不需要在 KoboToolbox 中进行任何设置。

它的工作方式与 [KoboToolbox](../app-nodes/n8n-nodes-base.kobotoolbox.md) 节点中的 Get Submission（获取提交）操作相同，包括支持相同的重新格式化（reformatting）选项。
