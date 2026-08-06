---
title: SecurityScorecard 凭证
description: >-
  SecurityScorecard 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来验证
  SecurityScorecard。
contentType:
  - integration
  - reference
nodeTitle: SecurityScorecard 凭证
originalFilePath: integrations/builtin/credentials/securityscorecard.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/securityscorecard'
url: 'https://docs.n8n.io/integrations/builtin/credentials/securityscorecard'
layout:
  description:
    visible: false
---

# SecurityScorecard 凭证

> **大白话**：SecurityScorecard 是一个给公司做「安全评分」的服务，能告诉你某家公司的网络安全状况有多好。这篇文档教你怎么在 n8n 里配置凭证，让 n8n 能查询安全评分数据。

你可以使用这些凭证来验证以下节点：

- [SecurityScorecard](../app-nodes/n8n-nodes-base.securityscorecard.md)


## 前置条件

先创建一个 [SecurityScorecard](https://securityscorecard.com/) 账号。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参阅 [SecurityScorecard 的开发者文档](https://securityscorecard.readme.io/docs/integrate-ratings-platform-services) 和 [API 文档](https://securityscorecard.readme.io/reference/introduction)。

## 使用 API key（API 密钥）

要配置此凭证，你需要准备：

- **API Key（API 密钥）**：通过以下两种方式之一生成 API 密钥：
    * 作为普通用户：在 [**My Settings > API（我的设置 > API）**](https://platform.securityscorecard.io/#/my-settings/api) 中生成。更多信息请参阅 [获取 API 密钥](https://securityscorecard.readme.io/docs/getting-started#step-1-get-an-api-key)。
    * 作为机器人用户（bot user）：查看机器人用户并选择 **create token（创建令牌）**。更多信息请参阅 [使用机器人用户进行身份验证](https://securityscorecard.readme.io/docs/authentication#)。
