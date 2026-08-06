---
title: Oracle Database 节点文档
description: >-
  学习如何在 n8n 中使用 Oracle Database 节点。按照技术
  文档将 Oracle Database 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: App nodes
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.oracledb/index.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.oracledb'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.oracledb'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Oracle Database（甲骨文数据库）是大型企业常用的商业关系型数据库。这个节点让你在 n8n 里直接对 Oracle 数据库执行 SQL 语句，以及增（Insert）、删（Delete）、改（Update）、查（Select）数据，甚至支持「插入或更新」这种省事的操作。节点内部用的是官方的 [node-oracledb 驱动](https://github.com/oracle/node-oracledb)。参数里支持用表达式（Expression）和「绑定变量」（bind parameter，如 `:1`、`:name`）来安全地传值，n8n 会自动处理转义，防止 SQL 注入。
{% endhint %}

# Oracle Database 节点

使用 Oracle Database 节点来自动化你在 Oracle Database 中的工作，并把它与其它应用集成。n8n 内置支持 Oracle Database 的大量功能，包括执行 SQL 语句，以及从 Oracle Database 中获取（fetch）、插入（insert）、更新（update）或删除（delete）数据。这个节点内部使用 [node-oracledb 驱动](https://github.com/oracle/node-oracledb)。

在本页你可以看到 Oracle Database 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
关于如何设置认证，请参考 [Oracle Database 凭证](../credentials/oracledb.md)。

需要 Oracle Database **19c 或更高版本**。
如需使用更高级的 Oracle Database 功能，如 Transparent Application Continuity (TAC) 和 Sharding（分片），还需要 Oracle Client Libraries **19c 或更高版本**。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作

* [**Delete（删除）**](#delete)：删除整张表或表中的某些行
* [**Execute SQL（执行 SQL）**](#execute-sql)：执行一条 SQL 语句
* [**Insert（插入）**](#insert)：向表中插入行
* [**Insert or Update（插入或更新）**](#insert-or-update)：向表中插入或更新行
* [**Select（查询）**](#select)：从表中查询行
* [**Update（更新）**](#update)：更新表中的行

### Delete（删除）

使用此操作删除整张表或表中的某些行。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择一个已有的 [Oracle Database 凭证](../credentials/oracledb.md)。
- **Operation（操作）**：选择 **Delete（删除）**。
- **Schema（模式）**：选择包含你要操作的表所在的 schema（模式/命名空间）。选择 **From list（从列表选择）** 从下拉列表中选，或 **By Name（按名称输入）** 手动输入 schema 名。
- **Table（表）**：选择你要操作的表。选择 **From list（从列表选择）** 从下拉列表中选，或选择 **By Name（按名称输入）** 手动输入表名。
- **Command（命令）**：要执行的删除动作：
	- **Truncate（清空）**：删除表中的数据，但保留表结构。
	- **Delete（删除）**：删除符合「Select Rows（选择行）」条件的行。如果你不设置任何条件，Oracle Database 会删除所有行。
		- **Select Rows（选择行）**：定义 **Column（列）**、**Operator（运算符）** 和 **Value（值）** 来匹配行。值可以通过表达式或字符串以 JSON 形式传入。
		- **Combine Conditions（条件组合方式）**：如何组合「Select Rows」中的条件。**AND** 要求所有条件都为真，**OR** 要求至少一个条件为真。
	- **Drop（删除表）**：永久删除表的数据和结构。

#### Delete 选项

- **Auto Commit（自动提交）**：当此属性设为 true 时，当前连接中的事务会在语句执行结束时自动提交。
- **Statement Batching（语句批处理方式）**：向数据库发送语句的方式：
	- **Single Statement（单条语句）**：对所有传入的数据项执行一条语句。
	- **Independently（独立执行）**：对每个传入的数据项各执行一条语句。
	- **Transaction（事务）**：在同一个事务中执行所有语句。如果发生失败，Oracle Database 会回滚所有更改。

### Execute SQL（执行 SQL）

使用此操作执行一条 SQL 语句。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择一个已有的 [Oracle Database 凭证](../credentials/oracledb.md)。
- **Operation（操作）**：选择 Execute SQL **Execute SQL（执行 SQL）**。
- **Statement（语句）**：要执行的 SQL 语句。你可以使用 n8n [表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes) 和位置参数（positional parameters，如 `:1`、`:2`）或命名参数（named parameters，如 `:name`、`:id`），配合 [使用绑定参数](#使用绑定参数) 使用。
要运行一个 PL/SQL 存储过程（例如 `demo`），你可以这样写：
```sql
BEGIN
  demo;
END;
```

#### Execute Statement 选项

- **Auto Commit（自动提交）**：当此属性设为 true 时，当前连接中的事务会在语句执行结束时自动提交。
- **Bind Variable Placeholder Values（绑定变量占位符的值）**：输入语句中绑定参数要用到的值（配合 [使用绑定参数](#使用绑定参数)）。
- **Output Numbers As String（把数字作为字符串输出）**：是否把数字作为字符串（String）获取。
- **Fetch Array Size（获取数组大小）**：一个数字属性，用来设置从 Oracle Database 获取查询行时使用的内部缓冲区大小。修改它可能影响查询性能，但不会影响返回给应用的记录行数。
- **Number of Rows to Prefetch（预取行数）**：一个查询调优选项，用来设置底层 Oracle 驱动在查询的初始内部执行阶段额外预取的记录行数。

### Insert（插入）

使用此操作向表中插入行。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择一个已有的 [Oracle Database 凭证](../credentials/oracledb.md)。
- **Operation（操作）**：选择 **Insert（插入）**。
- **Schema（模式）**：选择包含你要操作的表所在的 schema（模式/命名空间）。选择 **From list（从列表选择）** 从下拉列表中选，或 **By Name（按名称输入）** 手动输入 schema 名。
- **Table（表）**：选择你要操作的表。选择 **From list（从列表选择）** 从下拉列表中选，或选择 **By Name（按名称输入）** 手动输入表名。
- **Mapping Column Mode（列映射方式）**：如何把列名映射到传入的数据：
	- **Map Each Column Manually（手动映射每一列）**：为每一列选择要使用的值（配合 [为绑定值使用 n8n 表达式](#为绑定值使用-n8n-表达式)）。
	- **Map Automatically（自动映射）**：自动把传入数据映射到 Oracle Database 中同名的列。这要求传入数据的字段名必须与 Oracle Database 中的列名一致。如有必要，可以考虑在这个节点之前使用 [Edit Fields (Set) 节点（编辑字段/设置）](../core-nodes/n8n-nodes-base.set.md) 来调整数据格式。

#### Insert 选项

- **Auto Commit（自动提交）**：当此属性设为 true 时，当前连接中的事务会在语句执行结束时自动提交。
- **Output Columns（输出列）**：选择要输出的列。你可以从可用列列表中选择，或用 [表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes) 指定 ID。
- **Statement Batching（语句批处理方式）**：向数据库发送语句的方式：
	- **Single Statement（单条语句）**：对所有传入的数据项执行一条语句。
	- **Independently（独立执行）**：对每个传入的数据项各执行一条语句。
	- **Transaction（事务）**：在同一个事务中执行所有语句。如果发生失败，Oracle Database 会回滚所有更改。

### Insert or Update（插入或更新）

使用此操作向表中插入或更新行。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择一个已有的 [Oracle Database 凭证](../credentials/oracledb.md)。
- **Operation（操作）**：选择 **Insert or Update（插入或更新）**。
- **Schema（模式）**：选择包含你要操作的表所在的 schema（模式/命名空间）。选择 **From list（从列表选择）** 从下拉列表中选，或 **By Name（按名称输入）** 手动输入 schema 名。
- **Table（表）**：选择你要操作的表。选择 **From list（从列表选择）** 从下拉列表中选，或选择 **By Name（按名称输入）** 手动输入表名。
- **Mapping Column Mode（列映射方式）**：如何把列名映射到传入的数据：
	- **Map Each Column Manually（手动映射每一列）**：为每一列选择要使用的值（配合 [为绑定值使用 n8n 表达式](#为绑定值使用-n8n-表达式)）。
	- **Map Automatically（自动映射）**：自动把传入数据映射到 Oracle Database 中同名的列。这要求传入数据的字段名必须与 Oracle Database 中的列名一致。如有必要，可以考虑在这个节点之前使用 [Edit Fields (Set) 节点（编辑字段/设置）](../core-nodes/n8n-nodes-base.set.md) 来调整数据格式。

#### Insert or Update 选项

- **Auto Commit（自动提交）**：当此属性设为 true 时，当前连接中的事务会在语句执行结束时自动提交。
- **Output Columns（输出列）**：选择要输出的列。你可以从可用列列表中选择，或用 [表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes) 指定 ID。
- **Statement Batching（语句批处理方式）**：向数据库发送语句的方式：
	- **Single Statement（单条语句）**：对所有传入的数据项执行一条语句。
	- **Independently（独立执行）**：对每个传入的数据项各执行一条语句。
	- **Transaction（事务）**：在同一个事务中执行所有语句。如果发生失败，Oracle Database 会回滚所有更改。

### Select（查询）

使用此操作从表中查询行。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择一个已有的 [Oracle Database 凭证](../credentials/oracledb.md)。
- **Operation（操作）**：选择 **Select（查询）**。
- **Schema（模式）**：选择包含你要操作的表所在的 schema（模式/命名空间）。选择 **From list（从列表选择）** 从下拉列表中选，或 **By Name（按名称输入）** 手动输入 schema 名。
- **Table（表）**：选择你要操作的表。选择 **From list（从列表选择）** 从下拉列表中选，或选择 **By Name（按名称输入）** 手动输入表名。
- **Return All（返回全部）**：是否返回全部结果，还是只返回到某个上限。
- **Limit（数量限制）**：当 **Return All** 关闭时，最多返回的条目数量。
- **Select Rows（选择行）**：设置选择行的条件。定义 **Column（列）**、**Operator（运算符）** 和 **Value（值）**（以 `json` 形式）来匹配行。
**Value（值）** 可以根据类型而变化——例如使用 Fixed（固定值）模式时：
	- String（字符串）："hello"、hellowithoutquotes（不带引号的 hello）、"hello with space"（带空格的 hello）
	- Number（数字）：12
	- JSON：{ "key": "val" }

如果你不设置任何条件，Oracle Database 会查询所有行。
- **Combine Conditions（条件组合方式）**：如何组合 **Select Rows** 中的条件。**AND** 要求所有条件都为真，**OR** 要求至少一个条件为真。
- **Sort（排序）**：选择如何对查询结果排序。从列表或按 ID 选择一个 **Column（列）**，并选择排序 **Direction（方向）**。

#### Select 选项

- **Auto Commit（自动提交）**：当此属性设为 true 时，当前连接中的事务会在语句执行结束时自动提交。
- **Output Numbers As String（把数字作为字符串输出）**：是否把数字作为字符串（String）获取。
- **Fetch Array Size（获取数组大小）**：一个数字属性，用来设置从 Oracle Database 获取查询行时使用的内部缓冲区大小。修改它可能影响查询性能，但不会影响返回给应用的记录行数。
- **Number of Rows to Prefetch（预取行数）**：一个查询调优选项，用来设置底层 Oracle 驱动在查询的初始内部执行阶段额外预取的记录行数。

### Update（更新）

使用此操作更新表中的行。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择一个已有的 [Oracle Database 凭证](../credentials/oracledb.md)。
- **Operation（操作）**：选择 **Update（更新）**。
- **Schema（模式）**：选择包含你要操作的表所在的 schema（模式/命名空间）。选择 **From list（从列表选择）** 从下拉列表中选，或 **By Name（按名称输入）** 手动输入 schema 名。
- **Table（表）**：选择你要操作的表。选择 **From list（从列表选择）** 从下拉列表中选，或选择 **By Name（按名称输入）** 手动输入表名。
- **Mapping Column Mode（列映射方式）**：如何把列名映射到传入的数据：
	- **Map Each Column Manually（手动映射每一列）**：为每一列选择要使用的值（配合 [为绑定值使用 n8n 表达式](#为绑定值使用-n8n-表达式)）。
	- **Map Automatically（自动映射）**：自动把传入数据映射到 Oracle Database 中同名的列。这要求传入数据的字段名必须与 Oracle Database 中的列名一致。如有必要，可以考虑在这个节点之前使用 [Edit Fields (Set) 节点（编辑字段/设置）](../core-nodes/n8n-nodes-base.set.md) 来调整数据格式。

#### Update 选项

- **Auto Commit（自动提交）**：当此属性设为 true 时，当前连接中的事务会在语句执行结束时自动提交。
- **Output Columns（输出列）**：选择要输出的列。你可以从可用列列表中选择，或用 [表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes) 指定 ID。
- **Statement Batching（语句批处理方式）**：向数据库发送语句的方式：
	- **Single Statement（单条语句）**：对所有传入的数据项执行一条语句。
	- **Independently（独立执行）**：对每个传入的数据项各执行一条语句。
	- **Transaction（事务）**：在同一个事务中执行所有语句。如果发生失败，Oracle Database 会回滚所有更改。

## 相关资源

关于该服务的更多信息，请参考 [SQL 语言参考（SQL Language Reference）](https://www.oracle.com/pls/topic/lookup?ctx=dblatest&id=SQLRF)。

关于 node-oracledb 驱动的更多信息，请参考 [node-oracledb 文档](https://node-oracledb.readthedocs.io/en/latest/)。

## 使用绑定参数

当你在 Oracle 数据库实例上创建要运行的语句时，可以使用 **Options（选项）** 区域中的 **Bind Variable Placeholder Values（绑定变量占位符的值）** 字段把数据加载进语句。n8n 会对语句参数中的数据做净化处理，从而防止 SQL 注入。

举个例子，你想按颜色查找特定的水果。给定下面的输入数据：

```js
[
    {
        "FRUIT_ID": 1,
        "FRUIT_NAME": "Apple",
        "COLOR": "Red" 
    },
    {
        "FRUIT_ID": 2,
        "FRUIT_NAME": "Banana",
        "COLOR": "Yellow"
    }
]
```

你可以这样写一条语句：

```sql
SELECT * FROM FRUITS WHERE COLOR = :col
```

然后在 **Bind Variable Placeholder Values（绑定变量占位符的值）** 中提供要使用的字段值。你可以提供固定值或表达式。在这个例子中，使用表达式让节点能依次从每个输入条目中取出颜色：

```js
// fruits is an example table name
fruits, {{ $json.color }} 
```

## 为绑定值使用 n8n 表达式

对于 **Values to Send（要发送的值）**，你可以使用 n8n 表达式来提供输入。下面是针对不同数据类型的示例——你可以输入常量值，也可以引用前面条目中的字段（`$json`）：

### JSON
- 常量：`{{ { k1: "v1", k2: "v2" } }}`
- 来自上一条目：`{{ $json.COL_JSON }}`

### VECTOR（向量）
- 常量：`{{ [1, 2, 3, 4.5] }}`
- 来自上一条目：`{{ $json.COL_VECTOR }}`

### BLOB（二进制大对象）
- 常量：`{{ [94, 87, 34] }}` 或 `{{ ' BLOB data string' }}`
- 来自上一条目：`{{ $json.COL_BLOB }}`

### RAW（原始二进制）
- 常量：`{{ [94, 87, 34] }}`
- 来自上一条目：`{{ $json.COL_RAW }}`

### BOOLEAN（布尔值）
- 常量：`{{ true }}`
- 来自上一条目：`{{ $json.COL_BOOLEAN }}`

### NUMBER（数字）
- 常量：`1234`
- 来自上一条目：`{{ $json.COL_NUMBER }}`

## VARCHAR（变长字符串）
- 常量：`' Hello World '`
- 来自上一条目：`{{ $json.COL_CHAR }}`

这些示例假定 JSON 键（例如 `COL_JSON、COL_VECTOR`）直接对应对应的 SQL 列类型。
