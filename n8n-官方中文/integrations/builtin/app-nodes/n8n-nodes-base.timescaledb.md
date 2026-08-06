---
title: TimescaleDB 节点文档
description: >-
  学习如何在 n8n 中使用 TimescaleDB 节点。按照技术文档
  将 TimescaleDB 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: TimescaleDB 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.timescaledb.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.timescaledb'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.timescaledb'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：TimescaleDB 是一个「面向时序数据」的 PostgreSQL 数据库（专门存传感器数据、股价、日志这类带时间戳的数据）。这个节点让你在 n8n 里直接对它执行 SQL 语句，或者往表里插入行、更新行。常用场景：定时把 API 拉到的监控数据写进时序表；或者按条件批量更新记录。
{% endhint %}

# TimescaleDB 节点

使用 TimescaleDB 节点来自动化你在 TimescaleDB 中的工作，并把它与其它应用集成。n8n 内置支持 TimescaleDB 的大量功能，包括执行 SQL 查询，以及向数据库中插入行、更新行。

在本页你可以看到 TimescaleDB 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [TimescaleDB 凭证](../credentials/timescaledb.md)。
{% endhint %}

## 操作

* Execute an SQL query（执行 SQL 查询）
* Insert rows in database（向数据库中插入行）
* Update rows in database（更新数据库中的行）

## 模板与示例

[浏览 TimescaleDB 节点的官方集成模板](https://n8n.io/integrations/timescaledb)，或[搜索全部模板](https://n8n.io/workflows/)。

## 指定列的数据类型

要指定某列的数据类型，请在列名后面加上 `:type`，其中 `type` 是你想要的数据类型。例如，你想给 **id** 列指定 `int` 类型、给 **name** 列指定 `text` 类型，可以在 **Columns** 字段里这样写：`id:int,name:text`。
