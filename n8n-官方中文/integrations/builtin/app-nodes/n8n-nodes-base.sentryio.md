---
title: Sentry.io 节点文档
description: >-
  学习如何在 n8n 中使用 Sentry.io 节点。按照技术文档将 Sentry.io
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Sentry.io 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.sentryio.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.sentryio'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.sentryio'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Sentry.io 是一个「程序报错监控平台」——你的 App、网站崩了、报错了，它会自动收集错误信息并整理成 Issue（问题工单），方便你排查。这个节点可以帮你：管理问题（Issue）、项目（Project）、发布版本（Release）、组织（Organization）、团队（Team），以及获取事件（Event）记录。适合做错误告警、自动建工单、发布管理自动化。
{% endhint %}

# Sentry.io 节点

使用 Sentry.io 节点来自动化你在 Sentry.io 中的工作，并把它与其它应用集成。n8n 内置支持 Sentry.io 的大量功能，包括创建、更新、删除、获取问题、项目和发布版本，以及获取全部事件。

在本页你可以看到 Sentry.io 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Sentry.io 凭证](../credentials/sentryio.md)。
{% endhint %}

## 操作

* Event（事件）
    * Get event by ID（按 ID 获取事件）
    * Get all events（获取全部事件）
* Issue（问题）
    * Delete an issue（删除问题）
    * Get issue by ID（按 ID 获取问题）
    * Get all issues（获取全部问题）
    * Update an issue（更新问题）
* Project（项目）
    * Create a new project（创建新项目）
    * Delete a project（删除项目）
    * Get project by ID（按 ID 获取项目）
    * Get all projects（获取全部项目）
    * Update a project（更新项目）
* Release（发布版本）
    * Create a release（创建发布版本）
    * Delete a release（删除发布版本）
    * Get release by version identifier（按版本标识获取发布版本）
    * Get all releases（获取全部发布版本）
    * Update a release（更新发布版本）
* Organization（组织）
    * Create an organization（创建组织）
    * Get organization by slug（按 slug 获取组织）
    * Get all organizations（获取全部组织）
    * Update an organization（更新组织）
* Team（团队）
    * Create a new team（创建新团队）
    * Delete a team（删除团队）
    * Get team by slug（按 slug 获取团队）
    * Get all teams（获取全部团队）
    * Update a team（更新团队）

## 模板与示例

[浏览 Sentry.io 节点的官方集成模板](https://n8n.io/integrations/sentryio)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Sentry.io 官方文档](https://docs.sentry.io/api/)。

（官方此处嵌入了通用资源组件，此处从略。）
