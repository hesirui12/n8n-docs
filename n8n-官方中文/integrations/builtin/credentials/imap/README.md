---
title: IMAP 凭证
description: >-
  IMAP 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  IMAP 的身份。
contentType:
  - integration
  - reference
priority: high
nodeTitle: IMAP
originalFilePath: integrations/builtin/credentials/imap/index.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/imap'
url: 'https://docs.n8n.io/integrations/builtin/credentials/imap'
layout:
  description:
    visible: false
---

# IMAP 凭证

{% hint style="info" %}
**大白话**：IMAP 是一个「收邮件」的标准协议，几乎所有邮箱服务都支持。n8n 用它来定时读取你的邮箱（比如有新邮件就触发工作流）。配置其实很简单：填**邮箱地址（用户名）**、**密码（或应用专用密码）**、**邮箱服务器地址（Host）**和**端口（Port，默认 993）**。不同邮箱商的服务器地址不一样，下面是 Gmail、Outlook.com、Yahoo 三个最常见的快速指南。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [IMAP Email（IMAP 邮件）](../../core-nodes/n8n-nodes-base.emailimap.md)

## 前提条件

在支持 IMAP 的服务上创建一个邮箱账号。

## 支持的验证方式

- User account（用户账号）

## 相关资源

IMAP（Internet Message Access Protocol，互联网消息访问协议）是一种接收邮件的标准协议。大多数邮箱服务商都提供在自家服务上启用 IMAP 的说明，请参考你所用服务商的 IMAP 说明。

## 使用 user account（用户账号）

要配置这个凭证，你需要：

- 一个 **User（用户名）**：你要收邮件的那个邮箱地址。
- 一个 **Password（密码）**：你平时查邮件的密码，或者应用专用密码（app password）。你的服务商会告诉你该用自己的密码还是生成应用专用密码。
- 一个 **Host（主机）**：你邮箱服务商的 IMAP 服务器地址，通常格式是 `imap.<服务商>.com`。请向你的服务商确认。
- 一个 **Port（端口）**：默认是 `993` 端口。除非你的服务商或邮箱管理员让你用别的端口，否则就用这个。

还要选择是否使用 **SSL/TLS**，以及是否 **Allow Self-Signed Certificates（允许自签名证书）**。

### 各邮箱服务商的说明

下面是几个常见邮箱服务商的快速上手指南。

#### Gmail

请参考 [Gmail](gmail.md)。

#### Outlook.com

请参考 [Outlook.com](outlook.md)。

#### Yahoo

请参考 [Yahoo](yahoo.md)。

### 我的邮箱服务商没列出来

如果你的邮箱服务商不在上面，直接搜索它的「IMAP settings（IMAP 设置）」或「IMAP instructions（IMAP 说明）」即可。
