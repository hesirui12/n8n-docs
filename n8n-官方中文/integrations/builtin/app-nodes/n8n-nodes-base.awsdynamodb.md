---
title: AWS DynamoDB 节点文档
description: >-
  学习如何在 n8n 中使用 AWS DynamoDB 节点。按照技术文档将 AWS
  DynamoDB 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: AWS DynamoDB 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.awsdynamodb.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awsdynamodb'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awsdynamodb'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：AWS DynamoDB 是 AWS 的「键值型数据库」，存取速度很快，适合存用户数据、订单、配置等。这个节点让你在 n8n 里对数据库里的「条目」（Item，相当于一行数据）做增删查。特别注意第一个操作是 upsert/put：如果这条数据已存在就更新它，不存在就新建，一条命令搞定。
{% endhint %}

# AWS DynamoDB 节点

使用 AWS DynamoDB 节点来自动化你在 AWS DynamoDB 中的工作，并把它与其它应用集成。n8n 内置支持 AWS DynamoDB 的大量功能，包括对数据库中的条目和记录进行创建、读取、更新、删除。

在本页你可以看到 AWS DynamoDB 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [AWS 凭证](../credentials/aws.md)。
{% endhint %}

## 操作

* Item（条目）
    * Create a new record, or update the current one if it already exists (upsert/put)（创建新记录；如果已存在则更新当前记录，即 upsert/put）
    * Delete an item（删除条目）
    * Get an item（获取条目）
    * Get all items（获取全部条目）

## 模板与示例

[浏览 AWS DynamoDB 节点的官方集成模板](https://n8n.io/integrations/aws-dynamodb)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
