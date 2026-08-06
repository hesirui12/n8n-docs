---
title: Elastic Security 节点文档
description: >-
  了解如何在 n8n 中使用 Elastic Security 节点。按照技术文档把 Elastic Security 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Elastic Security 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.elasticsecurity.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.elasticsecurity
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.elasticsecurity
layout:
  description:
    visible: false
---

# Elastic Security 节点

> **大白话**：Elastic Security 是 Elastic 家的安全分析产品，用来管理安全事件（Case，可以理解为「工单」）。这个节点让你在 n8n 里自动创建/处理安全事件、给事件加评论、打标签，还能创建 Connector（连接器）。

用 Elastic Security 节点在 Elastic Security 里自动化干活，并把 Elastic Security 和其他应用串起来。n8n 内置支持 Elastic Security 的大量功能，包括创建、更新、删除、检索和获取案件（Case）。

本页面列出了 Elastic Security 节点支持的所有操作，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何配置认证，请参考 [Elastic Security 凭据](../credentials/elasticsecurity.md)。
{% endhint %}

## 支持的操作

* Case（案件/安全事件）
    * Create a case（创建案件）
    * Delete a case（删除案件）
    * Get a case（获取单个案件）
    * Retrieve all cases（获取全部案件）
    * Retrieve a summary of all case activity（获取全部案件活动的摘要）
    * Update a case（更新案件）
* Case Comment（案件评论）
    * Add a comment to a case（给案件添加评论）
    * Get a case comment（获取单条案件评论）
    * Retrieve all case comments（获取案件全部评论）
    * Remove a comment from a case（删除案件评论）
    * Update a comment in a case（更新案件评论）
* Case Tag（案件标签）
    * Add a tag to a case（给案件添加标签）
    * Remove a tag from a case（移除案件标签）
* Connector（连接器）
    * Create a connector（创建连接器）

## 模板和示例

[浏览 Elastic Security 节点文档集成模板](https://n8n.io/integrations/elastic-security)，或[搜索所有模板](https://n8n.io/workflows/)
