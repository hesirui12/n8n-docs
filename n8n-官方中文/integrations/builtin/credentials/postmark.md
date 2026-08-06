---
title: Postmark 凭证
description: >-
  Postmark 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Postmark 的身份。
contentType:
  - integration
  - reference
nodeTitle: Postmark credentials
originalFilePath: integrations/builtin/credentials/postmark.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/postmark'
url: 'https://docs.n8n.io/integrations/builtin/credentials/postmark'
layout:
  description:
    visible: false
---

# Postmark 凭证

{% hint style="info" %}
**大白话**：Postmark 是「交易类邮件」服务（比如注册验证、订单通知这类重要邮件），主打送达率高。n8n 连它只需要一把 **Server API Token（服务器 API 令牌）**，去 Postmark 后台服务器设置里的「API Tokens」选项卡复制即可。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Postmark Trigger（触发器）](../trigger-nodes/n8n-nodes-base.postmarktrigger.md)

## 准备工作

在 Postmark 服务器上注册一个 [Postmark](https://postmarkapp.com/) 账号。

## 支持的验证方式

- API token（API 令牌）

## 相关资源

关于该服务的更多信息，请参考 [Postmark 官方 API 文档](https://postmarkapp.com/developer/api/overview)。

## 使用 API token（API 令牌）

要配置这个凭证，你需要：

- 一个 **Server API Token（服务器 API 令牌）**：Server API token 只有账号所有者（Account Owners）、账号管理员（Account Admins）以及在该服务器上拥有服务器管理员权限（Server Admin privileges）的用户才能看到。在你的 Postmark 服务器下的 [**API Tokens**](https://account.postmarkapp.com/api_tokens) 选项卡里获取。更多说明请参考 [API Authentication（API 身份验证）](https://postmarkapp.com/developer/api/overview#authentication)。
