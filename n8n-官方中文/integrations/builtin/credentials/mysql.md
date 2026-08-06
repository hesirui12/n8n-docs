---
title: MySQL 凭证
contentType:
  - integration
  - reference
priority: high
nodeTitle: MySQL credentials
originalFilePath: integrations/builtin/credentials/mysql.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/mysql
url: https://docs.n8n.io/integrations/builtin/credentials/mysql
description: >-
  MySQL 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  MySQL 的身份。
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

# MySQL 凭证

{% hint style="info" %}
**大白话**：MySQL 是最常用的开源关系型数据库。n8n 想读写你的 MySQL 数据库，就要填数据库的连接信息：**Host（服务器地址）**、**Database（数据库名）**、**User（用户名）**、**Password（密码）**、**Port（端口，默认 3306）**。如果你想确认服务器地址、数据库名这些信息，文档里给了几条现成的 SQL 查询命令，复制到 MySQL 里跑一下就能看到。另外两个进阶选项：**SSL**（加密传输，需要上传证书文件）；**SSH Tunnel（SSH 隧道）**（如果数据库藏在防火墙后面、不能直接连，就通过一台跳板机中转——填 SSH 主机的地址、端口、用户名和密码/私钥）。注意：Agent 节点不支持 SSH 隧道。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [MySQL](../app-nodes/n8n-nodes-base.mysql/README.md)
* [Agent](../cluster-nodes/root-nodes/n8n-nodes-langchain.agent/README.md)

{% hint style="info" %}
**Agent 节点用户请注意**

Agent 节点不支持 SSH 隧道。
{% endhint %}

## 准备工作

在一台 [MySQL](https://www.mysql.com/) 服务器的数据库上创建一个用户账号。

## 支持的验证方式

* Database connection（数据库连接）

## 相关资源

关于该服务的更多信息，请参考 [MySQL 官方文档](https://dev.mysql.com/doc/refman/8.3/en/)。

## 使用数据库连接

要配置这个凭证，你需要准备：

* 服务器 **Host（地址）**：数据库的主机名或 IP 地址。
* **Database（数据库）** 名称。
* **User（用户名）**。
* 该用户的 **Password（密码）**。
* MySQL 服务器使用的 **Port（端口）** 号。
* **Connect Timeout（连接超时）**：数据库初始连接时的超时毫秒数。
* **SSL**：如果你的数据库使用了 SSL，请打开并填写 SSL 证书的详细信息。
* **SSH Tunnel（SSH 隧道）**：选择是否通过 SSH 隧道连接。SSH 隧道可以让未加密的流量在加密连接中传输，还能让被防火墙保护、无法从外部直接连接的服务器获得授权远程访问。

设置数据库连接凭证的步骤：

1. 在 n8n 凭证里，把你的数据库主机名填为 **Host（地址）**。运行下面这条查询可以确认主机名：

    ```
    SHOW VARIABLES WHERE Variable_name = 'hostname';
    ```
2. 在 n8n 凭证里，把你的数据库名称填为 **Database（数据库名）**。运行下面这条查询可以确认数据库名：

    ```
    SHOW DATABASES;
    ```
3. 输入数据库中一个 **User（用户）** 的用户名。这个用户需要有适当的权限，才能执行你想让 n8n 做的操作。
4. 输入该用户的 **Password（密码）**。
5. 输入 MySQL 服务器使用的 **Port（端口）** 号（默认是 `3306`）。运行下面这条查询可以确认端口号：

    ```
    SHOW VARIABLES WHERE Variable_name = 'port';
    ```
6. 输入你希望节点使用的 **Connect Timeout（连接超时）**。Connect Timeout 是节点在数据库初始连接时等待的毫秒数，超过就超时。n8n 默认是 `10000`，也就是 MySQL 默认的 10 秒。如果你想和数据库的 `connect_timeout` 设置保持一致，运行下面这条查询获取该值，再乘以 1000 填进 n8n：

    ```
    SHOW VARIABLES WHERE Variable_name = 'connect_timeout';
    ```
7. 如果你的数据库使用了 SSL，并且你希望连接也使用 **SSL**，请在凭证里打开这个选项。打开后，把你 MySQL SSL 证书的信息填到这些字段里：
   1. 把 `ca.pem` 文件的内容填进 **CA Certificate（CA 证书）** 字段。
   2. 把 `client-key.pem` 文件的内容填进 **Client Private Key（客户端私有密钥）** 字段。
   3. 把 `client-cert.pem` 文件的内容填进 **Client Certificate（客户端证书）** 字段。
8. 如果你希望连接使用 **SSH Tunnel（SSH 隧道）**，请在凭证里打开这个选项。否则跳过。如果打开：
   1. 选择 **SSH Authenticate with（SSH 验证方式）** 来设置要构建的 SSH 隧道类型：
      * 想用密码连接 SSH，选择 **Password（密码）**。
      * 想用身份文件（私钥）加密码短语连接 SSH，选择 **Private Key（私钥）**。
   2. 输入 **SSH Host（SSH 主机）**。n8n 用这个主机来构建 SSH URI，格式为：`[user@]host:port`。
   3. 输入 **SSH Port（SSH 端口）**。n8n 用这个端口来构建 SSH URI，格式为：`[user@]host:port`。
   4. 输入要连接的 **SSH User（SSH 用户）**。n8n 用这个用户来构建 SSH URI，格式为：`[user@]host:port`。
   5. 如果你在 **SSH Authenticate with（SSH 验证方式）** 里选择了 **Password（密码）**，填上 **SSH Password（SSH 密码）**。
   6. 如果你在 **SSH Authenticate with（SSH 验证方式）** 里选择了 **Private Key（私钥）**：
      1. 填入用于 SSH 的 **Private Key（私钥）** 或身份文件的内容。这等同于在 MySQL 中使用 `shell-connect()` 命令时的 `ssh-identity-file` 选项。
      2. 如果 **Private Key（私钥）** 创建时带有密码短语，输入这个 **Passphrase（密码短语）**。这等同于在 MySQL 中使用 `shell-connect()` 命令时的 `ssh-identity-pass` 选项。如果 **Private Key（私钥）** 没有密码短语，这个字段留空。

关于在 MySQL 中使用 SSL 证书的更多信息，请参考 [MySQL | Creating SSL and RSA Certificates and Keys（创建 SSL 和 RSA 证书与密钥）](https://dev.mysql.com/doc/refman/8.0/en/creating-ssl-rsa-files.html)。关于在 MySQL 中使用 SSH 隧道的更多信息，请参考 [MySQL | Using an SSH Tunnel（使用 SSH 隧道）](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-connection-ssh.html)。
