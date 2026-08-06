---
title: Datadog 凭证
description: >-
  Datadog 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Datadog 的身份。
contentType:
  - integration
  - reference
nodeTitle: Datadog credentials
originalFilePath: integrations/builtin/credentials/datadog.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/datadog'
url: 'https://docs.n8n.io/integrations/builtin/credentials/datadog'
layout:
  description:
    visible: false
---
# Datadog 凭证

> **大白话**：Datadog 是监控/运维平台（看服务器指标、日志、告警）。n8n 连接它需要三样：你的 **Datadog 实例地址（Host）**、**API Key** 和 **App Key**（两个 Key 都在 Datadog 后台生成）。注意：这是纯凭证节点，需要配合 HTTP Request 节点手动调用接口。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 准备工作（Prerequisites）

先注册一个 [Datadog](https://app.datadoghq.eu/signup) 账号。

## 相关资源（Related resources）

关于如何使用该服务进行身份验证的更多信息，请参考 [Datadog 的 API 文档](https://docs.datadoghq.com/api/latest/)。

这是一个纯凭证（credential-only）节点。更多信息请参考[自定义 API 操作（Custom API operations）](../custom-api-actions-for-existing-nodes.md)。也可以在 n8n 官网上查看[示例工作流和相关内容](https://n8n.io/integrations/datadog/)。

## 使用 API Key（API 密钥）

要配置这个凭证，你需要准备：

- 你的 Datadog 实例 **Host（主机地址）**
- **API Key**
- **App Key**

更多信息请参考 Datadog 官网的[认证（Authentication）](https://docs.datadoghq.com/api/latest/authentication/)文档。
