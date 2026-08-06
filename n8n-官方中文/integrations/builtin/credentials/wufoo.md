---
title: Wufoo 凭证
description: >-
  Wufoo 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Wufoo 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Wufoo credentials
originalFilePath: integrations/builtin/credentials/wufoo.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/wufoo'
url: 'https://docs.n8n.io/integrations/builtin/credentials/wufoo'
layout:
  description:
    visible: false
---

# Wufoo 凭证

> **大白话**：Wufoo 是在线表单工具（做问卷、报名表用的）。连它要两样东西：**API Key（API 密钥）**——在 Wufoo 的 Form Manager（表单管理器）里，表单右侧点 **More > API Information** 就能看到；**Subdomain（子域名）**——你的 Wufoo 网址中 `https://` 之后、`wufoo.com` 之前的那截（比如 `https://n8n.wufoo.com` 的子域名就是 `n8n`），管理员可以在 Account Manager（账户管理器）里查看。

你可以使用这些凭证对以下节点进行身份验证：

- [Wufoo Trigger](../trigger-nodes/n8n-nodes-base.wufootrigger.md)

## 前提条件

创建一个 [Wufoo](https://wufoo.com) 账户。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Wufoo 的 API 文档](https://wufoo.github.io/docs/)。

## 使用 API key

要配置此凭证，你需要：

- 一个 **API Key**（API 密钥）：从 [Wufoo 表单管理器](https://app.wufoo.com/#/form-manager)获取你的 API 密钥。在某个表单的右侧，点击 **More > API Information**。更多信息请参考 [Using API Information and Webhooks](https://help.surveymonkey.com/en/wufoo/integrations/wufoo-api/)。
- 一个 **Subdomain**（子域名）：你的子域名是 Wufoo 网址中 `https://` 之后、`wufoo.com` 之前的部分。例如完整域名是 `https://n8n.wufoo.com`，子域名就是 `n8n`。管理员可以在 [**Account Manager**](https://help.surveymonkey.com/en/wufoo/account/account-manager/)（账户管理器）中查看子域名。更多信息请参考 [Your Subdomain](https://help.surveymonkey.com/en/wufoo/account/your-subdomain/)。
