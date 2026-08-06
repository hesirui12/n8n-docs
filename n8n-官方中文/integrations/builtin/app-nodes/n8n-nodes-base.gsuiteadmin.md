---
title: Google Workspace Admin 节点文档
description: 学习如何在 n8n 中使用 Google Workspace Admin 节点。按照技术文档将 Google Workspace Admin 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Google Workspace Admin 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.gsuiteadmin.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gsuiteadmin'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gsuiteadmin'
layout:
  description:
    visible: false
---

# Google Workspace Admin 节点

> 💡 **大白话**：这个节点是给「公司管理员」用的，用来管理整个公司的 Google Workspace：管用户（增删改查）、管群组（建群、拉人进群、踢人出群）、管 ChromeOS 设备。文末还教你怎么控制要不要读取用户的自定义字段。

使用 Google Workspace Admin 节点自动化 Google Workspace Admin 中的工作，并将 Google Workspace Admin 与其他应用集成。n8n 内置支持大量 Google Workspace Admin 功能，包括创建、更新、删除和获取用户、群组和 ChromeOS 设备。

本页列出了 Google Workspace Admin 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何设置认证，请参考 [Google 凭据](../credentials/google/README.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 支持的操作（Operations）

* ChromeOS Device（ChromeOS 设备）
	* Get a ChromeOS device（获取一台 ChromeOS 设备）
	* Get many ChromeOS devices（获取多台 ChromeOS 设备）
	* Update a ChromeOS device（更新一台 ChromeOS 设备）
	* Change the status of a ChromeOS device（更改 ChromeOS 设备的状态）
* Group（群组）
    * Create a group（创建群组）
    * Delete a group（删除群组）
    * Get a group（获取群组）
    * Get many groups（获取多个群组）
    * Update a group（更新群组）
* User（用户）
	* Add an existing user to a group（把已有用户添加到群组）
    * Create a user（创建用户）
    * Delete a user（删除用户）
    * Get a user（获取用户）
    * Get many users（获取多个用户）
	* Remove a user from a group（把用户从群组移除）
    * Update a user（更新用户）

## 模板和示例（Templates and examples）

[浏览 Google Workspace Admin 节点文档集成模板](https://n8n.io/integrations/google-workspace-admin) 或 [搜索所有模板](https://n8n.io/workflows/)

## 如何控制获取用户时要读取哪些自定义字段（How to control which custom fields to fetch for a user）

有三种不同的方式可以控制获取用户信息时读取哪些自定义字段。使用 **Custom Fields（自定义字段）** 参数选择以下之一：

- **Don't Include（不包含）**：不包含任何自定义字段。
- **Custom（自定义）**：包含 **Custom Schema Names or IDs（自定义 Schema 名称或 ID）** 中来自各 schema 的自定义字段。
- **Include All（包含全部）**：包含与该用户关联的所有字段。

要包含自定义字段，请按以下步骤操作：

1. 在 **Custom Fields（自定义字段）** 下拉列表中选择 **Custom（自定义）**。
2. 在 **Custom Schema Names or IDs（自定义 Schema 名称或 ID）** 下拉列表中选择你想要包含的 schema 名称。
