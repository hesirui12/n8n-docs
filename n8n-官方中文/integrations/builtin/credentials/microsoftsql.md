---
title: Microsoft SQL 凭证
description: >-
  Microsoft SQL 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Microsoft SQL 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Microsoft SQL credentials
originalFilePath: integrations/builtin/credentials/microsoftsql.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/microsoftsql'
url: 'https://docs.n8n.io/integrations/builtin/credentials/microsoftsql'
layout:
  description:
    visible: false
---

# Microsoft SQL 凭证

> **大白话**：想用 n8n 连 SQL Server 数据库，就把服务器的名字、数据库名、用户名、密码、端口等连接信息填进来。比较常见的坑有两个：默认端口是 1433，超时时间要按毫秒填（SQL Server 里默认是秒，记得换算）。

你可以使用这些凭证来验证以下节点的身份：

- [Microsoft SQL](../app-nodes/n8n-nodes-base.microsoftsql.md)

## 前提条件

在一个 [Microsoft SQL server](https://learn.microsoft.com/en-us/sql/sql-server/what-is-sql-server) 数据库上创建一个用户账号。

## 支持的认证方式

- SQL database connection（SQL 数据库连接）

## 相关资源

关于如何连接到该服务的更多信息，请参考 [Microsoft 的连接 SQL Server 文档](https://learn.microsoft.com/en-us/sql/sql-server/connect-to-database-engine?view=sql-server-ver16&tabs=sqldb#connect-to-sql-server)。

## 使用 SQL database connection（SQL 数据库连接）

要配置这个凭证，你需要：

- **Server**（服务器）名称
- **Database**（数据库）名称
- 你的 **User**（用户）账号/ID
- 你的 **Password**（密码）
- 连接使用的 **Port**（端口）
- **Domain**（域名）名称
- 是否使用 **TLS**
- 是否 **Ignore SSL Issues**（忽略 SSL 问题）
- **Connect Timeout**（连接超时）
- **Request Timeout**（请求超时）
- 连接使用的 **TDS Version**（TDS 版本）

设置数据库连接的步骤：

1. 把 SQL Server 的主机名填入 **Server**（服务器）。在已有的 SQL Server 连接中，主机名位于实例名之前，格式为 `HOSTNAME\INSTANCENAME`。查找主机名的方法：
    - 在 **Object Explorer**（对象资源管理器）窗格中，数据库的顶层对象就是主机名。
    - 在查询窗口的底部状态栏中查看。
    - 查看当前连接的 **Properties**（属性），查找 **Name** 或 **Display Name**。
    - 更多信息请参考[查找 SQL Server 实例名（已连接 SQL Server 时）](https://learn.microsoft.com/en-us/sql/ssms/tutorials/ssms-tricks?view=sql-server-ver16#when-youre-connected-to-sql-server)。你也可以在[错误日志](https://learn.microsoft.com/en-us/sql/ssms/tutorials/ssms-tricks?view=sql-server-ver16#before-you-connect-to-sql-server)中找到这些信息。
2. 把 SQL Server 的实例名填入 **Database**（数据库）名称。查找方法与上面找主机名的方法相同。
    - 如果这些地方都找不到实例名，说明你的数据库用的是默认实例名 `MSSQLSERVER`。
3. 输入你的 **User**（用户）账号名或 ID。
4. 输入你的 **Password**（密码）。
5. 关于 **Port**（端口）：
    - SQL Server 默认端口是 `1433`。
    - 如果通过 1433 端口连不上，请查看[错误日志](https://learn.microsoft.com/en-us/sql/ssms/tutorials/ssms-tricks?view=sql-server-ver16#before-you-connect-to-sql-server)中 `Server is listening on` 这样的字样，来确认应该填哪个端口。
6. 只有当多个域的用户访问你的数据库时才需要填 **Domain**（域名）。运行下面这条 SQL 查询来获取域名：

    ```sql
    SELECT DEFAULT_DOMAIN()[DomainName];
    ```

7. 选择是否使用 **TLS**。
8. 选择是否 **Ignore SSL Issues**（忽略 SSL 问题）：如果打开，即使 SSL 证书校验失败，凭证也会照常连接。
9. 在 **Connect Timeout**（连接超时）中输入 n8n 在断开前应尝试完成初始连接的毫秒数。更多信息请参考 [SqlConnection.ConnectionTimeout 属性文档](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection.connectiontimeout)。
    - SQL Server 把这个超时存为秒，而 n8n 存为毫秒。如果你要照搬 SQL Server 里的默认值，请先乘以 100 再填。
10. 在 **Request Timeout**（请求超时）中输入 n8n 在超时前应等待某个请求完成的毫秒数。这基本上就是一个查询超时参数。更多信息请参考[排查查询超时错误](https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/performance/troubleshoot-query-timeouts#explanation)。
11. 从 **TDS Version**（TDS 版本）下拉框中选择要使用的 Tabular Data Stream（TDS，表格数据流）协议。如果你选择的版本服务器不支持，连接会自动协商使用另一个备选版本。关于不同 TDS 版本与不同 SQL Server 版本及 .NET 框架兼容性的详细说明，请参考[附录 A：产品行为](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-tds/135d0ebe-5c4c-4a94-99bf-1811eccb9f4a)。选项包括：
    - **7_4 (SQL Server 2012 ~ 2019)**：TDS 版本 7.4。
    - **7_3_B (SQL Server 2008R2)**：TDS 版本 7.3.B。
    - **7_3_A (SQL Server 2008)**：TDS 版本 7.3.A。
    - **7_2 (SQL Server 2005)**：TDS 版本 7.2。
    - **7_1 (SQL Server 2000)**：TDS 版本 7.1。
