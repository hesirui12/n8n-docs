---
title: Postgres 节点常见问题
description: >-
  n8n（工作流自动化平台）中 Postgres 节点的常见问题和解答文档。包含问题详情和
  建议的解决方案。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Postgres 节点常见问题
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.postgres/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.postgres/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.postgres/common-issues
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：这一页收集了用 Postgres 节点时最容易踩的几个坑和解决办法：怎么用查询参数动态拼 SQL 里的 `IN (...)` 列表、日期和时区怎么处理不乱套、日期列怎么只输出日期不输出时间。都是实用的小技巧，遇到问题先来这里翻翻。
{% endhint %}

# Postgres 节点常见问题

这里列出了 [Postgres 节点](README.md) 的一些常见报错和问题，以及排查/解决步骤。

## 用查询参数动态填充 SQL 的 `IN` 分组

在 Postgres 中，你可以使用 SQL 的 [`IN` 比较结构](https://www.postgresql.org/docs/current/functions-comparisons.html#FUNCTIONS-COMPARISONS-IN-SCALAR)对一组值进行比较：

```sql
SELECT color, shirt_size FROM shirts WHERE shirt_size IN ('small', 'medium', 'large');
```

（这句查询的意思是：从 shirts 表里选出颜色和尺码，条件是尺码在 'small'、'medium'、'large' 这三个值里面。）

虽然你可以直接在查询里用 n8n [表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)动态填充 `IN` 分组里的值，但把它和[查询参数](README.md#use-query-parameters)结合使用会更安全，因为查询参数会自动对输入进行消毒（sanitize）处理。

用查询参数构建 `IN` 分组查询的步骤：

1. 把 **Operation**（操作）设置为 **Execute Query**。
2. 在 **Options**（选项）里选择 **Query Parameters**（查询参数）。
3. 用表达式从输入数据里选一个数组。例如 `{{ $json.input_shirt_sizes }}`。
4. 在 **Query**（查询）参数里，用 `IN` 结构写查询，括号里先留空。例如：
	```sql
	SELECT color, shirt_size FROM shirts WHERE shirt_size IN ();
	```
5. 在 `IN` 括号里，用表达式根据查询参数数组的元素个数，动态生成从 1 开始编号的占位符（如 `$1`、`$2`、`$3`）。因为占位符变量是从 1 开始编号的，所以要把每个数组下标加 1：
	```sql
	SELECT color, shirt_size FROM shirts WHERE shirt_size IN ({{ $json.input_shirt_sizes.map((i, pos) => "$" + (pos+1)).join(', ') }});
	```

用这个技巧，n8n 会自动根据你的数组里有多少个元素，为 `IN` 的值生成正确数量的[预处理语句占位符（prepared statement placeholders）](https://www.postgresql.org/docs/current/sql-prepare.html)。

## 处理时间戳和时区

为了避免 n8n 和 Postgres 在解释时间戳和时区数据时出问题，请遵循以下通用建议：

- **存储和传递日期时使用 UTC**：在不同表示形式和系统之间转换日期时，使用 UTC 有助于避免时区转换带来的混乱。
- **设置执行时区**：在 n8n 中设置全局时区，自托管（self-hosted）用户可通过[环境变量](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/configuration-examples/set-the-timezone)设置，n8n Cloud 用户可在[设置](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/use-n8n-cloud/configure-cloud/set-your-timezone)中设置。你还可以在[工作流设置](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/manage-workflows/configure-workflow-settings)里为单个工作流设置时区。
- **使用 ISO 8601 格式**：[ISO 8601 格式](https://en.wikipedia.org/wiki/ISO_8601)用一个标准化的字符串同时编码日期（月、日、年）和时间（时、分、秒）。n8n 在节点之间以字符串形式传递日期，并使用 [Luxon](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/handle-special-data-types/work-with-dates-and-times) 解析日期。如果你需要显式地转为 ISO 8601 格式，可以使用 [Date & Time 节点](../../core-nodes/n8n-nodes-base.datetime.md)，并把自定义格式设置为字符串 `yyyy-MM-dd'T'HH:mm:ss`。

## 让 Date 列输出日期字符串而不是 ISO 日期时间字符串

n8n 使用 [`pg` 包](https://www.npmjs.com/package/pg)与 Postgres 集成，这会影响到 n8n 如何处理来自 Postgres 的日期、时间戳及相关类型。

`pg` 包默认会把 `DATE` 值解析为 `new Date(row_value)`，产出的日期遵循 [ISO 8601 日期时间字符串](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations)格式。例如，日期 `2025-12-25` 根据实例的时区设置，可能产出一个像 `2025-12-25T23:00:00.000Z` 这样的日期时间字符串。

解决办法：在查询时用 Postgres 的 [`TO_CHAR` 函数](https://www.postgresql.org/docs/current/functions-formatting.html#FUNCTIONS-FORMATTING)把日期格式化成你想要的格式：

```sql
SELECT TO_CHAR(date_col, 'YYYY-MM-DD') AS date_col_as_date FROM table_with_date_col
```

（这句查询把 date_col 列按 `YYYY-MM-DD` 的格式转成字符串，并另起名为 date_col_as_date 输出。）

这样产出的日期就是不带时间和时区部分的纯字符串。接着上面的例子，用这种方式转换后，日期 `2025-12-25` 会输出字符串 `2025-12-25`。更多信息可以参考 [`pg` 包关于日期的文档](https://node-postgres.com/features/types#date--timestamp--timestamptz)。
