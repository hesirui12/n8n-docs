---
title: Mailgun 凭证
description: >-
  Mailgun 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Mailgun 的身份。
contentType:
  - integration
  - reference
nodeTitle: Mailgun credentials
originalFilePath: integrations/builtin/credentials/mailgun.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/mailgun'
url: 'https://docs.n8n.io/integrations/builtin/credentials/mailgun'
layout:
  description:
    visible: false
---

# Mailgun 凭证

> **大白话**：Mailgun 是一个发邮件的服务（类似发信服务器）。想用 n8n 收发邮件，就得先告诉 n8n 你在 Mailgun 的账号密码（即 API Key）。本页教你怎么拿这几个「钥匙」。

你可以使用这些凭证来验证以下节点的身份：

- [Mailgun](../app-nodes/n8n-nodes-base.mailgun.md)

## 前提条件

- 注册一个 [Mailgun](https://www.mailgun.com/) 账号。
- 在 Mailgun 中[添加并验证一个域名](https://help.mailgun.com/hc/en-us/articles/360026833053-Domain-Verification-Setup-Guide)，或者用系统自带的沙箱（sandbox）域名来测试。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Mailgun 的 API 文档](https://documentation.mailgun.com/docs/mailgun/api-reference/api-overview)。

## 使用 API key

要配置这个凭证，你需要：

- **API Domain（API 域名）**：如果你的 Mailgun 账号在欧洲，选 **api.eu.mailgun.net**；否则选 **api.mailgun.net**。更多信息请参考 [Mailgun Base URLs](https://documentation.mailgun.com/docs/mailgun/api-reference/api-overview#base-url)。
- **Email Domain（发信域名）**：填写你要用来发信的域名。如果你有多个发信域名，请参考下面的[处理多个发信域名](#处理多个发信域名)一节。
- **API Key（API 密钥）**：在 **Settings > API Keys**（设置 > API 密钥）里查看你的 API key。更详细的说明请参考 [Mailgun 的 API 认证文档](https://documentation.mailgun.com/docs/mailgun/api-reference/mg-auth)。

## 处理多个发信域名

如果你的 Mailgun 账号下有多个发信域名，请为每一个域名单独创建一个凭证，一个域名对应一个凭证。
