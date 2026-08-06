---
title: MISP 节点文档
description: >-
  学习如何在 n8n 中使用 MISP 节点。按照技术文档将 MISP
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: MISP 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.misp.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.misp'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.misp'
layout:
  description:
    visible: false
---

# MISP 节点

> 💡 **大白话**：MISP 是一个「威胁情报共享平台」，网络安全团队用它分享和查询病毒、攻击手法、恶意域名等情报。用这个节点，你可以让 n8n 自动创建、更新、删除、查询事件（Event）、订阅源（Feed）和组织（Organisation）等情报数据。

使用 MISP 节点来自动化你在 MISP 中的工作，并把它与其它应用集成。n8n 内置支持 MISP 的大量功能，包括创建、更新、删除和获取事件、订阅源和组织。

在本页你可以看到 MISP 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [MISP 凭证](../credentials/misp.md)。
{% endhint %}

## 操作（Operations）

* Attribute（属性）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get All（获取全部）
	* Search（搜索）
    * Update（更新）
* Event（事件）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get All（获取全部）
    * Publish（发布）
	* Search（搜索）
    * Unpublish（取消发布）
    * Update（更新）
* Event Tag（事件标签）
    * Add（添加）
    * Remove（移除）
* Feed（订阅源）
    * Create（创建）
    * Disable（停用）
    * Enable（启用）
    * Get（获取）
    * Get All（获取全部）
    * Update（更新）
* Galaxy（银河系数据集）
    * Delete（删除）
    * Get（获取）
    * Get All（获取全部）
* Noticelist（通知列表）
    * Get（获取）
    * Get All（获取全部）
* Object（对象）
	* Search（搜索）
* Organisation（组织）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get All（获取全部）
    * Update（更新）
* Tag（标签）
    * Create（创建）
    * Delete（删除）
    * Get All（获取全部）
    * Update（更新）
* User（用户）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get All（获取全部）
    * Update（更新）
* Warninglist（警告名单）
    * Get（获取）
    * Get All（获取全部）

## 模板与示例（Templates and examples）

[浏览 MISP 节点文档集成模板](https://n8n.io/integrations/misp)，或[搜索全部模板](https://n8n.io/workflows/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
