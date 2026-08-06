---
title: Databricks 节点文档
description: >-
  学习如何在 n8n 中使用 Databricks 节点。按照技术文档将 Databricks
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Databricks 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.databricks.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.databricks'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.databricks'
layout:
  description:
    visible: false
---

# Databricks 节点

> **大白话**：Databricks 是云上的大数据 + AI 分析平台（湖仓一体 Lakehouse），用来跑 SQL、训练机器学习模型、做向量检索。这个节点让 n8n 能远程调用 Databricks——比如执行 SQL 查询、管理 Unity Catalog 里的表/库/函数、调用已部署的机器学习模型接口、操作向量搜索索引。举例：每天凌晨工作流从 Databricks 拉取昨日订单分析结果，生成报表发到邮箱。

使用 Databricks 节点可以自动化处理 Databricks 里的工作，并让 Databricks 与其他应用程序互通。n8n 内置支持 Databricks 的众多功能，包括执行 SQL 查询、管理 Unity Catalog 对象、查询 ML 模型服务端点，以及操作向量搜索索引等。

本页列出了 Databricks 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Databricks 凭证](../credentials/databricks.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 支持的操作

* Databricks SQL
	* 执行查询（Execute Query）
* File（文件）
	* 创建目录
	* 删除目录
	* 删除文件
	* 下载文件
	* 获取文件元数据
	* 列出目录内容
	* 上传文件
* Genie
	* 创建对话消息
	* 执行消息的 SQL 查询
	* 获取对话消息
	* 获取 Genie Space
	* 获取查询结果
	* 开始对话
* Model Serving（模型服务）
	* 查询端点（Endpoint）
* Unity Catalog
	* 创建目录（Catalog）
	* 创建函数
	* 创建卷（Volume）
	* 删除目录
	* 删除函数
	* 删除卷
	* 获取目录
	* 获取函数
	* 获取表
	* 获取卷
	* 列出所有目录
	* 列出所有函数
	* 列出所有表
	* 列出所有卷
	* 更新目录
* Vector Search（向量搜索）
	* 创建索引
	* 获取索引
	* 列出所有索引
	* 查询索引

## 模板与示例


[浏览 Databricks 节点集成模板](https://n8n.io/integrations/databricks) 或 [搜索全部模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的 API 详情，请参考 [Databricks 的 REST API 文档](https://docs.databricks.com/api/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
