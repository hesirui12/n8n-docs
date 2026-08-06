---
title: Bitwarden 节点文档
description: 学习如何在 n8n 中使用 Bitwarden 节点。按照技术文档将 Bitwarden 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Bitwarden 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.bitwarden.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.bitwarden'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.bitwarden'
layout:
  description:
    visible: false
---

# Bitwarden 节点

> 💡 **大白话**：Bitwarden 是「密码管理器」，帮你统一保存账号密码。里面用「集合」来分组密码、用「成员」和「组」来管理谁能看哪些密码。用这个节点，你可以在 n8n 里自动管理集合、成员、组和事件，不用自己写代码。

使用 Bitwarden 节点自动化 Bitwarden 中的工作，并将 Bitwarden 与其他应用集成。n8n 内置支持大量 Bitwarden 功能，包括创建、获取、删除和更新集合、事件、组和成员。

本页列出了 Bitwarden 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何设置认证，请参考 [Bitwarden 凭据](../credentials/bitwarden.md)。
{% endhint %}

## 支持的操作（Operations）

* Collection（集合）
    * Delete（删除）
    * Get（获取）
    * Get All（获取全部）
    * Update（更新）
* Event（事件）
    * Get All（获取全部）
* Group（组）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get All（获取全部）
    * Get Members（获取成员）
    * Update（更新）
    * Update Members（更新成员）
* Member（成员）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get All（获取全部）
    * Get Groups（获取所属组）
    * Update（更新）
    * Update Groups（更新所属组）

## 模板和示例（Templates and examples）

[浏览 Bitwarden 节点文档集成模板](https://n8n.io/integrations/bitwarden) 或 [搜索所有模板](https://n8n.io/workflows/)
