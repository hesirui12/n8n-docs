---
title: Snowflake 凭证
description: >-
  Snowflake 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来验证
  Snowflake。
contentType:
  - integration
  - reference
nodeTitle: Snowflake 凭证
originalFilePath: integrations/builtin/credentials/snowflake.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/snowflake'
url: 'https://docs.n8n.io/integrations/builtin/credentials/snowflake'
layout:
  description:
    visible: false
---

# Snowflake 凭证

> **大白话**：Snowflake 是一个云端数据仓库，专门用来存海量数据、跑 SQL 分析。这篇文档教你怎么在 n8n 里配置凭证：**两种认证方式**——简单直接的「密码认证」和更安全的「密钥对认证」。不管哪种方式，都要填账号、数据库、数据仓库、Schema 和 Role 这几个公共字段。第一次接触的话，用密码认证最快上手。

你可以使用这些凭证来验证以下节点：

- [Snowflake](../app-nodes/n8n-nodes-base.snowflake.md)

## 前置条件

创建一个 [Snowflake](https://www.snowflake.com/en/) 账号。

## 支持的认证方式

- [密码认证（Password）](#using-password-authentication)
- [密钥对认证（Key-pair）](#using-key-pair-authentication)

## 相关资源

关于该服务的更多信息，请参阅 [Snowflake 的 API 文档](https://docs.snowflake.com/en/api-reference) 和 [SQL 命令参考](https://docs.snowflake.com/en/sql-reference-commands)。

## 公共配置字段

两种认证方式都需要填写以下字段：

- **Account（账号）** 名：你的账号名是 Snowflake 网址中 `https://` 和 `snowflakecomputing.com` 之间的字符串。例如，如果你的 Snowflake 账号网址是 `https://abc.eu-central-1.snowflakecomputing.com`，那么账号名就是 `abc.eu-central-1`。
- **Database（数据库）**：输入凭证要连接的[数据库](https://docs.snowflake.com/en/sql-reference/sql/use-database)名称。
- **Warehouse（数据仓库）**：输入连接后会话要使用的默认虚拟[数据仓库](https://docs.snowflake.com/en/sql-reference/sql/use-warehouse)名称。n8n 会用这个数据仓库来执行查询、加载数据等操作。
- **Schema（模式）**：输入连接后你想要使用的[模式](https://docs.snowflake.com/en/sql-reference/sql/use-schema)。
- **Role（角色）**：输入连接后你想要使用的安全[角色](https://docs.snowflake.com/en/sql-reference/sql/use-role)。
- **Client Session Keep Alive（客户端会话保持活跃）**：默认情况下，客户端连接在最近一次查询执行后三到四个小时就会超时。打开这个设置会把 `clientSessionKeepAlive` 参数设为 true：即使连接没有执行任何查询，服务器也会让客户端的连接无限期保持。

关于这些设置的更多信息，请参阅 [会话命令](https://docs.snowflake.com/en/sql-reference/commands-session)。

## 使用密码认证

除了[公共配置字段](#common-configuration-fields)外，密码认证还需要：

- **Username（用户名）**
- **Password（密码）**

## 使用密钥对认证

密钥对认证作为密码认证的替代方案，提供了更强的安全性。这种方法使用一对公钥-私钥进行认证。

除了[公共配置字段](#common-configuration-fields)外，密钥对认证还需要：

- **Username（用户名）**：分配了公钥的那个 Snowflake 用户。
- **Private Key（私钥）**：PEM 格式（PKCS#8）的私钥。这应该是私钥文件的完整内容，包括 `-----BEGIN ENCRYPTED PRIVATE KEY-----` 和 `-----END ENCRYPTED PRIVATE KEY-----` 分隔符（未加密的密钥则用 `-----BEGIN PRIVATE KEY-----` 和 `-----END PRIVATE KEY-----`）。
- **Passphrase（口令）**（可选）：如果你的私钥已加密，请输入用于加密它的口令。如果使用未加密的私钥，此字段留空。

关于生成和配置密钥对的更多信息，请参阅 [Snowflake 的密钥对认证文档](https://docs.snowflake.com/en/user-guide/key-pair-auth)。
