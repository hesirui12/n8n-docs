---
title: QuestDB 凭证
description: >-
  QuestDB 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  QuestDB 的身份。
contentType:
  - integration
  - reference
nodeTitle: QuestDB credentials
originalFilePath: integrations/builtin/credentials/questdb.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/questdb'
url: 'https://docs.n8n.io/integrations/builtin/credentials/questdb'
layout:
  description:
    visible: false
---

# QuestDB 凭证

{% hint style="info" %}
**大白话**：QuestDB 是一个「高性能时序数据库」，专为海量时间序列数据（比如股价、传感器、交易流水）设计。n8n 连它走的是数据库直连：填服务器 **Host（地址）**、**Database（数据库名）**、**User（用户名）**、**Password（密码）** 和 **Port（端口，默认 8812）**，SSL 按需开关即可。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [QuestDB](../app-nodes/n8n-nodes-base.questdb.md)

## 准备工作

在某台 [QuestDB](https://questdb.io/) 实例上创建一个用户账号。

## 支持的验证方式

- 数据库连接（Database connection）

## 相关资源

关于该服务的更多信息，请参考 [QuestDB 官方文档](https://questdb.io/docs)。

## 使用数据库连接

要配置这个凭证，你需要准备：

- **Host（主机地址）**：填写服务器的 hostname（主机名）或 IP 地址。
- **Database（数据库名）**：填写数据库名称，比如 `qdb`。
- **User（用户名）**：填写用户账号的用户名，该账号在 `server.conf` 文件的 `pg.user` 或 `pg.readonly.user` 属性里配置。默认值是 `admin`。
- **Password（密码）**：填写用户账号的密码，该密码在 `server.conf` 文件的 `pg.password` 或 `pg.readonly.password` 属性里配置。默认值是 `quest`。
- **SSL**：选择连接时是否使用 SSL，这对应设置 `sslmode` 参数。可选值包括：
    - **Allow（允许）**
    - **Disable（禁用）**
    - **Require（要求）**
- **Port（端口号）**：填写连接使用的端口号。默认是 `8812`。

更多说明请参考[支持的连接属性列表](https://questdb.io/docs/reference/api/postgres/#list-of-supported-connection-properties)文档。
