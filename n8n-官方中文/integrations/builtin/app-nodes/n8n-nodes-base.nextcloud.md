---
title: Nextcloud 节点文档
description: >-
  学习如何在 n8n 中使用 Nextcloud 节点。按照技术文档将 Nextcloud
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Nextcloud 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.nextcloud.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.nextcloud'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.nextcloud'
layout:
  description:
    visible: false
---

# Nextcloud 节点

> 💡 **大白话**：Nextcloud 是一个「开源私有云盘」，很多公司自己搭一套来存文件、管理用户。用这个节点，你可以让 n8n 自动上传、下载、复制、移动、分享、删除文件和文件夹，还能查看用户、邀请用户加入组织，比如「每周自动把报表上传到公司云盘并分享给团队」。

使用 Nextcloud 节点来自动化你在 Nextcloud 中的工作，并把它与其它应用集成。n8n 内置支持 Nextcloud 的大量功能，包括创建、更新、删除和获取文件与文件夹，以及获取和邀请用户。

在本页你可以看到 Nextcloud 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Nextcloud 凭证](../credentials/nextcloud.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作（Operations）

* File（文件）
    * Copy a file（复制文件）
    * Delete a file（删除文件）
    * Download a file（下载文件）
    * Move a file（移动文件）
    * Share a file（分享文件）
    * Upload a file（上传文件）
* Folder（文件夹）
    * Copy a folder（复制文件夹）
    * Create a folder（创建文件夹）
    * Delete a folder（删除文件夹）
    * Return the contents of a given folder（返回指定文件夹的内容）
    * Move a folder（移动文件夹）
    * Share a folder（分享文件夹）
* User（用户）
    * Invite a user to a Nextcloud organization（邀请用户加入 Nextcloud 组织）
    * Delete a user（删除用户）
    * Retrieve information about a single user（获取单个用户的信息）
    * Retrieve a list of users（获取用户列表）
    * Edit attributes related to a user（编辑用户的属性）

## 模板与示例（Templates and examples）

[浏览 Nextcloud 节点文档集成模板](https://n8n.io/integrations/nextcloud)，或[搜索全部模板](https://n8n.io/workflows/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
