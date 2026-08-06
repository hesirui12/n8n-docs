---
title: Vero 节点文档
description: >-
  学习如何在 n8n 中使用 Vero 节点。按照技术文档将 Vero
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Vero 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.vero.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.vero'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.vero'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Vero 是一个「邮件/应用内消息营销平台」——你按用户行为（如注册、加购物车）触发自动化邮件或 App 内消息。这个节点可以帮你：创建/更新用户档案（User）、修改用户标识符、退订/重新订阅用户、删除用户、给用户打标签/移除标签，以及记录用户事件（Event，比如「加入购物车」）。适合做用户生命周期营销自动化。
{% endhint %}

# Vero 节点

使用 Vero 节点来自动化你在 Vero 中的工作，并把它与其它应用集成。n8n 内置支持 Vero 的大量功能，包括创建和删除用户。

在本页你可以看到 Vero 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Vero 凭证](../credentials/vero.md)。
{% endhint %}

## 操作

* User（用户）
    * Create or update a user profile（创建或更新用户档案）
    * Change a users identifier（修改用户的标识符）
    * Unsubscribe a user.（退订用户）
    * Resubscribe a user.（重新订阅用户）
    * Delete a user.（删除用户）
    * Adds a tag to a users profile.（给用户档案添加标签）
    * Removes a tag from a users profile.（从用户档案移除标签）
* Event（事件）
    * Track an event for a specific customer（为特定客户记录一个事件）

## 模板与示例

[浏览 Vero 节点的官方集成模板](https://n8n.io/integrations/vero)，或[搜索全部模板](https://n8n.io/workflows/)。
