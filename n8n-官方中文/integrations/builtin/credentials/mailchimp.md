---
title: Mailchimp 凭证
description: >-
  Mailchimp 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Mailchimp 的身份。
contentType:
  - integration
  - reference
nodeTitle: Mailchimp credentials
originalFilePath: integrations/builtin/credentials/mailchimp.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/mailchimp'
url: 'https://docs.n8n.io/integrations/builtin/credentials/mailchimp'
layout:
  description:
    visible: false
---

# Mailchimp 凭证

{% hint style="info" %}
**大白话**：Mailchimp 是全世界最流行的「邮件营销」工具（做订阅列表、发营销邮件、看打开率）。n8n 连它有两种方式：**API key（最快，只操作你自己的账号数据时推荐）** 和 **OAuth2（网页授权，需要访问别人的账号数据时才用）**。对大多数个人用户来说，去 Mailchimp 账号的 API keys 区域生成一个 key 填进来就够了。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Mailchimp](../app-nodes/n8n-nodes-base.mailchimp.md)
- [Mailchimp Trigger（触发器）](../trigger-nodes/n8n-nodes-base.mailchimptrigger.md)

## 准备工作

创建一个 [Mailchimp](https://www.mailchimp.com/) 账号。

## 支持的验证方式

- API key（API 密钥）
- OAuth2（网页授权）

关于该用哪种方式，请参考[选择验证方式](#选择验证方式)。

## 相关资源

关于该服务的更多信息，请参考 [Mailchimp 的 API 文档](https://mailchimp.com/developer/marketing/api/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：在你的 Mailchimp 账号的 [API keys 区域](https://us1.admin.mailchimp.com/account/api/) 生成。更详细的步骤请参考 [Mailchimp 的生成 API key 文档](https://mailchimp.com/developer/marketing/guides/quick-start/#generate-your-api-key)。

## 使用 OAuth2（网页授权）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你需要从头配置 OAuth2，请先[注册一个应用](https://mailchimp.com/developer/marketing/guides/access-user-data-oauth-2/#register-your-application)。更多信息请参考 [Mailchimp OAuth2 文档](https://mailchimp.com/developer/marketing/guides/access-user-data-oauth-2/)。

## 选择验证方式

如果你只是访问自己 Mailchimp 账号的数据，Mailchimp 建议使用 API key：

> 如果你的代码只需要把_你自己的_应用数据和_你自己的_ Mailchimp 账号数据紧密关联，就用 API key。如果你以后可能需要访问_别人的_ Mailchimp 账号数据，那就应该用 OAuth 2（[来源](https://mailchimp.com/developer/marketing/guides/access-user-data-oauth-2/#when-not-to-use-oauth-2)）
