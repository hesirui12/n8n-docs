---
title: Venafi TLS Protect Datacenter 凭证
description: >-
  Venafi TLS Protect Datacenter 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Venafi TLS Protect Datacenter 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Venafi TLS Protect Datacenter credentials
originalFilePath: integrations/builtin/credentials/venafitlsprotectdatacenter.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/credentials/venafitlsprotectdatacenter
url: >-
  https://docs.n8n.io/integrations/builtin/credentials/venafitlsprotectdatacenter
layout:
  description:
    visible: false
---

# Venafi TLS Protect Datacenter 凭证

> **大白话**：Venafi TLS Protect Datacenter 是部署在公司内部（数据中心）的证书管理工具，比云版多一个「API 集成」环节。先在 Venafi 后台建一个 API integration（集成应用），拿到 Client ID 和权限范围，再填域名、用户名、密码。这是本页最麻烦的一步，慢慢来。

你可以使用这些凭证对以下节点进行身份验证：

* [Venafi TLS Protect Datacenter node](../app-nodes/n8n-nodes-base.venafitlsprotectdatacenter.md)

## 前置条件

- 创建一个 Venafi [TLS Protect Datacenter](https://venafi.com/) 账户。
- 设置令牌的过期时间和刷新时间。更多信息请参考 [Setting up token authentication](https://docs.venafi.com/Docs/current/TopNav/Content/SDK/AuthSDK/t-SDKa-Setup-OAuth.php)。
- 在 **API > Integrations**（API > 集成）中创建一个 [API integration](https://docs.venafi.com/Docs/current/TopNav/Content/API-ApplicationIntegration/c-APIAppIntegrations-about.php)。详细说明请参考 [Integrating other systems with Venafi products](https://docs.venafi.com/Docs/current/TopNav/Content/API-ApplicationIntegration/t-APIAppIntegrations-creating.php)。
    - 记下你集成的 Client ID（客户端 ID）。
    - 选择你在 n8n 中要执行的操作所需的权限范围（scopes）。更多可用范围请参考 [Integrating other systems with Venafi products](https://docs.venafi.com/Docs/current/TopNav/Content/API-ApplicationIntegration/t-APIAppIntegrations-creating.php) 中的 scopes 表格。

## 支持的认证方式

- API integration（API 集成）

## 相关资源

更多关于该服务的信息，请参考 [Venafi 的 API integration 文档](https://docs.venafi.com/Docs/currentSDK/TopNav/Content/SDK/WebSDK/c-sdk-AboutThisGuide.php)。

## 使用 API integration

要配置此凭证，你需要：

- **Domain**（域名）：输入你的 Venafi TLS Protect Datacenter 域名。
- **Client ID**（客户端 ID）：输入 API integration 中的 **Client ID**。关于如何创建 API integration，请参考[前置条件](#前置条件)中的信息和链接。
- **Username**（用户名）：输入你的用户名。
- **Password**（密码）：输入你的密码。
- **Allow Self-Signed Certificates**（允许自签名证书）：开启后，凭证将允许自签名证书。
