---
title: Postgres 凭证
description: >-
  Postgres 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Postgres 的身份。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Postgres credentials
originalFilePath: integrations/builtin/credentials/postgres.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/postgres
url: https://docs.n8n.io/integrations/builtin/credentials/postgres
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# Postgres 凭证

{% hint style="info" %}
**大白话**：Postgres 是最流行的开源数据库之一。n8n 连它不靠密钥，而是用「数据库账号密码 + 服务器地址」直连。大部分场景填 **Host（服务器地址）、Database（数据库名）、User（用户名）、Password（密码）** 就够了；SSL、SSH 隧道这些是可选的高级项，数据库在公网上才需要操心。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Postgres](../app-nodes/n8n-nodes-base.postgres/README.md)
* [Agent（智能体）](../cluster-nodes/root-nodes/n8n-nodes-langchain.agent/README.md)
* [Postgres Chat Memory（聊天记忆）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.memorypostgreschat.md)
* [PGVector Vector Store（向量存储）](../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorepgvector.md)

{% hint style="info" %}
**Agent 节点用户**

Agent 节点不支持 SSH 隧道。
{% endhint %}

## 准备工作

在 Postgres 服务器上[创建一个用户账号](https://www.postgresql.org/docs/current/sql-createuser.html)。

## 支持的验证方式

* 数据库连接（Database connection）

## 相关资源

关于该服务的更多信息，请参考 [Postgres 官方文档](https://www.postgresql.org/docs/16/index.html)。

## 使用数据库连接

要配置这个凭证，你需要：

* 服务器的 **Host（主机地址）** 或域名。
* 数据库的 **Database（数据库名）**。
* 一个 **User（用户名）**。
* 用户的 **Password（密码）**。
* **Ignore SSL Issues（忽略 SSL 问题）**：设置 SSL 校验失败时凭证是否仍然连接。
* **SSL**：选择连接时是否使用 SSL。
* 连接使用的 **Port（端口号）**。
* **SSH Tunnel（SSH 隧道）**：选择是否使用 SSH 加密与 Postgres 服务器的网络连接。

配置数据库连接的步骤：

1. 输入 Postgres 服务器的 **Host（主机地址）** 或域名。你可以运行 `/conninfo` 命令确认主机名，也可以运行这条查询：

    ```
    SELECT inet_server_addr();
    ```
2. 输入 **Database（数据库名）**。运行 `/conninfo` 命令确认数据库名。
3. 输入你想以哪个用户连接，填 **User（用户名）**。
4. 输入该用户的 **Password（密码）**。
5. **Ignore SSL Issues（忽略 SSL 问题）**：如果打开这个开关，即使 SSL 校验失败，凭证也会照常连接。
6. **SSL**：选择连接时是否使用 SSL。更多说明请参考 Postgres [SSL 支持文档](https://www.postgresql.org/docs/16/libpq-ssl.html)。可选值包括：
   * **Allow（允许）**：把 `ssl-mode` 参数设为 `allow`。先尝试非 SSL 连接；如果失败，再尝试 SSL 连接。
   * **Disable（禁用）**：把 `ssl-mode` 参数设为 `disable`。只尝试非 SSL 连接。
   * **Require（要求）**：把 `ssl-mode` 参数设为 `require`。只尝试 SSL 连接。如果存在根 CA 文件，还会校验服务器证书是否由受信任的证书颁发机构（CA）签发。
7. 输入连接使用的 **Port（端口号）**。你可以运行 `/conninfo` 命令确认主机名，也可以运行这条查询：

    ```
    SELECT inet_server_port();
    ```
8. **SSH Tunnel（SSH 隧道）**：打开这个开关可以通过 SSH 连接数据库。关于使用 SSH 的一些指导，请参考 [SSH 隧道限制](#ssh-tunnel-limitations)。打开后，你需要：
   1. 选择 **SSH Authenticate with（SSH 验证方式）** 来设置要构建的 SSH 隧道类型：
      * 选择 **Password（密码）**：用密码通过 SSH 连接。
      * 选择 **Private Key（私钥）**：用身份文件（私钥）和口令（passphrase）通过 SSH 连接。
   2. 输入你要连接的远程绑定地址作为 **SSH Host（SSH 主机）**。
   3. **SSH Port（SSH 端口）**：输入 SSH 隧道的本地端口号。
   4. **SSH Postgres Port（SSH 下的 Postgres 端口）**：输入隧道的远端端口，即数据库服务器正在使用的端口号。
   5. **SSH User（SSH 用户）**：输入用于登录的用户名。
   6. 如果你在 **SSH Authenticate with** 里选择了 **Password（密码）**，填上该用户的 **SSH Password（SSH 密码）**。
   7. 如果你在 **SSH Authenticate with** 里选择了 **Private Key（私钥）**：
      1. 填入用于 SSH 的 **Private Key（私钥）** 或身份文件的内容。
      2. 如果这个 **Private Key** 创建时设置了口令（passphrase），输入该 **Passphrase（口令）**。如果私钥没有口令，这个字段留空。

更多说明请参考 [使用 SSH 隧道的安全 TCP/IP 连接](https://www.postgresql.org/docs/16/ssh-tunnels.html)。

### SSH 隧道限制

只有在以下情况才使用 **SSH Tunnel（SSH 隧道）** 设置：

* 你是在配合 [Postgres](../app-nodes/n8n-nodes-base.postgres/README.md) 节点使用这个凭证（Agent 节点不支持 SSH 隧道）。
* 你的 Postgres 服务器同一台机器上运行着 SSH 服务器。
* 你有一个可以用 `ssh` 登录的用户账号。
