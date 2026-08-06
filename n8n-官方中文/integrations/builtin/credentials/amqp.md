---
title: AMQP 凭证
description: >-
  AMQP 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  AMQP 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: AMQP credentials
originalFilePath: integrations/builtin/credentials/amqp.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/amqp'
url: 'https://docs.n8n.io/integrations/builtin/credentials/amqp'
layout:
  description:
    visible: false
---

# AMQP 凭证

{% hint style="info" %}
**大白话**：AMQP 是一种「消息队列」通讯协议，程序之间靠它发消息、排队、转发，常用于系统解耦（比如订单系统把消息丢进队列，其他系统慢慢消费）。n8n 连它不需要什么 API key，而是直接连你的消息代理（broker）：填**地址、端口、用户名、密码**就行，就像登录一台服务器。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [AMQP Sender（发送者）](../app-nodes/n8n-nodes-base.amqp.md)
- [AMQP Trigger（触发器）](../trigger-nodes/n8n-nodes-base.amqptrigger.md)

## 准备工作

安装一个兼容 AMQP 1.0 的消息代理（message broker），比如 [ActiveMQ](https://activemq.apache.org/)。可选方案列表请参考 [AMQP Products](https://www.amqp.org/about/examples)。

## 支持的验证方式

- AMQP 连接（直接填写连接信息）

## 相关资源

AMQP（Advanced Message Queuing Protocol，高级消息队列协议）是一个开放标准的应用层协议，专门用于消息中间件。它的核心特点是面向消息、队列、路由、可靠性和安全性。更多信息请参考 [OASIS AMQP 1.0 标准](https://docs.oasis-open.org/amqp/core/v1.0/amqp-core-overview-v1.0.html)。

关于具体服务的更多信息，请参考你的消息代理提供商的文档。以 [ActiveMQ 的 API 文档](https://activemq.apache.org/components/classic/documentation/rest) 为例。

## 使用 AMQP 连接

要配置这个凭证，你需要准备：

- **Hostname（主机名）**：输入你的 AMQP 消息代理的主机名。
- **Port（端口）**：输入连接要使用的端口号。
- **User（用户名）**：输入用于建立连接的用户名。
    - 例如，ActiveMQ 的默认用户名是 `admin`。
- **Password（密码）**：输入该用户的密码。
    - 例如，ActiveMQ 的默认密码是 `admin`。
- _可选：_ **Transport Type（传输类型）**：输入 `tcp` 或 `tls`。

更详细的操作步骤请参考你的消息代理提供商的文档。
