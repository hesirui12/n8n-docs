---
title: TimescaleDB 凭证
description: >-
  TimescaleDB 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  TimescaleDB 的身份。
contentType:
  - integration
  - reference
nodeTitle: TimescaleDB credentials
originalFilePath: integrations/builtin/credentials/timescaledb.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/timescaledb'
url: 'https://docs.n8n.io/integrations/builtin/credentials/timescaledb'
layout:
  description:
    visible: false
---

# TimescaleDB 凭证

{% hint style="info" %}
**大白话**：TimescaleDB 是专门为「时间序列数据」（比如传感器、监控指标这类带时间戳的数据）优化过的数据库，基于 PostgreSQL。n8n 连它填的是数据库连接信息：服务器地址（**Host**）、**Database（数据库名）**、**User（用户名）**、**Password（密码）** 和**端口**。**SSL** 选项控制连接是否加密：默认是 **Require（要求加密）**，本地开发时也可以选 **Disable（关闭）**。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [TimescaleDB](../app-nodes/n8n-nodes-base.timescaledb.md)

## 先决条件

一个可用的 [TimescaleDB](https://www.timescale.com/) 实例。

## 支持的验证方式

- Database connection（数据库连接）

## 相关资源

关于该服务的更多信息，请参考 [Timescale 官方文档](https://docs.timescale.com/)。

## 使用数据库连接

要配置这个凭证，你需要：

- **Host（主机）**：你的 TimescaleDB 服务器的完整主机名或 IP 地址。
- **Database（数据库）**：要连接的数据库名称。
- **User（用户名）**：你想用哪个用户名登录。
- **Password（密码）**：填写你要连接的数据库用户的密码。
- **Ignore SSL Issues（忽略 SSL 问题）**：开启后，即使 SSL 证书校验失败，n8n 也会照常连接，而且你不会看到 **SSL** 选择器。
- **SSL**：这个设置控制连接的 `ssl-mode` 连接字符串。选项包括：
    - **Allow（允许）**：把 `ssl-mode` 参数设为 `allow`。先尝试非 SSL 连接；失败后再尝试 SSL 连接。
    - **Disable（禁用）**：把 `ssl-mode` 参数设为 `disable`。只尝试非 SSL 连接。
    - **Require（要求）**：把 `ssl-mode` 参数设为 `require`，这是 TimescaleDB 连接字符串的默认值。只尝试 SSL 连接。如果存在根 CA 证书文件，还会验证服务器证书是否由受信任的证书颁发机构（CA）签发。
- **Port（端口）**：TimescaleDB 服务器的端口号。

关于非 SSL 字段的更多信息，请参考 [Timescale 连接设置文档](https://docs.tigerdata.com/integrations/latest/find-connection-details/)。关于 SSL 选项的更多信息，请参考[使用更严格的 SSL 连接](https://docs.tigerdata.com/use-timescale/latest/security/strict-ssl/)。
