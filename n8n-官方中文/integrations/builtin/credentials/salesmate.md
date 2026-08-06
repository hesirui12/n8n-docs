---
title: Salesmate 凭证
description: >-
  Salesmate 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Salesmate 的身份。
contentType:
  - integration
  - reference
nodeTitle: Salesmate credentials
originalFilePath: integrations/builtin/credentials/salesmate.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/salesmate'
url: 'https://docs.n8n.io/integrations/builtin/credentials/salesmate'
layout:
  description:
    visible: false
---

# Salesmate 凭证

{% hint style="info" %}
**大白话**：Salesmate 是一个「销售 CRM」平台，帮销售团队管客户、管跟进、管商机。n8n 连它需要两样东西：一个 **Session Token（会话令牌）**——在你的 **My Account（我的账号）> Access Key（访问密钥）** 里生成；还有 **URL**——你的 Salesmate 域名，比如 `n8n.salesmate.io`。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Salesmate](../app-nodes/n8n-nodes-base.salesmate.md)

## 准备工作

注册一个 [Salesmate](https://salesmate.io/) 账号。

## 支持的验证方式

- API token（API 令牌）

## 相关资源

关于该服务的更多信息，请参考 [Salesmate 官方 API 文档](https://apidocs.salesmate.io/?version=latest)。

## 使用 API token（API 令牌）

要配置这个凭证，你需要准备：

- **Session Token（会话令牌）**：即 **Access Key（访问密钥）**。在 **My Account（我的账号）> Access Key（访问密钥）** 里生成一个访问密钥。更多说明请参考[访问权限和密钥](https://apidocs.salesmate.io/?version=latest#ac8296ec-cb44-4937-a860-5ae032397ca0)文档。
- **URL**：你的 Salesmate 域名/基础地址，比如 `n8n.salesmate.io`。
