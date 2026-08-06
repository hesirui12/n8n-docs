---
title: Redis 凭证
description: >-
  Redis 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Redis 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Redis credentials
originalFilePath: integrations/builtin/credentials/redis.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/redis'
url: 'https://docs.n8n.io/integrations/builtin/credentials/redis'
layout:
  description:
    visible: false
---

# Redis 凭证

{% hint style="info" %}
**大白话**：Redis 是超常用的「内存数据库/缓存」，也常被 AI 应用用来存聊天记忆、做向量存储。n8n 连它是数据库直连：填 **Password（密码）**、**Host（地址，默认 localhost）**、**Port（端口，默认 6379）**、**Database Number（数据库编号，默认 0）**，SSL 按需开。开了 SSL 还可以选择关掉 TLS 证书校验（用自签名证书时才需要，会降低安全性）。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Redis](../app-nodes/n8n-nodes-base.redis.md)
- [Redis Chat Memory（聊天记忆）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryredischat.md)
- [Redis Vector Store（向量存储）](../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreredis.md)

## 支持的验证方式

- 数据库连接（Database connection）

## 相关资源

关于该服务的更多信息，请参考 [Redis 开发者文档](https://redis.readthedocs.io/en/stable/index.html)。

## 使用数据库连接

你需要在一台 [Redis](https://redis.io/) 服务器上有一个用户账号，以及：

- **Password（密码）**
- **Host（主机名）**
- **Port（端口号）**
- **Database Number（数据库编号）**
- **SSL**

配置这个凭证的步骤：

1. 输入你的用户账号 **Password（密码）**。
2. 输入 Redis 服务器的 **Host（主机名）**。默认是 `localhost`。
3. 输入连接使用的 **Port（端口号）**。默认是 `6379`。
    - 这个数字应与你运行 `INFO` 命令时列出的 `tcp_port` 一致。
4. 输入 **Database Number（数据库编号）**。默认是 `0`。
5. 如果连接应使用 SSL，打开 **SSL** 开关。如果此开关关闭，连接只使用 TCP。
6. 如果启用了 **SSL**，你还可以选择**关闭 TLS 校验（disable TLS verification）**。打开它可以使用自签名证书。警告：这会让连接安全性降低。

更多说明请参考 [连接 Redis | 通用客户端](https://redis.readthedocs.io/en/stable/connections.html) 文档。
