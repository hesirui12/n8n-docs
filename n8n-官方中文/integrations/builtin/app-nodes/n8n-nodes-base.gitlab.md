---
title: GitLab 节点文档
description: >-
  了解如何在 n8n 中使用 GitLab 节点。按照技术文档把 GitLab 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: GitLab 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.gitlab.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gitlab'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gitlab'
layout:
  description:
    visible: false
---

# GitLab 节点

> **大白话**：GitLab 是代码托管 + DevOps 平台（GitHub 的同类竞品）。这个节点让你在 n8n 里自动管理文件、Issue（问题）、Release（版本发布）、仓库和用户，比如自动创建 Issue、给 Issue 加评论、发布新版本。

用 GitLab 节点在 GitLab 里自动化干活，并把 GitLab 和其他应用串起来。n8n 内置支持 GitLab 的大量功能，包括创建、更新、删除和编辑问题、仓库、发布和用户。

本页面列出了 GitLab 节点支持的所有操作，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何配置认证，请参考 [GitLab 凭据](../credentials/gitlab.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 支持的操作

* File（文件）
	* Create（创建）
	* Delete（删除）
	* Edit（编辑）
	* Get（获取单个）
	* List（列出）
* Issue（问题）
    * Create a new issue（创建新问题）
    * Create a new comment on an issue（在问题上创建新评论）
    * Edit an issue（编辑问题）
    * Get the data of a single issue（获取单个问题的数据）
    * Lock an issue（锁定问题）
* Release（版本发布）
    * Create a new release（创建新发布）
    * Delete a new release（删除发布）
    * Get a new release（获取单个发布）
    * Get all releases（获取全部发布）
    * Update a new release（更新发布）
* Repository（仓库）
    * Get the data of a single repository（获取单个仓库的数据）
    * Returns issues of a repository（返回仓库的问题列表）
* User（用户）
    * Returns the repositories of a user（返回用户的仓库列表）

## 模板和示例

[浏览 GitLab 节点文档集成模板](https://n8n.io/integrations/gitlab)，或[搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [GitLab 的文档](https://docs.gitlab.com/ee/api/rest/)。

n8n 还为 GitLab 提供了触发器节点（Trigger node）。你可以[在这里](../trigger-nodes/n8n-nodes-base.gitlabtrigger.md)查看触发器节点的文档。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
