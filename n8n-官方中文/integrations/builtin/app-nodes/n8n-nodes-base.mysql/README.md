---
title: MySQL 节点文档
description: >-
  学习如何在 n8n 中使用 MySQL 节点。按照技术文档将 MySQL
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: n8n-nodes-base.mysql
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.mysql/index.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mysql'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mysql'
layout:
  description:
    visible: false
---

# MySQL 节点

> 💡 **大白话**：MySQL 是最常用的「关系型数据库」之一，数据存在表格里。用这个节点，你可以让 n8n 直接对 MySQL 执行 SQL 语句，以及往表里插入、更新、删除、查询数据，比如「网页表单提交后自动存进 MySQL 数据库」。

使用 MySQL 节点来自动化你在 MySQL 中的工作，并把它与其它应用集成。n8n 内置支持 MySQL 的大量功能，包括执行 SQL 查询，以及向数据库插入和更新行。

在本页你可以看到 MySQL 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [MySQL 凭证](../../credentials/mysql.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作（Operations）

* Delete（删除）
* Execute SQL（执行 SQL）
* Insert（插入）
* Insert or Update（插入或更新）
* Select（查询）
* Update（更新）

## 模板与示例（Templates and examples）

[浏览 n8n-nodes-base.mysql 集成模板](https://n8n.io/integrations/mysql)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [MySQL 的 Connectors and APIs 文档](https://dev.mysql.com/doc/index-connectors.html)。

关于如何编写 SQL 查询，请参考 MySQL 的 [SELECT 语句文档](https://dev.mysql.com/doc/refman/8.4/en/select.html)。

## 使用查询参数（Query Parameters）

当你在 MySQL 数据库上创建要执行的查询时，可以使用 **Options（选项）** 部分中的 **Query Parameters（查询参数）** 字段把数据传入查询。n8n 会对查询参数中的数据进行消毒处理（sanitize），从而防止 SQL 注入攻击。

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

（`$1:name` 表示用参数 1 指定表名，`$2` 表示用参数 2 填入邮箱地址的值。）

然后在 **Query Parameters（查询参数）** 中提供要使用的字段值。你可以提供固定值或表达式。在本例中，使用表达式，让节点依次从每个输入条目中取出邮箱地址：

```js
// users is an example table name
users, {{ $json.email }} 
```

（上面这行表示：第一个参数是表名 `users`，第二个参数用表达式 `{{ $json.email }}` 从当前条目的 email 字段取值。注意 `// users is an example table name` 是代码注释，说明 `users` 只是一个示例表名。）

## 常见问题（Common issues）

关于常见错误或问题以及建议的解决步骤，请参考 [常见问题](common-issues.md)。
