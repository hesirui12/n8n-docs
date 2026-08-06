---
title: Mindee 凭证
description: >-
  Mindee 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Mindee 的身份。
contentType:
  - integration
  - reference
nodeTitle: Mindee credentials
originalFilePath: integrations/builtin/credentials/mindee.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/mindee'
url: 'https://docs.n8n.io/integrations/builtin/credentials/mindee'
layout:
  description:
    visible: false
---

# Mindee 凭证

> **大白话**：Mindee 是 OCR 识别服务，能自动识别发票、小票上的文字。在 n8n 里连它，就是去 Mindee 后台创建 API Key，然后填进来；开发票用「发票密钥」，识别小票用「小票密钥」。

你可以使用这些凭证来验证以下节点的身份：

- [Mindee](../app-nodes/n8n-nodes-base.mindee.md)

## 前提条件

注册一个 [Mindee](https://mindee.com) 账号。

## 支持的认证方式

- Invoice API key（发票 API 密钥）：用于 [Invoice OCR API](https://www.mindee.com/product/invoice-ocr-api)（发票识别）
- Receipt API key（小票 API 密钥）：用于 [Receipt OCR API](https://www.mindee.com/product/receipt-ocr-api)（小票识别）

## 相关资源

关于这两种服务的更多信息，请分别参考 [Mindee 的 Invoice OCR API 文档](https://developers.mindee.com/docs/invoice-ocr)和 [Mindee 的 Receipt OCR API 文档](https://developers.mindee.com/docs/receipt-ocr)。

## 使用发票 API 密钥（Invoice API key）

要配置这个凭证，你需要：

- 一个 **API Key**：如何创建 API key，请参考 Mindee 的[创建与管理 API Keys 文档](https://developers.mindee.com/docs/create-api-key)。

## 使用小票 API 密钥（Receipt API key）

要配置这个凭证，你需要：

- 一个 **API Key**：如何创建 API key，请参考 Mindee 的[创建与管理 API Keys 文档](https://developers.mindee.com/docs/create-api-key)。
