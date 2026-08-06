---
title: Travis CI 节点文档
description: >-
  学习如何在 n8n 中使用 Travis CI 节点。按照技术文档将
  Travis CI 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Travis CI 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.travisci.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.travisci'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.travisci'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Travis CI 是云端持续集成/持续部署（CI/CD）服务——你推送代码后，它自动帮你跑测试、构建。这个节点让你在 n8n 里管理它的构建任务（Build）：触发构建、取消、重启、查询。常用场景：每天晚上自动触发一次构建；构建失败时发通知。
{% endhint %}

# Travis CI 节点

使用 Travis CI 节点来自动化你在 Travis CI 中的工作，并把它与其它应用集成。n8n 内置支持 Travis CI 的大量功能，包括取消和获取构建（Build）。

在本页你可以看到 Travis CI 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Travis CI 凭证](../credentials/travisci.md)。
{% endhint %}

## 操作

* Build（构建）
    * Cancel a build（取消构建）
    * Get a build（获取单个构建）
    * Get all builds（获取全部构建）
    * Restart a build（重启构建）
    * Trigger a build（触发构建）

## 模板与示例

[浏览 Travis CI 节点的官方集成模板](https://n8n.io/integrations/travisci)，或[搜索全部模板](https://n8n.io/workflows/)。
