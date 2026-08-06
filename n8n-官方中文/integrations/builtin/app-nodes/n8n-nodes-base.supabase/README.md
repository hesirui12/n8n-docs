---
title: Supabase 节点文档
description: >-
  学习如何在 n8n 中使用 Supabase 节点。按照技术文档将 Supabase
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: n8n-nodes-base.supabase
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.supabase/index.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.supabase'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.supabase'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Supabase 是一个「开源版 Firebase」——给你一个现成的 PostgreSQL 数据库 + 登录认证 + 文件存储，前端直接对接。这个节点可以帮你：对数据库里的行（Row）做增删改查。数据默认存在 `public` 这个 schema（数据库里的命名空间）下，如果你想用自己建的其他 schema，需要打开「使用自定义 Schema」。遇到常见报错可以看 [常见问题](common-issues.md)。
{% endhint %}

# Supabase 节点

使用 Supabase 节点来自动化你在 Supabase 中的工作，并把它与其它应用集成。n8n 内置支持 Supabase 的大量功能，包括创建、删除和获取行。

在本页你可以看到 Supabase 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Supabase 凭证](../../credentials/supabase.md)。
{% endhint %}

（官方此处嵌入了通用资源组件，此处从略。）

## 操作

* Row（行）
    * Create a new row（创建新行）
    * Delete a row（删除一行）
    * Get a row（获取一行）
    * Get all rows（获取全部行）
    * Update a row（更新一行）

## 使用自定义 Schema

默认情况下，Supabase 节点只获取 `public` schema 的数据。要获取[自定义 schema](https://supabase.com/docs/guides/api/using-custom-schemas)，请打开 **Use Custom Schema（使用自定义 Schema）** 开关。

在出现的 **Schema** 字段里，填上 Supabase 节点应该使用的自定义 schema 名称。

## 模板与示例

[浏览 n8n-nodes-base.supabase 集成模板](https://n8n.io/integrations/supabase)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）

## 常见问题

遇到常见报错或问题及建议的解决办法，请参考 [常见问题](common-issues.md)。
