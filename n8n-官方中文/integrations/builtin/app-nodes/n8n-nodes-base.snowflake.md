---
title: Snowflake 节点文档
description: >-
  学习如何在 n8n 中使用 Snowflake 节点。按照技术文档将 Snowflake
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Snowflake 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.snowflake.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.snowflake'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.snowflake'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Snowflake 是一个「云端数据仓库」——专门用来存海量数据、跑分析查询的云数据库。这个节点可以帮你：执行 SQL 查询、往表里插数据、更新表里的数据。最适合「数据入仓、ETL、定时报表」这类工作流。下面还教你用「查询参数」安全地传值，防止 SQL 注入攻击。
{% endhint %}

# Snowflake 节点

使用 Snowflake 节点来自动化你在 Snowflake 中的工作，并把它与其它应用集成。n8n 内置支持 Snowflake 的大量功能，包括执行 SQL 查询，以及在数据库里插入行。

在本页你可以看到 Snowflake 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Snowflake 凭证](../credentials/snowflake.md)。
{% endhint %}

## 操作

* Execute an SQL query.（执行 SQL 查询）
* Insert rows in database.（在数据库里插入行）
* Update rows in database.（更新数据库里的行）

### 执行 SQL 查询

在 Snowflake 上执行 SQL 查询时，可以使用参数化查询，把值安全地传进 SQL 语句里。

#### 使用查询参数

使用 **Options（选项）** 区域里的 **Query Parameters（查询参数）** 字段把值绑定到你的查询上。n8n 会清洗查询参数里的数据，从而防止 SQL 注入。

在 SQL 查询里，用占位符 `$1`、`$2`、`$3`……表示参数值应该插入的位置。例如：

```sql
SELECT * FROM users WHERE email = $1 AND status = $2;
```

然后在 **Query Parameters（查询参数）** 里提供要绑定的值。你可以填固定值，也可以用表达式。用表达式可以从输入数据里取值：

```js
{{ $json.email }}, {{ $json.status }}
```

每个参数值之间用逗号分隔。第一个值绑定到 `$1`，第二个绑定到 `$2`，以此类推。

{% hint style="warning" %}
**安全建议**

当你的查询包含任何外部或不可信输入时，请使用查询参数，而不要把 `{{ }}` 表达式直接插进查询字符串里。这样能确保值被正确清洗，防止 SQL 注入攻击。
{% endhint %}

## 模板与示例

[浏览 Snowflake 节点的官方集成模板](https://n8n.io/integrations/snowflake)，或[搜索全部模板](https://n8n.io/workflows/)。
