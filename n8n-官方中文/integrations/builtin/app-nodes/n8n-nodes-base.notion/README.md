---
title: Notion 节点文档
description: >-
  学习如何在 n8n 中使用 Notion 节点。按照技术文档将 Notion
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: n8n-nodes-base.notion
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.notion/index.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.notion'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.notion'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Notion 是集「笔记 + 文档 + 数据库 + 项目管理」于一体的全能工具。这个节点让你在 n8n 里直接操作 Notion：搜索/获取数据库、创建页面、管理页面内容块（Block）、获取用户等。配合触发器可以实现「表单提交→自动在 Notion 建档」之类的自动化。
{% endhint %}

# Notion 节点

使用 Notion 节点来自动化你在 Notion 中的工作，并把它与其它应用集成。n8n 内置支持 Notion 的大量功能，包括获取和搜索数据库、创建页面，以及获取用户。

在本页你可以看到 Notion 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Notion 凭证](../../credentials/notion.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作

* Block（内容块）
	* Append After（在后面追加）
	* Get Many（获取多个）
	* Get Markdown（获取 Markdown 文本）
* Data Source（数据源）
	* Get（获取单个）
	* Search（搜索）
* Database（数据库）
	* Get（获取单个）
* Database Page（数据库页面）
	* Create（创建）
	* Get（获取单个）
	* Get Many（获取多个）
	* Update（更新）
* Page（页面）
	* Archive（归档）
	* Create（创建）
	* Get Markdown（获取 Markdown 文本）
	* Search（搜索）
	* Update Markdown（更新 Markdown 文本）
* User（用户）
	* Get（获取单个）
	* Get Many（获取多个）

## 模板与示例

[浏览 n8n-nodes-base.notion 的官方集成模板](https://n8n.io/integrations/notion)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

n8n 为 Notion 提供了一个应用节点。你可以在[这里](../../trigger-nodes/n8n-nodes-base.notiontrigger.md)找到对应的触发器节点文档。

关于其 API 的详细信息，请参考 [Notion 官方文档](https://developers.notion.com/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}

## 常见问题

关于常见的错误或问题以及建议的解决方法，请参考[常见问题](common-issues.md)。
