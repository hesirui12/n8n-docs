---
title: LinkedIn 节点文档
description: >-
  学习如何在 n8n 中使用 LinkedIn 节点。按照技术文档将
  LinkedIn 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: LinkedIn 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.linkedin.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.linkedin'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.linkedin'
---

{% hint style="info" %}
**大白话**：LinkedIn 是全球最大的职场社交平台。这个节点功能很聚焦：发帖子（Post Create）。你可以选择以个人（Person）身份还是公司（Organization）身份发帖，可以带文字，也可以带图片或文章链接。适合做「博客更新 → 自动发 LinkedIn 动态」这类内容分发流程。
{% endhint %}

# LinkedIn 节点

使用 LinkedIn 节点来自动化你在 LinkedIn 中的工作，并把它与其它应用集成。n8n 支持创建帖子（Post）。

在本页你可以看到 LinkedIn 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [LinkedIn 凭证](../credentials/linkedin.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作

* Post（帖子）
    * Create（创建）

## 参数

* **Post As（以什么身份发帖）**：选择以 **Person（个人）** 还是 **Organization（组织）** 身份发帖。
* **Person Name or ID（个人名称或 ID）** 和 **Organization URN（组织 URN）**：输入个人或组织的标识符。<br>

	<div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>以组织身份发帖</strong></p><p>如果以组织身份发帖，请在 URN 字段中输入组织编号。例如填 <code>03262013</code>，而不是 <code>urn:li:company:03262013</code>。</p></div>
	
* **Text（内容）**：帖子的内容。
* **Media Category（媒体类别）**：当你要在帖子里附带图片或文章链接时使用。

## 模板与示例

[浏览 LinkedIn 节点的官方集成模板](https://n8n.io/integrations/linkedin)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [LinkedIn 的 API 文档](https://learn.microsoft.com/en-us/linkedin/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
