---
title: 数据库（Database）环境变量
description: >-
  使用环境变量为自托管 n8n 实例设置和配置数据库。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 数据库（Database）
originalFilePath: hosting/configuration/environment-variables/database.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/database'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/database
layout:
  description:
    visible: false
---

# 数据库（Database）环境变量

{% hint style="info" %}
**大白话**：数据库是 n8n 存放工作流、凭据、执行记录等数据的地方。n8n 默认用 SQLite（一个文件即数据库，最简单），也可以换用 PostgreSQL（适合生产环境）。这一页教你如何通过环境变量切换和调优数据库。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

默认情况下，n8n 使用 SQLite。n8n 也支持 PostgreSQL。n8n 在 v1.0 中已[弃用对 MySQL 和 MariaDB 的支持](https://app.gitbook.com/s/hhM8Cox90Piiv0u0EgHM/v10-migration-guide#mysql-and-mariadb)。

本页列出了为自托管 n8n 实例配置所选数据库所需的环境变量。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `DB_TYPE`<br>/`_FILE` | Enum string:<br> `sqlite`, `postgresdb` | `sqlite` | 要使用的数据库。 |
| `DB_TABLE_PREFIX` | * | - | 表名的前缀。 |
| `DB_PING_INTERVAL_SECONDS` | Number | `2` | n8n 每隔多少秒 ping 一次数据库，检查连接是否还活着。 |
| `DB_PING_TIMEOUT_MS` | Number | `5000` | n8n 等待一次 ping 响应多长时间（毫秒），超过则记为失败。如果设置了已废弃的 `N8N_DB_PING_TIMEOUT`，则回退使用那个值。 |
| `DB_PING_MAX_FAILURES_BEFORE_RECOVERY` | Number | `3` | 连续失败多少次 ping 后，n8n 才认定连接已丢失并开始恢复流程。 |
| `DB_RECOVERY_BACKOFF_MIN_MS` | Number | `1000` | n8n 在首次恢复尝试前等待多久（毫秒）。每次重试的等待时间都会更长（指数退避）。 |
| `DB_RECOVERY_BACKOFF_MAX_MS` | Number | `30000` | n8n 在两次恢复尝试之间最长等待多久（毫秒）。这是退避时间的上限。必须大于或等于 `DB_RECOVERY_BACKOFF_MIN_MS`。 |
| `DB_CONNECTION_ACQUISITION_TIMEOUT_MS` | Number | `30000` | 恢复进行期间，一次查询最多等待多久（毫秒），超时则快速失败并报错。设为 `0` 表示无限期等待。仅适用于 PostgreSQL。 |

## PostgreSQL

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `DB_POSTGRESDB_DATABASE`<br>/`_FILE` | String | `n8n` | PostgreSQL 数据库的名称。 |
| `DB_POSTGRESDB_HOST`<br>/`_FILE` | String | `localhost` | PostgreSQL 的主机。 |
| `DB_POSTGRESDB_PORT`<br>/`_FILE` | Number | `5432` | PostgreSQL 的端口。 |
| `DB_POSTGRESDB_USER`<br>/`_FILE` | String | `postgres` | PostgreSQL 的用户名。 |
| `DB_POSTGRESDB_PASSWORD`<br>/`_FILE` | String | - | PostgreSQL 的密码。 |
| `DB_POSTGRESDB_POOL_SIZE`<br>/`_FILE` | Number | `2` | 控制 n8n 应保持多少个并行的 Postgres 连接。调大可能有助于提高资源利用率，但连接太多反而可能降低性能。 |
| `DB_POSTGRESDB_CONNECTION_TIMEOUT`<br>/`_FILE` | Number | `20000` | Postgres 连接超时时间（毫秒）。 |
| `DB_POSTGRESDB_IDLE_CONNECTION_TIMEOUT`<br>/`_FILE` | Number | `30000` | 空闲连接在因空闲被回收（驱逐）前可保持的时间。 |
| `DB_POSTGRESDB_MAX_CONNECTION_LIFETIME_MS`<br>/`_FILE` | Number | `3600000` | n8n 在回收一个连接池连接之前保留它的时长（毫秒）。回收旧连接有助于避免使用那些数据库或网络已断开、但 n8n 没察觉的「陈旧连接」。默认是一小时。设为 `0` 可禁用回收。 |
| `DB_POSTGRESDB_KEEP_ALIVE`<br>/`_FILE` | Boolean | `true` | 是否在连接上启用 TCP keep-alive（保活）。保活机制让 n8n 不用先跑一条查询就能发现连接已死。 |
| `DB_POSTGRESDB_KEEP_ALIVE_INITIAL_DELAY_MS`<br>/`_FILE` | Number | `10000` | n8n 在一条连接上发送第一个 TCP keep-alive 探测包之前等待多久（毫秒）。 |
| `DB_POSTGRESDB_SCHEMA`<br>/`_FILE` | String | `public` | PostgreSQL 的 schema（模式）。 |
| `DB_POSTGRESDB_SSL_ENABLED`<br>/`_FILE` | Boolean | `false` | 是否启用 SSL。如果 `DB_POSTGRESDB_SSL_CA`、`DB_POSTGRESDB_SSL_CERT` 或 `DB_POSTGRESDB_SSL_KEY` 被设为非空值，或者 `DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED` 被设为 `false`，则自动启用。 |
| `DB_POSTGRESDB_SSL_CA`<br>/`_FILE` | String | - | PostgreSQL 的 SSL 证书颁发机构（CA）。 |
| `DB_POSTGRESDB_SSL_CERT`<br>/`_FILE` | String | - | PostgreSQL 的 SSL 证书。 |
| `DB_POSTGRESDB_SSL_KEY`<br>/`_FILE` | String | - | PostgreSQL 的 SSL 密钥。 |
| `DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED`<br>/`_FILE` | Boolean | `true` | n8n 是否拒绝未经授权的 SSL 连接（true）或是不拒绝（false）。 |

## SQLite

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `DB_SQLITE_POOL_SIZE` | Number | `0` | 控制 SQLite 文件使用 [WAL 模式](https://www.sqlite.org/wal.html)还是[回滚日志模式](https://www.sqlite.org/lockingv3.html#rollback)。设为 0 时使用回滚日志模式。大于 0 时使用 WAL 模式，该值决定配置多少个并行的 SQL 读取连接。WAL 模式在性能和可靠性上都远优于回滚日志模式。 |
| `DB_SQLITE_VACUUM_ON_STARTUP` | Boolean | `false` | 启动时运行 [VACUUM](https://www.sqlite.org/lang_vacuum.html) 操作来重建数据库。可以减小文件大小并优化索引。这是一个耗时的阻塞式操作，会增加启动时间。 |

## 数据库连接恢复是如何工作的

n8n 会持续检查它是否仍然能连上你的数据库。如果连接断开（例如数据库重启或网络抖动之后），n8n 可以自行修复连接，而不是一直处于坏掉的状态，直到你重启 n8n。

本页变量控制的恢复循环如下：

1. 每隔 `DB_PING_INTERVAL_SECONDS`，n8n 发送一次 ping。每次 ping 有 `DB_PING_TIMEOUT_MS` 的时间等待响应。
2. 一旦 `DB_PING_MAX_FAILURES_BEFORE_RECOVERY` 次 ping 连续失败，n8n 就认定连接已丢失。
3. n8n 随即重建连接，重试之间的等待时间逐渐变长：从 `DB_RECOVERY_BACKOFF_MIN_MS` 开始，且永远不会超过 `DB_RECOVERY_BACKOFF_MAX_MS`。
4. 在 PostgreSQL 上，恢复进行期间，任何新查询最多等待 `DB_CONNECTION_ACQUISITION_TIMEOUT_MS` 让连接恢复，超时后以错误结束，而不是一直挂起。

{% hint style="info" %}
**适用于所有数据库**

健康检查和恢复循环（`DB_PING_*` 和 `DB_RECOVERY_BACKOFF_*` 变量）适用于所有数据库类型。
其余设置（`DB_CONNECTION_ACQUISITION_TIMEOUT_MS`、`DB_POSTGRESDB_MAX_CONNECTION_LIFETIME_MS`、`DB_POSTGRESDB_KEEP_ALIVE` 和 `DB_POSTGRESDB_KEEP_ALIVE_INITIAL_DELAY_MS`）仅适用于 PostgreSQL。默认值适合大多数部署场景，除非你遇到连接问题，否则可以保持默认不变。
{% endhint %}
