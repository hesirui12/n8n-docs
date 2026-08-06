---
title: Embeddings Oracle Database 节点文档
description: 了解如何在 n8n 中使用 Embeddings Oracle Database 节点。阅读技术文档，把 Embeddings Oracle Database 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
layout:
  description:
    visible: false
---

# Embeddings Oracle Database 节点

> **大白话**：这个节点直接用 Oracle 数据库里存着的 ONNX 模型，把一段文字变成一串数字（向量），也就是"嵌入"。模型和数据都在数据库里算，数据不用搬出去，适合"数据本来就存在 Oracle 里、不想挪动"的企业场景。前提是你的 Oracle 得支持 AI Vector Search 和 ONNX 执行，并且提前把模型导入进去。

使用 Embeddings Oracle Database 节点，通过存储在 Oracle Database 中的 ONNX 模型生成 embeddings[^1]。这个节点适合做语义搜索、相似度匹配、检索增强生成（RAG），或者任何需要文本向量表示的任务。

在本页中，你可以找到 Embeddings Oracle Database 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/oracledb.md)找到该节点的认证信息。
{% endhint %}

{% hint style="info" %}
**ONNX 模型**

你的 Oracle Database 实例必须支持 Oracle AI Vector Search 和 ONNX 模型执行能力。

在使用本节点之前，需要先把一个或多个 ONNX 嵌入模型导入 Oracle Database。只有已导入的模型才会出现在可选列表里。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Model**（模型）：选择用来生成 embeddings 的 ONNX 模型。从你的 Oracle Database 实例中可用的模型列表里选一个，也可以手动指定模型 ID。选定的模型决定了 embedding 的维度和支持的输入类型。

节点会从已配置的 Oracle Database 连接中的 `USER_MINING_MODELS` 视图加载可用模型。只有当前数据库用户有权限访问的模型才会显示出来。

## 模板与示例

[浏览 Embeddings Oracle Database 节点集成模板](https://n8n.io/integrations/embeddings-oracle-database) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于如何把 ONNX 模型导入 Oracle Database，请参考 [Oracle 的 ONNX 模型导入文档](https://docs.oracle.com/en/database/oracle/oracle-database/26/vecse/import-onnx-models-oracle-ai-database-end-end-example.html)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: Embeddings（嵌入）是数据用向量表示的数值形式。AI 通过把数值映射到多个维度，来理解复杂数据和数据之间的关系。向量数据库（vector databases，也叫向量库）就是专门用来存储和读取这些 embeddings 的数据库。
