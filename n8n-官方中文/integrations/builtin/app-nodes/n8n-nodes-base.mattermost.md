---
title: Mattermost 节点文档
description: >-
  学习如何在 n8n 中使用 Mattermost 节点。按照技术文档将 Mattermost
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Mattermost 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.mattermost.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mattermost'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mattermost'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Mattermost 是一款开源的团队聊天工具（可以自建服务器，很多公司用来替代 Slack，数据自己掌握）。这个节点让你在 n8n 里操作 Mattermost：管理频道（Channel）和用户、发消息（包括临时消息）、给帖子加表情反应（Reaction）等。最常见的用法就是「工作流出结果 → 自动发到团队频道通知大家」。
{% endhint %}

# Mattermost 节点

使用 Mattermost 节点来自动化你在 Mattermost 中的工作，并把它与其它应用集成。n8n 内置支持 Mattermost 的大量功能，包括创建、删除和获取频道和用户，以及发布消息和添加表情反应（reaction）。

在本页你可以看到 Mattermost 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Mattermost 凭证](../credentials/mattermost.md)。
{% endhint %}

（官方此处嵌入了通用资源组件，此处从略。）

## 操作

* Channel（频道）
    * Add a user to a channel（把用户加入频道）
    * Create a new channel（创建新频道）
    * Soft delete a channel（软删除频道）
    * Get a page of members for a channel（获取频道的一页成员列表）
    * Restores a soft deleted channel（恢复被软删除的频道）
    * Search for a channel（搜索频道）
    * Get statistics for a channel（获取频道统计信息）
* Message（消息）
    * Soft delete a post, by marking the post as deleted in the database（软删除帖子：在数据库里把帖子标记为已删除）
    * Post a message into a channel（向频道发布消息）
    * Post an ephemeral message into a channel（向频道发布临时消息，只对特定用户可见）
* Reaction（表情反应）
    * Add a reaction to a post.（给帖子添加表情反应）
    * Remove a reaction from a post（移除帖子上的表情反应）
    * Get all the reactions to one or more posts（获取一个或多个帖子的全部表情反应）
* User（用户）
    * Create a new user（创建新用户）
    * Deactivates the user and revokes all its sessions by archiving its user object.（停用用户：通过归档其用户对象来吊销它的全部会话）
    * Retrieve all users（获取全部用户）
    * Get a user by email（按邮箱获取用户）
    * Get a user by ID（按 ID 获取用户）
    * Invite user to team（邀请用户加入团队）

## 模板与示例

[浏览 Mattermost 节点的官方集成模板](https://n8n.io/integrations/mattermost)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Mattermost 官方文档](https://api.mattermost.com/)。

（官方此处嵌入了通用资源组件，此处从略。）

## Channel ID 字段报错

如果你不是系统管理员（System Administrator），可能会在 **Channel ID** 字段旁边看到这样的报错：**there was a problem loading the parameter options from server: "Mattermost error response: You do not have the appropriate permissions.**（加载参数选项时出现问题：Mattermost 返回错误：你没有相应权限）

请让你的系统管理员给你授予 `post:channel` 权限。

## 如何找到频道 ID

在 Mattermost 中查找频道 ID 的方法：

1. 在左侧边栏选中该频道。
2. 点击顶部的频道名称。
3. 选择 **View Info**（查看信息）。
