---
title: Grafana 节点文档
description: 学习如何在 n8n 中使用 Grafana 节点。按照技术文档将 Grafana 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Grafana 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.grafana.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.grafana'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.grafana'
layout:
  description:
    visible: false
---

# Grafana 节点

> 💡 **大白话**：Grafana 是一个超流行的「监控数据可视化」工具，把服务器指标、日志画成仪表盘（Dashboard）。用这个节点，n8n 可以自动创建/更新/删除仪表盘、管理团队和用户——比如监控到异常时自动在 Grafana 里建一个告警面板。

使用 Grafana 节点自动化 Grafana 中的工作，并将 Grafana 与其他应用集成。n8n 内置支持大量 Grafana 功能，包括创建、更新、删除和获取仪表盘、团队和用户。

本页列出了 Grafana 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何设置认证，请参考 [Grafana 凭据](../credentials/grafana.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 支持的操作（Operations）

* Dashboard（仪表盘）
    * Create a dashboard（创建仪表盘）
    * Delete a dashboard（删除仪表盘）
    * Get a dashboard（获取仪表盘）
    * Get all dashboards（获取所有仪表盘）
    * Update a dashboard（更新仪表盘）
* Team（团队）
    * Create a team（创建团队）
    * Delete a team（删除团队）
    * Get a team（获取团队）
    * Retrieve all teams（获取所有团队）
    * Update a team（更新团队）
* Team Member（团队成员）
    * Add a member to a team（把成员添加到团队）
    * Retrieve all team members（获取所有团队成员）
    * Remove a member from a team（把成员从团队移除）
* User（用户）
    * Delete a user from the current organization（从当前组织删除用户）
    * Retrieve all users in the current organization（获取当前组织的所有用户）
    * Update a user in the current organization（更新当前组织中的用户）

## 模板和示例（Templates and examples）

[浏览 Grafana 节点文档集成模板](https://n8n.io/integrations/grafana) 或 [搜索所有模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
