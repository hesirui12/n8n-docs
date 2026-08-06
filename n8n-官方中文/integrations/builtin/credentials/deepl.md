---
title: DeepL 凭证
description: >-
  DeepL 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  DeepL 的身份。
contentType:
  - integration
  - reference
nodeTitle: DeepL credentials
originalFilePath: integrations/builtin/credentials/deepl.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/deepl'
url: 'https://docs.n8n.io/integrations/builtin/credentials/deepl'
layout:
  description:
    visible: false
---

# DeepL 凭证

> **大白话**：DeepL 是翻译服务（公认质量高）。n8n 连接它需要一把 **API Key**，并且要**选对你的套餐**：Pro（专业版）还是 Free（免费版）——因为两种套餐的接口地址不一样，选错了会连不上。去 DeepL 开发者后台申请密钥即可。

这些凭证可以用来验证以下节点的身份：

- [DeepL](../app-nodes/n8n-nodes-base.deepl.md)

## 准备工作（Prerequisites）

注册一个 [DeepL 开发者](https://www.deepl.com/pro-api) 账号。n8n 同时支持 Free（免费版）和 Pro（专业版）API 套餐。

## 支持的验证方式（Supported authentication methods）

- API key（API 密钥）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [DeepL 的 API 文档](https://developers.deepl.com/docs)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- **API Key**：获取 API 密钥的方法请参考 [DeepL 的认证文档](https://developers.deepl.com/docs/getting-started/auth#authentication)。
- 确认你使用的是哪个 **API Plan（API 套餐）**。DeepL 为每个套餐提供不同的 API 端点，请务必选择正确的：
    - Pro Plan（专业版）
    - Free Plan（免费版）
