---
title: GitHub 节点文档
description: >-
  了解如何在 n8n 中使用 GitHub 节点。按照技术文档把 GitHub 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: GitHub 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.github.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.github'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.github'
layout:
  description:
    visible: false
---

# GitHub 节点

> **大白话**：GitHub 是最大的代码托管平台。这个节点让你在 n8n 里自动操作 GitHub：管理文件、仓库、Issue（问题）、Pull Request（合并请求）、Release（版本发布）、用户、Review 和 Workflow（GitHub Actions 工作流）——基本覆盖 GitHub 的日常操作。

用 GitHub 节点在 GitHub 里自动化干活，并把 GitHub 和其他应用串起来。n8n 内置支持 GitHub 的大量功能，包括创建、更新、删除和编辑文件、仓库、问题、合并请求、发布和用户。

本页面列出了 GitHub 节点支持的所有操作，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何配置认证，请参考 [GitHub 凭据](../credentials/github.md)。
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
	* Create（创建）
	* Create Comment（创建评论）
	* Edit（编辑）
	* Get（获取单个）
	* Lock（锁定）
* Organization（组织）
	* Get Repositories（获取仓库列表）
* Pull Request（合并请求）
	* Close（关闭）
	* Create（创建）
	* Create Comment（创建评论）
	* Edit Comment（编辑评论）
	* Get（获取单个）
	* Get Diff（获取差异 diff）
	* Get Patch（获取补丁 patch）
	* Merge（合并）
	* Reopen（重新打开）
	* Update（更新）
* Release（版本发布）
	* Create（创建）
	* Delete（删除）
	* Get（获取单个）
	* Get Many（获取多个）
	* Update（更新）
* Repository（仓库）
    * Get（获取单个）
	* Get Issues（获取问题列表）
	* Get License（获取许可证）
	* Get Profile（获取资料/流量概况）
	* Get Pull Requests（获取合并请求列表）
	* List Popular Paths（列出热门路径）
	* List Referrers（列出来源/引荐来源）
* Review（审查）
	* Create（创建）
	* Get（获取单个）
	* Get Many（获取多个）
	* Update（更新）
* User（用户）
    * Get Repositories（获取用户的仓库列表）
    * Invite（邀请）
* Workflow（工作流）
	* Disable（停用）
	* Dispatch（触发/派发）
	* Enable（启用）
	* Get（获取单个）
	* Get Usage（获取用量）
	* List（列出）

## 模板和示例

[浏览 GitHub 节点文档集成模板](https://n8n.io/integrations/github)，或[搜索所有模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
