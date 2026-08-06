---
title: Postgres 节点文档
description: >-
  学习如何在 n8n 中使用 Postgres 节点。按照技术文档将 Postgres
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: n8n-nodes-base.postgres
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.postgres/index.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.postgres'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.postgres'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Postgres（PostgreSQL）是目前最流行的开源「关系型数据库」，数据以表格形式存储。用这个节点，你可以在 n8n 里对 Postgres 执行 SQL 查询，以及往表里插入、更新、删除、查询数据。典型场景：网页表单提交 → 自动存入 Postgres；或者每天定时从 Postgres 里把数据读出来发报表。
{% endhint %}

# Postgres 节点

使用 Postgres 节点来自动化你在 Postgres 中的工作，并把它与其它应用集成。n8n 内置支持 Postgres 的大量功能，包括执行查询，以及向数据库插入和更新行。

在本页你可以看到 Postgres 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Postgres 凭证](../../credentials/postgres.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作（Operations）

* [**Delete**](#delete)（删除）：删除整张表或表中的行
* [**Execute Query**](#execute-query)（执行查询）：执行一条 SQL 查询
* [**Insert**](#insert)（插入）：向表中插入行
* [**Insert or Update**](#insert-or-update)（插入或更新）：向表中插入行，或更新表中已有的行
* [**Select**](#select)（查询/选择）：从表中查询行
* [**Update**](#update)（更新）：更新表中的行

### Delete（删除）

用这个操作可以删除整张表或表中的某些行。

需要填写以下参数：

- **Credential to connect with**（连接用的凭证）：创建或选择一个已有的 [Postgres 凭证](../../credentials/postgres.md)。
- **Operation**（操作）：选择 **Delete**。
- **Schema**（模式）：选择包含你要操作的表所在的模式（schema，数据库里对表的分类容器）。选择 **From list** 从下拉列表里选，或选择 **By Name** 手动输入模式名。
- **Table**（表）：选择你要操作的表。选择 **From list** 从下拉列表里选，或选择 **By Name** 手动输入表名。
- **Command**（命令）：要执行的删除动作：
	- **Truncate**（清空）：删除表中的数据，但保留表的结构。
		- **Restart Sequences**（重置自增序列）：是否在清空（Truncate）的同时把自增列重置回初始值。
	- **Delete**（删除）：删除满足「Select Rows（选择行）」条件的行。如果什么都不选，Postgres 会删除所有行。
		- **Select Rows**（选择行）：设置 **Column**（列）、**Operator**（运算符）和 **Value**（值）来匹配要删除的行。
		- **Combine Conditions**（条件组合方式）：决定「Select Rows」里的多个条件如何组合。**AND** 要求所有条件都成立，**OR** 只要有一个条件成立即可。
	- **Drop**（删除表）：永久删除表的数据和结构。

#### Delete 的选项（Options）

- **Cascade**（级联删除）：是否同时删除所有依赖这张表的对象，比如视图（view）和序列（sequence）。仅在 **Truncate** 或 **Drop** 命令下可用。
- **Connection Timeout**（连接超时）：尝试连接数据库的秒数。
- **Delay Closing Idle Connection**（延迟关闭空闲连接）：等待多少秒后才把空闲连接视为可关闭。
- **Query Batching**（查询批处理方式）：向数据库发送查询的方式：
	- **Single Query**（单条查询）：所有传入的数据项合并成一条查询。
	- **Independently**（逐条独立执行）：为执行的每个传入数据项各执行一条查询。
	- **Transaction**（事务）：所有查询在一个事务中执行。如果中途失败，Postgres 会回滚所有更改。
- **Output Large-Format Numbers As**（大数字输出格式）：`NUMERIC` 和 `BIGINT` 列的输出格式：
	- **Numbers**（数字）：用于标准数字。
	- **Text**（文本）：如果预期数字超过 16 位请用这个选项。否则数字可能不正确。

### Execute Query（执行查询）

用这个操作执行一条 SQL 查询。

需要填写以下参数：

- **Credential to connect with**（连接用的凭证）：创建或选择一个已有的 [Postgres 凭证](../../credentials/postgres.md)。
- **Operation**（操作）：选择 **Execute Query**。
- **Query**（查询）：要执行的 SQL 查询。你可以使用 n8n [表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)以及 `$1`、`$2`、`$3` 这样的标记（token）来构建[预处理语句（prepared statements）](https://www.postgresql.org/docs/current/sql-prepare.html)，配合[查询参数](#use-query-parameters)一起使用。

#### Execute Query 的选项（Options）

- **Connection Timeout**（连接超时）：尝试连接数据库的秒数。
- **Delay Closing Idle Connection**（延迟关闭空闲连接）：等待多少秒后才把空闲连接视为可关闭。
- **Query Batching**（查询批处理方式）：向数据库发送查询的方式：
	- **Single Query**（单条查询）：所有传入的数据项合并成一条查询。
	- **Independently**（逐条独立执行）：为执行的每个传入数据项各执行一条查询。
	- **Transaction**（事务）：所有查询在一个事务中执行。如果中途失败，Postgres 会回滚所有更改。
- **Query Parameters**（查询参数）：用逗号分隔的值列表，作为[查询参数](#use-query-parameters)使用。
- **Output Large-Format Numbers As**（大数字输出格式）：`NUMERIC` 和 `BIGINT` 列的输出格式：
	- **Numbers**（数字）：用于标准数字。
	- **Text**（文本）：如果预期数字超过 16 位请用这个选项。否则数字可能不正确。
- **Replace Empty Strings with NULL**（把空字符串替换为 NULL）：是否把输入中的空字符串替换成 NULL。处理从电子表格软件导出的数据时这个选项可能很有用。

### Insert（插入）

用这个操作向表中插入行。

需要填写以下参数：

- **Credential to connect with**（连接用的凭证）：创建或选择一个已有的 [Postgres 凭证](../../credentials/postgres.md)。
- **Operation**（操作）：选择 **Insert**。
- **Schema**（模式）：选择包含你要操作的表所在的模式。选择 **From list** 从下拉列表里选，或选择 **By Name** 手动输入模式名。
- **Table**（表）：选择你要操作的表。选择 **From list** 从下拉列表里选，或选择 **By Name** 手动输入表名。
- **Mapping Column Mode**（列映射方式）：如何把列名映射到传入的数据：
	- **Map Each Column Manually**（逐列手动映射）：手动为每一列选择要使用的值。
	- **Map Automatically**（自动映射）：自动把传入数据映射到 Postgres 中同名的列。要求传入数据的字段名和 Postgres 里的列名完全一致。如有需要，可以在本节点之前先接一个 [edit fields (set) 节点](../../core-nodes/n8n-nodes-base.set.md)来调整数据格式。

#### Insert 的选项（Options）

- **Connection Timeout**（连接超时）：尝试连接数据库的秒数。
- **Delay Closing Idle Connection**（延迟关闭空闲连接）：等待多少秒后才把空闲连接视为可关闭。
- **Query Batching**（查询批处理方式）：向数据库发送查询的方式：
	- **Single Query**（单条查询）：所有传入的数据项合并成一条查询。
	- **Independently**（逐条独立执行）：为执行的每个传入数据项各执行一条查询。
	- **Transaction**（事务）：所有查询在一个事务中执行。如果中途失败，Postgres 会回滚所有更改。
- **Output Columns**（输出列）：选择要输出哪些列。你可以从可用列列表中选择，也可以用[表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)指定列 ID。
- **Output Large-Format Numbers As**（大数字输出格式）：`NUMERIC` 和 `BIGINT` 列的输出格式：
	- **Numbers**（数字）：用于标准数字。
	- **Text**（文本）：如果预期数字超过 16 位请用这个选项。否则数字可能不正确。
- **Skip on Conflict**（冲突时跳过）：插入违反唯一约束（unique）或排除约束（exclusion constraint）时，是跳过这一行而不是报错。
- **Replace Empty Strings with NULL**（把空字符串替换为 NULL）：是否把输入中的空字符串替换成 NULL。处理从电子表格软件导出的数据时这个选项可能很有用。

### Insert or Update（插入或更新）

用这个操作向表中插入行，或更新表中已有的行。

需要填写以下参数：

- **Credential to connect with**（连接用的凭证）：创建或选择一个已有的 [Postgres 凭证](../../credentials/postgres.md)。
- **Operation**（操作）：选择 **Insert or Update**。
- **Schema**（模式）：选择包含你要操作的表所在的模式。选择 **From list** 从下拉列表里选，或选择 **By Name** 手动输入模式名。
- **Table**（表）：选择你要操作的表。选择 **From list** 从下拉列表里选，或选择 **By Name** 手动输入表名。
- **Mapping Column Mode**（列映射方式）：如何把列名映射到传入的数据：
	- **Map Each Column Manually**（逐列手动映射）：手动为每一列选择要使用的值。
	- **Map Automatically**（自动映射）：自动把传入数据映射到 Postgres 中同名的列。要求传入数据的字段名和 Postgres 里的列名完全一致。如有需要，可以在本节点之前先接一个 [edit fields (set) 节点](../../core-nodes/n8n-nodes-base.set.md)来调整数据格式。

#### Insert or Update 的选项（Options）

- **Connection Timeout**（连接超时）：尝试连接数据库的秒数。
- **Delay Closing Idle Connection**（延迟关闭空闲连接）：等待多少秒后才把空闲连接视为可关闭。
- **Query Batching**（查询批处理方式）：向数据库发送查询的方式：
	- **Single Query**（单条查询）：所有传入的数据项合并成一条查询。
	- **Independently**（逐条独立执行）：为执行的每个传入数据项各执行一条查询。
	- **Transaction**（事务）：所有查询在一个事务中执行。如果中途失败，Postgres 会回滚所有更改。
- **Output Columns**（输出列）：选择要输出哪些列。你可以从可用列列表中选择，也可以用[表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)指定列 ID。
- **Output Large-Format Numbers As**（大数字输出格式）：`NUMERIC` 和 `BIGINT` 列的输出格式：
	- **Numbers**（数字）：用于标准数字。
	- **Text**（文本）：如果预期数字超过 16 位请用这个选项。否则数字可能不正确。
- **Replace Empty Strings with NULL**（把空字符串替换为 NULL）：是否把输入中的空字符串替换成 NULL。处理从电子表格软件导出的数据时这个选项可能很有用。

### Select（查询/选择）

用这个操作从表中查询行。

需要填写以下参数：

- **Credential to connect with**（连接用的凭证）：创建或选择一个已有的 [Postgres 凭证](../../credentials/postgres.md)。
- **Operation**（操作）：选择 **Select**。
- **Schema**（模式）：选择包含你要操作的表所在的模式。选择 **From list** 从下拉列表里选，或选择 **By Name** 手动输入模式名。
- **Table**（表）：选择你要操作的表。选择 **From list** 从下拉列表里选，或选择 **By Name** 手动输入表名。
- **Return All**（返回全部）：是否返回全部结果，还是只返回指定数量的结果。
- **Limit**（数量上限）：当 **Return All** 关闭时，最多返回的数据条数。
- **Select Rows**（选择行）：设置查询行的条件。定义 **Column**（列）、**Operator**（运算符）和 **Value**（值）来匹配行。如果什么都不选，Postgres 会返回所有行。
- **Combine Conditions**（条件组合方式）：决定 **Select Rows** 里的多个条件如何组合。**AND** 要求所有条件都成立，**OR** 只要有一个条件成立即可。
- **Sort**（排序）：选择如何给查询到的行排序。从列表或按 ID 选择一个 **Column**（列）和排序 **Direction**（方向）。

#### Select 的选项（Options）

- **Connection Timeout**（连接超时）：尝试连接数据库的秒数。
- **Delay Closing Idle Connection**（延迟关闭空闲连接）：等待多少秒后才把空闲连接视为可关闭。
- **Query Batching**（查询批处理方式）：向数据库发送查询的方式：
	- **Single Query**（单条查询）：所有传入的数据项合并成一条查询。
	- **Independently**（逐条独立执行）：为执行的每个传入数据项各执行一条查询。
	- **Transaction**（事务）：所有查询在一个事务中执行。如果中途失败，Postgres 会回滚所有更改。
- **Output Columns**（输出列）：选择要输出哪些列。你可以从可用列列表中选择，也可以用[表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)指定列 ID。
- **Output Large-Format Numbers As**（大数字输出格式）：`NUMERIC` 和 `BIGINT` 列的输出格式：
	- **Numbers**（数字）：用于标准数字。
	- **Text**（文本）：如果预期数字超过 16 位请用这个选项。否则数字可能不正确。

### Update（更新）

用这个操作更新表中的行。

需要填写以下参数：

- **Credential to connect with**（连接用的凭证）：创建或选择一个已有的 [Postgres 凭证](../../credentials/postgres.md)。
- **Operation**（操作）：选择 **Update**。
- **Schema**（模式）：选择包含你要操作的表所在的模式。选择 **From list** 从下拉列表里选，或选择 **By Name** 手动输入模式名。
- **Table**（表）：选择你要操作的表。选择 **From list** 从下拉列表里选，或选择 **By Name** 手动输入表名。
- **Mapping Column Mode**（列映射方式）：如何把列名映射到传入的数据：
	- **Map Each Column Manually**（逐列手动映射）：手动为每一列选择要使用的值。
	- **Map Automatically**（自动映射）：自动把传入数据映射到 Postgres 中同名的列。要求传入数据的字段名和 Postgres 里的列名完全一致。如有需要，可以在本节点之前先接一个 [edit fields (set) 节点](../../core-nodes/n8n-nodes-base.set.md)来调整数据格式。

#### Update 的选项（Options）

- **Connection Timeout**（连接超时）：尝试连接数据库的秒数。
- **Delay Closing Idle Connection**（延迟关闭空闲连接）：等待多少秒后才把空闲连接视为可关闭。
- **Query Batching**（查询批处理方式）：向数据库发送查询的方式：
	- **Single Query**（单条查询）：所有传入的数据项合并成一条查询。
	- **Independently**（逐条独立执行）：为执行的每个传入数据项各执行一条查询。
	- **Transaction**（事务）：所有查询在一个事务中执行。如果中途失败，Postgres 会回滚所有更改。
- **Output Columns**（输出列）：选择要输出哪些列。你可以从可用列列表中选择，也可以用[表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)指定列 ID。
- **Output Large-Format Numbers As**（大数字输出格式）：`NUMERIC` 和 `BIGINT` 列的输出格式：
	- **Numbers**（数字）：用于标准数字。
	- **Text**（文本）：如果预期数字超过 16 位请用这个选项。否则数字可能不正确。
- **Replace Empty Strings with NULL**（把空字符串替换为 NULL）：是否把输入中的空字符串替换成 NULL。处理从电子表格软件导出的数据时这个选项可能很有用。

## 模板与示例（Templates and examples）

[浏览 n8n-nodes-base.postgres 集成模板](https://n8n.io/integrations/postgres)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源（Related resources）

n8n 还为 Postgres 提供了触发器节点。你可以在[这里](../../trigger-nodes/n8n-nodes-base.postgrestrigger.md)找到触发器节点的文档。

## 使用查询参数（Use query parameters）

当你在 Postgres 数据库上创建要执行的查询时，可以使用 **Options（选项）** 部分里的 **Query Parameters（查询参数）** 字段把数据传入查询。n8n 会对查询参数中的数据进行消毒处理（sanitize），从而防止 SQL 注入攻击。

例如，你想按邮箱地址查找一个人。给定以下输入数据：

```js
[
    {
        "email": "alex@example.com",
        "name": "Alex",
        "age": 21 
    },
    {
        "email": "jamie@example.com",
        "name": "Jamie",
        "age": 33 
    }
]
```

（上面的 JSON 是 n8n 传入的示例输入数据，包含两个人：Alex 和 Jamie，每人有 email、name、age 三个字段。）

你可以这样写查询：

```sql
SELECT * FROM $1:name WHERE email = $2;
```

（`$1` 是表名占位符，`$2` 是邮箱值占位符。注意这里 `$1:name` 表示把 `$1` 当作标识符（表名）使用。）

然后在 **Query Parameters（查询参数）** 里提供要用的字段值。你可以提供固定值或表达式。这个例子中使用表达式，让节点依次从每个输入数据项中取出邮箱地址：

```js
// users is an example table name
{{ [ 'users', $json.email ] }} 
```

（这里 `users` 是示例表名，`$json.email` 会依次取每条输入数据里的 email 字段值。n8n 会把数组中的第一个元素当作表名，第二个元素当作 `$2` 的值传入查询。）

## 常见问题（Common issues）

常见问题或报错以及建议的解决办法，请参考[常见问题](common-issues.md)。
