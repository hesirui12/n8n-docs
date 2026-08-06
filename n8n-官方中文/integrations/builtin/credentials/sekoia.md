---
title: Sekoia 凭证
description: >-
  Sekoia 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来验证
  Sekoia。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Sekoia 凭证
originalFilePath: integrations/builtin/credentials/sekoia.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/sekoia'
url: 'https://docs.n8n.io/integrations/builtin/credentials/sekoia'
layout:
  description:
    visible: false
---

# Sekoia 凭证

> **大白话**：Sekoia 是一个网络安全运营平台（SOC），帮安全团队监控和响应威胁。这篇文档教你怎么在 n8n 里配置凭证，让 n8n 能对接 Sekoia 的 API。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 前置条件

先创建一个 [Sekoia SOC platform](https://www.sekoia.io/en/homepage/) 账号。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参阅 [Sekoia 的文档](https://docs.sekoia.io/getting_started/)。

这是一个仅凭证（credential-only）节点。更多信息请参阅 [自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。在 n8n 官网上查看 [示例工作流及相关内容](https://n8n.io/integrations/sekoia/)。

## 使用 API key（API 密钥）

要配置此凭证，你需要准备：

- **API Key（API 密钥）**：要生成 API 密钥，请选择 **+ API Key**。更多信息请参阅 [创建 API 密钥](https://docs.sekoia.io/getting_started/manage_api_keys/#create-an-api-key)。
