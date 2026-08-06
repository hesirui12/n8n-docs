---
title: Imperva WAF 凭证
description: >-
  Imperva WAF 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Imperva WAF 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Imperva WAF credentials
originalFilePath: integrations/builtin/credentials/impervawaf.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/impervawaf'
url: 'https://docs.n8n.io/integrations/builtin/credentials/impervawaf'
layout:
  description:
    visible: false
---

# Imperva WAF 凭证

{% hint style="info" %}
**大白话**：Imperva WAF 是一款网站防火墙（Web 应用防火墙），保护网站免受攻击。n8n 连它需要两样东西：**API ID** 和 **API Key（API 密钥）**，都去 Imperva 后台的 API 密钥管理页面生成。注意：这个服务在 n8n 里**只有凭证、没有专用节点**，你要配合「HTTP Request 节点」自己调用它的 API。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 前提条件

创建一个 [Imperva WAF](https://www.imperva.com/products/web-application-firewall-waf/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Imperva WAF 的文档](https://docs.imperva.com/bundle/api-docs/page/api/authentication.htm)。

这是一个仅有凭证的节点（credential-only node）。想了解更多，请参考[自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/imperva-waf/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API ID**
- 一个 **API Key（API 密钥）**

生成和查看 API Keys 与 IDs 的方法请参考 [Imperva WAF 的 API 密钥管理文档](https://docs.imperva.com/bundle/cloud-application-security/page/settings/api-keys.htm)。
