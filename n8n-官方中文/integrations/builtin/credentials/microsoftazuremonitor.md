---
title: Microsoft Azure Monitor 凭证
description: >-
  Microsoft Azure Monitor 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Microsoft Azure Monitor 的身份。
contentType:
  - integration
  - reference
nodeTitle: Microsoft Azure Monitor credentials
originalFilePath: integrations/builtin/credentials/microsoftazuremonitor.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/microsoftazuremonitor'
url: 'https://docs.n8n.io/integrations/builtin/credentials/microsoftazuremonitor'
layout:
  description:
    visible: false
---

# Microsoft Azure Monitor 凭证

> **大白话**：Azure Monitor 是微软云的监控服务（看日志、指标、报警等）。在 n8n 里连它，要用 OAuth2 方式，填上 Client ID、Client Secret、Tenant ID 和你打算访问的 Resource（资源）名。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 前提条件

* 创建 Microsoft Azure 账号或订阅
* 在 Microsoft Entra ID 中注册一个应用

## 支持的认证方式

* OAuth2（授权码认证）

## 相关资源

关于该服务的更多信息，请参考 [Microsoft Azure Monitor 的 API 文档](https://learn.microsoft.com/en-us/azure/azure-monitor/azure-monitor-rest-api-index)。

## 使用 OAuth2

要配置这个凭证，你需要一个 Microsoft Azure 账号，以及：

- 一个 **Client ID（客户端 ID）**
- 一个 **Client Secret（客户端密钥）**
- 一个 **Tenant ID（租户 ID）**
- 你打算访问的 **Resource（资源）**

关于向该服务做认证的更多信息，请参考 [Microsoft Azure Monitor 的 API 文档](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/api/access-api?tabs=rest#set-up-authentication)。
