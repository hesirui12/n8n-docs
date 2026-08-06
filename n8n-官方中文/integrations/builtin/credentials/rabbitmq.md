---
title: RabbitMQ 凭证
description: >-
  RabbitMQ 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  RabbitMQ 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: RabbitMQ credentials
originalFilePath: integrations/builtin/credentials/rabbitmq.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/rabbitmq'
url: 'https://docs.n8n.io/integrations/builtin/credentials/rabbitmq'
layout:
  description:
    visible: false
---

# RabbitMQ 凭证

{% hint style="info" %}
**大白话**：RabbitMQ 是超常用的「消息队列」中间件，用来在程序之间异步传消息、削峰填谷。n8n 连它用的是用户账号密码：填上 **Hostname（地址）**、**Port（端口）**、**User（用户名，默认 guest）**、**Password（密码）** 和 **Vhost（虚拟主机，默认 /）** 就行。有个经典坑：默认的 `guest` 用户只能从本机（localhost）连，远程连会报错，生产环境建议换别的用户。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [RabbitMQ](../app-nodes/n8n-nodes-base.rabbitmq.md)
- [RabbitMQ Trigger（触发器）](../trigger-nodes/n8n-nodes-base.rabbitmqtrigger.md)

## 支持的验证方式

- 用户连接（User connection）

## 相关资源

关于该服务的更多信息，请参考 [RabbitMQ 的连接文档](https://www.rabbitmq.com/docs/connections)。

## 使用用户连接

要配置这个凭证，你需要先安装一个 [RabbitMQ broker（消息代理）](https://www.rabbitmq.com/)，然后：

1. 输入 RabbitMQ broker 的 **Hostname（主机名）**。
2. 输入连接使用的 **Port（端口号）**。
3. 输入连接时要登录的 **User（用户名）**。
    - 默认是 `guest`。RabbitMQ 建议在生产环境中使用其他用户。更多说明请参考[访问控制 | 基础](https://www.rabbitmq.com/docs/access-control#basics)。如果你要使用 `guest` 账号连接非本机地址，请参考下方的 [guest 用户问题](#guest-user-issues) 排查方法。
4. 输入该用户的 **Password（密码）**。
    - `guest` 用户的默认密码是 `guest`。
5. 输入连接使用的[虚拟主机](https://www.rabbitmq.com/docs/vhosts)作为 **Vhost（虚拟主机）**。默认虚拟主机是 `/`。
6. 选择连接时是否使用 **SSL**。如果打开，还需要设置：
    - **Passwordless（无密码）**：选择 SSL 证书连接是使用 SASL 机制 EXTERNAL（关闭此开关）还是不使用密码（打开此开关）。如果打开，你还需要填写：
        - **Client Certificate（客户端证书）**：粘贴要使用的 SSL 客户端证书文本。
        - **Client Key（客户端密钥）**：粘贴要使用的 SSL 客户端密钥。
        - **Passphrase（口令）**：粘贴要使用的 SSL 口令。
    - **CA Certificates（CA 证书）**：粘贴要使用的 SSL CA 证书文本。

## guest 用户问题

如果你在凭证中使用 `guest` 用户并尝试访问远程主机，可能会看到连接错误。RabbitMQ 日志里会出现类似这样的错误：

    [error] <0.918.0> PLAIN login refused: user 'guest' can only connect via localhost

这是因为 RabbitMQ 禁止默认的 `guest` 用户从远程主机连接。它只能通过 `localhost` 连接。

要解决这个错误，你可以：

- 修改 `guest` 用户，允许它从远程主机访问。
- 创建或改用其他用户连接远程主机。默认情况下只有 `guest` 用户受限。

更多说明请参考[“guest” 用户只能从 localhost 连接](https://www.rabbitmq.com/docs/access-control#loopback-users)文档。
