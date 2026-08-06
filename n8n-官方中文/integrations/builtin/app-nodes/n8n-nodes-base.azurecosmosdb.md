---
title: Azure Cosmos DB 节点文档
description: 学习如何在 n8n 中使用 Azure Cosmos DB 节点。按照技术文档将 Azure Cosmos DB 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Azure Cosmos DB 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.azurecosmosdb.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.azurecosmosdb
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.azurecosmosdb
layout:
  description:
    visible: false
---

# Azure Cosmos DB 节点

> 💡 **大白话**：Azure Cosmos DB 是微软 Azure 的「云数据库」，用来存数据，可以往里放「容器」（类似数据表）和「条目」（类似表格里的一行记录）。用这个节点，你可以在 n8n 里自动增删改查容器和条目，还能直接用 SQL 查数据，不用自己写代码。

使用 Azure Cosmos DB 节点自动化 Azure Cosmos DB 中的工作，并将 Azure Cosmos DB 与其他应用集成。n8n 内置支持大量 Azure Cosmos DB 功能，包括创建、获取、更新和删除容器与条目。

本页列出了 Azure Cosmos DB 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于本节点的认证信息，请看[这里](../credentials/azurecosmosdb.md)。
{% endhint %}


## 支持的操作（Operations）

* **Container（容器）**：
	* **Create（创建）**
	* **Delete（删除）**
	* **Get（获取）**
	* **Get Many（获取多个）**
* **Item（条目）**：
	* **Create（创建）**
	* **Delete（删除）**
	* **Get（获取）**
	* **Get Many（获取多个）**
	* **Execute Query（执行查询）**
	* **Update（更新）**

## 条目：执行查询（Item: Execute Query）

对一个容器执行 NoSQL SQL 查询，并返回符合条件的条目。

### 参数（Parameters）

| Parameter（参数） | Required（必填） | Description（说明） |
| --- | --- | --- |
| **Container（容器）** | Yes（是） | 要执行查询的容器。可以从列表中选择，也可以直接输入容器 ID。 |
| **Query（查询）** | Yes（是） | 要执行的 SQL 查询。用 `$1`、`$2`、`$3` 等作为查询参数的占位符。n8n 会在发送请求给 Azure Cosmos DB 之前，自动把它们转换成 `@Param1`、`@Param2`、`@Param3`。例如：`SELECT * FROM c WHERE c.status = $1 AND c.startDate = $2`。 |
| **Simplify（简化输出）** | No（否） | 启用时（默认启用）会去掉返回条目中 Cosmos DB 的内部元数据字段（以下划线 `_` 开头的字段）。关闭则返回完整的原始 API 响应。 |

### 选项（Options）

展开 **Options（选项）** 来配置查询参数。

| Option（选项） | Description（说明） |
| --- | --- |
| **Query Parameters（查询参数）** | 用逗号分隔的字符串值列表，按位置对应查询里的 `$1`、`$2` 等。**所有值始终以字符串形式发送。** 适合做简单的文本过滤，比如名称或状态值。示例：`active,2024`。 |
| **Query Parameters (JSON)（JSON 查询参数）** | JSON 数组，按位置对应查询里的 `$1`、`$2` 等。可以保留原始类型：数字、布尔值、`null`、以及带前导零的字符串。当类型精确度很重要时，请用它代替 **Query Parameters**。示例：`[1737062400000, "01234", true, null]`。 |

{% hint style="info" %}
**如何选择：Query Parameters 还是 Query Parameters (JSON)**

Azure Cosmos DB 的比较是对类型敏感的。比如过滤条件
`WHERE c.startDate = $1`，如果数据库里 `startDate` 存的是数字，
而参数传进来的是字符串，就查不到任何结果。

- 当所有过滤值都是文本（名称、状态、标识符）时，用 **Query Parameters**。
- 当需要按数字、布尔值、`null`、或者以数字开头且必须保持为字符串的值（比如 `"01234"` 这样的邮政编码）过滤时，用 **Query Parameters (JSON)**。

**限制：** JavaScript 的 JSON 解析器无法完整表示大于
`Number.MAX_SAFE_INTEGER`（`9007199254740991`）的整数。
超过这个上限的值在使用 **Query Parameters (JSON)** 时可能会丢失精度。
{% endhint %}

## 模板和示例（Templates and examples）

[浏览 Azure Cosmos DB 节点文档集成模板](https://n8n.io/integrations/azure-cosmos-db) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Azure Cosmos DB 官方文档](https://learn.microsoft.com/en-us/rest/api/cosmos-db/)。


{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
