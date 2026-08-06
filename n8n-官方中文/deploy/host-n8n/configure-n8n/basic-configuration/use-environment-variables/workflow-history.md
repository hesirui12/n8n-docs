---
title: 工作流历史（Workflow history）环境变量
description: 在 n8n 中配置工作流历史的环境变量。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 工作流历史（Workflow history）
originalFilePath: hosting/configuration/environment-variables/workflow-history.md
originalUrl: >-
  https://docs.n8n.io/hosting/configuration/environment-variables/workflow-history
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/workflow-history
layout:
  description:
    visible: false
---

# 工作流历史（Workflow history）环境变量

{% hint style="info" %}
**大白话**：工作流历史会保存你每次编辑工作流的旧版本，方便需要时找回。这一页只有一个变量：旧版本保留多久后自动删除（按小时计），默认 `-1` 表示永远保留。
{% endhint %}

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_WORKFLOW_HISTORY_PRUNE_TIME` | Number | `-1` | 在自动删除之前，工作流历史版本保留多长时间（小时）。设为 `-1` 可以无限期保留所有版本。 |
