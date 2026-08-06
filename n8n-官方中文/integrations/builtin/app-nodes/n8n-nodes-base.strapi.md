---
title: Strapi 节点文档
description: >-
  学习如何在 n8n 中使用 Strapi 节点。按照技术文档将 Strapi
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Strapi 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.strapi.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.strapi'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.strapi'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Strapi 是一个「开源无头 CMS」——自己搭一个内容后台，数据通过 API 给前端用。它里面的每条数据叫 Entry（条目/记录）。这个节点可以帮你：对 Entry 做增删改查。适合做内容自动入库、从表单写入内容、批量更新内容等。
{% endhint %}

# Strapi 节点

使用 Strapi 节点来自动化你在 Strapi 中的工作，并把它与其它应用集成。n8n 内置支持 Strapi 的大量功能，包括创建和删除条目。

在本页你可以看到 Strapi 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Strapi 凭证](../credentials/strapi.md)。
{% endhint %}

## 操作

* Entry（条目/记录）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get Many（获取多个）
    * Update（更新）

## 模板与示例

[浏览 Strapi 节点的官方集成模板](https://n8n.io/integrations/strapi)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Strapi 官方文档](https://docs.strapi.io/dev-docs/api/rest)。

（官方此处嵌入了通用资源组件，此处从略。）
