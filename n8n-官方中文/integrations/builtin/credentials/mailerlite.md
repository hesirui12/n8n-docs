---
title: MailerLite 凭证
description: >-
  MailerLite 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  MailerLite 的身份。
contentType:
  - integration
  - reference
nodeTitle: MailerLite credentials
originalFilePath: integrations/builtin/credentials/mailerlite.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/mailerlite'
url: 'https://docs.n8n.io/integrations/builtin/credentials/mailerlite'
layout:
  description:
    visible: false
---

# MailerLite 凭证

{% hint style="info" %}
**大白话**：MailerLite 是「性价比很高」的邮件营销工具（免费额度友好，适合新手和小企业）。n8n 连它只需要一个 **API Key**：在 MailerLite 的 **Integrations（集成）** 菜单里生成，复制粘贴进 n8n 就行。注意一个容易踩的坑：如果你用的是老版 MailerLite Classic 账号，需要打开 **Classic API** 开关；新版账号和免费账号要关掉它（大多数人都关）。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [MailerLite](../app-nodes/n8n-nodes-base.mailerlite.md)
- [MailerLite Trigger（触发器）](../trigger-nodes/n8n-nodes-base.mailerlitetrigger.md)

## 准备工作

创建一个 [MailerLite](https://www.mailerlite.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [MailerLite 的 API 文档](https://developers.mailerlite.com/docs/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：从 **Integrations（集成）** 菜单里生成。更详细的步骤请参考 [API 认证文档](https://developers.mailerlite.com/docs/#authentication)。

如果这个 API key 属于 MailerLite Classic（经典版）账号，而不是新版 MailerLite，请打开 **Classic API** 开关。

{% hint style="info" %}
大多数新注册的 MailerLite 账号和所有免费账号都应该关闭 **Classic API** 开关。你可以查看[自己正在使用哪个版本的 MailerLite](https://www.mailerlite.com/help/which-version-of-mailerlite-am-i-using)，并在 [MailerLite 常见问题](https://www.mailerlite.com/help/new-mailerlite-faq) 里了解两个版本的区别。
{% endhint %}
