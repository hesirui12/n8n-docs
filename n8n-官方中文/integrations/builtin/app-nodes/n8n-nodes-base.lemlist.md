---
title: Lemlist 节点文档
description: >-
  学习如何在 n8n 中使用 Lemlist 节点。按照技术文档将
  Lemlist 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Lemlist 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.lemlist.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.lemlist'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.lemlist'
---

{% hint style="info" %}
**大白话**：Lemlist 是做「冷邮件（Cold Email）外联 + 销售自动化」的工具，外贸获客、开发客户的人很常用。这个节点能让你在 n8n 里：查看活动（Activity）、团队（Team）、营销活动（Campaign）及其统计数据，管理线索（Lead），做数据补全（Enrichment，用邮箱或 LinkedIn 链接补全客户信息），以及管理退订名单（Unsubscribe）。适合做「新线索自动加入外联活动」这类流程。
{% endhint %}

# Lemlist 节点

使用 Lemlist 节点来自动化你在 Lemlist 中的工作，并把它与其它应用集成。n8n 内置支持 Lemlist 的大量功能，包括获取活动（Activity）、团队（Team）和营销活动（Campaign），以及创建、更新、删除线索（Lead）。

在本页你可以看到 Lemlist 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Lemlist 凭证](../credentials/lemlist.md)。
{% endhint %}

## 操作

* Activity（活动）
    * Get Many: Get many activities（获取多个：获取多条活动记录）
* Campaign（营销活动）
    * Get Many: Get many campaigns（获取多个：获取多个营销活动）
    * Get Stats: Get campaign stats（获取统计：获取营销活动的统计数据）
* Enrichment（数据补全）
	* Get: Fetches a previously completed enrichment（获取：获取之前已完成的一次数据补全结果）
	* Enrich Lead: Enrich a lead using an email or LinkedIn URL（补全线索：用邮箱或 LinkedIn 链接补全线索信息）
	* Enrich Person: Enrich a person using an email or LinkedIn URL（补全联系人：用邮箱或 LinkedIn 链接补全联系人信息）
* Lead（线索）
    * Create: Create a new lead（创建：创建新线索）
    * Delete: Delete an existing lead（删除：删除已有线索）
    * Get: Get an existing lead（获取：获取已有线索）
    * Unsubscribe: Unsubscribe an existing lead（退订：退订已有线索）
* Team（团队）
    * Get: Get an existing team（获取：获取已有团队）
	* Get Credits: Get an existing team's credits（获取额度：获取已有团队的额度/积分）
* Unsubscribe（退订名单）
    * Add: Add an email to an unsubscribe list（添加：把邮箱加入退订名单）
    * Delete: Delete an email from an unsubscribe list（删除：把邮箱从退订名单移除）
    * Get Many: Get many unsubscribed emails（获取多个：获取多条已退订的邮箱）

## 模板与示例

[浏览 Lemlist 节点的官方集成模板](https://n8n.io/integrations/lemlist)，或[搜索全部模板](https://n8n.io/workflows/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
