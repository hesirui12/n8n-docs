---
title: Airtop 凭证
description: >-
  Airtop 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Airtop 的身份。
contentType:
  - integration
  - reference
nodeTitle: Airtop credentials
originalFilePath: integrations/builtin/credentials/airtop.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/airtop'
url: 'https://docs.n8n.io/integrations/builtin/credentials/airtop'
layout:
  description:
    visible: false
---

# Airtop 凭证

{% hint style="info" %}
**大白话**：Airtop 是一个「云端浏览器」服务（让 AI 像人一样去网页上操作）。n8n 连它只需要一把 **API key（API 密钥）**，在 Airtop 官网注册后到 API Keys 页面生成一把，填进 n8n 就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Airtop](../app-nodes/n8n-nodes-base.airtop.md)

## 准备工作

注册一个 [Airtop](https://portal.airtop.ai/sign-up) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Airtop 官方 API 文档](https://docs.airtop.ai/api-reference/airtop-api)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要一个 [Airtop](https://portal.airtop.ai/sign-up) 账号和一个 **API key**。生成新 key 的步骤：

1. 登录 [Airtop Portal](https://portal.airtop.ai)。
2. 进入 [API Keys（API 密钥）](https://portal.airtop.ai/api-keys) 页面。
3. 点 **+ Create new key（创建新密钥）** 按钮。
4. 为这个 API key 输入一个名称。
5. 点选生成的 key 来复制它。
6. 把它作为 **API Key** 填进 n8n 的凭证里。

如果创建 API key 时遇到问题，请参考 [Airtop 的支持页面](https://docs.airtop.ai/guides/misc/support)。
