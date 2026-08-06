---
title: QuestDB 节点文档
description: >-
  学习如何在 n8n 中使用 QuestDB 节点。按照技术文档将 QuestDB
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: QuestDB 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.questdb.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.questdb'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.questdb'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：QuestDB 是一款专为「时序数据」设计的高性能开源数据库，特别适合存股票行情、传感器读数、日志这类随时间产生的数据。用这个节点，你可以在 n8n 里直接对它执行 SQL 查询，以及往数据库里插入行。
{% endhint %}

# QuestDB 节点

使用 QuestDB 节点来自动化你在 QuestDB 中的工作，并把它与其它应用集成。n8n 支持用 QuestDB 执行 SQL 查询，以及向数据库插入行。

在本页你可以看到 QuestDB 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [QuestDB 凭证](../credentials/questdb.md)。
{% endhint %}

## 操作（Operations）

* 执行一条 SQL 查询。
* 向数据库插入行。

## 模板与示例（Templates and examples）

[浏览 QuestDB 节点文档集成模板](https://n8n.io/integrations/questdb)，或[搜索全部模板](https://n8n.io/workflows/)。

## 节点参考（Node reference）

### 指定列的数据类型

要指定某个列的数据类型，可以在列名后面加上 `:type`，其中 `type` 是你要给该列设置的数据类型。例如，如果你想给 **id** 列指定 `int` 类型、给 **name** 列指定 `text` 类型，可以在 **Columns（列）** 字段里使用下面这段写法：`id:int,name:text`。
