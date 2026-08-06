---
title: Chargebee 凭证
description: >-
  Chargebee 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Chargebee（订阅计费工具）的身份。
contentType:
  - integration
  - reference
nodeTitle: Chargebee credentials
originalFilePath: integrations/builtin/credentials/chargebee.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/chargebee'
url: 'https://docs.n8n.io/integrations/builtin/credentials/chargebee'
layout:
  description:
    visible: false
---

# Chargebee 凭证

> 大白话：Chargebee 是做订阅制收费、发票管理的工具。n8n 想帮你自动处理客户账单，需要两样东西：Account Name（账号名，就是你的站点子域名，比如网址里 `chargebee.com` 前那段）和 API Key（密钥）。填进 n8n 就完事。

这些凭证可以用来验证以下节点的身份：

- [Chargebee](../app-nodes/n8n-nodes-base.chargebee.md)
- [Chargebee Trigger（触发器）](../trigger-nodes/n8n-nodes-base.chargebeetrigger.md)

## 准备工作

先注册一个 [Chargebee](https://www.chargebee.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Chargebee 官方 API 文档](https://apidocs.chargebee.com/docs/api/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **Account Name（账号名）**：也就是你的 Chargebee 站点名或子域名。例如完整站点名是 `https://n8n.chargebee.com`，那 Account Name 就是 `n8n`。
- 一个 **API Key（API 密钥）**：如何生成，请参考 [Chargebee 创建 API key 文档](https://www.chargebee.com/docs/api_keys.html#creating-an-api-key)。

更详细的说明可参考他们的 [API 身份验证文档](https://apidocs.chargebee.com/docs/api/auth?lang=curl)。
