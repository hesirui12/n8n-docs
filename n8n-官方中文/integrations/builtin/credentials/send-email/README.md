---
title: Send Email 凭证
description: >-
  Send Email 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来验证
  Send Email。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Send Email
originalFilePath: integrations/builtin/credentials/sendemail/index.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/sendemail'
url: 'https://docs.n8n.io/integrations/builtin/credentials/send-email'
layout:
  description:
    visible: false
---

# Send Email 凭证

> **大白话**：Send Email 就是 n8n 里「发邮件」的节点。这篇文档教你怎么配置邮箱凭证（SMTP 账号），让 n8n 能替你发邮件。说白了就是填「邮箱服务器地址 + 端口 + 账号密码」。

你可以使用这些凭证来验证以下节点：

- [Send Email](../../core-nodes/n8n-nodes-base.sendemail.md)

## 前置条件

- 在支持 SMTP 的邮箱服务上创建一个邮箱账号。
- 有些邮箱服务商要求你开启或设置「发送邮件 SMTP」功能，或者需要生成「应用专用密码」。请查看你的邮箱服务商文档，确认是否还有其他必须的步骤。

## 支持的认证方式

- SMTP account（SMTP 账号）

## 相关资源

简单邮件传输协议（SMTP）是一种用于发送和接收电子邮件的标准协议。大多数邮箱服务商都提供了用 SMTP 设置其服务的说明。请查阅你所用邮箱服务商的 SMTP 设置说明。

## 使用 SMTP account（SMTP 账号）

要配置此凭证，你需要准备：

- **User（用户）** 邮箱地址
- **Password（密码）**：这可以是邮箱密码，也可以是「应用专用密码」。请查阅你的邮箱服务商文档。
- **Host（主机）**：你的邮箱服务商的 SMTP 主机地址，通常格式为 `smtp.<provider>.com`。请向你的邮箱服务商确认。
- **Port（端口）** 号：端口取决于加密方式：
  - 端口 `465` 用于 SSL/TLS（隐式加密）
  - 端口 `587` 用于 STARTTLS（显式加密）
  - 端口 `25` 用于无加密（不推荐）
    请向你的邮箱服务商确认他们的具体要求。
- **SSL/TLS**：这个开关控制加密方式：
  - 端口 `465` 时**打开**（使用隐式 SSL/TLS 加密）
  - 端口 `587` 时**关闭**（使用 STARTTLS 显式加密）
  - 端口 `25` 时**关闭**（无加密）
- **Disable STARTTLS（禁用 STARTTLS）**：当 SSL/TLS 关闭时，SMTP 服务器仍可能尝试[用 STARTTLS 升级 TCP 连接](https://en.wikipedia.org/wiki/Opportunistic_TLS)。打开这个选项可以阻止这种行为。
- **Client Host Name（客户端主机名）**：这个名字用于向服务器标识客户端。对于 Gmail、Outlook.com 或 Yahoo，可能不需要填。除非你的邮箱服务商或管理员明确要求，否则请留空。如果确实需要填写，请使用完整域名（FQDN），例如 `mail.yourdomain.com`。避免使用 `localhost` 之类的通用值。

### 各服务商设置说明

以下是一些常见邮箱服务商的快速入门指南。

#### Gmail

请参阅 [Gmail](gmail.md)。

#### Outlook.com

请参阅 [Outlook.com](outlook.md)。

#### Yahoo

请参阅 [Yahoo](yahoo.md)。

### 我的邮箱服务商没列出来怎么办

如果你的邮箱服务商不在这里，请搜索「SMTP settings（SMTP 设置）」来查找他们的说明。（这些说明也可能包含在「IMAP settings」或「POP settings」里。）
