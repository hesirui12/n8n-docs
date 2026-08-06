---
title: Kitemaker 节点文档
description: >-
  学习如何在 n8n 中使用 Kitemaker 节点。按照技术文档将
  Kitemaker 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Kitemaker 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.kitemaker.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.kitemaker'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.kitemaker'
---

{% hint style="info" %}
**大白话**：Kitemaker 是一款把「产品管理」和「研发协作」结合起来的工具，团队用它跟踪产品想法和开发任务。这个节点能让你在 n8n 里：读取组织（Organization）、空间（Space）、用户（User）的数据，以及创建、获取、更新工作项（Work Item）。适合做「用户反馈表单 → 自动创建产品工作项」这类流程。
{% endhint %}

# Kitemaker 节点

使用 Kitemaker 节点来自动化你在 Kitemaker 中的工作，并把它与其它应用集成。n8n 内置支持 Kitemaker 的大量功能，包括获取组织（Organization）、空间（Space）和用户（User）的数据，以及创建、获取和更新工作项（Work Item）。

在本页你可以看到 Kitemaker 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Kitemaker 凭证](../credentials/kitemaker.md)。
{% endhint %}

## 操作

* Organization（组织）
    * Retrieve data on the logged-in user's organization.（获取当前登录用户所在组织的数据。）
* Space（空间）
    * Retrieve data on all the spaces in the logged-in user's organization.（获取当前登录用户组织里的全部空间数据。）
* User（用户）
    * Retrieve data on all the users in the logged-in user's organization.（获取当前登录用户组织里的全部用户数据。）
* Work Item（工作项）
    * Create（创建）
    * Get（获取单个）
    * Get All（获取全部）
    * Update（更新）

## 模板与示例

[浏览 Kitemaker 节点的官方集成模板](https://n8n.io/integrations/kitemaker)，或[搜索全部模板](https://n8n.io/workflows/)。
