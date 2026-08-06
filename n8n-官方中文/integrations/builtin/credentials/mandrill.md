---
title: Mandrill 凭证
description: >-
  Mandrill 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Mandrill 的身份。
contentType:
  - integration
  - reference
nodeTitle: Mandrill credentials
originalFilePath: integrations/builtin/credentials/mandrill.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/mandrill'
url: 'https://docs.n8n.io/integrations/builtin/credentials/mandrill'
layout:
  description:
    visible: false
---

# Mandrill 凭证

> **大白话**：Mandrill 是 Mailchimp 家专门发「事务性邮件」（比如注册验证码、订单通知这类自动触发的邮件）的服务。想用 n8n 发这种邮件，就去 Mandrill 后台生成一个 API Key 填进 n8n。

你可以使用这些凭证来验证以下节点的身份：

- [Mandrill](../app-nodes/n8n-nodes-base.mandrill.md)

## 前提条件

- 注册一个 Mailchimp 的[事务性邮件账号](https://mailchimp.com/features/transactional-email-infrastructure/)。
- 用你的 Mailchimp 账号登录 [Mandrill](https://mandrillapp.com/login/)。

如果你已经有 Standard 及以上档位的 Mailchimp 账号，直接在该账号里启用[事务性邮件](https://mailchimp.com/help/add-or-remove-transactional-email)功能即可使用 Mandrill。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Mailchimp 的 Transactional API 文档](https://mailchimp.com/developer/transactional/api/)。

## 使用 API key

要配置这个凭证，你需要：

- 一个 **API Key**：从 Mandrill 的 [Settings](https://mandrillapp.com/settings)（设置）里生成 API key。更详细的步骤请参考 Mailchimp 的[生成 API key 文档](https://mailchimp.com/developer/transactional/guides/quick-start/#generate-your-api-key)。
