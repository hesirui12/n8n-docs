---
title: Postgres 触发器节点文档
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Postgres 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.postgrestrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.postgrestrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.postgrestrigger
description: >-
  学习如何在 n8n 中使用 Postgres 触发器节点。按照本文档将
  Postgres 触发器节点集成到你的工作流中。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# Postgres 触发器节点

> **大白话**：这个节点是数据库的「哨兵」。它盯着你的 Postgres 数据库，当某张表里有数据被**新增（Insert）**、**修改（Update）**或**删除（Delete）**时，它立刻启动你的工作流。n8n 会悄悄在表上帮你建一个"触发器"来监听，工作流发布时自动创建、取消发布时自动移除。适合做"数据变了 → 自动同步/通知/备份"这类自动化。

使用 Postgres 触发器节点来响应 [Postgres](https://www.postgresql.org/) 中的事件，并把 Postgres 与其他应用集成起来。n8n 内置支持响应新增（insert）、修改（update）和删除（delete）事件。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/postgres.md)找到此节点的身份验证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [Postgres Trigger integrations](https://n8n.io/integrations/postgres-trigger/) 页面。
{% endhint %}

## 事件（Events）

你可以配置节点监听事件的方式。

* 选择 **Listen and Create Trigger Rule（监听并创建触发器规则）**，然后选择要监听的事件：
  * Insert（新增）
  * Update（修改）
  * Delete（删除）
* 选择 **Listen to Channel（监听频道）**，然后输入一个节点要监控的频道名称。

{% hint style="info" %}
**Postgres 事件监听器与所需的数据库权限**

* 为了监听触发器事件，n8n 会自动在目标表上创建一个 Postgres 触发器（trigger）。这个触发器会在你**发布**工作流时被添加，在你**取消发布**时被移除。
* 如果你的工作流没有发布，在**测试**工作流时也会添加触发器，测试事件监听停止后会被移除。
* 该 Postgres 触发器会调用一个自动创建的过程（procedure），把事件告知 n8n。
* 你的 Postgres 凭据中的用户必须拥有创建和执行触发器及过程的权限。在 PostgreSQL 中，这需要超级用户权限（superuser access）、表的所有权，或者 TRIGGER 权限——外加对过程将要存放的 schema 的 CREATE 权限。
{% endhint %}

## 相关资源（Related resources）

n8n 为 Postgres 提供了一个应用节点（app node）。你可以[在此处](../app-nodes/n8n-nodes-base.postgres/README.md)找到该节点的文档。

在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/postgres-trigger/)。
