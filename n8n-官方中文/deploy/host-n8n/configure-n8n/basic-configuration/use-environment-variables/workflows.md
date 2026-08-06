---
title: 工作流（Workflows）环境变量
description: >-
  配置 n8n 工作流的环境变量，包括默认命名、引导流程偏好、标签管理和调用方策略设置。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 工作流（Workflows）
originalFilePath: hosting/configuration/environment-variables/workflows.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/workflows'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/workflows
layout:
  description:
    visible: false
---

# 工作流（Workflows）环境变量

{% hint style="info" %}
**大白话**：这一页的变量用来调整工作流的「小习惯」——比如新建工作流时默认叫什么名字、要不要显示新手引导提示、谁可以调用某个工作流、要不要用标签分类等。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_ONBOARDING_FLOW_DISABLED` | Boolean | `false` | 创建新工作流时是否禁用新手引导提示（true）或不禁用（false）。 |
| `N8N_WORKFLOW_ACTIVATION_BATCH_SIZE` | Number | `1` | 启动时同时发布（激活）多少个工作流。 |
| `N8N_WORKFLOW_CALLER_POLICY_DEFAULT_OPTION` | String | `workflowsFromSameOwner` | 哪些工作流可以调用某个工作流。可选值：`any`、`none`、`workflowsFromAList`、`workflowsFromSameOwner`。此功能需要[工作流共享](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/manage-workflows/share-with-others)功能。 |
| `N8N_WORKFLOW_TAGS_DISABLED` | Boolean | `false` | 是否禁用工作流标签（true）或启用标签（false）。 |
| `WORKFLOWS_DEFAULT_NAME` | String | `My workflow` | 新建工作流时使用的默认名称。 |
