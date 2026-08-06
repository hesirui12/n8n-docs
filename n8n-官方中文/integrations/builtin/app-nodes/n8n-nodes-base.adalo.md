---
title: Adalo 节点文档
description: >-
  学习如何在 n8n 中使用 Adalo 节点。按照技术文档将 Adalo
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Adalo 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.adalo.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.adalo'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.adalo'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Adalo 是一个「不用写代码就能做 App」的平台，你的数据都存在它的「数据库」里，按「集合」（Collection，类似一张表）组织。这个节点让你在 n8n 里直接对集合做增删改查。常见用法：App 里用户提交了表单，n8n 自动往 Adalo 数据库写一条记录；或者把别的系统的数据同步进 Adalo。
{% endhint %}

# Adalo 节点

使用 Adalo 节点来自动化你在 Adalo 中的工作，并把它与其它应用集成。n8n 内置支持 Adalo 的大量功能，包括创建、获取、更新、删除数据库、记录和集合。

在本页你可以看到 Adalo 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Adalo 凭证](../credentials/adalo.md)。
{% endhint %}

## 操作

* Collection（集合）
	* Create（创建）
	* Delete（删除）
	* Get（获取）
	* Get Many（获取多条）
	* Update（更新）

## 模板与示例

[浏览 Adalo 节点的官方集成模板](https://n8n.io/integrations/adalo)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

更多 Adalo 的使用方法，请参考 [Adalo 官方文档](https://help.adalo.com/)。其中 [External Collections with APIs（通过 API 使用外部集合）](https://help.adalo.com/integrations/external-collections-with-apis) 页面会详细介绍 Adalo 集合还能做什么。

（官方此处嵌入了通用资源组件，此处从略。）
