---
title: Netlify 节点文档
description: >-
  学习如何在 n8n 中使用 Netlify 节点。按照技术文档将 Netlify
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Netlify 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.netlify.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.netlify'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.netlify'
layout:
  description:
    visible: false
---

# Netlify 节点

> 💡 **大白话**：Netlify 是一个「网站托管和部署」平台，很多前端网站用它自动部署。用这个节点，你可以让 n8n 自动创建、取消、查看部署（Deploy），以及删除、查看站点（Site），比如「代码提交后自动触发部署并检查状态」。

使用 Netlify 节点来自动化你在 Netlify 中的工作，并把它与其它应用集成。n8n 内置支持 Netlify 的大量功能，包括获取和取消部署，以及删除和获取站点。

在本页你可以看到 Netlify 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Netlify 凭证](../credentials/netlify.md)。
{% endhint %}

## 操作（Operations）

* Deploy（部署）
    * Cancel a deployment（取消部署）
    * Create a new deployment（创建新部署）
    * Get a deployment（获取部署）
    * Get all deployments（获取所有部署）
* Site（站点）
    * Delete a site（删除站点）
    * Get a site（获取站点）
    * Returns all sites（返回所有站点）

## 模板与示例（Templates and examples）

[浏览 Netlify 节点文档集成模板](https://n8n.io/integrations/netlify)，或[搜索全部模板](https://n8n.io/workflows/)。
