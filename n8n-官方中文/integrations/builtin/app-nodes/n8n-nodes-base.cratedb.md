---
title: CrateDB 节点文档
description: >-
  学习如何在 n8n 中使用 CrateDB 节点。按照技术文档将 CrateDB
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: CrateDB 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.cratedb.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.cratedb'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.cratedb'
layout:
  description:
    visible: false
---

# CrateDB 节点

> **大白话**：CrateDB 是一个开源的分布式 SQL 数据库，擅长存海量时间序列和物联网数据。这个节点让 n8n 能对它执行 SQL 语句——比如把采集到的传感器数据写入数据库、按条件更新已有记录，或者直接执行自定义 SQL 查询。举例：每小时从设备采集一次数据，工作流自动把数据插入 CrateDB 供报表查询。

使用 CrateDB 节点可以自动化处理 CrateDB 里的工作，并让 CrateDB 与其他应用程序互通。n8n 内置支持 CrateDB 的众多功能，包括在数据库中执行、插入和更新行等。

本页列出了 CrateDB 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [CrateDB 凭证](../credentials/cratedb.md)。
{% endhint %}

## 支持的操作

* 执行一条 SQL 查询
* 向数据库插入行
* 更新数据库中的行

## 模板与示例


[浏览 CrateDB 节点集成模板](https://n8n.io/integrations/cratedb) 或 [搜索全部模板](https://n8n.io/workflows/)

## 节点参考

### 指定列的数据类型

想指定某列的数据类型，就在列名后面加上 `:type`，其中 `type` 是你希望该列使用的数据类型。例如，如果你想把列 **id** 的类型指定为 `int`、把列 **name** 的类型指定为 `text`，可以在 **Columns**（列）字段里填写下面的内容：`id:int,name:text`。

