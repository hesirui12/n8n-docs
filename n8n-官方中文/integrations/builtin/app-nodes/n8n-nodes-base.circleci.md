---
title: CircleCI 节点文档
description: 学习如何在 n8n 中使用 CircleCI 节点。按照技术文档将 CircleCI 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: CircleCI 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.circleci.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.circleci'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.circleci'
layout:
  description:
    visible: false
---

# CircleCI 节点

> 💡 **大白话**：CircleCI 是一款「持续集成/持续部署（CI/CD）」工具，代码一提交就自动帮你跑测试、打包、发布，跑一轮自动化任务叫一个「流水线」（pipeline）。用这个节点，你可以在 n8n 里自动获取或触发流水线，不用自己写代码。

使用 CircleCI 节点自动化 CircleCI 中的工作，并将 CircleCI 与其他应用集成。n8n 内置支持大量 CircleCI 功能，包括获取和触发流水线。

本页列出了 CircleCI 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何设置认证，请参考 [CircleCI 凭据](../credentials/circleci.md)。
{% endhint %}

## 支持的操作（Operations）

* Pipeline（流水线）
    * Get a pipeline（获取一条流水线）
    * Get all pipelines（获取所有流水线）
    * Trigger a pipeline（触发一条流水线）

## 模板和示例（Templates and examples）

[浏览 CircleCI 节点文档集成模板](https://n8n.io/integrations/circleci) 或 [搜索所有模板](https://n8n.io/workflows/)
