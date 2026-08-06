---
title: Venafi TLS Protect Cloud 凭证
description: >-
  Venafi TLS Protect Cloud 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Venafi TLS Protect Cloud 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Venafi TLS Protect Cloud credentials
originalFilePath: integrations/builtin/credentials/venafitlsprotectcloud.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/venafitlsprotectcloud'
url: 'https://docs.n8n.io/integrations/builtin/credentials/venafitlsprotectcloud'
layout:
  description:
    visible: false
---

# Venafi TLS Protect Cloud 凭证

> **大白话**：Venafi 是管理 TLS 证书的平台。选好区域（欧盟选 EU，其他选 US），再在账户「头像 > 偏好设置 > API 密钥」里找到 API Key 填进 n8n 就行。

你可以使用这些凭证对以下节点进行身份验证：

* [Venafi TLS Protect Cloud node](../app-nodes/n8n-nodes-base.venafitlsprotectcloud.md)
* [Venafi TLS Protect Cloud Trigger node](../trigger-nodes/n8n-nodes-base.venafitlsprotectcloudtrigger.md)

## 前置条件

创建一个 Venafi [TLS Protect Cloud](https://venafi.com/tls-protect/) 账户。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

更多关于该服务的信息，请参考 [Venafi TLS Protect Cloud 的 API 文档](https://docs.venafi.cloud/api/vaas-rest-api/)。

## 使用 API key

要配置此凭证，你需要：

- **Region**（区域）：选择符合你业务需求的区域。如果你在欧盟，请选择 **EU**；否则选择 **US**。
- **API Key**：前往你的 **avatar > Preferences > API Keys**（头像 > 偏好设置 > API 密钥）获取 API key。你也可以使用 VCert 获取 API key。更多信息请参考 [Obtaining an API Key](https://docs.venafi.cloud/api/obtaining-api-key/)。
