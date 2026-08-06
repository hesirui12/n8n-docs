---
title: MongoDB 凭证
description: >-
  MongoDB 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  MongoDB 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: MongoDB credentials
originalFilePath: integrations/builtin/credentials/mongodb.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/mongodb'
url: 'https://docs.n8n.io/integrations/builtin/credentials/mongodb'
layout:
  description:
    visible: false
---

# MongoDB 凭证

{% hint style="info" %}
**大白话**：MongoDB 是现在非常流行的「文档型」数据库（数据存成 JSON 一样的格式，不像 MySQL 那样有固定表格）。n8n 想读写你的 MongoDB 数据库，有两种填法：**Connection string（连接串）**——把一长串带账号密码的网址直接粘进来（推荐，简单）；**Values（逐个填写）**——分别填主机地址、数据库名、用户名、密码、端口。两个方式都要注意：如果开了 TLS 加密，还得上传几张 x.509 证书文件。另外，如果用的是 MongoDB Atlas 云版，别忘了把 n8n 的 IP 地址加进白名单，否则连不上。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [MongoDB](../app-nodes/n8n-nodes-base.mongodb.md)
- [MongoDB Atlas Vector Store](../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoremongodbatlas.md)
- [MongoDB Chat Memory](../cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymongochat.md)

## 准备工作

- 在一台 [MongoDB](https://www.mongodb.com/) 服务器上创建一个拥有合适权限的用户账号。
- 如果你是项目所有者（Project Owner），需要把全部 [n8n IP 地址](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/use-n8n-cloud/configure-cloud/find-your-ip-addresses) 添加到项目 **Network Access（网络访问）** 的 IP Access List Entries（IP 访问列表条目）里。详细步骤请参考 [Add IP Access List entries（添加 IP 访问列表条目）](https://www.mongodb.com/docs/atlas/security/ip-access-list/#add-ip-access-list-entries)。

如果你是从零开始搭建 MongoDB，需要先创建一个集群（cluster）和一个数据库。更详细的步骤请参考 [MongoDB Atlas 文档](https://www.mongodb.com/docs/atlas/)。

## 支持的验证方式

- Database connection - Connection string（数据库连接 - 连接串）
- Database connection - Values（数据库连接 - 逐个填写）

## 相关资源

关于该服务的更多信息，请参考 [MongoDB Atlas 文档](https://www.mongodb.com/docs/atlas/)。

## 使用数据库连接 - Connection string（连接串）

要配置这个凭证，你需要满足上面的 [准备工作](#准备工作)。然后：

1. 在 **Configuration Type（配置类型）** 里选择 **Connection String（连接串）**。
2. 输入你的 MongoDB **Connection String（连接串）**。在 MongoDB 里获取连接串：进入 **Database > Connect（数据库 > 连接）**。
    1. 选择 **Drivers（驱动程序）**。
    2. 复制 **Add your connection string into your application code（把连接串添加到你的应用代码中）** 里显示的代码，大概长这样：`mongodb+srv://yourName:yourPassword@clusterName.mongodb.net/?retryWrites=true&w=majority`。
    3. 把连接串里的 `<password>` 和 `<username>` 替换成你要用的数据库用户的账号密码。
    4. 把这个连接串填进 n8n。
    5. 关于如何查找和格式化连接串，请参考 [Connection String（连接串）](https://www.mongodb.com/docs/manual/reference/connection-string/)。
3. 输入你的 **Database（数据库）** 名称。这是你在连接串里填的那个用户要登录的数据库名。
4. 选择是否 **Use TLS（使用 TLS 加密）**：打开后即使用 TLS。你的 MongoDB 数据库必须配置了 TLS，并且生成了 x.509 证书。然后在 n8n 里填写这些证书字段：
    - **CA Certificate（CA 证书）**
    - **Public Client Certificate（公共客户端证书）**
    - **Private Client Key（私有客户端密钥）**
    - **Passphrase（密码短语）**

关于 x.509 证书的更多信息，请参考 [MongoDB 的 x.509 文档](https://www.mongodb.com/docs/manual/core/security-x.509/#std-label-client-x509-certificates-requirements)。

## 使用数据库连接 - Values（逐个填写）

要配置这个凭证，你需要满足上面的 [准备工作](#准备工作)。然后：

1. 在 **Configuration Type（配置类型）** 里选择 **Values（逐个填写）**。
2. 输入数据库的 **Host（主机）** 名称或地址。
3. 输入 **Database（数据库）** 名称。
4. 输入你要登录的 **User（用户名）**。
5. 输入该用户的 **Password（密码）**。
6. 输入要连接的 **Port（端口）**。这是你的服务器用来监听传入连接的端口号。
7. 选择是否 **Use TLS（使用 TLS 加密）**：打开后即使用 TLS。你的 MongoDB 数据库必须配置了 TLS，并且生成了 x.509 证书。然后在 n8n 里填写这些证书字段：
    - **CA Certificate（CA 证书）**
    - **Public Client Certificate（公共客户端证书）**
    - **Private Client Key（私有客户端密钥）**
    - **Passphrase（密码短语）**

关于 x.509 证书的更多信息，请参考 [MongoDB 的 x.509 文档](https://www.mongodb.com/docs/manual/core/security-x.509/#std-label-client-x509-certificates-requirements)。
