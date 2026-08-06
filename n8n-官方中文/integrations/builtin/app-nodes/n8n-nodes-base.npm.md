---
title: npm 节点文档
description: >-
  学习如何在 n8n 中使用 npm 节点。按照技术文档将 npm
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: npm 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.npm.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.npm'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.npm'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：npm 是全球最大的 JavaScript 软件包仓库（程序员在这里下载/发布代码包）。这个节点让你在 n8n 里直接查询 npm 上的包信息：看某个包的元数据、版本列表、搜索包，以及管理「发布标签」（Distribution Tag，用来标记包的某个版本为 latest、beta 等）。
{% endhint %}

# npm 节点

使用 npm 节点来自动化你在 npm 中的工作，并把它与其它应用集成。

在本页你可以看到 npm 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [npm 凭证](../credentials/npm.md)。
{% endhint %}

## 操作

* Package（软件包）
	* Get Package Metadata（获取包元数据）
	* Get Package Versions（获取包的所有版本）
	* Search for Packages（搜索包）
* Distribution Tag（发布标签）
	* Get All Tags（获取全部标签）
	* Update a Tag（更新一个标签）

## 模板与示例

[浏览 npm 节点的官方集成模板](https://n8n.io/integrations/npm)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [npm 官方文档](https://docs.npmjs.com/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
