---
title: Cisco Secure Endpoint 凭证
description: >-
  Cisco Secure Endpoint 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Cisco Secure Endpoint（终端安全产品）的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Cisco Secure Endpoint credentials
originalFilePath: integrations/builtin/credentials/ciscosecureendpoint.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/ciscosecureendpoint'
url: 'https://docs.n8n.io/integrations/builtin/credentials/ciscosecureendpoint'
layout:
  description:
    visible: false
---

# Cisco Secure Endpoint 凭证

> 大白话：Cisco Secure Endpoint 是思科的终端安全防护产品（以前叫 AMP for Endpoints）。注意：这是「纯凭证节点」，n8n 只负责登录，具体调哪个接口得你自己写。配置时你要：选一个 Region（地区）、去思科注册一个 SecureX API Client，拿到 Client ID 和 Client Secret（把 SecureX 的 Client Password 填进 n8n 的 Client Secret 一栏）。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 准备工作

- 注册一个 [Cisco DevNet 开发者账号](https://developer.cisco.com)。
- 拥有一个 [Cisco Secure Endpoint 授权](https://www.cisco.com/site/us/en/products/security/endpoint-security/secure-endpoint/index.html)。

## 验证方式

- OAuth2（网页授权登录）

## 相关资源

关于该服务的更多信息，请参考 [Cisco Secure Endpoint 官方文档](https://developer.cisco.com/docs/secure-endpoint/introduction/)。

这是一个纯凭证节点。更多说明请参考 [Custom API operations（自定义 API 操作）](../custom-api-actions-for-existing-nodes.md)。也可以到 n8n 官网查看 [示例工作流和相关内容](https://n8n.io/integrations/cisco-secure-endpoint/)。

## 使用 OAuth2（网页授权登录）

要配置这个凭证，你需要准备：

- 你的 Cisco Secure Endpoint 所属的 **Region（地区）**，可选：
    - Asia Pacific, Japan, and China（亚太、日本和中国）
    - Europe（欧洲）
    - North America（北美）
- 一个 **Client ID（客户端 ID）**：注册 SecureX API Client 时提供。
- 一个 **Client Secret（客户端密钥）**：注册 SecureX API Client 时提供。

要拿到 Client ID 和 Client Secret，你需要注册一个 SecureX API Client。详细步骤请参考 [Cisco Secure Endpoint 身份验证文档](https://developer.cisco.com/docs/secure-endpoint/authentication/#authentication)。把 SecureX 的 **Client Password（客户端密码）** 填到 n8n 凭证的 **Client Secret** 一栏。
