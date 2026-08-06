---
title: PhantomBuster 节点文档
description: >-
  学习如何在 n8n 中使用 PhantomBuster 节点。按照技术文档
  将 PhantomBuster 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: PhantomBuster 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.phantombuster.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.phantombuster
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.phantombuster
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：PhantomBuster 是「浏览器自动化机器人」平台（让机器人自动在 LinkedIn、Twitter 等网站上执行加好友、发私信、抓数据等操作，常用于销售获客）。这个节点让你在 n8n 里管理 PhantomBuster 的机器人（Agent）：添加/删除/获取机器人、查看机器人最近一次运行的输出、把机器人加入启动队列等。
{% endhint %}

# PhantomBuster 节点

使用 PhantomBuster 节点来自动化你在 PhantomBuster 中的工作，并把它与其它应用集成。n8n 内置支持 PhantomBuster 的大量功能，包括添加、删除和获取机器人（agent）。

在本页你可以看到 PhantomBuster 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [PhantomBuster 凭证](../credentials/phantombuster.md)。
{% endhint %}

## 操作

* Agent（机器人）
    * Delete an agent by ID.（按 ID 删除机器人）
    * Get an agent by ID.（按 ID 获取机器人）
    * Get all agents of the current user's organization.（获取当前用户组织下的全部机器人）
    * Get the output of the most recent container of an agent.（获取机器人最近一次容器运行的输出）
    * Add an agent to the launch queue.（把机器人加入启动队列）

## 模板与示例

[浏览 PhantomBuster 节点的官方集成模板](https://n8n.io/integrations/phantombuster)，或[搜索全部模板](https://n8n.io/workflows/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
